'use strict';

import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

const swiper = new Swiper('.mySwiper', {
  modules: [Navigation, Autoplay],
  rewind: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.agency__arrow-button--right',
    prevEl: '.agency__arrow-button--left',
  },
  speed: 600,
});
