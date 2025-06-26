/* import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const ThirdBanner = () => {

    return (
        <div className='mt-32 px-25 flex md:justify-between bg-white  '>
        
           <div className='relative group md:flex md:w-[50%] hidden'>
                <img src={assets.fruit_circle} alt="" className='pl-39 ' />
               
                <div className='absolute inset-0'>
                    <img src={assets.fruit} alt="" className=''/>
                     <img src={assets.fruit_shop} alt="" className='absolute right-1/9 transform -translate-x-1/4 -top-10' />
                </div>
            </div> 
         

           <div className='md:w-[50%] md:mt-10 '>
            <h2 className='text-medium text-2xl md:text-3xl tracking-wider lg:text-4xl mb-4'>Organic Vegetables Everyday</h2>
            <h3 className='text-primary mb-3'>Your online resource of healthy recipes</h3>
            <p className='mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quae reprehenderit sequi voluptatibus fuga in tempore expedita quaerat nam, enim asperiores ratione dolorum non atque esse delectus. Voluptatem, alias? Tenetur eligendi quam modi rerum maxime doloremque, dolorum labore temporibus iusto.</p>

            <div className='flex items-center mt-1'> 
                               <Link to={"/products"} className='group flex items-center gap-2 font-medium border border-primary
                               rounded-full py-3 px-7 md:px-9 bg-primary transition cursor-pointer text-white'>Shop now 
                               <img src={assets.arrow_white} alt="" className='w-4 transition group-focus:translate-x-1'/>
                               </Link>
             </div>
           </div>
        </div>
    );
};

export default ThirdBanner; */

import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const ThirdBanner = () => {
  return (
    <div className="mt-10 px-4 sm:px-6 md:px-20 flex flex-col md:flex-row items-center justify-between bg-white gap-10">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        <img src={assets.fruit_circle} alt="" className="max-w-[85%] sm:max-w-[75%] md:max-w-full" />
        <div className="absolute inset-0 flex justify-center md:justify-start items-center">
          <img src={assets.fruit} alt="" className="w-1/2 sm:w-2/3 md:w-auto" />
          <img
            src={assets.fruit_shop}
            alt=""
            className="absolute right-1/4 -top-6 sm:-top-8 w-16 sm:w-20 md:w-auto"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4">
          Organic Vegetables Everyday
        </h2>
        <h3 className="text-primary text-base sm:text-lg font-medium mb-2 sm:mb-3">
          Your online resource of healthy recipes
        </h3>
        <p className="text-gray-600 mb-5 sm:mb-6 text-xs sm:text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quae reprehenderit
          sequi voluptatibus fuga in tempore expedita quaerat nam, enim asperiores ratione
          dolorum non atque esse delectus. Voluptatem, alias? Tenetur eligendi quam modi rerum
          maxime doloremque, dolorum labore temporibus iusto.
        </p>

        <div className="flex justify-center md:justify-start">
          <Link
            to="/products"
            className="group flex items-center gap-2 font-medium border border-primary
              rounded-full py-2 px-5 sm:py-2.5 sm:px-6 md:py-3 md:px-9 bg-primary transition cursor-pointer text-white text-xs sm:text-sm md:text-base"
          >
            Shop now
            <img
              src={assets.arrow_white}
              alt="arrow"
              className="w-3 sm:w-4 transition group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThirdBanner;
