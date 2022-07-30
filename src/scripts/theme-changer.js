'use strict';

const themeButton = document.querySelector('.theme-changer');
const header = document.querySelector('.header');

themeButton.onclick = () => {
  header.classList.toggle('dark-theme');
  header.classList.toggle('light-theme');
};
