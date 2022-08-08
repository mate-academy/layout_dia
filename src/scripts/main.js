import Swiper, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],

  navigation: {
    nextEl: '.slider__button--right',
    prevEl: '.slider__button--left',
  },
});

swiper.init();

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const checker = document.querySelector('.form');

checker.addEventListener('submit', function(event) {
  event.preventDefault();

  checker.reset();
});
