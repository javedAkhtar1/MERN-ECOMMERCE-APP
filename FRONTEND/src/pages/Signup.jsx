import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link , useNavigate } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from "axios"

function Signup() {
    const [newUser, setNewuser] = useState({username: "", email: "", password: ""})
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();

    const toggleShowPassword = (e) => {
      e.preventDefault();
      setShowPassword(prev => !prev)
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:3000/signup", newUser)
        // console.log(response)
        if (response.status === 201) {
          window.alert("Signup successful!")
          navigate("/login")
        }
      }
      catch (e) {
        console.log("Signup failed")
        console.log(e)
      }
    }

  return (
    <>
      <Navbar />
      <div className="help-container max-w-2xl mx-auto p-6 font-Nunito">
        <h1 className="text-3xl font-bold mb-8 text-center font-Nunito">
          Signup
        </h1>

        <section className="mb-2 bg-gray-200 px-8 py-5 rounded-lg">
          <form
            action=""
            method="POST"
            className="flex flex-col"
            onSubmit={handleSubmit}
          >
            <label htmlFor="username">
              Username<span className="text-red-500">*</span>:
            </label>
            <input
              type="text"
              name="username"
              id="username"
              required
              value={newUser.username}
              onChange={(e) => setNewuser({...newUser, username: e.target.value})}
              className="p-1 rounded-md select-none"
              autoComplete="off"
            />

            <label htmlFor="email" className="mt-6">
              Email<span className="text-red-500">*</span>:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={newUser.email}
              onChange={(e) => setNewuser({...newUser, email: e.target.value})}
              className="p-1 rounded-md select-none"
              autoComplete="off"
            />

        
            <label htmlFor="password" className="mt-6">
              Password<span className="text-red-500">*</span>:
            </label>
            
            <div className="flex justify-evenly">
            <input
              name="password"
              id="password"
              type={showPassword ? "text" : "password"}
              required
              minLength={6}
              value={newUser.password}
              onChange={(e) => setNewuser({...newUser, password: e.target.value})}
              className="p-1 rounded-l-lg resize-none select-none w-full"
              autoComplete="off"
            />
            <button onClick={toggleShowPassword} 
            className="bg-white p-1 rounded-r-lg"> {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon /> }  </button>
            </div>

            <button
              type="submit"
              className="mt-4 border py-1 text-xl w-48 mx-auto rounded-md bg-gray-400 hover:bg-gray-500"
            >
              Signup
            </button>
          </form>
          <p className="text-center mt-3 text-sm">Already have an account? <Link to={'/login'} className="underline text-blue-800">Login</Link></p>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
