/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter': ['Inter', 'sans-serif']
      },
      colors:{
        'CWhite': '#FAFAFA'
      },
      screens: {
        sm: { max: "639px" }, // Adjusted max size to cover smaller devices
        md: { min: "640px", max: "767px" }, // Adjusted min size to avoid overlap with sm
        lg: { min: "768px", max: "1024px" }, // Adjusted max size for better differentiation
        xl: { min: "1024px", max: "1279px" }, // Adjusted min size to avoid overlap with lg
        "2xl": { min: "1280px" }, // Introduced a new breakpoint for larger screens
      },

    },
  },
  plugins: [],
}