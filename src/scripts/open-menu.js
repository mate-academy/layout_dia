'use strict';
// Отримуємо всі кнопки
const menuIcon = document.querySelector(".nav__menu-icon");
const navList = document.querySelector(".nav__list");
const navMobile = document.querySelector(".nav__mobile");

menuIcon.addEventListener("click", () => {
  navList.classList.toggle("menu-mobile");
  navMobile.classList.toggle("change-height");
});

if (window.innerWidth >= 1024) {
  navList.classList.remove("menu-mobile");
  navMobile.classList.remove("change-height");
}
