import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaLinkedin, FaFacebook } from 'react-icons/fa';

const FloatingSidebar = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const bubbleRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === i18n.language) || languages[0];
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (bubbleRef.current && !bubbleRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const blinkInterval = setInterval(() => {
      setIsBlinking(prev => !prev);
    }, 500);

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      clearInterval(blinkInterval);
    };
  }, []);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4">
      <div className="bg-white rounded-2xl shadow-lg py-3 px-1 flex flex-col gap-4">
        <div className="relative" ref={bubbleRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center justify-center gap-2 p-1 rounded-lg transition-colors duration-300
              ${isOpen 
                ? 'text-orange-500' 
                : `${isBlinking 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-gray-200 text-gray-700'
                } hover:text-orange-500`
              }`}
          >
            <Globe className="w-6 h-6" />
            <span className="text-xs font-medium">
              {getCurrentLanguage().code.toUpperCase()}
            </span>
          </button>

          {isOpen && (
            <div className="absolute right-full mr-2 top-0 bg-white rounded-lg shadow-lg p-2 w-32">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => changeLanguage(language.code)}
                  className={`flex items-center space-x-2 w-full px-2 py-1 text-sm rounded transition-colors duration-200
                    ${i18n.language === language.code 
                      ? 'bg-orange-500 bg-opacity-10 text-orange-500 font-medium' 
                      : `${isBlinking 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-gray-200 text-gray-700'
                      } hover:bg-orange-500 hover:bg-opacity-5`
                    }`}
                >
                  <span>{language.flag}</span>
                  <span>{language.name}</span>
                  <span className="ml-auto text-xs font-medium">
                    {language.code.toUpperCase()}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Rest of the component remains the same */}
        <div className="w-full h-px bg-gray-200" />

        <div className="flex flex-col gap-4 items-center">
          {/* Social media icons */}
          <a
            href="https://www.instagram.com/gulfestates.ae?igsh=bjZ3MGt2NjdpcGtt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-orange-500 transition-colors duration-200"
            aria-label={t("contact.footer.ariaLabels.instagram")}
          >
            <AiFillInstagram className="w-7 h-7" />
          </a>
          <a
            href="https://www.linkedin.com/company/gulfestatesae/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-orange-500 transition-colors duration-200"
            aria-label={t("contact.footer.ariaLabels.linkedin")}
          >
            <FaLinkedin className="w-7 h-7" />
          </a>
          <a
            href="https://www.facebook.com/gulfestatesuae"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-orange-500 transition-colors duration-200"
            aria-label={t("contact.footer.ariaLabels.facebook")}
          >
            <FaFacebook className="w-7 h-7" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FloatingSidebar;