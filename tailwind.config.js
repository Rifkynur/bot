/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A7FC1",
        secondary: "#1A7FC17D",
        tertary: "#1A7FC1C4",
      },
      fontFamily: {
        Itim: ["Itim", "cursive"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
