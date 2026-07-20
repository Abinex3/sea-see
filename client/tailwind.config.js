export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        safety: {
          safe: "#1e9e4a",
          caution: "#e0a800",
          danger: "#d92d2d",
        },
      },
      fontFamily: {
        tamil: ["Noto Sans Tamil", "sans-serif"],
        malayalam: ["Noto Sans Malayalam", "sans-serif"],
        devanagari: ["Noto Sans Devanagari", "sans-serif"],
        latin: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};