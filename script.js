function checkScroll() {
    if (document.body.scrollHeight > window.innerHeight) {
        document.body.classList.remove('has-not-scroll');
    } else {
        document.body.classList.add('has-not-scroll');
        document.querySelector('footer').style.display = 'block';
  }
}
window.addEventListener('load', () => {
    requestAnimationFrame(() => {
        checkScroll();
    });
});

window.addEventListener('resize', checkScroll);