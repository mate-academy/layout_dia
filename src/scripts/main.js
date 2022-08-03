import Swiper, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';

window.swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  modules: [Navigation],
});
