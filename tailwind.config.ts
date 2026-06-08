import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#F8FAFC",
        muted: "#CBD5E1",
        line: "#253244",
        accent: "#F97316",
        accentDark: "#EA580C",
        surface: "#111827"
      },
      boxShadow: {
        soft: "0 18px 55px rgba(0, 0, 0, 0.32)"
      }
    }
  },
  plugins: []
};

export default config;
