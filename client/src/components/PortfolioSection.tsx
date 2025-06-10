import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function PortfolioSection() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Boutique en ligne EliteShop',
      description: 'Site e-commerce moderne avec paiement intégré et interface intuitive',
      category: 'website',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      tag: 'Site Web'
    },
    {
      id: 2,
      title: 'Cabinet Médical Dr. Benali',
      description: 'Site vitrine professionnel avec système de prise de rendez-vous',
      category: 'website',
      image: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      tag: 'Site Web'
    },
    {
      id: 3,
      title: 'Restaurant Yasmine',
      description: 'Identité visuelle complète avec logo, menu digital et supports marketing',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      tag: 'Branding'
    },
    {
      id: 4,
      title: 'Formation PME TechSolutions',
      description: 'Formation complète WhatsApp Business pour optimiser la communication client',
      category: 'whatsapp',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      tag: 'WhatsApp'
    },
    {
      id: 5,
      title: 'Portfolio Architecte Samir',
      description: 'Site portfolio élégant pour présenter les réalisations architecturales',
      category: 'website',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      tag: 'Site Web'
    },
    {
      id: 6,
      title: 'Startup InnovTech',
      description: 'Création d\'identité visuelle moderne pour startup technologique',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      tag: 'Branding'
    }
  ];

  const filters = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'website', label: 'Sites Web' },
    { id: 'whatsapp', label: 'WhatsApp Business' },
    { id: 'branding', label: 'Branding' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-gradient-to-br from-purple-600 via-blue-600 to-orange-500">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nos Réalisations
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Découvrez quelques-uns de nos projets les plus marquants
          </motion.p>
          
          {/* Filters */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-white text-purple-600'
                    : 'bg-white/20 text-white hover:bg-white hover:text-purple-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                layout
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-montserrat font-bold text-lg text-dark-gray mb-2">
                    {project.title}
                  </h3>
                  <p className="text-medium-gray mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.category === 'website' ? 'bg-royal-blue/10 text-royal-blue' :
                      project.category === 'branding' ? 'bg-accent-green/10 text-accent-green' :
                      'bg-green-100 text-green-600'
                    }`}>
                      {project.tag}
                    </span>
                    <button className="text-royal-blue hover:text-accent-green transition-colors">
                      <i className="fas fa-external-link-alt"></i>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
