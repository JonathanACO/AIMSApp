/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,html,css,ts,js,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1265a8",
        secondary: "#f3f7fe",
        tertiary: "#666667",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
