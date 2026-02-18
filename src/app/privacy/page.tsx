'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Database, Scale, Share2, UserCheck, Mail } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
    const { t } = useLanguage();

    if (!t.privacy) {
        return null; // Prevent rendering if translations aren't loaded
    }

    const privacy = t.privacy;

    return (
        <main className="bg-bg-cream min-h-screen">
            <Navbar />

            <div className="container mx-auto px-6 pt-36 pb-24 max-w-4xl">
                {/* Back Button */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 group cursor-pointer relative z-10"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-body">{privacy.back_to_home}</span>
                </Link>

                {/* Title */}
                <div className="flex items-center gap-4 mb-4">
                    <ShieldCheck className="w-10 h-10 text-primary" />
                    <h1 className="font-heading text-5xl md:text-6xl text-primary">
                        {privacy.page_title}
                    </h1>
                </div>
                <p className="text-primary/60 text-sm mb-12">{privacy.effective_date}</p>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <p className="font-body text-primary/80 leading-relaxed mb-12 text-xl">
                        {privacy.intro}
                    </p>

                    <div className="space-y-16">
                        {/* Section 1 */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <Database className="w-6 h-6 text-primary" />
                                <h2 className="font-heading text-2xl text-primary m-0">
                                    {privacy.section1_title}
                                </h2>
                            </div>
                            <div className="bg-white/40 p-8 rounded-2xl border border-primary/10 backdrop-blur-sm">
                                <p className="font-body text-primary/80 mb-6">{privacy.section1_intro}</p>
                                <ul className="grid md:grid-cols-2 gap-3 list-none p-0">
                                    {[privacy.section1_item1, privacy.section1_item2, privacy.section1_item3, privacy.section1_item4, privacy.section1_item5, privacy.section1_item6].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 font-body text-primary/80">
                                            <div className="w-1.5 h-1.5 bg-primary/40 rounded-full"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <ShieldCheck className="w-6 h-6 text-primary" />
                                <h2 className="font-heading text-2xl text-primary m-0">
                                    {privacy.section2_title}
                                </h2>
                            </div>
                            <div className="bg-white/40 p-8 rounded-2xl border border-primary/10 backdrop-blur-sm">
                                <p className="font-body text-primary/80 mb-4">{privacy.section2_intro}</p>
                                <p className="font-body font-bold text-primary mb-4">{privacy.section2_collects}</p>
                                <ul className="grid md:grid-cols-2 gap-3 list-none p-0 mb-8">
                                    {[privacy.section2_item1, privacy.section2_item2, privacy.section2_item3, privacy.section2_item4, privacy.section2_item5].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 font-body text-primary/80">
                                            <div className="w-1.5 h-1.5 bg-primary/40 rounded-full"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="space-y-4 font-body text-primary/80 border-t border-primary/5 pt-6">
                                    <p>{privacy.section2_paragraph1}</p>
                                    <p>{privacy.section2_paragraph2}</p>
                                    <p className="text-sm italic">{privacy.section2_paragraph3}</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <Scale className="w-6 h-6 text-primary" />
                                <h2 className="font-heading text-2xl text-primary m-0">
                                    {privacy.section3_title}
                                </h2>
                            </div>
                            <div className="bg-white/40 p-8 rounded-2xl border border-primary/10 backdrop-blur-sm">
                                <p className="font-body text-primary/80 mb-6">{privacy.section3_intro}</p>
                                <ul className="space-y-3 list-none p-0">
                                    {[privacy.section3_item1, privacy.section3_item2, privacy.section3_item3, privacy.section3_item4].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 font-body text-primary/80">
                                            <div className="w-1.5 h-1.5 bg-primary/40 rounded-full"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <Share2 className="w-6 h-6 text-primary" />
                                <h2 className="font-heading text-2xl text-primary m-0">
                                    {privacy.section4_title}
                                </h2>
                            </div>
                            <div className="bg-white/40 p-8 rounded-2xl border border-primary/10 backdrop-blur-sm">
                                <p className="font-body text-primary/80 mb-6">{privacy.section4_intro}</p>
                                <ul className="grid md:grid-cols-2 gap-3 list-none p-0">
                                    {[privacy.section4_item1, privacy.section4_item2, privacy.section4_item3, privacy.section4_item4].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 font-body text-primary/80">
                                            <div className="w-1.5 h-1.5 bg-primary/40 rounded-full"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* Section 5 */}
                        <section className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                            <div className="flex items-center gap-3 mb-6">
                                <UserCheck className="w-6 h-6 text-primary" />
                                <h2 className="font-heading text-2xl text-primary m-0">
                                    {privacy.section5_title}
                                </h2>
                            </div>
                            <p className="font-body text-primary/80 mb-8">{privacy.section5_intro}</p>
                            <ul className="grid md:grid-cols-2 gap-4 list-none p-0 mb-12">
                                {[privacy.section5_item1, privacy.section5_item2, privacy.section5_item3, privacy.section5_item4, privacy.section5_item5].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 px-4 py-2 bg-white/60 rounded-xl font-body text-primary/80 text-sm">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-col items-center justify-center p-8 bg-white/40 rounded-2xl border border-primary/5 text-center">
                                <p className="font-heading text-lg text-primary mb-4">{privacy.section5_contact}</p>
                                <a href={`mailto:${privacy.section5_email}`} className="flex items-center gap-3 text-primary font-bold text-2xl hover:underline group">
                                    <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                    {privacy.section5_email}
                                </a>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
