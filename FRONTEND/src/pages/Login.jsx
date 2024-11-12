import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  return (
    <>
      <Navbar />
      <div className="help-container max-w-2xl mx-auto p-6 font-Nunito">
        <h1 className="text-3xl font-bold mb-8 text-center font-Nunito">
          Login
        </h1>

        <section className="mb-2 bg-gray-200 px-8 py-5 rounded-lg">
          <form
            action=""
            method="POST"
            className="flex flex-col"
          >

            <label htmlFor="email" className="mt-6">
              Email<span className="text-red-500">*</span>:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-1 rounded-md select-none"
              autoComplete="off"
            />

        
            <label htmlFor="message" className="mt-6">
              Password<span className="text-red-500">*</span>:
            </label>
            <input
              name="password"
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-1 rounded-md resize-none select-none"
              autoComplete="off"
            />

            <button
              type="submit"
              className="mt-4 border py-1 text-xl w-48 mx-auto rounded-md bg-gray-400 hover:bg-gray-500"
            >
              Login
            </button>
          </form>
          <p className="text-center mt-3 text-sm">Do not have an account? <Link to={'/signup'} className="underline text-blue-800">Signup</Link></p>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Login;
