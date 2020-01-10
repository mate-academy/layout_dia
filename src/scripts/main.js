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

  if (target.classList.contains('intro__arrows-item--left')) {
    const position = parseInt(getComputedStyle(SliderItem).left);

    if ((position + 687) > 0) {
      SliderItem.style.left = -(SliderImg.length - 1) * 687 + 'px';

      return;
    }
    SliderItem.style.left = (position + 687) + 'px';
  } else if (target.classList.contains('intro__arrows-item--right')) {
    const position = parseInt(getComputedStyle(SliderItem).left);

    if ((position - 687) < (-(SliderImg.length - 1) * 687)) {
      SliderItem.style.left = 0 + 'px';

      return;
    }
    SliderItem.style.left = (position - 687) + 'px';
  }
});
