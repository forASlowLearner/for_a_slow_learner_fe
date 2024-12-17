module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#6DA457",
      },
      button: {
        positive: {
          color: "#fff",
          backgroundColor: "#6DA457",
          "&:hover": {
            backgroundColor: "#6DA444",
          },
        },
        negative: {
          color: "#fff",
          backgroundColor: "#E53E3E",
          "&:hover": {
            backgroundColor: "#E53E33",
          },
        },
        multi: {
          backgroundColor: "#ffffff",
          "&:hover": {
            backgroundColor: "#ffffee",
          },
        },
      },
    },
  },
  plugins: [],
};
