document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.photoslider');
  const texts = [
    {
      title: 'Intro',
      text: 'By the same illusion which lifts the horizon.',
    },
    {
      title: 'Explore',
      text: 'The silence of the mountain meets the roar of the wind.',
    },
    {
      title: 'Journey',
      text: 'Let yourself be carried by the great unknown.',
    },
  ];

  const images = [
    '/src/images/slider/slide-img-1.jpg',
    '/src/images/slider/slide-img-2.jpg',
    '/src/images/slider/slide-img-3.jpg',
  ];

  let currentIndex = 0;
  let autoScrollInterval;

  const updateSlider = () => {
    if (!slider) return;

    slider.style.backgroundImage = `url('${images[currentIndex]}')`;

    const titleEl = document.querySelector('.photoslider__arrows-title');
    const textEl = document.querySelector('.photoslider__arrows-text');

    if (titleEl && textEl && texts[currentIndex]) {
      titleEl.textContent = texts[currentIndex].title;
      textEl.textContent = texts[currentIndex].text;
    }
  };

  window.prevImage = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
    resetAutoScroll();
  };

  window.nextImage = () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
    resetAutoScroll();
  };

  const startAutoScroll = () => {
    autoScrollInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      updateSlider();
    }, 3000);
  };

  const resetAutoScroll = () => {
    clearInterval(autoScrollInterval);
    startAutoScroll();
  };

  updateSlider();
  startAutoScroll();
});
