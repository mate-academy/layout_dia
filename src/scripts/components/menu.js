'use strict';

export default function Menu() {
  const body = document.querySelector('.page');
  const menu = document.querySelector('.navigation');
  const navList = document.querySelector('.navigation__wrapper');
  const links = document.querySelectorAll('.navigation__nav-link');
  const closeBtn = document.querySelector('.navigation__close');

  menu.addEventListener('click', () => {
    body.style.overflow = 'hidden';
    navList.classList.add('navigation__wrapper--active');
  });

  closeBtn.addEventListener('click', (event) => {
    document.body.style.overflow = 'auto';
    navList.classList.remove('navigation__wrapper--active');
    event.stopPropagation();
  });

  links.forEach((link) =>
    link.addEventListener('click', (event) => {
      document.body.style.overflow = 'auto';
      navList.classList.remove('navigation__wrapper--active');
      event.stopPropagation();
    }),
  );
}
