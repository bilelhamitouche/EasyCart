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
        layout: "auto 1fr auto",
      },
      keyframes: {
        darkMode: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.9)" },
        },
      },
      animation: {
        darkMode: "darkMode 0.3s ease-in-out 1",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
