'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CheckoutSuccess() {
    const { t } = useLanguage();
    const { clearCart } = useCart();

    // Stripe only sends customers here after a successful payment
    useEffect(() => {
        clearCart();
    }, [clearCart]);

    return (
        <main className="bg-bg-cream min-h-screen flex flex-col">
            <Navbar />

            <div className="flex-1 container mx-auto px-6 pt-40 pb-24 max-w-xl text-center">
                <div className="w-16 h-16 rounded-full bg-olive/10 text-olive flex items-center justify-center mx-auto mb-8">
                    <Check className="w-7 h-7" />
                </div>
                <h1 className="font-heading text-4xl md:text-5xl font-medium text-primary mb-6">
                    {t.checkout.success_title}
                </h1>
                <p className="font-body text-lg text-ink-soft mb-10 leading-relaxed">
                    {t.checkout.success_text}
                </p>
                <Link
                    href="/"
                    className="inline-block px-10 py-4 bg-olive text-foam rounded-full text-xs uppercase tracking-[0.2em] hover:bg-olive-deep transition-colors duration-300"
                >
                    {t.checkout.back_home}
                </Link>
            </div>

            <Footer />
        </main>
    );
}
