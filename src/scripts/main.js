import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { Navigation } from 'swiper/modules';


const swiper = new
Swiper('.header-bottom__slider', {
  modules: [Navigation],
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.header-bottom__btn--next',
    prevEl: '.header-bottom__btn--prev',
  },
  autoplay: {
    delay: 4000,
  },
  speed: 800,
});

const toggle = document.getElementById('nav-toggle');
document.querySelectorAll(
  '.site-nav__menu .site-nav__link, .overlay'
)
  .forEach(
    (el) => el.addEventListener(
      'click', () => { toggle.checked = false; }
    )
  );

