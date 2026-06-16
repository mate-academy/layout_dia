'use strict';

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const swiper = new Swiper('.slider-top__wrapper', {
  modules: [Navigation],
  loop: true,
  speed: 300,
  navigation: {
    prevEl: '.slider-top__arrow--left',
    nextEl: '.slider-top__arrow--right',
  },
});
