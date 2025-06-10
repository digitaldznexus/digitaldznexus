import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { PortfolioSection } from '../components/PortfolioSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { PricingSection } from '../components/PricingSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { useScrollEffect } from '../hooks/useScrollEffect';

export default function Home() {
  const { isVisible, scrollToTop } = useScrollEffect();

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
      
      {/* Back to Top Button */}
      {isVisible && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-royal-blue text-white w-12 h-12 rounded-full shadow-lg hover:bg-accent-green transition-all duration-300 z-40"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
}
