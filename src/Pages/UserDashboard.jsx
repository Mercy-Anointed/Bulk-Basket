import React from 'react';
import UserLayout from './UserLayout';
import { useLocation } from 'react-router-dom';
import { FiUser, FiChevronRight } from 'react-icons/fi';
import { assets } from '../assets/assets';

const UserDashboard = () => {
  const location = useLocation();

  // Extract the section path from URL (e.g., 'orders', 'settings')
  const pathSegments = location.pathname.split('/');
  const currentSection = pathSegments.length > 2 ? pathSegments[2] : '';

  // Capitalize section name
  const sectionTitle = currentSection
    ? currentSection.charAt(0).toUpperCase() + currentSection.slice(1)
    : '';

  return (
    <div>
      {/* Banner */}
      <div className='relative w-full mb-4'>
        <img
          src={assets.product_banner}
          alt='Banner'
          className='w-full object-cover max-h-[300px]'
        />
        <div className='absolute inset-0 pl-2 md:pl-8 flex items-center gap-2 text-white'>
          {/* 👤 Account Icon */}
          <FiUser size={24} className='text-white' />
          <p className='md:text-2xl font-bold flex items-center gap-2'>
            Account
            {sectionTitle && (
              <>
                <FiChevronRight size={20} />
                <span>{sectionTitle}</span>
              </>
            )}
          </p>
        </div>
      </div>

      {/* Main Layout */}
      <UserLayout />
    </div>
  );
};

export default UserDashboard;
