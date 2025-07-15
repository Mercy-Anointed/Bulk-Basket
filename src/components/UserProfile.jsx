import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { AiOutlineMail, AiOutlineEdit, AiOutlineCalendar } from 'react-icons/ai';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';

const UserProfile = () => {
  const navigate = useNavigate();
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const { user, wishlist, products } = useAppContext();
  const [visibleDetails, setVisibleDetails] = useState({});
  const [showAllFavorites, setShowAllFavorites] = useState(false);

  const toggleDetails = (index) => {
    setVisibleDetails((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const totalOrders = orders.length;
  const totalSpent = orders.reduce((sum, order) => sum + Number(order.total || 0), 0);

  const favoriteProducts = wishlist
    .map((id) => products.find((p) => p._id === id))
    .filter(Boolean);

  const displayedFavorites = showAllFavorites ? favoriteProducts : favoriteProducts.slice(0, 3);

  if (!user) {
    return <p className="text-gray-500 text-center mt-10">No user is logged in.</p>;
  }

  return (
    <div className="p-4 sm:p-6 md:p-8">
      {/* Profile Card */}
      <div className="max-w-4xl mx-auto border border-gray-200 p-5 sm:p-6 rounded shadow-md bg-white">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-4">
          <img
            src={
              user?.photoURL
                ? user.photoURL
                : user?.name
                  ? `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random`
                  : 'https://via.placeholder.com/100'
            }
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border shadow"
          />
          <div className="flex-1 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-lg font-bold">{user.name || 'User Name'}</p>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <AiOutlineMail className="text-black" />
                    <span>{user.email || 'No email'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaPhoneAlt className="text-black" />
                    <span>{user.phone || 'No phone number'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-black" />
                    <span>{user.location || 'No location added'}</span>
                  </div>
                </div>
              </div>
              <button
                className="flex items-center gap-2 bg-primary text-white text-sm px-4 py-2 rounded-md hover:bg-primary/90 transition"
                onClick={() => navigate('/account/settings')}
              >
                <AiOutlineEdit />
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-4xl mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="border border-gray-300 p-4 shadow rounded flex items-center justify-between">
          <div>
            <h3 className="text-gray-500 text-xs sm:text-sm mb-1">Total Orders</h3>
            <p className="text-xl sm:text-2xl font-semibold text-gray-800">{totalOrders}</p>
          </div>
          <FiShoppingBag className="text-2xl sm:text-3xl text-primary" />
        </div>

        <div className="border border-gray-300 p-4 shadow rounded flex items-center justify-between">
          <div>
            <h3 className="text-gray-500 text-xs sm:text-sm mb-1">Total Spent</h3>
            <p className="text-xl sm:text-2xl font-semibold text-gray-800">₦{totalSpent.toLocaleString()}</p>
          </div>
          <AiOutlineCalendar className="text-2xl sm:text-3xl text-primary" />
        </div>
      </div>

      {/* Favorite Products */}
      <div className="max-w-6xl mx-auto mt-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Favorite Products</h2>
          {favoriteProducts.length > 3 && (
            <button
              onClick={() => setShowAllFavorites(!showAllFavorites)}
              className="text-primary text-sm hover:underline"
            >
              {showAllFavorites ? 'Hide' : 'View All'}
            </button>
          )}
        </div>

        {favoriteProducts.length === 0 ? (
          <p className="text-gray-500 text-center">You have no favorite products yet.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {displayedFavorites.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* Order History */}
      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-xl font-semibold mb-6">Recent Order History</h2>

        {orders.length === 0 ? (
          <p className="text-gray-500 text-center">You have no orders yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <div className="grid min-w-[600px] grid-cols-5 gap-4 text-center text-xs sm:text-sm font-medium text-gray-700 border-b border-gray-200 px-4 py-2">
              <div className="truncate">Order ID</div>
              <div className="truncate">Date</div>
              <div className="truncate">Total</div>
              <div className="truncate">Status</div>
              <div className="truncate">Items</div>
            </div>

            <div className="divide-y divide-gray-200 min-w-[600px]">
              {orders.map((order, index) => (
                <div key={index} className="px-4 py-3 grid grid-cols-5 gap-4 text-center text-xs sm:text-sm text-gray-600">
                  <div className="truncate">{order.id}</div>
                  <div className="truncate">{order.date}</div>
                  <div className="truncate">₦{order.total}</div>
                  <div className="truncate">{order.status || 'Completed'}</div>
                  <div className="text-primary underline cursor-pointer text-left sm:text-center">
                    <span onClick={() => toggleDetails(index)}>
                      {visibleDetails[index] ? 'Hide Details' : 'View Details'}
                    </span>
                    {visibleDetails[index] && (
                      <ul className="list-disc list-inside mt-2 text-left text-gray-700">
                        {order.products.map((item, idx) => (
                          <li key={idx}>
                            {item.name} x {item.quantity}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
