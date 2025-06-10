import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function PricingSection() {
  const { t } = useTranslation();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const pricingPlans = [
    {
      name: 'Offre Découverte',
      price: '15k DZ',
      description: 'Parfait pour tester nos services',
      features: [
        'Site 1 page responsive',
        'Design moderne et attractif',
        'Hébergement 6 mois inclus',
        'Domaine .dz inclus',
        'Formulaire de contact',
        'Optimisation mobile',
        'Support 1 mois'
      ],
      monthlyPayment: '15k DZ comptant',
      popular: false,
      isDiscovery: true
    },
    {
      name: 'Pack Starter',
      price: '30k - 50k DZ',
      description: 'Site vitrine basique',
      features: [
        '3 à 5 pages',
        'Template moderne',
        'Hébergement + domaine .dz 1 an',
        'Design responsive',
        'Formulaire de contact',
        'SEO basique',
        'Livraison 7-10 jours'
      ],
      monthlyPayment: '10k DZ/mois',
      popular: false
    },
    {
      name: 'Pack Pro',
      price: '80k - 150k DZ',
      description: 'Site avancé ou e-commerce',
      features: [
        '10-15 pages ou e-commerce',
        'Design semi-personnalisé',
        'Hébergement performant',
        'SEO optimisé',
        'Intégration paiement',
        'Blog + Google Analytics',
        '2 mois support gratuit'
      ],
      monthlyPayment: '50k DZ/mois',
      popular: true
    },
    {
      name: 'Pack Sur Mesure',
      price: '200k+ DZ',
      description: 'Solution 100% personnalisée',
      features: [
        'Développement from scratch',
        'Design UX/UI unique',
        'Fonctionnalités sur mesure',
        'Hébergement VPS sécurisé',
        'Formation complète',
        'SEO/SEA inclus',
        '6 mois maintenance'
      ],
      monthlyPayment: '70k DZ/mois',
      popular: false
    }
  ];

  const calculatorServices = [
    { id: 'website', name: 'Site vitrine', price: 40000 },
    { id: 'ecommerce', name: 'Site e-commerce', price: 120000 },
    { id: 'branding', name: 'Branding complet', price: 50000 },
    { id: 'whatsapp', name: 'Formation WhatsApp Business', price: 30000 },
    { id: 'seo', name: 'Optimisation SEO', price: 25000 }
  ];

  const calculateTotal = () => {
    return selectedServices.reduce((total, serviceId) => {
      const service = calculatorServices.find(s => s.id === serviceId);
      return total + (service?.price || 0);
    }, 0);
  };

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const total = calculateTotal();
  const monthlyPayment = Math.round(total / 3);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-16 lg:py-24">
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
            Nos Tarifs Transparents
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Choisissez l'offre qui correspond le mieux à vos besoins et votre budget
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`card-hover bg-white rounded-2xl p-6 shadow-lg border ${
                plan.popular ? 'border-blue-600 border-2 relative' : 
                plan.isDiscovery ? 'border-green-500 border-2 relative bg-gradient-to-br from-green-50 to-white' :
                'border-gray-100'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Le plus populaire
                </div>
              )}
              {plan.isDiscovery && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Offre de test
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="font-montserrat font-bold text-xl text-gray-800 mb-3">{plan.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">{plan.price}</div>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1 text-sm"></i>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="text-center">
                <button 
                  onClick={scrollToContact}
                  className={`block w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white' 
                      : plan.isDiscovery
                        ? 'bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  {plan.name === 'Pack Sur Mesure' ? 'Demander un devis' : 'Choisir ce pack'}
                </button>
                <p className="text-xs text-gray-600 mt-2">
                  {plan.isDiscovery ? plan.monthlyPayment : `Paiement 3x: ${plan.monthlyPayment}`}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Offer */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-8 text-white text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="font-montserrat font-bold text-2xl mb-4">Offre Spéciale "Digital Pack"</h3>
          <p className="text-lg mb-6">Site Pro + 3 mois réseaux sociaux + 1 vidéo promo</p>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="text-2xl line-through opacity-75">250k DZ</span>
            <span className="text-4xl font-bold">200k DZ</span>
          </div>
          <button 
            onClick={scrollToContact}
            className="inline-flex bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Profiter de l'offre
          </button>
          <p className="text-sm mt-4 opacity-90">Offre limitée à 5 clients/mois</p>
        </motion.div>

        {/* Interactive Calculator */}
        <motion.div 
          className="bg-light-gray rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="font-montserrat font-bold text-2xl text-center text-dark-gray mb-8">Calculateur de Budget</h3>
          
          <div className="max-w-2xl mx-auto">
            {/* Service Selection */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-dark-gray mb-4">Sélectionnez vos services :</label>
              <div className="space-y-4">
                {calculatorServices.map((service) => (
                  <label key={service.id} className="flex items-center cursor-pointer">
                    <input 
                      type="checkbox"
                      checked={selectedServices.includes(service.id)}
                      onChange={() => toggleService(service.id)}
                      className="mr-3 rounded border-gray-300 text-royal-blue focus:ring-royal-blue"
                    />
                    <span>{service.name} ({service.price.toLocaleString()} DZ)</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Total Display */}
            <div className="bg-white rounded-xl p-6 text-center">
              <p className="text-lg text-medium-gray mb-2">Total estimé :</p>
              <div className="text-3xl font-bold text-royal-blue mb-4">{total.toLocaleString()} DZ</div>
              <div className="text-sm text-medium-gray mb-4">Paiement 3x : {monthlyPayment.toLocaleString()} DZ/mois</div>
              {selectedServices.length > 0 && (
                <div className="text-sm text-gray-600 mb-4">
                  Services sélectionnés: {selectedServices.map(id => 
                    calculatorServices.find(s => s.id === id)?.name
                  ).join(', ')}
                </div>
              )}
              <button 
                onClick={scrollToContact}
                className="btn-primary text-white px-6 py-2 rounded-full font-semibold"
              >
                Demander un devis personnalisé
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
