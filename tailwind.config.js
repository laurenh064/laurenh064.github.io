/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif']
    },
    extend: {
      colors: {
        "raisin-dark": "#2C4304",
        "raisin": "#241E29",
        "sun": "#E0BF6F",
        "artichoke": "#84AB41",
        "sea": "#19647E"
      },
    },
  },
  plugins: [],
}

