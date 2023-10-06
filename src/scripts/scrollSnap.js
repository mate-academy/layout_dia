let allowSnap = true;
const container = document.querySelector('html');

export function handleScrollSnap() {
  window.addEventListener('wheel', function() {
    allowSnap = false;
    container.style.scrollSnapType = 'none';
  });

  window.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      allowSnap = true;
      container.style.scrollSnapType = 'y mandatory';
    }
  });

  let checkScrollStop = null;

  window.addEventListener('scroll', function() {
    clearTimeout(checkScrollStop);

    checkScrollStop = setTimeout(() => {
      if (allowSnap) {
        container.style.scrollSnapType = 'y mandatory';
      }
    }, 100);
  });
}
