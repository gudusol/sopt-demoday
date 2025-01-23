import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        w100: "#FFFFFF",
        w95: "rgba(255, 255, 255, 0.95)",
        w90: "rgba(255, 255, 255, 0.9)",
        w80: "rgba(255, 255, 255, 0.8)",
        w60: "rgba(255, 255, 255, 0.6)",
        w50: "rgba(255, 255, 255, 0.5)",
        w20: "rgba(255, 255, 255, 0.2)",
        bg: "#202226",
        black: "#000000",
        blue: "#5BA3FF",
      },
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
        suit: ["SUIT", "sans-serif"],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
} satisfies Config;
