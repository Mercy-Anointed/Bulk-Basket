import { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { FiPlus, FiMinus } from "react-icons/fi";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="border py-4 border-gray-300 rounded-md px-2 mb-2 text-gray-700 cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? (
        
          <FiMinus className="text-xl text-black  bg-white rounded" />
        ) : (
          <img src={assets.plus_icon} alt="" />
        )}
      </div>
      {isOpen && <p className="text-gray-500 mt-1">{answer}</p>}
    </div>
  );
};

const Faq = () => {
  const faqData = [
    {
      question: "How can I order?",
      answer:
        "You can place your order by browsing products and clicking the 'Add to Cart' button.",
    },
    {
      question: "Is there a minimum order quantity per product or per order?",
      answer:
        "No, you can order as little or as much as you want per product.",
    },
    {
      question: "Where can I find my order history?",
      answer: "Go to your account dashboard and click on 'Order History'.",
    },
    {
      question: "Can I return an order?",
      answer:
        "Yes, items can be returned within 7 days of delivery if unopened.",
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept cards, bank transfers, and mobile payments.",
    },
    {
      question: "Do you deliver nationwide?",
      answer: "Yes, we deliver to all 36 states in Nigeria.",
    },
    {
      question: "How do I contact customer service?",
      answer:
        "Use the contact form or send us a message through WhatsApp or email.",
    },
  ];

  const [searchBar, setSearchBar] = useState("");

  const filteredFaq = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchBar.toLowerCase())
  );

  const faqsToDisplay = searchBar ? filteredFaq : faqData.slice(0, 5);

  return (
    <div className="">
      {/* Banner */}
      <div className="relative">
        <img src={assets.product_banner} alt="FAQ Banner" className="w-full object-cover h-[60px]"/>
        <div className="flex absolute items-center inset-0 md:pl-4 pl-2 lg:pl-15">
          <p className="text-white font-bold text-xl md:text-3xl">FAQs</p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="flex flex-col lg:mb-20 md:flex-row justify-between px-2 md:px-4 lg:px-15 md:gap-20 lg:gap-24 md:mt-8 mt-4">
        <div className="md:w-[60%] lg:w-[40%]">
          <h2 className="md:text-2xl lg:text-3xl text-base mb-4 text-black">
            Welcome, got any questions about Bulk Basket? Maybe we have already
            answered it.
          </h2>
        </div>
        <div className="group lg:w-[40%]">
          <p className="md:mb-5 mb-4 lg:text-3xl text-gray-700">
            Can't find your questions on the list? Let us know your questions!
          </p>
          <Link
            to="/contact"
            className="hover:bg-primary hover:text-white border border-gray-500 text-primary 
              px-3 py-1 lg:px-4 lg:py-2 lg:text-2xl rounded-full"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Layout: Sidebar + FAQ section */}
      <div className="flex md:flex-row flex-col lg:px-15 md:px-4 px-2 gap-6 md:gap-15 mt-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/5 flex flex-col lg:text-2xl space-y-2">
          <Link
            to="/order"
            className="hover:underline hover:decoration-primary hover:underline-offset-4 transition text-gray-700 hover:text-black"
          >
            Order
          </Link>
          <Link
            to="/order"
            className="hover:underline hover:decoration-primary hover:underline-offset-4 transition text-gray-700 hover:text-black"
          >
            Shipping
          </Link>
          <Link
            to="/order"
            className="hover:underline hover:decoration-primary hover:underline-offset-4 transition text-gray-700 hover:text-black"
          >
            Payment
          </Link>
          <Link
            to="/order"
            className="hover:underline hover:decoration-primary hover:underline-offset-4 transition text-gray-700 hover:text-black"
          >
            Return
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="w-full md:w-4/5 flex flex-col gap-4">
          {/* Search bar aligned to the right */}
          <div className="flex justify-end">
            <div className="w-[400px]">
              <div className="flex items-center bg-gray-200 rounded-md px-2 py-3 md:px-2 md:py-1 lg:px-2 lg:py-3">
                <input
                  type="text"
                  value={searchBar}
                  onChange={(e) => setSearchBar(e.target.value)}
                  className="bg-gray-200 outline-none text-sm px-2  w-full"
                  placeholder="Search Question"
                />
                <img
                  src={assets.search_icon}
                  alt="search"
                  className="w-7 h-7 md:w-7 md:h-7"
                />
              </div>
            </div>
          </div>

          {/* FAQ List */}
          <div className="lg:text-2xl">
            {faqsToDisplay.length > 0 ? (
              faqsToDisplay.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                 
                />
              ))
            ) : (
              <p className="text-gray-500 mt-2">
                No questions match your search.
              </p>
            )}
          </div>
        </div>
      </div>

              <div className='mt-16 md:w-full hidden md:flex lg:px-20 md:px-15 '>
                  
                  <div className='relative '>
                      <img src={assets.faq_banner1} alt="" />
                    
                      <div className='absolute inset-0 text-white flex flex-col items-center md:items-start md:justify-center justify-end
                      pb-24 md:pb-0 px-4 md:pl-10 lg:pl-14'>
                          <p className='lg:mb-4 md:mb-2 '>Summer Sales</p>
                          <h2 className='lg:mb-3 md:mb-2 font-bold md:text-2xl lg:text-5xl'>Fresh Fruit 
                          </h2>
                          
                          <div className='flex items-center mt-1'> 
                          <Link to={"/products"} className='group flex items-center gap-2 font-medium border border-primary
                          rounded-full md:py-0 lg:py-3 md:px-4 lg:px-9 bg-primary transition cursor-pointer'>Shop now 
                          <img src={assets.arrow_white} alt="" className='w-4 transition group-focus:translate-x-1'/>
                          </Link>
                      </div>
                      </div>
      
                      <div className='absolute inset-0 lg:pl-84  md:pl-50 md:mt-15 lg:mt-28'>
                          <img src={assets.faq_banner2} alt="" className='md:w-15 lg:w-30' />
                      </div>
                      
                  </div>
      
                </div> 
               
    </div>
  );
};

export default Faq;
