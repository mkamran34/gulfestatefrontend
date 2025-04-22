import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const FooterLandingPage = () => {
  const { t } = useTranslation('common');

  const sections = [
    {
      title: "Enlaces Rápidos",
      links: [
        { key:"1", id: "about-dubai", label: "Acerca de Dubái" },
        { key:"2", id: "why-dubai", label: "¿Por qué Dubái?" },
        { key:"3", id: "featured-projects", label: "Proyectos Destacados" },
        { key:"4", id: "our-partners", label: "Nuestros Socios" },
        { key:"5", id: "testimonials", label: "Testimonios" },
        { key:"6", id: "about-us", label: "Sobre Nosotros" },
        { key:"7", id: "our-services", label: "Nuestros Servicios" },
      ],
    },
    {
      title: "Contacto",
      links: [
        { key:"8", id: "contact-us", label: "Contáctanos" },
        // { name: t('footer.contact.links.privacy_policy'), url: '/privacy-policy' },
      ],
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-black" />
      
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">
          {/* Brand section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">
             {t('footer.brand_name')}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {/* {t('footer.brand_description')} */}
              Descubra la propiedad de sus sueños con nuestra orientación experta y listados de propiedades completos.
            </p>
          </div>

          {/* Navigation sections */}
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4 text-gray-700">
                {section.title}
                {/* Enlaces Rápidos */}
                {/* Compañía */}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={link.key}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.id);
                      if (element) {
                        const offsetTop = element.getBoundingClientRect().top;
                        const offsetPosition = offsetTop + window.pageYOffset - 90; // 90px offset
                        
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                      }
                    }}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm inline-block relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-300 transition-all duration-200 group-hover:w-full" />
                  </button>
                </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © {currentYear} {t('footer.brand_name')}. Reservados todos los derechos.
            </p>

            {/* Social links */}
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/gulfestatesuae"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                aria-label={t('footer.social.facebook')}
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/gulfestates.ae?igsh=bjZ3MGt2NjdpcGtt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                aria-label={t('footer.social.instagram')}
              >
                <AiFillInstagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/gulfestatesae/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                aria-label={t('footer.social.linkedin')}
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLandingPage;