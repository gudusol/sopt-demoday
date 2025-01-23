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
        w95: "#A2A7B0",
        w90: "rgba(255, 255, 255, 0.9)",
        w50: "rgba(255, 255, 255, 0.5)",
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
