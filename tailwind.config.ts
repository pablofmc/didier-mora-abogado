import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0F172A",
        gold: "#C9A96A",
        cream: "#F7F3EE",
        text: "#1F2937",
        muted: "#6B7280"
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px -40px rgba(15, 23, 42, 0.45)",
        card: "0 18px 40px -32px rgba(15, 23, 42, 0.5)"
      }
    }
  },
  plugins: []
};

export default config;
