/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'btn-color': '#deb069',
        'dark-blue': '#1E2B3D'
      }
    },
  },
  plugins: [require("daisyui")],
}

