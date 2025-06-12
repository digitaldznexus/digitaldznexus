import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { ValuesSection } from '../components/ValuesSection';
import { Footer } from '../components/Footer';
import { useScrollEffect } from '../hooks/useScrollEffect';
import { useEffect } from 'react';

export default function Home() {
  const { isVisible, scrollToTop } = useScrollEffect();

  // ScrollToSection global (offset header)
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash && hash.length > 1) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    };
    // On hash change
    window.addEventListener('hashchange', scrollToHash);
    // On mount (si déjà un hash)
    scrollToHash();
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  useEffect(() => {
    const handleLinkClick = (e: any) => {
      if (e.target.matches('a[href^="#"]')) {
        const href = e.target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          window.location.hash = href;
        }
      }
    };
    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background code coloré flouté */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <pre className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[1100px] max-w-full text-sm md:text-lg opacity-50 blur-sm select-none font-mono bg-gradient-to-br from-orange-400/40 via-blue-500/30 to-purple-500/40 p-0 m-0 rounded-3xl shadow-2xl" style={{lineHeight:'1.7',whiteSpace:'pre',overflow:'hidden'}}>
{`// Création de site web
function createWebsite(client) {
  return {
    design: 'moderne',
    responsive: true,
    seo: 'optimisé',
    livraison: 'rapide',
    support: true
  };
}

// Branding digital
const branding = {
  logo: 'unique',
  palette: ['#2A5EE8', '#F97316', '#111'],
  guidelines: true
};

// Marketing digital
const campagne = launchCampaign({
  cible: 'PME',
  canal: ['Facebook', 'Instagram'],
  budget: 50000
});
`}
        </pre>
      </div>
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
