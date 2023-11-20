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

function compressImage() {
  const images = document.querySelectorAll('.slider');
  const compressedWidth = 0.54;

  images.forEach(function(image) {
    const originalWidth = image.naturalWidth;
    const compressedWidthValue = originalWidth * compressedWidth;

    image.style.width = compressedWidthValue + 'px';
  });
}
compressImage();

const formInput = document.querySelector('.form__input');
const additionalText = document.getElementById('additionalText');

additionalText.style.visibility = 'hidden';

formInput.addEventListener('input', () => {
  const inputValue = formInput.value.trim();

  if (inputValue !== 'email@exa') {
    additionalText.style.visibility = 'hidden';
  } else {
    additionalText.style.visibility = 'visible';
  }
});

formInput.addEventListener('focus', () => {
  additionalText.style.visibility = 'visible';
});

formInput.addEventListener('blur', () => {
  additionalText.style.visibility = 'hidden';
});
