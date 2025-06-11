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
      { label: 'Création Sites Web', href: '/services#web' },
      { label: 'Formation WhatsApp', href: '/services#whatsapp' },
      { label: 'Branding Digital', href: '/services#branding' }
    ],
    contact: [
      { label: 'WhatsApp', href: 'https://wa.me/213555555555' },
      { label: 'contact@digitalnexus.dz', href: 'mailto:contact@digitalnexus.dz' },
      { label: 'Mostaganem, Algérie', href: 'https://goo.gl/maps/xyz' }
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 via-blue-600/10 to-orange-500/10 backdrop-blur-3xl"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-orange-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="font-playfair font-bold text-xl">DN</span>
              </div>
              <span className="font-playfair font-bold text-2xl">Digital Nexus</span>
            </Link>
            <p className="font-inter text-gray-400 mb-8 leading-relaxed">
              Votre partenaire digital en Algérie pour créer, développer et propulser votre présence en ligne.
            </p>
            <div className="flex space-x-6">
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
            <h3 className="font-playfair text-xl font-bold mb-6">Entreprise</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="font-inter text-gray-400 hover:text-white transition-colors flex items-center group"
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
            <h3 className="font-playfair text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="font-inter text-gray-400 hover:text-white transition-colors flex items-center group"
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
            <h3 className="font-playfair text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              {footerLinks.contact.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-gray-400 hover:text-white transition-colors flex items-center group"
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
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-inter text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Digital Nexus. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <Link 
                href="/privacy" 
                className="font-inter text-sm text-gray-400 hover:text-white transition-colors"
              >
                Politique de confidentialité
              </Link>
              <Link 
                href="/terms" 
                className="font-inter text-sm text-gray-400 hover:text-white transition-colors"
              >
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
