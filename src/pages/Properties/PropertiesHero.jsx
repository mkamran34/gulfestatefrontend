import React from "react";
import Propertiesimg from "/assets/Propertiesimg.webp";
import PropertiesSearchBar from "../../components/PropertiesSearchBar";
import { Slide } from "react-awesome-reveal";
import { useTranslation } from 'react-i18next';

const PropertiesHero = () => {
  const { t } = useTranslation('common');
  return (
    <section className="relative flex flex-col items-center justify-center lg:py-12 lg:min-h-screen w-full min-h-[80vh] overflow-hidden">
      <Slide className="relative flex flex-col items-center justify-center px-4 lg:px-6">
        <h1 className="uppercase font-bebas text-5xl   lg:text-9xl text-white text-center mt-24">
          {t('Properties.heroOne')} <p>{t('Properties.herotwo')}</p>
        </h1>
      </Slide>
      <Slide direction="right" className="w-full max-w-4xl">
        <PropertiesSearchBar />
      </Slide>

      <div
        className="absolute w-full h-full lg:h-screen bg-cover -z-10"
        style={{
          backgroundImage: `url(${Propertiesimg})`,
        }}
      />
    </section>
  );
};

export default PropertiesHero;
