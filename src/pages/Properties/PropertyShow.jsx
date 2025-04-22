import React, { useState, useEffect } from "react";
import axios from "axios";
import { parseString } from "xml2js";
import PropertyCard from "../../components/PropertyCard";
import { useTranslation } from 'react-i18next';

function PropertyShow() {
  const { t } = useTranslation('common');
  const [properties, setProperties] = useState([]);
  const [visibleProperties, setVisibleProperties] = useState(6);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadMoreProperties = () => {
    setVisibleProperties((prevCount) => prevCount + 6);
  };

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
            setProperties(propertyList);
          }
          setLoading(false);
        });
      } catch (err) {
        setError("Error fetching data: " + err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#F2762E]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Error:</strong>
        <span className="block sm:inline"> {error}</span>
      </div>
    );
  }
  return (
    <main className="min-h-screen p-8">
      <section className="text-center uppercase lg:mb-20 mb-8">
        <h1 className="lg:text-6xl text-4xl text-[#024959] font-bebas">
        {t('Properties.semiHero')}
        </h1>
        <p className="text-xs lg:text-xl lg:my-3 my-2">
        {t('Properties.semiText')}
        </p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:px-28">
        {properties.slice(0, visibleProperties).map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </section>

      {visibleProperties < properties.length && (
        <div className="flex justify-center mt-10">
          <button
            className="bg-[#F2762E] text-white px-6 py-3 uppercase hover:bg-orange-700 transition"
            onClick={loadMoreProperties}
          >
            Load More
          </button>
        </div>
      )}
    </main>
  );
}

export default PropertyShow;
