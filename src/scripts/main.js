const slider = document.querySelector('.slider');
const images = [
  "D:/projects/HTML_CSS/layout_dia/src/images/slider/slide-img-1.jfif",
  "D:/projects/HTML_CSS/layout_dia/src/images/slider/slide-img-2.jfif",
  "D:/projects/HTML_CSS/layout_dia/src/images/slider/slide-img-3.jfif"
];

let currentImageIndex = 0;

document.querySelector('.slider__arrow-button--left').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  slider.style.backgroundImage = `url('${images[currentImageIndex]}')`;
});

document.querySelector('.slider__arrow-button--right').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  slider.style.backgroundImage = `url('${images[currentImageIndex]}')`;
});
