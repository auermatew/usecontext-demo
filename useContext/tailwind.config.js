module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: "#1a202c",
          card: "#2d3748",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
