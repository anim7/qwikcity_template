// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  mode: "jit",
  purge: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "600px" },
    },
    extend: {
      gridTemplateColumns: {
        posts: "repeat(auto-fill, 19rem)",
      },
    },
  },
  plugins: [],
};
