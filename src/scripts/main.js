'use strict';

const toggleHeaderButton = document.getElementsByClassName('header-button')[0];
const navbarLinksHeader = document.getElementsByClassName('navbar-links')[0];
const toggleFooterButton = document.getElementsByClassName('footer-button')[0];
const navbarLinksFooter
  = document.getElementsByClassName('items_navbar-links')[0];

toggleHeaderButton.addEventListener('click', () => {
  navbarLinksHeader.classList.toggle('active');
});

toggleFooterButton.addEventListener('click', () => {
  navbarLinksFooter.classList.toggle('active');
});

// #region slide
const prevImageButton
  = document.getElementsByClassName('slider__buttons-left');
const nextImageButton
  = document.getElementsByClassName('slider__buttons-right');
let slideIndex = 0;

function slideImages() {
  const slides = document.getElementsByClassName('slide_image');

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  slides[slideIndex].style.display = 'block';
}

function showSlides() {
  slideIndex++;
  slideImages();
  setTimeout(showSlides, 5000);
}

showSlides();

prevImageButton[0].addEventListener('click', () => {
  slideIndex -= 1;
  slideImages();
});

nextImageButton[0].addEventListener('click', () => {
  slideIndex += 1;
  slideImages();
});
// #endregion
