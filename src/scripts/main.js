'use strict';


const imgPaths = [
  'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1558369178-6556d97855d0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1503437313881-503a91226402?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const slider = document.querySelector('.slider');
const arrowLeft = slider.querySelector('.slider__arrow-btn--left');
const arrowRight = slider.querySelector('.slider__arrow-btn--right');
const sliderStyles = getComputedStyle(slider);

setSliderImg(0);

arrowLeft.addEventListener('click', () => {
  const currIndex = getCurrentImgIndex();
  const nextIndex = currIndex !== 0 ? currIndex - 1 : imgPaths.length - 1;

  setSliderImg(nextIndex);
});

arrowRight.addEventListener('click', () => {
  const currIndex = getCurrentImgIndex();
  const nextIndex = currIndex !== imgPaths.length - 1 ? currIndex + 1 : 0;

  setSliderImg(nextIndex);
});

function getCurrentImgIndex() {
  const backgroundProperty = sliderStyles.backgroundImage;

  const currentImgPath =
    backgroundProperty.startsWith('url("') ||
    backgroundProperty.startsWith("url('")
      ? backgroundProperty.slice(5, -2)
      : backgroundProperty.slice(4, -1);

  return imgPaths.findIndex((imgPath) => imgPath === currentImgPath);
}

function setSliderImg(index) {
  slider.style.backgroundImage = 'url(' + imgPaths[index] + ')';
}
