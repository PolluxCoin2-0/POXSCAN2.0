/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGreen: "#242D22",
        lightestGreen: "#151515",
        darkGreen: "#37DD00",
        lightGray: "#3D403D",
        lightestGray: "#777977",
        lightMidGray: "#222222",
       
      },

      backgroundImage: {
        'green-gradient': 'linear-gradient(to bottom, #0A2301 0%, #151D13 100%)',
      
     
    },
    },
  },
  plugins: [],
}