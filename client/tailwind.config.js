/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandPrimary: "#ffffff",
        textPrimary: "black",
        textSecondary: "#6C7275",
        background: "#F3F5F7",
      },
    },
  },
  plugins: [],
};
