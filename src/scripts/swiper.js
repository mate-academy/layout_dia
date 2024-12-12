import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 0,
      modules: [Navigation],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });;
})();
