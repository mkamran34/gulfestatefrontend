import React from "react";
import Navbar from "../../components/Navbar";
import Logo from "/assets/logo.svg";
import Footer from "../../components/Footer";
import ServiceHero from "./ServiceHero";
import FaqSection from "../AboutUs/FaqSection";
import BecomeOwners from "./BecomeOwners";
import ServicesSection from "./ServicesSection";

const ServicePage = () => {
  return (
    <main>
      <Navbar
        textcolor={"white"}
        justify={"center"}
        scrollbg={"black"}
        logo={Logo}
      />
      <section className="">
        <ServiceHero />
      </section>

      <section className="pt-[8%]">
        <ServicesSection />
      </section>

      <section className="lg:pb-4">
        <FaqSection view={"hidden"} />
      </section>

      <section>
        <BecomeOwners />
      </section>

      <section>
        <Footer />
      </section>
    </main>
  );
};

export default ServicePage;
