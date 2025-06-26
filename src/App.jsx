import Navbar from './components/Navbar'
import { useLocation } from 'react-router-dom'
import './App.css'
import { Route, Routes } from 'react-router-dom';
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
import Cart from './Pages/Cart'
import CheckOut from './Pages/CheckOut';

const App = () =>{
const isVendorPath = useLocation().pathname.includes("vendor", "admin");

const {showBuyerRegister, isVendor, isAdmin} = useAppContext();
    return (
     
        <ThemeProvider>
        <div>
        {isVendorPath ? null : <Navbar/>}
       <Toaster/>
       {/*  {isAdminPath ? null : <Navbar/>} */}
       < Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/products' element={<ProductHome/>}/>
       <Route path='/products/:category/:id' element={<ProductDetails/>}/>
       <Route path='/products/:category/' element={<ProductCategory/>}/>
       <Route path='/about' element={<AboutUs/>}/>
       <Route path='/contact' element={<ContactUs/>}/>
       <Route path='/faqs' element={<Faq/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/checkout' element={<CheckOut/>}/>
       
      
       
      

      
       </Routes>
       <Footer/>
       <FooterBottom/>
        </div>
        </ThemeProvider>
      
    )
}

export default App
