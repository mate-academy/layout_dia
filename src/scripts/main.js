'use strict';


const burger = document.getElementById("burgerButton");
const nav = document.getElementById("navMenu");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
