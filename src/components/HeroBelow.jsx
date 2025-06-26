/* import React from 'react';
import { assets } from '../assets/assets';

const HeroBelow = () => {
    
    return (
        <div className='hidden md:flex flex-col'>
           <div className='flex flex-row items-center px-6 md:px-16 lg:px-24 xl:px-32'>
            <div className='w-full bg-primary h-0.5'></div> <span className='text-primary w-100 px-1 font-medium'> When health is organic</span><div className='w-full bg-primary h-0.5'></div>
           </div> 

           <div className='flex flex-row items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-15'>
            <div className='flex ' >
                <img src={assets.delivery_truck} alt="" />
                <div className='px-2'>
                <p className='font-medium'>Free Shipping</p>
                <p className='text-gray-300 text-[13px]'>free shipping on your first order</p>
                </div>
            </div>
            <div className='flex '>
               
                 <img src={assets.headphones} alt="" />
                <div className='px-2' >
                <p>Customer Support 24/7</p>
                <p className='text-gray-300 text-[13px]'>instant access to Support</p>
                </div>
            </div>
            <div className='flex'>
            
                 <img src={assets.shopping_bag} alt="" />
                <div className='px-2'>
                <p>100% Secure Payment</p>
                <p className='text-gray-300 text-[13px]'>We ensure your money is save</p>
                </div>
            </div>
            <div className='flex '>
               
                 <img src={assets.Package} alt="" />
                <div className='px-2 '>
                <p>Money Back Guarantee</p>
                <p className='text-gray-300 text-[13px]'>30 Days Money Back Guarantee</p>
                </div>
            </div>
           </div>
        </div>
    );
};

export default HeroBelow; */

import React from 'react';
import { assets } from '../assets/assets';

const HeroBelow = () => {
  return (
    <div className="flex flex-col w-full mt-10 px-4 sm:px-6 lg:px-24">
      {/* Divider Text */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="w-full h-0.5 bg-primary"></div>
        <span className="text-primary font-medium whitespace-nowrap text-sm sm:text-base">
          When health is organic
        </span>
        <div className="w-full h-0.5 bg-primary"></div>
      </div>

      {/* Feature Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex justify-between gap-6 lg:gap-12 py-8">
        {/* Feature 1 */}
        <div className="flex items-start gap-3">
          <img src={assets.delivery_truck} alt="Free Shipping" className="w-8 h-8" />
          <div>
            <p className="font-medium text-sm sm:text-base">Free Shipping</p>
            <p className="text-gray-400 text-xs">Free shipping on your first order</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-start gap-3">
          <img src={assets.headphones} alt="Customer Support" className="w-8 h-8" />
          <div>
            <p className="font-medium text-sm sm:text-base">Customer Support 24/7</p>
            <p className="text-gray-400 text-xs">Instant access to support</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-start gap-3">
          <img src={assets.shopping_bag} alt="Secure Payment" className="w-8 h-8" />
          <div>
            <p className="font-medium text-sm sm:text-base">100% Secure Payment</p>
            <p className="text-gray-400 text-xs">We ensure your money is safe</p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex items-start gap-3">
          <img src={assets.Package} alt="Money Back" className="w-8 h-8" />
          <div>
            <p className="font-medium text-sm sm:text-base">Money Back Guarantee</p>
            <p className="text-gray-400 text-xs">30 Days money back guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBelow;
