'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import trTranslations from '@/locales/tr.json';
import enTranslations from '@/locales/en.json';
import nlTranslations from '@/locales/nl.json';
import deTranslations from '@/locales/de.json';
import frTranslations from '@/locales/fr.json';
import esTranslations from '@/locales/es.json';
import itTranslations from '@/locales/it.json';

export type Language = 'tr' | 'en' | 'nl' | 'de' | 'fr' | 'es' | 'it';

// Shown in the language menu, each in its own language
export const LANGUAGES: { code: Language; label: string }[] = [
    { code: 'tr', label: 'Türkçe' },
    { code: 'en', label: 'English' },
    { code: 'nl', label: 'Nederlands' },
    { code: 'de', label: 'Deutsch' },
    { code: 'fr', label: 'Français' },
    { code: 'es', label: 'Español' },
    { code: 'it', label: 'Italiano' },
];

const isLanguage = (value: string | null | undefined): value is Language => LANGUAGES.some((lang) => lang.code === value);

type TranslationsType = typeof trTranslations;

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: TranslationsType;
}

const translations: Record<Language, TranslationsType> = {
    tr: trTranslations,
    en: enTranslations,
    nl: nlTranslations,
    de: deTranslations,
    fr: frTranslations,
    es: esTranslations,
    it: itTranslations,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>('tr');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Get language from localStorage on mount
        const savedLanguage = localStorage.getItem('language');
        if (isLanguage(savedLanguage)) {
            setLanguageState(savedLanguage);
        } else {
            // Auto-detect from the browser's preferred languages, falling back to English
            const preferred = (navigator.languages?.length ? navigator.languages : [navigator.language]).map((lang) => lang.split('-')[0]);
            setLanguageState(preferred.find(isLanguage) ?? 'en');
        }
        setMounted(true);
    }, []);

    // Keep <html lang> in sync so CSS uppercase follows each language's casing (e.g. Turkish i → İ)
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
