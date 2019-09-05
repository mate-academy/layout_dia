'use strict';

/* Burger */
const burger = document.getElementById('burger');
const burgerBar = document.querySelector('.js-burger__bar');
// const body = document.getElementById('body');

const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
  burgerBar.classList.toggle('js-open');
  menu.classList.toggle('js-show-menu');
  // body.classList.toggle('js-no-scroll');
});
/* END Burger */

/* Anchor smooth scroll */
const anchors = document.querySelectorAll('a[href*="#"]');

for (const anchor of anchors) {
  anchor.addEventListener('click', e => {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
/* END Anchor smooth scroll */
