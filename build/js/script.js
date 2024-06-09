/* jshint esversion: 6 */

function init() {
  "use strict";

  const mobileMenu = document.querySelector('#mobile-menu');
  const hamburgerButton = document.querySelector('#hamburger-button');

  const toggleMenu = () => {
    mobileMenu.classList.toggle("flex");
    mobileMenu.classList.toggle('hidden');
    hamburgerButton.classList.toggle('toggle-btn');
  }

  mobileMenu.addEventListener("click", toggleMenu);
  hamburgerButton.addEventListener('click', toggleMenu);
}

window.onload = init;
