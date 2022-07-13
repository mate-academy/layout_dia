'use strict';
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

let imageCount = 1;
let nextSlide = true;

imgLeft.addEventListener('click', function(e) {
  if (!nextSlide) {
    return;
  }

  nextSlide = false;

  if (imageCount <= 1) {
    imageCount = 5;
  } else {
    imageCount--;
  }

  sliderDescription.style.setProperty('opacity', '0');

  image.style.setProperty('background', `url('/slider-1.jpg')`);
});

imgRight.addEventListener('click', function(e) {
  if (!nextSlide) {
    return;
  }

  nextSlide = false;

  if (imageCount >= 5) {
    imageCount = 1;
  } else {
    imageCount++;
  }
  sliderDescription.style.setProperty('opacity', '0');

  image.style
    .setProperty('background', `center/cover no-repeat url('/slider-2.jpg')`);
});

sliderDescription.addEventListener(`transitionend`, function() {
  sliderDescription.style.setProperty('opacity', '1');
  sliderText.textContent = quatesArray[imageCount - 1];
});

image.addEventListener(`transitionend`, function() {
  nextSlide = true;
});
