import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      icon: 'fas fa-code',
      title: t('services.websiteCreation.title'),
      description: t('services.websiteCreation.description'),
      price: t('services.websiteCreation.price'),
      gradient: 'from-blue-600 to-green-500',
      href: '#pricing'
    },
    {
      icon: 'fab fa-whatsapp',
      title: t('services.whatsappTraining.title'),
      description: t('services.whatsappTraining.description'),
      status: t('services.whatsappTraining.status'),
      gradient: 'from-green-500 to-blue-600',
      href: '#contact'
    },
    {
      icon: 'fas fa-paint-brush',
      title: t('services.branding.title'),
      description: t('services.branding.description'),
      status: t('services.branding.status'),
      gradient: 'from-blue-600 to-green-500',
      href: '#contact'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'SEO & Marketing Digital',
      description: 'Optimisation pour les moteurs de recherche et stratégies marketing pour booster votre visibilité.',
      price: 'Sur devis',
      gradient: 'from-green-500 to-blue-600',
      href: '#contact'
    },
    {
      icon: 'fas fa-tools',
      title: 'Maintenance & Support',
      description: 'Support technique continu, mises à jour et maintenance préventive pour votre tranquillité d\'esprit.',
      price: 'Inclus',
      gradient: 'from-blue-600 to-green-500',
      href: '#pricing'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Consultation Digital',
      description: 'Audit de votre présence digitale et conseils personnalisés pour optimiser votre stratégie.',
      price: 'Gratuit',
      gradient: 'from-green-500 to-blue-600',
      href: '#contact'
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('services.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('services.subtitle')}
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="card-hover bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6`}>
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="flex items-center justify-between">
                <span className={`font-semibold ${service.price ? 'text-blue-600' : 'text-green-500'}`}>
                  {service.price || service.status}
                </span>
                <button 
                  onClick={() => scrollToSection(service.href)}
                  className="text-blue-600 hover:text-green-500 transition-colors"
                >
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
