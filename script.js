// Turn the header glassy once the page scrolls past the top.
const header = document.querySelector(".site-header");
const update = () => header.classList.toggle("scrolled", window.scrollY > 40);
window.addEventListener("scroll", update);
update();

const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Glitch headings: give each a copy of its text for the split layers,
// and a random start offset so they don't all glitch at once.
document.querySelectorAll(".glitch").forEach((el) => {
  el.dataset.glitch = el.textContent.trim();
  el.style.setProperty("--gd", `-${(Math.random() * 4.5).toFixed(2)}s`);
});

// Typewriter effect: type the heading out letter by letter, then pause and retype.
function startTypewriter() {
  const typed = document.querySelector(".rainbow-type .typed");
  if (!typed || calm) return;
  const heading = typed.closest(".glitch");
  const text = typed.dataset.text;
  let i = 0;
  let deleting = false;
  typed.textContent = "";
  if (heading) heading.dataset.glitch = "";
  const tick = () => {
    i += deleting ? -1 : 1;
    typed.textContent = text.slice(0, i);
    if (heading) heading.dataset.glitch = typed.textContent;
    let delay = deleting ? 45 : 110;
    if (!deleting && i === text.length) { deleting = true; delay = 2500; }
    else if (deleting && i === 0) { deleting = false; delay = 600; }
    setTimeout(tick, delay);
  };
  setTimeout(tick, 400);
}

// Whole-screen glitch: every 6-11 seconds, flash a few jittering color bars
// and shake the page for a split second.
if (!calm) {
  const layer = document.createElement("div");
  layer.className = "screen-glitch";
  layer.setAttribute("aria-hidden", "true");
  document.body.appendChild(layer);

  const glitchOnce = () => {
    if (document.getElementById("welcome")) return; // not during the welcome screen
    layer.innerHTML = "";
    for (let n = 0; n < 3; n++) {
      const bar = document.createElement("span");
      bar.style.top = `${Math.random() * 90}%`;
      bar.style.height = `${4 + Math.random() * 40}px`;
      layer.appendChild(bar);
    }
    layer.classList.add("on");
    document.body.classList.add("screen-glitching");
    setTimeout(() => {
      layer.classList.remove("on");
      document.body.classList.remove("screen-glitching");
    }, 300);
  };
  const schedule = () => setTimeout(() => { glitchOnce(); schedule(); }, 6000 + Math.random() * 5000);
  schedule();
}

// Hyperspace warp: light streaks shooting out from the center, speeding up.
function runWarp(container, duration) {
  const canvas = document.createElement("canvas");
  canvas.className = "warp-canvas";
  container.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = container.clientWidth;
  const h = container.clientHeight;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  ctx.scale(dpr, dpr);

  const cx = w / 2;
  const cy = h / 2;
  const colors = ["#ffffff", "#38d6ff", "#2f6bff", "#ff2bd6", "#9fe8ff"];
  const stars = Array.from({ length: 260 }, () => ({
    angle: Math.random() * Math.PI * 2,
    dist: Math.random() * 40 + 4,
    speed: Math.random() * 0.6 + 0.4,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));

  const start = performance.now();
  const frame = (now) => {
    const t = Math.min((now - start) / duration, 1);
    const accel = 2 + t * t * 60; // slow at first, then warp speed
    ctx.fillStyle = "rgba(5, 11, 26, 0.35)"; // leaves short trails
    ctx.fillRect(0, 0, w, h);
    for (const s of stars) {
      const prev = s.dist;
      s.dist += s.speed * accel;
      const x1 = cx + Math.cos(s.angle) * prev;
      const y1 = cy + Math.sin(s.angle) * prev;
      const x2 = cx + Math.cos(s.angle) * s.dist;
      const y2 = cy + Math.sin(s.angle) * s.dist;
      ctx.strokeStyle = s.color;
      ctx.lineWidth = 1 + t * 3;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      if (s.dist > Math.max(w, h)) { s.dist = Math.random() * 20; } // recycle
    }
    if (t < 1) requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}

// Welcome line morph: scrambles between English, Russian and Urdu on a loop.
const kicker = document.getElementById("welcome-kicker");
let stopKickerMorph = () => {};

if (kicker && !calm) {
  const greetings = [
    { text: "Welcome to", lang: "en", dir: "ltr" },
    { text: "Добро пожаловать!", lang: "ru", dir: "ltr" },
    { text: "خوش آمدید!", lang: "ur", dir: "rtl" },
  ];
  const symbols = "#%&*+=<>/\\[]{}01";
  let index = 0;
  let stopped = false;
  let timer;

  const morphTo = (next, onDone) => {
    kicker.lang = next.lang;
    kicker.dir = next.dir;
    kicker.classList.add("morphing");
    const target = next.text;
    const pool = target.replace(/\s/g, "") + symbols;
    const frames = 22;
    const length = Math.max(kicker.textContent.length, target.length);
    // Each character locks in at its own random moment, roughly left to right.
    const lockAt = Array.from({ length }, (_, i) =>
      Math.floor(frames * 0.35 * (i / length) + Math.random() * frames * 0.65));
    let frame = 0;
    const step = () => {
      if (stopped) return;
      let out = "";
      for (let i = 0; i < length; i++) {
        if (frame >= lockAt[i]) out += target[i] || "";
        else out += pool[Math.floor(Math.random() * pool.length)];
      }
      kicker.textContent = out;
      frame++;
      if (frame <= frames) {
        timer = setTimeout(step, 45);
      } else {
        kicker.textContent = target;
        kicker.classList.remove("morphing");
        onDone();
      }
    };
    step();
  };

  const loop = () => {
    timer = setTimeout(() => {
      index = (index + 1) % greetings.length;
      morphTo(greetings[index], loop);
    }, 2200);
  };
  timer = setTimeout(loop, 600); // let the fade-in finish first

  stopKickerMorph = () => { stopped = true; clearTimeout(timer); };
}

// Welcome screen: shown every time the Home page loads.
// "Let's Go" fires the warp and the glitch at the same moment.
const welcome = document.getElementById("welcome");

if (welcome) {
  document.body.style.overflow = "hidden";
  const go = document.getElementById("welcome-go");
  go.focus();
  go.addEventListener("click", () => {
    go.disabled = true;
    stopKickerMorph();
    const duration = calm ? 300 : 1000;
    if (!calm) runWarp(welcome, duration);
    welcome.classList.add("warping");

    // Start bringing the page in just before the welcome screen is gone.
    setTimeout(() => {
      document.body.style.overflow = "";
      document.body.classList.add("arriving");
      startTypewriter();
    }, duration * 0.75);
    setTimeout(() => {
      welcome.remove();
      setTimeout(() => document.body.classList.remove("arriving"), 900);
    }, duration);
  });
} else {
  startTypewriter();
}
