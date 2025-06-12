import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'wouter';

export function HeroSection() {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();

  const scrollToContact = () => {
    setLocation('/contact');
  };

  const scrollToServices = () => {
    setLocation('/services');
  };

  const benefits = [
    {
      icon: "fas fa-shield-alt",
      title: t('hero.benefits.credibility.title'),
      description: t('hero.benefits.credibility.description'),
      gradient: "from-orange to-orange/80"
    },
    {
      icon: "fas fa-clock",
      title: t('hero.benefits.clients.title'),
      description: t('hero.benefits.clients.description'),
      gradient: "from-bleu to-bleu/80"
    },
    {
      icon: "fas fa-phone-slash",
      title: t('hero.benefits.calls.title'),
      description: t('hero.benefits.calls.description'),
      gradient: "from-purple-600 to-purple-800"
    }
  ];

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-2 h-2 bg-orange rounded-full mr-2 animate-pulse"></span>
            <span className="font-inter text-white/80 text-sm">{t('hero.badge')}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-display-1 text-white mb-4"
            >
            <span className="block text-white/60 font-inter text-xl mb-4">{t('hero.why')}</span>
            {t('hero.title')}
            </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-inter text-xl text-gray-300 mb-6 leading-relaxed"
            >
                {t('hero.subtitle')}
          </motion.p>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 mb-6"
          >
            {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${benefit.gradient} flex items-center justify-center`}>
                      <i className={`${benefit.icon} text-2xl text-white`}></i>
                    </div>
                <h3 className="font-playfair text-xl text-white mb-2">{benefit.title}</h3>
                <p className="font-inter text-white/60">{benefit.description}</p>
                  </motion.div>
                ))}
            </motion.div>

          {/* Price Card */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mb-6 max-w-2xl mx-auto"
            >
            <p className="font-inter text-white/80 text-lg mb-4">{t('hero.pricing.from')}</p>
            <div className="font-playfair text-5xl md:text-6xl font-bold text-white mb-2">
                  30 000 
              <span className="text-2xl text-orange ml-2">DZ</span>
                </div>
            <p className="font-inter text-white/60">{t('hero.pricing.only')}</p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={scrollToContact}
              className="font-inter px-8 py-3 bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 text-slate-900 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-lg font-bold flex items-center gap-2 border-2 border-white/20 animate-float"
            >
              <i className="fas fa-comments mr-2"></i>
              {t('hero.cta.discuss')}
            </button>
            <button
              onClick={scrollToServices}
              className="font-inter px-8 py-3 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-800 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-lg font-bold flex items-center gap-2 border-2 border-white/20 animate-float"
            >
              <i className="fas fa-arrow-right mr-2"></i>
              {t('hero.cta.services')}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}