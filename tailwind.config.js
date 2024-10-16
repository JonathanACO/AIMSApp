/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,html,css,ts,js,tsx,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#1264a8",
        secondary: "#f3f7fe",
        tertiary: "#666667",
      },
    },
  },
  plugins: [],
};
