import type { Config } from "tailwindcss";
import entertainmentApp from "./tailwind/entertainment-app";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      'sm': '350px',

      'md': '700px',

      'lg': '849px',

      'xl': '1200px',

      '2xl': '1536px',
    }
  },
  presets: [
    entertainmentApp
  ]
};
export default config;
