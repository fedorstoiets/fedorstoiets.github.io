:root {
  --bg: #f8f4ee;
  --bg-soft: #fffaf4;
  --ink: #1f2a24;
  --muted: #637064;
  --line: #dfd3c3;
  --accent: #416b58;
  --accent-dark: #2b493c;
  --accent-soft: #dfe9e2;
  --card: #fffdf9;
  --warning: #6b4e16;
  --radius: 24px;
  --shadow: 0 20px 50px rgba(31, 42, 36, 0.08);
  --max: 1120px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  color: var(--ink);
  background: var(--bg);
  line-height: 1.6;
}

a {
  color: inherit;
}

img {
  max-width: 100%;
}

.skip-link {
  position: absolute;
  top: -100px;
  left: 16px;
  background: var(--ink);
  color: white;
  padding: 10px 14px;
  border-radius: 12px;
  z-index: 99;
}

.skip-link:focus {
  top: 16px;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(16px);
  background: rgba(248, 244, 238, 0.84);
  border-bottom: 1px solid rgba(223, 211, 195, 0.7);
}

.nav-wrap {
  max-width: var(--max);
  margin: 0 auto;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.brand {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.brand strong {
  letter-spacing: 0.02em;
  font-size: 0.96rem;
}

.brand span {
  color: var(--muted);
  font-size: 0.82rem;
}

.nav-toggle {
  display: none;
  border: 1px solid var(--line);
  background: var(--card);
  padding: 9px 12px;
  border-radius: 999px;
  color: var(--ink);
}

.site-nav {
  display: flex;
  align-items: center;
  gap: 6px;
}

.site-nav a {
  text-decoration: none;
  color: var(--muted);
  padding: 10px 12px;
  border-radius: 999px;
  font-size: 0.95rem;
}

.site-nav a:hover,
.site-nav a[aria-current="page"] {
  color: var(--ink);
  background: var(--accent-soft);
}

.site-nav .nav-cta {
  color: white;
  background: var(--accent);
  margin-left: 6px;
}

.site-nav .nav-cta:hover {
  color: white;
  background: var(--accent-dark);
}

main {
  overflow: hidden;
}

.section {
  padding: 82px 20px;
}

.section.tight {
  padding: 54px 20px;
}

.container {
  max-width: var(--max);
  margin: 0 auto;
}

.hero {
  padding: 88px 20px 64px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 44px;
  align-items: center;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--accent-dark);
  background: var(--accent-soft);
  border: 1px solid rgba(65, 107, 88, 0.14);
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 0.88rem;
  font-weight: 700;
  margin: 0 0 20px;
}

h1,
h2,
h3 {
  line-height: 1.08;
  letter-spacing: -0.035em;
  margin: 0;
}

h1 {
  font-size: clamp(2.7rem, 6vw, 5.8rem);
}

h2 {
  font-size: clamp(2rem, 3.5vw, 3.4rem);
}

h3 {
  font-size: 1.35rem;
}

p {
  margin: 0;
}

.lead {
  color: var(--muted);
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  max-width: 690px;
  margin-top: 22px;
}

.hero-actions,
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 999px;
  padding: 14px 20px;
  font-weight: 800;
  border: 1px solid transparent;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease;
}

.button:hover {
  transform: translateY(-2px);
}

.button.primary {
  background: var(--accent);
  color: white;
}

.button.primary:hover {
  background: var(--accent-dark);
}

.button.secondary {
  border-color: var(--line);
  background: rgba(255, 253, 249, 0.7);
  color: var(--ink);
}

.hero-note {
  margin-top: 18px;
  color: var(--muted);
  font-size: 0.92rem;
}

