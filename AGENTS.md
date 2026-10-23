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

- `index.html`: Home page ("What I do", "Why Do I Vibecode?", and a link to github.com/TerminalDev-1/Profile-README)
- `anti-ai.html`: "How I feel about Anti-AI" page
- `style.css`: shared styles (Roboto headings, italic Open Sans body, gold accent `#c9a95c`)
- `script.js`: makes the header turn white once the page is scrolled
- `images/`: hero images for each page

When you add a page, add it to the nav in every HTML file.

## How to ship a change

1. Edit the files.
2. Commit and push to `main`.
3. GitHub Pages rebuilds in about a minute. Check the live URL after pushing.

## Voice and content

- The user is a vibecoder: they design software and use LLMs to write the code.
- They are loudly pro-AI and funny, and the swearing and all-caps are on purpose.
- Keep their wording as they wrote it. Don't clean up their text, tone it down, or fix their grammar unless they ask.
