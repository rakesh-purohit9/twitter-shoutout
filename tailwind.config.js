module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "767px" },
      md: { min: "768px", max: "991px" },
    },
    extend: {
      colors: {
        gray_400: "#cac8ca",
        black_900_66: "#00000066",
        black_900: "#101010",
        blue_A700: "#0061ff",
        blue_500: "#1da1f2",
        gray_900: "#232323",
        bluegray_100: "#d2d2d2",
        blue_200: "#a3caf8",
        white_A700: "#ffffff",
        gray_50: "#f2f7fe",
      },
      fontFamily: { gilroy: "Gilroy" },
      borderRadius: { radius6: "6px", radius8: "8px", radius12: "12px" },
      backgroundImage: { gradient: "linear-gradient(135deg ,#a3caf8,#f2f7fe)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
