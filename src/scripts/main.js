'use strict';

const menuShow = () => {
  const showMenu = document.querySelector('.show-menu');
  const hideMenu = document.querySelector('.close-menu');
  const navItem = document.querySelector('.nav__list');
  const nav = document.querySelector('.nav-header');

  showMenu.addEventListener('click', () => {
    nav.classList.add('show-nav');
    nav.classList.remove('hide-nav');
  });

  hideMenu.addEventListener('click', () => {
    nav.classList.add('hide-nav');
    nav.classList.remove('show-nav');
  });

  navItem.addEventListener('click', () => {
    nav.classList.remove('show-nav');
    nav.classList.add('hide-nav');
  });
};

menuShow();

let isScrolling = false;

window.addEventListener('scroll', throttleScroll, false);

function throttleScroll(e) {
  if (isScrolling === false) {
    window.requestAnimationFrame(function() {
      scrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}

document.addEventListener('DOMContentLoaded', scrolling, false);

const firstBox = document.querySelector('#animateRight');
const secondBox = document.querySelector('#animateTop');
const thirdBox = document.querySelector('#animateLeft');
const animateRight = document.querySelector('.animateRight');
const animateTop = document.querySelector('.animateTop');
const animateLeft = document.querySelector('.animateLeft');

function scrolling(e) {
  if (isPartiallyVisible(animateRight && animateTop && animateLeft)) {
    animateRight.classList.add('wowRight');
    animateTop.classList.add('wowTop');
    animateLeft.classList.add('wowLeft');
  }

  if (isPartiallyVisible(firstBox && secondBox && thirdBox)) {
    firstBox.classList.add('wowRight');
    secondBox.classList.add('wowTop');
    thirdBox.classList.add('wowLeft');
  }
}

function isPartiallyVisible(el) {
  const elementBoundary = el.getBoundingClientRect();
  const topTo = elementBoundary.top;
  const bottom = elementBoundary.bottom;
  const height = elementBoundary.height;

  return ((topTo + height >= 0) && (height + window.innerHeight >= bottom));
}

const slider = document.querySelectorAll('.slider .slide');
let currentSlide = 0;

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slider[currentSlide].className = 'slide';
  currentSlide = (n + slider.length) % slider.length;
  slider[currentSlide].className = 'slide showing';
}

const next = document.getElementById('next');
const previous = document.getElementById('previous');

next.onclick = function() {
  nextSlide();
};

previous.onclick = function() {
  previousSlide();
};
