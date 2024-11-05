import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <>
      <div className="mt-[30px] bg-gray-200">
        <footer className="flex justify-evenly  px-10 py-4">
          <div className="flex flex-col gap-2">
            <h2 className="font-Nunito font-semibold">Information</h2>
            <ul className="text-sm leading-6 hover:cursor-pointer">
              <li className="hover:text-gray-700">Trending</li>
              <li className="hover:text-gray-700">Featured</li>
              <li className="hover:text-gray-700">Men's</li>
              <li className="hover:text-gray-700">Women's</li>
              <li className="hover:text-gray-700">Kids'</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-Nunito font-semibold">Customer Service</h2>
            <ul className="text-sm leading-6 hover:cursor-pointer">
              <li className="hover:text-gray-700">Help and Order</li>
              <li className="hover:text-gray-700">Return Policy</li>
              <li className="hover:text-gray-700">Terms and Conditions</li>
              <li className="hover:text-gray-700">Feedback</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
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
