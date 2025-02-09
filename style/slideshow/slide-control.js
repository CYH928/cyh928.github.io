document.addEventListener('DOMContentLoaded', function() {
    const slides = document.getElementById('slides');
    const slideWidth = slides.querySelector('.slide').offsetWidth;

    function previousSlide() {
        slides.scrollBy({ left: -slideWidth, behavior: 'smooth' });
    };

    function nextSlide() {
        slides.scrollBy({ left: slideWidth, behavior: 'smooth' });
    };

    document.getElementById('previousSlide').onclick = previousSlide;
    document.getElementById('nextSlide').onclick = nextSlide;

    document.getElementById('leftSlide').onclick = previousSlide;
    document.getElementById('rightSlide').onclick = nextSlide;
});