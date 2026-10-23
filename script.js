// Turn the header white once the page scrolls past the top.
const header = document.querySelector(".site-header");
const update = () => header.classList.toggle("scrolled", window.scrollY > 40);
window.addEventListener("scroll", update);
update();

// Typewriter effect: type the heading out letter by letter, then pause and retype.
const typed = document.querySelector(".rainbow-type .typed");
const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (typed && !calm) {
  const text = typed.dataset.text;
  let i = 0;
  let deleting = false;
  typed.textContent = "";
  const tick = () => {
    i += deleting ? -1 : 1;
    typed.textContent = text.slice(0, i);
    let delay = deleting ? 45 : 110;
    if (!deleting && i === text.length) { deleting = true; delay = 2500; }
    else if (deleting && i === 0) { deleting = false; delay = 600; }
    setTimeout(tick, delay);
  };
  setTimeout(tick, 400);
}
