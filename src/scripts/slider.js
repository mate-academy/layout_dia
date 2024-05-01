export const slider = document.querySelector('.slider');
export const prevBtn = document.querySelector('.slider__button--left');
export const nextBtn = document.querySelector('.slider__button--right');

const IMG_AMOUNT = 3;
let imgIndex = 1;

export function prevSlide() {
  if (imgIndex > 1) {
    slider.classList.remove(`slider--slide-num--${imgIndex}`);
    imgIndex--;
    slider.classList.add(`slider--slide-num--${imgIndex}`);
  } else {
    slider.classList.remove(`slider--slide-num--${imgIndex}`);
    imgIndex = IMG_AMOUNT;
    slider.classList.add(`slider--slide-num--${imgIndex}`);
  }
}

export function nextSlide() {
  if (imgIndex < IMG_AMOUNT) {
    slider.classList.remove(`slider--slide-num--${imgIndex}`);
    imgIndex++;
    slider.classList.add(`slider--slide-num--${imgIndex}`);
  } else {
    slider.classList.remove(`slider--slide-num--${imgIndex}`);
    imgIndex = 1;
    slider.classList.add(`slider--slide-num--${imgIndex}`);
  }
}
