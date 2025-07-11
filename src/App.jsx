import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FooterBottom from './components/FooterBottom';
import { useAppContext } from './context/AppContext';
import { ThemeProvider } from './context/ThemeContext';
import { Toaster } from 'react-hot-toast';

import Home from './components/Home';
import Login from './components/Login';

import AllProduct from './Pages/AllProduct';
import ProductDetails from './Pages/ProductDetails';
import ProductHome from './Pages/ProductHome';
import ProductCategory from './Pages/ProductCategory';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Faq from './Pages/Faq';
import Cart from './Pages/Cart';
import CheckOut from './Pages/CheckOut';

import UserDashboard from './Pages/UserDashboard';
import UserProfile from './components/UserProfile';
import OrderHistory from './components/OrderHistory';
import ShoppingCart from './components/ShoppingCart';
import Settings from './components/Settings';

const App = () => {
  const location = useLocation();
  const { showUserLogin, user } = useAppContext();

  const isVendorPath = location.pathname.includes('vendor');

  return (
    <ThemeProvider>
      <div>
        {/* ✅ Hide Navbar if on vendor path */}
        {!isVendorPath && <Navbar />}

        {/* ✅ Toast Notifications */}
        <Toaster />

        {/* ✅ All Routes */}
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductHome />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />

          {/* 🔒 Protected User Account Pages */}
          {user ? (
            <Route path="/account" element={<UserDashboard />}>
              <Route index element={<UserProfile />} />
              <Route path="dashboard" element={<UserProfile />} />
              <Route path="order" element={<OrderHistory />} />
              <Route path="shop" element={<ShoppingCart />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          ) : (
            <Route path="/account/*" element={<Login />} />
          )}
        </Routes>

        {/* Footer (hidden on vendor if needed) */}
        {!isVendorPath && (
          <>
            <Footer />
            <FooterBottom />
          </>
        )}

        {/* 👇 Global Login Modal */}
        {showUserLogin && <Login />}
      </div>
    </ThemeProvider>
  );
};

export default App;
