const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button-right');
const prevButton = document.querySelector('.carousel__button-left');

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

window.addEventListener('resize', (e) => {
  slides.forEach(setSlidePosition);
});

// eslint-disable-next-line no-shadow
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

prevButton.addEventListener('click', (e) => {
  const currentSlide = track.querySelector('.current-slide');
  let prevSlide = currentSlide.previousElementSibling;

  if (!prevSlide) {
    prevSlide = slides[slides.length - 1];
  }
  moveToSlide(track, currentSlide, prevSlide);
});

nextButton.addEventListener('click', (e) => {
  const currentSlide = track.querySelector('.current-slide');
  let nextSlide = currentSlide.nextElementSibling;

  if (!nextSlide) {
    nextSlide = slides[0];
  }
  moveToSlide(track, currentSlide, nextSlide);
});
