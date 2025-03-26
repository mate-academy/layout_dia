import {
  sliderContainer,
  sliderItems,
  sliderList,
} from '../vars/vars';

let sliderContainerWidth = 0;
let currentPosition = 0;
let isAnimating = false;

export function updateSliderWidth() {
  sliderContainerWidth = sliderContainer.clientWidth;
  sliderList.style.transform = `translateX(-${sliderContainerWidth * currentPosition}px)`;
}

export function moveSlide(direction) {
  if (isAnimating) return;
  isAnimating = true;

  if (direction === 'next') {
    currentPosition =
      (currentPosition + 1) % sliderItems.length;
  } else {
    currentPosition =
      (currentPosition - 1 + sliderItems.length) %
      sliderItems.length;
  }

  sliderList.style.transform = `translateX(-${sliderContainerWidth * currentPosition}px)`;

  setTimeout(() => {
    isAnimating = false;
  }, 300);
}
