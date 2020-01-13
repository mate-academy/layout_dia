'use strict';

// console.log('hello mate academy!');

function initMenu() {
  const burger = document.querySelector('.switcher');
  const switcher = document.querySelector('.header__main-nav');

  burger.addEventListener('click', () => {
    burger.classList.toggle('switcher--close');
    switcher.classList.toggle('nav--visible');
  });
}

initMenu();
