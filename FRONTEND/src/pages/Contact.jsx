import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="help-container max-w-5xl mx-auto p-6 font-Nunito">
        <h1 className="text-3xl font-bold mb-8 text-center font-Nunito">
          Contact us
        </h1>

        <section className="mb-8 bg-gray-100 px-8 py-5 rounded-lg">
          <form action="https://formspree.io/f/mrbgkbvl" method="POST" className="flex flex-col">
            <label htmlFor="username" className="">
              Username<span className="text-red-500">*</span>:
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username..."
              required
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
              placeholder="email..."
              required
              className="p-1 rounded-md select-none"
              autoComplete="off"
            />

            <label htmlFor="message" className="mt-6">
              Your message<span className="text-red-500">*</span>:
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="message..."
              required
              className="p-1 rounded-md resize-none h-36 select-none"
              autoComplete="off"
            ></textarea>

            <button
              type="submit"
              className="mt-4 border py-1 text-xl w-32 mx-auto rounded-md bg-gray-300 hover:bg-gray-400"
            >
              Send
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
