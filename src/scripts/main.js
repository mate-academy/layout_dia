import Swiper, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper', {
  modules: [Navigation],

  navigation: {
    nextEl: '.slider__arrow-next',
    prevEl: '.slider__arrow-prev',
  },
});

const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
});
