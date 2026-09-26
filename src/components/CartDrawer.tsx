'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Lock, Minus, Plus, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { MAX_QUANTITY, getProduct } from '@/lib/products';

const CartDrawer = () => {
    const { items, subtotal, isOpen, closeCart, setQuantity, removeItem } = useCart();
    const { language, t } = useLanguage();
    const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'unavailable'>('idle');
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    const priceFormatter = new Intl.NumberFormat(language, { style: 'currency', currency: 'EUR' });
    const formatPrice = (cents: number) => priceFormatter.format(cents / 100);

    useEffect(() => {
        if (!isOpen) return;
        closeButtonRef.current?.focus();
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') closeCart();
        };
        document.addEventListener('keydown', onKeyDown);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, closeCart]);

    // Coming back from Stripe with the browser's back button restores this page from cache
    useEffect(() => {
        const onPageShow = (event: PageTransitionEvent) => {
            if (event.persisted) setStatus('idle');
        };
        window.addEventListener('pageshow', onPageShow);
        return () => window.removeEventListener('pageshow', onPageShow);
    }, []);

    const handleCheckout = async () => {
        setStatus('loading');
        try {
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ items, locale: language }),
            });
            // 503: payments are not configured yet (no Stripe key), retrying won't help
            if (response.status === 503) {
                setStatus('unavailable');
                return;
            }
            const data = await response.json();
            if (!response.ok || !data.url) throw new Error(data.error);
            window.location.assign(data.url);
        } catch {
            setStatus('error');
        }
    };

    return (
        <div className={`fixed inset-0 z-[60] ${isOpen ? '' : 'pointer-events-none'}`} inert={!isOpen}>
            {/* Backdrop */}
            <div
                onClick={closeCart}
                className={`absolute inset-0 bg-primary/30 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
            />

            {/* Panel */}
            <aside
                role="dialog"
                aria-modal="true"
                aria-label={t.cart.title}
                className={`absolute right-0 top-0 h-full w-full max-w-md bg-bg-cream flex flex-col transition-transform duration-300 ${isOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'}`}
            >
                <div className="flex items-center justify-between px-6 py-5 border-b border-olive/20">
                    <h2 className="font-heading text-2xl text-primary">{t.cart.title}</h2>
                    <button
                        ref={closeButtonRef}
                        type="button"
                        onClick={closeCart}
                        aria-label={t.cart.close}
                        className="p-2 -mr-2 text-primary hover:text-olive transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {items.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
                        <p className="font-body text-ink-soft mb-6">{t.cart.empty}</p>
                        <Link
                            href="/#products"
                            onClick={closeCart}
                            className="px-8 py-3 border border-primary/30 text-primary rounded-full text-xs uppercase tracking-[0.2em] hover:bg-olive hover:border-olive hover:text-foam transition-all duration-300"
                        >
                            {t.cart.browse}
                        </Link>
                    </div>
                ) : (
                    <>
                        <ul className="flex-1 overflow-y-auto px-6 divide-y divide-olive/15">
                            {items.map((item) => {
                                const product = getProduct(item.id);
                                if (!product) return null;
                                return (
                                    <li key={item.id} className="flex gap-4 py-5">
                                        <div className="relative w-20 h-24 rounded-xl overflow-hidden shrink-0">
                                            <Image src={product.images[0]} alt={product.name} fill sizes="80px" className="object-cover" />
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <div className="flex justify-between gap-4">
                                                <div>
                                                    <p className="font-heading text-lg text-primary">{product.name}</p>
                                                    <p className="font-body text-sm text-ink-muted">{product.weight}</p>
                                                </div>
                                                <p className="font-heading text-primary lining-nums">{formatPrice(product.unitAmount * item.quantity)}</p>
                                            </div>
                                            <div className="mt-auto flex items-center justify-between">
                                                <div className="flex items-center border border-olive/30 rounded-full">
                                                    <button
                                                        type="button"
                                                        onClick={() => setQuantity(item.id, item.quantity - 1)}
                                                        aria-label={t.cart.decrease}
                                                        className="p-2 text-primary hover:text-olive transition-colors"
                                                    >
                                                        <Minus className="w-3.5 h-3.5" />
                                                    </button>
                                                    <span className="w-6 text-center font-body text-sm text-primary lining-nums">{item.quantity}</span>
                                                    <button
                                                        type="button"
                                                        onClick={() => setQuantity(item.id, item.quantity + 1)}
                                                        disabled={item.quantity >= MAX_QUANTITY}
                                                        aria-label={t.cart.increase}
                                                        className="p-2 text-primary hover:text-olive transition-colors disabled:opacity-30"
                                                    >
                                                        <Plus className="w-3.5 h-3.5" />
                                                    </button>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => removeItem(item.id)}
                                                    className="font-body text-xs text-ink-muted underline underline-offset-4 hover:text-olive transition-colors"
                                                >
                                                    {t.cart.remove}
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="px-6 py-6 border-t border-olive/20 space-y-4">
                            <div className="flex justify-between items-baseline">
                                <span className="text-xs uppercase tracking-[0.2em] text-olive-deep">{t.cart.subtotal}</span>
                                <span className="font-heading text-2xl text-primary lining-nums">{formatPrice(subtotal)}</span>
                            </div>
                            <p className="font-body text-xs text-ink-muted">{t.cart.shipping_note}</p>
                            <button
                                type="button"
                                onClick={handleCheckout}
                                disabled={status === 'loading'}
                                className="w-full py-4 bg-olive text-foam rounded-full text-xs uppercase tracking-[0.2em] hover:bg-olive-deep transition-colors duration-300 disabled:opacity-60"
                            >
                                {status === 'loading' ? t.cart.redirecting : t.cart.checkout}
                            </button>
                            {(status === 'error' || status === 'unavailable') && (
                                <p role="alert" className="font-body text-sm text-red-800 text-center">
                                    {status === 'unavailable' ? t.cart.unavailable : t.cart.error}
                                </p>
                            )}
                            <p className="flex items-center justify-center gap-2 font-body text-xs text-ink-muted">
                                <Lock className="w-3.5 h-3.5" />
                                {t.cart.secure}
                            </p>
                        </div>
                    </>
                )}
            </aside>
        </div>
    );
};

export default CartDrawer;
