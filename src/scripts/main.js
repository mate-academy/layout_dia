import { animOnScroll } from './lib/animOnScroll';
import { menuToggle } from './lib/menu';
import { resetForm } from './lib/form';
import { nextSlides, previousSlides } from './lib/slider';

const refs = {
  menuBtnRef: document.querySelector('[data-menu-button]'),
  menuLinks: document.querySelectorAll('.nav__link'),
  form: document.querySelector('.form'),
  animItems: document.querySelectorAll('.js-anim-items'),
  sliderArrowLeft: document.querySelector('.slider__arrow--left'),
  sliderArrowRight: document.querySelector('.slider__arrow--right'),
};

refs.menuBtnRef.addEventListener('click', menuToggle);
refs.form.addEventListener('submit', resetForm);

if (refs.animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
}

setTimeout(() => {
  animOnScroll();
}, 300);

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
