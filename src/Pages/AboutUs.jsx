/* import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const AboutUs = () => {
   
    return (
        <div>
            <div className='relative '>
                <img src={assets.product_banner} alt="" />
                <div className='absolute inset-0 pl-24 text-white flex items-center text-2xl ' >
                    <p className='font-bold'>About Us</p>
                </div>
            </div>

<div className='mt-10 flex flex-col justify-between px-24 '>
            <div className=' flex flex-row justify-between gap-4'>
                <div className='w-[50%] mt-4 '>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl leading-tight lg:leading-15
                    tracking-wider font-medium mb-20'>100% Trusted Organic Food Store</h2>
                    <p className='  text-gray-500'>At bulk Basket, we are passionate about providing high-quality food products to enhance 
                        your culinary experience. We believe that good food starts with the finest ingredients, which is why we have curated
                        a diverse selection of grains, legumes, cooking essentials e.t.c sourced from trusted suppliers
                        around the country and beyond.
                    </p>
                </div>

                <div className='w-[50%]'><img src={assets.about_image1} alt="" /></div>

              
            </div>

            <div className='flex flex-row justify-between gap-4 mt-15 '>

              <div className='w-[50%]'><img src={assets.about_image2} alt="" /></div>

              <div className='w-[50%] mt-4 '>
                <h2 className='text-3xl md:text-4xl lg:text-5xl leading-tight lg:leading-15
                    tracking-wider font-medium mb-10'>We Deliver, You Enjoy Your Order</h2>
                <p className='  text-gray-500 mb-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore harum eum praesentium maxime modi nulla totam unde ab minus, 
                    atque doloribus sapiente alias consectetur quas? Mollitia tenetur aliquid alias eius.</p>
             <div className='flex flex-row gap-2 text-gray-500 mb-3'><img src={assets.check2} alt="" /> <span>Lorem ipsum, dolor sit amet .</span></div>
             <div className='flex flex-row gap-2 text-gray-500  mb-3'><img src={assets.check2} alt="" /> <span>Lorem ipsum dolor sit amet consectetur.</span></div>
             <div className='flex flex-row gap-2 text-gray-500  mb-3'><img src={assets.check2} alt="" /> <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span></div>
             <div className='flex flex-row gap-2 text-gray-500 mb-5'><img src={assets.check2} alt="" /> <span>Lorem ipsum dolor sit amet consectetur.</span></div>
              
               <div className='flex items-center mt-1'> 
                    <Link to={"/products"} className='group flex items-center gap-2 font-medium border border-primary
                    rounded-full py-3 px-7 text-white md:px-9 bg-primary transition cursor-pointer'>Shop now 
                    <img src={assets.arrow_white} alt="" className='w-4 transition group-focus:translate-x-1'/>
                    </Link>
                </div>

              </div>
            </div>


            <div className='flex flex-row justify-between gap-4 mt-15'>
                <div className='w-[50%] mt-4'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl leading-tight lg:leading-15
                    tracking-wider font-medium mb-10'>100% Commitment To Quality </h2>
                    <p className='  text-gray-500'>We are committed to offering you nothing but the best. Our team meticulously select 
                        each product, ensuring that it meets our strict quality standards. From organic and sustainably sourced options to exotic 
                        and hard-to-find varieties, we strive to cater to the unique tastes and preferences of our valued customers
                    </p>
                    <div className='flex flex-wrap '>
                        <div className='flex flex-row gap-2 mt-5 pr-8'><img src={assets.icon1} alt="" className='w-10 h-10' /> <div ><h3 className='text-gray-700'>100% Organic Food</h3> <span className='text-gray-500'>100% healthy and fresh food</span></div></div>
                        <div className='flex flex-row gap-2 mt-5 pr-8'><img src={assets.icon2} alt="" className='w-10 h-10' /> <div ><h3 className='text-gray-700'>Customer Feedback</h3> <span className='text-gray-500'>Our happy customer</span></div></div>
                        <div className='flex flex-row gap-2 mt-5 pr-8'><img src={assets.icon3} alt="" className='w-10 h-10' /> <div ><h3 className='text-gray-700'>Free Shipping</h3> <span className='text-gray-500'>Free shipping with discount</span></div></div>
                        <div className='flex flex-row gap-2 mt-5 '><img src={assets.icon4} alt="" className='w-10 h-10' /> <div ><h3 className='text-gray-700'>Great Support 24/7</h3> <span className='text-gray-500'>Instant access to contact</span></div></div>
                        <div className='flex flex-row gap-2 mt-5 '><img src={assets.icon5} alt="" className='w-10 h-10' /> <div ><h3 className='text-gray-700'>100% secure payment</h3> <span className='text-gray-500'>We ensure your payment is secure</span></div></div>
                        <div className='flex flex-row gap-2 mt-5 '><img src={assets.icon6} alt="" className='w-10 h-10' /> <div ><h3 className='text-gray-700'>100% unique packaging</h3> <span className='text-gray-500'>100% healthy and fresh food</span></div></div>
                    </div>
                </div>

                <div><img src={assets.about_image3} alt="" /></div>
            </div>

            <div className='flex flex-col mt-15 items-center justify-center px-30'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl leading-tight lg:leading-15
                    tracking-wider font-medium mb-6'>Our Awesome Team</h2>
                <p className='  text-gray-500'>Our dedicated team is committed to providing you with a seamless shopping experience, 
                    ensuring quality and reliability in every purchase. We're here to support you every step of the way because your satisfaction is our priority
                </p>

                <div className='flex flex-row '>
                  <div>
                    <img src={assets.testify_1} alt="" />
                    <h2>Chigozie Joshua</h2>
                    <span className='text-gray-500'>Coo & Co-founder</span>
                    </div>  
                    <div>
                        <img src={assets.testify_2} alt="" />
                        <h2>Rejoice Edward</h2>
                    <span className='text-gray-500'>Digital Manager</span>
                    </div>
                   <div> 
                    <img src={assets.testify_3} alt="" />
                    <h2>Emmanuel Chinedu</h2>
                    <span className='text-gray-500'>Human Resource Manager</span>
                    </div>
                </div>
            </div>

  </div>            
        </div>
    );
};

export default AboutUs; */

