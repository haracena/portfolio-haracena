/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    // "animation": {
    //   "background-shine": "background-shine 2s linear infinite"
    // },
    // "keyframes": {
    //   "background-shine": {
    //     "from": {
    //       "backgroundPosition": "0 0"
    //     },
    //     "to": {
    //       "backgroundPosition": "-200% 0"
    //     }
    //   }
    // },
    extend: {
      animation: {
        "background-shine": "background-shine 2s linear infinite",
      },
      keyframes: {
        "background-shine": {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        pulse3: {
          "50%": { opacity: 0.15 },
        },
        pulse2: {
          "50%": { opacity: 0.1 },
        },
        pulse1: {
          "50%": { opacity: 0.05 },
        },
        wave: {
          "0%, 100%": { transform: "rotate(-15deg)" },
          "50%": { transform: "rotate(55deg)" },
        },

        wobble: {
          "0%": {
            transform: "translateX(0%)",
          },
          "15%": {
            transform: "translateX(-8%) rotate(-10deg)",
          },
          "30%": {
            transform: "translateX(8%) rotate(6deg)",
          },
          "45%": {
            transform: "translateX(-4%) rotate(-6deg)",
          },
          "60%": {
            transform: "translateX(4%) rotate(4deg)",
          },
          "75%": {
            transform: "translateX(0%) rotate(-2deg)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
