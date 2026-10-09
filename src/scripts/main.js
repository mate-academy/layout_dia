'use strict';
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  contactForm.reset();

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

const menuButton = document.querySelector('.header__menu-button');
const navigation = document.querySelector('.header__nav');

function closeMenu() {
  navigation.classList.remove('header__nav--open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
}

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('header__nav--open');

  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute(
    'aria-label',
    isOpen ? 'Close menu' : 'Open menu',
  );
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('.nav__link')) {
    closeMenu();
  }
});

document.addEventListener('keydown', (event) => {
  if (
    event.key === 'Escape'
    && navigation.classList.contains('header__nav--open')
  ) {
    closeMenu();
    menuButton.focus();
  }
});

window.matchMedia('(min-width: 1024px)')
  .addEventListener('change', closeMenu);
