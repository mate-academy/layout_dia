'use strict';

const cWhite = '#FFFFFF';
const cPink = '#FF9C8E';
const cOrange = '#FF7E6C';
const cBlueBackground = '#008AFF';
const cBlueInitial = '#2060F6';
const cBlueFooter = '#144ED4';
const cBlueHover = '#D2EBFF';
const cArcticBlue = '#56CCF2';
const cLightBlue = '#D2EBFF';
const cDarkGray = '#2C2C2C';
const cGray = '#6C788B';
const cGrayishBlue = '#C0CDD7';
const cGreen = '#15D850';
const cRed = '#F36363';
const cYellow = '#FCC91D';

document.addEventListener('DOMContentLoaded', function () {
  let slideIndex = 0;
  let isThemeGray = true;
  const buttons = document.querySelectorAll('.theme-changer');

  function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
      slideIndex = 0;
    } else if (index < 0) {
      slideIndex = totalSlides - 1;
    } else {
      slideIndex = index;
    }

    slides.forEach((slide, i) => {
      if (i === slideIndex) {
        slide.style.transform = 'translateX(0%)';
      } else {
        slide.style.transform = `translateX(${(i - slideIndex) * 100}%)`;
      }
    });
  }

  function moveSlide(n) {
    showSlide(slideIndex + n);
  }

  document
    .querySelector('.scrollers__ellipse--right')
    .addEventListener('click', () => {
      moveSlide(1);
    });

  document
    .querySelector('.scrollers__ellipse--left')
    .addEventListener('click', () => {
      moveSlide(-1);
    });

  showSlide(slideIndex);

  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      if (isThemeGray) {
        const inputs = document.querySelectorAll('.form__input');
        const elements = document.querySelectorAll('.theme-changer');

        slideIndex = 0;
        showSlide(slideIndex);
        isThemeGray = false;

        elements.forEach((element) => {
          element.style.setProperty('color', cGrayishBlue, 'important');
        });

        document.querySelector('.menu').style.backgroundColor = cBlueBackground;
        document.querySelector('.header').style.borderBottomLeftRadius =
          '200px';
        document.querySelector('.header').style.borderBottomRightRadius = '0';
        document.querySelector('.header').style.backgroundColor =
          cBlueBackground;
        document.querySelector('.top-bar__hire').classList.add('pink');
        document.querySelector('.header__button').style.borderRadius =
          '64px';
        document.querySelector('.header__button').style.backgroundColor =
          cPink;
        document.querySelectorAll('.button').forEach(function (button) {
          button.classList.add('button--pink-animated');
          button.classList.remove('button--animated');
        })
        document.querySelectorAll('.slide').forEach(function (slide) {
          if (window.matchMedia('(max-width: 1023px)').matches) {
            if (isThemeGray === true) {
              slide.style.borderRadius = '30px';
            } else {
              slide.style.borderTopLeftRadius = '200px';
              slide.style.borderTopRightRadius = '0';
              slide.style.borderBottomRightRadius = '0';
              slide.style.borderBottomLeftRadius = '0';
            }
          } else {
            if (isThemeGray === true) {
              slide.style.borderBottomRightRadius = '30px';
              slide.style.borderTopLeftRadius = '30px';
            } else {
              slide.style.borderTopLeftRadius = '200px';
              slide.style.borderTopRightRadius = '0';
              slide.style.borderBottomRightRadius = '0';
              slide.style.borderBottomLeftRadius = '0';
            }
          }
        });
        document.querySelector('.slide--1').src =
          '/purple-main-2x.2ce4199f.png';
        document.querySelector('.card__number--1').style.backgroundColor =
          'rgba(86, 204, 242, 0.1)';
        document.querySelector('.card__number--1').style.color =
          'rgb(86, 204, 242)';
        document.querySelector(
          '.learn-more__ellipse--1',
        ).style.backgroundColor = 'rgb(86, 204, 242)';
        document.querySelector('.card__number--2').style.backgroundColor =
          'rgba(252, 201, 29, 0.1)';
        document.querySelector('.card__number--2').style.color =
          'rgb(252, 201, 29)';
        document.querySelector(
          '.learn-more__ellipse--2',
        ).style.backgroundColor = 'rgb(252, 201, 29)';
        document.querySelector('.card__number--3').style.backgroundColor =
          'rgba(21, 216, 80, 0.1)';
        document.querySelector('.card__number--3').style.color =
          'rgb(21, 216, 80)';
        document.querySelector(
          '.learn-more__ellipse--3',
        ).style.backgroundColor = 'rgb(21, 216, 80)';
        document.querySelector('.card__number--4').style.backgroundColor =
          'rgba(243, 99, 99, 0.1)';
        document.querySelector('.card__number--4').style.color =
          'rgb(243, 99, 99)';
        document.querySelector(
          '.learn-more__ellipse--4',
        ).style.backgroundColor = 'rgb(243, 99, 99)';
        document.querySelector('.testimonial__picture--1').src =
          '/testimonial-blue-2x.ea161dc6.png';
        document.querySelector('.testimonial__picture--2').src =
          '/testimonial-yellow-2x.594891dc.png';
        document.querySelector('.testimonial__picture--3').src =
          '/testimonial-red-2x.43848943.png';
        document.querySelector('.testimonial__decoration-figure--1').src =
          '/quotes-blue-2x.9527ab50.png';
        document.querySelector('.testimonial__decoration-figure--2').src =
          '/quotes-yellow-2x.166a65ca.png';
        document.querySelector('.testimonial__decoration-figure--3').src =
          '/quotes-red-2x.3505c6c1.png';
        document
          .querySelector('.vision')
          .style.setProperty(
            '--bg-image',
            "url('colorful-shapes.3b7264f8.png')",
          );
        document.querySelector('.vision__button').style.borderRadius = '64px';
        document.querySelector('.vision__button').style.backgroundColor = cPink;
        document.querySelector('.footer').style.backgroundColor =
          cBlueBackground;
        document.querySelector('.footer').style.borderTopLeftRadius = '0';
        document.querySelector('.footer').style.borderTopRightRadius = '200px';
        document.querySelector('.footer').style.borderTopRightRadius = '200px';

        inputs.forEach(function (input) {
          input.style.borderBottom = `1px solid ${cWhite}`;
          input.style.backgroundColor = cBlueBackground;

          input.addEventListener('focus', function () {
            this.style.borderBottom = `2px solid ${cWhite}`;
          });

          input.addEventListener('blur', function () {
            this.style.borderBottom = `1px solid ${cWhite}`;
          });
        });

        document.querySelector('.form__button').style.borderRadius = '64px';
        document.querySelector('.form__button').style.backgroundColor = cPink;
        document.querySelectorAll('.media__icon').forEach(function (icon) {
          icon.classList.add('media__icon--pink');
          icon.classList.remove('media__icon--gray');
        });
      } else {
        const inputs = document.querySelectorAll('.form__input');
        const elements = document.querySelectorAll('.theme-changer');

        slideIndex = 0;
        showSlide(slideIndex);
        isThemeGray = true;

        elements.forEach((element) => {
          element.style.setProperty('color', cGray, 'important');
        });

        document.querySelector('.menu').style.backgroundColor = cDarkGray;
        document.querySelector('.header').style.borderBottomLeftRadius = '30px';
        document.querySelector('.header').style.borderBottomRightRadius =
          '30px';
        document.querySelector('.header').style.backgroundColor = cDarkGray;
        document.querySelector('.top-bar__hire').classList.remove('pink');
        document.querySelector('.header__button').style.borderRadius =
          '8px';
        document.querySelector('.header__button').style.backgroundColor =
          cBlueInitial;
        document.querySelectorAll('.button').forEach(function (button) {
          button.classList.remove('button--pink-animated');
          button.classList.add('button--animated');
        });
        document.querySelectorAll('.slide').forEach(function (slide) {
          if (window.matchMedia('(max-width: 1023px)').matches) {
            if (isThemeGray === true) {
              slide.style.borderRadius = '30px';
            } else {
              slide.style.borderTopLeftRadius = '200px';
              slide.style.borderTopRightRadius = '0';
              slide.style.borderBottomLeftRadius = '0';
              slide.style.borderBottomRightRadius = '0';
            }
          } else {
            if (isThemeGray === true) {
              slide.style.borderBottomRightRadius = '30px';
              slide.style.borderTopLeftRadius = '30px';
            } else {
              slide.style.borderTopLeftRadius = '200px';
              slide.style.borderTopRightRadius = '0';
              slide.style.borderBottomLeftRadius = '0';
              slide.style.borderBottomRightRadius = '0';
            }
          }
        });
        document.querySelector('.slide--1').src = '/gray-main.f4d414f5.png';
        document.querySelector('.card__number--1').style.backgroundColor =
          'rgba(32, 96, 246, 0.1)';
        document.querySelector('.card__number--1').style.color =
          'rgb(32, 96, 246)';
        document.querySelector(
          '.learn-more__ellipse--1',
        ).style.backgroundColor = 'rgb(32, 96, 246)';
        document.querySelector('.card__number--2').style.backgroundColor =
          'rgba(32, 96, 246, 0.1)';
        document.querySelector('.card__number--2').style.color =
          'rgb(32, 96, 246)';
        document.querySelector(
          '.learn-more__ellipse--2',
        ).style.backgroundColor = 'rgb(32, 96, 246)';
        document.querySelector('.card__number--3').style.backgroundColor =
          'rgba(32, 96, 246, 0.1)';
        document.querySelector('.card__number--3').style.color =
          'rgb(32, 96, 246)';
        document.querySelector(
          '.learn-more__ellipse--3',
        ).style.backgroundColor = 'rgb(32, 96, 246)';
        document.querySelector('.card__number--4').style.backgroundColor =
          'rgba(32, 96, 246, 0.1)';
        document.querySelector('.card__number--4').style.color =
          'rgb(32, 96, 246)';
        document.querySelector(
          '.learn-more__ellipse--4',
        ).style.backgroundColor = 'rgb(32, 96, 246)';
        document.querySelector('.testimonial__picture--1').src =
          '/testimonial-1-2x.092d444a.png';
        document.querySelector('.testimonial__picture--2').src =
          '/testimonial-2-2x.00b8c72c.png';
        document.querySelector('.testimonial__picture--3').src =
          '/testimonial-3-2x.9525e7fa.png';
        document.querySelector('.testimonial__decoration-figure--1').src =
          '/quotes-2x.37316c48.png';
        document.querySelector('.testimonial__decoration-figure--2').src =
          '/quotes-2x.37316c48.png';
        document.querySelector('.testimonial__decoration-figure--3').src =
          '/quotes-2x.37316c48.png';
        document
          .querySelector('.vision')
          .style.setProperty('--bg-image', "url('shapes.738cb45c.png')");
        document.querySelector('.vision__button').style.borderRadius = '8px';
        document.querySelector('.vision__button').style.backgroundColor =
          cBlueInitial;
        document.querySelector('.footer').style.backgroundColor = cDarkGray;
        document.querySelector('.footer').style.borderTopLeftRadius = '30px';
        document.querySelector('.footer').style.borderTopRightRadius = '30px';

        inputs.forEach(function (input) {
          input.style.borderBottom = `2px solid ${cWhite}`;
          input.style.backgroundColor = cDarkGray;

          input.addEventListener('focus', function () {
            this.style.borderBottom = `2px solid ${cBlueFooter}`;
          });

          input.addEventListener('blur', function () {
            this.style.borderBottom = `2px solid ${cWhite}`;
          });
        });

        document.querySelector('.form__button').style.borderRadius = '8px';
        document.querySelector('.form__button').style.backgroundColor =
          cBlueInitial;
        document.querySelectorAll('.media__icon').forEach(function (icon) {
          icon.classList.add('media__icon--gray');
          icon.classList.remove('media__icon--pink');
        })
      }
    });
  });
});
