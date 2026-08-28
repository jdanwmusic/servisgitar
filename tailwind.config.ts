import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0A0A0C",
          surface: "#111114",
          surface2: "#1A1A1F",
          border: "#2A2A33",
          muted: "#3A3A44",
          text: "#B0B0BC",
          "text-primary": "#E8E8F0",
          accent: "#C9A84C",
          "accent-dark": "#A07830",
          "accent-glow": "#C9A84C40",
          danger: "#D94F4F",
          success: "#4FA86A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      backgroundImage: {
        "noise-dark": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
        "gradient-brand": "linear-gradient(135deg, #C9A84C 0%, #A07830 100%)",
        "gradient-hero": "radial-gradient(ellipse at top, #1A1A22 0%, #0A0A0C 70%)",
      },
      boxShadow: {
        "gold-sm": "0 0 0 1px #C9A84C33, 0 2px 8px #C9A84C18",
        "gold-md": "0 0 0 1px #C9A84C44, 0 4px 20px #C9A84C22",
        "gold-lg": "0 0 0 1px #C9A84C55, 0 8px 40px #C9A84C30",
        "surface": "0 1px 0 #2A2A33, 0 4px 16px #00000040",
      },
      borderRadius: { DEFAULT: "6px", sm: "4px", lg: "10px", xl: "16px" },
    },
  },
  plugins: [],
};
export default config;
