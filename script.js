// Adding scroll event listener
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');

    // When the user scrolls down 100px, change navbar background color
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = '#111';  // Change to dark background
    } else {
        navbar.style.backgroundColor = 'transparent';  // Revert to transparent background
    }
});
