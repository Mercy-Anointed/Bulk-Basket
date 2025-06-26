import logo from './logo.png'
import search_icon from './search_icon.png'
import food_basket from './foodbasket.png'
import basket from './Basket.png'
import profile_icon from './profile_icon.png'
import menu_icon from './menu_icon.svg'
import delivery_truck from './delivery-truck 1.png'
import headphones from './headphones 1.png'
import Package from './package.png'
import shopping_bag from './shopping-bag.png'
import main_banner from './mainbanner.png'
import black_arrow from './blackarrow.png'
import image_first from './cat1.png'
import image_b from './cat2.png'
import image_c from './cat3.png'
import image_d from './cat4.png'
import image_e from './cat11.png'
import image_f from './cat5.png'
import image_g from './cat6.png'
import image_h from './cat7.png'
import image_i from './cat9.png'
import image_j from './cat10.png'
import second_banner from './secondbanner.png'
import heart from './Heart.png'
import green_pepper from './best1.png'
import corn from './best2.png'
import potatoes from './best3.png'
import yam from './best4.png'
import cassava from './best5.png'
import chilli from './best6.png'
import star_full from './Star 1.png'
import star_dull from './Star 5.png'
import in_season from './inseason.png'
import banner_1 from './banner1.png'
import banner_2 from './banner2.png'
import basket_bag from './basketbag.png'
import arrow_white from './arrow_icon.png'
import fruit from './Rectangle 20.png'
import fruit_shop from './Frame 34.png'
import fruit_circle from './Ellipse 2.png'
import master_card from './Method=Mastercard.png'
import card_2 from './card.png'
import product1 from './product1.png' 
import product2 from './product2.png'
import product3 from './product3.png' 
import product4 from './product4.png'
import product5 from './product5.png'
import product6 from './product6.png'
import product7 from './product7.png'
import product8 from './product8.png'
import product9 from './product9.png'
import product10 from './product10.png'
import product11 from './product11.png'
import product12 from './product12.png'
import product13 from './product13.png'
import product14 from './product14.png'
import product15 from './product15.png'
import product16 from './product16.png'
import product_banner from './Breadcrumbs (1).png'
import filter_icon from './Funnel.png'
import product_footer from './ProductFooter.png'
import checkbox from './Check.png'
import details_banner from './productDetailsBanner.png'
import filter_up from './filterup.png'
import filter_black from './filterblack.png'
import filter_white from './filterwhite.png'
import category_banner from './categorybanner.png'
import category_frame_5 from './Frame 5.png'
import category_banner1 from './categorybanner1.png'
import category_icon from './Group (3).png'
import about_image2 from './Image (14).png'
import about_image3 from './Group 30.png'
import testify_1 from './Image (15).png'
import testify_2 from './Image (16).png'
import testify_3 from './Image (17).png'
import about_image1 from './Image (18).png'
 import check2 from './check2.png' 
 import icon1 from './icon1.png'
 import icon2 from './icon2.png'
import icon3 from './icon3.png'
import icon4 from './icon4.png'
import icon5 from './icon5.png'
import icon6 from './icon6.png'
import call_icon from './PhoneCall.png'
import location_icon from './Map Pin.png'
import message_icon from './Group (2).png'
import faq_banner1 from './faqbanner1.png'
import faq_banner2 from './Group 5.png'
import plus_icon from './Plus.png'

export const assets = {
    logo,
    search_icon,
    food_basket,
    basket,
    profile_icon,
    menu_icon,
    delivery_truck,
    headphones,
    Package,
    shopping_bag,
    main_banner,
    black_arrow,
    second_banner,
    heart,
    star_full,
    star_dull,
    in_season,
    banner_1,
    banner_2,
    basket_bag,
    arrow_white,
    fruit,
    fruit_circle,
    fruit_shop,
    master_card,
    card_2,
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
    product9,
    product10,
    product11,
    product12,
    product13,
    product14,
    product15,
    product16,
    product_banner,
    filter_icon,
    product_footer,
    checkbox,
    details_banner,
    filter_up,
    filter_white,
    filter_black,
    category_banner1,
    category_banner,
    category_frame_5,
    category_icon,
    about_image1,
    about_image2,
    about_image3,
     check2, 
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6, 
    testify_1,
    testify_2,
    testify_3,
    call_icon,
    message_icon,
    location_icon,
    faq_banner1,
    faq_banner2,
    plus_icon,
}

