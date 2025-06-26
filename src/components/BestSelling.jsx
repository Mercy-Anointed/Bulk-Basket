/* import React from 'react';
import { useAppContext } from '../context/AppContext';
import ProductCard from './ProductCard';





const BestSelling = () => {
    const { products}  = useAppContext()

    return (
        <div className='mt-16 ' >
           <p className='text-2xl md:text-3xl font-medium px-27'>Best Selling</p>

       



            <div className=' grid grid-cols-2 md:grid-cols-3 items-center md:justify-center md:px-29 mt-9 md:gap-8  px-12 justify-between  gap-5'>
                {products.filter((product) => product.inStock).slice(0,6).map((product,index)=> (
            <ProductCard key={index} product={product}/>
        ))}




           
            </div>
           
        </div>
    );
};

export default BestSelling; */

import React, { useRef } from 'react';
import { useAppContext } from '../context/AppContext';
import ProductCard from './ProductCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const BestSelling = () => {
  const { products } = useAppContext();
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
    <div className="mt-16 px-4 sm:px-6 lg:px-20">
      {/* Section Title */}
      <p className="text-2xl sm:text-3xl font-semibold mb-4">Best Selling</p>

      {/* Scroll arrows - small screens only */}
      <div className="md:hidden flex justify-between mb-2">
        <button
          onClick={() => scroll('left')}
          className="bg-gray-200 p-2 rounded-full shadow"
        >
          <ChevronLeftIcon className="h-5 w-5 text-gray-700" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="bg-gray-200 p-2 rounded-full shadow"
        >
          <ChevronRightIcon className="h-5 w-5 text-gray-700" />
        </button>
      </div>

      {/* Scrollable product list (scrolls on mobile, grid on md+) */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 scroll-smooth md:grid md:grid-cols-3 md:gap-8 md:overflow-visible pb-2"
      >
        {products
          .filter((product) => product.inStock)
          .slice(0, 6)
          .map((product, index) => (
            <div
              key={index}
              className="min-w-[150px] sm:min-w-[180px] md:min-w-0 flex-shrink-0 md:flex-shrink md:w-auto"
            >
              <ProductCard product={product} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default BestSelling;
