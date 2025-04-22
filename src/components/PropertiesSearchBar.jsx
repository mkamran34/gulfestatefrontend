import React, { useState, useEffect, useRef } from "react";
import { Search, MapPin, Home, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { parseString } from "xml2js";

const PropertySearchBar = () => {
  const navigate = useNavigate();
  const searchBarRef = useRef(null);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [uniqueLocations, setUniqueLocations] = useState([]);
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [isInteracted, setIsInteracted] = useState(false);

  // Fetch properties and populate filter options
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          "https://gulf-backend-dumn.onrender.com/api/xmlfeed"
        );
        parseString(response.data, (err, result) => {
          if (err) {
            console.error("Error parsing XML");
          } else {
            const propertyList = result.list.property || [];
            setProperties(propertyList);

            // Extract unique locations (combining city and community)
            const locations = new Set();
            propertyList.forEach((property) => {
              locations.add(`${property.community[0]}, ${property.city[0]}`);
            });
            setUniqueLocations([...locations].sort());

            // Extract unique property types
            const types = new Set(propertyList.map((p) => p.property_type[0]));
            setPropertyTypes([...types].sort());
          }
          setLoading(false);
        });
      } catch (err) {
        console.error("Error fetching data:", err);
        setLoading(false);
      }
    };

    fetchProperties();

    const handleClickOutside = (event) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
        setIsInteracted(false); // Reset interaction state when clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update filtered results when filters or search query changes
  useEffect(() => {
    let filtered = [...properties];

    // Apply location filter
    if (selectedLocation) {
      const [community, city] = selectedLocation.split(", ");
      filtered = filtered.filter(
        (p) => p.community[0] === community && p.city[0] === city
      );
    }

    // Apply property type filter
    if (selectedPropertyType) {
      filtered = filtered.filter(
        (p) => p.property_type[0] === selectedPropertyType
      );
    }

    // Apply search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((property) => {
        const searchableFields = [
          property.title_en[0],
          property.community[0],
          property.city[0],
          property.property_type[0],
        ].map((field) => field.toLowerCase());

        return searchableFields.some((field) => field.includes(query));
      });
    }

    setFilteredResults(filtered.slice(0, 6));
  }, [searchQuery, selectedLocation, selectedPropertyType, properties]);

  const handleResultClick = (property) => {
    navigate(`/property/${property.reference_number[0]}`);
    setShowDropdown(false);
    setSearchQuery("");
  };

  const formatPrice = (price) => {
    return `AED ${parseInt(price).toLocaleString()}`;
  };

  const getPropertyTypeLabel = (type) => {
    const types = {
      AP: "Apartment",
      VH: "Villa",
      TH: "Townhouse",
    };
    return types[type] || type;
  };

  const handleInteraction = () => {
    setIsInteracted(true);
    setShowDropdown(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-12">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-orange-500" />
      </div>
    );
  }

  return (
    <div className={`my-5 relative text-black`} ref={searchBarRef}>
      {/* Results dropdown */}
      {showDropdown && isInteracted && (
        <div className="absolute bottom-full left-0 right-0 bg-white rounded-lg shadow-lg border border-gray-200 mb-2">
          {filteredResults.length > 0 ? (
            filteredResults.map((property) => (
              <div
                key={property.reference_number[0]}
                onClick={() => handleResultClick(property)}
                className="p-4 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-medium text-gray-900">
                      {getPropertyTypeLabel(property.property_type[0])}
                    </div>
                    <div className="text-sm text-gray-600 flex items-center mt-1">
                      <MapPin size={14} className="mr-1" />
                      {property.community[0]}, {property.city[0]}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-orange-500 font-semibold">
                      {formatPrice(property.price[0])}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {property.bedroom[0]} BR | {property.size[0]} sq.ft
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 text-gray-500 text-center">
              No Results Found
            </div>
          )}
        </div>
      )}

      {/* Search bar with filters */}
      <div className="bg-white rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row">
          {/* Search input */}
          <div className="flex-grow relative flex items-center p-2">
            <Search className="absolute left-4 text-gray-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={handleInteraction}
              placeholder="Search properties..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border text-black border-gray-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
            />
          </div>

          {/* Location filter */}
          <div className="relative md:border-l border-gray-200 p-2">
            <div className="flex items-center space-x-2">
              <MapPin size={20} className="text-gray-400" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                onClick={handleInteraction} // Trigger interaction
                className="w-full md:w-40 p-2 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none cursor-pointer appearance-none"
              >
                <option value="">Any Location</option>
                {uniqueLocations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="text-gray-400 pointer-events-none absolute right-4"
              />
            </div>
          </div>

          {/* Property type filter */}
          <div className="relative md:border-l border-gray-200 p-2">
            <div className="flex items-center space-x-2">
              <Home size={20} className="text-gray-400" />
              <select
                value={selectedPropertyType}
                onChange={(e) => setSelectedPropertyType(e.target.value)}
                onClick={handleInteraction} // Trigger interaction
                className="w-full md:w-40 p-2 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none cursor-pointer appearance-none"
              >
                <option value="">Any Type</option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {getPropertyTypeLabel(type)}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="text-gray-400 pointer-events-none absolute right-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySearchBar;
