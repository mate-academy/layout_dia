'use strict';

export const initSlider = () => {
  const track = document.querySelector('.slider__track');
  const btnPrev = document.querySelector('.slider__arrow--prev');
  const btnNext = document.querySelector('.slider__arrow--next');

  // 1. Guard Clause: если слайдер не найден на странице, тихо выходим
  if (!track || !btnPrev || !btnNext) {
    return;
  }

  const slides = Array.from(track.children);
  const totalSlides = slides.length;

  if (totalSlides === 0) {
    return;
  }

  let currentIndex = 0;

  const updateSlider = (index) => {
    currentIndex = (index + totalSlides) % totalSlides;
    const offsetPercentage = (100 / totalSlides) * currentIndex;

    track.style.transform = `translateX(-${offsetPercentage}%)`;
  };

  btnNext.addEventListener('click', () => {
    updateSlider(currentIndex + 1);
  });

  btnPrev.addEventListener('click', () => {
    updateSlider(currentIndex - 1);
  });

  track.parentElement?.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      updateSlider(currentIndex - 1);
    } else if (event.key === 'ArrowRight') {
      updateSlider(currentIndex + 1);
    }
  });
};
