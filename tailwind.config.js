/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sidebar-color': '#847577',
        'sidebar-text-color': '#FBFBF2'
      }
    },
  },
  plugins: [],
}

