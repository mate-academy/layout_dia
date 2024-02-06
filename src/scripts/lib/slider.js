const sliderList = document.querySelectorAll('.slider__item');

export function nextSlides() {
  const activeSlide = document.querySelector('.slider__item.active');
  let nextSlide;

  if ([...sliderList].indexOf(activeSlide) === sliderList.length - 1) {
    nextSlide = sliderList[0];
  } else {
    nextSlide = activeSlide.nextElementSibling;
  }

  activeSlide.classList.remove('active');
  nextSlide.classList.add('active');
}

export function previousSlides() {
  const activeSlide = document.querySelector('.slider__item.active');
  let previousSlide;

  if ([...sliderList].indexOf(activeSlide) === 0) {
    previousSlide = sliderList[sliderList.length - 1];
  } else {
    previousSlide = activeSlide.previousElementSibling;
  }

  activeSlide.classList.remove('active');
  previousSlide.classList.add('active');
}
