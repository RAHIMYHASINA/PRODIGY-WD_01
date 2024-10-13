/* Change navbar color when scrolling */
.navbar.scrolled {
    background-color: #222;
}
// Add an event listener for scroll events
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
