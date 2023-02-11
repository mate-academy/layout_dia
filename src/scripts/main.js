const navToggle = document.querySelector('.header__menu-toggler');
const mobileNav = document.querySelector('#mobile-navigation');
const mobileSpan = document.querySelectorAll('.header__span');

navToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('header__nav--opened');

  for (const span of mobileSpan) {
    span.classList.toggle('header__span--opened');
  }
});

const buttons = document.querySelectorAll('[data-carousel-button]');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
    const slides = button.closest('[data-carousel').querySelector('[data-slides]');

    const activeSlide = slides.querySelector('[data-active]');
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) {
      newIndex = slides.children.length - 1;
    }

    if (newIndex >= slides.children.length) {
      newIndex = 0;
    }

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

const form = document.querySelector('.contact__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});