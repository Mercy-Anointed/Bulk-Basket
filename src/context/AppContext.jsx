import React, {  createContext, useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const currency = import.meta.env.VITE_CURRENCY || "$";


const navigate = useNavigate();
const [buyer, setBuyer] = useState(false);
const [isVendor, setIsVendor] = useState(false);
const [isAdmin, setIsAdmin] = useState(false);
const [showBuyerRegister, setShowBuyerRegister] = useState(false);
const [products, setProducts] = useState([]);
const [cartItems, setCartItems] = useState({});
const [searchQuery, setSearchQuery] = useState({});

const fetchProduct = async() => {
    setProducts(dummyProducts)
}

const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems)

    if (cartData[itemId]){
       cartData[itemId] +=1
    } else {
        cartData[itemId] = 1
    }

    setCartItems(cartData);
    toast.success("Added to Cart")
}

const updateCartItems = (itemId, quantity) => {
 let cartData = structuredClone(cartItems)
 cartData[itemId] = quantity;
 setCartItems(cartData);
 toast.success("Cart Updated")

}

const removeFromCart = (itemId) => {
    let cartData = structuredClone(cartItems)
    if(cartData[itemId]){
        cartData[itemId] -= 1;
       if (cartData[itemId] === 0){
        delete cartData[itemId]
       }
    }
      setCartItems(cartData)
    toast.success("Removed from Cart")
  
}

const getCartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
        totalCount += cartItems[item]
    }
    return totalCount
}

const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems){
        let itemInfo = products.find((product) => product._id === items)
        if (cartItems[items] > 0){
            totalAmount += itemInfo.amount * cartItems[items]
        }
    }
    return Math.floor(totalAmount * 100) / 100
}
useEffect(() => {
    fetchProduct()
}, [])

const value = {navigate,buyer, setBuyer, isVendor, setIsVendor, isAdmin, setIsAdmin, showBuyerRegister, currency,
    setShowBuyerRegister, products, setProducts, cartItems, setCartItems, searchQuery, setSearchQuery,
    addToCart, updateCartItems, removeFromCart, getCartAmount, getCartCount}

return <AppContext.Provider value={value}>
    {children}
    </AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext)
}

