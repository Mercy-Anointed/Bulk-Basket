import { Link, NavLink, Outlet } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";

const SellerLayout = () => {
    const {setIsSeller} = useAppContext()

    
    const sidebarLinks = [
        { name: "Add Product", path: "/seller", icon: assets.add_icon },
        { name: "Product List", path: "/seller/product-list", icon: assets.product_list_icon },
        { name: "Orders", path: "/seller/orders", icon: assets.order_icon },
    ];

    const logout = async() => {
        setIsSeller(false)
    }
    return (
        <>
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300
             py-3 bg-white ">
                <Link to='/'>
                    <img className="cursor-pointer w-34 md:w-38" src={assets.logo} alt="logo" />
                </Link>
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! Admin</p>
                    <button onClick={logout} className='border rounded-full text-sm px-4 py-1'>Logout</button>
                </div>
            </div>
            <div className="flex">
            <div className="md:w-64 w-16 border-r h-[95vh] text-base border-gray-300 pt-4 flex flex-col">
                {sidebarLinks.map((item) => (
                    <NavLink to={item.path} key={item.name} end={item.path === "/seller"}
                        className={({isActive}) => `flex items-center py-3 px-4 gap-3 
                            ${isActive ? "border-r-4 md:border-r-[6px] bg-primary/10 border-primary text-primary"
                                : "hover:bg-gray-100/90 border-white text-gray-700"
                            }`
                        }
                    >
                        <img src={item.icon} alt="" className="w-7 h-7" />
                        <p className="md:block hidden text-center">{item.name}</p>
                    </NavLink>
                ))}
            </div>
            <Outlet/>

            </div>
        </>
    );
};
export default SellerLayout

 <Route path='/seller' element={isSeller ? <SellerLayout/> : <SellerLogin/>}>
        <Route index element={isSeller ? <AddProduct/> : null}/>
        <Route path='product-list' element={<ProductList/>}/>
        <Route path='orders' element={<Orders/>}/>
      </Route>


// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import { FaUser, FaShoppingCart, FaHistory, FaSignOutAlt } from 'react-icons/fa';

import UserProfile from '../components/UserProfile'
import OrderHistory from '../components/OrderHistory'
import ShoppingCart from '../components/ShoppingCart'
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <UserProfile />;
      case 'orders':
        return <OrderHistory />;
      case 'cart':
        return <ShoppingCart />;
      case 'logout':
        // Handle logout logic (clear localStorage, navigate to login, etc)
        localStorage.clear();
        window.location.href = '/login';
        return;
      default:
        return <UserProfile />;
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-primary text-white p-5">
        <h2 className="text-2xl font-bold mb-6">My Account</h2>
        <ul className="space-y-4">
          <li
            className={`cursor-pointer flex items-center gap-2 ${activeTab === 'profile' && 'font-bold'}`}
            onClick={() => setActiveTab('profile')}
          >
            <FaUser /> Profile
          </li>
          <li
            className={`cursor-pointer flex items-center gap-2 ${activeTab === 'orders' && 'font-bold'}`}
            onClick={() => setActiveTab('orders')}
          >
            <FaHistory /> Order History
          </li>
          <li
            className={`cursor-pointer flex items-center gap-2 ${activeTab === 'cart' && 'font-bold'}`}
            onClick={() => setActiveTab('cart')}
          >
            <FaShoppingCart /> Shopping Cart
          </li>
          <li
            className="cursor-pointer flex items-center gap-2 text-red-200 hover:text-red-500"
            onClick={() => setActiveTab('logout')}
          >
            <FaSignOutAlt /> Logout
          </li>
        </ul>
      </div>

      <div className="flex-1 p-6 bg-gray-50">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
