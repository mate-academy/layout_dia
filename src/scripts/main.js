'use strict';

/* создаем бургер на экранах, меньше 991px */

const burgerMenu = document.querySelector('.burger__menu');
const pageBody = document.querySelector('.page__body');
const slider = document.querySelector('.slider');

document.addEventListener('click', function(event) {
  const e = event.target;

  if (e.closest('.burger__icon')) {
    burgerMenu.classList.toggle('active');
    pageBody.classList.toggle('lock');

    setTimeout(function() {
      slider.classList.toggle('none');
    }, 200);
  }

  if (burgerMenu.classList.contains('active') && e.closest('.nav__link')) {
    burgerMenu.classList.toggle('active');
    pageBody.classList.toggle('lock');
  }
});

/* Слайдер */

let count = 1;
const sliderText = document.querySelector('.slider__text');

function clickPrev() {
  const sliderParagraph = document.querySelector('.slider__paragraph');

  if (!document.querySelector('.page').classList.contains('colors')) {
    slider.classList.remove(`slider--mod-${count}`);
    sliderParagraph.remove();
  } else {
    slider.classList.remove(`colors__slider--${count}`);
    sliderParagraph.remove();
  }

  count--;

  if (count < 1) {
    count = 4;
  }

  if (!document.querySelector('.page').classList.contains('colors')) {
    setTimeout(function() {
      slider.classList.add(`slider--mod-${count}`);
    }, 300);
  } else {
    setTimeout(function() {
      slider.classList.add(`colors__slider--${count}`);
    }, 300);
  }

  const p = document.createElement('p');

  p.className = 'slider__paragraph';

  p.innerHTML = `${count} SLIDE`;

  sliderText.append(p);
}

function clickNext() {
  const sliderParagraph = document.querySelector('.slider__paragraph');

  if (!document.querySelector('.page').classList.contains('colors')) {
    slider.classList.remove(`slider--mod-${count}`);
    sliderParagraph.remove();
  } else {
    slider.classList.remove(`colors__slider--${count}`);
    sliderParagraph.remove();
  }

  count++;

  if (count > 4) {
    count = 1;
  }

  if (!document.querySelector('.page').classList.contains('colors')) {
    setTimeout(function() {
      slider.classList.add(`slider--mod-${count}`);
    }, 300);
  } else {
    setTimeout(function() {
      slider.classList.add(`colors__slider--${count}`);
    }, 300);
  }

  const p = document.createElement('p');

  p.className = 'slider__paragraph';

  p.innerHTML = `${count} SLIDE`;

  sliderText.append(p);
}

slider.addEventListener('click', function(event) {
  const e = event.target;

  if (e.closest('.arrow__prev')) {
    clickPrev();
  } else if (e.closest('.arrow__next')) {
    clickNext();
  }
});

/* Команды для версии сацта с альтернативной цветовой гаммой */

if (document.querySelector('.page').classList.contains('colors')) {
  /* Изменения header */
  document.querySelector('.header').classList.add('colors__header');

  /* Изменения пунктов меню */
  document.querySelectorAll('.nav__link').forEach(el => {
    el.classList.add('nav__link--color-mod');
  });

  /* Изменения пункта hire us */
  const navDecoration = document.querySelector('.nav__link--decoration');

  navDecoration.classList.add('nav__link--background-mod');

  /* Изменения для кнопок button */
  document.querySelectorAll('.button').forEach(function(el) {
    el.classList.add('colors__button');
  });

  /* Изменения слайдера */
  document.querySelector('.slider').classList.remove('slider--mod-1');
  document.querySelector('.slider').classList.add('colors__slider--1');
  document.querySelector('.slider').classList.add('slider--mod-radius');

  /* Изменения окраски в карточках секций sevices и testimonials */
  const cardColors = ['blue', 'yellow', 'green', 'pink'];
  const cards = document.querySelectorAll('.service-card');

  for (let i = 0; i < cardColors.length; i++) {
    cards[i].classList.add(cardColors[i]);
  }

  const cardColors2 = ['blue2', 'yellow2', 'pink2'];
  const cardImg = document.querySelectorAll('.card__img--mod');
  const cardQuote = document.querySelectorAll('.card__quote');

  for (let i = 0; i < cardColors2.length; i++) {
    cardImg[i].classList.add(cardColors2[i]);
    cardQuote[i].classList.add(cardColors2[i]);
  }

  /* Изменение background для секции vision */
  document.querySelector('.vision').classList.add('vision--mod-background');

  /* Изменения секции footer */
  const footer = document.querySelector('.footer');

  footer.classList.add('footer--mod');

  /* Изменения input и textarea */
  document.querySelectorAll('.form__input').forEach(el => {
    el.classList.add('form__input--border-mod');
  });

  const textarea = document.querySelector('.form__textarea');

  textarea.classList.add('form__textarea--border-mod');

  /* Изменения фона иконок соц. сетей при наведении */
  document.querySelectorAll('.contact__icons').forEach(el => {
    el.classList.add('contact__icons--background-mod');
  });
}
