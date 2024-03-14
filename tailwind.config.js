/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif']
    },
    extend: {
      colors: {
        "raisin-dark": "#131019",
        "raisin": "#241E29",
        "sun": "#FFC857",
        "artichoke": "#7EA16B",
        "sea": "#19647E"
      },
    },
  },
  plugins: [],
}

