/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
      },
      colors: {
        "light-coffee": "#C89F94",
      },
      // animation
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideTop: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        slideDown: "slideDown 0.3s ease-in-out",
        slideTop: "slideTop 0.3s ease-in-out",
      },
      backgroundImage: {
        "bg-image": "url('./images/bg-image.jpg')",
      },
    },
  },
  plugins: [],
};
