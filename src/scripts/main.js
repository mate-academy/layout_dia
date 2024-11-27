'use strict';

document.addEventListener("DOMContentLoaded", () => {

  const mobileSlides = document.querySelectorAll(".header__slider--mobile .slide");
  const desktopSlides = document.querySelectorAll(".header__slider--desktop .slide-desktop");


  const mobilePrevButton = document.querySelector(".header__slider--mobile .prev");
  const mobileNextButton = document.querySelector(".header__slider--mobile .next");
  const desktopPrevButton = document.querySelector(".header__slider--desktop .prev-desktop");
  const desktopNextButton = document.querySelector(".header__slider--desktop .next-desktop");


  let mobileCurrentIndex = 0;
  let desktopCurrentIndex = 0;


  function changeSlide(slides, currentIndex, direction) {

    slides[currentIndex].classList.remove("active");


    if (direction === "next") {
      currentIndex = (currentIndex + 1) % slides.length;
    } else if (direction === "prev") {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    }


    slides[currentIndex].classList.add("active");

    return currentIndex;
  }


  mobileNextButton.addEventListener("click", () => {
    mobileCurrentIndex = changeSlide(mobileSlides, mobileCurrentIndex, "next");
  });

  mobilePrevButton.addEventListener("click", () => {
    mobileCurrentIndex = changeSlide(mobileSlides, mobileCurrentIndex, "prev");
  });


  desktopNextButton.addEventListener("click", () => {
    desktopCurrentIndex = changeSlide(desktopSlides, desktopCurrentIndex, "next");
  });

  desktopPrevButton.addEventListener("click", () => {
    desktopCurrentIndex = changeSlide(desktopSlides, desktopCurrentIndex, "prev");
  });
});

