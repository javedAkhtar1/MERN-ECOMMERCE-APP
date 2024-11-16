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

function App() {

  return (
    <>
     {/* <Home />
     <Collections />
     <FeaturedProducts />
     <Footer /> */}
     <ScrollToTop />
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
      </Routes>
    </>
  )
}

export default App 
