import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface Service {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  price?: string;
  status?: string;
  image: string;
}

export function ServicesSection() {
  const { t } = useTranslation();

  const services: Service[] = [
    {
      title: t('services.websiteCreation.title'),
      description: t('services.websiteCreation.description'),
      icon: 'fas fa-laptop-code',
      price: t('services.websiteCreation.price'),
      gradient: 'from-purple-600 to-blue-600',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: t('services.whatsappTraining.title'),
      description: t('services.whatsappTraining.description'),
      icon: 'fab fa-whatsapp',
      status: t('services.whatsappTraining.status'),
      gradient: 'from-emerald-500 to-green-600',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: t('services.branding.title'),
      description: t('services.branding.description'),
      icon: 'fas fa-paint-brush',
      status: t('services.branding.status'),
      gradient: 'from-cyan-500 to-emerald-500',
      image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Marketing Digital',
      description: 'Stratégies marketing et gestion des réseaux sociaux',
      icon: 'fas fa-bullhorn',
      gradient: 'from-orange-500 to-yellow-500',
      price: 'À partir de 25 000 DZ',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'SEO & Analytics',
      description: 'Optimisation pour les moteurs de recherche et analyse de données',
      icon: 'fas fa-chart-line',
      gradient: 'from-red-500 to-orange-500',
      price: 'À partir de 20 000 DZ',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
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
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Blobs colorés décoratifs */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-60px] left-[-60px] w-72 h-72 bg-orange-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-80px] right-[-40px] w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
      </div>
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
            className="text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Des solutions digitales complètes pour votre entreprise
          </motion.p>
        </div>

        {/* Swiper Mobile */}
        <div className="block lg:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={24}
            slidesPerView={1.1}
            pagination={{ clickable: true }}
            className="services-swiper"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <img src={service.image} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center opacity-40 blur-sm scale-110 group-hover:scale-125 transition-transform duration-700 z-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <div className="relative z-20">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center`}>
                      <i className={`${service.icon} text-2xl text-white`}></i>
                    </div>
                    <h3 className="font-playfair text-xl text-white mb-2 text-center">
                      {service.title}
                    </h3>
                    <p className="font-inter text-white/60 leading-relaxed mb-4 text-center">
                      {service.description}
                    </p>
                    {service.price ? (
                      <p className="font-inter text-lg font-semibold text-orange-400 text-center">
                        {service.price}
                      </p>
                    ) : (
                      <p className="font-inter text-sm text-orange-400 bg-orange/10 inline-block px-3 py-1 rounded-full text-center">
                        {service.status}
                      </p>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Grille Desktop */}
        <div className="hidden lg:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <img src={service.image} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center opacity-40 blur-sm scale-110 group-hover:scale-125 transition-transform duration-700 z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <div className="relative z-20">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center`}>
                  <i className={`${service.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="font-playfair text-xl text-white mb-2 text-center">
                  {service.title}
                </h3>
                <p className="font-inter text-white/60 leading-relaxed mb-4 text-center">
                  {service.description}
                </p>
                {service.price ? (
                  <p className="font-inter text-lg font-semibold text-orange-400 text-center">
                    {service.price}
                  </p>
                ) : (
                  <p className="font-inter text-sm text-orange-400 bg-orange/10 inline-block px-3 py-1 rounded-full text-center">
                    {service.status}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
