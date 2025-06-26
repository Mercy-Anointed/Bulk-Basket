/* import React from 'react';
import { useAppContext } from '../context/AppContext';
import { categories } from '../assets/assets';

const Categories = () => {
    const {navigate} = useAppContext()
    return (
        <div className='mt-15 md:px-16'>
            <p className='text-2xl md:text-3xl font-medium px-15'>Categories</p>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-9 px-16  gap-8'>
                {categories.map((category, index) => (
                    <div key={index} className='group cursor-pointer py-10 px-6 rounded flex flex-col justify-center 
                    items-center bg-white border border-gray-300/60 ' onClick={() => {
                        navigate(`/products/${category.path.toLowerCase()}`)
                    }}>
                        <img src={category.Image} alt="" className='group-hover:scale-108 transition max-w-30 h-24' />
                        <p className='text-sm font-medium mt-3'>{category.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories; */

import React, { useRef } from 'react';
import { useAppContext } from '../context/AppContext';
import { categories } from '../assets/assets';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const Categories = () => {
  const { navigate } = useAppContext();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="mt-16 px-4 sm:px-6 md:px-10 lg:px-16">
      {/* Heading */}
      <p className="text-2xl md:text-3xl font-medium mb-8">Categories</p>

      {/* Scroll arrows - small screens only */}
      <div className="md:hidden flex justify-between mb-2">
        <button
          onClick={() => scroll('left')}
          className="bg-gray-200 p-2 rounded-full shadow"
          aria-label="Scroll left"
        >
          <ChevronLeftIcon className="h-5 w-5 text-gray-700" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="bg-gray-200 p-2 rounded-full shadow"
          aria-label="Scroll right"
        >
          <ChevronRightIcon className="h-5 w-5 text-gray-700" />
        </button>
      </div>

      {/* Scrollable container: flex on small screens, grid on md+ */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 scroll-smooth md:grid md:grid-cols-4 lg:grid-cols-5 md:gap-6 lg:gap-8"
      >
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => navigate(`/products/${category.path.toLowerCase()}`)}
            className="min-w-[140px] flex-shrink-0 md:min-w-0 cursor-pointer py-8 px-4 bg-white border border-gray-300/60 rounded flex flex-col items-center justify-center transition hover:shadow-md"
          >
            <img
              src={category.Image}
              alt={category.text}
              className="h-24 object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <p className="mt-3 text-sm font-medium text-center">{category.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
