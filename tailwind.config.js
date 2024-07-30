/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#394ef4',
        'custom-violet': '#9f5fee',
      },
      gradientColorStops: {
        'custom-start': '#394ef4',
        'custom-end': '#9f5fee',
      },
     },
    },
  
  plugins: [],
}

