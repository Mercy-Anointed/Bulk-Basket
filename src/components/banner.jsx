import React from 'react';

const banner = () => {
    return (
        <div>
            
        </div>
    );
};

export default banner;

import { useEffect, useState } from "react"
import { useAppContext } from "../context/AppContext"
import { assets, dummyAddress } from "../assets/assets"
const Cart = () => {

    const {products, currency, cartItems, removeFromCart, 
        getCartCount, updateCartItem, navigate, getCartAmount} = useAppContext()

    const [cartArray, setCartArray] = useState([])
    const [addresses, setAddresses] = useState(dummyAddress)
    const [showAddress, setShowAddress] = useState(false)
    const [selectedAddress, setSelectedAddress] = useState(dummyAddress[0])
    const [paymentOption, setPaymentOption] = useState("COD")

    const getCart = () => {
        let tempArray = []
        for (const key in cartItems){
             const product = products.find((item) => item._id  === key)
             product.quantity = cartItems[key]
             tempArray.push(product)
        }
        setCartArray(tempArray)
       
    }

    const placeOrder = async () => {

    }
    useEffect(() => {
        if (products.length > 0 && cartItems) {
            getCart()
        }
    }, [products, cartItems])
   
    return products.length > 0 && cartItems ?  (
        <div className="flex flex-col md:flex-row mt-16">
            <div className='flex-1 max-w-4xl'>
                <h1 className="text-3xl font-medium mb-6">
                    Shopping Cart <span className="text-sm text-primary">{getCartCount}</span>
                </h1>

                <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
                    <p className="text-left">Product Details</p>
                    <p className="text-center">Subtotal</p>
                    <p className="text-center">Action</p>
                </div>

                {cartArray.map((product, index) => (
                    <div key={index} className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3">
                        <div className="flex items-center md:gap-6 gap-3">
                            <div onClick={() => {navigate(`/products/${product.category.toLowerCase()}/${product._id}`); scrollTo(0,0)}} className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded">
                                <img className="max-w-full h-full object-cover" src={product.image [0]} alt={product.name} />
                            </div>
                            <div>
                                <p className="hidden md:block font-semibold">{product.name}</p>
                                <div className="font-normal text-gray-500/70">
                                    <p>Weight: <span>{product.weight || "N/A"}</span></p>
                                    <div className='flex items-center'>
                                        <p>Qty:</p>
                                        <select onChange={(e) => updateCartItem(product._id,
                                            Number(e.target.value))
                                        } value={cartItems[product._id]}  className='outline-none'>
                                            {Array(cartItems[product._id] > 9 ? cartItems[product._id] : 9) .fill('').map((_, index) => (
                                                <option key={index} value={index + 1}>{index + 1}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-center">{currency}{product.offerPrice * product.quantity}</p>
                        <button onClick={() => removeFromCart(product._id)} className="cursor-pointer mx-auto">
                            <img src={assets.remove_icon} alt="remove" className="inline-block w-6 h-6" />
                        </button>
                    </div>)
                )}

                <button onClick={() => navigate("/products")} className="group cursor-pointer flex items-center mt-8 gap-2 text-primary font-medium">
                   <img src={assets.arrow_right_icon_colored} alt="arrow" className="group-hover:-translate-x-1 transition"/>
                    Continue Shopping
                </button>

            </div>

            <div className="max-w-[360px] w-full bg-gray-100/40 p-5 max-md:mt-16 border border-gray-300/70">
                <h2 className="text-xl md:text-xl font-medium">Order Summary</h2>
                <hr className="border-gray-300 my-5" />

                <div className="mb-6">
                    <p className="text-sm font-medium uppercase">Delivery Address</p>
                    <div className="relative flex justify-between items-start mt-2">
                        <p className="text-gray-500">
                            {selectedAddress ? `${selectedAddress.street}, ${selectedAddress.city},
                             ${selectedAddress.state}, ${selectedAddress.country}` : "No address found"}</p>
                        <button onClick={() => setShowAddress(!showAddress)} className="text-primary hover:underline cursor-pointer">
                            Change
                        </button>
                        {showAddress && (
                            <div className="absolute top-12 py-1 bg-white border border-gray-300 text-sm w-full">
                             {addresses.map((address, index) => (
                                 <p key={index} onClick={() =>{setSelectedAddress(address); setShowAddress(false)}} className="text-gray-500 p-2 hover:bg-gray-100">
                                    {address.street}, {address.city}, {address.state}, {address.country}
                                </p>
                             ))}  
                                <p onClick={() => navigate("/add-address")} className="text-primary text-center cursor-pointer p-2 hover:bg-primary/10">
                                    Add address
                                </p>
                            </div>
                        )}
                    </div>

                    <p className="text-sm font-medium uppercase mt-6">Payment Method</p>

                    <select onChange={(e) => setPaymentOption(e.target.value)} className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none">
                        <option value="COD">Cash On Delivery</option>
                        <option value="Online">Online Payment</option>
                    </select>
                </div>

                <hr className="border-gray-300" />

                <div className="text-gray-500 mt-4 space-y-2">
                    <p className="flex justify-between">
                        <span>Price</span><span>{currency}{getCartAmount()}</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Shipping Fee</span><span className="text-green-600">Free</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Tax (2%)</span><span>{currency}{getCartAmount() * 2 / 100}</span>
                    </p>
                    <p className="flex justify-between text-lg font-medium mt-3">
                        <span>Total Amount:</span><span>{currency}{getCartAmount() + getCartAmount() * 2 / 100}</span>
                    </p>
                </div>

                <button onClick={placeOrder} className="w-full py-3 mt-6 cursor-pointer bg-primary text-white font-medium hover:bg-primary-dull transition">
                    {paymentOption === "COD" ? "Place Order" : "Proceed to Checkout"}
                </button>
            </div>
        </div>
    ) : null
}
export default Cart

import React, {useState} from 'react';
import { assets } from '../assets/assets';

 const InputField = ({type, placeholder, name, handleChange, address }) => (
       <input className='w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none
       text-gray-500 focus-border-primary transition'
        type= {type} 
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        value={address[name]}
        required
       />
    )


const AddAddress = () => {
    const [address, setAddress] = useState({
        firstName:"",
        lastName:"",
        email:"",
        street:"",
        city:"",
        state:"",
        zipcode:"",
        country:"",
        phone:"",
    })

    const handleChange = (e) => {
        const {name, value} = e.target;

        setAddress((prevAddress) => ({
            ...prevAddress, [name]: value
        }))
    }

   const onSubmitHandler = async (e)=> {
    e.preventDefault();
   }
    return (
        <div className='mt-16 pb-16'>
           <p className='text-2xl md:text-3xl text-gray-500' >Add Shipping 
            <span className='font-semibold text-primary'> Address</span></p> 

            <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
                <div className='flex-1 max-w-md'>
                    <form onSubmit={onSubmitHandler} className='space-y-3 mt-6 text-small'>
                        <div className='grid grid-cols-2 gap-4'>
                        <InputField handleChange={handleChange} address={address} name="FirstName"
                        type="text" placeholder="First Name"/>
                        <InputField handleChange={handleChange} address={address} name="LastName"
                        type="text" placeholder="Last Name"/>  
                        </div>

                        <InputField handleChange={handleChange} address={address} name="email"
                        type="email" placeholder="Email Address"/>
                        <InputField handleChange={handleChange} address={address} name="street"
                        type="text" placeholder="street"/>

                        <div className='grid grid-cols-2 gap-4'>
                            <InputField handleChange={handleChange} address={address} name="city"
                            type="text" placeholder="City"/>
                            <InputField handleChange={handleChange} address={address} name="state"
                            type="text" placeholder="State"/>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <InputField handleChange={handleChange} address={address} name="zipcode"
                            type="number" placeholder="Zip code"/>
                            <InputField handleChange={handleChange} address={address} name="country"
                            type="text" placeholder="Country"/>
                        </div>

                        <InputField handleChange={handleChange} address={address} name="phone"
                            type="text" placeholder="Phone"/>

                        <button className='w-full bg-primary mt-6 py-3 text-white
                        hover:bg-primary-dull transition cursor-pointer uppercase'>Save Address</button>
                    </form>
                </div>
                <img src={assets.add_address_iamge} alt="Add Address" className='md:mr-16 mb-16 md:mt-0'/>
            </div>
        </div>
    );
};

export default AddAddress;