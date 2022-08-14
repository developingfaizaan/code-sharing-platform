module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#7F46F0",
        primaryDark: "#7334EF",
        black100: "#131519",
        black200: "#191D23",
        black300: "#282D37",
        white: "#FFFFFF",
        white700: "#9EACC7",
        white400: "#4C5463",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
