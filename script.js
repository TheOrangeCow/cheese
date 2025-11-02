function checkScroll() {
    if (document.body.scrollHeight > window.innerHeight) {
        document.body.classList.add('has-scroll');
    } else {
        document.body.classList.remove('has-scroll');
        document.querySelector('footer').style.display = 'block';
  }
}
window.addEventListener('load', checkScroll);
window.addEventListener('resize', checkScroll);