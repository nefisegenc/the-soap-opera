'use client';

import React from 'react';
import Image from 'next/image';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';

const CartDrawer = () => {
    const { items, isOpen, closeCart, updateQuantity, removeItem, totalItems } = useCart();
    const { t } = useLanguage();

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
                    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                onClick={closeCart}
            />

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-full max-w-md bg-bg-cream z-[70] shadow-2xl transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-black/10">
                        <div className="flex items-center gap-3">
                            <ShoppingBag className="w-5 h-5 text-primary" />
                            <h2 className="font-heading text-xl text-primary">
                                {t.common.cart} ({totalItems})
                            </h2>
                        </div>
                        <button
                            onClick={closeCart}
                            className="p-2 hover:bg-black/5 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5 text-primary" />
                        </button>
                    </div>

                    {/* Items */}
                    <div className="flex-1 overflow-y-auto p-6">
                        {items.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full text-center">
                                <ShoppingBag className="w-16 h-16 text-black/15 mb-4" />
                                <p className="font-body text-black/50 text-sm">
                                    {t.cart.empty}
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {items.map(item => (
                                    <div
                                        key={item.id}
                                        className="flex gap-4 bg-white/50 rounded-2xl p-4"
                                    >
                                        {/* Product Image */}
                                        <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        {/* Product Info */}
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-heading text-sm text-primary font-bold truncate">
                                                {item.name}
                                            </h4>
                                            <p className="text-xs text-black/50 mb-2">
                                                {item.subtitle} · {item.weight}
                                            </p>

                                            {/* Quantity Controls */}
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3 bg-white rounded-full px-2 py-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-1 hover:bg-black/5 rounded-full transition-colors"
                                                    >
                                                        <Minus className="w-3 h-3 text-primary" />
                                                    </button>
                                                    <span className="font-body text-sm text-primary w-4 text-center">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-1 hover:bg-black/5 rounded-full transition-colors"
                                                    >
                                                        <Plus className="w-3 h-3 text-primary" />
                                                    </button>
                                                </div>

                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-xs text-black/40 hover:text-red-500 transition-colors"
                                                >
                                                    {t.cart.remove}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    {items.length > 0 && (
                        <div className="p-6 border-t border-black/10 space-y-4">
                            <button className="w-full px-8 py-4 bg-primary text-bg-cream rounded-full text-xs uppercase tracking-widest hover:bg-black/80 transition-all">
                                {t.cart.checkout}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CartDrawer;
