/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
"use strict";

// header menu
const header = document.querySelector(".header");

if (header) {
  const burgerBtn = header.querySelector(".header__burger");
  const links = header.querySelectorAll(".header__link");
  const openMenu = () => {
    document.body.classList.toggle("page__body--status-lock");
    header.classList.toggle("header--menu-open");
  };
  const closeMenu = () => {
    document.body.classList.remove("page__body--status-lock");
    header.classList.remove("header--menu-open");
  };

  burgerBtn.addEventListener("click", openMenu);
  links.forEach((link) => link.addEventListener("click", closeMenu));
}

// form submit
const form = document.querySelector(".footer__form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    this.reset();
  });
}
