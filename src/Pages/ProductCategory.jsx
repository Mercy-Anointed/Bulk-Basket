import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { assets, categories } from '../assets/assets';
import ProductCard from '../components/ProductCard';
import { useAppContext } from '../context/AppContext';
import CategoryBanner from '../components/CategoryBanner';


const ProductCategory = () => {
    const {products} = useAppContext();
    const {category: routeCategory} = useParams();

    const [selectedCategory, setSelectedCategory] = useState(routeCategory || '')
    const [availability, setAvailability] = useState('')
    /* const [minPrice, setMinPrice] = useState(0);
    const maxPrice = 20000; */

    const [sortOrder, setSortOrder] = useState('latest')  // New sort order state
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [rating, setRating] = useState(0);

    useEffect(()=> {
        let productsCopy = products.slice()

        // Category filter
        if (selectedCategory){
            productsCopy = productsCopy.filter((product) => product.category.toLowerCase().trim()
             === selectedCategory.toLowerCase().trim()
        );
        }

        if (availability !== '') {
            const isInStock = availability === 'true';
            productsCopy = productsCopy.filter((product) => product.inStock === isInStock)
        }
         // Price filter
    /*  productsCopy =productsCopy.filter((product) => product.amount >= minPrice); */


     // Rating filter
        if (rating > 0){
            productsCopy = productsCopy.filter((product) => Math.floor(product.rating) >= rating)
        }

      // Sorting logic
     if (sortOrder === 'low-high'){
        productsCopy.sort((a, b) => a.amount - b.amount)
     } else if (sortOrder === 'high-low'){
        productsCopy.sort((b, a) => b.amount - a.amount)
     } else if (sortOrder === 'top-rated') {
        productsCopy.sort((a, b) => b.rating - a.rating)
     }
     // Else, keep "latest" order as-is (default from backend)

     setFilteredProducts(productsCopy);
    },[selectedCategory, rating, sortOrder,/*  minPrice, */ availability, products])

    const searchCategory = categories.find(
    (item) => item.path.toLowerCase() === selectedCategory.toLowerCase()
  );


  return (
    <div className="mt-1 ">
        <div className='relative w-full mb-4'>
            <img src={assets.category_banner1} alt="" className='md:w-full' />
            <div className='absolute inset-0 pl-2 md:pl-8 flex items-center gap-1.5 '>
                <img src={assets.category_icon} alt="" />
              <p className='md:text-2xl font-bold'>Categories</p>
         
            </div>
        </div>

       <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6 md:px-8'>
          {/* Category Select */}
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}
                className='border border-gray-300 px-1 md:px-4 py-2 rounded-md  '>
                    <option value=""> All Categories</option>
                    {categories.map((cat, index) => (
                        <option key={index} value={cat.path.toLowerCase()}>
                            {cat.text}
                            </option>
                    ))}
            </select>

                     {/* Availability Select */}
            <select value={availability} onChange={(e)=> setAvailability(e.target.value)}
             className="border border-gray-300 px-1 md:px-4 py-2 rounded-md">
                <option value="">Availability</option>
                <option value="true">In Stock</option>
                <option value="false">Out of Stock</option>
            </select>

             {/* Price Slider */}
            {/*  <div className='flex flex-col'>
                <label className='text-sm mb-1'>Min Price: ₦{minPrice.toLocaleString}</label>
                <input 
                type="range" 
                min='0' 
                max={maxPrice}
                 step={100} 
                 value={minPrice} 
                onChange={(e)=> setMinPrice(Number(e.target.value))} 
                className='w-full accent-primary '/>
             </div> */}


            {/* Rating Select */}
            <select value={rating} onChange={(e) => setRating(Number(e.target.value))}  
            className="border border-gray-300 px-1 md:px-4 py-2 rounded-md">
                 <option value={0}>⭐ Filter by Rating</option>
                    <option value={5}>⭐⭐⭐⭐⭐</option>
                    <option value={4}>⭐⭐⭐⭐ & up</option>
                    <option value={3}>⭐⭐⭐ & up</option>
                    <option value={2}>⭐⭐ & up</option>
                    <option value={1}>⭐ & up</option>
            </select>

               {/* Sort Select */}
               <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}
               className="border border-gray-300 px-1 md:px-4 py-2 rounded-md">
                          <option value="latest">Sort by: Latest</option>
                          <option value="top rated">Sort by: top rated</option>
                        <option value="low-high">Price: Low to High</option>
                        <option value="high-low">Price: High to Low</option>
               </select>
       </div> 

        {/* Category Title */}
        {searchCategory && (
            <div className='flex flex-col items-start mb-4 px-4 md:px-8'>
                <p className='md:text-2xl  font-medium'>{searchCategory.text.toUpperCase()}</p>
                <div className='w-16 h-0.5  bg-primary rounded-full mt-1 '></div>
            </div>
        )}

        {filteredProducts.length > 0 ? (
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:px-8 px-4  gap-4'>
                {filteredProducts.map((product) => (
                      <ProductCard key={product._id} product={product} />
                ))}
            </div>
        ):(
            <div className="flex items-center justify-center h-[50vh]">
                <p className="md:text-xl text-base font-medium text-gray-600">
            No products found with these filters.
            </p>
            </div>
        )}
    
<div className='px-24'>
    <CategoryBanner/>
</div>
   
    </div>
  );
};

export default ProductCategory;
