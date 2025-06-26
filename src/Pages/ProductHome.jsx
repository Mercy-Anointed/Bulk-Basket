import React from 'react';
import AllProduct from './AllProduct';
import ProductBanner from '../components/ProductBanner';
import ProductFooter from '../components/ProductFooter';
import ProductFilter from '../components/ProductFilter';

const ProductHome = () => {
    return (
        <div>
             <ProductBanner/>
             <ProductFilter/>
            
            <ProductFooter/>
        </div>
    );
};

export default ProductHome;