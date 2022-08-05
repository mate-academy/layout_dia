import Swiper, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  navigation: {
    prevEl: '.slider__arrow-left--prev',
    nextEl: '.slider__arrow-right--next',
  },
});

swiper.init();

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