export const categories = [
    {text:"Fresh Fruit",
    path:"fruits",
    Image:image_first,
    bgColor:""

    },
    {text:"Fresh Vegetables",
    path:"vegetables",
    Image:image_b,
    bgColor:""

    },
    {text:"Meat & Fish",
    path:"meat & fish",
    Image:image_c,
    bgColor:""

    },
    {text:"Packaged Food",
    path:"packaged food",
    Image:image_d,
    bgColor:""

    },
    {text:"Beverages",
    path:"beverages",
    Image:image_e,
    bgColor:""

    },
    {text:"Detergents",
    path:"detergents",
    Image:image_f,
    bgColor:""

    },
    {text:"Bread & Bakery",
    path:"snacks",
    Image:image_g,
    bgColor:""

    },
    {text:"Tubers & Grains",
    path:"tubers & grains",
    Image:image_h,
    bgColor:""

    },
    {text:"Cooking items",
    path:"cooking items",
    Image:image_i,
    bgColor:""

    },
    {text:"Oil",
    path:"oil",
    Image:image_j,
    bgColor:""

    },
]

export const dummyProducts= [
    {_id:"gd41g31h",
    name:"Green Pepper",
    amount:600,
    offerPrice:900,
    image:[green_pepper],
    category:"cooking items",
     weight:"/per 1",
    description: ["you are buying from a trusted, approved vendor with a proven record of delivering high-quality foodstuffs in bulk. All product are carefully sourced, measured and packaged to ensure freshness, accuracy, and firmly delivery. Shop confidently! What you order is exactly what you'll get, no surprises."],
     inStock:true,
       off:64,
       rating: 4.7,
       window:"june 12-14 2025",
    },
    {_id:"gd42g32h",
    name:"Corn",
    amount:3500,
    offerPrice:4000,
    image:[corn],
    category:"tubers & grains",
     weight:"/per kg",
   description: ["you are buying from a trusted, approved vendor with a proven record of delivering high-quality foodstuffs in bulk. All product are carefully sourced, measured and packaged to ensure freshness, accuracy, and firmly delivery. Shop confidently! What you order is exactly what you'll get, no surprises."],
     inStock:true,
       off:64,
       rating: 4.7,
         window:"june 12-14 2025",
    },
    {_id:"gd43g33h",
    name:"Irish Potatoes",
    amount:3500,
    offerPrice:4000,
    image:[potatoes],
    category:"tubers & grains",
    weight:"/per kg",
    description: ["you are buying from a trusted, approved vendor with a proven record of delivering high-quality foodstuffs in bulk. All product are carefully sourced, measured and packaged to ensure freshness, accuracy, and firmly delivery. Shop confidently! What you order is exactly what you'll get, no surprises."],
     inStock:true,
       off:64,
        rating: 4.7,
          window:"june 12-14 2025",
    },
    {_id:"gd44g34h",
    name:"Yam",
    amount:4000,
     offerPrice:4500,
    image:[yam],
    category:"tubers & grains",
     weight:"/per tuber",
    description: ["you are buying from a trusted, approved vendor with a proven record of delivering high-quality foodstuffs in bulk. All product are carefully sourced, measured and packaged to ensure freshness, accuracy, and firmly delivery. Shop confidently! What you order is exactly what you'll get, no surprises."],
     inStock:true,
       off:64,
        rating: 4.7,
          window:"june 12-14 2025",
    },
    {_id:"gd45g35h",
    name:"Cassava",
    amount:1500,
     offerPrice:2000,
    image:[cassava],
    category:"tubers & grains",
     weight:"/per kg",
   description: ["you are buying from a trusted, approved vendor with a proven record of delivering high-quality foodstuffs in bulk. All product are carefully sourced, measured and packaged to ensure freshness, accuracy, and firmly delivery. Shop confidently! What you order is exactly what you'll get, no surprises."],
     inStock:true,
       off:64,
        rating: 4.7,
          window:"june 12-14 2025",
    },
    {_id:"gd46g36h",
    name:"Chilli (Shambo)",
    amount:1500,
     offerPrice:2000,
    image:[chilli],
    category:"cooking items",
    weight:"/per kg",
    description: ["you are buying from a trusted, approved vendor with a proven record of delivering high-quality foodstuffs in bulk. All product are carefully sourced, measured and packaged to ensure freshness, accuracy, and firmly delivery. Shop confidently! What you order is exactly what you'll get, no surprises."],
    inStock:true,
      off:64,
       rating: 4.7,
         window:"june 12-14 2025",
    },
    {_id:"gd47g37h",
    name:"Fresh Tomatoes",
    amount:2200,
     offerPrice:3000,
    image:[in_season],
    category:"vegetables",
    weight:"/per kg",
    description: ["you are buying from a trusted, approved vendor with a proven record of delivering high-quality foodstuffs in bulk. All product are carefully sourced, measured and packaged to ensure freshness, accuracy, and firmly delivery. Shop confidently! What you order is exactly what you'll get, no surprises."],
    inStock:true,
      off:64,
       rating: 4.7,
         window:"june 12-14 2025",
    },
    {_id:"gd48g38h",
    name:"Irish Potatoes",
    amount:3500,
     offerPrice:4000,
    image:[product1],
    category:"tubers & grains",
    weight:"/per kg",
    description: ["you are buying from a trusted, approved vendor with a proven record of delivering high-quality foodstuffs in bulk. All product are carefully sourced, measured and packaged to ensure freshness, accuracy, and firmly delivery. Shop confidently! What you order is exactly what you'll get, no surprises."],
    inStock:true,
      off:64,
       rating: 4.7,
         window:"june 12-14 2025",
    },
    {_id:"gd49g39h",
    name:"Chinese Cabbage",
    amount:3500,
     offerPrice:4000,
    image:[product2],
    category:"vegetables",
    weight:"/per kg",
   description: ["you are buying from a trusted, approved vendor with a proven record of delivering high-quality foodstuffs in bulk. All product are carefully sourced, measured and packaged to ensure freshness, accuracy, and firmly delivery. Shop confidently! What you order is exactly what you'll get, no surprises."],
    inStock:true,
      off:64,
       rating: 4.7,
         window:"june 12-14 2025",
    },
    {_id:"gd50g40h",
    name:"Frozen Chicken",
    amount:19500,
     offerPrice:20000,
    image:[product3],
    category:"meat & fish",
    weight:"/per kg",
   description: ["you are buying from a trusted, approved vendor with a proven record of delivering high-quality foodstuffs in bulk. All product are carefully sourced, measured and packaged to ensure freshness, accuracy, and firmly delivery. Shop confidently! What you order is exactly what you'll get, no surprises."],
    inStock:true,
      off:64,
      rating: 4.7,
         window:"june 12-14 2025",
    },
    {_id:"gd51g41h",
    name:"Corn",
    amount:1500,
     offerPrice:2000,
    image:[product4],
    category:"tubers & grains",
    weight:"/per kg",
    description: ["you are buying from a trusted, approved vendor with a proven record of delivering high-quality foodstuffs in bulk. All product are carefully sourced, measured and packaged to ensure freshness, accuracy, and firmly delivery. Shop confidently! What you order is exactly what you'll get, no surprises."],
    inStock:true,
      off:64,
       rating: 4.7,
         window:"june 12-14 2025",
    },
    {_id:"gd52g42h",
    name:"Green Bell Pepper",
    amount:3500,
     offerPrice:4000,
    image:[product5],
    category:"cooking items",
    weight:"/per kg",
    description: ["you are buying from a trusted, approved vendor with a proven record of delivering high-quality foodstuffs in bulk. All product are carefully sourced, measured and packaged to ensure freshness, accuracy, and firmly delivery. Shop confidently! What you order is exactly what you'll get, no surprises."],
    inStock:true,
      off:64,
       rating: 4.7,
         window:"june 12-14 2025",
    },
    {_id:"gd53g43h",
    name:"Green Chilli",
    amount:3500,
     offerPrice:4000,
    image:[product6],
    category:"cooking items",
    weight:"/per kg",
   description: ["you are buying from a trusted, approved vendor with a proven record of delivering high-quality foodstuffs in bulk. All product are carefully sourced, measured and packaged to ensure freshness, accuracy, and firmly delivery. Shop confidently! What you order is exactly what you'll get, no surprises."],
    inStock:true,
      off:64,
       rating: 4.7,
         window:"june 12-14 2025",
    },
    {_id:"gd54g44h",
    name:"Goat Meat",
    amount:3500,
     offerPrice:4000,
    image:[product7],
    category:"meat & fish",
    weight:"/per kg",
    description: ["you are buying from a trusted, approved vendor with a proven record of delivering high-quality foodstuffs in bulk. All product are carefully sourced, measured and packaged to ensure freshness, accuracy, and firmly delivery. Shop confidently! What you order is exactly what you'll get, no surprises."],
    inStock:true,
      off:64,
       rating: 4.7,
         window:"june 12-14 2025",
    },
    {_id:"gd55g45h",
    name:"Golden Circle Oil",
    amount:3500,
     offerPrice:4000,
    image:[product8],
    category:"oil",
    weight:"/per kg",
    description: ["you are buying from a trusted, approved vendor with a proven record of delivering high-quality foodstuffs in bulk. All product are carefully sourced, measured and packaged to ensure freshness, accuracy, and firmly delivery. Shop confidently! What you order is exactly what you'll get, no surprises."],
    inStock:true,
      off:64,
       rating: 4.7,
         window:"june 12-14 2025",
    },
    {_id:"gd56g46h",
    name:"Yam",
    amount:3500,
     offerPrice:4000,
    image:[product9],
    category:"tubers & grains",
    weight:"/per kg",
    description: ["you are buying from a trusted, approved vendor with a proven record of delivering high-quality foodstuffs in bulk. All product are carefully sourced, measured and packaged to ensure freshness, accuracy, and firmly delivery. Shop confidently! What you order is exactly what you'll get, no surprises."],
    inStock:true,
      off:64,
       rating: 4.7,
         window:"june 12-14 2025",
    },
    {_id:"gd57g47h",
    name:"Okra",
    amount:3500,
     offerPrice:4000,
    image:[product10],
    category:"vegetables",
    weight:"/per kg",
   description: ["you are buying from a trusted, approved vendor with a proven record of delivering high-quality foodstuffs in bulk. All product are carefully sourced, measured and packaged to ensure freshness, accuracy, and firmly delivery. Shop confidently! What you order is exactly what you'll get, no surprises."],
    inStock:true,
      off:64,
       rating: 4.7,
         window:"june 12-14 2025",
    },
    {_id:"gd58g48h",
    name:"Palm Oil",
    amount:3500,
     offerPrice:4000,
    image:[product11],
    category:"oil",
    weight:"/per kg",
    description: ["you are buying from a trusted, approved vendor with a proven record of delivering high-quality foodstuffs in bulk. All product are carefully sourced, measured and packaged to ensure freshness, accuracy, and firmly delivery. Shop confidently! What you order is exactly what you'll get, no surprises."],
    inStock:true,
     off:64,
      rating: 4.7,
        window:"june 12-14 2025",
    },
    {_id:"gd59g49h",
    name:"Red Bell Pepper",
    amount:3500,
     offerPrice:4000,
    image:[product12],
    category:"cooking items",
    weight:"/per kg",
   description: ["you are buying from a trusted, approved vendor with a proven record of delivering high-quality foodstuffs in bulk. All product are carefully sourced, measured and packaged to ensure freshness, accuracy, and firmly delivery. Shop confidently! What you order is exactly what you'll get, no surprises."],
    inStock:true,
     off:20,
      rating: 4.7,
        window:"june 12-14 2025",
    },
    {_id:"gd60g50h",
    name:"Red Chilli",
    amount:3500,
     offerPrice:4000,
    image:[product13],
    category:"cooking items",
    weight:"/per kg",
    description: ["you are buying from a trusted, approved vendor with a proven record of delivering high-quality foodstuffs in bulk. All product are carefully sourced, measured and packaged to ensure freshness, accuracy, and firmly delivery. Shop confidently! What you order is exactly what you'll get, no surprises."],
    inStock:true,
     off:20,
      rating: 4.7,
        window:"june 12-14 2025",
    },
    {_id:"gd61g51h",
    name:"Fresh Tomato",
    amount:3500,
     offerPrice:4000,
    image:[product14],
    category:"vegetables",
    weight:"/per kg",
   description: ["you are buying from a trusted, approved vendor with a proven record of delivering high-quality foodstuffs in bulk. All product are carefully sourced, measured and packaged to ensure freshness, accuracy, and firmly delivery. Shop confidently! What you order is exactly what you'll get, no surprises."],
    inStock:true,
     off:20,
      rating: 4.7,
        window:"june 12-14 2025",
    },
    {_id:"gd62g52h",
    name:"Green Beans",
    amount:3500,
     offerPrice:4000,
    image:[product15],
    category:"vegetables",
    weight:"/per kg",
   description: ["you are buying from a trusted, approved vendor with a proven record of delivering high-quality foodstuffs in bulk. All product are carefully sourced, measured and packaged to ensure freshness, accuracy, and firmly delivery. Shop confidently! What you order is exactly what you'll get, no surprises."],
    inStock:true,
     off:20,
      rating: 4.7,
        window:"june 12-14 2025",
    },
    {_id:"gd63g53h",
    name:"Native Goat (mkpi)",
    amount:10600,
     offerPrice:10900,
    image:[product16],
    category:"meat & fish",
    weight:"/per kg",
    description: ["you are buying from a trusted, approved vendor with a proven record of delivering high-quality foodstuffs in bulk. All product are carefully sourced, measured and packaged to ensure freshness, accuracy, and firmly delivery. Shop confidently! What you order is exactly what you'll get, no surprises."],
    inStock:true,
    off:20,
     rating: 4.7,
       window:"june 12-14 2025",
    },
]