.visual-card {
  background: linear-gradient(145deg, #fffdf9, #ede3d5);
  border: 1px solid var(--line);
  border-radius: 34px;
  box-shadow: var(--shadow);
  padding: 22px;
  position: relative;
  min-height: 440px;
}

.photo-placeholder {
  min-height: 326px;
  border-radius: 26px;
  background:
    radial-gradient(circle at 30% 22%, rgba(65, 107, 88, 0.22), transparent 28%),
    linear-gradient(135deg, #d7dfd5, #fbf2e5 52%, #b9cabf);
  display: flex;
  align-items: end;
  padding: 20px;
  overflow: hidden;
}

.photo-placeholder .caption {
  background: rgba(255, 253, 249, 0.9);
  border: 1px solid rgba(223, 211, 195, 0.8);
  border-radius: 18px;
  padding: 14px;
  max-width: 330px;
}

.caption strong {
  display: block;
}

.caption span {
  display: block;
  color: var(--muted);
  font-size: 0.9rem;
  margin-top: 2px;
}

.float-card {
  position: absolute;
  right: 8px;
  bottom: 24px;
  width: min(290px, 84%);
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: var(--shadow);
  padding: 18px;
}

.float-card small {
  color: var(--muted);
  display: block;
  margin-top: 5px;
}

.section-head {
  max-width: 780px;
  margin-bottom: 34px;
}

.section-head.center {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.section-head p {
  color: var(--muted);
  font-size: 1.08rem;
  margin-top: 15px;
}

.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 26px;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 26px;
  box-shadow: 0 16px 40px rgba(31, 42, 36, 0.05);
}

.card p {
  color: var(--muted);
  margin-top: 10px;
}

.check-list {
  list-style: none;
  display: grid;
  gap: 12px;
  padding: 0;
  margin: 22px 0 0;
}

.check-list li {
  display: flex;
  gap: 10px;
  color: var(--muted);
}

.check-list li::before {
  content: "✓";
  color: var(--accent-dark);
  font-weight: 900;
}

.steps {
  counter-reset: step;
}

.step {
  position: relative;
}

.step::before {
  counter-increment: step;
  content: counter(step);
  display: inline-flex;
  width: 34px;
  height: 34px;
  border-radius: 999px;
  align-items: center;
  justify-content: center;
  background: var(--accent-soft);
  color: var(--accent-dark);
  font-weight: 900;
  margin-bottom: 18px;
}

.band {
  background: var(--accent-dark);
  color: white;
  border-radius: 34px;
  padding: 42px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;
  align-items: center;
}

.band p {
  color: rgba(255, 255, 255, 0.78);
  margin-top: 12px;
}

.band .button {
  background: white;
  color: var(--accent-dark);
}

.quote {
  font-size: 1.2rem;
  color: var(--ink);
}

.quote cite {
  display: block;
  margin-top: 16px;
  font-style: normal;
  color: var(--muted);
  font-size: 0.95rem;
}

.logo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}

.logo-pill {
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 10px 14px;
  background: var(--bg-soft);
  color: var(--muted);
  font-weight: 700;
  font-size: 0.92rem;
}

.faq {
  display: grid;
  gap: 14px;
}

details {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 18px 20px;
}

summary {
  cursor: pointer;
  font-weight: 800;
}

details p {
  color: var(--muted);
  margin-top: 10px;
}

.footer {
  padding: 36px 20px;
  border-top: 1px solid var(--line);
  background: #efe6da;
}

.footer-grid {
  max-width: var(--max);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr;
  gap: 24px;
}

.footer a {
  color: var(--muted);
  text-decoration: none;
}

.footer a:hover {
  color: var(--ink);
}

.footer p,
.footer li {
  color: var(--muted);
  font-size: 0.94rem;
}

.footer ul {
  list-style: none;
  margin: 12px 0 0;
  padding: 0;
  display: grid;
  gap: 8px;
}

.page-hero {
  padding: 80px 20px 34px;
}

.page-hero .container {
  max-width: 900px;
}

.kicker {
  color: var(--accent-dark);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.78rem;
  margin-bottom: 14px;
}

.article-list {
  display: grid;
  gap: 18px;
}

.article-card {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 18px;
  align-items: center;
}

.tag {
  display: inline-flex;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent-dark);
  padding: 6px 10px;
  font-weight: 800;
  font-size: 0.78rem;
  margin-bottom: 12px;
}

.notice {
  border: 1px solid #e4c98a;
  background: #fff7dc;
  color: var(--warning);
  border-radius: 18px;
  padding: 16px 18px;
}

.form {
  display: grid;
  gap: 14px;
}

label {
  font-weight: 800;
}

input,
textarea,
select {
  width: 100%;
  border: 1px solid var(--line);
  background: var(--card);
  color: var(--ink);
  border-radius: 14px;
  padding: 13px 14px;
  font: inherit;
}

textarea {
  min-height: 130px;
  resize: vertical;
}

.helper {
  color: var(--muted);
  font-size: 0.92rem;
}

@media (max-width: 820px) {
  .nav-toggle {
    display: inline-flex;
  }

  .site-nav {
    position: absolute;
    left: 20px;
    right: 20px;
    top: 72px;
    display: none;
    flex-direction: column;
    align-items: stretch;
    background: var(--card);
    border: 1px solid var(--line);
    border-radius: 20px;
    padding: 10px;
    box-shadow: var(--shadow);
  }

  .site-nav.open {
    display: flex;
  }

  .site-nav a {
    border-radius: 14px;
  }

  .site-nav .nav-cta {
    margin-left: 0;
    text-align: center;
  }

  .hero-grid,
  .grid-2,
  .grid-3,
  .band,
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 56px;
  }

  .section {
    padding: 62px 20px;
  }

  .visual-card {
    min-height: 360px;
  }

  .float-card {
    position: static;
    margin-top: 16px;
    width: 100%;
  }

  .band {
    padding: 28px;
  }

  .article-card {
    grid-template-columns: 1fr;
  }
}