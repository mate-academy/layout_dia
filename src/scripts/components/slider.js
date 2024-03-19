export default function Slider() {
  const block = document.querySelector('.header__bottom');
  const slider = block.querySelector('.header__animation');
  const backArrow = block.querySelector('.header__slide-back');
  const forwardArrow = block.querySelector('.header__slide-forward');

  const totalSlides = slider.children.length;
  const totalWidth =
    Number(getComputedStyle(block).width.slice(0, -2)) * totalSlides;
  const slideWidth = totalWidth / totalSlides;
  let hover = false;
  let count = 0;
  let transformation = 0;

  function slideForward() {
    if (count === 3) {
      count = 0;
      transformation = 0;
      slider.style.transform = 'translateX(0px)';
    } else {
      slider.style.transform = `translateX(${transformation - slideWidth}px)`;

      count++;
      transformation -= slideWidth;
    }
  }

  function slideBack() {
    if (count === 0) {
      count = totalSlides - 1;
      transformation = -`${totalWidth - slideWidth}`;

      slider.style.transform = `translateX(-${totalWidth - slideWidth}px)`;
    } else {
      slider.style.transform = `translateX(${transformation + slideWidth}px)`;

      count--;
      transformation += slideWidth;
    }
  }

  function sliderShif() {
    slideForward();
  }

  let interval = setInterval(() => {
    sliderShif();
  }, 3000);

  block.addEventListener('mouseenter', () => {
    hover = true;
    clearInterval(interval);
    document.body.style.overflow = 'hidden';
  });

  slider.addEventListener('mouseleave', () => {
    document.body.style.overflow = 'auto';
    hover = false;

    interval = setInterval(() => {
      sliderShif();
    }, 3000);
  });

  block.addEventListener('mousewheel', (event) => {
    if (hover) {
      if (event.wheelDeltaY < 0) {
        slideForward();
      } else {
        slideBack();
      }
    }
  });

  backArrow.addEventListener('click', () => {
    slideBack();
  });

  forwardArrow.addEventListener('click', () => {
    slideForward();
  });
}
