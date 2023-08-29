'use strict';
// Toggle classes function

// function toggleClass(element, className) {
//   element.classList.toggle(className);
// }

// // Declare the variables
// const headerSelector = document.querySelector('.header');
// const infoButton = document.querySelector('.info__button');
// const serviceBlock1 = document.querySelector('.service__block-001');
// const serviceBlock2 = document.querySelector('.service__block-002');
// const serviceBlock3 = document.querySelector('.service__block-003');
// const serviceBlock4 = document.querySelector('.service__block-004');
// const blockLink = document.querySelectorAll('.block__link');
// const blockDesign = document.querySelectorAll('.block__design-rec');
// const testimonialsBlock
//  = document.querySelectorAll('.testimonials__block-icon');
// const apply = document.querySelector('.apply');
// const applyButton = document.querySelector('.apply__button');
// const contacts = document.querySelector('.contact__wrapper');
// const contactButton = document.querySelector('.contact__rows--button');
// const inputDesc = document.querySelector('.contact__rows--description');
// const footerClass = document.querySelector('.footer');
// const switchFacebook = document.querySelector('.contact__data--facebook');
// const switchTwitter = document.querySelector('.contact__data--twitter');

// // Slider functionality
// const leftButton = document.querySelector('.sliders__button-left');
// const rightButton = document.querySelector('.sliders__button-right');
// let slideIndex = 1;

// showSlider(slideIndex);

// function nextSliders(n) {
//   showSlider(slideIndex += n);
// }

// function showSlider(n) {
//   const slides = document.getElementsByClassName('sliders__content-photo');

//   if (n > slides.length) {
//     slideIndex = 1;
//   }

//   if (n < 1) {
//     slideIndex = slides.length;
//   }

//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
//   }
//   slides[slideIndex - 1].style.display = 'block';
// }

// leftButton.addEventListener('click', () => nextSliders(-1));
// rightButton.addEventListener('click', () => nextSliders(1));

// // Toggle elements on toggler click
// const toggler = document.querySelector('.switcher__logo');
// const elementsToToggle = [
//   headerSelector, infoButton, serviceBlock1, serviceBlock2,
//   serviceBlock3, serviceBlock4, blockLink[0], blockLink[1],
//   blockLink[2], blockLink[3], blockDesign[0], blockDesign[1],
//   blockDesign[2], blockDesign[3], blockDesign[4], blockDesign[5],
//   testimonialsBlock[0], testimonialsBlock[1], testimonialsBlock[2],
//   apply, applyButton, contacts, contactButton, inputDesc, footerClass,
//   switchFacebook, switchTwitter,
// ];

// toggler.addEventListener('click', () => {
//   elementsToToggle.forEach(element => {
//     toggleClass(element, 'switch-shadow-blue');
//     toggleClass(element, 'switch-shadow-yellow');
//     toggleClass(element, 'switch-shadow-green');
//     toggleClass(element, 'switch-shadow-red');
//     toggleClass(element, 'switch-blue');
//     toggleClass(element, 'switch-yellow');
//     toggleClass(element, 'switch-green');
//     toggleClass(element, 'switch-red');
//     toggleClass(element, 'switch__rec-blue');
//     toggleClass(element, 'switch__rec-yellow');
//     toggleClass(element, 'switch__rec-red');
//     toggleClass(element, 'switch__icon-blue');
//     toggleClass(element, 'switch__icon-yellow');
//     toggleClass(element, 'switch__icon-red');
//     toggleClass(element, 'switch__apply');
//     toggleClass(element, 'footer__switch');
//     toggleClass(element, 'switch__aside');
//     toggleClass(element, 'switch__logo-bar');
//     toggleClass(element, 'switch__input-color');
//     toggleClass(element, 'switch__link');
//     toggleClass(element, 'shadow__switch');
//     toggleClass(element, 'switch__slider');
//     // ... other classes to toggle
//   });
// });

// // Delegate events for various actions
// document.body.addEventListener('click', (event) => {
//   const target = event.target;

//   if (target.classList.contains('sliders__button-left')) {
//     nextSliders(-1);
//   } else if (target.classList.contains('sliders__button-right')) {
//     nextSliders(1);
//   }

//   if (target.classList.contains('switcher__logo')) {
//   }
// });

// error fix
// const switcherButton = document.querySelector('.switcher__logo');
// const photoImage = document.querySelector('.sliders__content-photo');

// switcherButton.addEventListener('click', () => {
//   const currentSrc = photoImage.getAttribute('src');
//   let newSrc;

//   if (currentSrc === './images/slider/Photo.svg') {
//     newSrc = './images/slider/Photo-blue.svg';
//     photoImage.setAttribute('src', newSrc);
//   } else {

//   }
// });
// errend

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu__aside') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // Плавная прокрутка
      });
    }
  });
});

