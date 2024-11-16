import React from "react";
import Home from "./Home"
import Collections from "./Collections"
import Footer from "./Footer"
import FeaturedProducts from "./FeaturedProducts"

function CompleteHome() {
  return (
    <>
      <Home />
      <Collections />
      <FeaturedProducts />
      <Footer />
    </>
  );
}

export default CompleteHome;
