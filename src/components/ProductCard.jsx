
/* import { useAppContext } from '../context/AppContext';
import { assets} from '../assets/assets';

const ProductCard = ({product}) => {
    const {navigate, addToCart, removeFromCart, cartItems } =  useAppContext();

    return product && (
        <div onClick={() => 
          {console.log("Navigating to", `/products/${product.category.toLowerCase()}/${product._id}`);
            navigate(`/products/${product.category.toLowerCase()}/${product._id}`)}}
        className="group border border-gray-500/20 rounded-md md:px-4 px-3 py-5 bg-white min-w-59 max-w-90 w-full">
          <div className='flex items-center justify-center px-2 mb-4'>
              <img
                src={product.image}
                alt="{product.name}"
                className='group-hover:scale-105 transition w-auto h-[140px] object-contain mx-auto'
              />
            </div>
           */
            {/* Heart Icon */}
            {/* <div className='absolute top-2 right-2 z-20 bg-white rounded-full border border-gray-200 py-2 px-2 shadow'>
              <img src={assets.heart} alt="favorite" />
            </div> */}
          
            {/* Product Info + Cart Button */}
           /*  <div className='flex flex-row justify-between items-center w-full gap-4 mt-6'> */
          
              {/* Info */}
             {/*  <div className='text-gray-500/60 text-sm w-[60%]'>
                <p className='text-gray-700 font-medium text-base truncate w-full'>{product.name}</p>
                <p className='text-gray-600 font-medium'>N{product.amount}</p>
                <div className='flex items-center gap-0.5 mt-1'>
                  {Array(5).fill('').map((_, i) => (
                    <img key={i} src={i < 4 ? assets.star_full : assets.star_dull} alt="star" className='w-4 h-4' />
                  ))}
                </div>
              </div>
           */}
              {/* Add to Cart / Quantity Control */}
             {/*  <div onClick={(e) => e.stopPropagation()} className='flex-shrink-0'>
                {!cartItems[product._id] ? (
                  <button
                    className='flex items-center gap-1.5 bg-primary border border-primary text-white py-2 px-3 rounded-full text-sm'
                    onClick={() => addToCart(product._id)}
                  >
                    <img src={assets.basket_bag} alt="cart" className='w-4 h-4' />
                    Add to cart
                  </button>
                ) : (
                  <div className='flex bg-primary rounded-full text-white items-center justify-center gap-2 w-[88px] h-[34px] select-none'>
                    <button className='px-2' onClick={() => {removeFromCart(product._id)}}>-</button>
                    <span>{cartItems[product._id]}</span>
                    <button className='px-2' onClick={() => {addToCart(product._id)}}>+</button>
                  </div>
                )}
              </div>
          
            </div>
          </div>           
        
    );
};

export default ProductCard; */}
import { useAppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const {
    navigate,
    addToCart,
    removeFromCart,
    cartItems,
    wishlist,
    addToWishlist,
    removeFromWishlist
  } = useAppContext();

  const isInWishlist = wishlist.includes(product._id);

  return product && (
    <div
      onClick={() =>
        navigate(`/products/${product.category.toLowerCase()}/${product._id}`)
      }
      className="relative group border border-gray-200 rounded-md px-2 py-3 sm:px-3 sm:py-4 md:px-4 md:py-5 
      bg-white w-full hover:shadow-md transition text-xs sm:text-sm md:text-base"
    >
      {/* Wishlist Icon */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          isInWishlist
            ? removeFromWishlist(product._id)
            : addToWishlist(product._id);
        }}
        className="absolute top-2 right-2 text-red-500 text-lg cursor-pointer z-20"
      >
        {isInWishlist ? <FaHeart /> : <FaRegHeart />}
      </div>

      {/* Product Image */}
      <div className="flex items-center justify-center mb-3 h-[100px] sm:h-[120px] md:h-[140px]">
        <img
          src={product.image}
          alt={product.name}
          className="group-hover:scale-105 transition w-auto h-full object-contain"
        />
      </div>

      {/* Info + Button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 sm:gap-3 mt-3 sm:mt-4">
        {/* Left side: name + price + stars */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <p className="text-gray-800 font-medium text-[12px] sm:text-base truncate flex-1 mr-2">
              {product.name}
            </p>

            {/* Add button on small screens inline with name */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="block md:hidden flex-shrink-0"
            >
              {!cartItems[product._id] ? (
                <button
                  onClick={() => addToCart(product._id)}
                  className="flex items-center justify-center gap-1.5 bg-primary border border-primary text-white py-1 px-3 rounded-full text-[11px] hover:bg-green-700 transition whitespace-nowrap"
                >
                  <img
                    src={assets.basket_bag}
                    alt="cart"
                    className="w-3 h-3"
                  />
                  Add
                </button>
              ) : (
                <div className="flex items-center justify-between bg-primary rounded-full text-white gap-2 px-2 h-[30px] select-none text-[11px]">
                  <button onClick={() => removeFromCart(product._id)}>-</button>
                  <span>{cartItems[product._id]}</span>
                  <button onClick={() => addToCart(product._id)}>+</button>
                </div>
              )}
            </div>
          </div>

          <p className="text-gray-700 font-semibold mt-1 sm:mt-2">
            N{product.amount}
          </p>

          <div className="flex items-center gap-0.5 mt-1">
            {Array(5).fill('').map((_, i) => (
              <img
                key={i}
                src={i < 4 ? assets.star_full : assets.star_dull}
                alt="star"
                className="w-3 h-3 sm:w-4 sm:h-4"
              />
            ))}
          </div>
        </div>

        {/* Add button on md+ screens */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="hidden md:block w-auto"
        >
          {!cartItems[product._id] ? (
            <button
              onClick={() => addToCart(product._id)}
              className="flex items-center justify-center gap-1.5 bg-primary border border-primary text-white py-1.5 px-3 sm:py-2 sm:px-4 rounded-full text-[11px] sm:text-sm hover:bg-green-700 transition whitespace-nowrap"
            >
              <img
                src={assets.basket_bag}
                alt="cart"
                className="w-3 h-3 sm:w-4 sm:h-4"
              />
              Add
            </button>
          ) : (
            <div className="flex items-center justify-between bg-primary rounded-full text-white gap-2 px-2 sm:px-3 h-[30px] sm:h-[36px] w-auto select-none text-[11px] sm:text-sm">
              <button onClick={() => removeFromCart(product._id)}>-</button>
              <span>{cartItems[product._id]}</span>
              <button onClick={() => addToCart(product._id)}>+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
