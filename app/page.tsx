import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import LeadCapture from './components/LeadCapture';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <NavBar />
      <HeroSection />
      <SocialProof />
      <Services />
      <HowItWorks />
      <Testimonials />
      <LeadCapture />
      <Footer />
    </main>
  );
}
