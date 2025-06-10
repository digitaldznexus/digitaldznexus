import { Header } from '../components/Header';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { useScrollEffect } from '../hooks/useScrollEffect';

export default function Contact() {
  const { isVisible, scrollToTop } = useScrollEffect();

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
      
      {/* Back to Top Button */}
      {isVisible && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-purple-600 text-white w-12 h-12 rounded-full shadow-lg hover:bg-orange-500 transition-all duration-300 z-40"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
}