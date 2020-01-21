'use strict';

const burgerMenu = document.body.querySelector('.burger-menu');
const headerNavUl = document.body.querySelector('.header__nav-list');
const HeaderHireUs = document.body.querySelector('.header__hire-us-link');

burgerMenu.addEventListener('click', (e) => {
  burgerMenu.classList.toggle('opend-menu');
  headerNavUl.classList.toggle('move-ul');
  HeaderHireUs.classList.toggle('move-hire-us');
});

// SLIDER

const SliderImg = document.body.querySelectorAll('.slider__img');
const SliderItem = document.body.querySelector('.slider__item');

document.body.addEventListener('click', (e) => {
  const target = e.target;
  const width = parseInt(getComputedStyle(SliderImg[0]).width);

  if (target.classList.contains('slider__navigation__arrows-item--left')) {
    const position = parseInt(getComputedStyle(SliderItem).left);

    if ((position + width) > 0) {
      SliderItem.style.left = -(SliderImg.length - 1) * width + 'px';

      return;
    }
    SliderItem.style.left = (position + width) + 'px';
  } else if (
    target.classList.contains('slider__navigation__arrows-item--right')
  ) {
    const position = parseInt(getComputedStyle(SliderItem).left);

    if ((position - width) < (-(SliderImg.length - 1) * width)) {
      SliderItem.style.left = 0 + 'px';

      return;
    }
    SliderItem.style.left = (position - width) + 'px';
  }
});
