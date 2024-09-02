'use strict';
const arrowNext = document.querySelector('.arrow--right');
const arrowPrev = document.querySelector('.arrow--left');
const images = document.querySelectorAll('.slider__img');
let countImages = images.length;
let active = 0; // Start with the first image

// Function to initialize or change slider state
const updateSlider = () => {
  images.forEach((img, index) => {
    img.style.display =
      index === active ||
      index === (active - 1 + countImages) % countImages ||
      index === (active + 1) % countImages
        ? 'block'
        : 'none';
    img.classList.remove(
      'slider__img--active',
      'slider__img--inactive-1',
      'slider__img--inactive-2',
    );
    if (index === active) {
      img.classList.add('slider__img--active');
    } else if (index === (active - 1 + countImages) % countImages) {
      img.classList.add('slider__img--inactive-1');
    } else if (index === (active + 1) % countImages) {
      img.classList.add('slider__img--inactive-2');
    }
  });
};

// Event listeners for arrow buttons
arrowNext.onclick = () => {
  active = (active + 1) % countImages; // Move to next image
  updateSlider();
};

arrowPrev.onclick = () => {
  active = (active - 1 + countImages) % countImages; // Move to previous image
  updateSlider();
};

// Initialize the slider on page load
updateSlider();
