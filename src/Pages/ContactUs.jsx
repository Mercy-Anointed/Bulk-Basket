import React from 'react';
import { assets } from '../assets/assets';

const ContactUs = () => {

    return (
        <div className='w-full max-w-[1440px] mx-auto'>
            <div className='relative'>
           <img src={assets.product_banner} alt="" className="w-full object-cover h-[60px]" /> 
           <div className='absolute inset-0 flex items-center pl-5 md:pl-10 '>
            <p className=' text-white text-2xl md:text-3xl lg:text-4xl'>Contact us</p>
           </div>
            </div>

           <div className='flex flex-col items-center justify-center mt-10'>
            <h2 className='font-semibold md:text-2xl'>Get in Touch</h2>
            <p className='text-gray-500 text-center'>we're here to assist you better and answer your questions</p>
            
            <div className='flex flex-col md:flex-row justify-between mt-10 gap-10 md:w-[80%] w-[90%]'>
                <div className=' w-full md:w-[40%] mt-2 bg-white shadow-md '>
                    {[
                        {img: assets.location_icon, title: "162 Elzazi Plaza D/line, Port Harcourt, River State Nigeria", desc:""}, 
                        {img: assets.message_icon, title: "proxy@gmail.com", desc:"help.proxy@gmail.com"}, 
                        {img: assets.call_icon, title: "(234) 901-555-0114", desc:"(234) 811-333-0487"}, 
                    ].map(({img,title,desc}, i) => (
                         <div key={i} className='flex items-center gap-3 w-full md:w-full mt-2 md:mt-20 px-9 mb-2 md:mb-10 text-gray-500'>
                            <img src={img} alt="location" className='w-8 h-8'/>
                            <div>
                                <p>{title}</p>
                                <p>{desc}</p>
                            </div>
                        </div>
                    )
                       
                    )}
                </div>

              
                <form className='flex bg-white flex-col md:w-[60%] w-full shadow-md'>
                    <div className='flex flex-col mt-5 px-4 '>
                    <label className='mb-2 block'>Full Name</label>
                    <input className="border border-gray-300 mb-3 px-2 py-3 rounded-md outline-none" type="text" id="name" placeholder='Edward, Vannesa Ibifuro'/>
                    </div>
                    <div className='flex flex-col  mt-5 px-4'>
                    <label className='mb-2 block' >Email</label>
                    <input className="border border-gray-300 mb-3  px-2 py-3 rounded-md outline-none" type="email" id="email" placeholder='vannesaibifuro@gmail.com'/>
                    </div>
                    <div className='flex flex-col  mt-5 px-4'>
                    <label  className='mb-2 block' htmlFor="message">Message</label>
                    <textarea name="" id="message" rows={4} placeholder="Type your message here" className="border border-gray-300 text-gray-500 rounded-md
                    px-2 py-2 outline-none resize-none"/>
                       
                  
                  </div>
                    

                    <div className='flex justify-center mt-5 pb-4'>
                        <button type='submit' className='bg-primary items-center rounded-md px-4 py-2
                         text-white tracking-wide hover:bg-primary/90'>Send Message</button>
                    </div>
                </form>
                    

               


            </div>
           </div>

           <div className='w-full px-5 md:px-20  mt-10 mb-10 '>
            <div className='w-full h-64 md:h-96 rounded-md overflow-hidden shadow-md'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127223.16264394466!2d7.00479655!3d4.81741045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cea39f2c48e3%3A0x53562bdd7d8832db!2sPort%20Harcourt%2C%20Rivers!5e0!3m2!1sen!2sng!4v1750773950609!5m2!1sen!2sng" 
        width="100%"
        height="100%" 
        style={{ border:0 }}
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        </div>
           </div>
        </div>
    );
};

export default ContactUs;