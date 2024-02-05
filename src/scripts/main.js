'use strict';

const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');

sliderItems.forEach(function(slide, index) {
  if (index !== 0) {
    slide.classList.add('slider__photo--hidden');
  }

  slide.dataset.index = index;

  sliderItems[0].setAttribute('data-active', '');

  // slide.addEventListener('click', function() {
  //   showNextSlide('next');
  // });
});

btnNext.addEventListener('click', function() {
  showNextSlide('next');
});

btnPrev.addEventListener('click', function() {
  showNextSlide('prev');
});

function showNextSlide(direction) {
  const currentSlide = slider.querySelector('[data-active]');
  const currentSlideIndex = +currentSlide.dataset.index;

  currentSlide.classList.add('slider__photo--hidden');
  currentSlide.removeAttribute('data-active');

  let nextSlideIndex;

  if (direction === 'next') {
    if (currentSlideIndex + 1 === sliderItems.length) {
      nextSlideIndex = 0;
    } else {
      nextSlideIndex = currentSlideIndex + 1;
    }
  }

  if (direction === 'prev') {
    if (currentSlideIndex === 0) {
      nextSlideIndex = sliderItems.length - 1;
    } else {
      nextSlideIndex = currentSlideIndex - 1;
    }
  }

  const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

  nextSlide.classList.remove('slider__photo--hidden');
  nextSlide.setAttribute('data-active', '');
}
