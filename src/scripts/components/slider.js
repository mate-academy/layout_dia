'use strict';

export default function Slider() {
  const block = document.querySelector('.js-header__bottom');
  const header = document.querySelector('.js-header__top');
  const slider = block.querySelector('.js-header__animation');
  const backArrow = block.querySelector('.js-header__slide-back');
  const forwardArrow = block.querySelector('.js-header__slide-forward');
  const aboutContainer = document.querySelector('.js-about-container');

  const totalSlides = slider.children.length;
  const totalWidth =
    Number(getComputedStyle(block).width.slice(0, -2)) * totalSlides;
  const slideWidth = totalWidth / totalSlides;
  let hover = false;
  let count = 0;
  let transformation = 0;
  let interval = setInterval(() => {
    slideForward();
  }, 3000);

  let touchStart = 0;
  let touchEnd = 0;

  function slideForward() {
    if (count === 3) {
      count = 0;
      transformation = 0;
      slider.style.transform = 'translateX(0px)';
    } else {
      slider.style.transform = `translateX(${transformation - slideWidth}px)`;

      count++;
      transformation -= slideWidth;
    }
  }

  function slideBack() {
    if (count === 0) {
      count = totalSlides - 1;
      transformation = -`${totalWidth - slideWidth}`;

      slider.style.transform = `translateX(-${totalWidth - slideWidth}px)`;
    } else {
      slider.style.transform = `translateX(${transformation + slideWidth}px)`;

      count--;
      transformation += slideWidth;
    }
  }

  block.addEventListener(
    'mouseenter',
    () => {
      clearInterval(interval);

      if (window.innerWidth > 1024) {
        const scrollWidth = `${window.innerWidth - document.body.clientWidth}px`;
        hover = true;

        header.style.marginRight = scrollWidth;
        aboutContainer.style.marginRight = scrollWidth;
        document.body.style.overflow = 'hidden';
      }
    },
    { passive: true },
  );

  block.addEventListener('mouseleave', () => {
    if (window.innerWidth > 1024) {
      document.body.style.overflow = 'auto';
      header.style.marginRight = '0';
      aboutContainer.style.marginRight = '0';
      hover = false;
    }

    interval = setInterval(() => {
      slideForward();
    }, 3000);
  });

  block.addEventListener(
    'mousewheel',
    (event) => {
      clearInterval(interval);

      if (hover) {
        if (event.wheelDeltaY < 0) {
          slideForward();
        } else {
          slideBack();
        }
      }
    },
    { passive: true },
  );

  backArrow.addEventListener('click', () => {
    clearInterval(interval);

    slideBack();
  });

  forwardArrow.addEventListener('click', () => {
    clearInterval(interval);

    slideForward();
  });

  function checkDirection() {
    if (touchEnd < touchStart) {
      clearInterval(interval);
      slideForward();

      interval = setInterval(() => {
        slideForward();
      }, 3000);
    }
    if (touchEnd > touchStart) {
      clearInterval(interval);
      slideBack();

      interval = setInterval(() => {
        slideForward();
      }, 3000);
    }
  }

  block.addEventListener('touchstart', (e) => {
    touchStart = e.changedTouches[0].screenX;
  });

  block.addEventListener('touchend', (e) => {
    touchEnd = e.changedTouches[0].screenX;
    checkDirection();
  });
}
