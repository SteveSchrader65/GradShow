/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./build/index.html", "./build/projects/*.html"],

  theme: {
    colors: {
      backgroundColour: "#000000",
      mainBorderColour: "#ff0000",
      arrowColour: "#cc00cc",
      arrowHoverColour: "#32cd32",
      primaryTextColour: "#ffffff",
      cardBackgroundColour: "#66ffff",
      cardTitleColour: "",
      cardTextColour: "#000000",
      cardBorderColour: "#ff0000",
      sectionTitleColour: "#008000",
      sectionBorderColour: "#404040",
      button1Colour: "",
      button1TextColour: "",
      button1BorderColour: "",
      button1HoverColour: "",
      button2Colour: "",
      button2TextColour: "",
      button2BorderColour: "",
      button2HoverColour: "",
      button3Colour: "",
      button3TextColour: "",
      button3BorderColour: "",
      button3HoverColour: "",
      footerBackgroundColour: "#737373",
      footerTextColour: "#d9d9d9",
      titleColour1: "#cc00cc",
      titleColour2: "#00e6e6",
      titleColour3: "#63b4cf",
      titleColour4: "#ffb3bf",
      titleColour5: "#65e765",
      transparent: "transparent",
    },

    screens: {
      sm: { raw: "(min-width: 480px)" },
      md: { raw: "(min-width: 768px)" },
      lg: { raw: "(min-width: 976px)" },
      xl: { raw: "(min-width: 1440px)" },
    },

    extend: {
      fontFamily: {
        Blacksword: ["Blacksword", "sans-serif"],
      },

      animation: {
        fadeIn: "fadeFrames 2000ms ease-in",
        tronRider: "tronFrames 8000ms infinite",
        arrowsDown: "arrowFrames 2000ms infinite",
        buttonFlash: "buttonFrames 1000ms ease-in-out forwards",
      },

      keyframes: {
        fadeFrames: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },

        tronFrames: {},

        arrowFrames: {
          "0%": { opacity: 0, transform: "rotate(45deg) translate(-20px, -20px)" },
          "40%": { opacity: 1 },
          "100%": { opacity: 0, transform: "rotate(45deg) translate(20px, 20px)" },
        },

        buttonFrames: {},
      },
    },
    purge: ["./src/**.*.{css, js}", "./build/**.*.{css, js}"],

    plugins: [
      plugin(({ addUtilities, theme }) => {
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

