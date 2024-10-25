'use strict';

import purpleMainImage from '../images/slider/purple-main-2x.png';
import grayMainImage from '../images/slider/gray-main.png';
import blueTestimonial1 from '../images/testimonials/testimonial-blue-2x.png';
import yellowTestimonial2 from '../images/testimonials/testimonial-yellow-2x.png';
import redTestimonial3 from '../images/testimonials/testimonial-red-2x.png';
import testimonial1 from '../images/testimonials/testimonial-1-2x.png';
import testimonial2 from '../images/testimonials/testimonial-2-2x.png';
import testimonial3 from '../images/testimonials/testimonial-3-2x.png';
import quotesBlue from '../images/testimonials/quotes-blue-2x.png';
import quotesYellow from '../images/testimonials/quotes-yellow-2x.png';
import quotesRed from '../images/testimonials/quotes-red-2x.png';
import quotesDefault from '../images/testimonials/quotes-2x.png';
import visionDefault from '../images/vision/shapes.png';
import visionColorful from '../images/vision/colorful-shapes.png';

const cWhite = '#FFFFFF';
const cPink = '#FF9C8E';
const cBlueBackground = '#008AFF';
const cBlueInitial = '#2060F6';
const cBlueFooter = '#144ED4';
const cDarkGray = '#2C2C2C';
const cGray = '#6C788B';
const cGrayishBlue = '#C0CDD7';

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
          element.style.setProperty('--color-text', cGrayishBlue, 'important');
          element.style.setProperty('--color-after', cGrayishBlue, 'important');
        });

        document.querySelector('.menu').style.backgroundColor = cBlueBackground;
        document.querySelector('.header').style.borderBottomLeftRadius =
          '200px';
        document.querySelector('.header').style.borderBottomRightRadius = '0';
        document.querySelector('.header').style.backgroundColor = cBlueBackground;
        document.querySelector('.top-bar__hire').classList.add('pink');
        document.querySelector('.header__button').style.borderRadius = '64px';
        document.querySelector('.header__button').style.backgroundColor = cPink;
        document.querySelectorAll('.button').forEach(function (button) {
          button.classList.add('button--pink-animated');
          button.classList.remove('button--animated');
        });
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

        document.querySelector('.slide--1').src = purpleMainImage;
        document.querySelector(
          '.card__number--1',
        ).style.backgroundColor = 'rgba(86, 204, 242, 0.1)';
        document.querySelector(
          '.card__number--1',
        ).style.color = 'rgb(86, 204, 242)';
        document.querySelector(
          '.learn-more__ellipse--1',
        ).style.backgroundColor = 'rgb(86, 204, 242)';
        document.querySelector(
          '.card__number--2',
        ).style.backgroundColor = 'rgba(252, 201, 29, 0.1)';
        document.querySelector(
          '.card__number--2',
        ).style.color = 'rgb(252, 201, 29)';
        document.querySelector(
          '.learn-more__ellipse--2',
        ).style.backgroundColor = 'rgb(252, 201, 29)';
        document.querySelector(
          '.card__number--3',
        ).style.backgroundColor = 'rgba(21, 216, 80, 0.1)';
        document.querySelector(
          '.card__number--3',
        ).style.color = 'rgb(21, 216, 80)';
        document.querySelector(
          '.learn-more__ellipse--3',
        ).style.backgroundColor = 'rgb(21, 216, 80)';
        document.querySelector(
          '.card__number--4',
        ).style.backgroundColor = 'rgba(243, 99, 99, 0.1)';
        document.querySelector(
          '.card__number--4',
        ).style.color = 'rgb(243, 99, 99)';
        document.querySelector(
          '.learn-more__ellipse--4',
        ).style.backgroundColor = 'rgb(243, 99, 99)';
        document.querySelector('.testimonial__picture--1').src =
          blueTestimonial1;
        document.querySelector('.testimonial__picture--2').src =
          yellowTestimonial2;
        document.querySelector('.testimonial__picture--3').src =
          redTestimonial3;
        document.querySelector('.testimonial__decoration-figure--1').src =
          quotesBlue;
        document.querySelector('.testimonial__decoration-figure--2').src =
          quotesYellow;
        document.querySelector('.testimonial__decoration-figure--3').src =
          quotesRed;
        document
          .querySelector('.vision')
          .style.setProperty(
            '--bg-image',
            `url(${visionColorful})`,
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
          element.style.setProperty('--color-text', cGray, 'important');
          element.style.setProperty('--color-after', cGray, 'important');
        });

        document.querySelector('.menu').style.backgroundColor = cDarkGray;
        document.querySelector('.header').style.borderBottomLeftRadius = '30px';
        document.querySelector('.header').style.borderBottomRightRadius =
          '30px';
        document.querySelector('.header').style.backgroundColor = cDarkGray;
        document.querySelector('.top-bar__hire').classList.remove('pink');
        document.querySelector('.header__button').style.borderRadius = '8px';
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

        document.querySelector('.slide--1').src = grayMainImage;
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
        document.querySelector('.testimonial__picture--1').src = testimonial1;
        document.querySelector('.testimonial__picture--2').src = testimonial2;
        document.querySelector('.testimonial__picture--3').src = testimonial3;
        document.querySelector('.testimonial__decoration-figure--1').src =
          quotesDefault;
        document.querySelector('.testimonial__decoration-figure--2').src =
          quotesDefault;
        document.querySelector('.testimonial__decoration-figure--3').src =
          quotesDefault;
        document
          .querySelector('.vision')
          .style.setProperty('--bg-image', `url(${visionDefault})`);
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
        });
      }
    });
  });
});
