import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import LanguageSwitcher from "./LanguageSwitcher";

const NavbarLandingPage = ({ textcolor, font, justify, scrollbg, logo }) => {
  const { t } = useTranslation("common");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key:"1", id: "about-dubai", label: "Acerca de Dubái" },
    { key:"2", id: "why-dubai", label: "¿Por qué Dubái?" },
    { key:"3", id: "featured-projects", label: "Proyectos Destacados" },
    { key:"4", id: "our-partners", label: "Nuestros Socios" },
    { key:"5", id: "testimonials", label: "Testimonios" },
    { key:"6", id: "about-us", label: "Sobre Nosotros" },
    { key:"7", id: "our-services", label: "Nuestros Servicios" },
    { key:"8", id: "contact-us", label: "Contáctanos" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? `bg-${scrollbg}` : "bg-transparent"
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 pt-1 lg:px-20">
        <div className="flex items-center lg:space-x-36 justify-between lg:justify-normal h-20">
        <a 
  href="#" 
  className="flex-shrink-0"
  onClick={(e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }}
>
  <img
    className="h-28 w-28 transition-all duration-300"
    src={logo}
    alt={t("navbar.logo_alt")}
  />
</a>
          <div
            className={`hidden lg:flex items-center justify-${justify} flex-1 space-x-6 !m-0`}
          >
{navItems.map((item) => (
  <button
    key={item.key}
    onClick={() => {
      const element = document.getElementById(item.id);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top;
        const offsetPosition = offsetTop + window.pageYOffset - 90; // 100px offset
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }}
    className={`font-${font} transition-all duration-300 px-2 py-2 rounded-md cursor-pointer ${
      location.hash === `#${item.id}`
        ? "text-[#F2762E] bg-opacity-20 bg-[#F2762E]"
        : `text-${textcolor} hover:text-[#F2762E]`
    }`}
  >
    {item.label}
  </button>
))}
          </div>

          {/* <LanguageSwitcher /> */}

          {/* <Link to="/buy-property" className="hidden lg:block animate-bounce">
            <button
              className={`py-2 px-8  transition-all duration-300 font-medium border-2 border-black text-black bg-white hover:bg-black hover:text-white '
            }`}
            >
              {t("navbar.find_properties")}
            </button>
          </Link> */}

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#F2762E] transition-colors duration-300"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden bg-black w-64 overflow-y-auto ease-in-out transition-all duration-300 z-50`}
      >
        <div className="p-5">
          <button
            onClick={toggleMenu}
            className="absolute top-5 right-5 text-white hover:text-[#F2762E] transition-colors duration-300"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="mt-10 space-y-2">
          {navItems.map((item) => (
  <button
    key={item.id}
    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
      location.hash === `#${item.id}`
        ? "bg-[#F2762E] text-white"
        : "text-white hover:bg-[#F2762E] hover:text-white"
    }`}
    onClick={() => {
      const element = document.getElementById(item.id);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top;
        const offsetPosition = offsetTop + window.pageYOffset - 100; // 100px offset
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      toggleMenu(); // Close the mobile menu after clicking
    }}
  >
    {item.label}
  </button>
))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLandingPage;