export const footerLinks = [
    {
        title:"Company",
        links:[
            {text:"About us", url:"#"},
            {text:"Contact us", url:"#"},
            {text:"FAQs", url:"#"},
        ]
    },

    {
        title:"Privacy & Terms",
        links:[
            {text:"Payment policy", url:"#"},
            {text:"Privacy policy", url:"#"},
            {text:"Return policy", url:"#"},
            {text:"Shipping policy", url:"#"},
            {text:"Terms & condition", url:"#"},
        ]
    },
    {
        title:"Categories",
        links:[
            {text:"Fresh Fruit", url:"#"},
            {text:"Fresh Vegetables", url:"#"},
            {text:"Meat & fish", url:"#"},
            {text:"Bread & Bakery", url:"#"},
            {text:"Tubers & Grains", url:"#"},
            {text:"Beverages", url:"#"},
            {text:"Detergents", url:"#"},
            {text:"Packaged Food", url:"#"},
            {text:"Cooking Essentials & Oils", url:"#"},
        ]
    },
    {
        title:"My Account",
        links:[
            {text:"My account", url:"#"},
            {text:"My Cart", url:"#"},
            {text:"Order history", url:"#"},
            {text:"My wishlist", url:"#"},
            {text:"My address", url:"#"},
            
        ]
    },
    {
        title:"Socials",
        links:[
            {text:"Facebook", url:"#"},
            {text:"Instagram", url:"#"},
            {text:"Twitter", url:"#"},
           
            
        ]
    },
]