import React from "react";
import area1 from "/assets/areas/area1.png";
import area2 from "/assets/areas/area2.png";
import area3 from "/assets/areas/area3.png";
import area4 from "/assets/areas/area4.png";
import area5 from "/assets/areas/area5.png";
import area6 from "/assets/areas/area6.png";
import area7 from "/assets/areas/area7.png";
import area8 from "/assets/areas/area8.png";
import area9 from "/assets/areas/area9.png";
import area10 from "/assets/areas/area10.png";
import area11 from "/assets/areas/area11.png";
import area12 from "/assets/areas/area12.png";
import Cardforproperties from "../../components/Cardforproperties";
import { useTranslation } from 'react-i18next';

function PropertyArea() {
  const { t } = useTranslation('common');
  return (
    <>
      <div className="min-h-screen flex flex-col w-full px-6 lg:px-32">
        <div className=" text-center uppercase text-7xl my-4 lg:text-9xl font-bebas text-[#024959]">
        {t('Properties.areaHero')}
        </div>
        <div className=" text-center lg:text-lg md:text-4xl text-2xl text-black mb-6">
        {t('Properties.areaText')}
        </div>

        <div className="flex lg:flex-row flex-col justify-center gap-4 ">
          <Cardforproperties img={area1} link={"/"} heading="Downtown" />
          <Cardforproperties img={area2} link={"/"} heading="Dubai Marina" />
          <Cardforproperties
            img={area3}
            link={"/"}
            heading="Emaar beachfront"
          />
        </div>
        <div className="flex lg:flex-row flex-col justify-center gap-4 mt-5">
          <Cardforproperties img={area4} link={"/"} heading="District one" />
          <Cardforproperties img={area5} link={"/"} heading="Sobha Hartland" />
          <Cardforproperties img={area6} link={"/"} heading="Meydan" />
        </div>

        <div className="flex justify-center lg:flex-row flex-col gap-4 mt-5">
          <Cardforproperties
            img={area7}
            link={"/"}
            heading="Dubai Creek Harbour"
          />
          <Cardforproperties
            img={area8}
            link={"/"}
            heading="Dubai Heels Estate"
          />
          <Cardforproperties img={area9} link={"/"} heading="Business Bay" />
        </div>

        <div className="flex justify-center lg:flex-row flex-col gap-4 mt-5">
          <Cardforproperties img={area10} link={"/"} heading="Dubai South" />
          <Cardforproperties img={area11} link={"/"} heading="JBC" />
          <Cardforproperties img={area12} link={"/"} heading="WORLD ISLANDS" />
        </div>
      </div>
    </>
  );
}

export default PropertyArea;
