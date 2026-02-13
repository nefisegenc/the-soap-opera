'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Rituals = () => {
    const { t } = useLanguage();

    return (
        <section id="ritual" className="py-24 md:py-32 bg-bg-cream">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <p className="text-xs uppercase tracking-[0.3em] text-black/50 mb-4">{t.rituals.section_subtitle}</p>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
                            {t.rituals.section_title}
                        </h2>
                        <div className="w-16 h-px bg-primary/30 mx-auto"></div>
                    </div>

                    {/* Steps */}
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="w-20 h-20 rounded-full bg-white/50 flex items-center justify-center mx-auto mb-6">
                                <span className="font-heading text-3xl text-primary">1</span>
                            </div>
                            <h4 className="font-heading text-xl text-primary mb-3">{t.rituals.step1_title}</h4>
                            <p className="font-body text-black/70">{t.rituals.step1_description}</p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 rounded-full bg-white/50 flex items-center justify-center mx-auto mb-6">
                                <span className="font-heading text-3xl text-primary">2</span>
                            </div>
                            <h4 className="font-heading text-xl text-primary mb-3">{t.rituals.step2_title}</h4>
                            <p className="font-body text-black/70">{t.rituals.step2_description}</p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 rounded-full bg-white/50 flex items-center justify-center mx-auto mb-6">
                                <span className="font-heading text-3xl text-primary">3</span>
                            </div>
                            <h4 className="font-heading text-xl text-primary mb-3">{t.rituals.step3_title}</h4>
                            <p className="font-body text-black/70">{t.rituals.step3_description}</p>
                        </div>
                    </div>

                    {/* Quote */}
                    <div className="text-center mt-16 p-8 bg-white/30 rounded-2xl">
                        <p className="font-script text-2xl md:text-3xl text-primary">
                            {t.rituals.quote_en}
                        </p>
                        <p className="font-body text-sm text-black/50 mt-4">
                            {t.rituals.quote_tr}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Rituals;
