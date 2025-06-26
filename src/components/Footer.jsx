/* import React, { useState } from 'react';
import { assets, footerLinks} from '../assets/assets';


const Footer = () => {
    const [email, setEmail] = useState([])
    return (
        <div className='mt-10 md:px-10 lg:px-20 xl:px-17 px-6 bg-[#2C742F] '>
           <div className='flex md:flex-row flex-col md:justify-between text-white py-15 items-start gap-10 border-b
            border-gray-500/10  '>
                <div className='flex flex-col md:w-[40%]'>
                    <div className='flex flex-row '>
                        <img src={assets.logo} alt="logo" 
                       className='md:h-[45px] h-[30px] mr-[-7px]' /> <span className='font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4'>Bulk Basket</span>
                    </div>
                    <p className='tracking-wide'>Get newsletter update for upcoming product and best discount for all items</p>
                    <form className='group w-full'>
                        <input type="email" placeholder='Your email address' value={email} 
                         onChange={(e) => setEmail(e.target.value)} required className='bg-white rounded-full px-2.5 w-[350px] mb-4 mt-5 outline-none placeholder-gray-500 py-2'/>
                         <button className='bg-[#00B207] text-white py-2 rounded-full px-2.5 ml-[-30px] '>Subscribe</button>
                    </form>
                    <div className='flex flex-row gap-3'>
                        <img src={assets.master_card} alt="" />
                        <img src={assets.card_2} alt="" />
                    </div>
                </div>

                
           <div className='flex flex-wrap md:justify-between gap-5 w-full md:w-[50%]'>
            {footerLinks.map((section, index) => (
                <div key={index}>
                    <h3 className='font-bold text-[20px] '>{section.title}</h3>
                    <ul>
                      {section.links.map((link, i) => (
                        <li key={i}>
                            <a href={link.url} className='text-sm hover:underline transition'>{link.text}</a>
                        </li>
                      ))}  
                    </ul>
                </div>
            ))}
           </div>

           </div> 



           
        </div>
    );
};

export default Footer; */

import React, { useState } from 'react';
import { assets, footerLinks } from '../assets/assets';

const Footer = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="mt-10 bg-[#2C742F] text-white px-3 sm:px-4 md:px-8 lg:px-12 xl:px-16 text-xs sm:text-sm">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-6 sm:gap-8 py-8 sm:py-10 border-b border-white/10">
        {/* Left Section */}
        <div className="md:w-[40%]">
          {/* Logo */}
          <div className="flex items-center mb-3 sm:mb-4">
            <img src={assets.logo} alt="logo" className="h-6 sm:h-[30px] md:h-[45px] gap-1" />
            <span className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl">Bulk Basket</span>
          </div>

          {/* Description */}
          <p className="leading-relaxed text-[11px] sm:text-sm">
            Get newsletter updates for upcoming products and best discounts on all items.
          </p>

          {/* Email Subscription */}
          <form className="mt-4 sm:mt-5 w-full max-w-md relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Your email address"
              className="bg-white text-gray-800 placeholder-gray-500 w-full h-9 sm:h-11 pr-[100px] sm:pr-[115px] pl-4 rounded-full outline-none text-xs sm:text-sm"
            />
            <button
              type="submit"
              className="absolute top-0 bottom-0 right-0 h-9 sm:h-11 px-4 sm:px-5 bg-[#00B207] text-white text-xs sm:text-sm rounded-full w-[95px] sm:w-[105px] hover:bg-green-700 transition"
            >
              Subscribe
            </button>
          </form>

          {/* Payment Icons */}
          <div className="flex gap-2 sm:gap-3 mt-3 sm:mt-4">
            <img src={assets.master_card} alt="MasterCard" className="h-5 sm:h-6" />
            <img src={assets.card_2} alt="Card 2" className="h-5 sm:h-6" />
          </div>
        </div>

        {/* Right Section - Footer Links */}
        <div className="w-full md:w-[60%] mt-6 md:mt-0 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 lg:flex lg:justify-between lg:gap-6">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-[13px] sm:text-base mb-1">{section.title}</h3>
              <ul className="space-y-0.5">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      className="text-[11px] sm:text-sm hover:underline hover:text-gray-300 transition"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
