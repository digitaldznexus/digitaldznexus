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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center bg-purple-500/20 border border-purple-500/30 rounded-full px-6 py-2 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-white/80 text-sm font-medium">Digital Nexus - Votre Partenaire Digital</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="font-manrope font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block text-white/60 text-2xl md:text-3xl font-normal mb-4">POURQUOI</span>
              80% des clients cherchent
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
                en ligne d'abord ?
              </span>
            </motion.h1>

            {/* Value Proposition */}
            <motion.div
              className="max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                Avec un site pro, même basique, vous :
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    icon: "fas fa-shield-alt",
                    title: "Doublez votre crédibilité",
                    description: "Vraie adresse, photos pro, témoignages",
                    color: "from-purple-400 to-purple-600"
                  },
                  {
                    icon: "fas fa-clock",
                    title: "Gagnez des clients 24h/24",
                    description: "Même quand vous dormez !",
                    color: "from-blue-400 to-blue-600"
                  },
                  {
                    icon: "fas fa-phone-slash",
                    title: "Évitez les appels inutiles",
                    description: "Tarifs et infos déjà en ligne",
                    color: "from-orange-400 to-orange-600"
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center`}>
                      <i className={`${benefit.icon} text-2xl text-white`}></i>
                    </div>
                    <h3 className="font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-white/60 text-sm">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Price and CTA */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="bg-gradient-to-r from-purple-500/20 to-orange-500/20 border border-white/20 rounded-3xl p-8 mb-8 max-w-2xl mx-auto">
                <p className="text-white/80 text-lg mb-4">Le tout à partir de</p>
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  30 000 
                  <span className="text-2xl text-orange-400 ml-2">DZ</span>
                </div>
                <p className="text-white/60">seulement</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-comments mr-2"></i>
                  On en discute ?
                </motion.button>
                <motion.button 
                  onClick={scrollToServices}
                  className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-arrow-right mr-2"></i>
                  Voir nos services
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white/60 text-sm">Déjà fait confiance :</div>
              <div className="flex items-center gap-6">
                <div className="text-white/40 text-xs">50+ entreprises</div>
                <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                <div className="text-white/40 text-xs">100% satisfaction</div>
                <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                <div className="text-white/40 text-xs">Mostaganem & région</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}