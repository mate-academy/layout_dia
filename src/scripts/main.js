'use strict';

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.carousel__button--left');
const nextButton = document.querySelector('.carousel__button--right');

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

const moveToSlide = (tracks, currentSlide, targetSlide) => {
  tracks.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

const edgeElementsHandler = (tracks, edgeSlide, currentSlide) => {
  tracks.style.transform = `translateX(-${edgeSlide.style.left})`;
  currentSlide.classList.remove('current-slide');
  edgeSlide.classList.add('current-slide');
};

nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;

  if (nextSlide == null) {
    const firstSlide = slides[0];

    edgeElementsHandler(track, firstSlide, currentSlide);
  }
  moveToSlide(track, currentSlide, nextSlide);
});

prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.previousElementSibling;

  if (nextSlide == null) {
    const lastSlide = slides[slides.length - 1];

    edgeElementsHandler(track, lastSlide, currentSlide);
  }
  moveToSlide(track, currentSlide, nextSlide);
});
