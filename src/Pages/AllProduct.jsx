import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const AllProduct = () => {
    const {searchQuery, products} = useAppContext();
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        if (searchQuery.length > 0){
            setFilteredProducts(products.filter(product => 
                product.name.toLowerCase().includes(searchQuery.toLowerCase())))
        } else {
            setFilteredProducts(products)
        }
}, [searchQuery,products])

    return (

          
      <div>

        <div className='grid grid-cols-2 md:grid-cols-4  items-center md:justify-center md:px-18 mt-9 md:gap-8  px-12 justify-between  gap-5'>
            {filteredProducts.filter((product) => product.inStock).map((product, index)=> (
                <ProductCard key={index} product={product}/>
            ))}
        </div>



                   
        </div>

     
    );
};

export default AllProduct;