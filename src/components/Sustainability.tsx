'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Sustainability = () => {
    const { t } = useLanguage();

    return (
        <section id="sustainability" className="py-24 md:py-32 bg-primary text-bg-cream">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Section Header */}
                    <p className="text-xs uppercase tracking-[0.3em] text-bg-cream/50 mb-4">{t.sustainability.section_subtitle}</p>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">
                        {t.sustainability.section_title}
                    </h2>
                    <div className="w-16 h-px bg-bg-cream/30 mx-auto mb-12"></div>

                    {/* Content */}
                    <div className="space-y-8 text-bg-cream/90 leading-relaxed">
                        <p className="text-lg md:text-xl font-body">
                            {t.sustainability.intro}
                        </p>

                        <blockquote className="text-2xl md:text-3xl font-heading italic my-12">
                            {t.sustainability.quote}
                        </blockquote>

                        <p className="font-body">
                            {t.sustainability.description}
                        </p>
                    </div>

                    {/* Values */}
                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        <div className="p-6">
                            <div className="w-12 h-12 rounded-full border border-bg-cream/30 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🌿</span>
                            </div>
                            <h4 className="font-heading text-lg mb-2">{t.sustainability.value1_title}</h4>
                            <p className="text-sm text-bg-cream/70">{t.sustainability.value1_description}</p>
                        </div>
                        <div className="p-6">
                            <div className="w-12 h-12 rounded-full border border-bg-cream/30 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🐰</span>
                            </div>
                            <h4 className="font-heading text-lg mb-2">{t.sustainability.value2_title}</h4>
                            <p className="text-sm text-bg-cream/70">{t.sustainability.value2_description}</p>
                        </div>
                        <div className="p-6">
                            <div className="w-12 h-12 rounded-full border border-bg-cream/30 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">♻️</span>
                            </div>
                            <h4 className="font-heading text-lg mb-2">{t.sustainability.value3_title}</h4>
                            <p className="text-sm text-bg-cream/70">{t.sustainability.value3_description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sustainability;
