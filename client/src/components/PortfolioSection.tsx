import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function PortfolioSection() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: t('portfolio.projects.eliteshop.title'),
      description: t('portfolio.projects.eliteshop.description'),
      category: 'website',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      tag: t('portfolio.categories.website')
    },
    {
      id: 2,
      title: t('portfolio.projects.drbenali.title'),
      description: t('portfolio.projects.drbenali.description'),
      category: 'website',
      image: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      tag: t('portfolio.categories.website')
    },
    {
      id: 3,
      title: t('portfolio.projects.yasmine.title'),
      description: t('portfolio.projects.yasmine.description'),
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      tag: t('portfolio.categories.branding')
    },
    {
      id: 4,
      title: t('portfolio.projects.techsolutions.title'),
      description: t('portfolio.projects.techsolutions.description'),
      category: 'whatsapp',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      tag: t('portfolio.categories.whatsapp')
    },
    {
      id: 5,
      title: t('portfolio.projects.samir.title'),
      description: t('portfolio.projects.samir.description'),
      category: 'website',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      tag: t('portfolio.categories.website')
    },
    {
      id: 6,
      title: t('portfolio.projects.innovtech.title'),
      description: t('portfolio.projects.innovtech.description'),
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      tag: t('portfolio.categories.branding')
    }
  ];

  const filters = [
    { id: 'all', label: t('portfolio.filters.all') },
    { id: 'website', label: t('portfolio.filters.website') },
    { id: 'whatsapp', label: t('portfolio.filters.whatsapp') },
    { id: 'branding', label: t('portfolio.filters.branding') }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Bulles colorées floues en arrière-plan */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('portfolio.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-white/80 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('portfolio.subtitle')}
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
                className={`px-6 py-2 rounded-full font-medium transition-all backdrop-blur-sm border border-white/10
                  ${activeFilter === filter.id
                    ? 'bg-white text-purple-600 shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white hover:text-purple-600'}
                `}
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
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                layout
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-playfair font-bold text-lg text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/60 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium
                      ${project.category === 'website' ? 'bg-blue-600/20 text-blue-400' :
                        project.category === 'branding' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-green-500/20 text-green-300'}
                    `}>
                      {project.tag}
                    </span>
                    <button className="text-white/80 hover:text-orange-400 transition-colors">
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
