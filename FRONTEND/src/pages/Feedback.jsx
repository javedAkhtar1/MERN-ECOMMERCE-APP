import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Feedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value); 
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`cursor-pointer text-3xl ${
            i <= rating ? "text-yellow-500" : "text-gray-300"
          }`}
          onClick={() => handleStarClick(i)}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <>
      <Navbar />
      <div className="help-container max-w-5xl mx-auto p-6 font-Nunito">
        <h1 className="text-3xl font-bold mb-8 text-center font-Nunito">
          Feedback
        </h1>

        <section className="mb-8 bg-gray-100 px-8 py-5 rounded-lg">
          <form
            action=""
            method="POST"
            className="flex flex-col"
          >
            <label htmlFor="username">
              Your name<span className="text-red-500">*</span>:
            </label>
            <input
              type="text"
              name="username"
              id="username"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-1 rounded-md select-none"
              autoComplete="off"
            />

            <label htmlFor="email" className="mt-6">
              Your email<span className="text-red-500">*</span>:
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

            <label htmlFor="rating" className="mt-6">
              How would you rate our service?<span className="text-red-500">*</span>
            </label>
            <div className="flex gap-1 select-none">
              {renderStars()}
            </div>

            <label htmlFor="message" className="mt-6">
              Your Feedback<span className="text-red-500">*</span>:
            </label>
            <textarea
              name="message"
              id="message"
              required
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="p-1 rounded-md resize-none h-36 select-none"
              autoComplete="off"
            ></textarea>

            <button
              type="submit"
              className="mt-4 border py-1 text-xl w-48 mx-auto rounded-md bg-gray-300 hover:bg-gray-400"
            >
              Send Feedback
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Feedback;
