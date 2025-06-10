import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-gray text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-royal-blue to-accent-green rounded-lg flex items-center justify-center">
                <span className="text-white font-montserrat font-bold text-lg">DN</span>
              </div>
              <span className="font-montserrat font-bold text-xl">Digital Nexus</span>
            </div>
            <p className="text-gray-300 mb-6">
              Votre partenaire digital en Algérie pour transformer vos idées en réalités numériques performantes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-royal-blue/20 rounded-full flex items-center justify-center hover:bg-royal-blue transition-colors">
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-royal-blue/20 rounded-full flex items-center justify-center hover:bg-royal-blue transition-colors">
                <i className="fab fa-instagram text-sm"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-royal-blue/20 rounded-full flex items-center justify-center hover:bg-royal-blue transition-colors">
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
              <a href="https://wa.me/213666475367" className="w-10 h-10 bg-accent-green/20 rounded-full flex items-center justify-center hover:bg-accent-green transition-colors">
                <i className="fab fa-whatsapp text-sm"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6">Nos Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><button onClick={() => scrollToSection('services')} className="hover:text-accent-green transition-colors">Création Sites Web</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-accent-green transition-colors">E-commerce</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-accent-green transition-colors">Branding Digital</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-accent-green transition-colors">Formation WhatsApp</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-accent-green transition-colors">SEO & Marketing</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-accent-green transition-colors">Maintenance</button></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6">Liens Rapides</h3>
            <ul className="space-y-3 text-gray-300">
              <li><button onClick={() => scrollToSection('hero')} className="hover:text-accent-green transition-colors">Accueil</button></li>
              <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-accent-green transition-colors">Portfolio</button></li>
              <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-accent-green transition-colors">Témoignages</button></li>
              <li><button onClick={() => scrollToSection('pricing')} className="hover:text-accent-green transition-colors">Tarifs</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-accent-green transition-colors">Contact</button></li>
              <li><a href="#" className="hover:text-accent-green transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6">Contact</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt w-5 mr-3 text-accent-green"></i>
                <span>Avenue Khemisti, Mostaganem</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone w-5 mr-3 text-accent-green"></i>
                <a href="tel:0666475367" className="hover:text-accent-green transition-colors">0666 47 53 67</a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope w-5 mr-3 text-accent-green"></i>
                <a href="mailto:digitaldznexus@gmail.com" className="hover:text-accent-green transition-colors">digitaldznexus@gmail.com</a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-clock w-5 mr-3 text-accent-green"></i>
                <span>Lun-Ven: 9h-18h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Digital Nexus. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-accent-green transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-accent-green transition-colors">Conditions d'utilisation</a>
              <a href="#" className="hover:text-accent-green transition-colors">Mentions légales</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
