import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'wouter';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useHeaderScroll } from '../hooks/useScrollEffect';

export function Header() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const isScrolled = useHeaderScroll();

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToContact = () => {
    if (location === '/') {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/#contact';
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-manrope font-bold text-lg">DN</span>
            </div>
            <span className="font-manrope font-bold text-xl text-gray-800">Digital Nexus</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className={`text-gray-700 hover:text-purple-600 transition-colors ${location === '/' ? 'text-purple-600 font-semibold' : ''}`}>
              {t('nav.home')}
            </Link>
            <Link href="/services" className={`text-gray-700 hover:text-purple-600 transition-colors ${location === '/services' ? 'text-purple-600 font-semibold' : ''}`}>
              {t('nav.services')}
            </Link>
            <Link href="/portfolio" className={`text-gray-700 hover:text-purple-600 transition-colors ${location === '/portfolio' ? 'text-purple-600 font-semibold' : ''}`}>
              {t('nav.portfolio')}
            </Link>
            <Link href="/testimonials" className={`text-gray-700 hover:text-blue-500 transition-colors ${location === '/testimonials' ? 'text-blue-500 font-semibold' : ''}`}>
              {t('nav.testimonials')}
            </Link>
            <Link href="/pricing" className={`text-gray-700 hover:text-orange-500 transition-colors ${location === '/pricing' ? 'text-orange-500 font-semibold' : ''}`}>
              {t('nav.pricing')}
            </Link>
            <Link href="/contact" className={`text-gray-700 hover:text-orange-600 transition-colors ${location === '/contact' ? 'text-orange-600 font-semibold' : ''}`}>
              {t('nav.contact')}
            </Link>
          </div>

          {/* Language Switcher & CTA */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            
            <button 
              onClick={scrollToContact}
              className="hidden lg:inline-flex bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300"
            >
              {t('nav.getQuote')}
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-purple-600 transition-colors"
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
            <Link href="/" onClick={closeMobileMenu} className={`block text-gray-700 hover:text-purple-600 transition-colors ${location === '/' ? 'text-purple-600 font-semibold' : ''}`}>
              {t('nav.home')}
            </Link>
            <Link href="/services" onClick={closeMobileMenu} className={`block text-gray-700 hover:text-purple-600 transition-colors ${location === '/services' ? 'text-purple-600 font-semibold' : ''}`}>
              {t('nav.services')}
            </Link>
            <Link href="/portfolio" onClick={closeMobileMenu} className={`block text-gray-700 hover:text-purple-600 transition-colors ${location === '/portfolio' ? 'text-purple-600 font-semibold' : ''}`}>
              {t('nav.portfolio')}
            </Link>
            <Link href="/testimonials" onClick={closeMobileMenu} className={`block text-gray-700 hover:text-blue-500 transition-colors ${location === '/testimonials' ? 'text-blue-500 font-semibold' : ''}`}>
              {t('nav.testimonials')}
            </Link>
            <Link href="/pricing" onClick={closeMobileMenu} className={`block text-gray-700 hover:text-orange-500 transition-colors ${location === '/pricing' ? 'text-orange-500 font-semibold' : ''}`}>
              {t('nav.pricing')}
            </Link>
            <Link href="/contact" onClick={closeMobileMenu} className={`block text-gray-700 hover:text-orange-600 transition-colors ${location === '/contact' ? 'text-orange-600 font-semibold' : ''}`}>
              {t('nav.contact')}
            </Link>
            <button 
              onClick={scrollToContact}
              className="inline-flex bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300"
            >
              {t('nav.getQuote')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
