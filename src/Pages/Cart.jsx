import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';
import DoubleCards from '../components/DoubleCards';
import { toast } from 'react-hot-toast';

const Cart = () => {
  const {
    user,
    setShowUserLogin,
    products,
    updateCartItems,
    getCartAmount,
    removeFromCart,
    getCartCount,
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
    if (!user) {
      toast.error("Please login to proceed to checkout.");
      setShowUserLogin(true); // Show login modal
      return;
    }

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
    <div className='flex flex-col'>
      <div className='relative'>
        <img src={assets.product_banner} alt="Banner" className='w-full object-cover max-h-[300px]' />
        <div className='absolute inset-0 flex items-center bg-black/50 px-4 lg:px-24'>
          <h2 className='text-white text-lg md:text-xl lg:text-2xl font-semibold'>Cart</h2>
        </div>
      </div>

      <div className='flex justify-center mt-10 px-4'>
        <h3 className='text-lg md:text-xl font-semibold'>My Shopping List</h3>
      </div>

      <div className="px-4 md:px-10 lg:px-24 md:mt-10">
        <div className="hidden md:grid grid-cols-[4fr_1fr_1fr_1fr_1fr] items-center gap-4 border-b border-gray-300 py-3 text-gray-500 text-sm md:text-base font-medium">
          <p className="text-left">Product</p>
          <p className="text-center">Price</p>
          <p className="text-center">Quantity</p>
          <p className="text-center">Subtotal</p>
          <p className="text-center">Action</p>
        </div>
      </div>

      <div className='flex flex-col gap-4 px-4 md:px-10 lg:px-24'>
        {cartArray.map((product, index) => (
          <div key={index} className='grid grid-cols-1 md:grid-cols-[4fr_1fr_1fr_1fr_1fr] items-center gap-4 border-b border-gray-300 py-3'>
            <div
              className='flex items-start gap-3 cursor-pointer'
              onClick={() => {
                navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
                scrollTo(0, 0);
              }}
            >
              <img src={product.image[0]} alt={product.name} className='w-14 h-14 object-cover rounded' />
              <div className='flex flex-col'>
                <p className='font-semibold text-gray-700 text-sm md:text-base'>{product.name}</p>
                <p className='text-sm text-gray-400 hidden sm:block'>{product.window}</p>
              </div>
            </div>

            <p className='text-sm md:text-base text-gray-700 text-center'>₦{product.amount}</p>

            <div className='inline-flex items-center justify-center gap-2 border border-gray-300 shadow-sm rounded-full px-2 py-1'>
              <button
                className='w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-gray-700'
                onClick={() => removeFromCart(product._id)}
              >
                -
              </button>
              <span className='text-gray-700 text-sm min-w-[20px] text-center'>{cartItems[product._id]}</span>
              <button
                className='w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-gray-700'
                onClick={() => addToCart(product._id)}
              >
                +
              </button>
            </div>

            <p className='text-sm md:text-base text-center text-gray-700'>₦{product.amount * product.quantity}</p>

            <div className='flex justify-center'>
              <button
                className='text-gray-700 text-xs md:text-sm border border-primary px-6 py-2 rounded-full'
                onClick={() => removeProductCompletely(product._id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='flex flex-col gap-4 px-4 md:px-10 lg:px-24 md:mt-15'>
        <h3 className='text-base text-gray-700'>Cart Total</h3>
        <div className='md:mb-10'>
          <div className='grid grid-cols-1 md:grid-cols-[4fr_1fr]  text-gray-700 items-center text-sm gap-4 border-b border-gray-300 py-3'>
            <span>Subtotal</span> <span>₦{getCartAmount()}</span>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-[4fr_1fr] text-sm text-gray-700 items-center gap-4 border-b border-gray-300 py-3'>
            <span>Shipping</span> <span>₦1500</span>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-[4fr_1fr]   text-gray-700 items-center gap-4 py-3'>
            <span className='md:text-2xl'>Total</span> <span>₦{getCartAmount() + getCartAmount() + 1500}</span>
          </div>
        </div>

            <div className='group flex flex-row justify-between'>
        <button
          onClick={() => navigate("/products")}
          className='text-primary border border-gray-300 rounded-full hover:bg-primary hover:text-gray-700 px-3 md:py-2 md:px-25'
        >
          Continue Shopping
        </button>
        <button
          onClick={handleCheckout}
          className='bg-primary text-white rounded-full px-3 md:py-2 md:px-25'
        >
          Proceed to Checkout
        </button>
      </div>
      </div>

      <div>
        <DoubleCards />
      </div>
    </div>
  ) : null;
};

export default Cart;
