function checkScroll() {
    if (document.body.scrollHeight > window.innerHeight) {
        document.body.classList.remove('has-not-scroll');
    } else {
        document.querySelector('footer').style.display = 'block';
        document.body.classList.add('has-not-scroll');    
    }
}
window.addEventListener('load', () => {
    setTimeout(() => {
        checkScroll()
    }, 500);
});

window.addEventListener('resize', checkScroll);