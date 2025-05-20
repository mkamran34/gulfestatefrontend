import React from "react";
import ServiceCard from "../../components/ServiceCard";
import service1 from "/assets/service1.webp";
import service2 from "/assets/service2.webp";
import service3 from "/assets/service3.webp";
import { Slide } from "react-awesome-reveal";
import { useTranslation } from 'react-i18next';

const ServicesSection = () => {
  const { t } = useTranslation('common');
  return (
    <section className="pb-6 overflow-hidden">
      <Slide direction="down">
        <h1 className="text-[#024959] font-bebas text-7xl pt-12 lg:pt-0 lg:text-8xl mb-2 text-center">
        {t('Services.section.Herotext')}
        </h1>
      </Slide>

      <div className="flex flex-col lg:flex-row gap-12 justify-center items-center py-6 px-2">
        <Slide>
          <ServiceCard
            img={service1}
            heading={t('Services.section.Cards.CardOne.heading')}
            text={t('Services.section.Cards.CardOne.text')}
            button={t('Services.section.Cards.CardOne.button')}
          />
        </Slide>


        <Slide direction="up">
          <ServiceCard
            img={service3}
            heading={t('Services.section.Cards.CardTwo.heading')}
            text={t('Services.section.Cards.CardTwo.text')}
            button={t('Services.section.Cards.CardTwo.button')}
          />
        </Slide>
        <Slide direction="right">
          <ServiceCard
            img={service2}
            heading={t('Services.section.Cards.CardThree.heading')}
            text={t('Services.section.Cards.CardThree.text')}
            button={t('Services.section.Cards.CardThree.button')}
          />
        </Slide>
      </div>
    </section>
  );
};

export default ServicesSection;
