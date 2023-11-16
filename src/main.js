const sliderImages = document.querySelectorAll('.header__photo--slider img');
const leftArrow = document.querySelector('.header__arrow--leftArrow');
const rightArrow = document.querySelector('.header__arrow--rightArrow');
let currentSlideIndex = 0;

function showSlide() {
  sliderImages.forEach(slide => {
    slide.style.display = 'none';
  });

  sliderImages[currentSlideIndex].style.display = 'block';
}

leftArrow.addEventListener('click', () => {
  currentSlideIndex--;

  if (currentSlideIndex < 0) {
    currentSlideIndex = sliderImages.length - 1;
  }
  showSlide();
});

rightArrow.addEventListener('click', () => {
  currentSlideIndex++;

  if (currentSlideIndex >= sliderImages.length) {
    currentSlideIndex = 0;
  }
  showSlide();
});
showSlide();
