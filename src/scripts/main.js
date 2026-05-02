'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const sliderBg = document.querySelector('.header__slider-bg');
  const titleEl = document.querySelector('.header__slider-title');
  const textEl = document.querySelector('.header__slider-text');

  const prevBtn = document.querySelector('.js-prev');
  const nextBtn = document.querySelector('.js-next');

  const slides = [
    {
      image: './src/images/slider/header-photo.jpg',
      title: 'Intro',
      text: 'By the same illusion which lifts the horizon.',
    },
    {
      image: './src/images/slider/header-photo-2.jpg',
      title: 'Strategy',
      text: 'We build strong ideas for strong brands.',
    },
    {
      image: './src/images/slider/header-photo-3.jpg',
      title: 'Design',
      text: 'Creative solutions that work in real life.',
    },
    {
      image: './src/images/slider/header-photo-4.jpg',
      title: 'Design',
      text: 'Creative solutions that work in real life.',
    },
  ];

  let currentIndex = 0;

  function renderSlide() {
    const slide = slides[currentIndex];

    sliderBg.style.backgroundImage = `url(${slide.image})`;
    titleEl.textContent = slide.title;
    textEl.textContent = slide.text;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    renderSlide();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    renderSlide();
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  renderSlide();
});
