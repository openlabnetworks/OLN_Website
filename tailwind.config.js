/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'rgba(2,0,36,1)',
        'light-blue': 'rgba(10,118,230,100)',
        'gradient-blue': 'rgba(12,12,140,0.975)',
        'gradient-dark-blue': 'rgba(9,18,127,1)',
      },
    },
  },
  plugins: [],
}

