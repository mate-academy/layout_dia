'use strict';

window.addEventListener('load', () => {
  const button = document.getElementById('form-submit');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'https://UmizDemud.github.io/layout_dia/';
  });

  const slideshowItem = document
    .getElementsByClassName('slideshow__item')[0];
  const slideshowLeft = document.getElementById('slideshow_left');
  const slideshowRight = document.getElementById('slideshow_right');

  const slide = (num) => {
    const currentClass = slideshowItem.classList[1];
    let newOrder = (Number.parseInt(
      currentClass[currentClass.length - 1]) + num
    );

    if (newOrder === 0) {
      newOrder = 4;
    } else if (newOrder === 5) {
      newOrder = 1;
    }

    slideshowItem.classList.remove(currentClass);

    const newClass = currentClass
      .substring(0, currentClass.length - 1) + newOrder.toString();

    slideshowItem.classList.add(newClass);
  };

  slideshowLeft.addEventListener('click', () => {
    slide(-1);
  });

  slideshowRight.addEventListener('click', () => {
    slide(1);
  });
});
