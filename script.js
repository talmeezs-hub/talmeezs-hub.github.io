// Turn the header white once the page scrolls past the top.
const header = document.querySelector(".site-header");
const update = () => header.classList.toggle("scrolled", window.scrollY > 40);
window.addEventListener("scroll", update);
update();

const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Typewriter effect: type the heading out letter by letter, then pause and retype.
function startTypewriter() {
  const typed = document.querySelector(".rainbow-type .typed");
  if (!typed || calm) return;
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

// Welcome screen: shown every time the Home page loads, slides away on "Let's Go".
const welcome = document.getElementById("welcome");

if (welcome) {
  document.body.style.overflow = "hidden";
  const go = document.getElementById("welcome-go");
  go.focus();
  go.addEventListener("click", () => {
    welcome.classList.add("leaving");
    document.body.style.overflow = "";
    startTypewriter();
    welcome.addEventListener("transitionend", () => welcome.remove(), { once: true });
    setTimeout(() => welcome.remove(), 1200); // in case transitionend never fires
  });
} else {
  startTypewriter();
}
