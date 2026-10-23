# AGENTS.md

Notes for AI coding agents working on this site.

## What this is

Talmeez's personal website ("Talmeezs website"), a plain HTML/CSS/JS static site.
It started as a copy of their old Google Site (sites.google.com/view/talmeezssite).

- Live site: https://talmeezs-hub.github.io
- Repo: https://github.com/talmeezs-hub/talmeezs-hub.github.io
- Owner: the `talmeezs-hub` GitHub org; the user's account `TerminalDev-1` is its admin.
- Hosting: GitHub Pages, served from the `main` branch root. No build step.

## Files

- `index.html`: Home page. Starts with a full-screen "Welcome to Talmeez's website" screen (the "Welcome to" line scramble-morphs on a loop: English "Welcome to", then Russian "Добро пожаловать!", then Urdu "خوش آمدید!" in Noto Nastaliq Urdu; the rest of the site stays English) and a "Let's Go" button that slides it away. The page then opens with a rainbow typewriter "I Vibe Code Things", then a big "meaning I use LLMS to code" with LLMS in rainbow, then "Why Do I Vibecode?" and a link to github.com/TerminalDev-1/Profile-README
- `anti-ai.html`: "How I feel about Anti-AI" page
- `projects.html`: Projects page. Only the projects the user picked (currently AOS and AstroArena), not every repo. Describe AstroArena as an open-source game made to be very close to Brawl Stars, not as a generic "arena brawler". AOS screenshots live in `images/projects/`; AstroArena uses inline SVG art until real screenshots exist.
- `style.css`: shared styles. Dark glossy cyber-blue theme (navy background with blue glows and a faint grid, cyan accent `#38d6ff`, glossy pill buttons), Roboto headings, italic Open Sans body, and a shared rainbow shimmer (`.rainbow`)
- `script.js`: glassy header on scroll, the Home typewriter, the heading glitch (any element with class `glitch`), the random whole-screen glitch flicker, and the welcome screen. The welcome screen shows on every Home load, and "Let's Go" runs a canvas hyperspace warp and a glitch at the same time. All motion is skipped when the visitor has reduce-motion turned on.
- `images/`: hero images for each page

When you add a page, add it to the nav in every HTML file.

## How to ship a change

1. Edit the files.
2. If you changed `style.css` or `script.js`, bump the `?v=` number on their links in every HTML file, so browsers fetch the new version instead of a stale cached copy.
3. Commit and push to `main`.
4. GitHub Pages rebuilds in about a minute. Check the live URL after pushing.

## Voice and content

- The user is a vibecoder: they design software and use LLMs to write the code.
- They are loudly pro-AI and funny, and the all-caps are on purpose.
- The user had all swear words removed from the site. Keep it swear-free unless they ask otherwise.
- The repo must stay public: GitHub Pages doesn't serve private repos on the free plan.
- Keep their wording as they wrote it. Don't clean up their text, tone it down, or fix their grammar unless they ask.
