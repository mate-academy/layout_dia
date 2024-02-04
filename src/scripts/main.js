import { menuToggle } from './lib/menu';
import { nextSlides, previousSlides } from './lib/slider';

const refs = {
  menuBtnRef: document.querySelector('[data-menu-button]'),
  menuLinks: document.querySelectorAll('.nav__link'),
  form: document.querySelector('.form'),
  sliderArrowLeft: document.querySelector('.slider__arrow--left'),
  sliderArrowRight: document.querySelector('.slider__arrow--right'),
};

refs.menuBtnRef.addEventListener('click', menuToggle);

if (refs.menuLinks.length > 0) {
  refs.menuLinks.forEach(menuBurgerLink => {
    menuBurgerLink.addEventListener('click', function(e) {
      const expanded = refs.menuBtnRef
        .getAttribute('aria-expanded') === 'true' || false;

      if (expanded) {
        menuToggle();
      }
    });
  });
}

refs.sliderArrowRight.addEventListener('click', nextSlides);
refs.sliderArrowLeft.addEventListener('click', previousSlides);

setInterval(nextSlides, 5000);
