/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
"use strict";

// header menu
const header = document.querySelector(".header");

if (header) {
  const burgerBtn = header.querySelector(".header__burger");
  const openMenu = () => {
    document.body.classList.toggle("page__body--status-lock");
    header.classList.toggle("header--menu-open");
  };

  burgerBtn.addEventListener("click", openMenu);
}

// form submit
const form = document.querySelector(".footer__form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    this.reset();
  });
}
