import { Routes, Route } from "react-router";
import Help from "../pages/Help";
import CompleteHome from "../components/CompleteHome.jsx";
import ReturnPolicy from "../pages/ReturnPolicy.jsx";
import TermsAndConditions from "../pages/TermsAndConditions.jsx";
import PrivacyPolicy from "../pages/PrivacyPolicy.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import Contact from "../pages/Contact.jsx";
import Feedback from "../pages/Feedback.jsx";
import Signup from "../pages/Signup.jsx";
import Login from "../pages/Login.jsx";
import Shop from "../components/Shop.jsx";
import CompleteProduct from "../components/CompleteProduct.jsx";
import ProductsContextProvider from "../context/ProductsContextProvider.jsx";
import Trending from "../collection_pages/Trending.jsx";
import Featured from "../collection_pages/Featured.jsx";
import Mens from "../collection_pages/Mens.jsx";
import Womens from "../collection_pages/Womens.jsx";
import Kids from "../collection_pages/Kids.jsx";
import Deals from "../collection_pages/Deals.jsx";
import BestSeller from "../collection_pages/BestSeller.jsx";
import LoginContextProvider from "../context/LoginContextProvider.jsx";
import CartContextProvider from "../context/CartContextProvider.jsx";
import Cart from "../components/Cart.jsx";
import ProtectedRoute from "../routes/ProtectedRoute.jsx";

function Penta() {
  return (
    <>
      <ScrollToTop />
      <CartContextProvider>
        <LoginContextProvider>
          <ProductsContextProvider>
            <Routes>
              <Route path="/" element={<CompleteHome />} />
              <Route path="/help" element={<Help />} />
              <Route path="/returnpolicy" element={<ReturnPolicy />} />
              <Route
                path="/termsandconditions"
                element={<TermsAndConditions />}
              />
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
              <Route path="/cart" element={ <ProtectedRoute> <Cart /> </ProtectedRoute>}></Route> {/* show "in cart" button if already added */}
            </Routes>
          </ProductsContextProvider>
        </LoginContextProvider>
      </CartContextProvider>
    </>
  );
}

export default Penta;
