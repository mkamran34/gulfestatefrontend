import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { parseString } from 'xml2js';
import { FaFilter } from 'react-icons/fa';
import { FilterSidebar } from './components/FilterSidebar';
import { PropertyCard } from './components/PropertyCard';

const ShowProperty = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filters, setFilters] = useState({
    priceRange: [0, 10000000],
    bedrooms: '',
    bathrooms: '',
    propertyType: '',
    city: '',
    community: '',
    offeringType: '',
    searchTerm: '',
    sortOption: ''
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('https://gulf-backend-dumn.onrender.com/api/xmlfeed'
          
        );
        parseString(response.data, (err, result) => {
          if (err) {
            setError('Error parsing XML data');
            setIsLoading(false);
          } else {
            const propertyList = result.list.property || [];
            setProperties(propertyList);
            setFilteredProperties(propertyList);
            setIsLoading(false);
          }
        });
      } catch (err) {
        setError('Failed to fetch properties: ' + err.message);
        setIsLoading(false);
      }
    };

    fetchProperties();
  }, []);

  useEffect(() => {
    let result = properties.filter(property => {
      const price = parseInt(property.price[0]);
      return (
        price >= filters.priceRange[0] &&
        price <= filters.priceRange[1] &&
        (filters.bedrooms === '' || property.bedroom[0] === filters.bedrooms) &&
        (filters.bathrooms === '' || property.bathroom[0] === filters.bathrooms) &&
        (filters.propertyType === '' || property.property_type[0] === filters.propertyType) &&
        (filters.city === '' || property.city[0] === filters.city) &&
        (filters.community === '' || property.community[0] === filters.community) &&
        (filters.offeringType === '' || property.offering_type[0] === filters.offeringType) &&
        (property.title_en[0].toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
         property.community[0].toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
         property.city[0].toLowerCase().includes(filters.searchTerm.toLowerCase()))
      );
    });

    if (filters.sortOption === 'price-asc') {
      result.sort((a, b) => parseInt(a.price[0]) - parseInt(b.price[0]));
    } else if (filters.sortOption === 'price-desc') {
      result.sort((a, b) => parseInt(b.price[0]) - parseInt(a.price[0]));
    }

    setFilteredProperties(result);
  }, [properties, filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#F2762E]"></div>
    </div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-10">{error}</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row lg:h-screen">
      <FilterSidebar 
        filters={filters} 
        onFilterChange={handleFilterChange} 
        properties={properties}
        showMobileFilters={showMobileFilters}
        setShowMobileFilters={setShowMobileFilters}
        className="h-screen overflow-y-auto lg:w-64" 
      />
      <div className="flex-1 p-4 lg:h-screen lg:overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#024959]">Property Listings</h1>
          <button 
            className="lg:hidden bg-[#F2762E] text-white px-4 py-2 rounded-full flex items-center"
            onClick={() => setShowMobileFilters(true)}
          >
            <FaFilter className="mr-2" /> Filters
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map(property => (
            <PropertyCard key={property.reference_number[0]} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowProperty;
