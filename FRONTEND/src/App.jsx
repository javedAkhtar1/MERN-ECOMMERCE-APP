import Home from "./components/Home.jsx"
import Collections from "./components/Collections"
import Footer from "./components/Footer"
import FeaturedProducts from "./components/FeaturedProducts"
import Help from "./pages/Help"
import { Routes, Route } from "react-router"
import CompleteHome from "./components/CompleteHome.jsx"
import ReturnPolicy from "./pages/ReturnPolicy.jsx"
import TermsAndConditions from "./pages/TermsAndConditions.jsx"
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx"
import ScrollToTop from "./components/ScrollToTop.jsx"
import Contact from "./pages/Contact.jsx"
import Feedback from "./pages/Feedback.jsx"
import Signup from "./pages/Signup.jsx"
import Login from "./pages/Login.jsx"
import Shop from "./components/Shop.jsx"
import CompleteProduct from "./components/CompleteProduct.jsx"
import ProductsContextProvider from "./context/ProductsContextProvider.jsx"
import Trending from "./collection_pages/Trending.jsx"
import Featured from "./collection_pages/Featured.jsx"
import Mens from "./collection_pages/Mens.jsx"
import Womens from "./collection_pages/Womens.jsx"
import Kids from "./collection_pages/Kids.jsx"
import Deals from "./collection_pages/deals.jsx"
import BestSeller from "./collection_pages/BestSeller.jsx"

function App() {

  return (
    <>
     {/* <Home />
     <Collections />
     <FeaturedProducts />
     <Footer /> */}
     <ScrollToTop />
     <ProductsContextProvider>
     <Routes>
        <Route path="/" element={<CompleteHome />} />
        <Route path="/help" element={<Help />} />
        <Route path="/returnpolicy" element={<ReturnPolicy />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/product/:id" element={<CompleteProduct />} />
        <Route path="/shop/trending" element={<Trending />}></Route>
        <Route path="/shop/featured" element={<Featured />}></Route>
        <Route path="/shop/men" element={<Mens />}></Route>
        <Route path="/shop/women" element={<Womens />}></Route>
        <Route path="/shop/kids" element={<Kids />}></Route>
        <Route path="/shop/deals" element={<Deals />}></Route>
        <Route path="/shop/bestseller" element={<BestSeller />}></Route>
      </Routes>
     </ProductsContextProvider>
    </>
  )
}

export default App 
