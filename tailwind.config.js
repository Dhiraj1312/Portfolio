/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0F19",
        surface: "#111827",
        primary: "#8B5CF6",
        secondary: "#6366F1",
        accent: "#EC4899",
        "muted": "#94A3B8",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0, 0, 0, 0.3)",
        glow: "0 0 20px rgba(139, 92, 246, 0.15)",
        "glow-accent": "0 0 20px rgba(236, 72, 153, 0.12)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
}
