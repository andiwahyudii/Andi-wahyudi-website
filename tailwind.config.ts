import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "deep-navy": "#071526",
        navy: "#0B1F3A",
        gold: "#C8A24A",
        "soft-gold": "#E7C873",
        "soft-gray": "#F5F7FA",
        ink: "#111827",
        muted: "#6B7280",
        line: "#E5E7EB",
        success: "#2F855A"
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Montserrat", "Inter", "sans-serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        premium: "0 22px 70px rgba(7, 21, 38, 0.16)",
        card: "0 16px 44px rgba(7, 21, 38, 0.08)",
        gold: "0 12px 34px rgba(200, 162, 74, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
