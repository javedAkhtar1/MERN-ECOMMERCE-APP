import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from "axios"

function Login() {
  const [user, setUser] = useState({email: "", password: ""});

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = (e) => {
    e.preventDefault()
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = axios.post("http://localhost:3000/login", user)
      console.log(response)

    }
    catch (e) {
      console.log("nothing hapened")
      console.log(e.message)
    }
  }

  return (
    <>
      <Navbar />
      <div className="help-container max-w-2xl mx-auto p-6 font-Nunito">
        <h1 className="text-3xl font-bold mb-8 text-center font-Nunito">
          Login
        </h1>

        <section className="mb-2 bg-gray-200 px-8 py-5 rounded-lg">
          <form action="" method="POST" className="flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="email" className="mt-6">
              Email<span className="text-red-500">*</span>:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={user.email}
              onChange={(e) => setUser({...user, email: e.target.value})}
              className="p-1 rounded-md select-none"
              autoComplete="off"
            />
            
            <label htmlFor="message" className="mt-6">
              Password<span className="text-red-500">*</span>:
            </label>

            <div className="flex justify-evenly">
              <input
                name="password"
                id="password"
                type={showPassword ? "text" : "password"}
                required
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                className="p-1 rounded-l-lg resize-none select-none w-full"
                autoComplete="off"
              />
              <button
                onClick={toggleShowPassword}
                className="bg-white p-1 rounded-r-lg"
              >
          
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </button>
            </div>

            <button
              type="submit"
              className="mt-4 border py-1 text-xl w-48 mx-auto rounded-md bg-gray-400 hover:bg-gray-500"
            >
              Login
            </button>
          </form>
          <p className="text-center mt-3 text-sm">
            Do not have an account?{" "}
            <Link to={"/signup"} className="underline text-blue-800">
              Sign up
            </Link>
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Login;
