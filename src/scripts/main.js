'use strict';

const sliderList = document.querySelector('.slider__list');
const menu = document.querySelector('.burger-menu');
const arrows = document.getElementById('arrows');
const nav = document.getElementById('nav-menu');
const countChildren = sliderList.children.length;
const sliderListWidth = sliderList.offsetWidth;
let offset = 0;

arrows.addEventListener('click', clickButtonSlider);

function clickButtonSlider(event) {
  if (event.target.classList.contains('slider__button--left')) {
    if (offset <= 0) {
      offset = sliderListWidth;
    }

    offset -= sliderListWidth / countChildren;
    sliderList.style.left = -offset + 'px';
  } else {
    offset += sliderListWidth / countChildren;

    if (offset >= sliderListWidth) {
      offset = 0;
    }

    sliderList.style.left = -offset + 'px';
  }
};

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    menu.classList.add('burger-menu--cross');
    nav.style.transform = 'translateX(0%)';
  } else {
    menu.classList.remove('burger-menu--cross');
    nav.style.transform = 'translateX(-100%)';
  }
});

menu.addEventListener('click', (evnt) => {
  if (evnt.target.classList.contains('burger-menu--cross')) {
    menu.classList.toggle('burger-menu--cross');
    nav.style.transform = 'translateX(-100%)';
  } else {
    menu.classList.add('burger-menu--cross');
    nav.style.transform = 'translateX(0%)';
  }
});
