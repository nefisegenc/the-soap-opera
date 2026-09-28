'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, Globe, ShoppingBag } from 'lucide-react';
import Logo from './Logo';
import { LANGUAGES, useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
    const languageMenuRef = useRef<HTMLDivElement>(null);
    const { language, setLanguage, t } = useLanguage();
    const { count, openCart } = useCart();

    // Close the language menu on outside click or Escape
    useEffect(() => {
        if (!languageMenuOpen) return;
        const onPointerDown = (event: MouseEvent) => {
            if (!languageMenuRef.current?.contains(event.target as Node)) setLanguageMenuOpen(false);
        };
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setLanguageMenuOpen(false);
        };
        document.addEventListener('mousedown', onPointerDown);
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('mousedown', onPointerDown);
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [languageMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${scrolled
                ? 'py-0 bg-bg-cream/95 backdrop-blur-md shadow-sm'
                : 'py-1 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <div className={`${scrolled ? 'scale-[0.35] origin-left -my-8' : 'scale-[0.55] origin-left -my-4'} transition-all duration-300`}>
                        <Link href="/">
                            <Logo />
                        </Link>
                    </div>
                </div>

                {/* Menü Linkleri */}
                <div className="flex items-center space-x-10">
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link href="/#products" className="text-xs uppercase tracking-widest font-bold text-primary hover:text-olive transition-colors">{t.navbar.products}</Link>
                        <Link href="/#about" className="text-xs uppercase tracking-widest font-bold text-primary hover:text-olive transition-colors">{t.navbar.about}</Link>
                        <Link href="/#contact" className="text-xs uppercase tracking-widest font-bold text-primary hover:text-olive transition-colors">{t.navbar.contact}</Link>
                    </div>

                    <div className="w-px h-6 bg-olive/30 hidden md:block"></div>

                    <div className="flex items-center space-x-6">
                        {/* Language Switcher */}
                        <div ref={languageMenuRef} className="relative">
                            <button
                                type="button"
                                onClick={() => setLanguageMenuOpen((open) => !open)}
                                aria-expanded={languageMenuOpen}
                                aria-controls="language-menu"
                                aria-label={t.navbar.language}
                                className="text-primary hover:text-olive transition-colors font-bold text-xs uppercase tracking-widest flex items-center gap-2"
                            >
                                <Globe className="w-4 h-4" />
                                <span>{language.toUpperCase()}</span>
                                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${languageMenuOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {languageMenuOpen && (
                                <ul
                                    id="language-menu"
                                    className="absolute right-0 top-full mt-3 w-44 py-2 bg-bg-cream border border-olive/20 rounded-2xl shadow-lg"
                                >
                                    {LANGUAGES.map(({ code, label }) => (
                                        <li key={code}>
                                            <button
                                                type="button"
                                                lang={code}
                                                aria-current={code === language}
                                                onClick={() => {
                                                    setLanguage(code);
                                                    setLanguageMenuOpen(false);
                                                }}
                                                className={`w-full flex items-center justify-between px-4 py-2 font-body text-sm transition-colors hover:bg-olive/10 ${code === language ? 'text-olive-deep font-bold' : 'text-primary'}`}
                                            >
                                                <span>{label}</span>
                                                <span className="text-[10px] uppercase tracking-widest text-ink-muted">{code}</span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Cart */}
                        <button
                            type="button"
                            onClick={openCart}
                            aria-label={`${t.cart.open} (${count})`}
                            className="relative text-primary hover:text-olive transition-colors"
                        >
                            <ShoppingBag className="w-5 h-5" />
                            {count > 0 && (
                                <span className="absolute -top-2 -right-2.5 min-w-[18px] h-[18px] px-1 rounded-full bg-olive text-foam text-[10px] font-bold flex items-center justify-center lining-nums">
                                    {count}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
