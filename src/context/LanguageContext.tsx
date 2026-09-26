'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import trTranslations from '@/locales/tr.json';
import enTranslations from '@/locales/en.json';

type Language = 'tr' | 'en';

type TranslationsType = typeof trTranslations;

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: TranslationsType;
}

const translations: Record<Language, TranslationsType> = {
    tr: trTranslations,
    en: enTranslations,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>('tr');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Get language from localStorage on mount
        const savedLanguage = localStorage.getItem('language') as Language;
        if (savedLanguage && (savedLanguage === 'tr' || savedLanguage === 'en')) {
            setLanguageState(savedLanguage);
        } else {
            // Auto-detect browser language
            const browserLang = navigator.language.split('-')[0];
            if (browserLang === 'tr') {
                setLanguageState('tr');
            } else {
                setLanguageState('en');
            }
        }
        setMounted(true);
    }, []);

    // Keep <html lang> in sync so CSS uppercase uses Turkish casing (i → İ)
    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    const t = translations[language];

    // Prevent hydration mismatch by not rendering until mounted
    if (!mounted) {
        return (
            <LanguageContext.Provider value={{ language: 'tr', setLanguage, t: translations.tr }}>
                {children}
            </LanguageContext.Provider>
        );
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
