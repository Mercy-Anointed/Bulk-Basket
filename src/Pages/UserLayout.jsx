import React from 'react';
import {
  FaTachometerAlt,
  FaHistory,
  FaShoppingCart,
  FaCog,
  FaSignOutAlt,
  FaHeart,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function UserLayout() {
  const { setUser, navigate, setShowUserLogin } = useAppContext();

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setShowUserLogin(true);
    navigate("/");
  };

  const sidebarLinks = [
    { name: "Dashboard", path: "/account/dashboard", icon: <FaTachometerAlt /> },
    { name: "Order History", path: "/account/order", icon: <FaHistory /> },
    { name: "Wishlist", path: "/account/wishlist", icon: <FaHeart /> }, // ✅ Added FaHeart here
    { name: "Shopping Cart", path: "/account/shop", icon: <FaShoppingCart /> },
    { name: "Settings", path: "/account/settings", icon: <FaCog /> },
  ];

  return (
    <div className="md:w-64 w-full border-r border-gray-300 pt-4 flex flex-col">
      {sidebarLinks.map((item) => (
        <NavLink
          to={item.path}
          key={item.name}
          className={({ isActive }) =>
            `flex items-center py-3 px-4 gap-3 
            ${isActive
              ? 'border-r-4 md:border-r-[6px] bg-primary/10 border-primary text-primary'
              : 'hover:bg-gray-100/90 text-gray-700'}`
          }
        >
          <span className="text-lg">{item.icon}</span>
          <p className="md:block hidden">{item.name}</p>
        </NavLink>
      ))}

      {/* Logout Button */}
      <button
        onClick={logout}
        className="flex items-center py-3 px-4 gap-3 hover:bg-gray-100/90 text-gray-700"
      >
        <span className="text-lg"><FaSignOutAlt /></span>
        <p className="md:block hidden">Logout</p>
      </button>
    </div>
  );
}
