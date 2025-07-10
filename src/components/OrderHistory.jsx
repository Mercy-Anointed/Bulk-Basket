import React, { useState, useEffect } from 'react';
import { AiOutlineCalendar, AiOutlineSearch, AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const OrderHistory = () => {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const [visibleDetails, setVisibleDetails] = useState({});
  const [currentDate, setCurrentDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOrders, setFilteredOrders] = useState(orders);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  useEffect(() => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(today.toLocaleDateString(undefined, options));
  }, []);

  useEffect(() => {
    let updatedOrders = orders;

    if (searchTerm.trim() !== '') {
      updatedOrders = updatedOrders.filter(order =>
        order.products.some(product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    if (selectedStatus !== '') {
      updatedOrders = updatedOrders.filter(order =>
        (order.status || 'Completed').toLowerCase() === selectedStatus.toLowerCase()
      );
    }

    setFilteredOrders(updatedOrders);
  }, [searchTerm, selectedStatus, orders]);

  const toggleDetails = (index) => {
    setVisibleDetails((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="max-w-4xl p-4 mx-auto">
      {/* Top summary row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="flex items-center gap-4 border border-gray-300 rounded p-4 shadow">
          <AiOutlineCalendar className="text-2xl text-primary" />
          <div>
            <p className="text-xs text-gray-500">Today</p>
            <p className="text-sm font-medium text-gray-800">{currentDate}</p>
          </div>
        </div>

        <div className="flex items-center justify-between border border-gray-300 rounded p-4 shadow">
          <div>
            <p className="text-xs text-gray-500">Total Orders</p>
            <p className="text-sm font-medium text-gray-800">{orders.length}</p>
          </div>
        </div>

        <div className="flex items-center justify-between border border-gray-300 rounded p-4 shadow">
          <div>
            <p className="text-xs text-gray-500">Total Order Overtime</p>
            <p className="text-sm font-medium text-gray-800">
              ₦{orders.reduce((sum, order) => sum + Number(order.total || 0), 0).toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        {/* Search Input with Icon and Button */}
        <div className="relative w-full sm:w-[60%]">
          <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search ordered product..."
            className="w-full pl-10 pr-20 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring focus:border-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={() => setSearchTerm(searchTerm)}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-primary text-white px-3 py-[6px] rounded-md text-xs hover:bg-primary/90 transition"
          >
            Search
          </button>
        </div>

        {/* Filter Button with Dropdown */}
        <div className="relative w-full sm:w-auto">
          <button
            onClick={() => setShowFilterOptions(!showFilterOptions)}
            className="w-full sm:w-auto flex items-center justify-between sm:justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition"
          >
            <span>All Orders</span>
            {showFilterOptions ? <AiOutlineUp /> : <AiOutlineDown />}
          </button>

          {showFilterOptions && (
            <div className="absolute top-full mt-2 left-0 w-48 bg-white border border-gray-300 rounded-md shadow-md z-10">
              {['Delivered', 'On the Way', 'Processing', 'Received'].map((status) => (
                <button
                  key={status}
                  onClick={() => {
                    setSelectedStatus(status);
                    setShowFilterOptions(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {status}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <h2 className="text-xl font-semibold mb-6">Recent Order History</h2>

      {filteredOrders.length === 0 ? (
        <p className="text-gray-500">No matching orders found.</p>
      ) : (
        <div className="overflow-x-auto">
          <div className="min-w-[600px] grid grid-cols-5 gap-4 text-center text-xs md:text-sm font-medium text-gray-700 border-b border-gray-200 px-4 py-2">
            <div className="truncate">Order ID</div>
            <div className="truncate">Date</div>
            <div className="truncate">Total Amount</div>
            <div className="truncate">Order Status</div>
            <div className="truncate">Products</div>
          </div>

          <div className="divide-y divide-gray-200 min-w-[600px]">
            {filteredOrders.map((order, index) => (
              <div
                key={index}
                className="px-4 py-3 grid grid-cols-5 gap-4 text-center text-xs md:text-sm text-gray-600"
              >
                <div className="truncate">{order.id}</div>
                <div className="truncate">{order.date}</div>
                <div className="truncate">₦{order.total}</div>
                <div className="truncate">{order.status || 'Completed'}</div>
                <div className="text-left sm:text-center text-primary underline cursor-pointer">
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
  );
};

export default OrderHistory;
