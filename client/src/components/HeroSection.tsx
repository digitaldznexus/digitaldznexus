import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function HeroSection() {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg">
        <img 
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1080" 
          alt="Digital workspace" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark-gray/50"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('hero.title')}{' '}
            <span className="text-accent-green">{t('hero.titleHighlight')}</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button 
              onClick={() => scrollToSection('services')}
              className="btn-primary text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center"
            >
              {t('hero.discoverServices')}
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
            
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              {t('hero.viewWork')}
            </button>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-montserrat font-bold text-accent-green mb-2">50+</div>
              <div className="text-gray-300 text-sm md:text-base">{t('hero.projectsCompleted')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-montserrat font-bold text-accent-green mb-2">98%</div>
              <div className="text-gray-300 text-sm md:text-base">{t('hero.clientsSatisfied')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-montserrat font-bold text-accent-green mb-2">3+</div>
              <div className="text-gray-300 text-sm md:text-base">{t('hero.yearsExperience')}</div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <button 
          onClick={() => scrollToSection('services')}
          className="text-white/70 hover:text-white transition-colors"
        >
          <i className="fas fa-chevron-down text-2xl"></i>
        </button>
      </motion.div>
    </section>
  );
}
