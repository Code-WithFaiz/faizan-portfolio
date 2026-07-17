// ============================================
// PROJECT DATA — edit this array as you build each project.
// Add a screenshot at assets/images/<file> and set `image` to its path
// to replace the placeholder thumbnail.
// ============================================
const PROJECTS = [
  {
    tier: "Frontend",
    title: "Personal Portfolio",
    desc: "This site — dark glass UI, built and shipped entirely from Acode on mobile.",
    image: "assets/images/portfolio-thumb.png",
    demo: "https://code-withfaiz.github.io/faizan-portfolio/",
    code: "https://github.com/Code-WithFaiz/faizan-portfolio"
  },
  {
    tier: "Frontend",
    title: "Restaurant Website",
    desc: "Menu, reservations, and a warm visual identity for a fictional restaurant.",
    image: "assets/images/restaurant-thumb.png",
    demo: "https://code-withfaiz.github.io/restaurant-website/",
    code: "https://github.com/Code-WithFaiz/restaurant-website"
  },
  {
    tier: "Frontend",
    title: "SaaS Landing Page",
    desc: "Conversion-focused landing page with pricing, FAQ, and animated sections.",
    image: "assets/images/tempo-thumb.png",
    demo: "https://code-withfaiz.github.io/tempo-saas/",
    code: "https://github.com/Code-WithFaiz/tempo-saas"
  },
  {
    tier: "Frontend",
    title: "E-commerce Frontend",
    desc: "Product grid, cart, and checkout flow — frontend only, API-ready.",
    image: "assets/images/volt-thumb.png",
    demo: "https://code-withfaiz.github.io/volt-store/",
    code: "https://github.com/Code-WithFaiz/volt-store"
  },
  {
    tier: "Full Stack",
    title: "Login & Signup System",
    desc: "Authentication with validation, sessions, and error handling.",
    image: null,
    demo: "#",
    code: "#"
  },
  {
    tier: "AI",
    title: "AI Chat App",
    desc: "Conversational interface with history and streaming responses.",
    image: null,
    demo: "#",
    code: "#"
  }
];

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(p => `
    <article class="project-card glass reveal">
      <div class="project-thumb" style="background:${thumbGradient(p.tier)}">
        ${p.image
          ? `<img src="${p.image}" alt="${p.title} screenshot" style="width:100%;height:100%;object-fit:cover;">`
          : `<span>Add screenshot →<br>assets/images/</span>`
        }
      </div>
      <div class="project-body">
        <p class="project-tier">${p.tier}</p>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="project-links">
          <a href="${p.demo}" target="_blank" rel="noopener">Live demo</a>
          <a href="${p.code}" target="_blank" rel="noopener">Source</a>
        </div>
      </div>
    </article>
  `).join("");
}

function thumbGradient(tier) {
  const gradients = {
    "Frontend": "linear-gradient(135deg, rgba(108,92,231,0.18), rgba(0,217,192,0.10))",
    "Full Stack": "linear-gradient(135deg, rgba(0,217,192,0.16), rgba(108,92,231,0.10))",
    "AI": "linear-gradient(135deg, rgba(255,180,84,0.14), rgba(108,92,231,0.14))",
    "Business": "linear-gradient(135deg, rgba(108,92,231,0.14), rgba(255,180,84,0.10))"
  };
  return gradients[tier] || "rgba(255,255,255,0.03)";
}

// ============================================
// TYPING ANIMATION — hero glass editor
// ============================================
const CODE_SNIPPET = `const build = () => {
  device: "phone",
  editor: "Acode",
  status: "shipping",
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
// NAV: scroll state + mobile toggle
// ============================================
function initNav() {
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  });

  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
  });

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
  const targets = document.querySelectorAll(".glass, .section-title, .section-sub");
  targets.forEach(t => t.classList.add("reveal"));

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

// ============================================
// STAT COUNT-UP
// ============================================
function initCountUp() {
  const stats = document.querySelectorAll(".stat-num[data-count]");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 30));
      const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = current;
      }, 40);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  stats.forEach(el => io.observe(el));
}

// ============================================
// INIT
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  typeCode();
  initNav();
  initCursorGlow();
  initReveal();
  initCountUp();
});