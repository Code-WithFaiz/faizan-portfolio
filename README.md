# Faizan — Personal Portfolio (v2)

Redesigned neon glass portfolio — magenta/cyan theme matched to a custom
avatar, ambient particle field, live status badges, and tech tags on
every project card.

## What changed from v1
- New color theme: neon magenta → cyan (matched to the avatar image)
- Avatar used as a recurring brand element: nav badge, hero ambient orb,
  contact section
- Ambient floating particle background (signature visual)
- Project cards now show a "LIVE" status badge, tech tags, and a
  primary "Live demo" button + "Source" link
- Wider layout polish for large desktop screens (1400px+)

## Folder Structure
```
faizan-portfolio/
├── index.html
├── css/style.css
├── js/script.js
├── assets/images/
│   ├── avatar.png       ← your avatar, used throughout
│   ├── portfolio-thumb.png
│   ├── restaurant-thumb.png
│   ├── tempo-thumb.png
│   └── volt-thumb.png
└── resume.pdf
```

## How to customize
- **Projects**: edit the `PROJECTS` array in `js/script.js` — add
  `tags`, swap `image`, update links as new projects ship
- **Avatar**: replace `assets/images/avatar.png` with any square image
  to instantly re-theme the nav badge, hero orb, and contact section
- **Particle density**: change the `count` variable in `renderParticles()`
  in `js/script.js` (34 is a good balance of style vs. performance)

## Deploy
Push to GitHub, GitHub Pages already configured for this repo.

## License
MIT — free to reuse and adapt.
