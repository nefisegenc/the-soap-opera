'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-bg-cream pt-32 pb-20">
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <p className="font-body text-xs md:text-sm text-black/60 mb-6 tracking-[0.3em] uppercase">
                    {t.hero.tagline}
                </p>
                <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-8 leading-[0.9]">
                    {t.hero.title_line1} <br /><span className="italic font-light">{t.hero.title_line2}</span>
                </h1>
                <p className="font-body text-base md:text-lg text-black/70 mb-12 max-w-xl mx-auto leading-relaxed">
                    {t.hero.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#products" className="px-10 py-4 bg-primary text-bg-cream rounded-full text-xs uppercase tracking-[0.2em] hover:bg-black/80 transition-all duration-300">
                        {t.hero.cta_explore}
                    </a>
                    <a href="#about" className="px-10 py-4 border border-primary text-primary rounded-full text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-bg-cream transition-all duration-300">
                        {t.hero.cta_story}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
