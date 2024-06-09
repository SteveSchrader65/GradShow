/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./build/index.html", "./build/projects/*.html" /*"./build/js/script.js"*/],
  theme: {
    screens: {
      sm: { raw: "(min-width: 480px)" },
      md: { raw: "(min-width: 768px)" },
      lg: { raw: "(min-width: 976px)" },
      xl: { raw: "(min-width: 1440px)" },
    },
    extend: {
      fontFamily: {
        blacksword: ["Blacksword", "sans-serif"],
      },
      colors: {
        titleColour1: "#cc00cc",
        titleColour2: "#00e6e6",
        titleColour3: "#63b4cf",
        titleColour4: "#ffb3bf",
        titleColour5: "#65e765",
      },
      backgroundImage: {
        titleSplash: "url('src/images/splash.webp')",
        projectSplash: "url('src/images/splash.png')",
        titleGradient: "linear-gradient(to right, ${theme(`colors.titleColour1`)}, ${theme(`colors.titleColour2`)}, ${theme(`colors.titleColour3`)}, ${theme(`colors.titleColour4`)}, ${theme(`colors.titleColour5`)})",
      },
      // Wrap each with @media (prefers-reduced-motion: no-preference)
      animation: {
        tronRider: "",
        arrowsDown: "",
        buttonFlash: "",
        bounce: "menuBounce 0.5s ease-in-out forwards",
      },
      keyframes: {
        tronRider: {},
        arrowsDown: {},
        buttonFlash: {},
        bounce: {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
    },
    plugins: [
      plugin(({ theme, addUtilities }) => {
        const neonBorders = {};
        const colours = theme("colors");

        /* Create new CSS class "neon-*" to add double box-shadow of any colour. */
        for (const colour in colours) {
          if (typeof colours[colour] === "object") {
            const colour1 = colours[colour]["200"];
            const colour2 = colours[colour]["700"];

            /* Adjust tintings to colour consts above as required */
            neonBorders[`.neon-${colour}`] = {
              boxShadow: `0 0 5px ${colour1}, 0 0 20px ${colour2}`,
            };
          }
        }
        addUtilities(neonBorders);
      }),
    ],
  },
};
