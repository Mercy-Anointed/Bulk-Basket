 /* import React, {useEffect, useState} from 'react';
import { useAppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import ProductCard from '../components/ProductCard';
import StarRating from '../components/starRating';

const ProductDetails = () => {
   
    const {navigate, addToCart, products} = useAppContext()
    const {id} = useParams()
    const [relatedProducts, setRelatedProducts] = useState([])
    const [thumbnail, setThumbnail] = useState(null)
    const product = products.find((item) => item._id === id)
   

     const handleReviewSubmit = (review) => {
         // Later connect to backend
          console.log("New Review for:", product.name);
    console.log(review);
     }
    useEffect(() => {
          if (products.length > 0){
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => product.category === item.category)
            setRelatedProducts(productsCopy.slice(0,5))
    
          }
        }, [products, product.category])     


    useEffect(() => {
        setThumbnail(product.image[0] ? product.image[0] : null)
    }, [product])


    return product && (
        <div className=''>
            <div className='relative w-full'>
            <img src={assets.details_banner} alt="" className='w-full h-20 mt-0' />
            <div className='absolute inset-0 flex items-center font-medium px-5 '>
            <p>
                <Link to={"/"}>Home</Link> /
                <Link to={"/products"}>Products</Link> /
                <Link to={`/products/${product.category.toLowerCase()}`}>{product.category}</Link> /
                <span className=''>{product.name}</span>
            </p>
            </div>
            </div>

            <div className='flex flex-col md:flex-row gap-16 mt-4'>
                <div className='flex gap-3'>
                    <div className='flex flex-col gap-3'>
                        {product.image.map((image,index) => (
                            <div key={index} onClick={() => setThumbnail(image)} className='border max-w-24
                            border-gray-500/30 rounded overflow-hidden cursor-pointer'> 
                                <img src={thumbnail} alt={`Thumbnail ${index + 1}`} />
                            </div>
                        ))}
                    </div>

                    <div className='border border-gray-500/30 max-w-100 rounded overflow-hidden'>
                        <img src={thumbnail} alt="selectedProducts "/>
                    </div>
                </div>


                <div className='text-sm w-full md:w-1/2'>
                    <h1 className='text-3xl font-medium'>{product.name}</h1>
                    <div className='flex items-center gap-0.5 mt-1'>
                        {Array(5).fill('').map((_, i)=> (
                            <img src={i<4 ? assets.star_full: assets.star_dull} alt="" className='md:w-4 w-3.5'/>
                        ))}
                    <p className='text-base ml-2'>(4 reviews)</p>
                    </div>
                  
              

                <div className='mt-6'>
                    <p className='text-gray-500/70 line-through'>MPR: N{product.offerPrice}</p>
                    <p className='text-2xl font-medium'>MPR: N{product.amount} <span className='text-sm'>
                        <button  className='w-20 py-1.5 cursor-pointer rounded-full px-2 font-medium
                    bg-gray-100 text-[#EA4B4B] hover:bg-gray-200 transition'>{product.off}% off</button></span></p>
                    <span className="text-gray-500/70">(inclusive of all taxes)</span>
                </div> <br />
                <hr className='border-gray-300' />

                <p className='text-base font-medium mt-6'>Verified Supplier | Freshness Quaranteed</p>
                <div className='list-disc ml-4 text-gray-500/70'>
                  {product.description.map((desc,index) => (
              
                    <div key={index}>
                      <p> {desc}</p>  
                     <p>Category: {product.category}</p>  
                     <p>Tag: {product.category} Healthy {product.name} </p>
                    
                     </div>
                  ))}  
                </div>

                <div className='flex items-center mt-10 gap-4 text-base'>
                    <button onClick={() => addToCart(product._id)} className='w-full py-3.5 cursor-pointer font-medium
                    bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition'>Add to Cart</button>
                    <button onClick={() => {addToCart(product._id); navigate("/cart")}} 
                        className='w-full py-3.5 cursor-pointer font-medium
                    bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition'>Buy now</button>
                </div>

                  </div>
            </div>



            <div className='flex flex-col items-center mt-20'>
                <div className='flex flex-col items-center w-max'>
                    <p className='text-3xl font-medium'>Related Product</p>
                    <div className='w-20 h-0.5 bg-primary rounded-full mt-2'></div>
                </div>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 mt-6 w-full px-4'>
                {relatedProducts.filter((product) => product.inStock).map((product, index) => (
                    <ProductCard key={index} product={product}/>
                ))}
                <button onClick={() => {navigate("/products"); scrollTo(0,0)}} className='mx-auto cursor-pointer
                px-12 my-16 py-2.5 rounded border text-primary hover:bg-primary/10 transition'>See More</button>
            </div>
            <StarRating onSubmit={handleReviewSubmit}/>

            
        </div>
        
    );
};

export default ProductDetails; */

