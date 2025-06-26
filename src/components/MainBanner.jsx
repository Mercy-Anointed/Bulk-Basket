/* import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const MainBanner = () => {
    
    return (
        <div className='relative mb-9 hidden md:flex'>
          <img src={assets.main_banner} alt="banner" className='w-full hidden md:block h-[80vh]' />  
           
          <div className='absolute inset-0 flex flex-row items-center md:items-center justify-end md:justify-between pb-24 md:pb-0
          px-2 md:pl-15 lg:pl-7 '>
                <div className='flex flex-col items-center md:items-start justify-end md:justify-center
                pb-24 md:pb-0 px-2 md:pl-18 lg:pl-18 '>
                <p className='text-primary'>Welcome to bulk basket</p>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold  text-center md:text-left
                max-w-70 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15 mb-8 mt-4'>Fresh & Healthy Organic food</h1>
                <h3 className='text-2xl md:text-3xl lg:text-4xl mb-4'>Sale up to <span className='text-[#FF8A00] font-bold'>30% OFF</span></h3>
                <p className='text-gray-500 text-sm mb-6 '>free shipping on all first time order. We deliver. You enjoy</p>

                <div className='flex items-center mt-1'> 
                    <Link to={"/products"} className='group flex items-center gap-2 font-medium border border-primary
                    rounded-full py-3 px-7 md:px-9 bg-white hover:bg-primary transition cursor-pointer'>Shop now 
                    <img src={assets.black_arrow} alt="" className='w-4 transition group-focus:translate-x-1'/>
                    </Link>
                </div>
                </div>
                <div className=' md:pr-18 '>
                    <img src={assets.food_basket} alt=""  />
                </div>
          </div>
          
        </div>
    );
};

export default MainBanner; */

import React from 'react'; 
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const MainBanner = () => {
  return (
    <div className="relative mb-9 flex flex-col md:flex-row w-full">
      {/* Background Banner Image */}
      <img
        src={assets.main_banner}
        alt="banner"
        className="w-full h-[45vh] md:h-[55vh] object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-4 md:px-10 lg:px-20 py-8">
        {/* Text Section */}
        <div className="text-center md:text-left max-w-xl">
          <p className="text-primary text-xs sm:text-sm md:text-sm">Welcome to bulk basket</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-3 mb-3">
            Fresh & Healthy Organic food
          </h1>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2">
            Sale up to <span className="text-[#FF8A00] font-bold">30% OFF</span>
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm md:text-sm mb-2">
            Free shipping on all first-time orders. We deliver. You enjoy.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link
              to="/products"
              className="group flex items-center gap-2 font-medium border border-primary rounded-full py-1.5 px-4 sm:py-2.5 sm:px-6 bg-white hover:bg-primary transition text-xs sm:text-sm md:text-base"
            >
              Shop now
              <img
                src={assets.black_arrow}
                alt=""
                className="w-3 sm:w-4 transition group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="mb-4 md:mb-0 md:pr-8">
          <img
            src={assets.food_basket}
            alt="basket"
            className="w-36 sm:w-44 md:w-156 lg:w-172"
          />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
