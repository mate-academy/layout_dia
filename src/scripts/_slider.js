export function initSlider() {
  const images = document.querySelectorAll(".slider__img");
  const leftButton = document.querySelector(".slide__left");
  const rightButton = document.querySelector(".slide__right");

  if (!leftButton || !rightButton || images.length === 0) {
    console.error("Slider buttons or images are missing!");
    return;
  }

  let currentIndex = 0;

  function updateSlide(index) {
    images.forEach((img, i) => {
      img.classList.toggle("active", i === index);
    });
  }

  leftButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlide(currentIndex);
  });

  rightButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlide(currentIndex);
  });

  updateSlide(currentIndex);
}
