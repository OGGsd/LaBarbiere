/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      colors: {
        brand: {
          primary: '#000000', // Black - matches the elegant logo
          secondary: '#333333', // Dark gray
          accent: '#ffffff', // White
          text: '#1F2937',
        },
        barbiere: {
          black: '#000000',
          'dark-gray': '#333333',
          'medium-gray': '#666666',
          'light-gray': '#999999',
          'pale-gray': '#f8f9fa',
          white: '#ffffff'
        }
      },
      screens: {
        'mobile': '320px',
        'tablet': '768px',
        'desktop': '1024px',
      },
      aspectRatio: {
        '2/1': '2 / 1',
      }
    },
  },
  plugins: [],
};