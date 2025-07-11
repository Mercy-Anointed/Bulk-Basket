/* import React, { useState , useEffect} from 'react';
import { assets } from '../assets/assets';
import { Target } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const InputField = ({type, placeholder, name, handleChange, address, className}) => (
  <input
    type={type}
    placeholder={placeholder}
    name={name}
    onChange={handleChange}
    value={address[name]}
    className={`px-3 py-2 rounded-md border outline-none focus:ring-2 focus:ring-primary ${className || ''}`}
    required
  />
);

const CheckOut = () => {
    const {
       products,
     
       getCartAmount,
     
       
     
       cartItems,
     
       navigate
     } = useAppContext();
   
    

     const getCart = () => {
       let tempArray = [];
       for (const key in cartItems) {
         const product = products.find((item) => item._id === key);
         if (product) {
           product.quantity = cartItems[key];
           tempArray.push(product);
         }
       }
       setCartArray(tempArray);
     };
   
     useEffect(() => {
       if (products.length > 0 && cartItems) {
         getCart();
       }
     }, [products, cartItems]);
    const [address, setAddress] = useState({
        lastName:"",
        firstName:"",
        middleName:"",
        street:"",
        city:"",
        state:"",
      email:"",
        phone:"",
        info:"", 
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        
        setAddress((prevAddress) => ({
            ...prevAddress, [name]:value
        }));
         }

       const onSubmitHandler = async (e)=> {
    e.preventDefault();
   }
  
    return products.length > 0  && cartItems ?  (
        <div>
            <div className='relative w-full mb-4'>
                        <img src={assets.category_banner1} alt="" className='md:w-full' />
                        <div className='absolute inset-0 pl-2 md:pl-8 flex items-center gap-1.5 '>
                            <img src={assets.category_icon} alt=""  /> <img src={assets.vector} alt="" />
                          <p className='md:text-2xl font-bold'>Carts</p> <img src={assets.vector} alt="" />
                            <p className='md:text-2xl font-medium'>Checkout</p>
                        </div>
                    </div>

                <div>
                      <p>Billing Information</p>

                      <div className='flex flex-col-reverse md:flex-row md:gap-6 mt-10 '>
                                     <div className='flex-1 max-w-[60%]'>
                                         <form onSubmit={onSubmitHandler} className='space-y-3 mt-6 text-small'>
                                             <div className='grid grid-cols-3 gap-4'>
                                                <div className='flex flex-col'>
                                            <label htmlFor="Last Name"  className='mb-2'>Last Name</label>
                                             <InputField handleChange={handleChange} address={address} name="LastName"
                                             type="text" placeholder="Edward" className= "border border-gray-300 rounded-md"/>
                                             </div>

                                              <div className='flex flex-col'>
                                            <label htmlFor="First Name"  className='mb-2'>First Name</label>
                                             <InputField handleChange={handleChange} address={address} name="FirstName"
                                             type="text" placeholder="Rejoice" className= "border border-gray-300 rounded-md"/>
                                               </div>

                                             <div className='flex flex-col'>
                                            <label htmlFor="Middle Name"  className='mb-2'>Middle Name (optional)</label>
                                             <InputField handleChange={handleChange} address={address} name="MiddleName"
                                             type="text" placeholder="Middle Name" className= "border border-gray-300 rounded-md"/>  
                                              </div>
                                             </div>
                     
                                              <div className='flex flex-col'>
                                            <label htmlFor="street"  className='mb-2'>Street Address</label>
                                             <InputField handleChange={handleChange} address={address} name="street"
                                             type="text" placeholder="162 Elzazi Plaza D/line" className= "border border-gray-300 rounded-md"/>
                                            </div>

                                             <div className='grid grid-cols-2 gap-4'>
                                                <div className='flex flex-col'>
                                            <label htmlFor="city"  className='mb-2'>City</label>
                                                 <InputField handleChange={handleChange} address={address} name="city"
                                                 type="text" placeholder="City" className= "border border-gray-300 rounded-md"/>
                                                  </div>

                                                   <div className='flex flex-col'>
                                            <label htmlFor="state"  className='mb-2'>State</label>
                                                 <InputField handleChange={handleChange} address={address} name="state"
                                                 type="text" placeholder="State" className= "border border-gray-300 rounded-md"/>
                                                   </div>
                                             </div>

                                            <div className='flex flex-row gap-4'>
                                              <div className='flex flex-col'>
                                            <label htmlFor="email"  className='mb-2'>Email</label>
                                             <InputField handleChange={handleChange} address={address} name="email"
                                             type="email" placeholder="1234@gmail.com" className= "border border-gray-300 rounded-md"/>
                                               </div>

                                                <div className='flex flex-col'>
                                            <label htmlFor="phone" className='mb-2'>Phone</label>
                                             <InputField handleChange={handleChange} address={address} name="phone"
                                                 type="text" placeholder="+2349012345678" className= "border border-gray-300 rounded-md"/>
                                                  </div>
                                            </div>
                     
                                     <div className='flex flex-col mt-6'>
                                            <label htmlFor="info" className='mb-3'>Additonal info</label>
                                            <label htmlFor="info" className='text-sm mb-2'>order notes (optional)</label>
                                             <textarea  handleChange={handleChange} address={address} name="info"
                                                 type="text" placeholder="notes about your order e.g special note for delivery" className= "border border-gray-300 rounded-md resize-none"/>
                                                  </div>
                                             <button className='w-full bg-primary mt-6 py-3 text-white
                                             hover:bg-primary-dull transition cursor-pointer uppercase'>Save Address</button>
                                         </form>
                                     </div>
                                    
                                    <div>
                                        <h2>Order Summary</h2>
                                        <hr />

                                        <div>
                                            <p>Delivery Address</p>
                                            <div>
                                                <p>
                                                    {selectedAddress ? `${selectedAddress.street}, ${selectedAddress.city},
                                                    ${selectedAddress.state}, ${selectedAddress.country}` : "No Address Found"}
                                                </p>
                                                <button>change</button>

                                                {showAddress && (
                                                    <div>
                                                        {addresses.map((address, index) => (
                                                            <p key={index}>
                                                                {address.street}, {address.city}, {address.state}, {address.country}
                                                            </p>
                                                        ))}
                                                        <p>Add Address</p>
                                                    </div>
                                                )}
                                            </div>

                                            <div className='md:mb-10'>
          <div className='grid grid-cols-1 md:grid-cols-[4fr_1fr]  text-gray-700 items-center text-sm gap-4 border-b border-gray-300 py-3'>
            <span>Subtotal</span> <span>₦{getCartAmount()}</span>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-[4fr_1fr] text-sm text-gray-700 items-center gap-4 border-b border-gray-300 py-3'>
            <span>Shipping</span> <span>₦1500</span>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-[4fr_1fr]   text-gray-700 items-center gap-4 py-3'>
            <span className='md:text-2xl'>Total</span> <span>₦{getCartAmount() + getCartAmount() + 1500}</span>
          </div>
        </div>
                                            <h2>Payment Method</h2>
                                        </div>
                                    </div>
                                 </div>
                </div> 
              
        </div>
    ): null;
};

export default CheckOut; */

