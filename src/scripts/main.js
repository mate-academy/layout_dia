const sliderInner = document.querySelector('.slider-inner');
const prevButton = document.querySelector('.arrow_right');
const nextButton = document.querySelector('.arrow_left');
const slides = document.querySelectorAll('.slide');

let currentPosition = 0;
let isAnimating = false;

nextButton.addEventListener('click', () => {
    if (isAnimating) return;

    isAnimating = true;

    sliderInner.style.transition = 'transform 0.5s ease-in-out';
    sliderInner.style.transform = `translateX(-100%)`;

    setTimeout(() => {
        const firstSlide = sliderInner.querySelector('.slide');
        sliderInner.appendChild(firstSlide); // Переміщуємо перший слайд в кінець
        sliderInner.style.transition = 'none';
        sliderInner.style.transform = 'translateX(0)';

        isAnimating = false;
    }, 500);
});

prevButton.addEventListener('click', () => {
    if (isAnimating) return;

    isAnimating = true;

    const lastSlide = sliderInner.querySelector('.slide:last-child');
    sliderInner.insertBefore(lastSlide, sliderInner.firstChild); // Переміщуємо останній слайд на початок
    sliderInner.style.transition = 'none';
    sliderInner.style.transform = `translateX(-100%)`;

    setTimeout(() => {
      sliderInner.style.transition = 'transform 0.5s ease-in-out';
      sliderInner.style.transform = 'translateX(0)';

        isAnimating = false;
    }, 10);
});

const slideInterval = 3000; // Час між перемиканнями слайдів (в мілісекундах)
