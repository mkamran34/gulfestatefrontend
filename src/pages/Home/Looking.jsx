import React from "react";
import Bcard from "../../components/Bcard";
import looking from "/assets/looking.webp";
import { Fade, Slide } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

function Looking() {
  const { t } = useTranslation("common");
  return (
    <section className="m-4 flex justify-center items-center">
      <div className="flex flex-col  lg:items-start justify-center items-center ">
        <Slide>
          <h1 className="uppercase text-[#024959] lg:text-6xl text-6xl font-bebas">
            {t("HomePage.lookingHero")}
          </h1>
        </Slide>

        <div className="flex justify-center lg:gap-12 gap-4 lg:flex-row flex-col pt-6">
          <Fade>
            <Bcard
              img={looking}
              heading={t("HomePage.lookingCardOne.heading")}
              subheading1={t("HomePage.lookingCardOne.text")}
              subheading2={""}
            />
          </Fade>

          <Fade>
            <Bcard
              img={looking}
              heading={t("HomePage.lookingCardTwo.heading")}
              subheading1={t("HomePage.lookingCardTwo.text")}
              subheading2={""}
            />
          </Fade>

          <Fade>
            <Bcard
              img={looking}
              heading={t("HomePage.lookingCardThree.heading")}
              subheading1={t("HomePage.lookingCardThree.text")}
              subheading2={""}
            />
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Looking;
