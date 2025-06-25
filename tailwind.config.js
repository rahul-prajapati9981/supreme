/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        backgroundImage: {
          footer: "url('/path-to-footer-bg.png')",
        },
      colors: {
        primary: "#0A0A0A",
        accent: "#FF6347",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}

