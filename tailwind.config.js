/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // screens: {
    //   'md': '800px',
    // },
    extend: {
      animation: {
        fade: "fadeOut 3s ease-in",
      },
      keyframes: (theme) => ({
        fadeOut: {
          // "0%": { backgroundColor: theme("") },
          // "100%": { backgroundColor: theme("") },
        },
      }),
    },
  },
  plugins: [],
};
