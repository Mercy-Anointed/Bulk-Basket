import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { toast } from 'react-hot-toast';

const ShoppingCart = () => {
  const {
    products,
    updateCartItems,
    getCartAmount,
    removeFromCart,
    addToCart,
    cartItems,
    setCartItems,
    navigate
  } = useAppContext();

  const [cartArray, setCartArray] = useState([]);

  const getCart = () => {
    let tempArray = [];
    for (const key in cartItems) {
      const product = products.find((item) => item._id === key);
      if (product) {
        product.quantity = cartItems[key];
        tempArray.push(product);
      }
    }
    setCartArray(tempArray);
  };

  useEffect(() => {
    if (products.length > 0 && cartItems) {
      getCart();
    }
  }, [products, cartItems]);

  const handleCheckout = () => {
    const totalQuantity = Object.values(cartItems).reduce((acc, qty) => acc + qty, 0);
    if (totalQuantity < 5) {
      toast.error("You must add at least 5 products before proceeding to checkout.");
      return;
    }
    navigate("/checkout");
  };

  const removeProductCompletely = (itemId) => {
    const newCart = { ...cartItems };
    delete newCart[itemId];
    setCartItems(newCart);
    toast.success("Product removed from cart.");
  };

  return products.length > 0 && cartItems ? (
    <div className='flex flex-col w-full'>

      {/* Table Header for Desktop */}
      <div className="hidden md:grid grid-cols-[4fr_1fr_1fr_1fr_1fr] items-center gap-4 border-b border-gray-300 py-3 px-4 md:px-10 lg:px-24 text-gray-500 text-sm md:text-base font-medium mt-10">
        <p className="text-left">Product</p>
        <p className="text-center">Price</p>
        <p className="text-center">Quantity</p>
        <p className="text-center">Subtotal</p>
        <p className="text-center">Action</p>
      </div>

      {/* Cart Items */}
      <div className='flex flex-col gap-4 px-4 md:px-10 lg:px-24'>
        {cartArray.map((product, index) => (
          <div
            key={index}
            className='flex flex-col md:grid md:grid-cols-[4fr_1fr_1fr_1fr_1fr] gap-4 border-b border-gray-300 py-4'
          >
            {/* Product Info */}
            <div
              className='flex items-start gap-4 cursor-pointer'
              onClick={() => {
                navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
                scrollTo(0, 0);
              }}
            >
              <img
                src={product.image[0]}
                alt={product.name}
                className='w-16 h-16 object-cover rounded-md'
              />
              <div className='flex flex-col justify-center'>
                <p className='font-semibold text-gray-800 text-sm sm:text-base'>{product.name}</p>
                <p className='text-xs text-gray-500 hidden sm:block'>{product.window}</p>
              </div>
            </div>

            {/* Price */}
            <div className='md:flex hidden items-center justify-center text-gray-700 text-sm md:text-base'>
              ₦{product.amount}
            </div>

            {/* Quantity Control */}
            <div className='flex items-center justify-center'>
              <div className='flex items-center border border-gray-300 rounded-full px-2 py-1 gap-2'>
                <button
                  className='w-7 h-7 border border-gray-300 rounded-full text-gray-700 text-sm'
                  onClick={() => removeFromCart(product._id)}
                >
                  -
                </button>
                <span className='text-sm text-gray-700 min-w-[20px] text-center'>
                  {cartItems[product._id]}
                </span>
                <button
                  className='w-7 h-7 border border-gray-300 rounded-full text-gray-700 text-sm'
                  onClick={() => addToCart(product._id)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Subtotal */}
            <div className='md:flex hidden items-center justify-center text-gray-700 text-sm md:text-base'>
              ₦{product.amount * product.quantity}
            </div>

            {/* Remove */}
            <div className='flex justify-center items-center'>
              <button
                className='text-gray-700 text-xs md:text-sm border border-primary px-4 py-1 rounded-full hover:bg-primary hover:text-white transition'
                onClick={() => removeProductCompletely(product._id)}
              >
                Remove
              </button>
            </div>

            {/* Mobile Only: Price & Subtotal */}
            <div className='md:hidden flex flex-col text-sm text-gray-600 mt-2 space-y-1'>
              <p><strong>Price:</strong> ₦{product.amount}</p>
              <p><strong>Subtotal:</strong> ₦{product.amount * product.quantity}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className='flex flex-col gap-4 px-4 md:px-10 lg:px-24 mt-6'>
        <h3 className='text-base font-semibold text-gray-700'>Cart Total</h3>
        <div className='space-y-3'>
          <div className='flex justify-between border-b border-gray-300 py-2 text-sm text-gray-700'>
            <span>Subtotal</span> <span>₦{getCartAmount()}</span>
          </div>
          <div className='flex justify-between border-b border-gray-300 py-2 text-sm text-gray-700'>
            <span>Shipping</span> <span>₦1500</span>
          </div>
          <div className='flex justify-between py-2 text-gray-700 font-medium'>
            <span className='text-lg'>Total</span> <span>₦{getCartAmount() * 2 + 1500}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className='flex flex-col sm:flex-row justify-between gap-4 mt-4'>
          <button
            onClick={() => navigate("/products")}
            className='text-primary border border-gray-300 rounded-full px-4 py-2 hover:bg-primary hover:text-white transition'
          >
            Continue Shopping
          </button>
          <button
            onClick={handleCheckout}
            className='bg-primary text-white rounded-full px-4 py-2 hover:bg-primary/90 transition'
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

    </div>
  ) : null;
};

export default ShoppingCart;
