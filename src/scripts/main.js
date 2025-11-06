'use strict';
//#region slider
  const slider = document.querySelector('.header__slider');
  const classes = ['header__slider--1', 'header__slider--2', 'header__slider--3', 'header__slider--4'
];
  let currentIndex = 0;
  let autoPlayInterval;

  function updateSlider() {

    classes.forEach(className => {
      slider.classList.remove(className);
    });

    slider.classList.add(classes[currentIndex]);
  }

  function startAutoPlay() {

    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
    }

    autoPlayInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % classes.length;
      updateSlider();
    }, 5000);
  }

  document.querySelector(".icon--prev").onclick = () => {
    currentIndex = (currentIndex - 1 + classes.length) % classes.length;
    updateSlider();
    startAutoPlay();
  };

  document.querySelector(".icon--next").onclick = () => {
    currentIndex = (currentIndex + 1) % classes.length;
    updateSlider();
    startAutoPlay();
  };

  startAutoPlay();

  updateSlider();

//#endregion
//#region light-mode
const page = document.querySelector('.page');
const switcher = document.querySelector('.theme-switcher');

switcher.addEventListener('click', () => {
  if (page.classList.contains('page--theme-dark')) {
    page.classList.remove('page--theme-dark');
    switcher.classList.remove('theme-switcher--theme-dark');
  } else {
    page.classList.add('page--theme-dark');
    switcher.classList.add('theme-switcher--theme-dark');
  }
});
//#endregion
