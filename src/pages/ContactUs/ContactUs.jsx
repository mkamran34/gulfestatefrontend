import React from "react";
import Navbar from "../../components/Navbar";
import Logo from "/assets/black-logo.svg";
import Footer from "../../components/Footer";
import ContactHero from "./ContactForm";
import ContactForm from "./ContactForm";
import ContactFooter from "./ContactFooter";
import ContactBottom from "./ContactBottom";

function ContactUs() {
  return (
    <main>
      <section>
        <Navbar
          textcolor={"black"}
          font={"bold"}
          justify={"center"}
          scrollbg={"[#024959]"}
          logo={Logo}
        />
      </section>

      <section className="pt-20">
        <ContactForm />
      </section>

      <section>
        <ContactFooter />
      </section>

      <section>
        <ContactBottom />
      </section>

      <section>
        <Footer />
      </section>
    </main>
  );
}

export default ContactUs;
