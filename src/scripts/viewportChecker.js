export function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  const tolerance = 5;

  return (
    Math.abs(rect.top) <= tolerance
      && rect.left >= 0
    && Math.abs(rect.bottom
      - (window.innerHeight
        || document.documentElement.clientHeight)) <= tolerance
    && rect.right <= (window.innerWidth
      || document.documentElement.clientWidth)
  );
}

export function checkElementsInViewport() {
  const elements = document.querySelectorAll('.header');

  elements.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('header--inViewport');
    } else {
      element.classList.remove('header--inViewport');
    }
  });
}
