import React from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import abtImg1 from "/assets/productend1.webp";
import abtImg2 from "/assets/productend2.webp";
import abtImg3 from "/assets/productend3.webp";
import abtImg4 from "/assets/productend4.webp";
import abtImg5 from "/assets/hero.webp";
import { useTranslation } from 'react-i18next';

const ContactBottom = () => {
  const { t } = useTranslation('common');
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
  };
  return (
    <section className="px-10 py-20">
      <div className="my-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57815.78218401818!2d55.06543624863282!3d25.085391699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b53c6fe36a1%3A0xb6dc0a807ec56420!2sAl%20Habtoor%20Business%20Tower!5e0!3m2!1sen!2sin!4v1727086897930!5m2!1sen!2sin"
          className="rounded-lg h-[500px] w-full"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div>
        <Fade>
          <div className="text-[#024959] lg:text-8xl md:text-6xl text-5xl font-bebas lg:mb-10 lg:mt-8 uppercase text-center">
          {t('contact.bottom.heroOne')}
            <p className="pt-2">{t('contact.bottom.heroTwo')}</p>
          </div>
        </Fade>

        <div className="my-16 hidden lg:flex gap-6">
          <Slide>
            <div>
              <img
                src={abtImg3}
                alt="img"
                className="h-[200px] relative z-30 top-52"
              />
            </div>
          </Slide>

          <Slide direction="right">
            <div>
              <img
                src={abtImg1}
                alt="img"
                className="h-[320px] relative right-16"
              />
            </div>
          </Slide>
          <Zoom>
            <div>
              <img src={abtImg2} alt="img" className="mx-auto h-[450px]" />
            </div>
          </Zoom>
          <Slide>
            <div>
              <img
                src={abtImg4}
                alt="img"
                className="h-[200px] relative left-20"
              />
            </div>
          </Slide>
          <Slide direction="right">
            <div>
              <img
                src={abtImg5}
                alt="img"
                className="h-[320px] relative z-30 top-40"
              />
            </div>
          </Slide>
        </div>

        <div className="my-16 lg:hidden">
          <Slider {...sliderSettings}>
            <div className="px-4">
              <img
                src={abtImg5}
                alt="img"
                className="mx-auto h-[300px] object-cover"
              />
            </div>
            <div className="px-4">
              <img
                src={abtImg4}
                alt="img"
                className="mx-auto h-[300px] object-cover"
              />
            </div>
            <div className="px-4">
              <img
                src={abtImg1}
                alt="img"
                className="mx-auto h-[300px] object-cover"
              />
            </div>
            <div className="px-4">
              <img
                src={abtImg3}
                alt="img"
                className="mx-auto h-[300px] object-cover"
              />
            </div>
            <div className="px-4">
              <img
                src={abtImg2}
                alt="img"
                className="mx-auto h-[300px] object-cover"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ContactBottom;
