import type { Config } from "tailwindcss";

export default {
  content: [
    "./page/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0891B2",
        webGray: "#F4F7F9",
        webPara: "#666666",
        webBgSchool: "#F7F6F4",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "8rem",
        },
      },
      boxShadow: {
        custom: "#88CDD4 0px 2px 12px 1px",
      },
    },
  },
  plugins: [],
} satisfies Config;
