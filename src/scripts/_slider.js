const track = document.querySelector('.slider__track');
const originalSlides = document.querySelectorAll('.slide');

const leftButton = document.querySelector('.slider__button--left');
const rightButton = document.querySelector('.slider__button--right');

const firstSlideClone = originalSlides[0].cloneNode(true);
const lastSlideClone =
  originalSlides[originalSlides.length - 1].cloneNode(true);

track.append(firstSlideClone);
track.prepend(lastSlideClone);

const slides = document.querySelectorAll('.slide');

let currentSlide = 1;
let isMoving = false;

function showSlide(withAnimation = true) {
  track.style.transition = withAnimation
    ? 'transform 0.4s ease'
    : 'none';

  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

showSlide(false);

rightButton.addEventListener('click', () => {
  if (isMoving) {
    return;
  }

  isMoving = true;
  currentSlide++;
  showSlide();
});

leftButton.addEventListener('click', () => {
  if (isMoving) {
    return;
  }

  isMoving = true;
  currentSlide--;
  showSlide();
});

track.addEventListener('transitionend', () => {
  if (currentSlide === slides.length - 1) {
    currentSlide = 1;
    showSlide(false);
  }

  if (currentSlide === 0) {
    currentSlide = slides.length - 2;
    showSlide(false);
  }

  isMoving = false;
});
