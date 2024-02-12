const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const slideWith = slides[0].getBoundingClientRect().width;
const setSlidePosition = (slide, index)=>{
    slide.style.left = slideWith * index + "px";
};
slides.forEach(setSlidePosition);
// eslint-disable-next-line no-shadow
const moveToSlide = (track, currentSlide, targetSlide)=>{
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
};
prevButton.addEventListener("click", (e)=>{
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(track, currentSlide, prevSlide);
});
nextButton.addEventListener("click", (e)=>{
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlide(track, currentSlide, nextSlide);
});

//# sourceMappingURL=index.f75de5e1.js.map
