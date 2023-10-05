const elements = document.querySelectorAll('[data-hover-delay]');
let hoverTimeout;

export function handleHoverDelay() {
  elements.forEach(function(element) {
    element.addEventListener('mouseenter', function() {
      hoverTimeout = setTimeout(function() {
        element.classList.add('delayed-hover');
      }, 500);
    });

    element.addEventListener('mouseleave', function() {
      clearTimeout(hoverTimeout);
      element.classList.remove('delayed-hover');
    });
  });
}
