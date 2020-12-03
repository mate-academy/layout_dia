'use strict';

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  document.location.reload();
  event.preventDefault();
});

const scene = document.querySelector('.vision--scene');

function parallax(event) {
  this.querySelectorAll('.vision__wrap').forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    const halfWidth = scene.clientWidth / 2;
    const halfHeight = scene.clientHeight / 2;

    // eslint-disable-next-line max-len
    layer.style.transform = 'translateX(' + -(event.clientX - halfWidth) * speed / 100 + 'px) translateY(' + -(event.clientY - halfHeight) * speed / 100 + 'px) rotate(-65.1deg)';
  });
}

document.addEventListener('mousemove', parallax);

const circle = document.querySelector('.page__progress-ring-circle');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference} ${circumference}`;

window.addEventListener('scroll', progressBar);

function progressBar(event) {
  // eslint-disable-next-line max-len
  const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
  // eslint-disable-next-line max-len
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  const percent = windowScroll / windowHeight * 100;

  circle.style.strokeDashoffset = -percent * 2.27 + '%';
}

const navScrolledposition = document.querySelector('.header__nav-bg-wrapper');

const progBar = document.querySelector('.page__prog-bar');

function scrollFromTop() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 60) {
    navScrolledposition.style.top = '0';
    navScrolledposition.classList.add('header__nav-bg-wrapper--shadow');
  } else {
    navScrolledposition.style.top = '37px';
    navScrolledposition.classList.remove('header__nav-bg-wrapper--shadow');
  }

  if (scrollTop > window.innerHeight / 3) {
    progBar.style.opacity = 1;
  } else {
    progBar.style.opacity = 0;
  }
}
window.addEventListener('scroll', scrollFromTop);

/* eslint-env jquery */
$(document).ready(function() {
  $('.header__slider').bxSlider({
    slideSelector: '.header__slide',
    wrapperClass: 'header__slider',
    nextSelector: '.header__controls-next',
    prevSelector: '.header__controls-prev',
    nextText: '',
    prevText: '',
    pager: false,
    auto: true,
    maxSlides: 1,
    shrinkItems: true,
  });
});
