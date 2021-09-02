module.exports = {
  purge: { content: ["./views/**/*.ejs"], enabled: true },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        98: "calc(100vh - 4rem)",
      },
      colors: {
        blue: {
          darkblue: "#1b1f4d",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
