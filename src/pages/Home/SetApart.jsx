import React from "react";
import setapart from "/assets/setapart.png";
import HeadingCapsule from "../../components/HeadingCapsule";
import { CircleCheck, Medal, PenLine } from "lucide-react";
import { Slide } from "react-awesome-reveal";
import { useTranslation } from 'react-i18next';

const SetApart = () => {
  const { t } = useTranslation('common');
  return (
    <section className="max-w-8xl mx-auto px-5 lg:py-10 lg:px-20">
      <div className="flex lg:flex-row-reverse flex-col-reverse lg:gap-16 gap-5">
        <img src={setapart} alt="about" className="mx-auto" />

        <div className="pt-4">
          {/* <Slide direction="up">
            <HeadingCapsule text={"Our Benefits"} />
          </Slide> */}
          <Slide direction="up">
            <h1 className="text-[#024959] font-bebas text-7xl lg:text-8xl mb-2 ">
            {t('HomePage.setApart.heading')}
            </h1>
          </Slide>

          <div className="lg:text-xl text-lg  text-black/60 pr-20">
            <div className="py-5">
              <Slide>
                <h1 className="text-black font-bebas lg:text-5xl text-3xl mb-3 flex items-center">
                  <Medal className="text-[#F2762E] w-10 h-10 mr-2" />
                  {t('HomePage.setApart.pointOne.heading')}
                </h1>
                <p>
                {t('HomePage.setApart.pointOne.text')}
                </p>
              </Slide>
            </div>

            <div className="py-6">
              <Slide direction="up">
                <h1 className="text-black font-bebas lg:text-5xl text-3xl mb-3 flex items-center">
                  <PenLine className="text-[#F2762E] w-10 h-10 mr-2" />
                  {t('HomePage.setApart.pointTwo.heading')}
                </h1>
                <p>
                {t('HomePage.setApart.pointTwo.text')}
                </p>
              </Slide>
            </div>

            <div className="py-6">
              <Slide>
                <h1 className="text-black font-bebas lg:text-5xl text-3xl mb-3 flex items-center">
                  <CircleCheck className="text-[#F2762E] w-10 h-10 mr-2" />
                  {t('HomePage.setApart.pointThree.heading')}
                </h1>
                <p>
                {t('HomePage.setApart.pointThree.text')}
                </p>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetApart;
