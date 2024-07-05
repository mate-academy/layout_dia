// 'use strict';

const animItems = document.querySelectorAll('._anim_items');
const images = document.querySelectorAll('.slider__img'),
  controls = document.querySelectorAll('.slider__icon');
let imageIndex = 0;

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);

  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i],
        animItemHeight = animItem.offsetHeight,
        animItemOffset = offset(animItem).top,
        animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add('_active');
      }
    }
  }

  function offset(e) {
    const rect = e.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  animOnScroll();
}

document
  .querySelector('.footer__form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    this.reset();
  });

  function showSlide(i) {
    images[imageIndex].classList.remove('_active');
    images[i].classList.add('_active');
    imageIndex = i;
  }
  
  controls.forEach((e) => {
    e.addEventListener('click', (event) => {
      if (event.target.classList.contains('slider__icon-left')) {
        let index = imageIndex - 1;
  
        if (index < 0) {
          index = images.length - 1;
        }
  
        showSlide(index);
      } else if (event.target.classList.contains('slider__icon-right')) {
        let index = imageIndex + 1;
  
        if (index >= images.length) {
          index = 0;
        }
        showSlide(index);
      }
    });
  });
  
  showSlide(imageIndex);