import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useHeaderScroll } from '../hooks/useScrollEffect';

export function Header() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useHeaderScroll();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-royal-blue to-accent-green rounded-lg flex items-center justify-center">
              <span className="text-white font-montserrat font-bold text-lg">DN</span>
            </div>
            <span className="font-montserrat font-bold text-xl text-dark-gray">Digital Nexus</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-royal-blue transition-colors">
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-royal-blue transition-colors">
              {t('nav.services')}
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-royal-blue transition-colors">
              {t('nav.portfolio')}
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-royal-blue transition-colors">
              {t('nav.testimonials')}
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-royal-blue transition-colors">
              {t('nav.pricing')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-royal-blue transition-colors">
              {t('nav.contact')}
            </button>
          </div>

          {/* Language Switcher & CTA */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="hidden lg:inline-flex btn-primary text-white px-6 py-2 rounded-full font-medium"
            >
              {t('nav.getQuote')}
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-royal-blue transition-colors"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button onClick={() => scrollToSection('hero')} className="block text-gray-700 hover:text-royal-blue transition-colors">
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('services')} className="block text-gray-700 hover:text-royal-blue transition-colors">
              {t('nav.services')}
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="block text-gray-700 hover:text-royal-blue transition-colors">
              {t('nav.portfolio')}
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block text-gray-700 hover:text-royal-blue transition-colors">
              {t('nav.testimonials')}
            </button>
            <button onClick={() => scrollToSection('pricing')} className="block text-gray-700 hover:text-royal-blue transition-colors">
              {t('nav.pricing')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="block text-gray-700 hover:text-royal-blue transition-colors">
              {t('nav.contact')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="inline-flex btn-primary text-white px-6 py-2 rounded-full font-medium"
            >
              {t('nav.getQuote')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
