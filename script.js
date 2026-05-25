:root {
  --ink: #121713;
  --ink-2: #223028;
  --muted: #6e766d;
  --paper: #f4efe7;
  --paper-2: #fbf7ef;
  --cream: #fffdf7;
  --sage: #768f7b;
  --sage-2: #dce7dd;
  --forest: #183529;
  --forest-2: #254c3b;
  --clay: #b88764;
  --sand: #e6d4bc;
  --line: rgba(24, 53, 41, 0.14);
  --shadow: 0 24px 70px rgba(18, 23, 19, 0.12);
  --shadow-soft: 0 14px 40px rgba(18, 23, 19, 0.07);
  --radius-lg: 34px;
  --radius: 22px;
  --max: 1180px;
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
  background:
    radial-gradient(circle at 8% 0%, rgba(184, 135, 100, 0.22), transparent 34rem),
    radial-gradient(circle at 92% 12%, rgba(118, 143, 123, 0.20), transparent 30rem),
    linear-gradient(180deg, #f7f0e7 0%, #f5efe7 42%, #efe7dd 100%);
  line-height: 1.6;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.34;
  background-image:
    linear-gradient(rgba(24, 53, 41, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(24, 53, 41, 0.035) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: linear-gradient(to bottom, black, transparent 75%);
}

a {
  color: inherit;
}

img,
svg {
  max-width: 100%;
}

.skip-link {
  position: absolute;
  top: -120px;
  left: 16px;
  background: var(--forest);
  color: white;
  padding: 10px 14px;
  border-radius: 999px;
  z-index: 100;
}

.skip-link:focus {
  top: 16px;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid rgba(24, 53, 41, 0.10);
  background: rgba(244, 239, 231, 0.74);
  backdrop-filter: blur(20px);
}

.nav-wrap {
  width: min(var(--max), calc(100% - 36px));
  margin: 0 auto;
  padding: 14px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  min-width: fit-content;
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background:
    linear-gradient(135deg, rgba(255, 253, 247, 0.94), rgba(220, 231, 221, 0.88)),
    var(--cream);
  border: 1px solid rgba(24, 53, 41, 0.14);
  box-shadow: 0 10px 24px rgba(18, 23, 19, 0.08);
  font-weight: 900;
  color: var(--forest);
  letter-spacing: -0.06em;
}

.brand-copy {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.brand-copy strong {
  font-size: 0.98rem;
  letter-spacing: -0.02em;
}

.brand-copy span {
  color: var(--muted);
  font-size: 0.78rem;
}

.nav-toggle {
  display: none;
  border: 1px solid var(--line);
  background: rgba(255, 253, 247, 0.82);
  color: var(--ink);
  border-radius: 999px;
  padding: 10px 13px;
  font-weight: 800;
}

.site-nav {
  display: flex;
  align-items: center;
  gap: 4px;
}

.site-nav a {
  position: relative;
  color: rgba(18, 23, 19, 0.68);
  text-decoration: none;
  border-radius: 999px;
  padding: 10px 12px;
  font-size: 0.93rem;
  font-weight: 750;
  transition:
    color 0.18s ease,
    background 0.18s ease,
    transform 0.18s ease;
}

.site-nav a:hover,
.site-nav a[aria-current="page"] {
  color: var(--forest);
  background: rgba(255, 253, 247, 0.78);
}

.site-nav .nav-cta {
  color: white;
  background: var(--forest);
  margin-left: 6px;
  box-shadow: 0 12px 28px rgba(24, 53, 41, 0.18);
}

.site-nav .nav-cta:hover {
  color: white;
  background: var(--forest-2);
  transform: translateY(-1px);
}

main {
  overflow: hidden;
}

.container {
  width: min(var(--max), calc(100% - 36px));
  margin: 0 auto;
}

.section {
  padding: 88px 0;
}

.section.compact {
  padding: 58px 0;
}

.hero {
  position: relative;
  padding: 90px 0 72px;
}

.hero::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -90px;
  width: min(920px, 90vw);
  height: 220px;
  transform: translateX(-50%);
  background: radial-gradient(ellipse, rgba(24, 53, 41, 0.10), transparent 66%);
  pointer-events: none;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.03fr 0.97fr;
  align-items: center;
  gap: 56px;
}

.eyebrow {
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin: 0 0 20px;
  border: 1px solid rgba(24, 53, 41, 0.13);
  border-radius: 999px;
  background: rgba(255, 253, 247, 0.68);
  color: var(--forest);
  padding: 8px 12px 8px 9px;
  font-size: 0.84rem;
  font-weight: 850;
  box-shadow: 0 12px 36px rgba(18, 23, 19, 0.05);
}

.eyebrow::before {
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 99px;
  background: var(--sage);
  box-shadow: 0 0 0 6px rgba(118, 143, 123, 0.18);
}

h1,
h2,
h3 {
  margin: 0;
  line-height: 0.98;
  letter-spacing: -0.055em;
}

h1 {
  max-width: 880px;
  font-size: clamp(3.4rem, 8vw, 7.4rem);
}

h2 {
  font-size: clamp(2.35rem, 4vw, 4.3rem);
}

h3 {
  font-size: clamp(1.25rem, 2vw, 1.55rem);
}

p {
  margin: 0;
}

.lead {
  max-width: 690px;
  margin-top: 24px;
  color: rgba(18, 23, 19, 0.68);
  font-size: clamp(1.08rem, 1.7vw, 1.28rem);
  line-height: 1.55;
}

.hero-actions,
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 48px;
  text-decoration: none;
  border-radius: 999px;
  padding: 14px 20px;
  font-weight: 900;
  border: 1px solid transparent;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;
}

.button:hover {
  transform: translateY(-2px);
}

.button.primary {
  color: white;
  background: var(--forest);
  box-shadow: 0 18px 44px rgba(24, 53, 41, 0.22);
}

.button.primary:hover {
  background: var(--forest-2);
  box-shadow: 0 22px 54px rgba(24, 53, 41, 0.28);
}

.button.secondary {
  color: var(--forest);
  background: rgba(255, 253, 247, 0.76);
  border-color: rgba(24, 53, 41, 0.13);
}

.button.ghost {
  color: var(--forest);
  padding-left: 0;
}

.micro-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
  color: rgba(18, 23, 19, 0.62);
  font-size: 0.95rem;
  font-weight: 700;
}

.micro-row span {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.micro-row span::before {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 99px;
  background: var(--clay);
}

.stage {
  position: relative;
  min-height: 600px;
  border-radius: 46px;
  background:
    radial-gradient(circle at 20% 18%, rgba(255, 253, 247, 0.76), transparent 18rem),
    radial-gradient(circle at 85% 12%, rgba(184, 135, 100, 0.30), transparent 18rem),
    linear-gradient(145deg, rgba(24, 53, 41, 0.96), rgba(25, 70, 54, 0.90));
  box-shadow: var(--shadow);
  overflow: hidden;
  isolation: isolate;
}

.stage::before {
  content: "";
  position: absolute;
  inset: 22px;
  border: 1px solid rgba(255, 253, 247, 0.14);
  border-radius: 34px;
}

.stage::after {
  content: "";
  position: absolute;
  width: 440px;
  height: 440px;
  right: -130px;
  bottom: -130px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 253, 247, 0.16), transparent 65%);
}

