/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#1D1D1D',
        white: '#FFFFFF',
        red: {
          100: '#ed0722',
        },
        blue: {
          100: '#004591',
        },
        // Add all the default Tailwind CSS colors here
        // You can find the full list in the official Tailwind documentation
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};