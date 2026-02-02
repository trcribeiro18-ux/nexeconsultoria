import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EixosSection from '@/components/EixosSection';
import EvolutionSection from '@/components/EvolutionSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <EixosSection />
        <EvolutionSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
