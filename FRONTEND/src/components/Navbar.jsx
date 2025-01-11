import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { loginContext } from "../context/LoginContextProvider";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn } = useContext(loginContext);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="bg-gray-100 p-1">
      <div className="container mx-auto max-w-6xl">
        <nav className="navbar flex justify-between items-center p-2">
          <div className="font-Cormorant font-semibold">PENTA</div>

          <div className="text-sm">
            <ul className="md:flex gap-6 font-Nunito hidden">
              <Link to={"/"} className="hover:cursor-pointer hover:underline focus:outline-none">
                HOME
              </Link>
              <Link to={"/shop"} className="hover:cursor-pointer hover:underline">
                SHOP
              </Link>
              <Link to={"/shop/bestseller"} className="hover:cursor-pointer hover:underline">
                BEST SELLERS
              </Link>
              <Link to={"/contact"} className="hover:cursor-pointer hover:underline">
                CONTACT
              </Link>
              <Link to={"/help"} className="hover:cursor-pointer hover:underline">
                HELP
              </Link>
            </ul>
          </div>
          
          <div className="md:flex hidden gap-6 font-Nunito">
            {isLoggedIn ? (
              <>
                <Link to={"/logout"} className="hover:cursor-pointer hover:underline">
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link to={"/login"} className="hover:cursor-pointer hover:underline">
                  Login
                </Link>
                <Link to={"/signup"} className="hover:cursor-pointer hover:underline">
                  Signup
                </Link>
              </>
            )}
            <Link to={"/cart"} className="hover:cursor-pointer hover:underline text-gray-700">
              <ShoppingCartOutlinedIcon />
            </Link>
          </div>

          {/* On smaller screens */}
          <div className="md:hidden flex gap-4">
            {isLoggedIn ? (
              <>
                <Link to={"/logout"} className="hover:cursor-pointer hover:underline">
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link to={"/login"} className="hover:cursor-pointer hover:underline">
                  Login
                </Link>
                <Link to={"/signup"} className="hover:cursor-pointer hover:underline">
                  Signup
                </Link>
              </>
            )}
            <Link to={"/cart"} className="hover:cursor-pointer hover:underline text-gray-700">
              <ShoppingCartOutlinedIcon />
            </Link>
            <button onClick={toggleMenu}>
              {isMenuOpen ? <ClearIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>
        
        {/* Mobile Navbar */}
        {isMenuOpen && (
          <ul className="md:hidden flex flex-col gap-2 items-center font-Nunito text-sm">
            <Link to={"/"} className="hover:cursor-pointer hover:underline focus:outline-none">
              HOME
            </Link>
            <Link to={"/shop"} className="hover:cursor-pointer hover:underline">
              SHOP
            </Link>
            <Link to={"/shop/bestseller"} className="hover:cursor-pointer hover:underline">
              BEST SELLERS
            </Link>
            <Link to={"/contact"} className="hover:cursor-pointer hover:underline">
              CONTACT
            </Link>
            <Link to={"/help"} className="hover:cursor-pointer hover:underline">
              HELP
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
