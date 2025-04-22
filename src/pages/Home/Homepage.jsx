import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Hero from './Hero'
import AboutUsSection from './AboutUsSection'
import aboutsection2 from "/assets/aboutsection2.webp"
import Looking from './Looking'
import LookFooter from './LookFooter'
import ContactUsIntegration from "../Home/ContactUsIntegration"
import SetApart from './SetApart'
import Logo from "/assets/logo.svg";

const Homepage = () => {
  return (
    <main className='overflow-hidden'>
    <Navbar textcolor={"white"} justify={"center"} scrollbg={"black"} logo={Logo}/>
     
     <section>
      <Hero />
     </section>

     <section>
      <AboutUsSection />
     </section>

     <section>
      <img src={aboutsection2} alt='img' className='mx-auto my-6' />
     </section>

     <section>
      <Looking/>
     </section>

     <section className=''>
      <LookFooter/>
     </section>


     <section className='py-16'>
      <SetApart />
     </section> 

     <section>
      <ContactUsIntegration/>
     </section>

     <section>
      <Footer />
     </section>
    
    </main>
  )
}

export default Homepage
