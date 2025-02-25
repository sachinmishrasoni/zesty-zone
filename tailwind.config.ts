import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // darkBg: "#393646",
        darkBg: {
          DEFAULT: "#040D12", // Base shade
          500: "#06121A", // Lighter shade
          700: "#02080D", // Darker shade
        },
        lightFg: {
          DEFAULT: "#F4EEE0", // F4EEE0, FFF8C9, 
        },
        lightBg: "#FFFFFF",
      },
      maxWidth: {
        xxs: '300px',
        xs: '444px', // Adjust as needed
        sm: '600px',
        md: '900px',
        lg: '1200px',
        xl: '1920px',
        '2xl': '2400px', // Larger container
      },
      animation: {
        scale: "scaleUp 0.3s ease-in-out",
      },
      keyframes: {
        scaleUp: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.25)" },
        },
      },
      fontFamily: {
        geistSans: ["var(--font-geist-sans)", "sans-serif"],
        geistMono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
