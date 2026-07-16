# Faizan — Personal Portfolio

Dark, glassmorphic developer portfolio — built and shipped entirely on mobile using Acode.

## Features
- Dark theme with glassmorphism panels
- Animated "live typing" glass code editor in the hero
- Fully responsive (mobile → desktop), with a mobile nav menu
- Scroll-reveal animations, count-up stats, cursor glow (desktop)
- Projects rendered from a single JS data array — easy to update
- Respects `prefers-reduced-motion`

## Tech Stack
HTML5, CSS3 (custom properties, no framework), Vanilla JavaScript.

## Folder Structure
```
faizan-portfolio/
├── index.html
├── css/style.css
├── js/script.js
├── assets/images/   ← add your photo + project screenshots here
└── resume.pdf        ← add your resume here (optional)
```

## How to customize

1. **Your info**: Open `index.html` and search for:
   - `mailto:your-email@example.com` → your real email
   - `href="#"` in the social row and project links → your real links
2. **Projects**: Open `js/script.js`, edit the `PROJECTS` array at the top.
   Set `image: "assets/images/yourfile.png"` once you add a screenshot —
   until then it shows a clean placeholder automatically.
3. **Resume**: Drop a `resume.pdf` file in the root folder — the download
   button already points to it.
4. **Testimonials**: Once you have real client feedback, replace the
   placeholder cards in the Testimonials section of `index.html`.

## Deploy
Push this folder to a GitHub repo, then connect it to **Vercel** or
**Netlify** — both auto-deploy static sites for free with zero config.

## Live Demo
_(add your deployed link here once live)_

## License
MIT — free to reuse and adapt.
