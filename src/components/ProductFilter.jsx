import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';
import ProductCard from './ProductCard';

const ProductFilter = () => {
  const { searchQuery, products } = useAppContext();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const [category, setCategory] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [Availability, setAvailability] = useState([]);
  const [maxPrice, setMaxPrice] = useState(20000);
  const [sortOrder, setSortOrder] = useState('Latest'); // ✅ New state for sort order

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleAvailability = (e) => {
    if (Availability.includes(e.target.value)) {
      setAvailability((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setAvailability((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    // Filter by category
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    // Filter by availability
    if (Availability.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        Availability.includes(String(item.inStock))
      );
    }

    // Filter by price
    if (minPrice !== null) {
      productsCopy = productsCopy.filter(
        (item) => item.amount >= minPrice && item.amount <= maxPrice
      );
    }

    // Sort logic ✅
    if (sortOrder === 'low-high') {
      productsCopy.sort((a, b) => a.amount - b.amount);
    } else if (sortOrder === 'high-low') {
      productsCopy.sort((a, b) => b.amount - a.amount);
    }

    setFilteredProducts(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, Availability, minPrice, sortOrder]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);

  return (
    <div className="flex w-full min-h-screen transition-all duration-300">
      {/* Filter Sidebar */}
      <div
        className={`bg-white border-r border-gray-300 transition-all duration-300 overflow-hidden ${
          showCategories ? 'w-[180px] px-3 py-4' : 'w-0'
        }`}
      >
        {/* Categories */}
        <div className="mb-4">
          <p className="text-sm font-medium mb-2">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {[
              'fruits',
              'vegetables',
              'meat & fish',
              'packaged food',
              'detergent',
              'snacks',
              'cooking items',
              'oil',
              'beverages',
            ].map((cat, index) => (
              <label key={index} className="flex gap-2 items-center">
                <input onChange={toggleCategory} className="w-3" type="checkbox" value={cat} />
                {cat[0].toUpperCase() + cat.slice(1)}
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-4">
          <p className="text-sm font-medium mb-2">PRICE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p>₦{minPrice.toLocaleString()} - ₦{maxPrice.toLocaleString()}</p>
            <input
              type="range"
              min="0"
              max={maxPrice}
              step="100"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="w-full accent-primary"
            />
          </div>
        </div>

        {/* Availability */}
        <div>
          <p className="text-sm font-medium mb-2">AVAILABILITY</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {[
              { label: 'In Stock', value: 'true' },
              { label: 'Out of Stock', value: 'false' },
            ].map((item, index) => (
              <label key={index} className="flex gap-2 items-center">
                <input
                  onChange={toggleAvailability}
                  className="w-3"
                  type="checkbox"
                  value={item.value}
                />
                {item.label}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="flex-1 px-4 py-6 transition-all duration-300">
        {/* Top Controls */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => setShowCategories(!showCategories)}
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md"
          >
            <img src={assets.filter_icon} alt="filter" className="w-4 h-4" />
            <span className="text-sm font-semibold">FILTERS</span>
            <img
              src={assets.filter_white}
              alt="toggle"
              className={`w-3 h-3 transition-transform duration-200 ${
                showCategories ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Sort Dropdown */}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border border-gray-300 text-sm px-3 py-2 rounded-md"
          >
            <option value="Latest">Sort by: Latest</option>
            <option value="low-high">Low to High</option>
            <option value="high-low">High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div
          className={`grid ${
            showCategories
              ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-3'
              : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
          } gap-4 gap-y-6`}
        >
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;

