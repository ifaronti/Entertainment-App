import plugin from "tailwindcss/plugin";

const BUTTON_HEIGHT = 48;
const INPUT_HEIGHT = 37;

export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FC4747",
          dark: "#de0404",
        },
        secondary: {
          DEFAULT: "#10141E",
          light: "#161D2F",
          "very-light": "#5A698F",
        },
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        a: {
          color: theme("colors.primary.DEFAULT"),
          "&:hover": {
            color: theme("colors.primary.dark"),
          },
        },
        ".card": {
          backgroundColor: theme("colors.secondary.light"),
          borderRadius: theme("borderRadius.xl"),
          padding: theme("padding.8"),
        },
        html: {
          color: "white",
          backgroundColor: theme("colors.secondary.DEFAULT"),
        },
        body: {
          fontSize: "15px",
        },
        button: {
          color: theme("colors.secondary.DEFAULT"),
          backgroundColor: "white",
          borderRadius: theme("borderRadius.md"),
          minHeight: `${BUTTON_HEIGHT}px`,
          transitionDelay: theme("transitionDelay.150"),
          transitionDuration: theme("transitionDuration.300"),
          transitionTimingFunction: theme("transitionTimingFunction.ease.in"),
          "&:hover": {
            color: theme("colors.primary.dark"),
            backgroundColor: theme("colors.gray.200"),
          },
          '&:disabled': {
            backgroundColor: theme('colors.gray.100'),
            color: theme('colors.gray.300'),
            opacity: theme('opacity.40'),
          },
          "&.primary": {
            color: "white",
            backgroundColor: theme("colors.primary.DEFAULT"),
            "&:hover": {
              backgroundColor: "gray",
            },
          },
        },
        p: {
          fontSize: "inherit",
        },
        h1: {
          fontSize: "32px",
          fontWeight: "300",
        },
        h2: {
          fontSize: "24px",
          fontWeight: "300",
        },
        h3: {
          fontSize: "24px",
          fontWeight: "500",
        },
        h4: {
          fontSize: "18px",
          fontWeight: "500",
        },
        input: {
          backgroundColor: "transparent",
          borderBottom: `1px solid ${theme("colors.primary.DEFAULT")}`,
          borderRadius: theme("borderRadius.md"),
          minHeight: `${INPUT_HEIGHT}px`,
          padding: theme("padding.2"),
        },
        small: {
          fontSize: "13px",
        },
      });
    }),
  ],
};
