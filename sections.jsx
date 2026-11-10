// sections.jsx — non-hero, non-workflow sections of the portfolio.

// ── Skills (formerly Services) ─────────────────────────────────────────────
const SERVICES = [
  {
    num: '01',
    title: 'Workflow automation (n8n)',
    desc: 'Full automations from trigger to outcome, self-hosted on Docker with retries and observability baked in. Built for production, not just as a proof of concept.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="5" cy="12" r="2.5" /><circle cx="19" cy="6" r="2.5" /><circle cx="19" cy="18" r="2.5" />
        <path d="M7 11 L17 7 M7 13 L17 17" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'AI agents & LLM integrations',
    desc: 'Frontier and open source LLMs wired into agents that classify, draft and decide on their own. Covers RAG pipelines, function calling and multi step reasoning chains.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="6" width="16" height="13" rx="3" /><path d="M8 11h.01 M16 11h.01 M9 15h6" strokeLinecap="round" />
        <path d="M12 6V3 M10 3h4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Error handling & reliability',
    desc: 'Production workflows need retry logic, fallback branches and real time alerting. I build them so the automation recovers on its own instead of waking someone up at 2am.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 9v4M12 17h.01" strokeLinecap="round" />
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Workflow architecture',
    desc: 'Complex automations broken into modular sub workflows with shared credentials, clean execution logs and Git version control. Built so another engineer can pick it up without a long handover call.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="8.5" y="16" width="7" height="5" rx="1" />
        <path d="M6.5 8v3h11V8M12 11v5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Event-driven pipelines',
    desc: 'Webhook triggered pipelines and rate limited bulk runs that handle high volume events without dropping a single record. Polling fallbacks included for APIs that do not push.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'API & systems integration',
    desc: 'REST, GraphQL, webhooks and OAuth flows wired together cleanly. I connect CRMs, databases and SaaS tools in a way that does not fall apart the moment an API changes.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 17l4-4 4 4 6-6 4 4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 11h6V5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: '07',
    title: 'Data scraping',
    desc: 'Firecrawl, Apify and headless browsers with proxy rotation pulling clean structured data for lead generation, market research and enrichment. All delivered on a schedule.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
        <path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </svg>
    ),
  },
  {
    num: '08',
    title: 'n8n community nodes',
    desc: 'When the built in nodes are not enough I write new ones. My Rate Limiter community node is in TypeScript, verified by the n8n team and live on n8n Cloud for anyone to install.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 3h4a1 1 0 0 1 1 1v2a2 2 0 1 0 4 0V5h1a1 1 0 0 1 1 1v4h-1a2 2 0 1 0 0 4h1v4a1 1 0 0 1-1 1h-4v-1a2 2 0 1 0-4 0v1H5a1 1 0 0 1-1-1v-4h1a2 2 0 1 0 0-4H4V6a1 1 0 0 1 1-1h4V4a1 1 0 0 1 1-1z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: '09',
    title: 'Micro-SaaS & Chrome extensions',
    desc: 'Small focused products shipped end to end. Chrome extensions and micro SaaS tools taken from idea to real users, covering UI, auth, payments and everything in between.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 8.5h18" />
        <circle cx="6" cy="6.2" r="0.7" fill="currentColor" stroke="none" />
        <circle cx="8.4" cy="6.2" r="0.7" fill="currentColor" stroke="none" />
        <path d="M11 12.5l4 2.1-4 2.1z" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function Services() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-title">
          <div>
            <div className="kicker">What I do</div>
            <h2 style={{ marginTop: 14 }}>
              The things I can <span className="serif-i">actually</span> build
            </h2>
          </div>
          <p className="lede">
            Nine capabilities I bring to every automation role. The same ones behind my published workflows and community nodes.
            If a role centres on one or more of these, we should talk.
          </p>
        </div>

        <div className="services">
          {SERVICES.map(s => (
            <div className="service" key={s.num}>
              <div className="service-icon">{s.icon}</div>
              <div className="num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Stats ───────────────────────────────────────────────────────────────────
function Stats() {
  const items = [
    { value: '🏆',   suffix: '',  label: 'Challenge Winner · Apr 2026' },
    { value: '20',   suffix: '+', label: 'Published n8n workflows' },
    { value: '2000', suffix: '+', label: 'Workflow installs' },
    { value: '✓',    suffix: '',  label: 'n8n Verified Creator' },
  ];
  return (
    <section style={{ borderTop: '1px solid var(--line)' }}>
      <div className="container" style={{ padding: 0 }}>
        <div className="stats">
          {items.map((s, i) => (
            <div className="stat" key={i}>
              <div className="num-big">
                {s.value}
                <span className="suffix">{s.suffix}</span>
              </div>
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Tech Stack ──────────────────────────────────────────────────────────────
// Real brand marks via the lobehub static-SVG CDN; graceful wordmark fallback.
const LOGO_CDN = 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/';
const STACK_LOGOS = [
  { label: 'n8n',        slug: 'n8n',              mark: 'n8n', color: '#ea4b71' },
  { label: 'OpenAI',     slug: 'openai',           mark: 'AI',  color: '#111111' },
  { label: 'Claude',     slug: 'claude-color',     mark: 'C',   color: '#d97757' },
  { label: 'Gemini',     slug: 'gemini-color',     mark: 'G',   color: '#3186ff' },
  { label: 'Codex',      slug: 'codex',            mark: 'cdx', color: '#111111' },
  { label: 'Replit',     slug: 'replit',           mark: 'Re',  color: '#f26207' },
  { label: 'Lovable',    slug: 'lovable',          mark: 'Lo',  color: '#ff4d6d' },
  { label: 'NotebookLM', slug: 'notebooklm',       mark: 'NLM', color: '#3186ff' },
  { label: 'Firecrawl',  url: 'https://svgl.app/library/firecrawl.svg', mark: 'FC', color: '#f97316' },
  { label: 'Apify',      url: 'https://apify.com/favicon.svg',          mark: 'Ap', color: '#00a76c' },
  { label: 'Cursor',     slug: 'cursor',           mark: 'Cu',  color: '#111111' },
  { label: 'Supabase',   url: 'https://cdn.simpleicons.org/supabase',   mark: 'Sb', color: '#3ecf8e' },
];

function Stack() {
  return (
    <section className="section" id="stack">
      <div className="container">
        <div className="section-title">
          <div>
            <div className="kicker">Integrations</div>
            <h2 style={{ marginTop: 14 }}>
              The <span className="serif-i">toolbox</span>
            </h2>
          </div>
          <p className="lede">
            The tools I actually build with — workflow engines, frontier models, and the app builders that ship things to production.
          </p>
        </div>

        <div className="stack-grid">
          {STACK_LOGOS.map(l => (
            <div className="stack-cell" key={l.label}>
              <div className="logo-mark">
                <img
                  src={l.url || `${LOGO_CDN}${l.slug}.svg`}
                  alt={`${l.label} logo`}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'grid';
                  }}
                />
                <span className="logo-fallback" style={{ color: l.color }}>{l.mark}</span>
              </div>
              <div className="label">{l.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── About ──────────────────────────────────────────────────────────────────
function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="portrait">
            <img src="assets/divyanshu.png" alt="Divyanshu Gupta" />
          </div>
          <div className="about-body">
            <div className="kicker">About</div>
            <h2 style={{ marginTop: 14, marginBottom: 24, fontSize: 'clamp(28px, 3.6vw, 44px)', fontWeight: 500, lineHeight: 1.08 }}>
              I build the systems that do the work nobody <span className="serif-i">wants to do twice.</span>
            </h2>
            <p>
              Hi, I'm Divyanshu. I fell for automation the first time I watched a workflow do in ten seconds what used to eat my whole afternoon. Since then I haven't really stopped. Today I'm an <strong>n8n Verified Creator</strong> with 10 published workflows, more than <strong>1,000 installs</strong>, and a <strong>Community Challenge win</strong> for an AI agent I built for fun on a weekend.
            </p>
            <p>
              I like the unglamorous parts most people skip: the retries, the edge cases, the 3am failures, the tiny details that decide whether something is a slick demo or a system that just runs, quietly, for a year. I'm equally at home wiring up n8n, writing Python and JavaScript, or shipping a Chrome extension when no off the shelf tool exists. If it removes friction for real people, I want to build it.
            </p>
            <p>
              <strong>What I'm looking for:</strong> an Automation, AI, or Integration Engineer role on a team that ships fast and cares about craft. Remote first or hybrid, and happy to relocate for the right people.
            </p>

            <div className="credentials">
              <a className="credential" href="https://n8n.io/creators/divyanshugupta/" target="_blank" rel="noreferrer">
                <span className="icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <b>n8n Verified Creator</b>
                  <div className="sub">n8n.io/creators/divyanshugupta</div>
                </div>
                <span className="arr">↗</span>
              </a>
              <a className="credential" href="https://www.linkedin.com/in/divyanshu-gupta-a4a787114" target="_blank" rel="noreferrer" data-cred="linkedin">
                <span className="icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zM8 8h4.36v1.92h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.02 5.42 6.94V22h-4.54v-6.74c0-1.6-.04-3.66-2.24-3.66-2.24 0-2.58 1.74-2.58 3.54V22H8V8z" />
                  </svg>
                </span>
                <div>
                  <b>LinkedIn — Divyanshu Gupta</b>
                  <div className="sub">connect or message me directly</div>
                </div>
                <span className="arr">↗</span>
              </a>
              <a className="credential" href="assets/resume.pdf" download>
                <span className="icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z" />
                    <path d="M14 3v6h6 M9 13h6 M9 17h6" strokeLinecap="round" />
                  </svg>
                </span>
                <div>
                  <b>Download resume (PDF)</b>
                  <div className="sub">2 pages · last updated this month</div>
                </div>
                <span className="arr">↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Contact / CTA ──────────────────────────────────────────────────────────
function Contact() {
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState(false);
  const handle = async (e) => {
    e.preventDefault();
    const f = e.target;
    const data = {
      name:       f.elements.name.value,
      company:    f.elements.company.value,
      role:       f.elements.role.value,
      note:       f.elements.note.value,
      engagement: f.elements.engagement.value,
    };
    try {
      const res = await fetch('https://formspree.io/f/mrewqrap', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
        f.reset();
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        setError(true);
        setTimeout(() => setError(false), 5000);
      }
    } catch(_) {
      setError(true);
      setTimeout(() => setError(false), 5000);
    }
  };
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="cta">
          <div className="cta-inner">
            <div>
              <div className="kicker">Get in touch</div>
              <h2 style={{ marginTop: 18 }}>
                Hiring for an<br/>
                <span className="serif-i">automation</span> role?
              </h2>
              <p>
                I'm actively interviewing. If you have a role that involves building workflows, AI agents,
                or systems integrations — I'd love to hear about it. I usually reply within a day.
              </p>
              <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                <a className="btn btn-primary" href="assets/resume.pdf" download>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"/></svg>
                  Download resume
                </a>
                <a className="btn btn-ghost" href="mailto:guptadivyanshu765@gmail.com">
                  Email me
                </a>
                <a className="btn btn-ghost" href="https://www.linkedin.com/in/divyanshu-gupta-a4a787114" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
              <div style={{ marginTop: 28, fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'var(--ink-mute)', letterSpacing: '0.04em', lineHeight: 1.7 }}>
                ✦ Open to: full-time · remote / hybrid<br/>
                ✦ Based in India · timezone-flexible · open to relocation
              </div>
            </div>

            <form className="cta-form" onSubmit={handle}>
              <div>
                <label>Your name</label>
                <input name="name" type="text" placeholder="e.g. Priya Sharma" required />
              </div>
              <div>
                <label>Company</label>
                <input name="company" type="text" placeholder="Acme Inc." required />
              </div>
              <div>
                <label>Role you're hiring for</label>
                <input name="role" type="text" placeholder="e.g. Automation Engineer (Remote)" required />
              </div>
              <div>
                <label>Quick note</label>
                <textarea name="note" placeholder="A line or two about the role, team, and timeline." required></textarea>
              </div>
              <div>
                <label>Engagement type</label>
                <select name="engagement" defaultValue="">
                  <option value="" disabled>Pick one</option>
                  <option>Full-time</option>
                  <option>Long-term contract</option>
                  <option>Short-term contract</option>
                  <option>Internship</option>
                </select>
              </div>
              <div className="submit-row">
                <span className="submit-note">
                  {submitted ? '✓ Message sent — I\'ll reply within 24h!' : error ? '✗ Something went wrong, try again.' : 'Or send a quick note →'}
                </span>
                <button type="submit" className="btn btn-primary" style={{ padding: '11px 18px', fontSize: 13 }}>
                  Send message
                  <span className="arrow">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <a href="#top" className="nav-logo" style={{ textDecoration: 'none' }}>
                <div className="mark">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="9" fill="#111"/>
                    <text x="7" y="23" fontFamily="Georgia, serif" fontSize="20" fontWeight="700" fill="white">D</text>
                    <circle cx="24" cy="22" r="3" fill="#ea4b71"/>
                  </svg>
                </div>
                <div className="wordmark">
                  <span className="wordmark-name">Divyanshu</span>
                  <span className="wordmark-role">AI Automation</span>
                </div>
              </a>
            </div>
            <p style={{ marginTop: 18, color: 'var(--ink-dim)', fontSize: 14, maxWidth: 380, lineHeight: 1.6 }}>
              I build n8n workflows, AI agents and Micro SaaS that run quietly in the background while your team ships the important stuff. n8n Verified Creator and Community Challenge winner.
            </p>
          </div>
          <div className="right">
            <a href="#skills">Skills</a>
            <a href="#work">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="assets/resume.pdf" download>Resume ↓</a>
            <a href="https://n8n.io/creators/divyanshugupta/" target="_blank" rel="noreferrer">n8n profile ↗</a>
            <a href="https://www.linkedin.com/in/divyanshu-gupta-a4a787114" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
        <div className="footer-foot">
          <span>© 2026 Divyanshu Gupta · Open to opportunities.</span>
          <span>Built with care, n8n, and a lot of coffee.</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Services, Stats, Stack, About, Contact, Footer });
