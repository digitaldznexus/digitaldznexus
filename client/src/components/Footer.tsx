import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: t('nav.home'), href: '/' },
      { label: t('nav.services'), href: '/services' },
      { label: t('nav.portfolio'), href: '/portfolio' },
      { label: t('nav.contact'), href: '/contact' }
    ],
    services: [
      { label: t('footer.services.web'), href: '/services#web' },
      { label: t('footer.services.whatsapp'), href: '/services#whatsapp' },
      { label: t('footer.services.branding'), href: '/services#branding' }
    ],
    contact: [
      { label: t('footer.contact.phone'), href: 'https://wa.me/213666475367' },
      { label: t('footer.contact.email'), href: 'mailto:digitaldznexus@gmail.com' },
      { label: t('footer.contact.address'), href: 'https://goo.gl/maps/xyz' }
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 via-blue-600/10 to-orange-500/10 backdrop-blur-3xl"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-center">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-center justify-center mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-orange-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="font-playfair font-bold text-xl">DN</span>
              </div>
              <span className="font-playfair font-bold text-2xl mt-2">Digital Nexus</span>
            </div>
            <p className="font-inter text-gray-400 mb-8 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-gradient-to-br hover:from-purple-600 hover:to-orange-500 flex items-center justify-center transition-all duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-gradient-to-br hover:from-purple-600 hover:to-orange-500 flex items-center justify-center transition-all duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-gradient-to-br hover:from-purple-600 hover:to-orange-500 flex items-center justify-center transition-all duration-300"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-playfair text-xl font-bold mb-6 text-gray-200 text-center">{t('footer.company')}</h3>
            <ul className="space-y-4 text-center">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="font-inter text-bleu hover:text-orange-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-gradient-to-br from-purple-600 to-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-playfair text-xl font-bold mb-6 text-gray-200 text-center">{t('footer.services.title')}</h3>
            <ul className="space-y-4 text-center">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="font-inter text-orange-400 hover:text-bleu transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-gradient-to-br from-purple-600 to-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="font-playfair text-xl font-bold mb-6 text-gray-200 text-center">{t('footer.contact.title')}</h3>
            <ul className="space-y-4 text-center">
              {footerLinks.contact.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-inter text-emerald-400 hover:text-orange-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-gradient-to-br from-purple-600 to-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col items-center justify-center text-center">
            <p className="font-inter text-gray-400 text-sm mb-4 md:mb-0">
              {t('footer.copyright', { year: currentYear })}
            </p>
            <div className="flex justify-center space-x-6">
              <Link 
                href="/privacy" 
                className="font-inter text-sm text-gray-400 hover:text-white transition-colors"
              >
                {t('footer.privacy')}
              </Link>
              <Link 
                href="/terms" 
                className="font-inter text-sm text-gray-400 hover:text-white transition-colors"
              >
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
