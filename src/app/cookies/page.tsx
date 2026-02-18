'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Cookie, Shield, Activity, Settings } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CookiePolicy() {
    const { t } = useLanguage();

    if (!t.cookies) {
        return null; // Prevent rendering if translations aren't loaded
    }

    const cookies = t.cookies;

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
                    <Cookie className="w-10 h-10 text-primary" />
                    <h1 className="font-heading text-5xl md:text-6xl text-primary">
                        {cookies.page_title}
                    </h1>
                </div>
                <p className="text-primary/60 text-sm mb-12">{cookies.effective_date}</p>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <p className="font-body text-primary/80 leading-relaxed mb-12 text-xl">
                        {cookies.intro}
                    </p>

                    {/* Section 1: Types of Cookies */}
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <Shield className="w-6 h-6 text-primary" />
                            <h2 className="font-heading text-3xl text-primary m-0">
                                {cookies.section1_title}
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white/40 p-6 rounded-2xl backdrop-blur-sm border border-primary/10">
                                <h3 className="font-heading text-xl text-primary mb-3">{cookies.section1_subtitle1}</h3>
                                <p className="font-body text-primary/80">{cookies.section1_desc1}</p>
                            </div>

                            <div className="bg-white/40 p-6 rounded-2xl backdrop-blur-sm border border-primary/10">
                                <h3 className="font-heading text-xl text-primary mb-3">{cookies.section1_subtitle2}</h3>
                                <p className="font-body text-primary/80 mb-4">{cookies.section1_desc2}</p>
                                <p className="font-body text-sm text-primary/70 mb-3">{cookies.section1_list_title}</p>
                                <ul className="space-y-2 font-body text-sm text-primary/80 list-none p-0">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                                        {cookies.section1_item1}
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                                        {cookies.section1_item2}
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                                        {cookies.section1_item3}
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                                        {cookies.section1_item4}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Managing Cookies */}
                    <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <Settings className="w-6 h-6 text-primary" />
                            <h2 className="font-heading text-3xl text-primary m-0">
                                {cookies.section2_title}
                            </h2>
                        </div>
                        <p className="font-body text-primary/80 mb-4">{cookies.section2_desc1}</p>
                        <p className="font-body text-primary/80">{cookies.section2_desc2}</p>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
