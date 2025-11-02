function checkScroll() {
  if (document.body.scrollHeight > window.innerHeight) {
    document.body.classList.add('has-scroll');
  } else {
    document.body.classList.remove('has-scroll');
  }
}
window.addEventListener('load', checkScroll);
window.addEventListener('resize', checkScroll);