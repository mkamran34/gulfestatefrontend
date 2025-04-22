import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const properties = [
  { id: 1, type: 'Apartment', neighborhood: 'Downtown', keywords: ['modern', 'spacious'], price: 1500, bedrooms: 2 },
  { id: 2, type: 'House', neighborhood: 'Suburbs', keywords: ['family-friendly', 'garden'], price: 2500, bedrooms: 4 },
  { id: 3, type: 'Condo', neighborhood: 'Beachfront', keywords: ['ocean view', 'luxury'], price: 3000, bedrooms: 3 },
  { id: 4, type: 'Apartment', neighborhood: 'Midtown', keywords: ['cozy', 'pet-friendly'], price: 1200, bedrooms: 1 },
  { id: 5, type: 'House', neighborhood: 'Countryside', keywords: ['rustic', 'large lot'], price: 2000, bedrooms: 3 },
  { id: 6, type: 'Condo', neighborhood: 'Financial District', keywords: ['high-rise', 'modern'], price: 2800, bedrooms: 2 },
  { id: 7, type: 'Apartment', neighborhood: 'University Area', keywords: ['student-friendly', 'furnished'], price: 900, bedrooms: 1 },
  { id: 8, type: 'House', neighborhood: 'Lakefront', keywords: ['waterfront', 'dock'], price: 3500, bedrooms: 5 },
];

const PropertySearch = () => {
  const [forRent, setForRent] = useState(true);
  const [propertyType, setPropertyType] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [keywords, setKeywords] = useState('');
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const filteredResults = properties.filter(property =>
      (!propertyType || property.type === propertyType) &&
      (!neighborhood || property.neighborhood === neighborhood) &&
      (!keywords || property.keywords.some(k => k.toLowerCase().includes(keywords.toLowerCase())))
    );
    setResults(filteredResults);
  }, [propertyType, neighborhood, keywords]);

  const handleSearch = () => {
    setShowDropdown(false);
    navigate('/search-results', { state: { forRent, propertyType, neighborhood, keywords } });
  };

  const handleResultClick = (property) => {
    setShowDropdown(false);
    navigate(`/property/${property.id}`, { state: { property } });
  };

  const handleInteraction = () => {
    setShowDropdown(true);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-8 pr-2 lg:pr-0">
      <div className="flex flex-wrap items-center bg-white rounded-lg shadow-md text-black md:flex-nowrap">
        <select
          className="p-3 m-2 rounded border w-full md:w-auto"
          value={forRent ? 'For Rent' : 'For Sale'}
          onChange={(e) => setForRent(e.target.value === 'For Rent')}
        >
          <option>For Rent</option>
          <option>For Sale</option>
        </select>
        <select
          className="p-3 m-2 rounded border w-full md:w-auto"
          value={propertyType}
          onChange={(e) => {
            setPropertyType(e.target.value);
            handleInteraction();
          }}
        >
          <option value="">Property Type</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Condo">Condo</option>
        </select>
        <select
          className="p-3 m-2 rounded border w-full md:w-auto"
          value={neighborhood}
          onChange={(e) => {
            setNeighborhood(e.target.value);
            handleInteraction();
          }}
        >
          <option value="">Neighborhood</option>
          <option value="Downtown">Downtown</option>
          <option value="Suburbs">Suburbs</option>
          <option value="Beachfront">Beachfront</option>
          <option value="Midtown">Midtown</option>
          <option value="Countryside">Countryside</option>
          <option value="Financial District">Financial District</option>
          <option value="University Area">University Area</option>
          <option value="Lakefront">Lakefront</option>
        </select>
        <div className="relative flex-grow z-10 w-full md:w-auto">
          <input
            type="text"
            placeholder="Keywords"
            className="lg:w-full p-3 m-2 rounded border"
            value={keywords}
            onChange={(e) => {
              setKeywords(e.target.value);
              handleInteraction();
            }}
            onFocus={handleInteraction}
          />
          {showDropdown && results.length > 0 && (
            <div className="absolute z-20 w-full bg-white border rounded-b shadow-lg max-h-60 overflow-y-auto">
              {results.map(result => (
                <div
                  key={result.id}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleResultClick(result)}
                >
                  <div className="font-semibold">{result.type} in {result.neighborhood}</div>
                  <div className="text-sm text-gray-600">
                    ${result.price}/month • {result.bedrooms} BR •
                    {result.keywords.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          className="bg-orange-500 text-white p-3 m-2 rounded w-full md:w-auto flex items-center z-30"
          onClick={handleSearch}
        >
          <Search className="mr-2" />
          Search
        </button>
      </div>
    </div>
  );
};

export default PropertySearch;
