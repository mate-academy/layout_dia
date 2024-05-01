import {
  prevSlide,
  nextSlide,
  prevBtn,
  nextBtn,
} from './slider.js';
import { handleScrollSnap } from './scrollSnap.js';
import { handleHoverDelay } from './hoverDelay.js';
import { checkElementsInViewport } from './viewportChecker.js';

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

handleScrollSnap();
handleHoverDelay();

document.addEventListener('DOMContentLoaded', function() {
  checkElementsInViewport();
  window.addEventListener('resize', checkElementsInViewport);
  window.addEventListener('scroll', checkElementsInViewport);
});
