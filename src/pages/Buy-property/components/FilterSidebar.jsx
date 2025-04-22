import React from 'react';
import { SliderInput } from './SliderInput';
import { FilterDropdown } from './FilterDropdown';
import { SearchInput } from './SearchInput';
import { FaTimes } from 'react-icons/fa';

export const FilterSidebar = ({ filters, onFilterChange, properties, showMobileFilters, setShowMobileFilters }) => {
  const maxPrice = Math.max(...properties.map(p => parseInt(p.price[0])));

  const sidebarClasses = `
    fixed inset-y-0 left-0 z-50 lg:z-0 w-64 bg-white shadow-lg transform 
    ${showMobileFilters ? 'translate-x-0' : '-translate-x-full'}
    lg:relative lg:translate-x-0 lg:shadow-none
    transition-transform duration-300 ease-in-out
    overflow-y-auto
  `;

  return (
    <div className={sidebarClasses}>
      <div className="p-4">
        <div className="flex justify-between items-center mb-6 lg:mb-10">
          <h2 className="text-xl font-semibold text-[#024959]">Filters</h2>
          <button 
            className="lg:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setShowMobileFilters(false)}
          >
            <FaTimes size={24} />
          </button>
        </div>

        <div className="space-y-6">
          <SearchInput 
            value={filters.searchTerm} 
            onChange={(value) => onFilterChange({ searchTerm: value })}
            placeholder="Search properties..."
          />

          <SliderInput
            min={0}
            max={maxPrice}
            step={100000}
            value={filters.priceRange}
            onChange={(value) => onFilterChange({ priceRange: value })}
            label="Price Range (AED)"
          />

          <FilterDropdown
            options={['', ...new Set(properties.map(p => p.bedroom[0]))].sort()}
            value={filters.bedrooms}
            onChange={(value) => onFilterChange({ bedrooms: value })}
            label="Bedrooms"
          />

          <FilterDropdown
            options={['', ...new Set(properties.map(p => p.bathroom[0]))].sort()}
            value={filters.bathrooms}
            onChange={(value) => onFilterChange({ bathrooms: value })}
            label="Bathrooms"
          />

          <FilterDropdown
            options={['', ...new Set(properties.map(p => p.property_type[0]))].sort()}
            value={filters.propertyType}
            onChange={(value) => onFilterChange({ propertyType: value })}
            label="Property Type"
          />

          <FilterDropdown
            options={['', ...new Set(properties.map(p => p.city[0]))].sort()}
            value={filters.city}
            onChange={(value) => onFilterChange({ city: value })}
            label="City"
          />

          <FilterDropdown
            options={['', ...new Set(properties.map(p => p.community[0]))].sort()}
            value={filters.community}
            onChange={(value) => onFilterChange({ community: value })}
            label="Community"
          />

          <FilterDropdown
            options={['', ...new Set(properties.map(p => p.offering_type[0]))].sort()}
            value={filters.offeringType}
            onChange={(value) => onFilterChange({ offeringType: value })}
            label="Offering Type"
          />

          <FilterDropdown
            options={[
              { value: '', label: 'Default' },
              { value: 'price-asc', label: 'Price: Low to High' },
              { value: 'price-desc', label: 'Price: High to Low' }
            ]}
            value={filters.sortOption}
            onChange={(value) => onFilterChange({ sortOption: value })}
            label="Sort By"
          />
        </div>
      </div>
    </div>
  );
};