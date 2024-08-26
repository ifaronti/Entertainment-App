import plugin from "tailwindcss/plugin";

const BUTTON_HEIGHT = 48;
const INPUT_HEIGHT = 37;

export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FC4747",
        },
        secondary: {
          DEFAULT: "#10141E",
          light: "#161D2F",
          "very-light": "#5A698F"
        },
      },
    },
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        a: {
          color: theme("colors.primary.DEFAULT")
        },
        ".card": {
          backgroundColor: theme("colors.secondary.light"),
          borderRadius: theme('borderRadius.xl'),
          padding: theme('padding.8'),
        },
        html: {
          color: "white",
          backgroundColor: theme("colors.secondary.DEFAULT")
        },
        body: {
          fontSize: "15px"
        },
        button: {
          color: "white",
          backgroundColor: theme("colors.primary.DEFAULT"),
          borderRadius: theme('borderRadius.md'),
          minHeight: `${BUTTON_HEIGHT}px`,
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
        input: {
          backgroundColor: "transparent",
          borderBottom: `1px solid ${theme("colors.primary.DEFAULT")}`,
          minHeight: `${INPUT_HEIGHT}px`,
        },
        small: {
          fontSize: "13px"
        }
      });
    }),
  ],
};
