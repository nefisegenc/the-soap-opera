'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-bg-cream pt-32 pb-20">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text */}
                    <div className="text-center md:text-left">
                        <p className="font-body text-xs md:text-sm text-olive-deep mb-6 tracking-[0.3em] uppercase">
                            {t.hero.tagline}
                        </p>
                        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium text-primary mb-8 leading-[1.05]">
                            {t.hero.title_line1} <br /><span className="italic font-normal text-olive">{t.hero.title_line2}</span>
                        </h1>
                        <p className="font-body text-base md:text-lg text-ink-soft mb-12 max-w-md mx-auto md:mx-0 leading-relaxed">
                            {t.hero.description}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center md:justify-start">
                            <a href="#products" className="px-10 py-4 whitespace-nowrap bg-olive text-foam rounded-full text-xs uppercase tracking-[0.2em] hover:bg-olive-deep transition-all duration-300">
                                {t.hero.cta_explore}
                            </a>
                            <a href="#about" className="px-10 py-4 whitespace-nowrap border border-primary/30 text-primary rounded-full text-xs uppercase tracking-[0.2em] hover:bg-olive hover:border-olive hover:text-foam transition-all duration-300">
                                {t.hero.cta_story}
                            </a>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden">
                        <Image
                            src="/assets/quiet-ritual-5.jpg"
                            alt="Quiet Ritual"
                            fill
                            preload
                            sizes="(min-width: 768px) 544px, 100vw"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
