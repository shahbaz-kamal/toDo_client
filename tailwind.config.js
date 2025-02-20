/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode using 'class'
  theme: {
    extend: {
      colors: {
        light: {
          text: "#110901",
          background: "#fffcfa",
          primary: "#f59223",
          secondary: "#d3f977",
          accent: "#82f644",
        },
        dark: {
          text: "#eaf6f2",
          background: "#040b09",
          primary: "#94d4c0",
          secondary: "#324c7c",
          accent: "#4a4ab5",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
