/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4650a0',
        backdrop: 'rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}

