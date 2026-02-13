import type { Metadata } from 'next';
import { Playfair_Display, Lato, Caveat } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Soap Opera',
  description: 'Premium handcrafted soaps for the modern soul.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${lato.variable} ${caveat.variable} font-sans bg-bg-cream text-black antialiased scroll-smooth`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
