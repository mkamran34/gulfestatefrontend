import React from "react";
import aboutimg from "/assets/aboutsection_new.webp";
import { Link } from "react-router-dom";
import HeadingCapsule from "../../components/HeadingCapsule";
import { Fade, Slide } from "react-awesome-reveal";
import { useTranslation } from 'react-i18next';


const AboutUsSection = () => {
  const { t } = useTranslation('common');
  return (
    <section className="max-w-8xl mx-auto px-5 lg:py-5 lg:px-20">
      <div className="flex lg:flex-row flex-col-reverse lg:gap-16 gap-5">
        <img src={aboutimg} alt="about" className="mx-auto" />

        <div className="pt-12">
          <Slide direction="down">
            <HeadingCapsule text={t('buttons.AboutUs')} />
          </Slide>
          <Slide direction="right">
            <h1 className="text-[#024959] font-bebas text-7xl mb-2">
              {t('HomePage.aboutHeroOne')}
            </h1>
            <h1 className="text-[#024959] font-bebas text-7xl mb-2">
            {t('HomePage.aboutHeroTwo')}
            </h1>
          </Slide>

          <Slide direction="up">
            <div className="text-xl text-black/60 pt-5 pr-14">
            {t('HomePage.aboutHeroText')}
            </div>
          </Slide>

          <Slide direction="up" className="pt-10">
            <Link to="/about">
              <button
                className={`py-2 px-8  transition-all duration-300 text-lg font-medium border-2 border-[#F2762E] text-white hover:bg-[#024959] bg-[#F2762E] hover:text-white'
            }`}
              >
                {t('buttons.Readmore')}
              </button>
            </Link>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
