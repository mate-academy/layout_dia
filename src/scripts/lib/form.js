export function resetForm(e) {
  e.preventDefault();
  e.target.reset();
  scrollToTop();
}

const scrollToTop = () => {
  window.scrollTo(0, 0);
};
