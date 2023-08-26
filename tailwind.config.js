/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#1D1D1D',
      white: '#FFFFFF',
      gray: '#d3d3d3',
      red: {
        100: '#ed0722',
      },
      blue: {
        100: '#004591',
      },
      green: {
        100: '#4CAF50',
      },
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
