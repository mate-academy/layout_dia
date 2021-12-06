'use strict';

class Slider {
  constructor(sliderElement, slidesWrap, delay = 5000) {
    this.sliderTimeout = null;
    this._currentSlide = 0;
    this.slider = sliderElement;
    this.slidesWrap = slidesWrap;
    this.delay = delay;

    this.registEventHandlers();
  }

  set currentSlide(value) {
    if (value >= this.slidesCount) {
      this._currentSlide = 0;
    } else if (value < 0) {
      this._currentSlide = this.slidesCount - 1;
    } else {
      this._currentSlide = value;
    }

    this.slidesWrap.style.transform
      = `translateX(-${this.sliderBounds.width * this.currentSlide}px)`;
  }

  get currentSlide() {
    return this._currentSlide;
  }

  update() {
    this.sliderBounds = this.slider.getBoundingClientRect();
    this.slides = [...this.slidesWrap.children];
    this.slidesCount = this.slides.length;

    this.slides.forEach(el => {
      el.style.width = `${this.sliderBounds.width}px`;
    });

    const width = `${this.sliderBounds.width * this.slidesCount}px`;

    this.slidesWrap.style.width = width;

    this.startSlider();
  }

  startSlider() {
    this.currentSlide = 0;

    this.switchSlide(0);
  }

  switchSlide(dir = 'next') {
    clearTimeout(this.sliderTimeout);

    if (dir === 'next') {
      this.currentSlide += 1;
    }

    if (dir === 'prev') {
      this.currentSlide -= 1;
    }

    this.sliderTimeout = setTimeout(() => {
      this.switchSlide();
    }, this.delay);
  }

  registEventHandlers() {
    window.addEventListener('resize', () => {
      this.update();
    });

    const lt = document.querySelector('.slider__nav--left');
    const rt = document.querySelector('.slider__nav--right');

    lt.addEventListener('click', () => {
      this.switchSlide('prev');
    });

    rt.addEventListener('click', () => {
      this.switchSlide();
    });
  }
}

const sliderEl = document.querySelector('.jsSlider');
const slidesWrapEl = document.querySelector('.jsSlidesWrap');

const slider = new Slider(sliderEl, slidesWrapEl, 3000);

slider.update();
