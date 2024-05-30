
document.addEventListener('DOMContentLoaded', () => {
  const images = [
    'slider-img-1.f0972838.png',
    'slider-img-2.32d51007.png',
    'slider-img-3.f4897c5e.png',
    'slider-img-4.71b42479.png',
    // Add more image paths as needed from dist
  ];
  let currentIndex = 0;

  const slider = document.getElementById('slider');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  function updateBackgroundImage() {
    const imageUrl = images[currentIndex];
    slider.style.backgroundImage = `url(${imageUrl})`;
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateBackgroundImage();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateBackgroundImage();
  });

  // Initial image set
  updateBackgroundImage();
});
