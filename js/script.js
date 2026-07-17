// ============================================
// PROJECT DATA
// ============================================
const PROJECTS = [
  {
    tier: "Frontend",
    title: "Personal Portfolio",
    desc: "This site — neon glass UI, built and shipped entirely from Acode on mobile.",
    image: "assets/images/portfolio-thumb.png",
    tags: ["HTML", "CSS", "JS"],
    demo: "https://code-withfaiz.github.io/faizan-portfolio/",
    code: "https://github.com/Code-WithFaiz/faizan-portfolio"
  },
  {
    tier: "Frontend",
    title: "Restaurant Website",
    desc: "Menu, reservations, and a warm visual identity for a fictional restaurant.",
    image: "assets/images/restaurant-thumb.png",
    tags: ["HTML", "CSS", "JS"],
    demo: "https://code-withfaiz.github.io/restaurant-website/",
    code: "https://github.com/Code-WithFaiz/restaurant-website"
  },
  {
    tier: "Frontend",
    title: "SaaS Landing Page",
    desc: "Conversion-focused landing page with pricing, FAQ, and animated sections.",
    image: "assets/images/tempo-thumb.png",
    tags: ["HTML", "CSS", "JS"],
    demo: "https://code-withfaiz.github.io/tempo-saas/",
    code: "https://github.com/Code-WithFaiz/tempo-saas"
  },
  {
    tier: "Frontend",
    title: "E-commerce Frontend",
    desc: "Product grid, working cart, and category filtering — frontend only, API-ready.",
    image: "assets/images/volt-thumb.png",
    tags: ["HTML", "CSS", "JS"],
    demo: "https://code-withfaiz.github.io/volt-store/",
    code: "https://github.com/Code-WithFaiz/volt-store"
  },
  {
    tier: "Full Stack",
    title: "Login & Signup System",
    desc: "Authentication with validation, sessions, and error handling.",
    image: null,
    tags: ["Coming soon"],
    demo: "#",
    code: "#"
  },
  {
    tier: "AI",
    title: "AI Chat App",
    desc: "Conversational interface with history and streaming responses.",
    image: null,
    tags: ["Coming soon"],
    demo: "#",
    code: "#"
  }
];

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(p => {
    const isLive = p.demo && p.demo !== "#";
    return `
    <article class="project-card glass reveal">
      <div class="project-thumb">
        ${isLive ? `<span class="status-badge"><span class="dot"></span>LIVE</span>` : ""}
        ${p.image
          ? `<img src="${p.image}" alt="${p.title} screenshot">`
          : `<span>Add screenshot →<br>assets/images/</span>`
        }
      </div>
      <div class="project-body">
        <p class="project-tier">${p.tier}</p>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="project-tags">
          ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}
        </div>
        <div class="project-links">
          ${isLive
            ? `<a href="${p.demo}" target="_blank" rel="noopener" class="primary-link">Live demo</a>
               <a href="${p.code}" target="_blank" rel="noopener">Source</a>`
            : `<a href="#" style="pointer-events:none;opacity:0.5;">Coming soon</a>`
          }
        </div>
      </div>
    </article>
  `;
  }).join("");
}

// ============================================
// PARTICLE FIELD — floating ambient dots
// ============================================
function renderParticles() {
  const field = document.getElementById("particleField");
  if (!field) return;
  const count = 34;
  for (let i = 0; i < count; i++) {
    const dot = document.createElement("div");
    dot.className = "particle";
    const size = Math.random() * 2.5 + 1.5;
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.top = `${Math.random() * 100}%`;
    dot.style.animationDuration = `${Math.random() * 12 + 10}s`;
    dot.style.animationDelay = `${Math.random() * 10}s`;
    if (Math.random() > 0.5) dot.style.background = "#c94dff";
    field.appendChild(dot);
  }
}

// ============================================
// TYPING ANIMATION
// ============================================
const CODE_SNIPPET = `const build = () => {
  device: "phone",
  editor: "Acode",
  status: "4 live projects",
};

console.log(
  "made on mobile"
);`;

function typeCode() {
  const el = document.getElementById("typedCode");
  if (!el) return;
  let i = 0;
  function tick() {
    if (i <= CODE_SNIPPET.length) {
      el.textContent = CODE_SNIPPET.slice(0, i);
      i++;
      setTimeout(tick, 28);
    } else {
      setTimeout(() => { i = 0; tick(); }, 2600);
    }
  }
  tick();
}

// ============================================
// NAV
// ============================================
function initNav() {
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  });

  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => links.classList.remove("open"));
  });
}

// ============================================
// CURSOR GLOW
// ============================================
function initCursorGlow() {
  const glow = document.getElementById("cursorGlow");
  if (!glow) return;
  window.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
}

// ============================================
// SCROLL REVEAL
// ============================================
function initReveal() {
  document.querySelectorAll(".glass, .section-title, .section-sub")
    .forEach(t => t.classList.add("reveal"));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  renderParticles();
  renderProjects();
  typeCode();
  initNav();
  initCursorGlow();
  initReveal();
});
