'use strict';

let isFirstClickHeader = true;
let isFirstClickFooter = true;
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const headerButton = document.querySelector('.header__menu-button');
const footerButton = document.querySelector('.footer__menu-button');
const anchorItems = document.querySelectorAll('a[href*="#"]');

footer.classList.remove('footer--nojs');
header.classList.remove('header--nojs');

headerButton.addEventListener('click', () => {
  if (isFirstClickHeader) {
    header.classList.add('header--menu-open');
    isFirstClickHeader = false;
  } else {
    header.classList.toggle('header--menu-open');
    header.classList.toggle('header--menu-close');
  }
});

footerButton.addEventListener('click', () => {
  if (isFirstClickFooter) {
    footer.classList.add('footer--menu-open');
    isFirstClickFooter = false;
  } else {
    footer.classList.toggle('footer--menu-open');
    footer.classList.toggle('footer--menu-close');
  }
});

for (const item of anchorItems) {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    const id = item.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
