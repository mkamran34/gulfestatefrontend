import React, { useEffect, useState } from "react";
import heroimg from "/assets/hero_new.webp";
import PropertySearchBar from "../../components/PropertiesSearchBar";
import { useTranslation } from 'react-i18next';


const Hero = () => {
  const { t } = useTranslation('common');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="lg:flex justify-between bg-[#024959] overflow-hidden">
      <div
        className={`lg:pt-36 pt-28 lg:pl-20 pl-5 text-white transform transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="font-bebas lg:text-9xl text-left text-7xl">
          {t('HomePage.heroOne')}
        </h1>
        <p className="font-bebas lg:text-9xl text-left text-7xl">
          {t('HomePage.herotwo')}<span className="text-[#F2762E]">.</span>
        </p>
        <div className="text-white/60 lg:w-[900px] lg:text-2xl py-4 text-lg lg:pr-36">
          {t('HomePage.heroSub')}
        </div>
        <div className="max-w-3xl">
          <PropertySearchBar />
        </div>
      </div>

      <div
        className={`transform transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <img src={heroimg} alt="heroimg" />
      </div>
    </section>
  );
};

export default Hero;
