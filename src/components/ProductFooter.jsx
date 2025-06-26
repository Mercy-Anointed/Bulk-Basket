import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
const ProductFooter = () => {
    return (
       
            

    <div className='relative lg:flex hidden '>

  <img src={assets.product_footer} alt="" />

  <div className='absolute inset-0 flex flex-col lg:items-end lg:justify-start items-center 
  justify-center lg:pl-210 lg:pr-20 mt-24'>
     <div className='flex flex-col '>
      <h2 className='font-medium text-2xl md:text-3xl   w-80 mb-3'>100% Trusted Organic Food Store</h2>
   
   <div className='flex flex-row gap-2 mt-2'>

     <div className='  w-20 '> <img src={assets.checkbox} alt="" /> </div>
     <div>
     <h3 className='text-semibold lg:text-base'>Every day fresh & quality products for you.</h3> 
     <p className='text-sm text-gray-600 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda ex deserunt accusamus consequuntur temporibus earum illum quo dignissimos, 
       blanditiis porro doloribus architecto neque. Fuga asperiores vero soluta. Laudantium.</p>
    </div>
      </div>
   <div className='flex flex-row gap-2 mt-2'>

     <div className='  w-20 '> <img src={assets.checkbox} alt="" /> </div>
     <div>
     <h3 className='text-semibold lg:text-base'>Every day fresh & quality products for you.</h3> 
     <p className='text-sm text-gray-600 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda ex deserunt accusamus consequuntur temporibus earum illum quo dignissimos, 
       blanditiis porro doloribus architecto neque. Fuga asperiores vero soluta. Laudantium.</p>
    </div>
      </div>

       <div className='flex items-center mt-5 ml-6'> 
      <Link to={"/"} className='group flex items-center gap-2 font-medium border border-primary
         rounded-full py-2 px-7 lg:px-9 bg-primary transition cursor-pointer text-white'>Shop now 
      <img src={assets.arrow_white} alt="" className='w-4 transition group-focus:translate-x-1'/>
       </Link>
         </div>
    

      </div>
     
  </div>
</div>
        
    );
};

export default ProductFooter;