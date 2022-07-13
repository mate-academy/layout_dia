'use strict';
/*eslint-disable*/
// nav and menu

const contuctsMessage = document.querySelector(`.contucts__message`);
const menuBtn = document.querySelector(`.menuBtn`);
const navBackground = document.querySelector('.nav__background');
const links = document.querySelectorAll('.nav__list');
const body = document.querySelector(`body`);
const menuBtnPosition = document.querySelector('.menuBtn__position');
const headerHireBtn = document.querySelector('.header__hireBtn');
const navUl = document.querySelector('.nav__ul');

// rippleBtn
const rippleEffect = document.querySelectorAll('.button__global');

// form
const form = document.querySelector('.contucts__form');

// for slider
const imgLeft = document.querySelector('.slider__leftBtn');
const imgRight = document.querySelector('.slider__rightBtn');
const image = document.querySelector('.slider__image');
const sliderDescription = document.querySelector(`.slider__description`);
const sliderText = document.querySelector(`.slider__text`);

const imagesArray = [
  'https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
  'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1184&q=80'
];

contuctsMessage.addEventListener('input', function(e) {
  e.target.style.height = 'auto';
  e.target.style.height = `${e.target.scrollHeight}px`;
});

let toggler = false;

const closeHandler = (time) => {
  body.style.setProperty(`overflow-y`, 'inherit');
  menuBtnPosition.style.setProperty(`position`, 'inherit');
  menuBtnPosition.style.setProperty(`right`, '0');
  menuBtnPosition.style.setProperty(`top`, '0');

  setTimeout(() => {
    navBackground.style.setProperty(`z-index`, '-1');
    headerHireBtn.style.setProperty('display', 'inherit');
    headerHireBtn.style.setProperty('opacity', '1');
  }, time);
};

const navHandler = () => {
  menuBtn.classList.toggle('menuBtn__Open');

  links.forEach(link => {
    link.classList.toggle(`slide`);
  });

  navBackground.classList.toggle('appear');
};

navUl.addEventListener('click', function(e) {
  if (!toggler) {
    return;
  };

  if (e.target.closest('.nav__list')) {
    toggler = !toggler;
    closeHandler(0);
    navHandler();
  }
});

menuBtn.addEventListener('click', function(e) {
  toggler = !toggler;

  if (toggler) {
    headerHireBtn.style.setProperty('display', 'hidden');
    headerHireBtn.style.setProperty('opacity', '0');
    menuBtnPosition.style.setProperty(`position`, 'absolute');
    menuBtnPosition.style.setProperty(`right`, '40px');
    menuBtnPosition.style.setProperty(`top`, '20px');
    body.style.setProperty(`overflow-y`, 'hidden');
    navBackground.style.setProperty(`z-index`, '2');
  } else {
    closeHandler(700);
  }
  navHandler();
});

// ripleEffect for btns
[...rippleEffect].map(el => {
  el.addEventListener('click', function(e) {
    const posX = e.offsetX;
    const posY = e.offsetY;

    el.style.setProperty('--x', posX + 'px');
    el.style.setProperty('--y', posY + 'px');
    el.classList.add('rippleButton');
  });

  el.addEventListener('animationend', function() {
    el.classList.remove('rippleButton');
  });
});

// form
form.addEventListener('submit', function(e) {
  e.preventDefault();
  form.reset();
});

// slider
const quatesArray = [
  `By the same illusion which lifts the horizon.`,
  `Just one small positive thought in the morning can change your whole day.`,
  `Opportunities don't happen, you create them.`,
  `It is never too late to be what you might have been.`,
  `When you change your thoughts, remember to also change your world.`];

let imageCount = 0;
let nextSlide = true;

imgLeft.addEventListener('click', function(e) {
  if (!nextSlide) {
    return;
  }

  nextSlide = false;

  if (imageCount <= 0) {
    imageCount = 4;
  } else {
    imageCount--;
  }

  sliderDescription.style.setProperty('opacity', '0');

  image.style
    .setProperty('background', `center/cover no-repeat url(
      ${imagesArray[imageCount]}
    )`);
});

imgRight.addEventListener('click', function(e) {
  if (!nextSlide) {
    return;
  }

  nextSlide = false;

  if (imageCount >= 4) {
    imageCount = 0;
  } else {
    imageCount++;
  }
  sliderDescription.style.setProperty('opacity', '0');

  image.style
    .setProperty('background', `center/cover no-repeat url(
      ${imagesArray[imageCount]}
    )`);
});

sliderDescription.addEventListener(`transitionend`, function() {
  sliderDescription.style.setProperty('opacity', '1');
  sliderText.textContent = quatesArray[imageCount];
});

image.addEventListener(`transitionend`, function() {
  nextSlide = true;
});
