import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blackBg: "#232323",
      white: "#FFFFFF",
      boxBg: "#323232",
    },
    backgroundImage: {
      main: 'url("https://github.com/cokid1998/portfolio/blob/main/src/assets/images/background-image.jpg?raw=true")',
    },
    screens: {
      sm: { min: "360px", max: "1023px" },
      lg: { min: "1024px" },
    },
  },
  plugins: [],
};
export default config;
