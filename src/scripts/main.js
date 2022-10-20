'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body-menu');
  } else {
    document.body.classList.remove('page__body-menu');
  }
});

const form = document.querySelector('.send-us__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

const slider = document.querySelector('.slider__img');
const maxValueSlider = slider.children.length;
let indexSlide = 0;

const chooseIndexSlide = (e) => {
  const classArrow = e.target.classList;

  if (classArrow.contains('slider__intro-clicker-next')) {
    indexSlide++;
  }

  if (indexSlide === maxValueSlider) {
    indexSlide = 0;
  }

  if (classArrow.contains('slider__intro-clicker-prev')) {
    indexSlide--;
  }

  if (indexSlide === -maxValueSlider) {
    indexSlide = 0;
  }
};

slider.addEventListener('click', (e) => {
  e.preventDefault();
  chooseIndexSlide(e);

  if (indexSlide >= 0) {
    slider.style.transform = `translateX(${-indexSlide * 100}%)`;
  }

  if (indexSlide <= 0) {
    slider.style.transform = `translateX(${indexSlide * 100}%)`;
  }
});
