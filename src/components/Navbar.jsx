import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = ({ textcolor, font, justify, scrollbg, logo }) => {
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
    { path: "/properties", label: t("navbar.properties") },
    { path: "/about", label: t("navbar.about") },
    { path: "/services", label: t("navbar.services") },
    { path: "/contact", label: t("navbar.contact") },
    { path: "/blogs", label: t("navbar.blogs") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? `bg-${scrollbg}` : "bg-transparent"
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 pt-1 lg:px-20">
        <div className="flex items-center lg:space-x-36 justify-between lg:justify-normal h-20">
          <Link to="/" className="flex-shrink-0">
            <img
              className="h-28 w-28 transition-all duration-300"
              src={logo}
              alt={t("navbar.logo_alt")}
            />
          </Link>
          <div
            className={`hidden lg:flex items-center justify-${justify} flex-1 space-x-6`}
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-${font} transition-all duration-300 px-2 py-2 rounded-md ${
                  location.pathname === item.path
                    ? "text-[#F2762E] bg-opacity-20 bg-[#F2762E]"
                    : `text-${textcolor} hover:text-[#F2762E]`
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* <LanguageSwitcher /> */}

          <Link to="/buy-property" className="hidden lg:block animate-bounce">
            <button
              className={`py-2 px-8  transition-all duration-300 font-medium border-2 border-black text-black bg-white hover:bg-black hover:text-white '
            }`}
            >
              {t("navbar.find_properties")}
            </button>
          </Link>

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
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "bg-[#F2762E] text-white"
                    : "text-white hover:bg-[#F2762E] hover:text-white"
                }`}
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/buy-property" className="block py-4">
              <button className="w-full text-black py-2 px-8 rounded-full bg-[#F2762E] hover:bg-opacity-90 transition-all duration-300 text-base font-medium">
                {t("navbar.find_properties")}
              </button>
            </Link>
            {/* <LanguageSwitcher /> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
