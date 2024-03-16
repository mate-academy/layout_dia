'use strict';

export default function Menu() {
  const menu = document.querySelector('.navigation__menu');
  const navList = menu.querySelector('.navigation__list');
  const links = menu.querySelectorAll('.navigation__nav-link');

  menu.addEventListener('click', (event) => {
    if (navList.classList.contains('navigation__list--active')) {
      navList.classList.remove('navigation__list--active');
      event.stopPropagation();
    } else {
      navList.classList.add('navigation__list--active');
      event.stopPropagation();
    }
  });

  document.addEventListener('click', (event) => {
    if (!navList.contains(event.target)) {
      navList.classList.remove('navigation__list--active');
    }
  });

  links.forEach((link) =>
    link.addEventListener('click', (event) => {
      navList.classList.remove('navigation__list--active');
      event.stopPropagation();
    }),
  );
}
