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

import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';

const MainBanner = () => {
  const { navigate } = useAppContext();
  const bannerImages = [assets.animation0, assets.animation2, assets.animation1];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 5000); // 5 seconds per image

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mb-3 md:mb-3 h-[25vh] sm:h-[30vh] md:h-[40vh] lg:h-[75vh] overflow-hidden">
      {/* Loop through images and stack them absolutely */}
      {bannerImages.map((img, index) => (
        <img
          key={index}
          src={img}
          onClick={() => navigate('/products')}
          alt={`banner-${index}`}
          className={`absolute top-0 left-0 w-full md:h-[370px] lg:h-full lg:object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}

      {/* Optional: Add content overlay */}
      {/* <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4 sm:p-6 md:p-10">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold bg-black/50 p-3 rounded">
          Welcome to Our Store
        </h1>
      </div> */}
    </div>
  );
};

export default MainBanner;

