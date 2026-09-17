'use strict';

export const initBurgerMenu = () => {
  const burgerBtn = document.querySelector('.burger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav__link');

  if (!burgerBtn || !mobileNav) {
    return;
  }

  const toggleMenu = () => {
    const isOpen = burgerBtn.classList.toggle('is-active');
    mobileNav.classList.toggle('is-active');

    burgerBtn.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    burgerBtn.classList.remove('is-active');
    mobileNav.classList.remove('is-active');
    burgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  burgerBtn.addEventListener('click', toggleMenu);

  mobileLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileNav.classList.contains('is-active')) {
      closeMenu();
    }
  });
};
