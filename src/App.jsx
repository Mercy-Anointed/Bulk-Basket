import Navbar from './components/Navbar';
import { useLocation, Route } from 'react-router-dom';
import './App.css';
import {  Routes } from 'react-router-dom';
import { useAppContext } from './context/AppContext';
import Home from './components/Home';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';
import FooterBottom from './components/FooterBottom';
import AllProduct from './Pages/AllProduct';
import ProductDetails from './Pages/ProductDetails';
import ProductHome from './Pages/ProductHome';
import ProductCategory from './Pages/ProductCategory';
import AboutUs from './Pages/AboutUs';
import { ThemeProvider } from './context/ThemeContext';
import ContactUs from './Pages/ContactUs';
import Faq from './Pages/Faq';
import Cart from './Pages/Cart';
import CheckOut from './Pages/CheckOut';
import UserLayout from './Pages/UserLayout';
import Login from './components/Login'; // 👈 Import the Login modal
import OrderHistory from './components/OrderHistory';
import UserProfile from './components/UserProfile';
import ShoppingCart from './components/ShoppingCart';
import Settings from './components/Settings';

const App = () => {
  const isVendorPath = useLocation().pathname.includes('vendor');
  const { showUserLogin, user } = useAppContext(); // 👈 Pull modal state from context

  return (
    <ThemeProvider>
      <div>
        {/* Show navbar only if not on vendor path */}
        {!isVendorPath && <Navbar />}
        <Toaster />


<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/products" element={<ProductHome />} />
  <Route path="/products/:category/:id" element={<ProductDetails />} />
  <Route path="/products/:category/" element={<ProductCategory />} />
  <Route path="/about" element={<AboutUs />} />
  <Route path="/contact" element={<ContactUs />} />
  <Route path="/faqs" element={<Faq />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/checkout" element={<CheckOut />} />

  {/* Protected account layout */}
  {user ? (
    <Route path="/account" element={<UserLayout />}>
      <Route index element={<UserProfile />} /> {/* Default view */}
      <Route path="dashboard" element={<UserProfile />} />
      <Route path="order" element={<OrderHistory />} />
      <Route path="shop" element={<ShoppingCart />} />
      <Route path="settings" element={<Settings />} />
      {/* Add more nested routes like shop/settings here */}
       {/*   <Route path='shop' element={<ShoppingCart/>}/>
          <Route path='settings' element={<Settings/>}/> */}
    </Route>
  ) : (
    <Route path="/account/*" element={<Login />} />
  )}
</Routes>

       
        <Footer />
        <FooterBottom />

        {/* 👇 Show Login modal only if true */}
        {showUserLogin && <Login />}
      </div>
    </ThemeProvider>
  );
};

export default App;
