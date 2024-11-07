import Home from "./components/Home.jsx"
import Collections from "./components/Collections"
import Footer from "./components/Footer"
import FeaturedProducts from "./components/FeaturedProducts"
import Help from "./pages/Help"
import { Routes, Route } from "react-router"
import CompleteHome from "./components/CompleteHome.jsx"
import ReturnPolicy from "./pages/ReturnPolicy.jsx"
import TermsAndConditions from "./pages/TermsAndConditions.jsx"

function App() {

  return (
    <>
     {/* <Home />
     <Collections />
     <FeaturedProducts />
     <Footer /> */}
     <Routes>
        <Route path="/" element={<CompleteHome />} />
        <Route path="/help" element={<Help />} />
        <Route path="/returnpolicy" element={<ReturnPolicy />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />

      </Routes>
     {/* <Help /> */}
    </>
  )
}

export default App 
