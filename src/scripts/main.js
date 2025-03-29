'use strict';
document.addEventListener('DOMContentLoaded', () => {

  // #region theme-switcher
  const page = document.querySelector('.page');
  const menu = document.querySelector('#menu');
  const switchers = document.querySelectorAll('.top-bar__theme-switcher');

  switchers.forEach(switcher => {
    switcher.addEventListener('click', () => {
      if (page.classList.contains('page--theme--dark')) {
          page.classList.remove('page--theme--dark');
          menu.classList.remove('menu--theme--dark');
          switchers.forEach(sw => sw.classList.remove('top-bar__theme-switcher--theme--dark'));
      } else {
          page.classList.add('page--theme--dark');
          menu.classList.add('menu--theme--dark');
          switchers.forEach(sw => sw.classList.add('top-bar__theme-switcher--theme--dark'));
      }
    });
  });
  // #endregion

  // #region services cards
  const template = document.getElementById('servicesCardTemplate').content;
  const servicesCards = document.getElementById('services__cards');

  const cardsData = [
    { number: '01', options: ['Brand Development', 'Copywriting', 'Logo & Website Design', 'Packaging'] },
    { number: '02', options: ['Сontent Production', 'Graphic Design', 'Video Production', 'Post Production'] },
    { number: '03', options: ['Marketing Strategy', 'Email Marketing', 'Paid Advertising', 'Blog Content & SEO'] },
    { number: '04', options: ['Digital Communications', 'Influencer Marketing', 'Product Placements', 'Strategic Partnerships'] }
  ];

  cardsData.forEach((data, index) => {
    const card = template.cloneNode(true);
    card.querySelector('.services__number').textContent = data.number;
    card.querySelector('.services__list').innerHTML = data.options.map(option => `<li class="services__option services__option">${option}</li>`).join('');
    const cardElement = card.querySelector('.services__card');
    cardElement.classList.add(`services__card--${index + 1}`);
    servicesCards.appendChild(card);
  });
  // #endregion

  // #region reload page after sending form
  document.getElementById('footer__form').addEventListener('submit', function(event) {

    setTimeout(function() {
            location.reload();
    }, 1000);

  })
  // #endregion

  // #region slider scroll
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
  // #endregion

  // #region slider
  function slider() {
    const slider = document.querySelector('.slider');
    if (!slider) return;
    const slides = slider.querySelectorAll('.slider__slide');
    const countSlides = slides.length;
    const wrapper = document.querySelector('.slider__images');
    const prevBtn = document.querySelector('.header__slider-button--left');
    const nextBtn = document.querySelector('.header__slider-button--right');

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
  // #endregion
});

