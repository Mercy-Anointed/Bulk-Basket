import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { toast } from 'react-hot-toast';

const Wishlist = () => {
  const {
    products,
    wishlist,
    removeFromWishlist,
    addToCart,
    cartItems,
    navigate,
  } = useAppContext();

  const [wishlistItems, setWishlistItems] = useState([]);

  const getWishlistItems = () => {
    const items = wishlist
      .map((id) => products.find((product) => product._id === id))
      .filter(Boolean);
    setWishlistItems(items);
  };

  useEffect(() => {
    if (products.length > 0 && wishlist.length > 0) {
      getWishlistItems();
    }
  }, [products, wishlist]);

  const handleAddToCart = (productId) => {
    if (cartItems[productId]) {
      toast.error("Already in cart");
    } else {
      addToCart(productId);
    }
  };

  return (
    <div className='flex flex-col px-4 md:px-10 lg:px-24 py-10'>
      <h2 className='text-xl md:text-2xl font-semibold mb-6'>My Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <p className='text-gray-600'>Your wishlist is empty.</p>
      ) : (
        <div className="w-full overflow-x-auto">
          {/* Table Head */}
          <div className="grid grid-cols-[3fr_1fr_1fr_auto] gap-4 text-gray-500 text-sm border-b pb-2 font-semibold">
            <p>Product</p>
            <p className="text-center">Price</p>
            <p className="text-center">Stock Status</p>
            <p className="text-center">Stock Status</p>
            <p className="text-center">Stock Status</p>
            <span></span>
          </div>

          {/* Wishlist Items */}
          <div className="flex flex-col gap-4 mt-4">
            {wishlistItems.map((product) => (
              <div
                key={product._id}
                className="grid grid-cols-[3fr_1fr_1fr_auto] gap-4 items-center border-b pb-4"
              >
                {/* Product */}
                <div
                  className="flex gap-3 items-center cursor-pointer"
                  onClick={() =>
                    navigate(`/products/${product.category.toLowerCase()}/${product._id}`)
                  }
                >
                  <img
                    src={product.image[0] || product.image}
                    alt={product.name}
                    className="w-14 h-14 object-cover rounded"
                  />
                  <div className="flex flex-col">
                    <p className="text-gray-800 font-medium text-sm md:text-base">{product.name}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-center h-full">
                  <p className="text-sm text-gray-800">₦{product.amount}</p>
                </div>

                {/* Stock Status */}
                <div className="flex items-center justify-center h-full">
                  <p className="text-sm text-green-600">In Stock</p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-end gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product._id);
                    }}
                    className="bg-primary text-white px-4 py-1.5 rounded-full text-sm hover:bg-green-700"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFromWishlist(product._id);
                    }}
                    className="text-primary border border-primary px-4 py-1.5 rounded-full text-sm hover:bg-red-50"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
