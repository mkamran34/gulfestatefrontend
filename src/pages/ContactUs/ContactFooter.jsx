import React from "react";
import info from "/assets/info.webp";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function ContactFooter() {
  const { t } = useTranslation("common");

  return (
    <div className="relative w-full px-6 pt-12">
      <div className="flex flex-col md:flex-row h-full w-full">
        <div className="relative z-10 p-8 md:p-16 lg:p-24 text-gray-800 flex-1">
          <h1 className="lg:text-6xl text-4xl text-[#024959] mb-6 font-bebas">
            {t("contact.footer.headers.contactUs")}
          </h1>

          <div className="mb-4">
            <div className="my-6">
              <h2 className="text-3xl font-bebas text-[#F2762E] mb-2">
                {t("contact.footer.headers.information")}
              </h2>
              <p className="text-sm">
                <a
                  href="tel:+97148735835"
                  className="text-[#024959] hover:underline"
                >
                  +971 4 873 5835
                </a>
                <br />
                <a
                  href="mailto:hello@gulfestates.ae"
                  className="text-[#024959] hover:underline"
                >
                  hello@gulfestates.ae
                </a>
              </p>
            </div>
            <h2 className="text-3xl font-bebas text-[#F2762E] mb-2">
              {t("contact.footer.headers.address")}
            </h2>
            <p className="text-sm">{t("contact.footer.content.address")}</p>
          </div>

          <div className="mb-4">
            <h2 className="text-3xl font-bebas text-[#F2762E] mb-2">
              {t("contact.footer.headers.workingHours")}
            </h2>
            <p className="text-sm">
              {t("contact.footer.content.workingHours")}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16">
            <div>
              <h2 className="text-3xl font-bebas text-[#F2762E] mb-2">
                {t("contact.footer.headers.followUs")}
              </h2>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/gulfestates.ae?igsh=bjZ3MGt2NjdpcGtt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                  aria-label={t("contact.footer.ariaLabels.instagram")}
                >
                  <AiFillInstagram size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/company/gulfestatesae/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                  aria-label={t("contact.footer.ariaLabels.linkedin")}
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href="https://www.facebook.com/gulfestatesuae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                  aria-label={t("contact.footer.ariaLabels.facebook")}
                >
                  <FaFacebook size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-64 md:h-auto w-full md:w-1/2">
          <img
            src={info}
            alt={t("contact.footer.alt.buildingImage")}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactFooter;
