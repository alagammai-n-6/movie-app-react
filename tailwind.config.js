/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // scans all TS/TSX files
  ],
  theme: {
    extend: {}, // add custom colors, fonts here if needed
  },
  plugins: [],
};