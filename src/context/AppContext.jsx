/* import React, {  createContext, useContext, useEffect, useState } from "react";

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

 */

/* import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";
import { signInWithGoogle } from "../firebase";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY || "$";

  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [isVendor, setIsVendor] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState({});
  const [vendor, setVendor] = useState(null);
  const MAX_QUANTITY = 100;
  const MIN_QUANTITY = 5;

  // 🔐 Firebase Google Login
  const loginVendorWithGoogle = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result.user;

      const vendorProfile = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      };

      setVendor(vendorProfile);
      localStorage.setItem("vendor", JSON.stringify(vendorProfile));
      toast.success("Vendor Logged In");

      setIsVendor(true);
      navigate("/vendor-dashboard");
    } catch (error) {
      console.error("Google sign-in failed", error);
      toast.error("Login failed");
    }
  };

  // ✅ Auto-load vendor on refresh
  useEffect(() => {
    const storedVendor = localStorage.getItem("vendor");
    if (storedVendor) {
      setVendor(JSON.parse(storedVendor));
      setIsVendor(true);
    }
  }, []);

  useEffect(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    setUser(JSON.parse(storedUser));
  }
}, []);

  const fetchProduct = async () => {
    setProducts(dummyProducts);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId] >= MAX_QUANTITY) {
        toast.error(`You cannot add more than ${MAX_QUANTITY} items.`);
        return;
      }
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = MIN_QUANTITY;
    }

    setCartItems(cartData);
    toast.success("Added to Cart (Min. 5)");
  };

  const updateCartItems = (itemId, quantity) => {
    if (quantity < MIN_QUANTITY) {
      toast.error(`Minimum quantity is ${MIN_QUANTITY}`);
      return;
    }
    if (quantity > MAX_QUANTITY) {
      toast.error(`Maximum quantity is ${MAX_QUANTITY}`);
      return;
    }
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success("Cart Updated");
  };

  const removeFromCart = (itemId) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId] && cartData[itemId] > MIN_QUANTITY) {
      cartData[itemId] -= 1;
      toast.success("Removed one item");
    } else {
      toast.error(`Minimum quantity is ${MIN_QUANTITY}`);
      return;
    }

    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      totalCount += cartItems[item];
    }
    return totalCount;
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      if (cartItems[items] > 0) {
        totalAmount += itemInfo.amount * cartItems[items];
      }
    }
    return Math.floor(totalAmount * 100) / 100;
  };

  const value = {
    navigate,
    user,
    setUser,
    isVendor,
    setIsVendor,
    isAdmin,
    setIsAdmin,
    showUserLogin,
    setShowUserLogin,
    currency,
    products,
    setProducts,
    cartItems,
    setCartItems,
    searchQuery,
    setSearchQuery,
    addToCart,
    updateCartItems,
    removeFromCart,
    getCartAmount,
    getCartCount,
    vendor,
    setVendor,
    loginVendorWithGoogle,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
 */

import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";
import { signInWithGoogle } from "../firebase";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY || "₦";
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [isVendor, setIsVendor] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState({});
  const [vendor, setVendor] = useState(null);

  const MAX_QUANTITY = 100;
  const MIN_QUANTITY = 5;

  // ✅ Normalize user data (Google or Form login)
  const loginUser = (userObject) => {
    const normalizedUser = {
      name: userObject.displayName || userObject.name || "User",
      email: userObject.email,
      photoURL: userObject.photoURL || userObject.photo || "", // image uploaded or from Google
    };

    setUser(normalizedUser);
    localStorage.setItem("user", JSON.stringify(normalizedUser));
    toast.success("Logged in successfully");
  };

  // ✅ Logout User
  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
    toast.success("Logged out");
  };

  // ✅ Firebase Vendor Login
  const loginVendorWithGoogle = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result.user;

      const vendorProfile = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      };

      setVendor(vendorProfile);
      localStorage.setItem("vendor", JSON.stringify(vendorProfile));
      toast.success("Vendor Logged In");

      setIsVendor(true);
      navigate("/vendor-dashboard");
    } catch (error) {
      console.error("Google sign-in failed", error);
      toast.error("Login failed");
    }
  };

  // ✅ Load vendor from localStorage
  useEffect(() => {
    const storedVendor = localStorage.getItem("vendor");
    if (storedVendor) {
      setVendor(JSON.parse(storedVendor));
      setIsVendor(true);
    }
  }, []);

  // ✅ Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // ✅ Load cartItems from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // ✅ Save cartItems to localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log("🛒 cartItems updated:", cartItems);
  }, [cartItems]);

  // ✅ Load products (replace with actual fetch in production)
  const fetchProduct = async () => {
    setProducts(dummyProducts);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId] >= MAX_QUANTITY) {
        toast.error(`You cannot add more than ${MAX_QUANTITY} items.`);
        return;
      }
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = MIN_QUANTITY;
    }

    setCartItems(cartData);
    toast.success("Added to Cart (Min. 5)");
  };

  const updateCartItems = (itemId, quantity) => {
    if (quantity < MIN_QUANTITY) {
      toast.error(`Minimum quantity is ${MIN_QUANTITY}`);
      return;
    }
    if (quantity > MAX_QUANTITY) {
      toast.error(`Maximum quantity is ${MAX_QUANTITY}`);
      return;
    }
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success("Cart Updated");
  };

  const removeFromCart = (itemId) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId] && cartData[itemId] > MIN_QUANTITY) {
      cartData[itemId] -= 1;
      toast.success("Removed one item");
    } else {
      toast.error(`Minimum quantity is ${MIN_QUANTITY}`);
      return;
    }

    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      totalCount += cartItems[item];
    }
    return totalCount;
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const product = products.find((product) => product._id === itemId);
      if (product && cartItems[itemId] > 0) {
        totalAmount += product.amount * cartItems[itemId];
      }
    }
    return Math.floor(totalAmount * 100) / 100;
  };

  const value = {
    navigate,
    user,
    setUser,
    loginUser,
    logoutUser,
    isVendor,
    setIsVendor,
    isAdmin,
    setIsAdmin,
    showUserLogin,
    setShowUserLogin,
    currency,
    products,
    setProducts,
    cartItems,
    setCartItems,
    searchQuery,
    setSearchQuery,
    addToCart,
    updateCartItems,
    removeFromCart,
    getCartAmount,
    getCartCount,
    vendor,
    setVendor,
    loginVendorWithGoogle,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
