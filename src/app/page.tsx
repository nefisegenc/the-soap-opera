import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductSection from '@/components/ProductSection';
import About from '@/components/About';
import Sustainability from '@/components/Sustainability';
import Rituals from '@/components/Rituals';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductSection />
      <Sustainability />
      <Rituals />
      <About />
      <Footer />
    </main>
  );
}
