/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ts/tsx included just in case
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#1FAA59',       // Modern green
        accent: '#F4F1DE',        // Soft neutral
        textDark: '#1B1B1B',
        textLight: '#888888',
      },
    },
  },
  plugins: [],
}
