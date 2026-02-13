'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Globe } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '@/context/LanguageContext';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        setLanguage(language === 'tr' ? 'en' : 'tr');
    };

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
                        <Link href="#products" className="text-xs uppercase tracking-widest font-bold text-primary hover:text-gray-600 transition-colors">{t.navbar.products}</Link>
                        <Link href="#about" className="text-xs uppercase tracking-widest font-bold text-primary hover:text-gray-600 transition-colors">{t.navbar.about}</Link>
                        <Link href="#contact" className="text-xs uppercase tracking-widest font-bold text-primary hover:text-gray-600 transition-colors">{t.navbar.contact}</Link>
                    </div>

                    <div className="w-px h-6 bg-primary/20 hidden md:block"></div>

                    <div className="flex items-center space-x-6">
                        {/* Language Switcher */}
                        <button
                            onClick={toggleLanguage}
                            className="text-primary hover:text-gray-600 transition-colors font-bold text-xs uppercase tracking-widest flex items-center gap-2"
                            title={language === 'tr' ? 'Switch to English' : 'Türkçe\'ye geç'}
                        >
                            <Globe className="w-4 h-4" />
                            <span>{language.toUpperCase()}</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
