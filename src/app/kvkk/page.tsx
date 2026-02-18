'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, Shield, Scale, Users, Mail } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function KVKKPage() {
    const { t } = useLanguage();

    if (!t.kvkk) {
        return null;
    }

    const kvkk = t.kvkk;

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
                    <span className="text-sm font-body">{t.privacy.back_to_home}</span>
                </Link>

                {/* Title */}
                <div className="flex items-center gap-4 mb-4">
                    <FileText className="w-10 h-10 text-primary" />
                    <h1 className="font-heading text-4xl md:text-5xl text-primary leading-tight">
                        {kvkk.page_title}
                    </h1>
                </div>
                <p className="text-primary/80 font-bold mb-8">{kvkk.data_controller}</p>
                <div className="prose prose-lg max-w-none mb-12">
                    <p className="font-body text-primary/80 leading-relaxed">
                        {kvkk.intro}
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-12">
                    {/* Section 1 */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <Users className="w-6 h-6 text-primary" />
                            <h2 className="font-heading text-2xl text-primary m-0">{kvkk.section1_title}</h2>
                        </div>
                        <div className="bg-white/40 p-8 rounded-2xl border border-primary/10">
                            <p className="font-body text-primary/80 mb-4">{kvkk.section1_intro}</p>
                            <ul className="grid md:grid-cols-2 gap-3 list-none p-0">
                                {[kvkk.section1_item1, kvkk.section1_item2, kvkk.section1_item3, kvkk.section1_item4, kvkk.section1_item5, kvkk.section1_item6].map((item, idx) => (
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
                            <Shield className="w-6 h-6 text-primary" />
                            <h2 className="font-heading text-2xl text-primary m-0">{kvkk.section2_title}</h2>
                        </div>
                        <div className="bg-white/40 p-8 rounded-2xl border border-primary/10">
                            <p className="font-body text-primary/80 mb-4">{kvkk.section2_intro}</p>
                            <ul className="space-y-3 list-none p-0 mb-4">
                                {[kvkk.section2_item1, kvkk.section2_item2, kvkk.section2_item3, kvkk.section2_item4, kvkk.section2_item5].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 font-body text-primary/80">
                                        <div className="w-1.5 h-1.5 bg-primary/40 rounded-full"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="font-body text-primary/80 italic text-sm">{kvkk.section2_outro}</p>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <Scale className="w-6 h-6 text-primary" />
                            <h2 className="font-heading text-2xl text-primary m-0">{kvkk.section3_title}</h2>
                        </div>
                        <div className="bg-white/40 p-8 rounded-2xl border border-primary/10">
                            <p className="font-body text-primary/80 mb-4">{kvkk.section3_intro}</p>
                            <ul className="space-y-3 list-none p-0 mb-4">
                                {[kvkk.section3_item1, kvkk.section3_item2, kvkk.section3_item3].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 font-body text-primary/80">
                                        <div className="w-1.5 h-1.5 bg-primary/40 rounded-full"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="font-body text-primary/80 italic text-sm">{kvkk.section3_outro}</p>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="font-heading text-2xl text-primary mb-6">{kvkk.section4_title}</h2>
                        <div className="bg-white/40 p-8 rounded-2xl border border-primary/10">
                            <p className="font-body text-primary/80 mb-4">{kvkk.section4_intro}</p>
                            <ul className="grid md:grid-cols-2 gap-3 list-none p-0 mb-4">
                                {[kvkk.section4_item1, kvkk.section4_item2, kvkk.section4_item3, kvkk.section4_item4].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 font-body text-primary/80">
                                        <div className="w-1.5 h-1.5 bg-primary/40 rounded-full"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="font-body text-primary/80 text-sm">{kvkk.section4_outro}</p>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                        <h2 className="font-heading text-2xl text-primary mb-6">{kvkk.section5_title}</h2>
                        <p className="font-body text-primary/80 mb-6">{kvkk.section5_intro}</p>
                        <ul className="grid md:grid-cols-2 gap-4 list-none p-0 mb-8">
                            {[kvkk.section5_item1, kvkk.section5_item2, kvkk.section5_item3, kvkk.section5_item4].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 px-4 py-2 bg-white/60 rounded-xl font-body text-primary/80 text-sm">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col items-center justify-center p-6 bg-white/40 rounded-2xl">
                            <p className="font-heading text-lg text-primary mb-4">{kvkk.section5_contact_intro || kvkk.section5_outro}</p>
                            <a href={`mailto:${kvkk.section5_email}`} className="flex items-center gap-3 text-primary font-bold text-xl hover:underline">
                                <Mail className="w-6 h-6" />
                                {kvkk.section5_email}
                            </a>
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
