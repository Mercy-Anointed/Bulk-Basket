/* import  { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const  [open, setOpen] = useState(false);
    const {buyer, setBuyer,  setShowBuyerRegister, navigate,
        searchQuery, setSearchQuery} = useAppContext();

    const logout = async() => {
        setBuyer(null)
        navigate('/')
    }

    useEffect(()=> {
      if (searchQuery.length > 0){
        navigate("/products")
      }
    },[navigate, searchQuery])
   
    return (
        <nav className='flex items-center justify-between px-6 md:px-16 lg:px-20  py-4 '>
       
         <div className='flex flex-row' >
            <NavLink to="/" onClick={() => setOpen(false)} 
            style={{display:"flex", marginRight:"15px", height:"30px", fontSize:"25px"}}>
            
            <img src={assets.logo} alt="logo" style={{marginRight:"-4px", height:"33px" }} />
             <span className='font-bold'>Bulk Basket</span>
          
          
            </NavLink>  
            <select className=' hidden lg:flex border border-gray-300 px-3  outline-none'>
              <option value="">Port Harcourt</option>
            </select>
            <div className='hidden lg:flex items-center text-sm gap-2 bg-gray-300 px-3 '>
            <input type="text" onChange={(e) => setSearchQuery(e.target.value)} className='py-1.5
            bg-gray-300 outline-none ' placeholder='search items'/>
              <img src={assets.search_icon} alt="search"  className=''/>
            </div>
          </div>
            
                
          
          

        

        <div className='hidden sm:flex items-center gap-6 font-medium '>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">All Products</NavLink>
            <NavLink to="/about">About us</NavLink>
           
            <NavLink to="/contact">Contact us</NavLink>
            <NavLink to="/faqs">FAQs</NavLink>
              <div onClick={() => navigate("/carts")} className='flex relative cursor-pointer'>
                <p>Carts</p>
                <img src={assets.basket} alt="cart" className='' />
              </div>

          {!buyer ? (
            <button className='bg-primary hover:bg-primary/100 transition text-white rounded-full py-1.5 px-2 cursor-pointer  '
             onClick={() => setShowBuyerRegister(true)}
            >Register</button>
          ):(
            <div className='relative group '>
            <img src={assets.profile_icon} alt="profile" className='w-10' />
            <ul className='hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200
            py-2.5 w-30 rounded-md text-sm z-40'>
                <li onClick={logout} className='p-1.5 pl-3 hover:bg-primary/100 cursor-pointer'>
                    logout
                </li>
            </ul>
            </div>
          )}

          </div>

          <div className=' items-center gap-6 hidden'>
            <div onClick={()=> navigate("/carts")} className='relative cursor-pointer'>
              <img src={assets.basket} alt="Cart" className=''/>
            </div>
          </div>

          <button onClick={() => open? setOpen(false) : setOpen(true)}aria-label='Menu'className='sm:hidden' >
            <img src={assets.menu_icon} alt="menu" />
          </button>

          {open && (
            <div className={`${open ? 'flex' : 'hidden'}  absolute top-[60px] left-0 w-full bottom-0 bg-white shadow-md py-4 flex-col
            items-start gap-2 px-5 text-sm md:hidden`}>
               <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/products" onClick={() => setOpen(false)}>All Products</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)}>About us</NavLink>
           
            <NavLink to="/contact" onClick={() => setOpen(false)}>Contact us</NavLink>
            <NavLink to="/faqs">FAQs</NavLink>
            {buyer && 
            <NavLink to='/products' onClick={() => setOpen(false)}>My Orders</NavLink>}

            {!buyer ? (
              <button onClick={()=>{
                 setOpen(false); 
                setShowBuyerRegister(true)
              } 
               
              }>Login</button>
            ) : (
              <button onClick={logout} className='cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary/100
              transition text-white text-sm'>Logout</button>
            )}

            </div>
          )}
         
        </nav>
    );
};

export default Navbar; */
import { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';
import DarkMode from './ThemeToggle';
import { usetheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [open, setOpen] = useState(false);
 /*  const [showSearchInput, setShowSearchInput] = useState(false); */
  const {theme} = usetheme()
  const {
    buyer,
    setBuyer,
    setShowBuyerRegister,
    navigate,
    searchQuery,
    setSearchQuery,
  } = useAppContext();

  const logout = () => {
    setBuyer(null);
    navigate('/');
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate('/products');
    }
  }, [searchQuery, navigate]);

 /*  const handleCancelSearch = () => {
    setShowSearchInput(false);
    setSearchQuery('');
    navigate('/');
  };
 */
  return (
    <nav className={`sticky top-0 z-50 ${theme} bg-white w-full flex items-center justify-between px-3 md:px-2 lg:px-12 py-4 shadow`}>
      {/* Left Side (Logo + Search) */}
      <div className="flex items-center gap-2">
        <NavLink to="/" onClick={() => setOpen(false)} className="flex items-center gap-0">
          <img src={assets.logo} alt="logo" className="h-8" />
          <span className="font-bold text-lg">Bulk Basket</span>
        </NavLink>

        {/* Location - Desktop Only */}
        <select className="hidden lg:flex border border-gray-300 px-3 py-1 rounded-md outline-none text-sm">
          <option value="">Port Harcourt</option>
        </select>

        {/* Search bar - Desktop Only */}
        <div className="flex md:flex lg:flex items-center bg-gray-200 rounded-md px-2 py-1">
          <input
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-gray-200 outline-none text-sm px-2 w-[50px]  md:w-[60px] lg:w-full "
            placeholder="Search items"
          />
          <img src={assets.search_icon} alt="search" className="w-4 h-4 md:w-7 md:h-7" />
        </div>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden sm:flex items-center md:gap-4  lg:gap-6 font-medium text-sm">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">All Products</NavLink>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/contact">Contact us</NavLink>
        <NavLink to="/faqs">FAQs</NavLink>

        {/* Cart */}
        <div onClick={() => navigate('/cart')} className="flex items-center gap-1 cursor-pointer">
          <p>Carts</p>
          <img src={assets.basket} alt="cart" className="w-5 h-5" />
        </div>

        <div className='md:hidden lg:flex sm:flex '>
          <ThemeToggle/>
        </div>
        {/* Auth */}
        {!buyer ? (
          <button
            onClick={() => setShowBuyerRegister(true)}
            className="bg-primary text-white rounded-full px-4 py-1.5 hover:bg-primary/100 transition"
          >
            Register
          </button>
        ) : (
          <div className="relative group">
            <img src={assets.profile_icon} alt="profile" className="w-8 h-8" />
            <ul className="hidden group-hover:block absolute top-10 right-0 bg-white border rounded-md shadow z-50 text-sm w-28">
              <li
                onClick={logout}
                className="px-3 py-2 hover:bg-primary/100 hover:text-white cursor-pointer"
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
     
      {/* Mobile Right Icons */}
      <div className="flex sm:hidden items-center gap-2">
       {/*  <button
          onClick={() => setShowSearchInput((prev) => !prev)}
          className="focus:outline-none"
        >
          <img src={assets.search_icon} alt="search" className="w-10 h-10" />
        </button> */}
        <div ><ThemeToggle/></div>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="focus:outline-none"
          aria-label="Menu"
        >
          <img src={assets.menu_icon} alt="menu" className="w-6 h-6" />
        </button>
      </div>

      

      {/* Mobile Search Input */}
      {/* {showSearchInput && (
        <div className="absolute top-full left-0 w-full bg-white shadow px-4 py-3 sm:hidden z-50 flex items-center gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
            placeholder="Search products..."
          />
          <button
            onClick={handleCancelSearch}
            className="text-black text-xl font-bold px-2 py-1"
          >
            ×
          </button>
        </div>
      )} */}

      {/* Mobile Nav */}
      {open && (
        <div className=" absolute top-[70px] left-0 w-full bg-white shadow-md flex flex-col items-start gap-3 px-5 py-5 sm:hidden z-40">
          <NavLink to="/" onClick={() => setOpen(false)} >Home</NavLink>
          <NavLink to="/products" onClick={() => setOpen(false)}>All Products</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About us</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact us</NavLink>
          <NavLink to="/faqs" onClick={() => setOpen(false)}>FAQs</NavLink>
          <NavLink to="/cart" onClick={() => setOpen(false)}>carts</NavLink>
          {buyer && (
            <NavLink to="/products" onClick={() => setOpen(false)}>
              My Orders
            </NavLink>
          )}
          {!buyer ? (
            <button
              onClick={() => {
                setOpen(false);
                setShowBuyerRegister(true);
              }}
              className="bg-primary text-white px-4 py-2 rounded-md"
            >
              Login
            </button>
          ) : (
            <button
              onClick={logout}
              className="bg-primary text-white px-4 py-2 rounded-md"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
