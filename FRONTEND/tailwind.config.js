/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Cormorant": ["Cormorant", "serif"],
        "Nunito": ["Nunito", "serif"],
        "Rubik": ["Rubik", "sans-serif"]
      }
    },
  },
  plugins: [],
}