.device {
  position: absolute;
  left: 50%;
  top: 52%;
  width: min(390px, 74%);
  min-height: 460px;
  transform: translate(-50%, -50%) rotate(-2deg);
  border-radius: 38px;
  background: rgba(255, 253, 247, 0.94);
  border: 1px solid rgba(255, 253, 247, 0.66);
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.28);
  padding: 18px;
}

.video-top {
  height: 220px;
  border-radius: 28px;
  background:
    radial-gradient(circle at 70% 20%, rgba(118, 143, 123, 0.36), transparent 9rem),
    linear-gradient(145deg, #ede2d1, #b4c3b3);
  display: flex;
  align-items: end;
  padding: 18px;
}

.avatar-card {
  width: 100%;
  border-radius: 22px;
  background: rgba(255, 253, 247, 0.76);
  border: 1px solid rgba(24, 53, 41, 0.12);
  padding: 13px;
}

.avatar-line {
  height: 9px;
  border-radius: 999px;
  background: rgba(24, 53, 41, 0.18);
  margin-top: 8px;
}

.avatar-line.short {
  width: 62%;
}

.note-stack {
  display: grid;
  gap: 10px;
  margin-top: 14px;
}

.note {
  border: 1px solid rgba(24, 53, 41, 0.11);
  border-radius: 18px;
  background: rgba(255, 253, 247, 0.82);
  padding: 13px;
  color: rgba(18, 23, 19, 0.72);
  font-size: 0.92rem;
  font-weight: 700;
}

.note strong {
  display: block;
  color: var(--forest);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 4px;
}

.floating-label {
  position: absolute;
  z-index: 2;
  max-width: 250px;
  border-radius: 24px;
  background: rgba(255, 253, 247, 0.92);
  border: 1px solid rgba(24, 53, 41, 0.13);
  box-shadow: 0 18px 44px rgba(18, 23, 19, 0.16);
  padding: 16px;
  color: rgba(18, 23, 19, 0.74);
  font-weight: 760;
}

.floating-label.one {
  left: 28px;
  top: 76px;
}

.floating-label.two {
  right: 28px;
  bottom: 82px;
}

.floating-label small {
  display: block;
  margin-top: 4px;
  color: var(--muted);
  font-weight: 650;
}

.section-head {
  max-width: 820px;
  margin-bottom: 36px;
}

.section-head.center {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.kicker {
  margin-bottom: 14px;
  color: var(--forest);
  font-size: 0.78rem;
  font-weight: 950;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.section-head p {
  margin-top: 16px;
  color: rgba(18, 23, 19, 0.66);
  font-size: 1.08rem;
}

.grid-2,
.grid-3,
.grid-4 {
  display: grid;
  gap: 20px;
}

.grid-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.grid-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.card,
.glass-card {
  position: relative;
  border: 1px solid rgba(24, 53, 41, 0.12);
  border-radius: var(--radius);
  background:
    linear-gradient(180deg, rgba(255, 253, 247, 0.86), rgba(255, 253, 247, 0.68));
  box-shadow: var(--shadow-soft);
  padding: 26px;
}

.card::before,
.glass-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background: linear-gradient(135deg, rgba(255,255,255,.48), transparent 38%);
}

.card p,
.glass-card p {
  position: relative;
  margin-top: 10px;
  color: rgba(18, 23, 19, 0.65);
}

.card h3,
.glass-card h3 {
  position: relative;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 54px rgba(18, 23, 19, 0.11);
}

.problem-card {
  min-height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.problem-card .number {
  color: rgba(24, 53, 41, 0.22);
  font-size: 3.8rem;
  font-weight: 950;
  line-height: 0.9;
  letter-spacing: -0.08em;
}

.split-panel {
  display: grid;
  grid-template-columns: 0.88fr 1.12fr;
  gap: 20px;
  align-items: stretch;
}

.portrait-panel {
  min-height: 560px;
  border-radius: 36px;
  background:
    radial-gradient(circle at 50% 20%, rgba(255, 253, 247, 0.70), transparent 11rem),
    linear-gradient(145deg, #d5dfd2, #9ab09d 58%, #6d8a76);
  border: 1px solid rgba(24, 53, 41, 0.13);
  box-shadow: var(--shadow-soft);
  overflow: hidden;
  padding: 24px;
  display: flex;
  align-items: end;
}

.portrait-caption {
  border-radius: 24px;
  background: rgba(255, 253, 247, 0.84);
  border: 1px solid rgba(24, 53, 41, 0.12);
  padding: 17px;
  color: rgba(18, 23, 19, 0.70);
  backdrop-filter: blur(12px);
}

.portrait-caption strong {
  display: block;
  color: var(--forest);
}

.check-list {
  position: relative;
  list-style: none;
  padding: 0;
  margin: 20px 0 0;
  display: grid;
  gap: 12px;
}

.check-list li {
  display: flex;
  gap: 11px;
  color: rgba(18, 23, 19, 0.67);
  font-weight: 650;
}

.check-list li::before {
  content: "✦";
  color: var(--clay);
  font-weight: 950;
}

.benefit-icon {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  margin-bottom: 18px;
  border-radius: 18px;
  background: rgba(220, 231, 221, 0.92);
  color: var(--forest);
  font-weight: 950;
}

.quote-card {
  padding: 32px;
  min-height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.quote-card p {
  color: var(--ink);
  font-size: 1.25rem;
  line-height: 1.35;
  letter-spacing: -0.02em;
}

.quote-card cite {
  margin-top: 22px;
  color: var(--muted);
  font-style: normal;
  font-weight: 760;
}

.logo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
}

.logo-pill {
  border: 1px solid rgba(24, 53, 41, 0.13);
  border-radius: 999px;
  background: rgba(255, 253, 247, 0.64);
  color: var(--forest);
  padding: 10px 14px;
  font-size: 0.9rem;
  font-weight: 850;
}

.cta-band {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 24px;
  align-items: center;
  border-radius: 42px;
  padding: 46px;
  background:
    radial-gradient(circle at 14% 20%, rgba(255, 253, 247, 0.18), transparent 22rem),
    linear-gradient(135deg, var(--forest), #10251d 72%);
  color: white;
  box-shadow: var(--shadow);
}

.cta-band::after {
  content: "";
  position: absolute;
  width: 360px;
  height: 360px;
  right: -130px;
  bottom: -170px;
  border-radius: 50%;
  border: 1px solid rgba(255, 253, 247, 0.18);
  box-shadow: inset 0 0 70px rgba(255, 253, 247, 0.08);
}

.cta-band p {
  margin-top: 14px;
  color: rgba(255, 253, 247, 0.74);
  max-width: 700px;
}

.cta-band .button {
  position: relative;
  z-index: 1;
  background: var(--cream);
  color: var(--forest);
}

.faq {
  display: grid;
  gap: 13px;
}

details {
  border: 1px solid rgba(24, 53, 41, 0.12);
  border-radius: 20px;
  background: rgba(255, 253, 247, 0.68);
  box-shadow: 0 12px 30px rgba(18, 23, 19, 0.045);
  padding: 18px 20px;
}

summary {
  cursor: pointer;
  color: var(--ink);
  font-weight: 900;
}

details p {
  margin-top: 10px;
  color: rgba(18, 23, 19, 0.64);
}

.page-hero {
  padding: 86px 0 44px;
}

.page-hero .container {
  max-width: 960px;
}

.page-hero h1 {
  font-size: clamp(3rem, 7vw, 6.6rem);
}

.article-list {
  display: grid;
  gap: 18px;
}

.article-card {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;
  align-items: center;
  padding: 30px;
}

.tag {
  display: inline-flex;
  width: fit-content;
  margin-bottom: 12px;
  border-radius: 999px;
  background: rgba(220, 231, 221, 0.9);
  color: var(--forest);
  padding: 7px 11px;
  font-size: 0.78rem;
  font-weight: 950;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.notice {
  border: 1px solid rgba(184, 135, 100, 0.44);
  border-radius: 22px;
  background: rgba(255, 248, 224, 0.76);
  color: #6f4e1d;
  padding: 18px 20px;
  font-weight: 650;
}

.form {
  display: grid;
  gap: 14px;
  margin-top: 22px;
}

label {
  display: block;
  margin-bottom: 7px;
  font-weight: 900;
}

input,
textarea,
select {
  width: 100%;
  border: 1px solid rgba(24, 53, 41, 0.14);
  background: rgba(255, 253, 247, 0.84);
  color: var(--ink);
  border-radius: 16px;
  padding: 13px 14px;
  font: inherit;
}

input:focus,
textarea:focus,
select:focus {
  outline: 3px solid rgba(118, 143, 123, 0.28);
  border-color: rgba(24, 53, 41, 0.30);
}

textarea {
  min-height: 136px;
  resize: vertical;
}

.helper {
  margin-top: 7px;
  color: var(--muted);
  font-size: 0.9rem;
}

.footer {
  position: relative;
  padding: 42px 0;
  border-top: 1px solid rgba(24, 53, 41, 0.11);
  background: rgba(24, 53, 41, 0.06);
}

.footer-grid {
  width: min(var(--max), calc(100% - 36px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.35fr 0.85fr 1fr;
  gap: 28px;
}

.footer p,
.footer li,
.footer a {
  color: rgba(18, 23, 19, 0.62);
}

.footer a {
  text-decoration: none;
}

.footer a:hover {
  color: var(--forest);
}

.footer ul {
  display: grid;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 12px 0 0;
}

.reveal {
  opacity: 0;
  transform: translateY(18px);
  transition:
    opacity 0.55s ease,
    transform 0.55s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition: none !important;
    animation: none !important;
  }

  .reveal {
    opacity: 1;
    transform: none;
  }
}

@media (max-width: 980px) {
  .hero-grid,
  .split-panel,
  .grid-4 {
    grid-template-columns: 1fr;
  }

  .grid-3 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .stage {
    min-height: 560px;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }

  .cta-band {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 760px) {
  .nav-toggle {
    display: inline-flex;
  }

  .site-nav {
    display: none;
    position: absolute;
    left: 18px;
    right: 18px;
    top: 74px;
    flex-direction: column;
    align-items: stretch;
    border: 1px solid rgba(24, 53, 41, 0.12);
    border-radius: 24px;
    background: rgba(255, 253, 247, 0.94);
    padding: 10px;
    box-shadow: var(--shadow);
  }

  .site-nav.open {
    display: flex;
  }

  .site-nav a {
    border-radius: 16px;
  }

  .site-nav .nav-cta {
    margin-left: 0;
    text-align: center;
  }

  .brand-copy span {
    display: none;
  }

  .hero {
    padding: 60px 0 52px;
  }

  .section {
    padding: 66px 0;
  }

  .grid-2,
  .grid-3 {
    grid-template-columns: 1fr;
  }

  .stage {
    min-height: 500px;
    border-radius: 34px;
  }

  .device {
    min-height: 420px;
    width: 78%;
  }

  .floating-label {
    max-width: 210px;
    font-size: 0.86rem;
  }

  .floating-label.one {
    left: 18px;
    top: 36px;
  }

  .floating-label.two {
    right: 18px;
    bottom: 42px;
  }

  .portrait-panel {
    min-height: 420px;
  }

  .cta-band {
    padding: 30px;
    border-radius: 30px;
  }

  .article-card {
    grid-template-columns: 1fr;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 460px) {
  .container,
  .nav-wrap,
  .footer-grid {
    width: min(100% - 28px, var(--max));
  }

  h1 {
    font-size: clamp(3rem, 17vw, 4.2rem);
  }

  .hero-actions,
  .actions {
    flex-direction: column;
  }

  .button {
    width: 100%;
  }

  .device {
    width: 84%;
  }

  .floating-label.one,
  .floating-label.two {
    position: relative;
    left: auto;
    right: auto;
    top: auto;
    bottom: auto;
    margin: 14px;
  }

  .stage {
    padding-top: 20px;
    display: grid;
    align-items: end;
  }
}