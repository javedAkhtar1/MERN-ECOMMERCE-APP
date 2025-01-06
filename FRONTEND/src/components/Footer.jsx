import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="mt-[30px] bg-gray-200">
        <footer className="flex flex-col items-center sm:flex-row sm:justify-evenly sm:items-start  sm:px-10 px-4 py-4 gap-3">
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-1 sm:gap-2">
            <h2 className="font-Nunito font-semibold">Information</h2>
            <ul className="text-sm leading-6 hover:cursor-pointer flex flex-col">
              <Link to={"/shop/trending"} className="hover:text-gray-700">Trending</Link>
              <Link to={"/shop/featured"} className="hover:text-gray-700">Featured</Link>
              <Link to={"/shop/men"} className="hover:text-gray-700">Men's</Link>
              <Link to={"/shop/women"} className="hover:text-gray-700">Women's</Link>
              <Link to={"/shop/kids"} className="hover:text-gray-700">Kids'</Link>
            </ul>
          </div>
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-1 sm:gap-2">
            <h2 className="font-Nunito font-semibold">Customer Service</h2>
            <ul className="text-sm leading-6 hover:cursor-pointer flex flex-col">
              <Link to={'/privacypolicy'} className="hover:text-gray-700">Privacy Policy</Link>
              <Link to={'/returnpolicy'} className="hover:text-gray-700">Return Policy</Link>
              <Link to={'/termsandconditions'} className="hover:text-gray-700">Terms and Conditions</Link>
              <Link to={'/feedback'} className="hover:text-gray-700">Feedback</Link>
            </ul>
          </div>
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-1 sm:gap-2">
            <h2 className="font-Nunito font-semibold"> Connect  </h2>
            <ul className="text-sm leading-8 hover:cursor-pointer">
              <li className="hover:text-gray-700"> <a href="https://x.com/javed999_" target="_blank"> <XIcon/> </a>  </li>
              <li className="hover:text-gray-700"> <a href="https://www.linkedin.com/in/javed-akhtar-85012b2a3/" target="_blank"> <LinkedInIcon /> </a> </li>
              <li className="hover:text-gray-700"> <a href="https://www.instagram.com/javed999_/" target="_blank"> <InstagramIcon /> </a> </li>
            </ul>
          </div>
        </footer>
        <p className="text-center text-xs pb-3 font-Nunito"> &#169; 2024 Penta. All rights reserved. </p>
      </div>
    </>
  );
}

export default Footer;
