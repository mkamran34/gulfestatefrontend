import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PropertiesHero from "./PropertiesHero";
import PropertyShow from "./PropertyShow";
import PropertyArea from "./PropertyArea";
import PropertyFooter from "./PropertyFooter";
import Logo from "/assets/logo.svg";

function PropertiesPage() {
  return (
    <main>
      <Navbar
        textcolor={"white"}
        justify={"center"}
        scrollbg={"black"}
        logo={Logo}
      />

      <section>
        <PropertiesHero />
      </section>

      <section>
        <PropertyShow />
      </section>

      <section>
        <PropertyArea />
      </section>

      <section>
        <PropertyFooter />
      </section>

      <Footer />
    </main>
  );
}

export default PropertiesPage;
