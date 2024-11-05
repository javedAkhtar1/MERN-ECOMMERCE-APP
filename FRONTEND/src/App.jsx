import Home from "./components/Home.jsx"
import Collections from "./components/Collections"
import Footer from "./components/Footer"
import FeaturedProducts from "./components/FeaturedProducts"
import Help from "./pages/Help"
import { Routes, Route } from "react-router"
import CompleteHome from "./components/CompleteHome.jsx"

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
        {/* other routes */}
      </Routes>
     {/* <Help /> */}
    </>
  )
}

export default App 
