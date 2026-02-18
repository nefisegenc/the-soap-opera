'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Instagram } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer id="contact" className="bg-primary text-bg-cream py-16">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <h3 className="font-heading text-2xl mb-4">The Soap Opera</h3>
                        <p className="font-body text-bg-cream/70 max-w-md mb-6 leading-relaxed">
                            {t.footer.brand_description}
                        </p>
                        <p className="font-script text-lg text-bg-cream/80 italic">
                            {t.footer.tagline}
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-heading text-sm uppercase tracking-widest mb-6">{t.footer.explore}</h4>
                        <ul className="space-y-3">
                            <li><Link href="#products" className="text-bg-cream/70 hover:text-bg-cream transition-colors text-sm">{t.footer.products}</Link></li>
                            <li><Link href="#about" className="text-bg-cream/70 hover:text-bg-cream transition-colors text-sm">{t.footer.about}</Link></li>
                            <li><Link href="#sustainability" className="text-bg-cream/70 hover:text-bg-cream transition-colors text-sm">{t.footer.sustainability}</Link></li>
                            <li><Link href="#ritual" className="text-bg-cream/70 hover:text-bg-cream transition-colors text-sm">{t.footer.ritual}</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-heading text-sm uppercase tracking-widest mb-6">{t.footer.contact}</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="mailto:info@thesoapopera.co" className="flex items-center gap-3 text-bg-cream/70 hover:text-bg-cream transition-colors text-sm group">
                                    <Mail className="w-4 h-4" />
                                    <span>info@thesoapopera.co</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/thesoapopera.co" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-bg-cream/70 hover:text-bg-cream transition-colors text-sm group">
                                    <Instagram className="w-4 h-4" />
                                    <span>@thesoapopera.co</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-bg-cream/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-bg-cream/50 text-xs">
                        {t.footer.copyright}
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-2">
                        <Link href="/privacy" className="text-bg-cream/50 hover:text-bg-cream text-xs transition-colors">
                            {t.footer.privacy}
                        </Link>
                        <Link href="/cookies" className="text-bg-cream/50 hover:text-bg-cream text-xs transition-colors">
                            {t.footer.cookies}
                        </Link>
                        <Link href="/kvkk" className="text-bg-cream/50 hover:text-bg-cream text-xs transition-colors">
                            {t.footer.kvkk}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