const leftButton = document.querySelector('.sliders__button-left');
const rightButton = document.querySelector('.sliders__button-right');
let slideIndex = 1;

showSlider(slideIndex);

function nextSliders(n) {
  showSlider(slideIndex += n);
}

function showSlider(n) {
  let i;
  const slides = document.getElementsByClassName('sliders__content-photo');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}

leftButton.addEventListener('click', () => nextSliders(-1));

rightButton.addEventListener('click', () => nextSliders(1));

const toggler = document.querySelector('.switcher__logo');

const headerSelector = document.querySelector('.header');
const infoButton = document.querySelector('.info__button');
const blockImages = document.querySelectorAll('.block__images');
const serviceBlock1 = document.querySelector('.service__block-001');
const serviceBlock2 = document.querySelector('.service__block-002');
const serviceBlock3 = document.querySelector('.service__block-003');
const serviceBlock4 = document.querySelector('.service__block-004');
const blockLink = document.querySelectorAll('.block__link');
const serviceNumbers = document.querySelectorAll('.service__block-number');
const blockDesign = document.querySelectorAll('.block__design-rec');
const sliderPhotos = document.querySelectorAll('.sliders__content-photo');
// eslint-disable-next-line max-len
const testimonialsBlock = document.querySelectorAll('.testimonials__block-icon');
const apply = document.querySelector('.apply');
const applyButton = document.querySelector('.apply__button');
const contacts = document.querySelector('.contact__wrapper');
const contactButton = document.querySelector('.contact__rows--button');
const inputDesc = document.querySelector('.contact__rows--description');
const inputText = document.querySelectorAll('.contact__rows--input');
const footerClass = document.querySelector('.footer');
const navLink = document.querySelectorAll('.nav__link');
const menuAside = document.querySelector('.menu__aside');
const topBar = document.querySelector('.switcher__logo');
const switchFacebook = document.querySelector('.contact__data--facebook');
const switchTwitter = document.querySelector('.contact__data--twitter');

toggler.addEventListener('click', () => {
  headerSelector.classList.toggle('header__switch');
  infoButton.classList.toggle('switch__button');
  infoButton.classList.toggle('switch__button-hover');
  serviceBlock1.classList.toggle('switch-shadow-blue');
  serviceBlock2.classList.toggle('switch-shadow-yellow');
  serviceBlock3.classList.toggle('switch-shadow-green');
  serviceBlock4.classList.toggle('switch-shadow-red');
  serviceNumbers[0].classList.toggle('switch-blue-number');
  serviceNumbers[1].classList.toggle('switch-yellow-number');
  serviceNumbers[2].classList.toggle('switch-green-number');
  serviceNumbers[3].classList.toggle('switch-red-number');
  blockLink[0].classList.toggle('switch-shadow-blue');
  blockLink[0].classList.toggle('switch-blue');
  blockLink[1].classList.toggle('switch-yellow');
  blockLink[1].classList.toggle('switch-shadow-yellow');
  blockLink[2].classList.toggle('switch-green');
  blockLink[2].classList.toggle('switch-shadow-green');
  blockLink[3].classList.toggle('switch-red');
  blockLink[3].classList.toggle('switch-shadow-red');

  blockDesign[0].classList.toggle('switch__rec-blue');
  blockDesign[1].classList.toggle('switch__rec-blue');
  blockDesign[2].classList.toggle('switch__rec-yellow');
  blockDesign[3].classList.toggle('switch__rec-yellow');
  blockDesign[4].classList.toggle('switch__rec-red');
  blockDesign[5].classList.toggle('switch__rec-red');

  testimonialsBlock[0].classList.toggle('switch__icon-blue');
  testimonialsBlock[1].classList.toggle('switch__icon-yellow');
  testimonialsBlock[2].classList.toggle('switch__icon-red');
  apply.classList.toggle('switch__apply');
  applyButton.classList.toggle('switch__button');
  applyButton.classList.toggle('switch__button-hover');
  contacts.classList.toggle('contact__switch');
  contactButton.classList.toggle('switch__button');
  contactButton.classList.toggle('switch__button-hover');
  footerClass.classList.toggle('footer__switch');
  menuAside.classList.toggle('switch__aside');
  topBar.classList.toggle('switch__logo-bar');
  inputDesc.classList.toggle('switch__input-color');
  switchFacebook.classList.toggle('switch__facebook');
  switchTwitter.classList.toggle('switch__twitter');

  for (let k = 0; k < inputText.length; k++) {
    inputText[k].classList.toggle('switch__input-color');
  }

  for (let k = 0; k < navLink.length; k++) {
    navLink[k].classList.toggle('switch__link');
  }

  for (let k = 0; k < blockImages.length; k++) {
    blockImages[k].classList.toggle('shadow__switch');
  }

  for (let k = 0; k < sliderPhotos.length; k++) {
    sliderPhotos[k].classList.toggle('switch__slider');
  }
});
