/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        border: "#e5e7eb",
      },
      keyframes: {
        "cable-pull": {
          "0%, 100%": {
            height: "30px",
          },
          "50%": {
            height: "60px",
          },
        },
      },
      animation: {
        "cable-pull": "cable-pull 0.5s linear",
      },
    },
  },
  plugins: [],
};
