/* import React from 'react';
import { assets } from '../assets/assets';


const SecondBanner = () => {
    return (
        <div className='hidden md:flex relative mt-16 px-32 items-center text-center justify-center cursor-pointer'>
            <img src={assets.second_banner} alt="" />
           <div className=' absolute inset-0 flex items-center justify-center  '>
           
            <p className='text-white bg-transparent border border-gray-300 px-3 py-3 font-bold 
            text-2xl '>Free Delivery When You Spend Over N50,000</p>
           </div> 
        </div>
    );
};

export default SecondBanner;
 */

import React from 'react';
import { assets } from '../assets/assets';

const SecondBanner = () => {
  return (
    <div className="relative mt-12 px-4 sm:px-6 md:px-10 lg:px-20 flex justify-center items-center cursor-pointer">
      {/* Banner Image */}
      <img
        src={assets.second_banner}
        alt="Free Delivery Banner"
        className="w-full h-auto object-cover rounded"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white border border-white px-3 py-2 font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-center rounded">
          Free Delivery When You Spend Over N50,000
        </p>
      </div>
    </div>
  );
};

export default SecondBanner;
