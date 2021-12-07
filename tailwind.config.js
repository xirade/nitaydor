// tailwind.config.js
module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['"Rubik"', "sans-serif"]
      },
      height: {
        "108": "42rem",
      },
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("tailwindcss-rtl")]
};
