import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sky-mist": "#EAF4FB",
        "sky-soft": "#CFE8FA",
        "blush": "#FBE3EC",
        "blush-deep": "#F7C9DC",
        "cream": "#FFFBF7",
        "gold": "#D4AF7A",
        "gold-soft": "#E8D3AE",
        "ink": "#3B3A45",
      },
      fontFamily: {
        script: ["var(--font-script)"],
        body: ["var(--font-body)"],
      },
      backgroundImage: {
        "romantic-gradient":
          "linear-gradient(135deg, #EAF4FB 0%, #FBEEF4 50%, #FBE3EC 100%)",
        "romantic-gradient-deep":
          "linear-gradient(180deg, #0f1128 0%, #221b3a 45%, #3a2244 100%)",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(180, 150, 200, 0.35)",
        gold: "0 0 25px rgba(212, 175, 122, 0.35)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
        fall: {
          "0%": { transform: "translateY(-10vh) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": { transform: "translateY(110vh) rotate(360deg)", opacity: "0.9" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        fall: "fall linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
