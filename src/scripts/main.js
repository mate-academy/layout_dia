const arrowPrev = document.querySelector(".slider__bottom__icon__prev");
const arrowNext = document.querySelector(".slider__bottom__icon__next");
const slides = document.querySelectorAll(".slider__img");

let currentSlideIndex = 0;

function showSlide() {
  slides[currentSlideIndex].classList.add("block");
}

function hideSlide() {
  slides[currentSlideIndex].classList.remove("block");
}

function nextSlide() {
  hideSlide();
  currentSlideIndex++;
  if (currentSlideIndex > slides.length -1) {
    currentSlideIndex = 0;
  }

  showSlide();
}

function prevSlide() {
  hideSlide();
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length -1;
  }

  showSlide();
}

arrowPrev.addEventListener("click", prevSlide);
arrowNext.addEventListener("click", nextSlide);
