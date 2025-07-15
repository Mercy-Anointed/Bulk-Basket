import React, { useState, useEffect } from 'react';
import {
  AiOutlineCalendar,
  AiOutlineSearch,
  AiOutlineDown,
  AiOutlineUp,
  AiOutlineArrowLeft,
} from 'react-icons/ai';

const OrderHistory = () => {
  const [orders] = useState(() => JSON.parse(localStorage.getItem('orders')) || []);
  const [visibleDetails, setVisibleDetails] = useState({});
  const [currentDate, setCurrentDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOrders, setFilteredOrders] = useState(orders);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(today.toLocaleDateString(undefined, options));
  }, []);

  useEffect(() => {
    let updatedOrders = [...orders];

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

  if (page === 2 && selectedOrder) {
    const subtotal = selectedOrder.products.reduce(
      (acc, p) => acc + Number(p.price || p.amount || 0) * Number(p.quantity || 1),
      0
    );
    const shipping = selectedOrder.shipping || 1500;
    const total = subtotal + shipping;

    return (
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="sticky top-0 z-20 bg-gray-100 border-b border-gray-200 flex items-center justify-between px-4 py-3 shadow-sm">
          <button
            onClick={() => {
              setPage(1);
              setSelectedOrder(null);
            }}
            className="flex items-center gap-2 text-sm px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 transition"
          >
            <AiOutlineArrowLeft className="text-base" /> Back
          </button>
          <h2 className="text-lg font-semibold text-gray-800">Order Details</h2>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-300 rounded-md p-4 bg-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Billing Information</h3>
            <div className="text-sm text-gray-700 space-y-1">
              <p><strong>Name:</strong> {selectedOrder.billingInfo?.fullName || 'N/A'}</p>
              <p><strong>Email:</strong> {selectedOrder.billingInfo?.email || 'N/A'}</p>
              <p><strong>Phone:</strong> {selectedOrder.billingInfo?.phone || 'N/A'}</p>
              <p><strong>Address:</strong> {selectedOrder.billingInfo?.address}, {selectedOrder.billingInfo?.city}, {selectedOrder.billingInfo?.state}, {selectedOrder.billingInfo?.country}</p>
            </div>
          </div>

          <div className="border border-gray-300 rounded-md p-4 bg-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>
            <div className="text-sm text-gray-700 space-y-1">
              <p><strong>Name:</strong> {selectedOrder.shippingInfo?.fullName || 'N/A'}</p>
              <p><strong>Phone:</strong> {selectedOrder.shippingInfo?.phone || 'N/A'}</p>
              <p><strong>Address:</strong> {selectedOrder.shippingInfo?.address}, {selectedOrder.shippingInfo?.city}, {selectedOrder.shippingInfo?.state}, {selectedOrder.shippingInfo?.country}</p>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto border border-gray-200 rounded-md mt-6">
          <table className="w-full text-sm text-left text-gray-700 border-collapse">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs border-b">
              <tr>
                <th className="px-4 py-3">Product</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Quantity</th>
                <th className="px-4 py-3">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {selectedOrder.products.map((product, idx) => (
                <tr key={idx} className="border-b">
                  <td className="px-4 py-3 flex items-center gap-3">
                    <img
                      src={product.image?.[0] || 'https://via.placeholder.com/40'}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <span>{product.name}</span>
                  </td>
                  <td className="px-4 py-3">₦{Number(product.price || product.amount || 0).toLocaleString()}</td>
                  <td className="px-4 py-3">{product.quantity}</td>
                  <td className="px-4 py-3">₦{(Number(product.price || 0) * Number(product.quantity)).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 border border-gray-300 rounded-md p-4">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="grid grid-cols-1 sm:grid-cols-[3fr_1fr] text-sm text-gray-700 gap-4 border-b border-gray-300 py-2">
            <span>Order ID</span>
            <span>{selectedOrder.id}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[3fr_1fr] text-sm text-gray-700 gap-4 border-b border-gray-300 py-2">
            <span>Payment Method</span>
            <span className="capitalize">{selectedOrder.paymentMethod || 'Not specified'}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[3fr_1fr] text-sm text-gray-700 gap-4 border-b border-gray-300 py-2">
            <span>Subtotal</span>
            <span>₦{subtotal.toLocaleString()}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[3fr_1fr] text-sm text-gray-700 gap-4 border-b border-gray-300 py-2">
            <span>Shipping Fee</span>
            <span>₦{shipping.toLocaleString()}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[3fr_1fr] text-sm text-gray-700 gap-4 py-2">
            <span className="font-semibold">Total</span>
            <span className="font-semibold">₦{total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl p-4 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="flex items-center gap-4 border border-gray-300 rounded p-4 shadow">
          <AiOutlineCalendar className="text-2xl text-primary" />
          <div>
            <p className="text-xs text-gray-500">Today</p>
            <p className="text-sm font-medium text-gray-800">{currentDate}</p>
          </div>
        </div>
        <div className="border border-gray-300 rounded p-4 shadow">
          <p className="text-xs text-gray-500">Total Orders</p>
          <p className="text-sm font-medium text-gray-800">{orders.length}</p>
        </div>
        <div className="border border-gray-300 rounded p-4 shadow">
          <p className="text-xs text-gray-500">Total Order Overtime</p>
          <p className="text-sm font-medium text-gray-800">
            ₦{orders.reduce((sum, order) => sum + Number(order.total || 0), 0).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        {/* Updated Search Bar with Button */}
        <div className="relative w-full sm:w-[60%] flex">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
            <AiOutlineSearch />
          </div>
          <input
            type="text"
            placeholder="Search ordered product..."
            className="w-full pl-10 pr-24 py-2  border border-gray-300 rounded-l-md text-sm focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={() => {}} // Optional: if you want to use a search function
            className="bg-primary text-white px-4 py-2 rounded-r-md text-sm hover:bg-primary/90"
          >
            Search
          </button>
        </div>

        {/* Filter Dropdown */}
        <div className="relative w-full sm:w-auto">
          <button
            onClick={() => setShowFilterOptions(!showFilterOptions)}
            className="w-full sm:w-auto flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100"
          >
            <span>All Orders</span>
            {showFilterOptions ? <AiOutlineUp /> : <AiOutlineDown />}
          </button>

          {showFilterOptions && (
            <div className="absolute top-full mt-2 left-0 w-48 bg-white border border-gray-300 rounded-md shadow z-10">
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

      {/* Order List */}
      <h2 className="text-xl font-semibold mb-4">Recent Order History</h2>
      {filteredOrders.length === 0 ? (
        <p className="text-gray-500">No matching orders found.</p>
      ) : (
        <div className="overflow-x-auto">
          <div className="min-w-[600px] grid grid-cols-5 gap-4 text-center text-xs md:text-sm font-medium text-gray-700 border-b border-gray-200 px-4 py-2">
            <div>Order ID</div>
            <div>Date</div>
            <div>Total</div>
            <div>Status</div>
            <div>Order</div>
          </div>

          <div className="divide-y divide-gray-200 min-w-[600px]">
            {filteredOrders.map((order, index) => (
              <div
                key={index}
                className="px-4 py-3 grid grid-cols-5 gap-4 text-center text-xs md:text-sm text-gray-600"
              >
                <div>{order.id}</div>
                <div>{order.date}</div>
                <div>₦{order.total}</div>
                <div>{order.status || 'Completed'}</div>
                <div className="text-primary underline cursor-pointer">
                  <span
                    onClick={() => {
                      setSelectedOrder(order);
                      setPage(2);
                    }}
                  >
                    View Details
                  </span>
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
