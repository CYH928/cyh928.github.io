// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.getElementById('globalnav');
    const scrolled = window.scrollY > 50;
    
    if (scrolled) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});