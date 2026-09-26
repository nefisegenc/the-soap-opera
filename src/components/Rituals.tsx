'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const Rituals = () => {
    const { t } = useLanguage();

    const steps = [
        { title: t.rituals.step1_title, description: t.rituals.step1_description },
        { title: t.rituals.step2_title, description: t.rituals.step2_description },
        { title: t.rituals.step3_title, description: t.rituals.step3_description },
    ];

    return (
        <section id="ritual" className="py-24 md:py-32 bg-bg-cream">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image */}
                    <div className="relative aspect-[4/3] md:aspect-[4/5] rounded-3xl overflow-hidden">
                        <Image
                            src="/assets/quiet-ritual-2.jpg"
                            alt=""
                            fill
                            sizes="(min-width: 768px) 480px, 100vw"
                            className="object-cover"
                        />
                    </div>

                    {/* Steps */}
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-olive-deep mb-4">{t.rituals.section_subtitle}</p>
                        <h2 className="font-heading text-4xl md:text-5xl font-medium text-primary mb-10">
                            {t.rituals.section_title}
                        </h2>

                        <ol className="border-b border-olive/20">
                            {steps.map(({ title, description }, idx) => (
                                <li key={title} className="flex gap-6 py-6 border-t border-olive/20">
                                    <span className="font-heading italic text-2xl text-olive lining-nums w-10 shrink-0">
                                        0{idx + 1}
                                    </span>
                                    <div>
                                        <h3 className="font-heading text-xl text-primary mb-1">{title}</h3>
                                        <p className="font-body text-ink-soft leading-relaxed">{description}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>

                        {/* Quote */}
                        <p className="font-script text-3xl text-olive mt-10">
                            {t.rituals.quote_en}
                        </p>
                        {t.rituals.quote_tr && (
                            <p className="font-body text-sm text-ink-muted mt-2">
                                {t.rituals.quote_tr}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Rituals;
