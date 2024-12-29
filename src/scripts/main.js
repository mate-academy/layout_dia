'use strict'

const arrowNext = document.querySelector('.arrow--right');
const arrowPrev = document.querySelector('.arrow--left');
const images = document.querySelectorAll('.slider__img');
let countImages = images.length;
let active = 0; // Start with the first image

// Function to start or change slider state
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

// Function to start slider after images are loaded
const initSlider = () => {
  updateSlider(); // Update the slider
  arrowNext.onclick = () => {
    active = (active + 1) % countImages; // Move to the next image
    updateSlider();
  };

  arrowPrev.onclick = () => {
    active = (active - 1 + countImages) % countImages; // Move to the previous image
    updateSlider();
  };
};

// Check if all images are loaded
let imagesLoaded = 0;
images.forEach((img) => {
  if (img.complete) {
    imagesLoaded++;
  } else {
    img.onload = () => {
      imagesLoaded++;
      if (imagesLoaded === countImages) {
        initSlider(); // All images loaded, start the slider
      }
    };
    img.onerror = () => {
      imagesLoaded++;
      if (imagesLoaded === countImages) {
        initSlider(); // Handle case where an image fails to load
      }
    };
  }
});

// Start slider if all images are already loaded
if (imagesLoaded === countImages) {
  initSlider();
}
