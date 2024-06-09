/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'head-font': '"Rubik", sans-serif',
        'para-font': '"Noto Sans", sans-serif',
      },
      colors: {
        'blue-clr': '#3399ff',
        'orange-clr': '#ff6600',
        'gray-clr': '6b7280',
      }
    },
  },
  plugins: [],
}