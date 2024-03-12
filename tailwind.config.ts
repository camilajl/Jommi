import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {

      },
      colors: {
        primary: "#1F363D",
        secondary: "#6B9AC4",
        tertiary: "#F4B942",
        white: "#EFF2F1"
      }
    },
  },
  plugins: [],
};
export default config;
