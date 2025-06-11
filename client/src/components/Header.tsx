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
    <header className={`fixed top-0 left-0 right-0 z-50 bg-[#111111]/95 backdrop-blur-md border-b border-gray-800 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#F97316] to-[#2563EB] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">DN</span>
            </div>
            <span className="font-bold text-xl text-white">Digital Nexus</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className={`text-white hover:text-[#F97316] transition-colors ${location === '/' ? 'text-[#F97316] font-semibold' : ''}`}>
              {t('nav.home')}
            </Link>
            <Link href="/services" className={`text-white hover:text-[#F97316] transition-colors ${location === '/services' ? 'text-[#F97316] font-semibold' : ''}`}>
              {t('nav.services')}
            </Link>
            <Link href="/portfolio" className={`text-white hover:text-[#F97316] transition-colors ${location === '/portfolio' ? 'text-[#F97316] font-semibold' : ''}`}>
              {t('nav.portfolio')}
            </Link>
            <Link href="/testimonials" className={`text-white hover:text-[#F97316] transition-colors ${location === '/testimonials' ? 'text-[#F97316] font-semibold' : ''}`}>
              {t('nav.testimonials')}
            </Link>
            <Link href="/pricing" className={`text-white hover:text-[#F97316] transition-colors ${location === '/pricing' ? 'text-[#F97316] font-semibold' : ''}`}>
              {t('nav.pricing')}
            </Link>
            <Link href="/contact" className={`text-white hover:text-[#F97316] transition-colors ${location === '/contact' ? 'text-[#F97316] font-semibold' : ''}`}>
              {t('nav.contact')}
            </Link>
          </div>

          {/* Language Switcher & CTA */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            
            <button
              onClick={scrollToContact}
              className="hidden lg:inline-flex bg-[#F97316] hover:bg-[#ea580c] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300"
            >
              {t('nav.getQuote')}
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white hover:text-[#F97316] transition-colors"
            >
              <i className={`fas fa-${isMobileMenuOpen ? 'times' : 'bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#111111] border-t border-gray-800">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link href="/" onClick={closeMobileMenu} className={`block text-white hover:text-[#F97316] transition-colors ${location === '/' ? 'text-[#F97316] font-semibold' : ''}`}>
                {t('nav.home')}
              </Link>
              <Link href="/services" onClick={closeMobileMenu} className={`block text-white hover:text-[#F97316] transition-colors ${location === '/services' ? 'text-[#F97316] font-semibold' : ''}`}>
                {t('nav.services')}
              </Link>
              <Link href="/portfolio" onClick={closeMobileMenu} className={`block text-white hover:text-[#F97316] transition-colors ${location === '/portfolio' ? 'text-[#F97316] font-semibold' : ''}`}>
                {t('nav.portfolio')}
              </Link>
              <Link href="/testimonials" onClick={closeMobileMenu} className={`block text-white hover:text-[#F97316] transition-colors ${location === '/testimonials' ? 'text-[#F97316] font-semibold' : ''}`}>
                {t('nav.testimonials')}
              </Link>
              <Link href="/pricing" onClick={closeMobileMenu} className={`block text-white hover:text-[#F97316] transition-colors ${location === '/pricing' ? 'text-[#F97316] font-semibold' : ''}`}>
                {t('nav.pricing')}
              </Link>
              <Link href="/contact" onClick={closeMobileMenu} className={`block text-white hover:text-[#F97316] transition-colors ${location === '/contact' ? 'text-[#F97316] font-semibold' : ''}`}>
                {t('nav.contact')}
              </Link>
              <button 
                onClick={scrollToContact}
                className="w-full bg-[#F97316] hover:bg-[#ea580c] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300"
              >
                {t('nav.getQuote')}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
