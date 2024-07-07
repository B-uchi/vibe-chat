import type { Config } from "tailwindcss";

interface fontFamilyInterface {
  [key: string]: string[];
}
const fontFamily: fontFamilyInterface = {
  rowdies: ['Rowdies', 'sans-serif'],
  poppins: ['Poppins', 'sans-serif'],
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: fontFamily,
    },
  },
  plugins: [],
};
export default config;