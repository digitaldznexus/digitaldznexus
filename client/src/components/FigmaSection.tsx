import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export function FigmaSection() {
  const { t } = useTranslation();

  const figmaProjects = [
    {
      id: 1,
      category: t('figma.projects.designSystem.category'),
      title: t('figma.projects.designSystem.title'),
      description: t('figma.projects.designSystem.description'),
      embedUrl: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/YOUR_FILE_ID/DigitalNexus-Design-System",
      preview: "/images/figma/design-system-preview.jpg"
    },
    {
      id: 2,
      category: t('figma.projects.uiKit.category'),
      title: t('figma.projects.uiKit.title'),
      description: t('figma.projects.uiKit.description'),
      embedUrl: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/YOUR_FILE_ID/UI-Components",
      preview: "/images/figma/ui-kit-preview.jpg"
    },
    {
      id: 3,
      category: t('figma.projects.ecommerce.category'),
      title: t('figma.projects.ecommerce.title'),
      description: t('figma.projects.ecommerce.description'),
      embedUrl: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/YOUR_FILE_ID/Ecommerce-Redesign",
      preview: "/images/figma/ecommerce-preview.jpg"
    },
    {
      id: 4,
      category: t('figma.projects.mobileApp.category'),
      title: t('figma.projects.mobileApp.title'),
      description: t('figma.projects.mobileApp.description'),
      embedUrl: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/YOUR_FILE_ID/Mobile-App",
      preview: "/images/figma/mobile-preview.jpg"
    }
  ];

  return (
    <section id="figma" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('figma.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('figma.subtitle')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <motion.h3 
              className="font-montserrat font-bold text-2xl text-gray-800"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t('figma.process.title')}
            </motion.h3>
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-lg mb-2">{t('figma.process.steps.research.title')}</h4>
                  <p className="text-gray-600">{t('figma.process.steps.research.description')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-lg mb-2">{t('figma.process.steps.design.title')}</h4>
                  <p className="text-gray-600">{t('figma.process.steps.design.description')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-lg mb-2">{t('figma.process.steps.prototype.title')}</h4>
                  <p className="text-gray-600">{t('figma.process.steps.prototype.description')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-lg mb-2">{t('figma.process.steps.development.title')}</h4>
                  <p className="text-gray-600">{t('figma.process.steps.development.description')}</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="/images/figma/process-illustration.svg" 
              alt={t('figma.process.illustrationAlt')}
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </motion.div>
        </div>

        <div className="mb-16">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{ clickable: true }}
            navigation
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="figma-swiper"
          >
            {figmaProjects.map((project) => (
              <SwiperSlide key={project.id}>
                <motion.div
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="relative aspect-video">
                    <img 
                      src={project.preview} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      <div>
                        <span className="text-sm text-white/80">{project.category}</span>
                        <h3 className="font-montserrat font-bold text-xl text-white">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <button 
                      className="text-purple-600 font-medium hover:text-purple-700 transition-colors"
                      onClick={() => {
                        // Ouvrir le projet Figma dans une nouvelle fenêtre ou modal
                      }}
                    >
                      {t('figma.viewProject')} <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            className="bg-white rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <i className="fas fa-paint-brush text-purple-600 text-xl"></i>
            </div>
            <h3 className="font-montserrat font-bold text-lg mb-2">Design System</h3>
            <p className="text-gray-600">Système de design complet avec composants, styles et guidelines.</p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <i className="fas fa-mobile-alt text-blue-600 text-xl"></i>
            </div>
            <h3 className="font-montserrat font-bold text-lg mb-2">Responsive Design</h3>
            <p className="text-gray-600">Designs adaptés à tous les appareils et tailles d'écran.</p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <i className="fas fa-vector-square text-orange-600 text-xl"></i>
            </div>
            <h3 className="font-montserrat font-bold text-lg mb-2">Composants UI</h3>
            <p className="text-gray-600">Bibliothèque de composants réutilisables et personnalisables.</p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <i className="fas fa-code text-green-600 text-xl"></i>
            </div>
            <h3 className="font-montserrat font-bold text-lg mb-2">Prêt pour le Dev</h3>
            <p className="text-gray-600">Designs optimisés pour une intégration facile et rapide.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 