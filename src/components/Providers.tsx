'use client';

import { LanguageProvider } from '@/context/LanguageContext';
import { CartProvider } from '@/context/CartContext';
import CartDrawer from '@/components/CartDrawer';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <LanguageProvider>
            <CartProvider>
                {children}
                <CartDrawer />
            </CartProvider>
        </LanguageProvider>
    );
}
