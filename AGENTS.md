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

- `index.html`: Home page. Plain off-white top (no banner image) with "What I do", a centered rainbow-shimmer typewriter "I Vibe Code Things", then "Why Do I Vibecode?" and a link to github.com/TerminalDev-1/Profile-README
- `anti-ai.html`: "How I feel about Anti-AI" page
- `style.css`: shared styles (Roboto headings, italic Open Sans body, gold accent `#c9a95c`)
- `script.js`: makes the header turn white once the page is scrolled, and runs the typewriter effect on the Home heading
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
