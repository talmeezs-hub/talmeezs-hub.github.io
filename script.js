// Turn the header white once the page scrolls past the top.
const header = document.querySelector(".site-header");
const update = () => header.classList.toggle("scrolled", window.scrollY > 40);
window.addEventListener("scroll", update);
update();
