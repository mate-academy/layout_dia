'use strict';
import baseSliderImg from '../images/slider/slide-img-0.png';
import firstSliderImg from '../images/slider/slide-img-1.jpg'
import secondSliderImg from '../images/slider/slide-img-2.jpg'
import thirdSliderImg from '../images/slider/slide-img-3.jpg'

const paginationButtons = document.querySelector('.slider_arrows');
const slider = document.querySelector('.slider');

const images = [baseSliderImg, firstSliderImg, secondSliderImg, thirdSliderImg];
let visibleImgIndex = 0;

const moveLeft = () => {
  if (visibleImgIndex === 0) {
    visibleImgIndex = images.length - 1;
  } else {
    visibleImgIndex -= 1;
  }
};

const moveRight = () => {
  if (visibleImgIndex === images.length - 1) {
    visibleImgIndex = 0
  } else {
    visibleImgIndex += 1;
  }
};

paginationButtons.addEventListener('click', (e) => {
  if (e.target.dataset.direction) {
    const { direction } = e.target.dataset;

    switch (direction) {
      case 'left':
        moveLeft();
        break;

      case 'right':
        moveRight();
        break;
    }

    slider.style.backgroundImage = `url("${images[visibleImgIndex]}")`;
  }
});
