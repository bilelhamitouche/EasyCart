/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "system-ui", "sans-serif"],
      },
      gridTemplateRows: {
        card: "1fr",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
