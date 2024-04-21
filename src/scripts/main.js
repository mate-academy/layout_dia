import { nextSlides, previousSlides } from './lib/slider';

const refs = {
  sliderArrowLeft: document.querySelector('.slider__arrow--left'),
  sliderArrowRight: document.querySelector('.slider__arrow--right'),
};

refs.sliderArrowRight.addEventListener('click', nextSlides);
refs.sliderArrowLeft.addEventListener('click', previousSlides);


