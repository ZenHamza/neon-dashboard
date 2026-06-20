import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: { base: "#0A0E17", elevated: "#111827" },
        neon: { cyan: "#00E5FF", amber: "#FF9100", purple: "#D500F9" },
      },
    },
  },
  plugins: [],
} satisfies Config;
