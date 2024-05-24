/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.{html,js}"], // Like this
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
