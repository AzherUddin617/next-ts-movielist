/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF4547",
        },
        secondary: {
          DEFAULT: "#5A6C90",
          dark: "#161D2F",
          black: "#10141F",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
