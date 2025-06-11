import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { ValuesSection } from '../components/ValuesSection';
import { Footer } from '../components/Footer';
import { useScrollEffect } from '../hooks/useScrollEffect';

export default function Home() {
  const { isVisible, scrollToTop } = useScrollEffect();

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20"> {/* Ajout d'un padding-top pour éviter que le header ne couvre le hero */}
        <HeroSection />
        <ValuesSection />
        <Footer />
      </div>

      {/* Back to Top Button */}
      {isVisible && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-purple-600 text-white w-12 h-12 rounded-full shadow-lg hover:bg-orange-500 transition-all duration-300 z-40 flex items-center justify-center"
          aria-label="Retour en haut"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
}
