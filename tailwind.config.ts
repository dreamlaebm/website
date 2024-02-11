import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "148": "1.48em",
        "120": "1.20em",
        "100": "1em",
      },
      letterSpacing: {
        "222": "2.22em",
        "148": "1.48em",
        "120": "1.20em",
        "100": "1em",
      },
      colors: {
        "laebm-white": "#ececec",
        "laebm-pink": "#ca068b",
        "laebm-blue": "#00a1dc",
        "laebm-purple": "#943bb9",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
