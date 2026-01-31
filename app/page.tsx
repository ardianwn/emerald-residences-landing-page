import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import About from '@/components/sections/About';
import CTA from '@/components/sections/CTA';
import Contact from '@/components/sections/Contact';
import Features from '@/components/sections/Features';
import Gallery from '@/components/sections/Gallery';
import Hero from '@/components/sections/Hero';
import Location from '@/components/sections/Location';
import Properties from '@/components/sections/Properties';
import Testimonials from '@/components/sections/Testimonials';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Properties />
      <Gallery />
      <Testimonials />
      <Location />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
