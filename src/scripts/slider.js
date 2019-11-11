"use strict";

  const sliderInner = document.querySelector(".slider__inner");
  const buttonPrev = document.getElementById("next");
  const buttonNext = document.getElementById("prev");
  const images = document.querySelectorAll(".slider__img");
  const imagesContainer = document.querySelector(".slider__container");


  let step = 0;
  const imgWidth = 100; // %
  const maxWidth = imgWidth * 4; // %

  setSize(currentWidth);
  buttonNext.onclick = nextClick;
  imagesContainer.onmousemove = nextClick;
  buttonPrev.onclick = prevClick;
  document.body.onresize = resizing;

  function currentWidth() {
    return document.body.clientWidth;
  }


  function resizing() {
    setSize(currentWidth);
  }

function setSize(callback) {
    let width = callback();
    images.forEach(
      item =>
        (item.style.cssText = `width: ${width / 1.4}px; height: ${width *
        0.4}px;`)
    );
    imagesContainer.style.cssText = `width: ${width / 1.4}px; height: ${width *
    0.4}px;`;
  }

  function nextClick() {
    step =
      step === -(maxWidth - imgWidth) ? (step = 0) : (step = step - imgWidth);
    sliderInner.style.cssText = `left:${step}%`;
  }

  function prevClick() {
    step =
      step === 0 ? (step = -(maxWidth - imgWidth)) : (step = step + imgWidth);
    sliderInner.style.cssText = `left:${step}%`;
  }



