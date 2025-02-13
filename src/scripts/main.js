'use strict';

function headerScroll() {
  const header = document.querySelector('header.header');

  document.addEventListener('scroll', function (e) {
    const scrollTop = window.scrollY;

    if (scrollTop > 0) {
      if (!header.classList.contains('_header-scroll')) {
        header.classList.add('_header-scroll');
      }
    } else {
      header.classList.remove('_header-scroll');
    }
  });
}
headerScroll();

function asideButton() {
  const button = document.querySelector('.action-button');

  button.addEventListener('click', function (e) {
    const button = e.currentTarget;

    addEventListener('hashchange', (event) => {
      if (event.oldURL.includes('#aside')) {
        button.classList.remove('active');
      }
    });

    if (button.classList.contains('active')) {
      e.preventDefault();
      window.location.hash = ' ';
      button.classList.remove('active');
    } else {
      button.classList.add('active');
    }
  });
}
asideButton();

function slider() {
  const slider = document.querySelector('.slider');
  if (!slider) return;
  const slides = slider.querySelectorAll('.slider__slide');
  const countSlides = slides.length;
  const wrapper = document.querySelector('.slider__wrapper');
  const prevBtn = document.querySelector('.slider__button--prev');
  const nextBtn = document.querySelector('.slider__button--next');

  let pressed = true;
  let x;
  let startx;

  let step = 0;
  let currentPosition = 0;
  let limitPosition = 0;
  let widthSlider = 0;

  function initSlides() {
    currentPosition = 0;
    step = slider.offsetWidth;
    widthSlider = step * countSlides;
    limitPosition = -widthSlider + step;
    wrapper.style.width = `${widthSlider}px`;
    wrapper.style.left = currentPosition + 'px';
    slides.forEach((item) => {
      item.style.width = `${step}px`;
    });
    prevBtn.classList.add('non-active');
  }
  initSlides();

  function moveSlider(direction) {
    if (direction === 'prev' && currentPosition < 0) {
      currentPosition += step;
      prevBtn.classList.remove('non-active');
    } else {
      if (direction === 'next' && limitPosition != currentPosition) {
        currentPosition -= step;
        prevBtn.classList.remove('non-active');
      } else {
        currentPosition = 0;
        prevBtn.classList.add('non-active');
      }
    }
    if (currentPosition === 0) {
      prevBtn.classList.add('non-active');
    }
    wrapper.style.left = currentPosition + 'px';
  }

  window.addEventListener('resize', (e) => {
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout(function () {
      initSlides();
    }, 150);
  });

  let autoScrollInterval = setInterval(nextSlideInterval, 3000);

  function nextSlideInterval() {
    moveSlider('next');
  }

  slider.addEventListener('mousemove', (e) => {
    e.preventDefault();
    clearInterval(autoScrollInterval);
  });

  slider.addEventListener('mouseleave', () => {
    autoScrollInterval = setInterval(nextSlideInterval, 3000);
  });

  slider.addEventListener('mousedown', (e) => {
    if (!e.target.closest('button')) {
      startx = e.offsetX;
    }
  });

  slider.addEventListener('mouseup', (e) => {
    if (!e.target.closest('button')) {
      x = e.offsetX;

      if (startx < x) {
        moveSlider('prev');
      } else {
        moveSlider('next');
      }
    }
  });

  slider.addEventListener('touchstart', (e) => {
    if (!e.target.closest('button')) {
      startx = e.touches[0].clientX;
    }
  });

  slider.addEventListener('touchend', (e) => {
    if (!e.target.closest('button')) {
      x = e.changedTouches[0].clientX;
      if (startx < x) {
        moveSlider('prev');
      } else {
        moveSlider('next');
      }
    }
  });

  prevBtn.addEventListener('click', function () {
    moveSlider('prev');
  });

  nextBtn.addEventListener('click', function () {
    moveSlider('next');
  });
}
slider();

function switchTheme() {
  const page = document.querySelector('.page');
  const switcher = document.querySelector('.theme-switcher');
  switcher.addEventListener('click', () => {
    if (page.classList.contains('page--theme--dark')) {
      page.classList.remove('page--theme--dark');
    } else {
      page.classList.add('page--theme--dark');
    }
  });
}
switchTheme();
