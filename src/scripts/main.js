'use strict';

// Toggle Menu
const menuButton = document.querySelector('#menu');
const closeButton = document.querySelector('#cross');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');

menuButton.addEventListener('click', () => {
  document.body.classList.add('page__body--with-menu');
  nav.classList.add('nav--active');
  menuButton.classList.add('hidden');
  closeButton.classList.remove('hidden');
});

closeButton.addEventListener('click', () => {
  nav.classList.remove('nav--active');
  menuButton.classList.remove('hidden');
  closeButton.classList.add('hidden');
  document.body.classList.remove('page__body--with-menu');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav--active');
    menuButton.classList.remove('hidden');
    closeButton.classList.add('hidden');
    document.body.classList.remove('page__body--with-menu');
  });
});

// Header Slider
createSlider(document.querySelector('#slider'));

function createSlider(slider) {
  // Find required parts inside a given slider element
  const list = slider.querySelector('.slider__list');
  const prev = slider.querySelector('.slider__arrow-left');
  const next = slider.querySelector('.slider__arrow-right');

  // Find the number of slides
  const count = list.children.length;

  // Index of an active slide
  let position = 0;

  // Initilize the slider to show slide 0
  moveTo(0);

  function moveTo(newPosition) {
    // If we want to scroll to the first slide after the last
    // or to the last slide after the first
    position = normalizePozition(newPosition);

    // scroll the slides by required number of slides
    list.style.transform = `translateX(${-position * 100}%)`;
  }

  function moveRight() {
    moveTo(position + 1);
  }

  function moveLeft() {
    moveTo(position - 1);
  }

  function normalizePozition(newPosition) {
    let finalPositions = newPosition % count;

    if (finalPositions < 0) {
      finalPositions += count;
    }

    return finalPositions;
  }

  // when clicked, scroll in the desired direction
  next.addEventListener('click', function() {
    moveRight();
  });

  prev.addEventListener('click', function() {
    moveLeft();
  });

  // return an object with control methods
  return {
    moveTo,
    moveRight,
    moveLeft,
  };
}
