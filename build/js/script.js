/* jshint esversion: 6 */

function arrowExit() {
  "use strict";

  const arrows = document.querySelector(".arrows");

  if (window.scrollY != 0) {
    arrows.style.display = "none";
  } else {
    arrows.style.display = "block";
  }
}

function init() {
  "use strict";

  window.addEventListener("scroll", arrowExit);
}

window.onload = init;
