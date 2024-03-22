const slider = document.querySelector('.slider');
let currentSlide = 1;
const totalSlides = 3;

const leftArrow = document.querySelector('.slider__arrow--left');
const rightArrow = document.querySelector('.slider__arrow--right');

function changeBackgroundImage(direction) {
  slider.classList.remove(`slider--slide-${currentSlide}`);
  if (direction === 'next') {
    currentSlide = currentSlide === totalSlides ? 1 : currentSlide + 1;
  } else if (direction === 'prev') {
    currentSlide = currentSlide === 1 ? totalSlides : currentSlide - 1;
  }
  slider.classList.add(`slider--slide-${currentSlide}`);
}

leftArrow.addEventListener('click', function () {
  changeBackgroundImage('prev');
});

rightArrow.addEventListener('click', function () {
  changeBackgroundImage('next');
});

setInterval(() => {
  changeBackgroundImage('next');
}, 5000);
