import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router";

function Feedback() {
  const [feedback, setFeedback] = useState({user: "", email: "", message: "", rating: 0});
  const navigate = useNavigate()
  
  const handleStarClick = (value) => {
    setFeedback({...feedback, rating: value}); 
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`cursor-pointer text-3xl ${
            i <= feedback.rating ? "text-yellow-500" : "text-gray-300"
          }`}
          onClick={() => handleStarClick(i)}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/feedback", feedback);
      if (response.status === 201) {
        window.alert("Feedback submitted successfully!");
        navigate("/");
      }
    } catch (err) {
      console.log("Feedback not submitted");
      console.log(err.message);
    }
  }

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
            onSubmit={handleSubmit}
          >
            <label htmlFor="user">
              Your name<span className="text-red-500">*</span>:
            </label>
            <input
              type="text"
              name="user"
              id="user"
              required
              value={feedback.user}
              onChange={(e) => setFeedback({...feedback, user: e.target.value})}
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
              value={feedback.email}
              onChange={(e) => setFeedback({...feedback, email: e.target.value})}
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
              maxLength={2000}
              required
              value={feedback.message}
              onChange={(e) => setFeedback({...feedback, message: e.target.value})}
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