// ...imports and component setup remain unchanged
import { useAppContext } from './../context/AppContext';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import ProductCard from '../components/ProductCard';
import StarRating from '../components/starRating';
import { useState, useEffect } from 'react';

const ProductDetails = () => {
    const { navigate, addToCart, products, removeFromCart, cartItems } = useAppContext();
    const { id } = useParams();
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [thumbnail, setThumbnail] = useState(null);
    const product = products.find((item) => item._id === id);

    useEffect(() => {
        if (products.length > 0 && product) {
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => product.category === item.category);
            setRelatedProducts(productsCopy.slice(0, 5));
        }
    }, [products, product]);

    useEffect(() => {
        if (product && product.image && product.image.length > 0) {
            setThumbnail(product.image[0]);
        } else {
            setThumbnail(null);
        }
    }, [product]);

    const handleReviewSubmit = (review) => {
        console.log("New Review for:", product?.name);
        console.log(review);
    };

    const vendor = product?.vendor || {
        name: "Kelechi Ahmad",
        image: "https://i.ibb.co/0C2hz1R/vendor-img.png",
        videoThumbnail: "https://i.ibb.co/1ZT2Zgx/vendor-video-thumb.png",
        discount: "64%",
        tag: "100% Organic",
    };

    if (!product) {
        return (
            <div className="text-center mt-20">
                <p className="text-2xl font-semibold text-gray-600">Product not found</p>
                <button onClick={() => navigate('/products')} className="mt-4 px-4 py-2 bg-primary text-white rounded">
                    Back to Products
                </button>
            </div>
        );
    }

    return (
        <div className="w-full px-4 sm:px-4 md:px-8 lg:px-10 max-w-screen-xl mx-auto">
            <div className='flex flex-col md:flex-row gap-10 mt-4'>
                <div className='flex flex-col sm:flex-row gap-4 w-full md:w-1/2'>
                    <div className='flex sm:flex-col gap-3'>
                        {product.image.map((image, index) => (
                            <div key={index} onClick={() => setThumbnail(image)} className='border w-20 h-20 border-gray-500/30 rounded overflow-hidden cursor-pointer'>
                                <img src={image} alt={`Thumbnail ${index + 1}`} className='object-cover w-full h-full' />
                            </div>
                        ))}
                    </div>
                    <div className='border border-gray-500/30 rounded overflow-hidden w-full'>
                        <img src={thumbnail} alt="selectedProduct" className='object-contain w-full max-h-[400px]' />
                    </div>
                </div>

                <div className='w-full md:w-1/2 text-sm flex flex-col gap-4'>
                    <div className='bg-gray-100 shadow mb-5 rounded p-4'>
                        <h1 className='text-2xl md:text-3xl font-medium'>{product.name}</h1>

                        <div className='flex items-center gap-1 mt-2'>
                            {Array(5).fill('').map((_, i) => (
                                <img key={i} src={i < 4 ? assets.star_full : assets.star_dull} alt="" className='w-4 h-4' />
                            ))}
                            <p className='text-base ml-2'>(4 reviews)</p>
                        </div>

                        <div className='mt-6 flex flex-wrap items-center gap-4'>
                            <p className='text-gray-500/70 line-through'>₦{product.offerPrice}</p>
                            <p className='text-2xl font-medium text-primary'>₦{product.amount}</p>
                            <button className='w-fit py-1.5 px-3 cursor-pointer rounded-full font-medium bg-gray-100 text-[#EA4B4B] hover:bg-gray-200 transition'>
                                {product.off}% off
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 bg-gray-100 p-4 rounded-md shadow-sm">
                        <div className="flex items-center gap-3">
                            <img src={vendor.photo || vendor.image} alt={vendor.name} className="w-12 h-12 rounded-full object-cover" />
                            <div>
                                <p className="text-sm font-semibold">{vendor.name}</p>
                                <button className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-full text-gray-700 mt-1">
                                    Rate Vendor
                                </button>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600">
                            Verified Supplier | Freshness Guaranteed. You're buying from a trusted, approved vendor with a record of delivering high-quality foodstuff in bulk.
                        </p>
                        <div className="flex gap-4 mt-2 flex-wrap">
                            <div className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-medium">
                                {vendor.discount}
                            </div>
                            <div className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-medium">
                                {vendor.tag}
                            </div>
                        </div>
                    </div>

                    <div className='bg-gray-100 shadow rounded p-4'>
                        <div className='flex flex-col sm:flex-row items-center gap-4'>
                            <div className='flex items-center gap-2 border border-gray-300 shadow-sm rounded-full px-2 py-1'>
                                <button className='w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-gray-700' onClick={() => removeFromCart(product._id)}>-</button>
                                <span className='text-gray-700 text-sm min-w-[20px] text-center'>{cartItems[product._id]}</span>
                                <button className='w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-gray-700' onClick={() => addToCart(product._id)}>+</button>
                            </div>
                            <button onClick={() => { addToCart(product._id); navigate("/cart") }} className='w-full sm:w-auto py-3.5 px-6 font-medium bg-primary text-white rounded-full hover:bg-primary/100 transition'>
                                Add to Cart
                            </button>
                        </div>

                        <div className='list-disc ml-4 text-gray-500/70 mt-5'>
                            {product.description.map((index) => (
                                <div key={index}>
                                    <p className='text-black'>Category: <span className='text-gray-500'>{product.category}</span></p>
                                    <p className='text-black'>Tag: <span className='text-gray-500'>{product.category} healthy</span> <span className='text-black'>{product.name}</span></p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row md:gap-10 text-gray-500 mt-16'>
                <div className='w-full md:w-2/3'>
                    {product.description.map((desc, index) => (
                        <div key={index} className='mb-8'>
                            <h2 className='mb-5 text-black text-lg font-semibold'>Description</h2>
                            <p className='mb-10'>{desc}</p>
                            <div className='flex flex-col gap-8 mb-5'>
                                <span className='flex items-center gap-2'><img src={assets.checkbox} alt='' /> 100g of {product.category} provided</span>
                                <span className='flex items-center gap-2'><img src={assets.checkbox} alt='' /> naturally hydrated and chemically free</span>
                                <span className='flex items-center gap-2'><img src={assets.checkbox} alt='' /> perfect for bulk orders (restaurant, families and events)</span>
                                <span className='flex items-center gap-2'><img src={assets.checkbox} alt='' /> farm-fresh quality</span>
                            </div>
                            <p className='mt-2'>store in a cool dry place or refrigerate to maintain freshness</p>
                            <div className='mt-10'>
                                <h2 className='text-black mb-10 text-lg font-semibold'>Delivery information</h2>
                                <p className='flex items-center gap-2'>Delivery window: <span>{product.window}</span> <span>Express delivery after payment</span></p>
                                <p>Location of dispatch: <span>{product.location}</span></p>
                            </div>
                            <div className='mt-6'>
                                <h2 className='text-black text-lg font-semibold mb-10'>Additional information</h2>
                                <p>Category: {product.category}</p>
                                <p>Tags: {product.category}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='w-full md:w-1/3 flex flex-col gap-6'>
                    <div className="bg-gray-100 shadow rounded">
                        <img src={assets.about_image2} alt="Delivery" className="w-full object-cover rounded-t" />
                        <div className="flex flex-col gap-4 p-4">
                            {[{ img: assets.icon2, title: "64% discount", desc: "save your 64% money with us" }, { img: assets.icon1, title: "100% Organic Food", desc: "100% healthy and fresh food" }].map(({ img, title, desc }, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <img src={img} alt={title} className="w-10 h-10" />
                                    <div>
                                        <h3 className="text-gray-700 font-semibold">{title}</h3>
                                        <span className="text-gray-500 text-sm">{desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="hidden md:flex flex-col gap-6">
                        <div className='bg-primary text-white px-4 py-4 rounded shadow flex items-center gap-4'>
                            <img src={assets.icon3} alt="" className='bg-white w-5 h-5 rounded-full' />
                            <div>
                                <h3 className="font-semibold">Free Shipping</h3>
                                <span className="text-sm">Free shipping with discount</span>
                            </div>
                        </div>
                        {[{ img: assets.icon4, title: "Great Support 24/7", desc: "Instant access to contact" }, { img: assets.icon5, title: "100% secure payment", desc: "We ensure your payment is secure" }, { img: assets.icon6, title: "Money-back guarantee", desc: "there is money back-guarantee" }].map(({ img, title, desc }, i) => (
                            <div key={i} className="flex gap-4 items-start bg-gray-150 shadow rounded px-4 py-3">
                                <img src={img} alt={title} className="w-5 h-5 mt-1" />
                                <div>
                                    <h3 className="text-gray-700 font-semibold">{title}</h3>
                                    <span className="text-gray-500 text-sm">{desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center mt-20'>
                <div className='flex flex-col items-center w-max'>
                    <p className='text-3xl font-medium'>Related Product</p>
                    <div className='w-20 h-0.5 bg-primary rounded-full mt-2'></div>
                </div>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 mt-6 w-full'>
                {relatedProducts.filter((product) => product.inStock).map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
            <div className='flex justify-center mt-10'>
                <button onClick={() => { navigate("/products"); scrollTo(0, 0) }} className='cursor-pointer px-12 py-2.5 rounded border text-primary hover:bg-primary/10 transition'>
                    See More
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;