import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';
import { FaChevronLeft } from 'react-icons/fa';

const InputField = ({ type, placeholder, name, handleChange, address, className, required = true }) => (
  <input
    type={type}
    placeholder={placeholder}
    name={name}
    onChange={handleChange}
    value={address[name]}
    className={`px-3 py-2 rounded-md border border-gray-300 focus:ring-2 outline-none focus:ring-primary ${className || ''}`}
    required={required}
  />
);

const CheckOut = () => {
  const { products, cartItems, getCartAmount, navigate } = useAppContext();

  const [cartArray, setCartArray] = useState([]);
  const [submittedAddress, setSubmittedAddress] = useState(null);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('');
  const [address, setAddress] = useState({
    lastName: '',
    firstName: '',
    middleName: '',
    street: '',
    city: '',
    state: '',
    country: '',
    email: '',
    phone: '',
    info: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleResetAddress = () => {
    setSubmittedAddress(null);
    setAddress({
      lastName: '',
      firstName: '',
      middleName: '',
      street: '',
      city: '',
      state: '',
      country: '',
      email: '',
      phone: '',
      info: ''
    });
  };

  const getCart = () => {
    const tempArray = [];
    for (const key in cartItems) {
      const product = products.find((item) => item._id === key);
      if (product) {
        tempArray.push({ ...product, quantity: cartItems[key] });
      }
    }
    setCartArray(tempArray);
  };

  useEffect(() => {
    if (products.length > 0 && cartItems) {
      getCart();
    }
  }, [products, cartItems]);

  const deliveryFee = 1500;
  const subtotal = getCartAmount();
  const total = subtotal + deliveryFee;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setSubmittedAddress({ ...address });
  };

  /* const saveOrderToHistory = () => {
  const existing = JSON.parse(localStorage.getItem('orders')) || [];
  const newOrder = {
    id: 'ORD' + Date.now(),
    date: new Date().toLocaleString(),
    total,
    status: 'Completed',
    products: cartArray,
  };
  localStorage.setItem('orders', JSON.stringify([newOrder, ...existing]));
}; */
const saveOrderToHistory = (method) => {
  const existing = JSON.parse(localStorage.getItem('orders')) || [];
  const newOrder = {
    id: 'ORD' + Date.now(),
    date: new Date().toLocaleString(),
    total,
    subtotal,
    shipping: deliveryFee,
    paymentMethod: method,
    products: cartArray.map(product => ({
      ...product,
      price: product.amount,
    })),
    billingInfo: {
      fullName: `${address.firstName} ${address.middleName || ''} ${address.lastName}`,
      email: address.email,
      phone: address.phone,
      address: address.street,
      city: address.city,
      state: address.state,
      country: address.country || 'Nigeria',
    },
    shippingInfo: {
      fullName: `${address.firstName} ${address.middleName || ''} ${address.lastName}`,
      email: address.email,
      phone: address.phone,
      address: address.street,
      city: address.city,
      state: address.state,
      country: address.country || 'Nigeria',
    }
  };
  localStorage.setItem('orders', JSON.stringify([newOrder, ...existing]));
};



  const payWithPaystack = (method) => {
  const handler = window.PaystackPop.setup({
    key: 'pk_test_9b41dd21bcb7a2900bf064eb42545520cfc614b7',
    email: address.email,
    amount: total * 100,
    currency: 'NGN',
    ref: '' + Math.floor(Math.random() * 1000000000 + 1),
    callback: function (response) {
      alert('Payment successful. Reference: ' + response.reference);
      saveOrderToHistory(method); // Pass method
    },
    onClose: function () {
      alert('Payment window closed.');
    }
  });
  handler.openIframe();
};

const payWithFlutterwave = (method) => {
  window.FlutterwaveCheckout({
    public_key: 'FLWPUBK_TEST-ccdd99935611671d77774755c8e19a15-X',
    tx_ref: '' + Date.now(),
    amount: total,
    currency: 'NGN',
    customer: {
      email: address.email,
      name: `${address.firstName} ${address.lastName}`,
      phone_number: address.phone,
    },
    callback: (response) => {
      alert('Payment successful. Transaction ID: ' + response.transaction_id);
      saveOrderToHistory(method); // Pass method
    },
    onclose: () => {
      alert('Flutterwave payment closed');
    },
    customizations: {
      title: 'BulkBaskett Checkout',
      description: 'Payment for your order',
      logo: 'https://your-logo-url.com/logo.png',
    },
  });
};

const handleSecurePayment = () => {
  if (!selectedPayment) return alert('Please select a payment method');

  if (selectedPayment === 'paystack') {
    payWithPaystack(selectedPayment); // ✅ pass to function
  } else if (selectedPayment === 'flutterwave') {
    payWithFlutterwave(selectedPayment); // ✅ pass to function
  }
};


  useEffect(() => {
    // Inject Paystack script
    const paystackScript = document.createElement('script');
    paystackScript.src = 'https://js.paystack.co/v1/inline.js';
    document.body.appendChild(paystackScript);

    // Inject Flutterwave script
    const flutterwaveScript = document.createElement('script');
    flutterwaveScript.src = 'https://checkout.flutterwave.com/v3.js';
    document.body.appendChild(flutterwaveScript);

    return () => {
      document.body.removeChild(paystackScript);
      document.body.removeChild(flutterwaveScript);
    };
  }, []);

  
  return products.length > 0 && cartItems ? (
    <div className=' relative'>
      {/* Banner */}
      <div className="relative w-full mb-4">
        <img src={assets.category_banner1} alt="" className="md:w-full" />
        <div className="absolute inset-0 pl-2 md:pl-8 flex items-center gap-1.5">
          <img src={assets.category_icon} alt="" />
          <img src={assets.vector} alt="" />
          <p className="md:text-2xl font-bold">Carts</p>
          <img src={assets.vector} alt="" />
          <p className="md:text-2xl font-medium">Checkout</p>
        </div>
      </div>

      <p className="text-xl font-semibold mb-4 md:px-10">Billing Information</p>

      <div className="flex flex-col-reverse md:flex-row md:gap-6 mt-10 md:px-10">
        {/* Left: Address Form */}
        <div className="flex-1 max-w-[60%]">
          <form onSubmit={onSubmitHandler} className="space-y-3 mt-6 text-sm">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <div className="flex flex-col">
                <label className="mb-2">Last Name</label>
                <InputField handleChange={handleChange} address={address} name="lastName" type="text" placeholder="Edward" />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">First Name</label>
                <InputField handleChange={handleChange} address={address} name="firstName" type="text" placeholder="Rejoice" />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Middle Name (optional)</label>
                <InputField handleChange={handleChange} address={address} name="middleName" type="text" placeholder="Middle Name" required={false} />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="mb-2">Street Address</label>
              <InputField handleChange={handleChange} address={address} name="street" type="text" placeholder="162 Elzazi Plaza D/line" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="mb-2">City</label>
                <InputField handleChange={handleChange} address={address} name="city" type="text" placeholder="City" />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">State</label>
                <InputField handleChange={handleChange} address={address} name="state" type="text" placeholder="State" />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="mb-2">Country (optional)</label>
              <InputField handleChange={handleChange} address={address} name="country" type="text" placeholder="Country" required={false} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="mb-2">Email</label>
                <InputField handleChange={handleChange} address={address} name="email" type="email" placeholder="1234@gmail.com" />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Phone</label>
                <InputField handleChange={handleChange} address={address} name="phone" type="text" placeholder="+2349012345678" />
              </div>
            </div>

            <div className="flex flex-col mt-6">
              <label className="mb-2">Additional info</label>
              <textarea
                name="info"
                placeholder="Notes about your order e.g special note for delivery"
                onChange={handleChange}
                value={address.info}
                className="border border-gray-300 rounded-md resize-none outline-none p-2"
              />
            </div>

            <button type="submit" className="w-full bg-primary mt-4 py-2 text-sm text-white hover:bg-primary-dull rounded-full transition cursor-pointer uppercase">
              Save Address
            </button>
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="w-full md:max-w-[35%] md:mr-10 bg-gray-100 shadow-md p-6 rounded-md">
          <h2 className="text-lg font-bold mb-4">Order Summary</h2>

          <div className="mb-4">
            <p className="font-semibold">Delivery Address</p>
            <div className="text-sm text-gray-700 mt-2">
              {submittedAddress ? (
                <div className="space-y-2">
                  <p>
                    {submittedAddress.street}, {submittedAddress.city}, {submittedAddress.state}, {submittedAddress.country || 'Nigeria'}
                  </p>
                  <button onClick={handleResetAddress} className="text-primary underline text-sm">
                    Change Address
                  </button>
                </div>
              ) : (
                <p className="text-gray-400">No Address Provided</p>
              )}
            </div>
          </div>

          <div className="border-t border-b border-gray-300 py-3 mb-3">
            <p className="font-semibold mb-2">Items in Cart</p>
            {(showAllProducts ? cartArray : cartArray.slice(0, 3)).map((item) => (
              <div key={item._id} className="flex justify-between items-center gap-4 py-2">
                <div className="flex items-center gap-3">
                  <img src={item.image[0]} alt={item.name} className="w-14 h-14 object-cover rounded" />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-700">
                  ₦{Number(item.amount || 0) * Number(item.quantity || 1)}
                </p>
              </div>
            ))}
            {cartArray.length > 5 && (
              <button onClick={() => setShowAllProducts(!showAllProducts)} className="text-primary text-sm mt-2">
                {showAllProducts ? 'Hide Products' : `View All Products (${cartArray.length})`}
              </button>
            )}
          </div>

          <div className="md:mb-10">
            <div className="grid grid-cols-2 text-gray-700 text-sm border-b gap-4 border-gray-300 py-3">
              <span>Subtotal</span> <span>₦{subtotal}</span>
            </div>
            <div className="grid grid-cols-2 text-sm text-gray-700 gap-4 border-b border-gray-300 py-3">
              <span>Shipping</span> <span>₦{deliveryFee}</span>
            </div>
            <div className="grid grid-cols-2 text-gray-700 font-semibold gap-4 py-3">
              <span className="text-lg">Total</span> <span className="text-lg">₦{total}</span>
            </div>
          </div>

          <h2 className="font-bold mt-6 mb-2">Payment Method</h2>
          <div className="space-y-3">
            <label className={`flex items-center gap-2 cursor-pointer ${paymentMethod === 'paystack' ? 'text-black p-2 rounded-md ' : ''}`}>
              <input type="checkbox" checked={paymentMethod === 'paystack'} onChange={() => setPaymentMethod('paystack')} className="accent-primary " />
              Paystack
            </label>
            <label className={`flex items-center gap-2 cursor-pointer mb-10 ${paymentMethod === 'flutterwave' ? 'text-black p-2 rounded-md' : ''}`}>
              <input type="checkbox" checked={paymentMethod === 'flutterwave'} onChange={() => setPaymentMethod('flutterwave')} className="accent-primary" />
              Flutterwave
            </label>

            <button
              onClick={() => setShowOverlay(true)}
              className="w-full bg-primary mt-4 py-2 text-sm text-white hover:bg-primary-dull rounded-full transition cursor-pointer uppercase"
            >
              CheckOut
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {showOverlay && (
        <div className="fixed inset-0 bg-gray-100 bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg flex gap-10 max-w-[90%] w-full md:w-[80%] lg:w-[70%]">

           

            {/* Payment Method Selection */}
            <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md">
               <button onClick={() => navigate("/cart")} className='mb-10 border border-gray-300 shadow rounded-md p-2 flex items-center gap-2'>
                <FaChevronLeft className="text-sm" />
                Back to Cart
              </button>
              <h2 className="text-lg font-semibold mb-7 pl-20">Payment Method</h2>
              <div className="flex flex-row justify-between gap-10">
                <div
                  className={`border w-full max-w-[200px] h-[120px] flex flex-col items-center justify-center rounded-md cursor-pointer ${selectedPayment === 'paystack' ? 'bg-primary text-white' : 'border-gray-300'}`}
                  onClick={() => setSelectedPayment('paystack')}
                >
                  <p className="font-semibold whitespace-nowrap">Paystack</p>
                  <p className='text-sm whitespace-nowrap'>Secure Payment</p>
                </div>
                <div
                  className={`border w-full max-w-[200px] h-[120px] flex flex-col items-center justify-center rounded-md cursor-pointer ${selectedPayment === 'flutterwave' ? 'bg-primary text-white' : 'border-gray-300'}`}
                  onClick={() => setSelectedPayment('flutterwave')}
                >
                  <p className="font-semibold whitespace-nowrap">Flutterwave</p>
                  <p className='text-sm whitespace-nowrap'>Safe and Reliable</p>
                </div>
              </div>

              <div className='bg-primary/10 mt-10 px-4 py-5 rounded-md'>
                <img src="" alt="" />
                <p>Your payment Information is encrypted and secure. You'll be redirected to paystack to complete payment </p>
              </div>
              <div className='flex flex-row gap-10'>
              <button
                className="mt-6 w-full bg-white text-black shadow py-1 rounded-md hover:bg-red-600 transition"
                onClick={() => navigate("/account") /* setShowOverlay(false) */}
              >
                Back to Details
              </button>
                <button
                className="mt-6 w-full bg-green-600 text-white py-1 rounded-md hover:bg-green-700 transition"
                onClick={handleSecurePayment}
              >
               Complete Payment - <span>₦{total}</span>
              </button>
              </div>
            </div>
          

          
             {/* Order Summary Repeat */}
            <div className="flex-1 bg-gray-50 p-4 rounded-lg shadow-md max-h-[80vh] overflow-y-auto">
              <h2 className="text-lg font-bold mb-4">Order Summary</h2>
              {cartArray.map((item) => (
                <div key={item._id} className="flex justify-between items-center gap-4 py-2 border-b border-gray-300">
                  <div className="flex items-center gap-3">
                    <img src={item.image[0]} alt={item.name} className="w-12 h-12 object-cover rounded" />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    ₦{Number(item.amount || 0) * Number(item.quantity || 1)}
                  </p>
                </div>
              ))}
              <div className="mt-4 border-t border-gray-300 pt-2 text-sm text-gray-700">
                <div className="flex justify-between mb-1">
                  <span>Subtotal:</span> <span>₦{subtotal}</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span>Shipping:</span> <span>₦{deliveryFee}</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total:</span> <span>₦{total}</span>
                </div>
              </div>
              <button
                className="mt-15 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
                onClick={handleSecurePayment}
              >
                Secure Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    
  ) : null;
};

export default CheckOut;
