'use strict';

const sliderLinks = document.querySelectorAll('.slider__link');
const sliderPhotos = document.querySelectorAll('.slider-photo');

let activeSlideIndex = 0;

function slideRight() {
  if (activeSlideIndex < sliderPhotos.length - 1) {
    activeSlideIndex++;
  } else {
    activeSlideIndex = 0;
  }

  updateSlider();
}

function slideLeft() {
  if (activeSlideIndex > 0) {
    activeSlideIndex--;
  } else {
    activeSlideIndex = sliderPhotos.length - 1;
  }

  updateSlider();
}

function updateSlider() {
  sliderPhotos.forEach(photo => {
    photo.style.display = 'none';
  });

  sliderPhotos[activeSlideIndex].style.display = 'block';
}

sliderLinks[0].onclick = slideRight;
sliderLinks[1].onclick = slideLeft;

const form = document.querySelector('.footer__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
