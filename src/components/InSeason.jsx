/* import React from 'react';
import { useAppContext } from '../context/AppContext';
import ProductCard from './ProductCard';

const InSeason = () => {

   
        const { products}  = useAppContext()
    
        return (
            <div className='mt-16 ' >
               <p className='text-2xl md:text-3xl font-medium px-27'>In Season</p>
    
           
    
   
    
                <div className='  grid grid-cols-2 md:grid-cols-3 items-center md:justify-center md:px-29 mt-9 md:gap-8  px-12 justify-between  gap-5'>
                    {products.filter((product) => product.inStock).slice(6,12).map((product,index)=> (
                <ProductCard key={index} product={product}/>
            ))}
    
    
    
    
                   
                 
                </div>
               
            </div>
        );
    };
    
    export default InSeason;



     */
import React, { useRef } from 'react';
import { useAppContext } from '../context/AppContext';
import ProductCard from './ProductCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const InSeason = () => {
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
      {/* Heading */}
      <p className="text-2xl sm:text-3xl font-semibold mb-4">In Season</p>

      {/* Scroll arrows - visible only on small screens */}
      <div className="md:hidden flex justify-between mb-2">
        <button
          onClick={() => scroll('left')}
          className="bg-gray-200 p-2 rounded-full shadow"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="bg-gray-200 p-2 rounded-full shadow"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Scrollable container (flex on mobile, grid on md+) */}
      <div
        ref={scrollRef}
        className="md:grid md:grid-cols-3 md:gap-8 flex overflow-x-auto gap-4 scroll-smooth pb-2"
      >
        {products
          .filter((product) => product.inStock)
          .slice(6, 12)
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

export default InSeason;
