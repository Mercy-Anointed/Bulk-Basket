/* import React from 'react';
import { assets } from '../assets/assets';
const ProductBanner = () => {
    return (
        <div className='relative mt-2'>
          
                      <img src={assets.product_banner} alt="" />
                      <div className='absolute inset-0 mt-3'>
                        
                       <p className=' text-white text-2xl md:text-3xl font-medium px-27'>All Products</p>
                      </div>
            
            
        </div>
    );
};

export default ProductBanner; */

import React from 'react';
import { assets } from '../assets/assets';

const ProductBanner = () => {
  return (
    <div className="relative w-full">
      <img src={assets.product_banner} alt="Product Banner" className="w-full object-cover h-[60px]" />

      <div className="absolute inset-0 mt-3 flex items-start px-4 md:px-8 lg:px-12 ">
        <p className="text-white text-2xl md:text-3xl font-medium">
          All Products
        </p>
      </div>
    </div>
  );
};

export default ProductBanner;
