module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        UbuntuMono: ["Ubuntu Mono", "monospace"],
        RobotoMono: ["Roboto Mono", "monospace"],
      },
      animation: {
        "bounce-slow": "bounce 1s infinite",
      },
    },
  },
  plugins: [],
};
