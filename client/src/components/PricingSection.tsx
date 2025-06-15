import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { PackContactModal } from './PackContactModal';

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  monthlyPayment: string;
  popular: boolean;
  isDiscovery?: boolean;
}

interface CalculatorService {
  id: string;
  name: string;
  price: number;
}

export function PricingSection() {
  const { t } = useTranslation();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPack, setModalPack] = useState<string>('');

  const pricingPlans: PricingPlan[] = [
    {
      name: t('pricing.plans.discovery.name'),
      price: t('pricing.plans.discovery.price'),
      description: t('pricing.plans.discovery.description'),
      features: t('pricing.plans.discovery.features', { returnObjects: true }) as string[],
      monthlyPayment: t('pricing.plans.discovery.monthlyPayment'),
      popular: false,
      isDiscovery: true
    },
    {
      name: t('pricing.plans.starter.name'),
      price: t('pricing.plans.starter.price'),
      description: t('pricing.plans.starter.description'),
      features: t('pricing.plans.starter.features', { returnObjects: true }) as string[],
      monthlyPayment: t('pricing.plans.starter.monthlyPayment'),
      popular: false
    },
    {
      name: t('pricing.plans.pro.name'),
      price: t('pricing.plans.pro.price'),
      description: t('pricing.plans.pro.description'),
      features: t('pricing.plans.pro.features', { returnObjects: true }) as string[],
      monthlyPayment: t('pricing.plans.pro.monthlyPayment'),
      popular: true
    },
    {
      name: t('pricing.plans.custom.name'),
      price: t('pricing.plans.custom.price'),
      description: t('pricing.plans.custom.description'),
      features: t('pricing.plans.custom.features', { returnObjects: true }) as string[],
      monthlyPayment: t('pricing.plans.custom.monthlyPayment'),
      popular: false
    }
  ];

  const calculatorServices: CalculatorService[] = [
    { id: 'website', name: t('pricing.calculator.services.website'), price: 40000 },
    { id: 'ecommerce', name: t('pricing.calculator.services.ecommerce'), price: 120000 },
    { id: 'branding', name: t('pricing.calculator.services.branding'), price: 50000 },
    { id: 'whatsapp', name: t('pricing.calculator.services.whatsapp'), price: 30000 },
    { id: 'seo', name: t('pricing.calculator.services.seo'), price: 25000 }
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
    <section id="pricing" className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <PackContactModal open={modalOpen} onClose={() => setModalOpen(false)} packName={modalPack} />
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
            {t('pricing.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('pricing.subtitle')}
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-2xl p-6 w-full bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 text-white ${plan.popular ? 'ring-2 ring-orange-400' : ''}`}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -8, 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
            >
              {plan.popular && (
                <motion.span 
                  className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {t('pricing.mostPopular')}
                </motion.span>
              )}
              {plan.isDiscovery && (
                <motion.span 
                  className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {t('pricing.testOffer')}
                </motion.span>
              )}
              <motion.div 
                className="text-center mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <h3 className="font-playfair font-bold text-xl text-white mb-3">{plan.name}</h3>
                <motion.div 
                  className="text-3xl font-bold text-orange-400 mb-2"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    delay: 0.4 + index * 0.1 
                  }}
                >
                  {plan.price}
                </motion.div>
                <p className="text-white/60 text-sm">{plan.description}</p>
              </motion.div>
              
              <motion.ul 
                className="space-y-3 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {plan.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + (index * 0.1) + (featureIndex * 0.1) }}
                  >
                    <motion.i 
                      className={`fas fa-check text-orange-400 mr-2 mt-1 text-sm`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 200,
                        delay: 0.7 + (index * 0.1) + (featureIndex * 0.1)
                      }}
                    ></motion.i>
                    <span className="text-sm text-white/80">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <motion.button 
                  onClick={() => { setModalPack(plan.name); setModalOpen(true); }}
                  className="block w-full py-3 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {plan.name === t('pricing.plans.custom.name') ? t('pricing.requestQuote') : t('pricing.choosePlan')}
                </motion.button>
                <motion.p 
                  className="text-xs text-white/60 mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  {plan.isDiscovery ? plan.monthlyPayment : t('pricing.monthlyPayment', { amount: plan.monthlyPayment })}
                  {!plan.isDiscovery && plan.monthlyPayment && (
                    <span className="text-xs text-orange-300 ml-1">(sous conditions)</span>
                  )}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Special Offer */}
        <motion.div 
          className="relative bg-gradient-to-r from-blue-700 via-purple-700 to-green-500 rounded-3xl p-10 text-white text-center mb-16 shadow-2xl border-2 border-white/20 overflow-hidden group mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-green-600/20 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h3 className="font-playfair font-bold text-3xl mb-4">{t('pricing.specialOffer.title')}</h3>
            <p className="text-xl mb-2">{t('pricing.specialOffer.description')}</p>
            <div className="mb-6 flex flex-col items-center justify-center">
              <span className="text-lg text-white/70 line-through">250 000 DZ</span>
              <span className="text-3xl font-bold text-orange-400">200 000 DZ</span>
            </div>
            <button 
              onClick={() => { setModalPack(t('pricing.specialOffer.title')); setModalOpen(true); }}
              className="px-8 py-3 rounded-full font-semibold transition-all duration-300 bg-white text-purple-600 hover:bg-purple-100 shadow-lg"
            >
              {t('pricing.specialOffer.cta')}
            </button>
          </div>
        </motion.div>

        {/* Calculator Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-lg">
          <h3 className="font-playfair font-bold text-2xl text-white mb-6 text-center">{t('pricing.calculator.title')}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">{t('pricing.calculator.selectServices')}</h4>
              <div className="space-y-4">
                {calculatorServices.map((service) => (
                  <label key={service.id} className="flex items-center space-x-3 cursor-pointer">
                    <input 
                      type="checkbox"
                      checked={selectedServices.includes(service.id)}
                      onChange={() => toggleService(service.id)}
                      className="form-checkbox h-5 w-5 text-orange-500 rounded border-gray-300 focus:ring-orange-500"
                    />
                    <span className="text-white">{service.name}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6">
              <h4 className="text-white font-semibold mb-4">{t('pricing.calculator.summary')}</h4>
              <div className="space-y-4">
                <div className="flex justify-between text-white">
                  <span>{t('pricing.calculator.total')}</span>
                  <span>{total.toLocaleString()} DZ</span>
                </div>
                <div className="flex justify-between text-white/60 text-sm">
                  <span>{t('pricing.calculator.monthlyPayment')}</span>
                  <span>{monthlyPayment.toLocaleString()} DZ</span>
                </div>
              <button 
                onClick={() => { setModalPack('Calculateur de Budget'); setModalOpen(true); }}
                className="w-full py-3 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white shadow-lg mt-4"
              >
                {t('pricing.calculator.cta')}
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
