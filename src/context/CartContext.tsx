'use client';

import React, { createContext, useCallback, useContext, useMemo, useState, useSyncExternalStore, ReactNode } from 'react';
import { MAX_QUANTITY, getProduct } from '@/lib/products';

export type CartItem = { id: string; quantity: number };

interface CartContextType {
    items: CartItem[];
    count: number;
    subtotal: number;
    isOpen: boolean;
    openCart: () => void;
    closeCart: () => void;
    addItem: (id: string, quantity?: number) => void;
    setQuantity: (id: string, quantity: number) => void;
    removeItem: (id: string) => void;
    clearCart: () => void;
}

const STORAGE_KEY = 'cart';
const listeners = new Set<() => void>();
let memoryCart = '[]';
let storageAvailable = true;

// The cart is kept in localStorage (with an in-memory fallback for private browsing).
// useSyncExternalStore renders an empty cart on the server, so hydration never mismatches.
const readCart = () => {
    if (!storageAvailable) return memoryCart;
    try {
        return localStorage.getItem(STORAGE_KEY) ?? '[]';
    } catch {
        return memoryCart;
    }
};

const writeCart = (items: CartItem[]) => {
    memoryCart = JSON.stringify(items);
    try {
        localStorage.setItem(STORAGE_KEY, memoryCart);
    } catch {
        storageAvailable = false;
    }
    listeners.forEach((listener) => listener());
};

const subscribe = (listener: () => void) => {
    listeners.add(listener);
    const onStorage = (event: StorageEvent) => {
        if (event.key === STORAGE_KEY) listener();
    };
    window.addEventListener('storage', onStorage);
    return () => {
        listeners.delete(listener);
        window.removeEventListener('storage', onStorage);
    };
};

const parseCart = (raw: string): CartItem[] => {
    try {
        const data: unknown = JSON.parse(raw);
        if (!Array.isArray(data)) return [];
        return data
            .filter((item) => typeof item?.id === 'string' && getProduct(item.id) && Number.isInteger(item.quantity) && item.quantity > 0)
            .map((item) => ({ id: item.id, quantity: Math.min(item.quantity, MAX_QUANTITY) }));
    } catch {
        return [];
    }
};

const updateCart = (change: (items: CartItem[]) => CartItem[]) => {
    writeCart(change(parseCart(readCart())));
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const raw = useSyncExternalStore(subscribe, readCart, () => '[]');
    const items = useMemo(() => parseCart(raw), [raw]);
    const [isOpen, setIsOpen] = useState(false);

    const openCart = useCallback(() => setIsOpen(true), []);
    const closeCart = useCallback(() => setIsOpen(false), []);
    const clearCart = useCallback(() => writeCart([]), []);

    const addItem = (id: string, quantity = 1) => {
        updateCart((current) => {
            const existing = current.find((item) => item.id === id);
            if (!existing) return [...current, { id, quantity: Math.min(quantity, MAX_QUANTITY) }];
            return current.map((item) => (item.id === id ? { ...item, quantity: Math.min(item.quantity + quantity, MAX_QUANTITY) } : item));
        });
    };

    const setQuantity = (id: string, quantity: number) => {
        updateCart((current) =>
            quantity < 1
                ? current.filter((item) => item.id !== id)
                : current.map((item) => (item.id === id ? { ...item, quantity: Math.min(quantity, MAX_QUANTITY) } : item))
        );
    };

    const removeItem = (id: string) => {
        updateCart((current) => current.filter((item) => item.id !== id));
    };

    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce((sum, item) => sum + (getProduct(item.id)?.unitAmount ?? 0) * item.quantity, 0);

    return (
        <CartContext.Provider value={{ items, count, subtotal, isOpen, openCart, closeCart, addItem, setQuantity, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
