const animItems = document.querySelectorAll('.js-anim-items');

export const animOnScroll = function(params) {
  for (let i = 0; i < animItems.length; i++) {
    const animItem = animItems[i];
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;
    const animStart = 4;

    let animItemPoint = window.innerHeight - animItemHeight / animStart;

    if (animItemHeight > window.innerHeight) {
      animItemPoint = window.innerHeight - window.innerHeight / animStart;
    }

    if ((window.scrollY > (animItemOffset - animItemPoint))
      && (window.scrollX < (animItemOffset + animItemHeight))) {
      animItem.classList.add('active');
    } else {
      if (!animItem.classList.contains('js-anim-no-hide')) {
        animItem.classList.remove('active');
      }
    }
  }
};

function offset(el) {
  const rect = el.getBoundingClientRect();
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}
