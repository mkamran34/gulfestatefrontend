import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { parseString } from "xml2js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Zoom } from "swiper/modules";
import { PiBed } from "react-icons/pi";
import { FaBath } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/zoom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Logo from "/assets/black-logo.svg";
import SuggestProperty from "../components/SuggestProperty";
import HighlightCard from "../components/HighlightCard";

function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recentProperties, setRecentProperties] = useState([]);
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [activeTab, setActiveTab] = useState("details");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://gulf-backend-dumn.onrender.com/api/xmlfeed"
        );
        parseString(response.data, (err, result) => {
          if (err) {
            setError("Error parsing XML");
          } else {
            const propertyList = result.list.property || [];
            const selectedProperty = propertyList.find(
              (p) => p.reference_number[0] === id
            );
            if (selectedProperty) {
              setProperty(selectedProperty);

              const sortedProperties = [...propertyList].sort(
                (a, b) =>
                  new Date(b.$?.last_update) - new Date(a.$?.last_update)
              );
              setRecentProperties(sortedProperties.slice(0, 6));

              const shuffled = [...propertyList].sort(
                () => 0.5 - Math.random()
              );
              setFeaturedProperties(shuffled.slice(0, 6));
            } else {
              setError("Property not found");
            }
          }
          setLoading(false);
        });
      } catch (err) {
        setError("Error fetching data: " + err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);


  const TabContent = ({ tab }) => {
    switch (tab) {
      case "details":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {property.description_en[0]}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <HighlightCard
                icon={<PiBed className="text-4xl text-[#F2762E]" />}
                title="Bedrooms"
                value={property.bedroom[0]}
              />
              <HighlightCard
                icon={<FaBath className="text-4xl text-[#F2762E]" />}
                title="Bathrooms"
                value={property.bathroom[0]}
              />
              <HighlightCard
                icon={<TbRulerMeasure className="text-4xl text-[#F2762E]" />}
                title="Area"
                value={`${property.size[0]} sq.ft`}
              />
              <HighlightCard
                icon={<span className="text-4xl text-[#F2762E]">💰</span>}
                title="Price"
                value={`AED ${parseInt(property.price[0]).toLocaleString()}`}
              />
            </div>
          </motion.div>
        );
      case "amenities":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {amenitiesList.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                className="flex items-center bg-white rounded-lg p-4 shadow-md"
              >
                <span className="text-[#F2762E] mr-3 text-xl">✓</span>
                <span className="text-gray-700">
                  {amenitiesMap[amenity] || amenity}
                </span>
              </motion.div>
            ))}
          </motion.div>
        );
      case "agent":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex items-center bg-white rounded-xl shadow-lg p-8"
          >
            <img
              src={property.agent[0].photo[0]}
              alt={property.agent[0].name[0]}
              className="w-32 h-32 rounded-full mr-8 shadow-md"
            />
            <div>
              <h3 className="font-semibold text-2xl mb-3">
                {property.agent[0].name[0]}
              </h3>
              <p className="text-gray-600 mb-2">{property.agent[0].email[0]}</p>
              <p className="text-gray-600">{property.agent[0].phone[0]}</p>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#F2762E]"></div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Error:</strong>
        <span className="block sm:inline">
          {" "}
          {error || "Property not found"}
        </span>
      </div>
    );
  }

  const amenitiesList = property.amenities[0].split(",");
  const amenitiesMap = {
    BA: "Balcony",
    BP: "Building Pool",
    BB: "BBQ Area",
    BW: "Beach Walkway",
    AC: "Air Conditioning",
    CP: "Covered Parking",
    FF: "Fully Fitted Kitchen",
    BK: "Basketball Court",
    SP: "Shared Pool",
    SE: "Security",
    MT: "Metro Station",
    BT: "Boat Mooring",
    CW: "Concierge",
    NM: "Near Mall",
    SM: "Swimming Pool",
    ML: "Maid's Room",
    PT: "Public Transport",
    MO: "Mosque",
    RT: "Retail Center",
    CS: "Children's Play Area",
    SS: "Sauna",
    SY: "Shared Gym",
  };

  return (
    <main className="bg-gray-50">
      <Navbar
        textcolor={"black"}
        font={"bold"}
        justify={"center"}
        scrollbg={"[#024959]"}
        logo={Logo}
      />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 py-28"
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl font-bold mb-8 text-center text-[#024959]"
        >
          {property.title_en[0]}
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-12"
        >
          <Swiper
            modules={[Navigation, Pagination, EffectFade, Zoom]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            effect="fade"
            zoom={{ maxRatio: 2 }}
            className="overflow-hidden"
            style={{ height: "70vh" }}
          >
            {property.photo[0].url.map((photo, index) => (
              <SwiperSlide key={index} zoom>
                <div className="swiper-zoom-container">
                  <img
                    src={photo._}
                    alt={`Property ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-12"
        >
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              {["details", "amenities", "agent"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === tab
                      ? "bg-[#024959] text-white"
                      : "bg-white text-[#024959] hover:bg-gray-100"
                  } border border-[#024959] ${
                    tab === "details"
                      ? "rounded-l-lg"
                      : tab === "agent"
                      ? "rounded-r-lg"
                      : ""
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <AnimatePresence mode="wait">
            <TabContent tab={activeTab} />
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center text-[#024959]">
            Recently Added Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentProperties.map((property, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                <SuggestProperty property={property} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-center text-[#024959]">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                <SuggestProperty property={property} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>
      <Footer />
    </main>
  );
}

export default PropertyDetails;
