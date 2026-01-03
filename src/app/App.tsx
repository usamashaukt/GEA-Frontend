import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Countries } from './components/Countries';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { CTA } from './components/CTA';
import { Map } from './components/Map';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#1a1a2e]">
      <Header />
      <Hero />
      <Countries />
      <Services />
      <WhyUs />
      <Process />
      <Contact />
      <CTA />
      <Map />
      <Footer />
    </div>
  );
}