import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div>
      {/* Banner */}
      <div className="relative">
        <img src={assets.product_banner} alt="Banner" className="w-full object-cover h-[60px]" />
        <div className="absolute inset-0 pl-4 md:pl-8 lg:pl-24 flex items-center text-white text-2xl font-bold">
          <p>About Us</p>
        </div>
      </div>

      {/* Section 1 */}
      <div className="mt-10 px-4 md:px-8 lg:px-24 flex flex-col md:flex-row justify-between gap-8">
        <div className="md:w-1/2 ">
          <h2 className="text-2xl md:text-2xl lg:text-5xl font-medium tracking-wide leading-tight md:mb-2 mb-2 lg:mb-10 ">
            100% Trusted Organic Food Store
          </h2>
          <p className="text-gray-500">
            At Bulk Basket, we are passionate about providing high-quality food products to enhance 
            your culinary experience. We believe that good food starts with the finest ingredients, which is why we have curated
            a diverse selection of grains, legumes, cooking essentials, etc., sourced from trusted suppliers
            around the country and beyond.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={assets.about_image1} alt="Organic Food Store" className="w-full object-cover rounded" />
        </div>
      </div>

      {/* Section 2 */}
      <div className="mt-16 px-4 md:px-8 lg:px-24 flex flex-col md:flex-row justify-between gap-8 items-center">
        <div className="md:w-1/2">
          <img src={assets.about_image2} alt="Delivery" className="w-full object-cover rounded" />
        </div>
        <div className="md:w-1/2 mt-4">
          <h2 className="text-2xl md:text-2xl lg:text-5xl font-medium tracking-wide leading-tight mb-6">
            We Deliver, You Enjoy Your Order
          </h2>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore harum eum praesentium maxime modi nulla totam unde ab minus, 
            atque doloribus sapiente alias consectetur quas? Mollitia tenetur aliquid alias eius.
          </p>

          {/* Checkpoints */}
          {[
            "Lorem ipsum, dolor sit amet.",
            "Lorem ipsum dolor sit amet consectetur.",
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur."
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-2 text-gray-500 mb-3">
              <img src={assets.check2} alt="check" className="w-5 h-5" />
              <span>{text}</span>
            </div>
          ))}

          {/* Shop Now Button */}
          <div className="mt-4">
            <Link
              to="/products"
              className="group flex items-center gap-2 font-medium border border-primary rounded-full py-3 px-7 md:px-9 bg-primary text-white transition cursor-pointer"
            >
              Shop now
              <img
                src={assets.arrow_white}
                alt="arrow"
                className="w-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="mt-16 px-4 md:px-8 lg:px-24 flex flex-col md:flex-row justify-between gap-8 items-center">
        <div className="md:w-1/2 mt-4">
          <h2 className="text-2xl md:text-2xl lg:text-5xl font-medium tracking-wide leading-tight mb-8">
            100% Commitment To Quality
          </h2>
          <p className="text-gray-500 mb-8">
            We are committed to offering you nothing but the best. Our team meticulously selects 
            each product, ensuring that it meets our strict quality standards. From organic and sustainably sourced options to exotic 
            and hard-to-find varieties, we strive to cater to the unique tastes and preferences of our valued customers.
          </p>

          <div className="hidden md:flex md:flex-wrap md:gap-6">
            {[ 
              { img: assets.icon1, title: "100% Organic Food", desc: "100% healthy and fresh food" },
              { img: assets.icon2, title: "Customer Feedback", desc: "Our happy customer" },
              { img: assets.icon3, title: "Free Shipping", desc: "Free shipping with discount" },
              { img: assets.icon4, title: "Great Support 24/7", desc: "Instant access to contact" },
              { img: assets.icon5, title: "100% secure payment", desc: "We ensure your payment is secure" },
              { img: assets.icon6, title: "100% unique packaging", desc: "100% healthy and fresh food" },
            ].map(({ img, title, desc }, i) => (
              <div key={i} className="flex items-center gap-4 w-1/2 md:w-auto">
                <img src={img} alt={title} className="w-10 h-10" />
                <div>
                  <h3 className="text-gray-700 font-semibold">{title}</h3>
                  <span className="text-gray-500 text-sm">{desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/2">
          <img src={assets.about_image3} alt="Quality Commitment" className="w-full object-cover rounded" />
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-16 px-4 lg:px-20 flex flex-col items-center text-center max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-2xl lg:text-5xl font-medium tracking-wide leading-tight mb-6">
          Our Awesome Team
        </h2>
        <p className="text-gray-500 max-w-3xl mb-12 text-sm md:text-base">
          Our dedicated team is committed to providing you with a seamless shopping experience, 
          ensuring quality and reliability in every purchase. We're here to support you every step of the way because your satisfaction is our priority.
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12 w-full">
          <div className="flex flex-col items-center w-[30%] min-w-[100px] max-w-[150px] sm:max-w-[200px] md:max-w-[250px]">
            <img src={assets.testify_1} alt="Chigozie Joshua" className="rounded-md w-24 h-24 md:w-32 md:h-32 object-cover mb-2" />
            <h3 className="text-xl font-semibold">Chigozie Joshua</h3>
            <span className="text-gray-500">COO & Co-founder</span>
          </div>  
          <div className="flex flex-col items-center max-w-xs">
            <img src={assets.testify_2} alt="Rejoice Edward" className="rounded-md w-24 h-24 md:w-32 md:h-32 object-cover mb-2" />
            <h3 className="text-xl font-semibold">Rejoice Edward</h3>
            <span className="text-gray-500">Digital Manager</span>
          </div>
          <div className="flex flex-col items-center max-w-xs">
            <img src={assets.testify_3} alt="Emmanuel Chinedu" className="rounded-md w-24 h-24 md:w-32 md:h-32 object-cover mb-2" />
            <h3 className="text-xl font-semibold">Emmanuel Chinedu</h3>
            <span className="text-gray-500">Human Resource Manager</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
