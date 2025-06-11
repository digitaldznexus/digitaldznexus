import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface Service {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  price?: string;
  status?: string;
}

export function ServicesSection() {
  const { t } = useTranslation();

  const services: Service[] = [
    {
      title: t('services.websiteCreation.title'),
      description: t('services.websiteCreation.description'),
      icon: 'fas fa-laptop-code',
      price: t('services.websiteCreation.price'),
      gradient: 'from-purple-600 to-blue-600'
    },
    {
      title: t('services.whatsappTraining.title'),
      description: t('services.whatsappTraining.description'),
      icon: 'fab fa-whatsapp',
      status: t('services.whatsappTraining.status'),
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      title: t('services.branding.title'),
      description: t('services.branding.description'),
      icon: 'fas fa-paint-brush',
      status: t('services.branding.status'),
      gradient: 'from-cyan-500 to-emerald-500'
    },
    {
      title: 'Marketing Digital',
      description: 'Stratégies marketing et gestion des réseaux sociaux',
      icon: 'fas fa-bullhorn',
      gradient: 'from-orange-500 to-yellow-500',
      price: 'À partir de 25 000 DZ'
    },
    {
      title: 'SEO & Analytics',
      description: 'Optimisation pour les moteurs de recherche et analyse de données',
      icon: 'fas fa-chart-line',
      gradient: 'from-red-500 to-orange-500',
      price: 'À partir de 20 000 DZ'
    }
  ];

  const packs = [
    {
      name: "Pack Starter",
      price: "50,000 DA",
      features: [
        "Site vitrine 5 pages",
        "Design responsive",
        "Formulaire de contact",
        "Optimisation SEO de base",
        "Hébergement 1 an"
      ],
      bgImage: "/images/starter-bg.jpg"
    },
    {
      name: "Pack Business",
      price: "150,000 DA",
      features: [
        "Site web jusqu'à 10 pages",
        "Design personnalisé",
        "Intégration CMS",
        "SEO avancé",
        "Hébergement premium 1 an",
        "Support technique 6 mois"
      ],
      bgImage: "/images/business-bg.jpg"
    },
    {
      name: "Pack E-commerce",
      price: "250,000 DA",
      features: [
        "Boutique en ligne complète",
        "Jusqu'à 100 produits",
        "Système de paiement",
        "Gestion des stocks",
        "Formation admin",
        "Support technique 1 an"
      ],
      bgImage: "/images/ecommerce-bg.jpg"
    },
    {
      name: "Pack Enterprise",
      price: "Sur mesure",
      features: [
        "Solution personnalisée",
        "Fonctionnalités illimitées",
        "API sur mesure",
        "Intégration systèmes",
        "Support dédié",
        "Maintenance premium"
      ],
      bgImage: "/images/enterprise-bg.jpg"
    }
  ];

  const specialOffer = {
    name: "Offre Spéciale Lancement",
    description: "Profitez de -30% sur tous nos packs jusqu'au 30 juin",
    features: [
      "Audit gratuit de votre présence digitale",
      "Migration de contenu offerte",
      "Formation équipe incluse",
      "Support prioritaire 3 mois"
    ],
    bgImage: "/images/special-offer-bg.jpg"
  };

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-gradient-to-br from-purple-600 via-blue-600 to-orange-500">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nos Services
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Des solutions digitales complètes pour votre entreprise
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group hover:bg-white/10 transition-all duration-300"
            >
              <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${service.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="font-playfair text-xl text-white mb-4">
                {service.title}
              </h3>
              <p className="font-inter text-gray-400 leading-relaxed mb-4">
                {service.description}
              </p>
              {service.price ? (
                <p className="font-inter text-lg font-semibold text-orange-400">
                  {service.price}
                </p>
              ) : (
                <p className="font-inter text-sm text-gris-texte bg-gris-clair inline-block px-3 py-1 rounded-full">
                  {service.status}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
