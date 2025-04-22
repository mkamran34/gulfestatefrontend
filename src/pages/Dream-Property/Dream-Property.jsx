import React, { useState } from "react";
import NavbarLandingPage from "../../components/NavbarLandingPage";
import { Link, useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Logo from "/assets/logo.svg";
import PhoneInput from "react-phone-input-2";
import FooterLandingPage from "../../components/FooterLandingPage";
import "react-phone-input-2/lib/style.css";
import { useTranslation } from "react-i18next";
const DreamProperty = () => {
  const { t } = useTranslation("common");

  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+1",
    phone: "",
    message: "submitted from why-dubai ",
  });
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  // Handle text fields (name, email)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle phone field changes
  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phone: value,
    });
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://gulf-backend-dumn.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // sends { name, email, phone }
        }
      );

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "¡Mensaje enviado exitosamente!",
        });
        // Reset form fields
        setFormData({ name: "", email: "", phone: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: "No se pudo enviar el mensaje. Inténtalo de nuevo.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Se ha producido un error. Inténtelo de nuevo más tarde.",
      });
    }
  };
  const projects = [
    {
      title: "Ibiza by Samana",
      subtitle: "Apartments",
      price: " $205K",
      imageUrl: "assets/dreamp/Ibiza.png",
    },
    {
      title: "Skyrise by Binghatti",
      subtitle: "Apartments",
      price: " $315K",
      imageUrl: "assets/dreamp/Skyrise.png",
    },
    {
      title: "Al Hamra Waterfront  by Al Hamra",
      subtitle: "Apartments",
      price: " $328K",
      imageUrl: "assets/dreamp/alhamra.png",
    },
    {
      title: "Hartland II by Sobha",
      subtitle: "Apartments",
      price: " $355K",
      imageUrl: "assets/dreamp/Hartland.png", // Example placeholder
    },
    {
      title: "Ellwood by Sobha",
      subtitle: "Villas",
      price: " $2.125M",
      imageUrl: "assets/dreamp/elwood.png",
    },
  ];
  const row1 = projects.slice(0, 3);
  const row2 = projects.slice(3);
  return (
    <>
      <div>
        <NavbarLandingPage
          textcolor={"white"}
          justify={"center"}
          scrollbg={"black"}
          logo={Logo}
        />

        <section
          className="relative flex items-center justify-start h-[42rem] bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/dreamp/Hero Banner.png')`,
            // Replace with your hero background image
          }}
        >
          {/* Left-aligned text content */}
          <div className="text-white text-left max-w-7xl  pl-10 xl:pl-44">
            <h1 className="text-4xl font-bebas  md:text-8xl ">
              {/* SECURE YOUR <br /> DREAM PROPERTY IN DUBAI */}
              Descubre las Oportunidades Inmobiliarias Más Rentables de Dubái
            </h1>
            <p className="mt-4 text-lg md:text-2xl xl:text-3xl font-bold ">
              Propiedades Exclusivas, Experiencia confiable
            </p>
          </div>
        </section>
      </div>
      <div id="about-dubai" className="bg-white text-black py-12">
        {/* Outer Container */}
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8">
          {/* LEFT COLUMN */}
          <div className="md:w-2/3 space-y-4">
            <h2 className="text-xl md:text-2xl font-bebas font-semibold uppercase tracking-wider">
              Dubái: El Mejor Destino de Inversión
            </h2>
            <p className="md:pb-5 md:text-xl">
            Dubái es un centro global de innovación, negocios y lujo, que ofrece una combinación inigualable de infraestructura moderna, ubicación estratégica y estabilidad económica. Como una de las ciudades de más rápido crecimiento, se ha convertido en un epicentro financiero y turístico, atrayendo a empresarios, corporaciones e inversionistas de todo el mundo. Con sus políticas favorables para los negocios, seguridad y alta calidad de vida, Dubái sigue estableciendo nuevos estándares de excelencia global.            </p>
            <p className='md:text-xl'>
            Más allá de su próspera economía, Dubái ofrece infraestructura de clase mundial, incentivos fiscales y un marco regulador transparente, lo que lo convierte en un entorno ideal para la inversión. Sus desarrollos vanguardistas, iniciativas de ciudad inteligente y liderazgo visionario impulsan un crecimiento constante en múltiples sectores, incluyendo tecnología, comercio y bienes raíces. Ya sea que busques altos rendimientos, apreciación de capital o estabilidad a largo plazo, Dubái presenta un panorama de inversión seguro y rentable.            </p>
            {/* <p className='md:pb-5 md:text-xl'>
                          Dubai’s economy is diverse and rapidly growing, supported by sectors such as
                          real estate, tourism, finance, and technology. The government’s pro-business
                          policies, tax-free environment, and long-term residency programs make it an
                          attractive destination for investors and entrepreneurs. The city’s world-class
                          infrastructure, efficient transport system, and high standard of living further
                          enhance its global appeal.
                      </p>
                      <p className='md:text-xl'>
                          Real estate in Dubai stands out as one of the most lucrative investment
                          opportunities worldwide. The market offers high rental yields, stable pricing,
                          and investor-friendly regulations, including full property ownership for foreign
                          nationals. Additionally, Dubai is committed to sustainability and innovation.
                          Whether for residential living, business expansion, or investment growth,
                          Dubai provides an unmatched environment for success.
                      </p> */}
          </div>

          {/* RIGHT COLUMN (FORM) */}
          <div id="contact-us" className="max-w-sm border border-gray-300 p-6">
            {/* Heading */}
            <h3 className="text-lg font-bold mb-4 uppercase">
              {/* Register Your Interest */}
              Registra Tu Interés
            </h3>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold uppercase mb-1"
                >
                  Nombre Completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ingresa tu nombre completo"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 focus:outline-none"
                  required
                />
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold uppercase mb-1"
                >
                  Correo Electrónico <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ingresa tu correo electrónico"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 focus:outline-none"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-semibold uppercase mb-1">
                Número de Teléfono
                </label>
                <PhoneInput
                  country={"ae"} // Defaults to +971 (UAE)
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="Enter phone number"
                  inputStyle={{
                    width: "100%",
                    border: "1px solid #d1d5db", // Tailwind's gray-300
                    height: "40px",
                  }}
                  buttonStyle={{
                    border: "1px solid #d1d5db",
                    backgroundColor: "white",
                  }}
                  dropdownStyle={{
                    border: "1px solid #d1d5db",
                  }}
                />
              </div>

              {/* Privacy Policy Note */}
              <p className="text-sm text-gray-500">
              Por favor, visita nuestra{" "}
                <Link to="/privacy-policy" className="underline">
                política de privacidad
                </Link>{" "}
                para comprender cómo Gulf Estates maneja tus datos personales.
              </p>

              {/* Checkbox (optional) */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="updates"
                  className="h-6 w-6 border border-gray-300"
                />
                <label htmlFor="updates" className="ml-2 text-sm">
                  {/* Keep me updated on news and offers */}
                  Mantenerme actualizado sobre noticias y ofertas
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-2 uppercase font-semibold hover:bg-gray-800 transition-colors"
              >
                Entregar
              </button>

              {submitStatus.message && (
                <div
                  className={`p-4 rounded-md ${
                    submitStatus.type === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      {/* Why invest in dubai */}
      <section id="why-dubai" className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Black container holding text & image */}
          <div className="bg-black p-6 md:p-8 flex flex-col md:flex-row items-center">
            {/* Left Side (Text) */}
            <div className="md:w-1/2 text-white">
              <h2 className="text-2xl font-bold uppercase mb-4">
                {/* Why Invest In Dubai? */}
                ¿Por qué invertir en Dubái?
              </h2>
              {/* Each item separated by a horizontal line */}
              <ul className="border-t border-white divide-y divide-white">
                <li className="py-4">
                  <h3 className="text-lg font-semibold">
                    {/* High ROI &amp; Tax-free Benefits */}
                    Alto Retorno y Beneficios Libres de Impuestos
                  </h3>
                  <p className="text-sm mt-1">
                    {/* Dubai offers some of the world’s most attractive returns on investment. */}
                    Dubái ofrece algunos de los rendimientos de inversión más
                    atractivos del mundo.
                  </p>
                </li>

                <li className="py-4">
                  <h3 className="text-lg font-semibold">
                    {/* World-Class Developments */}
                    Desarrollos de Clase Mundial
                  </h3>
                  <p className="text-sm mt-1">
                    {/* Explore iconic luxury residences, waterfront properties, and exclusive gated communities. */}
                    Descubre residencias de lujo icónicas, propiedades frente al
                    mar y exclusivas comunidades cerradas.
                  </p>
                </li>

                <li className="py-4">
                  <h3 className="text-lg font-semibold">
                    {/* Flexible Payment Plans */}
                    Planes de Pago Flexibles
                  </h3>
                  <p className="text-sm mt-1">
                    {/* Invest with confidence through easy and investor-friendly financing options. */}
                    Invierte con confianza a través de opciones de
                    financiamiento fáciles y favorables para inversionistas.
                  </p>
                </li>

                <li className="py-4">
                  <h3 className="text-lg font-semibold">
                    {/* Booming Economy &amp; Global Hub */}
                    Economía en Expansión y Centro Global
                  </h3>
                  <p className="text-sm mt-1">
                    {/* Dubai is a thriving business and tourism destination with endless growth potential. */}
                    Dubái es un próspero destino de negocios y turismo con un
                    potencial de crecimiento ilimitado.
                  </p>
                </li>

                <li className="py-4">
                  <h3 className="text-lg font-semibold">
                    {/* Golden Visa Opportunities */}
                    Oportunidades de Visa de Residencia
                  </h3>
                  <p className="text-sm mt-1">
                    {/* Secure long-term residency with real estate investments. */}
                    Asegura la residencia a largo plazo con inversiones
                    inmobiliarias.
                  </p>
                </li>
              </ul>
            </div>

            {/* Right Side (Image) */}
            <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8">
              <img
                src="assets/dreamp/Why invest in Dubai.png"
                alt="Dubai Skyline"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="featured-projects" className="max-w-7xl mx-auto py-8 px-4">
        {/* Section Title */}
        <h2 className="text-2xl font-bebas font-semibold uppercase mb-8 tracking-wider">
          {/* Feature Projects */}
          Proyectos Destacados
        </h2>

        {/* Row 1: 3 cards (grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {row1.map((project, index) => (
            <div key={index} className="text-left">
              {/* Title Above Image */}
              <p className="font-semibold lg:text-xl mb-2">{project.title}</p>

              {/* Image */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto object-cover"
              />

              {/* Text Below Image */}
              <div className="mt-4 text-sm uppercase text-gray-800 space-y-1">
                <p className="font-semibold">{project.subtitle}</p>
                <p>{project.fromText}</p>
                <p className="font-semibold">
                  Starting From <br />
                  <span className="lg:text-xl">{project.price}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: 2 cards (centered using flex) */}
        <div className="flex flex-col md:flex-row justify-center items-center  gap-8 lg:gap-10 mt-8">
          {row2.map((project, index) => (
            <div key={index} className="text-left">
              {/* Title Above Image */}
              <p className="font-semibold lg:text-xl mb-2 ">{project.title}</p>

              {/* Image */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full md:w-[15rem] lg:w-[24rem] h-auto  object-cover"
              />

              {/* Text Below Image */}
              <div className="mt-4 text-sm uppercase text-gray-800 space-y-1">
                <p className="font-semibold">{project.subtitle}</p>
                <p>{project.fromText}</p>
                <p className="font-semibold">
                  Starting From <br />
                  <span className="lg:text-xl">{project.price}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* OUR PARTNERS */}
      <section id="our-partners" className="bg-white py-12">
        <div className="max-w-7xl mx-auto border border-black px-4 py-8">
          {/* Headings */}
          <h2 className="text-center text-xl md:text-2xl font-bold font-bebas uppercase mb-2">
            {/* Our Partners */}
            Nuestros Socios
          </h2>
          <p className="text-center text-sm md:text-base mb-8">
            {/* Partnered with Leading Developers Across the UAE */}
            Asociados con los Principales Desarrolladores de los EAU
          </p>

          {/* Two Rows: first row has 4 columns, second row has 5 */}
          <div className="space-y-8">
            {/* First Row (4 columns) */}
            <div className="grid grid-cols-4 gap-6 items-center justify-items-center">
              {/* Replace with your actual logo sources */}
              <img
                src="assets/dreamp/logos/Emaar.png"
                alt="Partner 1"
                className="w-40 h-16 object-contain"
              />
              <img
                src="assets/dreamp/logos/Sobha.png"
                alt="Partner 2"
                className="w-40 h-16 object-contain"
              />
              <img
                src="assets/dreamp/logos/Binghatti.png"
                alt="Partner 3"
                className="w-40 h-16 object-contain"
              />
              <img
                src="assets/dreamp/logos/Omniyat.png"
                alt="Partner 4"
                className="w-40 h-16 object-contain"
              />
            </div>

            {/* Second Row (5 columns) */}
            <div className="grid grid-cols-5 gap-6 items-center justify-items-center">
              <img
                src="assets/dreamp/logos/Ellington.png"
                alt="Partner 5"
                className="w-40 h-16 object-contain"
              />
              <img
                src="assets/dreamp/logos/Damac.png"
                alt="Partner 6"
                className="w-40 h-16 object-contain"
              />
              <img
                src="assets/dreamp/logos/Aldar.png"
                alt="Partner 7"
                className="w-40 h-16 object-contain"
              />
              <img
                src="assets/dreamp/logos/Danube.png"
                alt="Partner 8"
                className="w-40 h-16 object-contain"
              />
              <img
                src="assets/dreamp/logos/Azizi.png"
                alt="Partner 9"
                className="w-32 h-16 object-contain"
              />
            </div>
          </div>

          {/* Final note */}
          <p className="text-center text-sm md:text-base mt-6">
            {/* And many more... */}
            Y muchos más...
          </p>
        </div>
      </section>
      {/* WHAT OYR CLIENTS SAY */}
      <section id="testimonials" className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <h2 className="text-xl md:text-2xl font-bold uppercase mb-8">
            {/* What Our Clients Say */}
            Lo Que Dicen Nuestros Clientes
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-black text-white p-8 min-h-[24rem] flex flex-col justify-between">
              {/* Stars (white and bigger) */}
              <div className="mb-4 flex">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-white text-2xl mr-1" />
                ))}
              </div>
              {/* Testimonial Text */}
              <p className="text-sm mb-6 leading-relaxed">
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat. */}
                Our dream home became a reality thanks to Gulf Estates' exceptional support. Their professionalism and responsiveness made the entire property-buying process seamless. We highly recommend them—truly an invaluable team in real estate.
              </p>
              {/* Client Info */}
              <div>
                <p className="font-bold">
                  {/* Client Name */}
                  Engr Adel

                </p>
                {/* <p className="text-sm">Property</p> */}
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-black text-white p-8 min-h-[24rem] flex flex-col justify-between">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-white text-2xl mr-1" />
                ))}
              </div>
              <p className="text-sm mb-6 leading-relaxed">
              Highly knowledgeable about the Dubai real estate market and readily available almost 24/7, always prioritizing honest advice over commission. Ensuring a transparent, trustworthy, and professional experience for clients with exceptional dedication and expertise.
              </p>
              <div>
                <p className="font-bold">Alonso Mosley</p>
                {/* <p className="text-sm">Property</p> */}
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-black text-white p-8 min-h-[24rem] flex flex-col justify-between">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-white text-2xl mr-1" />
                ))}
              </div>
              <p className="text-sm mb-6 leading-relaxed">
              A highly competent and reliable agency, demonstrating exceptional flexibility and professionalism. Working with Ms. Neha has been an outstanding pleasure, as she consistently provides excellent support and guidance, ensuring a smooth and seamless experience for clients.
              </p>
              <div>
                <p className="font-bold">Silvia Althofer</p>
                {/* <p className="text-sm">Property</p> */}
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-black text-white p-8 min-h-[24rem] flex flex-col justify-between">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-white text-2xl mr-1" />
                ))}
              </div>
              <p className="text-sm mb-6 leading-relaxed">
              An exceptionally knowledgeable agency that delivers outstanding service with professionalism and expertise. Their commitment to client satisfaction, attention to detail, and dedication to providing seamless support make them a trusted and reliable partner in the real estate industry.
              </p>
              <div>
                <p className="font-bold">Cerina Spence</p>
                {/* <p className="text-sm">Property</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ABOUT US */}

      <section id="about-us" className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Heading */}
          <h2 className="text-xl md:text-2xl font-semibold font-bebas uppercase mb-6 tracking-wider">
            {/* About Us */}
            Sobre Nosotros
          </h2>

          {/* First Row: Text + Image */}
          <div className="md:flex md:space-x-8">
            {/* Left Column: Text */}
            <div className="md:w-1/2 space-y-4">
              <p>
                {/* Gulf Estates stands as a beacon of excellence in Dubai’s dynamic real estate 
          landscape. As a proud member of the Centaurus Group — a conglomerate with 
          diversified interests spanning real estate, travel, luxury yachts, retail, 
          auto, and e-commerce — we bring unparalleled expertise and a rich heritage 
          to the property sector. */}
                Gulf Estates es un referente de excelencia en el dinámico
                mercado inmobiliario de Dubái. Como orgulloso miembro de
                Centaurus Group—un conglomerado diversificado con intereses en
                yates de lujo, automoción, bienes raíces, comercio electrónico y
                retail premium—aportamos una experiencia inigualable y un legado
                sólido al sector inmobiliario.
              </p>
              <p>
                {/* We specialize in connecting clients with high-value residential and commercial 
          properties across Dubai’s prime locations. Partnering with leading UAE 
          developers like Emaar, DAMAC, Sobha, Nakheel, and Meraas, we provide access 
          to premium developments. Whether you’re seeking luxurious investments, 
          future-proof residences, or high-yield commercial spaces, our tailored 
          solutions ensure maximum returns and client satisfaction. */}
                {/* Nuestro equipo de ventas multilingüe, compuesto por más de 10
                nacionalidades y fluido en más de 15 idiomas, ofrece una
                experiencia personalizada tanto a clientes locales como
                internacionales. Ya sea que seas un comprador primerizo, un
                inversionista experimentado o un cliente extranjero, te guiamos
                a través del mercado inmobiliario de los EAU con transacciones
                fluidas y asesoramiento experto en cada paso del proceso. */}
              </p>
              <p>
                {/* Gulf Estates es más que una agencia inmobiliaria; somos un socio
                de confianza que ofrece soluciones integrales, análisis de
                mercado excepcionales y un servicio inigualable. Descubre un
                mundo donde el lujo se une a la experiencia—confía en Gulf
                Estates para encontrar tu propiedad ideal en Dubái. */}
              </p>
              <p>
              Nuestro equipo de ventas multilingüe, compuesto por más de 10
                nacionalidades y fluido en más de 15 idiomas, ofrece una
                experiencia personalizada tanto a clientes locales como
                internacionales. Ya sea que seas un comprador primerizo, un
                inversionista experimentado o un cliente extranjero, te guiamos
                a través del mercado inmobiliario de los EAU con transacciones
                fluidas y asesoramiento experto en cada paso del proceso.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="md:w-1/2 mt-6 md:mt-0">
              <img
                src="assets/dreamp/Gulf Estates.png"
                alt="Gulf Estates Showcase"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Second Row: Image (Left) + Text (Right) */}
          <div className="mt-8 md:flex md:space-x-8">
            {/* Left Column: Image */}
            <div className="md:w-1/2 mt-6 md:mt-0">
              <img
                src="assets/dreamp/Centaurus Group.png"
                alt="Gulf Estates Team"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Right Column: Text */}
            <div className="md:w-1/2 space-y-4">
              
              <p>
              Gulf Estates es más que una agencia inmobiliaria; somos un socio
                de confianza que ofrece soluciones integrales, análisis de
                mercado excepcionales y un servicio inigualable. Descubre un
                mundo donde el lujo se une a la experiencia—confía en Gulf
                Estates para encontrar tu propiedad ideal en Dubái.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* OUR SERVICES */}
      <section id="our-services" className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Title */}
          <h2 className="text-xl md:text-2xl font-semibold font-bebas uppercase mb-8 tracking-wider">
            {/* Our Services */}
            Nuestros Servicios
          </h2>

          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Property Buying, Selling & Leasing */}
            <div className="bg-black text-white p-6 min-h-[28rem]">
              <img
                src="assets/dreamp/Property Buying, Selling & Leasing.png"
                alt="Property Buying, Selling & Leasing"
                className="w-full h-64 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 uppercase">
                {/* Property Buying, Selling &amp; Leasing */}
                Compra, Venta y Alquiler de Propiedades
              </h3>
              <p className="text-sm leading-relaxed">
                {/* We provide strategic guidance, market insights, and seamless
                transactions, ensuring clients secure, sell, or lease premium
                properties with optimal returns and tailored solutions. */}
                Ofrecemos asesoramiento estratégico, análisis de mercado y transacciones sin complicaciones, asegurando que nuestros clientes compren, vendan o alquilen propiedades premium con los mejores rendimientos y soluciones personalizadas.
              </p>
            </div>

            {/* Card 2: Property Management */}
            <div className="bg-black text-white p-6 min-h-[28rem]">
              <img
                src="assets/dreamp/Property Management.png"
                alt="Property Management"
                className="w-full h-64 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 uppercase">
                {/* Property Management */}
                Gestión de Propiedades
              </h3>
              <p className="text-sm leading-relaxed">
                {/* Comprehensive asset management solutions, including tenant
                sourcing, rent collection, maintenance coordination, and
                financial reporting, ensuring maximum returns and long-term
                property value preservation. */}
                Brindamos soluciones integrales de gestión de activos, incluyendo búsqueda de inquilinos, cobro de rentas, coordinación de mantenimiento y reportes financieros, garantizando la máxima rentabilidad y la preservación del valor a largo plazo de la propiedad.
              </p>
            </div>

            {/* Card 3: Consultancy */}
            <div className="bg-black text-white p-6 min-h-[28rem]">
              <img
                src="assets/dreamp/Consultancy.png"
                alt="Consultancy"
                className="w-full h-64 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 uppercase">
                {/* Consultancy */}
                Consultoría
              </h3>
              <p className="text-sm leading-relaxed">
                {/* Beyond investment advisory, we offer expert guidance on Golden
                Visa applications, business setup consulting, and strategic
                relocation solutions for investors and residents. */}
                Más allá del asesoramiento en inversiones, proporcionamos orientación experta en solicitudes de Visa de residencia, consultoría para la creación de empresas y soluciones estratégicas de reubicación para inversionistas y residentes.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <section className="py-10">
        <div
          className="relative bg-center bg-cover bg-no-repeat max-w-7xl mx-auto py-6"
          style={{
            backgroundImage: "url('assets/dreamp/Group 52.png')",
            // Replace with your own background image path
          }}
        >
          {/* Container */}
          <div className="max-w-7xl mx-auto px-4">
            {/* White border box with text & button */}
            <div className="border border-white flex flex-col md:flex-row items-center justify-between p-6 text-white">
              {/* Left side: Headline & Subtext */}
              <div className="md:max-w-3xl">
                <h2 className="text-xl md:text-2xl font-bebas font-semibold uppercase tracking-wider">
                  {/* Whether You’re Ready To Begin Or Still Uncertain, We’re Here
                  To Assist You. */}
                  Ya sea que estés listo para comenzar o aún tengas dudas, estamos aquí para ayudarte.
                </h2>
                <p className="mt-2 text-sm md:text-sm">
                  {/* Our Off Plan &amp; Investment experts are available to guide
                  you toward the best option and offer professional advice. */}
                  Nuestros expertos en propiedades sobre planos e inversiones están disponibles para guiarte hacia la mejor opción y brindarte asesoramiento profesional.
                </p>
              </div>

              {/* Right side: Button */}
              <button 
  className="mt-4 md:mt-0 border bg-white border-white bg-transparent text-black py-2 px-4 uppercase hover:bg-white hover:text-black transition-colors"
  onClick={() => {
    const element = document.getElementById('contact-us');
    if (element) {
      const offsetTop = element.getBoundingClientRect().top;
      const offsetPosition = offsetTop + window.pageYOffset - 100; // 100px offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }}
>
  CONTACTA A NUESTRO EQUIPO
</button>
            </div>
          </div>
        </div>
      </section>
      <FooterLandingPage />
    </>
  );
};

export default DreamProperty;
