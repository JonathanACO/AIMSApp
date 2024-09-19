/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,html,css,ts,js,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#1264a8",
        secondaryColor: "#f3f7fe",
        tertiaryColor: "#666667",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
