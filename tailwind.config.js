/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,js,ts,tsx,jsx}', // Adjust the path to your source folder
    './src/components/**/*.{html,js,ts,tsx,jsx}', // If you have a components directory
    './src/pages/**/*.{html,js,ts,tsx,jsx}', // If using a Next.js or similar setup
  ],
  theme: {
    extend: {
      fontFamily: {
        'archivoBlack': ['ArchivoBlack', "Arial", "sans-serif"],
        'comfortaa': ['Comfortaa', "Arial", "sans-serif"],
        'rubikDoodle': ['RubikDoodle', "Arial", "sans-serif"],
        'teko': ['Teko', "Arial", "sans-serif"],
        'sunsetTrees': ['SunsetTrees', "Arial", "sans-serif"],
      },
      colors: {
        charcoalGray: '#2C2C2C', // Primary background color
        deepBlue: '#1F3C88',     // Headers, navigation, and buttons
        warmGold: '#F2C14E',     // Highlights and important text
        softWhite: '#F5F5F5',    // Backgrounds and text areas
        mintGreen: '#81C784',    // Call-to-action and hover effects
        mintGreenLight: '#8daca2',
      }
    },
    screens: {
      sm: '480px', // Mobile
      md: '768px', // Tablets
      lg: '1024px', // Desktop
    },
  },
  plugins: [],
}
