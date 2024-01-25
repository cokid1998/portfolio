import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      circleBorderGreen: "#3a866d",
      borderGreen: "#5CA991",
      titleGreen: "18C990",
      subtitleGreen: "#19CB91",
      boxBgGreen: "#0a5840",
      blackBg: "#232323",
      grayBg: "#515151",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
export default config;
