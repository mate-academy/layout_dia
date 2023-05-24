/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
"use strict";

// form submit
const form = document.querySelector(".footer__form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  this.reset();
});
