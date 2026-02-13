'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const ProductSection = () => {
    const { t } = useLanguage();

    const products = [
        {
            id: 1,
            name: 'Quiet Ritual',
            subtitle: t.products.product_subtitle,
            description: t.products.product_description,
            weight: '100 g',
            image: '/assets/soap-lavender.png',
            features: [
                t.products.features.traditional,
                t.products.features.all_skin,
                t.products.features.vegan,
                t.products.features.dermatological
            ],
            responsiblePerson: 'The Soap Opera, Gaziantep, TR',
            origin: 'Made in Türkiye',
            batch: 'L26-001',
            pao: '12M',
        },
    ];

    return (
        <section id="products" className="py-24 md:py-32 bg-white/30">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-xs uppercase tracking-[0.3em] text-black/50 mb-4">{t.products.section_subtitle}</p>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
                        {t.products.section_title}
                    </h2>
                    <p className="font-body text-black/70 max-w-xl mx-auto">
                        {t.products.section_description}
                    </p>
                </div>

                {/* Product Card */}
                <div className="max-w-4xl mx-auto">
                    {products.map((product) => (
                        <div key={product.id} className="bg-bg-cream rounded-3xl overflow-hidden shadow-lg">
                            <div className="grid md:grid-cols-2 gap-0">
                                {/* Images - Stacked Vertically */}
                                <div className="flex flex-col">
                                    <div className="relative h-64 md:h-80">
                                        <Image
                                            src="/assets/soap-image-1.png"
                                            alt={product.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="relative h-64 md:h-80">
                                        <Image
                                            src="/assets/soap-image-2.png"
                                            alt={product.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <p className="text-xs uppercase tracking-[0.2em] text-black/50 mb-2">{product.subtitle}</p>
                                    <h3 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">{product.name}</h3>
                                    <p className="font-body text-black/70 mb-6 leading-relaxed">{product.description}</p>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {product.features.map((feature, idx) => (
                                            <span key={idx} className="text-xs bg-white/70 px-3 py-1 rounded-full text-black/60">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Ingredients & EU Label Info */}
                                    <div className="border-t border-black/10 pt-6 mb-6">
                                        <div className="mb-4">
                                            <p className="text-xs uppercase tracking-widest text-black/50 mb-2">{t.products.ingredients_title}</p>
                                            <p className="font-body text-sm text-black/70">Sodium Olivate, Aqua, Glycerin*</p>
                                            <p className="font-body text-xs text-black/50 mt-1 italic">{t.products.ingredients_note}</p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-[10px] uppercase tracking-wider text-black/40 mb-1">{t.products.origin}</p>
                                                <p className="font-body text-xs text-black/70">{product.origin}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase tracking-wider text-black/40 mb-1">{t.products.batch}</p>
                                                <p className="font-body text-xs text-black/70">{product.batch}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase tracking-wider text-black/40 mb-1">{t.products.responsible_person}</p>
                                                <p className="font-body text-xs text-black/70">{product.responsiblePerson}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase tracking-wider text-black/40 mb-1">{t.products.shelf_life}</p>
                                                <p className="font-body text-xs text-black/70">{product.pao}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="font-heading text-2xl text-primary">{product.weight}</span>
                                        <div className="flex flex-col items-end gap-1">
                                            <span className="px-8 py-3 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs uppercase tracking-widest">
                                                {t.products.coming_soon}
                                            </span>
                                            <span className="text-[10px] text-black/40 italic">
                                                {t.products.coming_soon_subtitle}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
