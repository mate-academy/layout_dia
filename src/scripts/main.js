'use strict';

const images = document.querySelectorAll('.swiper-slide');
const swiperLine = document.querySelector('.swiper-wrapper');
let width;

function calculateSliderSilze() {
  width = document.querySelector('.swiper-container').offsetWidth;
  swiperLine.style.width = width * images.length + 'px';

  images.forEach((image) => {
    image.style.width = width + 'px';
    image.style.height = 'auto';
  });
};

calculateSliderSilze();

window.addEventListener(('resize'), calculateSliderSilze);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu--mobile');
  } else {
    document.body.classList.remove('page__body--with-menu--mobile');
  }
});

document.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});

const textarea = document.querySelector('textarea');

textarea.addEventListener('keyup', function() {
  if (this.scrollTop > 0) {
    this.style.height = this.scrollHeight + 'px';
  }
});
