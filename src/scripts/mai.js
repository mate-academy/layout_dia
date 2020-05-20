let btnRight = document.querySelector(".header__button");
let slides = document.querySelectorAll(".header__img");

let i = 0;

btnRight.addEventListener("click", function () {

  ++i
  if (i >= slides.length) {
    slides[i-1].classList.remove("block");

    i = 0;
    slides[i].classList.add("block");

  } else {
    slides[i-1].classList.remove("block");
    slides[i].classList.add("block");
  }
});

