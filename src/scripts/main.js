'use strict';

const slides = document.getElementsByClassName('slider__slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let slideIndex = 1;

showSlides(slideIndex);

function showSlides(m) {
  if (m < 1) {
    slideIndex = slides.length;
  } else if (m > slides.length) {
    slideIndex = 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'flex';

  function plussSlides(n) {
    showSlides(slideIndex += n);
  }

  prev.onclick = function() {
    plussSlides(-1);
  };

  next.onclick = function() {
    plussSlides(1);
  };
}

const changeTheme = document.getElementById('change-them');

changeTheme.onclick = function() {
  if (changeTheme.classList.contains('theme-light')) {
    changeTheme.classList.remove('theme-light');
    changeTheme.classList.add('theme-dark');

    changeTheme.style.background = '#2c2c2c';
    document.getElementById('header').style.backgroundColor = '#2060f6';
    document.getElementById('header').style.borderRadius = '0 0 0 100px';
    document.getElementById('button').style.background = '#FF9C8E';
    document.getElementById('button').style.borderRadius = '30px';
    document.getElementById('slider').style.borderRadius = '70px 30px 0 0';
    document.getElementById('slider').style.background = '#2060f6';
    document.getElementById('menu').style.background = '#FF9C8E';

    const slide = document.getElementById('slider__slide');

    slide.classList.remove('slider__slide--light');
    slide.classList.add('slider__slide--dark');

    const numYellow = document.getElementById('services__item-number-yellow');
    const arrowYellow = document.getElementById('services__item-arrow-yellow');

    numYellow.style.color = '#FCC91D';
    arrowYellow.style.background = '#FCC91D';

    const numGreen = document.getElementById('services__item-number-green');
    const arrowGreen = document.getElementById('services__item-arrow-green');

    numGreen.style.color = '#15D850';
    arrowGreen.style.background = '#15D850';

    const numRed = document.getElementById('services__item-number-red');
    const arrowRed = document.getElementById('services__item-arrow-red');

    numRed.style.color = '#F36363';
    arrowRed.style.background = '#F36363';

    // let people_1 = document.getElementById('testimonials__item-people-1');
    // let people_2 = document.getElementById('testimonials__item-people-2');
    // let people_3 = document.getElementById('testimonials__item-people-3');

    const vprBg = document.getElementById('vpr-bg-shapce');

    vprBg.classList.remove('vpr__content--dark');
    vprBg.classList.add('vpr__content--light');

    document.getElementById('vpr__btn').style.borderRadius = '30px';
    document.getElementById('vpr__btn').style.background = '#FF7E6C';

    document.getElementById('footer').style.background = '#2060f6';
    document.getElementById('footer').style.borderRadius = '0 100px 0 0';
    document.getElementById('contact-us-send-btn').style.background = '#FF7E6C';
    document.getElementById('contact-us-send-btn').style.borderRadius = '30px';

    const inputs = document.querySelectorAll('.contact-form__input');

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].style.borderBottom = '1px solid #fff';
    }
  } else {
    changeTheme.classList.remove('theme-dark');
    changeTheme.classList.add('theme-light');

    changeTheme.style.background = '#2060f6';
    document.getElementById('header').style.backgroundColor = '#2c2c2c';
    document.getElementById('header').style.borderRadius = '0';
    document.getElementById('button').style.background = '#2060f6';
    document.getElementById('button').style.borderRadius = '10px';
    document.getElementById('slider').style.borderRadius = '0';
    document.getElementById('slider').style.background = '#2c2c2c';
    document.getElementById('menu').style.background = '#2060f6';

    const slide = document.getElementById('slider__slide');

    slide.classList.remove('slider__slide--dark');
    slide.classList.add('slider__slide--light');

    const numYellow = document.getElementById('services__item-number-yellow');
    const arrowYellow = document.getElementById('services__item-arrow-yellow');

    numYellow.style.color = '#2060f6';
    arrowYellow.style.background = '#2060f6';

    const numGreen = document.getElementById('services__item-number-green');
    const arrowGreen = document.getElementById('services__item-arrow-green');

    numGreen.style.color = '#2060f6';
    arrowGreen.style.background = '#2060f6';

    const numRed = document.getElementById('services__item-number-red');
    const arrowRed = document.getElementById('services__item-arrow-red');

    numRed.style.color = '#2060f6';
    arrowRed.style.background = '#2060f6';

    const vprBg = document.getElementById('vpr-bg-shapce');

    vprBg.classList.remove('vpr__content--light');
    vprBg.classList.add('vpr__content--dark');

    document.getElementById('vpr__btn').style.borderRadius = '10px';
    document.getElementById('vpr__btn').style.background = '#2060f6';

    document.getElementById('footer').style.background = '#2c2c2c';
    document.getElementById('footer').style.borderRadius = '30px 30px 0 0';
    document.getElementById('contact-us-send-btn').style.background = '#2060f6';
    document.getElementById('contact-us-send-btn').style.borderRadius = '10px';

    const inputs = document.querySelectorAll('.contact-form__input');

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].style.borderBottom = '1px solid #fff';
    }
  }
};

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
  // const name = document.getElementById('name').value;
  // const email = document.getElementById('email').value;
  // const message = document.getElementById('message').value;
  // some code ...

  e.preventDefault();
  contactForm.reset();
});
