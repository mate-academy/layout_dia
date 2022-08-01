// core version + navigation, pagination modules:
import Swiper, { Navigation } from 'swiper';
// import Swiper and modules styles
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';

// init Swiper:
// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation],

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
