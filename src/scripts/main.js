'use strict';

// __________Menu__________

const pageHTML = document.querySelector('html');
const menu = document.querySelector('.menu');
const menuOpener = document.querySelector('.logo__menu');

window.addEventListener('resize', () => {
  if (pageHTML.clientWidth < 1024) {
    menu.classList.remove('menu--dont-hidden');
    menu.classList.remove('menu--hidden');
  }
});

window.addEventListener('click', (e) => {
  if (e.target.closest('.logo__menu')) {
    if (menu.classList.contains('menu--dont-hidden')) {
      menuOpener.classList.remove('logo__menu--close');
      menuOpener.classList.add('logo__menu--open');
      menu.classList.remove('menu--dont-hidden');
      menu.classList.add('menu--hidden');
    } else if (menu.classList.contains('menu--hidden')) {
      menu.classList.remove('menu--hidden');
      menu.classList.add('menu--dont-hidden');
      menuOpener.classList.add('logo__menu--close');
      menuOpener.classList.remove('logo__menu--open');
    } else {
      menu.classList.add('menu--dont-hidden');
      menuOpener.classList.add('logo__menu--close');
      menuOpener.classList.remove('logo__menu--open');
    }
  }
});

// __________Slider__________
const slider = document.querySelector('.slider');
const sliderBtnRight = document.querySelector('.slider__btn-right');
const sliderBtnLeft = document.querySelector('.slider__btn-left');
let count = 1;

const allBgImages = [
  'slider--bg-img-0',
  'slider--bg-img-1',
  'slider--bg-img-2',
  'slider--bg-img-3',
];

function sliderRemoveClass(allImg) {
  allBgImages.map(elem => {
    if (slider.classList.contains(elem)) {
      slider.classList.remove(elem);
    }
  });
};

slider.addEventListener('click', (e) => {
  if (e.target.closest('.slider__btn-right')) {
    if (count < allBgImages.length) {
      sliderRemoveClass(allBgImages);
      count++;
      slider.classList.add(allBgImages[count - 1]);
    }
  }

  if (e.target.closest('.slider__btn-left')) {
    if (count > 1) {
      sliderRemoveClass(allBgImages);
      count--;
      slider.classList.add(allBgImages[count - 1]);
    } else {
    }
  }
  sliderBtnLeft.disabled = count === 1;
  sliderBtnRight.disabled = count === allBgImages.length;
});
