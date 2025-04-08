/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        neon: "#39FF14",
        dark: "#0a0a0a",
      },
      fontFamily: {
        techno: ["Orbitron", "sans-serif"],
      },
      animation: {
        "pulse-bg": "pulseBg 4s ease-in-out infinite",
      },
      keyframes: {
        pulseBg: {
          "0%, 100%": { opacity: "0.1" },
          "50%": { opacity: "0.4" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],

  extend: {
    colors: {
      neon: "#39FF14",
      dark: "#0a0a0a",
    },
  },
};
