import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Countries } from './components/Countries';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { UniversitySlider } from './components/UniversitySlider';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { CTA } from './components/CTA';
import { Map } from './components/Map';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    // Remove hash from URL on page load if present
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      const element = document.getElementById(hash);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
      // Remove hash from URL without triggering scroll
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1a2e] overflow-x-hidden">
      <Header />
      <Hero />
      <Countries />
      <Services />
      <WhyUs />
      <UniversitySlider />
      <Process />
      <Contact />
      <CTA />
      <Map />
      <Footer />
    </div>
  );
}

