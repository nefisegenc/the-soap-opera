'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-24 md:py-32 bg-bg-cream">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <p className="text-xs uppercase tracking-[0.3em] text-olive-deep mb-4">{t.about.section_subtitle}</p>
                        <h2 className="font-heading text-4xl md:text-5xl font-medium text-primary mb-6">
                            {t.about.section_title}
                        </h2>
                        <div className="w-16 h-px bg-olive/40 mx-auto"></div>
                    </div>

                    {/* Story Content */}
                    <div className="space-y-8 text-ink-soft leading-relaxed">
                        <div className="space-y-3">
                            <p className="text-lg md:text-xl font-body" dangerouslySetInnerHTML={{
                                __html: t.about.intro.replace('<span>', '<span class="font-heading text-2xl text-primary">')
                            }} />
                            <p className="font-heading italic text-lg md:text-xl text-olive">
                                {t.about.origin}
                            </p>
                        </div>

                        <p className="font-body">
                            {t.about.paragraph1}
                        </p>

                        <p className="font-body" dangerouslySetInnerHTML={{ __html: t.about.paragraph2 }} />

                        <blockquote className="border-l-4 border-olive/40 pl-6 py-4 my-8 italic text-xl font-heading text-olive-deep">
                            {t.about.quote}
                        </blockquote>

                        <p className="font-body">
                            {t.about.paragraph3}
                        </p>

                        <p className="font-body" dangerouslySetInnerHTML={{ __html: t.about.paragraph4 }} />

                        <div className="bg-white/50 rounded-2xl p-8 my-12">
                            <p className="font-body text-center" dangerouslySetInnerHTML={{ __html: t.about.highlight }} />
                        </div>

                        <p className="font-body" dangerouslySetInnerHTML={{ __html: t.about.paragraph5 }} />

                        <div className="text-center mt-16 space-y-2">
                            <p className="font-heading text-xl text-olive italic">{t.about.closing_line1}</p>
                            <p className="font-heading text-xl text-olive italic">{t.about.closing_line2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
