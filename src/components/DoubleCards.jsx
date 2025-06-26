/* import {useState, useEffect} from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const DoubleCards = () => {
  const [time, setTime] = useState(2 * 24 * 60 * 60 * 1000)

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000)
    }, 1000)
  }, [time])

  const getFormatedTime = (milliseconds) => {
    let total_seconds = parseInt(Math.floor(milliseconds / 1000))
    let total_minutes = parseInt(Math.floor(total_seconds / 60))
    let total_hours = parseInt(Math.floor(total_minutes / 60))
    let days = parseInt(Math.floor(total_hours / 24))

    let seconds = parseInt(total_seconds % 60)
    let minutes = parseInt(total_minutes % 60)
    let hours = parseInt(total_hours % 24)
    
    return `${days} : ${hours} : ${minutes} : ${seconds}`
  }

    return (
        <div className='mt-32 md:flex hidden'>
           <div className='flex flex-row md:px-25 px-8 justify-between gap-3'>
            
            <div className='relative'>
                <img src={assets.banner_1} alt="" />
                <div className='absolute inset-0 text-white flex flex-col items-center md:items-start md:justify-center justify-end
                pb-24 md:pb-0 px-4 md:pl-10 lg:pl-14'>
                    <p className='mb-4'>100% Organic</p>
                    <h2 className='mb-5 font-bold text-2xl md:text-3xl'>Fruit & Vegetable</h2>
                    <p className='mb-5'>
                      <span>Starting at:  </span>  
                        <span className='bg-[#FF8A00] text-white rounded-md px-2 py-2'>N 600</span> 
                    </p>
                    <div className='flex items-center mt-1'> 
                    <Link to={"/products"} className='group flex items-center gap-2 font-medium border border-primary
                    rounded-full py-3 px-7 md:px-9 bg-primary transition cursor-pointer'>Shop now 
                    <img src={assets.arrow_white} alt="" className='w-4 transition group-focus:translate-x-1'/>
                    </Link>
                </div>
                </div>
            </div>

            <div className='relative'>
                <img src={assets.banner_2} alt="" />
              
                <div className='absolute inset-0 text-white flex flex-col items-center md:items-start md:justify-center justify-end
                pb-24 md:pb-0 px-4 md:pl-10 lg:pl-14'>
                    <p className='mb-4'>Sale off the week</p>
                    <h2 className='mb-3 font-bold text-2xl md:text-3xl'>Sales of the Week</h2>
                    <div className='mb-5'>
                      <div className='text-2xl'>{getFormatedTime(time)}</div>
                      <div className='text-[12px] '>
                        <span className='mr-1'>DAYS</span>
                        <span className='mr-1'>HOURS</span>
                        <span className='mr-1'>MINS</span>
                        <span >SECS</span>
                      </div>
                   </div>
                    <div className='flex items-center mt-1'> 
                    <Link to={"/products"} className='group flex items-center gap-2 font-medium border border-primary
                    rounded-full py-3 px-7 md:px-9 bg-primary transition cursor-pointer'>Shop now 
                    <img src={assets.arrow_white} alt="" className='w-4 transition group-focus:translate-x-1'/>
                    </Link>
                </div>
                </div>
                
            </div>

          </div> 
        </div>
    );
};

export default DoubleCards; */

import { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const DoubleCards = () => {
  const [time, setTime] = useState(2 * 24 * 60 * 60 * 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1000 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getFormattedTime = (milliseconds) => {
    const total_seconds = Math.floor(milliseconds / 1000);
    const total_minutes = Math.floor(total_seconds / 60);
    const total_hours = Math.floor(total_minutes / 60);
    const days = Math.floor(total_hours / 24);

    const seconds = total_seconds % 60;
    const minutes = total_minutes % 60;
    const hours = total_hours % 24;

    return `${days} : ${hours} : ${minutes} : ${seconds}`;
  };

  return (
    <div className="mt-16 px-4 sm:px-6 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Banner */}
        <div className="relative">
          <img src={assets.banner_1} alt="banner 1" className="w-full rounded-lg object-cover" />
          <div className="absolute inset-0 text-white flex flex-col items-center md:items-start justify-end md:justify-center px-4 py-10 md:px-10 lg:px-14 bg-black/20">
            <p className="mb-2 text-sm md:text-base">100% Organic</p>
            <h2 className="mb-3 font-bold text-xl md:text-2xl lg:text-3xl">Fruit & Vegetable</h2>
            <p className="mb-4 text-sm md:text-base">
              Starting at: <span className="bg-[#FF8A00] px-2 py-1 rounded-md">N 600</span>
            </p>
            <Link
              to="/products"
              className="group flex items-center gap-2 font-medium border border-primary rounded-full py-2.5 px-6 md:px-8 bg-primary transition text-white text-sm"
            >
              Shop now
              <img src={assets.arrow_white} alt="arrow" className="w-4 group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>

        {/* Second Banner */}
        <div className="relative">
          <img src={assets.banner_2} alt="banner 2" className="w-full rounded-lg object-cover" />
          <div className="absolute inset-0 text-white flex flex-col items-center md:items-start justify-end md:justify-center px-4 py-10 md:px-10 lg:px-14 bg-black/20">
            <p className="mb-2 text-sm md:text-base">Sale off the week</p>
            <h2 className="mb-3 font-bold text-xl md:text-2xl lg:text-3xl">Sales of the Week</h2>
            <div className="mb-4 text-center md:text-left">
              <div className="text-lg md:text-xl font-semibold">{getFormattedTime(time)}</div>
              <div className="text-xs tracking-wider mt-1">
                <span className="mr-2">DAYS</span>
                <span className="mr-2">HOURS</span>
                <span className="mr-2">MINS</span>
                <span>SECS</span>
              </div>
            </div>
            <Link
              to="/products"
              className="group flex items-center gap-2 font-medium border border-primary rounded-full py-2.5 px-6 md:px-8 bg-primary transition text-white text-sm"
            >
              Shop now
              <img src={assets.arrow_white} alt="arrow" className="w-4 group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubleCards;
