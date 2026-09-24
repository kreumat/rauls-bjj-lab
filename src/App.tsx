import { Academy } from './components/Academy';
import { BeltJourney } from './components/BeltJourney';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Programs } from './components/Programs';
import { QuickLinks } from './components/QuickLinks';
import { Schedule } from './components/Schedule';
import { VideoShop } from './components/VideoShop';
import { WhatsAppWidget } from './components/WhatsAppWidget';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#f5f5f1] text-[#11110f]">
      <Hero />
      <QuickLinks />
      <Academy />
      <Programs />
      <VideoShop />
      <BeltJourney />
      <Schedule />
      <Contact />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
