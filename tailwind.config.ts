import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C3D4F",
        secondary: "#EE7738",
      },
      gridTemplateRows: {
        "8": "repeat(8, minmax(0, 1fr))",
        "16": "repeat(16, minmax(0, 1fr))",
        "32": "repeat(32, minmax(0, 1fr))",
      },
      gridTemplateColumns: {
        "8": "repeat(8, minmax(0, 1fr))",
        "16": "repeat(16, minmax(0, 1fr))",
        "32": "repeat(32, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
