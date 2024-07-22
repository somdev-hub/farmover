/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkNavy: "#332941",
        lightGrey: "#F0F2F5",
        brown: "#7D7463",
        grey: "#A5A7B0",
        lightGreen: "#C5E898"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      noScrollbar: {
        scrollbarWidth: "none",
        "::-webkit-scrollbar": {
          display: "none"
        }
      }
    },
    
  },
  plugins: [
    // require('daisyui'),
  ]
};
