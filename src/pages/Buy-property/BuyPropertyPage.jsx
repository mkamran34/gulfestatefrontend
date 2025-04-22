import React from "react";
import Logo from "/assets/black-logo.svg";
import Footer from "../../components/Footer";
import ShowProperty from "./ShowProperty";
import Navbar from '../../components/Navbar'

const BuyPropertyPage = () => {
  return (
    <main>
      <Navbar
        textcolor={"black"}
        font={"bold"}
        justify={"center"}
        scrollbg={"[#024959]"}
        logo={Logo}
      />

      <section className="my-20">
        <ShowProperty />
      </section>

      <section>
        <Footer />
      </section>
    </main>
  );
};

export default BuyPropertyPage;
