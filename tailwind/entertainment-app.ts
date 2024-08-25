import plugin from "tailwindcss/plugin";

export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FC4747",
        },
        secondary: {
          DEFAULT: "#10141E",
          light: "#5A698F"
        },
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        body: {
          fontSize: "15px"
        },
        p: {
          fontSize: "inherit"
        },
        h1: {
          fontSize: "32px"
        },
        h2: {
          fontSize: "24px"
        },
        h3: {
          fontSize: "18px"
        },
        small: {
          fontSize: "13px"
        }
      });
    }),
  ],
};
