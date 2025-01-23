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
      fontSize: {
        body1_b_11: ["11px", { lineHeight: "145%", letterSpacing: "0%" }],
        body2_r_11: ["11px", { lineHeight: "165%", letterSpacing: "0%" }],
        body3_r_14: ["14px", { lineHeight: "170%", letterSpacing: "-0.01em" }],
        body4_r_12: ["12px", { lineHeight: "170%", letterSpacing: "-0.01em" }],
        title1_m_15: ["15px", { lineHeight: "150%", letterSpacing: "-0.03em" }],
        title2_b_14: ["14px", { lineHeight: "140%", letterSpacing: "-0.02em" }],
        title3_b_18: ["18px", { lineHeight: "150%", letterSpacing: "-0.02em" }],
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        bold: "700",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
} satisfies Config;
