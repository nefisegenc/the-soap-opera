import type { Metadata } from 'next';
import { Playfair_Display, Lato, Caveat } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
  display: 'swap',
});

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-lato',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Soap Opera',
  description: 'Premium handcrafted soaps for the modern soul.',
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${playfair.variable} ${lato.variable} ${caveat.variable} font-body bg-bg-cream text-primary antialiased scroll-smooth`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
