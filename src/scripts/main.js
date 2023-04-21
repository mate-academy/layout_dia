// 'use strict';
// let slideIndex = 1;

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// const imgContainer = document.getElementById("slider");
// const sliders = [
//   "images/header-bg-image.png",
//   "images/img1.png",
//   "images/img2.png"
// ];

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   //let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   // for (i = 0; i < dots.length; i++) {
//   //   dots[i].className = dots[i].className.replace(" active", "");
//   // }
//   slides[slideIndex-1].style.display = "block";
//   imgContainer.style.backgroundImage = `url(${sliders[slideIndex-1]})`;
//   //dots[slideIndex-1].className += " active";
// }

// showSlides(slideIndex);
// const prevBtn = document.getElementById("sliderPrevBtn");
// const nextBtn = document.getElementById("sliderNextBtn");

// prevBtn.onclick = () => plusSlides(-1);
// nextBtn.onclick = () => plusSlides(1);
