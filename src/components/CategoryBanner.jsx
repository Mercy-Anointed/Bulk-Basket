 import React from 'react';
import { assets } from '../assets/assets';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
const CategoryBanner = () => {

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
        <div className='mt-16 md:w-full hidden md:flex lg:flex'>
            
            <div className='relative'>
                <img src={assets.category_banner} alt="" />
              
                <div className='absolute inset-0 text-white flex flex-col items-center md:items-start md:justify-center justify-end
                pb-24 md:pb-0 px-4 md:pl-10 lg:pl-14'>
                    <p className='lg:mb-4 md:mb-2'>BEST DEALS</p>
                    <h2 className='lg:mb-3 md:mb-2 font-bold md:text-base lg:text-2xl'>Sales of the Month 
                    </h2>
                    <div className='lg:mb-5 md:mb-2'>
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
                    rounded-full md:py-0 lg:py-3 md:px-4 lg:px-9 bg-primary transition cursor-pointer'>Shop now 
                    <img src={assets.arrow_white} alt="" className='w-4 transition group-focus:translate-x-1'/>
                    </Link>
                </div>
                </div>

                <div className='absolute inset-0 lg:pl-84 lg:mt-15 md:pl-50 md:mt-5'>
                    <img src={assets.category_frame_5} alt="" className='md:w-15 lg:w-30' />
                </div>
                
            </div>

          </div> 
         
    );
};

export default CategoryBanner; 


