/* import React from 'react';

const FooterBottom = () => {
    return (
        <div className='flex md:justify-between  py-4 md:px-8 lg:px-15 xl:px-18 px-6'>
            <p> &copy; {new Date().getFullYear()} <span>BulkBasket.</span> All Rights Reserved.</p>
           <ul>
            <li className='grid md:grid-cols-3 grid-cols-3 gap-5'>
                <a href="#" className='mr-6'>Terms & Conditions</a>
                <a href="#" className='ml-5'>Privacy Policy</a>
                <a href="#">Cookie Policy</a>
            </li>
           </ul>
           </div>
    );
};

export default FooterBottom; */

import React from 'react';

const FooterBottom = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-4 px-6 md:px-8 lg:px-16 xl:px-20 text-sm border-t border-gray-200">
      {/* Copyright */}
      <p className="text-center md:text-left mb-3 md:mb-0">
        &copy; {new Date().getFullYear()} <span className="font-semibold">BulkBasket</span>. All rights reserved.
      </p>

      {/* Policy Links */}
      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-600">
        <li>
          <a href="#" className="hover:text-primary transition">Terms & Conditions</a>
        </li>
        <li>
          <a href="#" className="hover:text-primary transition">Privacy Policy</a>
        </li>
        <li>
          <a href="#" className="hover:text-primary transition">Cookie Policy</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterBottom;
