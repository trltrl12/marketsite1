import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import PainPoints from './components/PainPoints';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <NavBar />
      <HeroSection />
      <HowItWorks />
      <PainPoints />
      <Services />
      <WhyUs />
      <Process />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
