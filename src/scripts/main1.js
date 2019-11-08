(() => {
  const sliderInner = document.querySelector('.slider__inner');
  const buttonPrev = document.getElementById('next');
  const buttonNext = document.getElementById('prev');

  let step = 0;
  const imgWidth = 1146;
  const maxWidth = 4584;

  const id = setInterval(function() {
    step = step - imgWidth;
    if (step === -maxWidth) {
      step = 0;
    }
    sliderInner.style.cssText = `left:${step}px`;
  }, 4000);

  buttonNext.onclick = function() {
    clearInterval(id);
    step = step === -(maxWidth - imgWidth) ? step = 0 : step = step - imgWidth;
    sliderInner.style.cssText = `left:${step}px`;
  };

  buttonPrev.onclick = function() {
    clearInterval(id);
    step = step === 0 ? step = -(maxWidth - imgWidth) : step = step + imgWidth;
    sliderInner.style.cssText = `left:${step}px`;
  };

})();

//
// 'use strict';
//
// const sliderInner = document.querySelector('.slider__inner');
// const buttonPrev = document.getElementById('next');
// const buttonNext = document.getElementById('prev');
// const images = document.querySelectorAll('.slider__img');
// const imagesContainer = document.querySelector('.slider__container');
//
// setSize(currentWidth());
//
// function currentWidth() {
//   return document.body.clientWidth;
// }
//
// document.body.onresize = function () {
//   location.reload();
//   let newWidth = document.body.clientWidth;
//   let st = 0;
//   setSize(newWidth, st);
// };
//
//
// function setSize(w, s) {
//   s = 0;
//   for (let i = 0; i < images.length; i++) {
//     images[i].style.cssText = `width: ${w / 1.4}px; height: ${w * 0.56}px;`;
//   }
//   imagesContainer.style.cssText = `width: ${w / 1.4}px; height: ${w * 0.56}px;`;
//   let step = s;
//   const imgWidth = document.body.clientWidth / 1.4;
//   const maxWidth = (document.body.clientWidth / 1.4) * 4;
//
//   const id = setInterval(function () {
//     step = step - imgWidth;
//     if (step === -maxWidth) {
//       step = 0;
//     }
//     sliderInner.style.cssText = `left:${step}px`;
//   }, 4000);
//
//   buttonNext.onclick = nextClick;
//   function nextClick() {
//     clearInterval(id);
//     step = step === -(maxWidth - imgWidth) ? step = 0 : step = step - imgWidth;
//     sliderInner.style.cssText = `left:${step}px`;
//   }
//
//
//   buttonPrev.onclick = function () {
//     clearInterval(id);
//     step = step === 0 ? step = -(maxWidth - imgWidth) : step = step + imgWidth;
//     sliderInner.style.cssText = `left:${step}px`;
//
//   };
//   imagesContainer.onmousemove = nextClick;
// }
