import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { FiUser, FiChevronRight } from 'react-icons/fi';
import { assets } from '../assets/assets';
import UserLayout from './UserLayout';

const UserDashboard = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/');
  const currentSection = pathSegments.length > 2 ? pathSegments[2] : '';
  const sectionTitle = currentSection
    ? currentSection.charAt(0).toUpperCase() + currentSection.slice(1)
    : '';

  return (
    <div className="w-full">
      {/* Banner */}
      <div className="relative w-full mb-4">
        <img
          src={assets.product_banner}
          alt="Banner"
          className="w-full object-cover max-h-[250px] sm:max-h-[300px]"
        />
        <div className="absolute inset-0 px-2 sm:px-8 flex items-center gap-2 text-white">
          <FiUser size={20} className="text-white" />
          <p className="text-lg sm:text-2xl font-bold flex items-center gap-2">
            Account
            {sectionTitle && (
              <>
                <FiChevronRight size={18} />
                <span>{sectionTitle}</span>
              </>
            )}
          </p>
        </div>
      </div>

      {/* Sidebar + Main Content in same row on all screens */}
      <div className="flex w-full min-h-[calc(100vh-100px)] overflow-hidden">
        {/* Sidebar (small width on small screens) */}
        <div className="w-20 sm:w-64 border-r border-gray-300">
          <UserLayout />
        </div>

        {/* Main content */}
        <div className="flex-1 px-2 sm:px-4 py-4 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
