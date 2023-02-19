
import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

const swiper = new Swiper('.swiper', { // eslint-disable-line no-unused-vars
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  form.reset();
});

const links = document.querySelectorAll('.services__link');

for (const link of Array.from(links)) {
  link.addEventListener('click', e => {
    e.preventDefault();
  });
}
