'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShoppingBag } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { QUIET_RITUAL } from '@/lib/products';

const ProductGallery = ({ images, alt }: { images: string[]; alt: string }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="flex flex-col">
            <div className="relative aspect-[4/5] md:aspect-auto md:flex-1">
                <Image
                    src={images[activeIndex]}
                    alt={alt}
                    fill
                    sizes="(min-width: 768px) 448px, 100vw"
                    className="object-cover"
                />
            </div>
            <div className="flex flex-wrap justify-center gap-2 p-4">
                {images.map((src, idx) => (
                    <button
                        key={src}
                        type="button"
                        onClick={() => setActiveIndex(idx)}
                        aria-label={`${alt} ${idx + 1}`}
                        aria-pressed={idx === activeIndex}
                        className={`relative w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden transition-opacity ${idx === activeIndex ? 'ring-2 ring-olive ring-offset-2 ring-offset-bg-cream' : 'opacity-60 hover:opacity-100'}`}
                    >
                        <Image src={src} alt="" fill sizes="56px" className="object-cover" />
                    </button>
                ))}
            </div>
        </div>
    );
};

const ProductSection = () => {
    const { language, t } = useLanguage();
    const { addItem, openCart } = useCart();

    const products = [
        {
            ...QUIET_RITUAL,
            subtitle: t.products.product_subtitle,
            description: t.products.product_description,
            features: [
                t.products.features.traditional,
                t.products.features.all_skin,
                t.products.features.vegan,
                t.products.features.dermatological
            ],
            responsiblePerson: 'The Soap Opera, Gaziantep, TR',
            origin: 'Made in Türkiye',
            batch: 'L26-001',
            pao: t.products.product_shelf_life,
        },
    ];

    const priceFormatter = new Intl.NumberFormat(language, { style: 'currency', currency: 'EUR' });

    return (
        <section id="products" className="py-24 md:py-32 bg-white/30">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-xs uppercase tracking-[0.3em] text-olive-deep mb-4">{t.products.section_subtitle}</p>
                    <h2 className="font-heading text-4xl md:text-5xl font-medium text-primary mb-6">
                        {t.products.section_title}
                    </h2>
                    <p className="font-body text-ink-soft max-w-xl mx-auto">
                        {t.products.section_description}
                    </p>
                </div>

                {/* Product Card */}
                <div className="max-w-4xl mx-auto">
                    {products.map((product) => (
                        <div key={product.id} className="bg-bg-cream rounded-3xl overflow-hidden shadow-lg">
                            <div className="grid md:grid-cols-2 gap-0">
                                {/* Images */}
                                <ProductGallery images={product.images} alt={product.name} />

                                {/* Content */}
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <p className="text-xs uppercase tracking-[0.2em] text-olive-deep mb-2">{product.subtitle}</p>
                                    <h3 className="font-heading text-3xl md:text-4xl font-medium text-primary mb-4">{product.name}</h3>
                                    <p className="font-body text-ink-soft mb-6 leading-relaxed">{product.description}</p>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {product.features.map((feature, idx) => (
                                            <span key={idx} className="text-xs bg-olive/10 px-3 py-1 rounded-full text-olive-deep">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Ingredients & EU Label Info */}
                                    <div className="border-t border-olive/20 pt-6 mb-6">
                                        <div className="mb-4">
                                            <p className="text-xs uppercase tracking-widest text-ink-muted mb-2">{t.products.ingredients_title}</p>
                                            <p className="font-body text-sm text-ink-soft">Sodium Olivate 81%, Aqua, Glycerin*</p>
                                            <p className="font-body text-xs text-ink-muted mt-1 italic">{t.products.ingredients_note}</p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-[10px] uppercase tracking-wider text-ink-muted mb-1">{t.products.origin}</p>
                                                <p className="font-body text-xs text-ink-soft">{product.origin}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase tracking-wider text-ink-muted mb-1">{t.products.batch}</p>
                                                <p className="font-body text-xs text-ink-soft">{product.batch}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase tracking-wider text-ink-muted mb-1">{t.products.responsible_person}</p>
                                                <p className="font-body text-xs text-ink-soft">{product.responsiblePerson}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase tracking-wider text-ink-muted mb-1">{t.products.shelf_life}</p>
                                                <p className="font-body text-xs text-ink-soft">{product.pao}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex flex-col">
                                            <span className="font-heading text-2xl text-primary lining-nums">{priceFormatter.format(product.unitAmount / 100)}</span>
                                            <span className="font-body text-sm text-ink-muted">{product.weight}</span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                addItem(product.id);
                                                openCart();
                                            }}
                                            className="flex items-center gap-2 px-8 py-4 bg-olive text-foam rounded-full text-xs uppercase tracking-[0.2em] hover:bg-olive-deep transition-colors duration-300"
                                        >
                                            <ShoppingBag className="w-4 h-4" />
                                            {t.products.add_to_cart}
                                        </button>
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
