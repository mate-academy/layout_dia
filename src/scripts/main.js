'use strict';

// -------------start set up------------
const decorRectLeftPos = [ [ 82, 248 ],
  [ 131, 72 ],
  [ 233, 527 ],
  [ 269, 254 ],
  [ 446, 565 ],
  [ 481, 177 ] ];

const decorRectRightPos = [ [570, 128],
  [ 351, 213 ],
  [ 271, 406 ],
  [ 199, 112 ],
  [ 148, 523 ],
  [ 95, 321 ] ];

const decorLeftRects = document.querySelector('.mottos__decor--left-side')
  .querySelectorAll('.decor__rect');
const decorRightRects = document.querySelector('.mottos__decor--right-side')
  .querySelectorAll('.decor__rect');

decorLeftRects.forEach((rect, i) => {
  rect.style.left = decorRectLeftPos[i][0] + 'px';
  rect.style.bottom = decorRectLeftPos[i][1] + 'px';
});

decorRightRects.forEach((rect, i) => {
  rect.style.right = decorRectRightPos[i][0] + 'px';
  rect.style.bottom = decorRectRightPos[i][1] + 'px';
});

// --------------burger-menu---------------

const page = document.querySelector('.page');
const menuIcon = document.querySelector('.menu-icon');
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuList = document.querySelector('.burger-menu__list');

menuIcon.addEventListener('click', openMenu);
burgerMenuList.addEventListener('click', openMenu);

function openMenu() {
  page.classList.toggle('page--no-scroll');
  burgerMenu.classList.toggle('header__burger-menu--open');

  menuIcon.classList.toggle('menu-icon--open');
  menuIcon.classList.toggle('header__menu--screen--small');
}

// --------------slider--------------------

const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
let freeToSlide = true;

leftArrow.addEventListener('click', previousImg);
rightArrow.addEventListener('click', nextImg);

runAutoSlider();

function previousImg() {
  const leftImg = document.querySelector('.slider-images__img--previous');
  const currentImg = document.querySelector('.slider-images__img--shown');
  const rightImg = document.querySelector('.slider-images__img--next');

  freeToSlide = false;

  leftImg.classList.add('slider-images__img--moving');
  leftImg.classList.add('slider-images__img--shown');
  leftImg.classList.remove('slider-images__img--previous');

  setTimeout(() => {
    rightImg.classList.remove('slider-images__img--next');
    rightImg.classList.add('slider-images__img--previous');

    currentImg.classList.remove('slider-images__img--shown');
    currentImg.classList.add('slider-images__img--next');

    leftImg.classList.remove('slider-images__img--moving');
  }, 1000);
};

function nextImg() {
  const leftImg = document.querySelector('.slider-images__img--previous');
  const currentImg = document.querySelector('.slider-images__img--shown');
  const rightImg = document.querySelector('.slider-images__img--next');

  freeToSlide = false;

  rightImg.classList.add('slider-images__img--moving');
  rightImg.classList.add('slider-images__img--shown');
  rightImg.classList.remove('slider-images__img--next');

  setTimeout(() => {
    leftImg.classList.remove('slider-images__img--previous');
    leftImg.classList.add('slider-images__img--next');

    currentImg.classList.remove('slider-images__img--shown');
    currentImg.classList.add('slider-images__img--previous');

    rightImg.classList.remove('slider-images__img--moving');
  }, 1000);
};

function runAutoSlider() {
  freeToSlide = true;

  setTimeout(() => {
    if (freeToSlide) {
      nextImg();
    }

    runAutoSlider();
  }, 6000);
};
