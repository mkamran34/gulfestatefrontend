import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Logo from "/assets/logo.svg";
import AboutHero from "./AboutHero";
import Leadership from "./Leadership";
import FaqSection from "./FaqSection";
import AboutSection from "./AboutSection";
import ContactFooter from "../ContactUs/ContactFooter";

const AboutPage = () => {
  return (
    <main>
      <Navbar
        textcolor={"white"}
        justify={"center"}
        scrollbg={"black"}
        logo={Logo}
      />

      <section className="">
        <AboutHero />
      </section>

      <section>
        <AboutSection/>
      </section>

      <section className="pt-6 pb-10">
        <Leadership />
      </section>

      {/* <section className="mb-10">
        <FaqSection />
      </section> */}

      <section className="mb-10">
        <ContactFooter />
      </section>

      <section>
        <Footer />
      </section>
    </main>
  );
};

export default AboutPage;
