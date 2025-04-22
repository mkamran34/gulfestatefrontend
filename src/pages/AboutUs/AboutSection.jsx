import React from "react";
import abotimg from "/assets/aboutsectionImg.webp";
import { Slide } from "react-awesome-reveal";
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation('common');
  return (
    <section className="max-w-7xl mx-auto pt-8">
      <div className="flex my-8 lg:gap-16 lg:flex-row flex-col">
        <img src={abotimg} alt="img" />

        <div className=" lg:my-8 mx-6 lg:mx-0 ">
          <Slide>
            <h2 className="font-bebas lg:text-8xl text-center text-6xl lg:text-left tracking-wider text-[#024959]">
            {t('AboutPage.AboutSection.headingOne')}
            </h2>
          </Slide>
          <Slide direction="right">
            <p className="lg:text-6xl text-5xl tracking-wider lg:text-left text-center text-[#F2762E] mt-2 lg:ml-20 font-bebas">
            {t('AboutPage.AboutSection.headingTwo')}
            </p>
          </Slide>

          <div className="text-justify lg:px-24  lg:text-lg lg:pr-12 px-6 pt-6 text-black/60">
            <Slide>
              <p className="mb-4">
                {" "}
                {t('AboutPage.AboutSection.textOne')}
              </p>
            </Slide>
            <Slide direction="right">
              <p className="mb-4">
              {t('AboutPage.AboutSection.textTwo')}
              </p>
            </Slide>
            <Slide>
              <p className="mb-4">
              {t('AboutPage.AboutSection.textThree')}
              </p>
            </Slide>
            <Slide direction="right">
              {" "}
              {t('AboutPage.AboutSection.textFour')}
            </Slide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
