/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./build/index.html", "./build/projects/*.html", "./src/input.css"],

  theme: {
    colors: {
      backgroundColour: "#000000",
      mainBorderColour: "#ff0000",
      arrowColour: "#cc00cc",
      arrowHoverColour: "#32cd32",
      primaryTextColour: "#ffffff",
      cardBackgroundColour: "#66ffff",
      cardTitleColour: "#cc00cc",
      cardTextColour: "#000000",
      cardBorderColour: "#ff0000",
      sectionTitleColour: "#008000",
      sectionBorderColour: "#404040",

      button1Colour: "dodgerblue",
      button1TextColour: "pink",
      button1BorderColour: "yellow",
      button1HoverColour: "limegreen",
      button2Colour: "white",
      button2TextColour: "pink",
      button2BorderColour: "goldenrod",
      button2HoverColour: "limegreen",
      button3Colour: "salmonpink",
      button3TextColour: "yellow",
      button3BorderColour: "lightblue",
      button3HoverColour: "lightgreen",

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

      // transitionTimingFunction: ({theme}) => ({
      //   delay2000: [ "2000", "2000ms"],
      // }),

      animation: {
        fadeIn: "fadeFrames 2000ms ease-in",
        tronBounce: "tronFrames1 300ms infinite",
        tronRun: "tronFrames2 20000ms 500ms infinite",
        arrowsDown: "arrowFrames 2000ms infinite",
        buttonFlash: "buttonFrames 1000ms ease-in-out forwards",
      },

      keyframes: {
        fadeFrames: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },

        tronFrames1: {
          "0%": { transform: "translateY(-3px)" },
          "100%": { transform: "translateY(+3px)" },
        },

        tronFrames2: {
          // Start
          "0%": { transform: "translateY(58%) translateX(40%) scale(0.08) rotate(90deg)" },

          // Scale-up and move to bottom of screen
          "12%": { transform: "translateY(200%) translateX(55%) scale(1.0) rotate(90deg)" },

          // Lean to left
          "13%": { transform: "translateY(200%) translateX(55%) scale(1.0) rotate(80deg)" },

          // Move to left
          "25%": { transform: "translateY(200%) translateX(-75%) scale(1.0) rotate(80deg)" },

          // Bike upright
          "26%": { transform: "translateY(200%) translateX(-75%) scale(1.0) rotate(90deg)" },

          // Move ahead and scale down
          "35%": { transform: "translateY(170%) translateX(-72%) scale(0.8) rotate(90deg)" },

          // Lean right
          "40%": { transform: "translateY(170%) translateX(-72%) scale(0.8) rotate(100deg)" },

          // Move to right
          "50%": { transform: "translateY(170%) translateX(85%) scale(0.8) rotate(100deg)" },

          // Bike upright
          "51%": { transform: "translateY(170%) translateX(85%) scale(0.8) rotate(90deg)" },

          // Move lower on screen and scale-up
          "55%": { transform: "translateY(200%) translateX(85%) scale(1.0) rotate(90deg)" },

          // Lean left, and move to left
          "60%": { transform: "translateY(200%) translateX(85%) scale(1.0) rotate(80deg)" },
          "64%": { transform: "translateY(200%) translateX(-15%) scale(1.0) rotate(80deg)" },

          // Bike upright for 0.5sec ...
          "65%": { transform: "translateY(200%) translateX(-15%) scale(1.0) rotate(90deg)" },
          "68%": { transform: "translateY(195%) translateX(-15%) scale(1.0) rotate(90deg)" },

          // Lean right and move right slightly
          "69%": { transform: "translateY(200%) translateX(-15%) scale(1.0) rotate(100deg)" },
          "70%": { transform: "translateY(200%) translateX(10%) scale(1.0) rotate(100deg)" },
          "72%": { transform: "translateY(200%) translateX(10%) scale(1.0) rotate(90deg)" },

          // Bounce
          "75%": { transform: "translateY(200%) translateX(-15%) scale(1.0) rotate(90deg)" },

          // NEXT: Move down & scale up, lean left, move left small amount, bike upright for .5sec,
          //       bounce, lean right and return to center

          // Return to starting position. 80% point gives extra time for ride into sunset ...
          "76%": { transform: "translateY(200%) translateX(55%) scale(1.0) rotate(100deg)" },
          "76.1%": { transform: "translateY(200%) translateX(55%) scale(1.0) rotate(90deg)" },
          "100%": { transform: "translateY(58%) translateX(40%) scale(0.08) rotate(90deg)" },
        },

        arrowFrames: {
          "0%": { opacity: 0, transform: "rotate(45deg) translate(-20px, -20px)" },
          "40%": { opacity: 1 },
          "100%": { opacity: 0, transform: "rotate(45deg) translate(20px, 20px)" },
        },

        buttonFrames: {},
      },
    },

    // plugins: [require("tailwindcss-animate")],
  },
};
