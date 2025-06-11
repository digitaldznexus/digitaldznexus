import { motion } from 'framer-motion';

interface Value {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

const values: Value[] = [
  {
    icon: "fas fa-rocket",
    title: "Innovation",
    description: "Nous repoussons constamment les limites pour créer des solutions web avant-gardistes.",
    gradient: "from-orange to-orange/80"
  },
  {
    icon: "fas fa-handshake",
    title: "Engagement",
    description: "Votre réussite est notre priorité. Nous nous engageons à 100% dans chaque projet.",
    gradient: "from-bleu to-bleu/80"
  },
  {
    icon: "fas fa-gem",
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque détail pour des résultats qui dépassent vos attentes.",
    gradient: "from-purple-600 to-purple-800"
  },
  {
    icon: "fas fa-users",
    title: "Collaboration",
    description: "Nous travaillons en étroite collaboration avec vous pour donner vie à votre vision.",
    gradient: "from-orange to-orange/80"
  }
];

export function ValuesSection() {
  return (
    <section id="values" className="py-20 bg-noir">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-inter text-orange uppercase tracking-wider mb-4 block"
          >
            Nos Valeurs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-playfair text-heading-1 text-white mb-6"
          >
            Les principes qui guident notre excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-inter text-lg text-gray-300 leading-relaxed"
          >
            Découvrez ce qui fait de Digital Nexus votre partenaire de confiance pour votre transformation digitale.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group hover:bg-white/10 transition-all duration-300"
            >
              <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${value.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${value.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="font-playfair text-xl text-white mb-4">
                {value.title}
              </h3>
              <p className="font-inter text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="font-playfair text-4xl text-white mb-2">150+</h3>
            <p className="font-inter text-gray-400">Projets réalisés</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="font-playfair text-4xl text-white mb-2">98%</h3>
            <p className="font-inter text-gray-400">Clients satisfaits</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="font-playfair text-4xl text-white mb-2">5+</h3>
            <p className="font-inter text-gray-400">Années d'expérience</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 