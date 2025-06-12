import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface Value {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

export function ValuesSection() {
  const { t } = useTranslation();

  const values: Value[] = [
    {
      icon: "fas fa-rocket",
      title: t('values.innovation.title'),
      description: t('values.innovation.description'),
      gradient: "from-orange to-orange/80"
    },
    {
      icon: "fas fa-handshake",
      title: t('values.engagement.title'),
      description: t('values.engagement.description'),
      gradient: "from-bleu to-bleu/80"
    },
    {
      icon: "fas fa-gem",
      title: t('values.excellence.title'),
      description: t('values.excellence.description'),
      gradient: "from-orange to-orange/80"
    },
    {
      icon: "fas fa-users",
      title: t('values.collaboration.title'),
      description: t('values.collaboration.description'),
      gradient: "from-orange to-orange/80"
    }
  ];

  return (
    <section id="values" className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Bulles colorées floues en arrière-plan */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-inter text-orange uppercase tracking-wider mb-4 block"
          >
            {t('values.title')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-playfair text-heading-1 text-white mb-6 drop-shadow-lg"
          >
            {t('values.subtitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-inter text-lg text-white/80 leading-relaxed"
          >
            {t('values.description')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            // Dégradé d'icône selon la valeur
            let iconGradient = "from-orange to-orange/80";
            if (value.title === t('values.innovation.title')) iconGradient = "from-orange to-orange/80";
            if (value.title === t('values.engagement.title')) iconGradient = "from-bleu to-bleu/80";
            if (value.title === t('values.excellence.title')) iconGradient = "from-orange to-orange/80";
            if (value.title === t('values.collaboration.title')) iconGradient = "from-orange to-orange/80";
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${iconGradient} flex items-center justify-center`}>
                  <i className={`${value.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="font-playfair text-xl text-white mb-2 text-center">{value.title}</h3>
                <p className="font-inter text-white/60 text-center">{value.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="font-playfair text-5xl text-white mb-2 drop-shadow-lg">150+</h3>
            <p className="font-inter text-white/80">{t('values.stats.projects')}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="font-playfair text-5xl text-white mb-2 drop-shadow-lg">98%</h3>
            <p className="font-inter text-white/80">{t('values.stats.clients')}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="font-playfair text-5xl text-white mb-2 drop-shadow-lg">5+</h3>
            <p className="font-inter text-white/80">{t('values.stats.years')}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 