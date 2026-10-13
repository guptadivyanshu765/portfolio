// app.jsx — top-level App: Nav + Hero + Marquee + sections + Tweaks panel.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": ["#ea4b71", "#ff6e5b"],
  "density": "regular",
  "headingStyle": "mixed",
  "showNodeGraph": true
}/*EDITMODE-END*/;

// Palette options: [primary, secondary]
const PALETTES = [
  ['#ea4b71', '#ff6e5b'], // n8n pink + warm orange
  ['#ff6e5b', '#ffb84a'], // orange + amber
  ['#5dade2', '#a78bfa'], // cool tech blue + violet
  ['#5be0a0', '#34d399'], // acid green
  ['#f5f4ef', '#a3a3a3'], // mono / monochrome
];

function applyPalette([p1, p2]) {
  const root = document.documentElement;
  root.style.setProperty('--accent', p1);
  root.style.setProperty('--accent-2', p2);
  // derived
  const soft = p1 + '24';   // ~14% alpha
  const line = p1 + '52';   // ~32% alpha
  root.style.setProperty('--accent-soft', soft);
  root.style.setProperty('--accent-line', line);
}

function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-logo">
          <div className="mark">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* background */}
              <rect width="32" height="32" rx="9" fill="#111"/>
              {/* Bold D letterform */}
              <text x="7" y="23" fontFamily="Georgia, serif" fontSize="20" fontWeight="700" fill="white">D</text>
              {/* accent dot — bottom-right spark */}
              <circle cx="24" cy="22" r="3" fill="#ea4b71"/>
            </svg>
          </div>
          <div className="wordmark">
            <span className="wordmark-name">Divyanshu</span>
            <span className="wordmark-role">AI Automation</span>
          </div>
        </a>
        <nav className="nav-links">
          <a href="#skills">Skills</a>
          <a href="#work">Projects</a>
          <a href="#stack">Stack</a>
          <a href="#about">About</a>
        </nav>
        <a className="btn btn-primary" href="assets/resume.pdf" download
           style={{ padding: '10px 16px', fontSize: 13.5 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"/></svg>
          Resume
        </a>
      </div>
    </header>
  );
}

function Hero({ showNodeGraph, headingStyle }) {
  // headingStyle: 'sans' | 'mixed' | 'serif'
  const renderHeading = () => {
    if (headingStyle === 'sans') {
      return (
        <h1>
          Automation Engineer building workflows, agents &amp; Micro SaaS that ship.
        </h1>
      );
    }
    if (headingStyle === 'serif') {
      return (
        <h1>
          <span className="serif-i">Automation Engineer building</span><br/>
          <span className="serif-i">workflows, agents</span><br/>
          <span className="serif-i">&amp; Micro SaaS that ship.</span>
        </h1>
      );
    }
    return (
      <h1>
        Automation Engineer building<br/>
        <span className="serif-i">workflows, agents &amp; Micro SaaS</span> that ship.
      </h1>
    );
  };

  return (
    <section className="hero" id="top">
      <div className="grid-bg" />
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-pills">
              <div className="availability">
                <span className="pulse" />
                OPEN TO NEW ROLES · REMOTE OR HYBRID
              </div>
              <a className="award-badge" href="#work">
                <span className="t">🏆</span>
                n8n Community Challenge Winner · Apr '26
              </a>
            </div>
            {renderHeading()}
            <p className="hero-sub">
              I turn messy, manual operations into systems that run themselves. I'm <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Divyanshu</strong>, an <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>n8n Verified Creator</strong> whose workflows have <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>1,000+ installs</strong>, with a <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Community Challenge win</strong> to show for it. From invoice OCR pipelines to multi step AI agents and a live Chrome extension, I ship things people actually use. Now I want to do it on your team.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="assets/resume.pdf" download>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"/></svg>
                Download resume
              </a>
              <a className="btn btn-ghost" href="#work">
                See projects
              </a>
              <a className="btn btn-ghost" href="https://topmate.io/divyanshubistudio" target="_blank" rel="noreferrer"
                 style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                Book a mentorship
                <span className="arrow">↗</span>
              </a>
            </div>
            <div className="hero-meta">
              <span>10 n8n workflows published</span>
              <span className="dot" />
              <span>1000+ workflow installs</span>
              <span className="dot" />
              <span>Remote first, open to relocation</span>
            </div>
          </div>
          {showNodeGraph && <NodeGraph />}
        </div>
      </div>
    </section>
  );
}

function MarqueeStrip() {
  const items = [
    '🏆 n8n Community Challenge Winner',
    'n8n Verified Creator',
    'AI Automation Engineer',
    'n8n · Make · Zapier',
    'GPT-4 · Claude · Gemini',
    'Firecrawl · Apify · Web Scraping',
    'Self-hosted n8n on Docker',
    'REST APIs · Webhooks · OAuth',
    'Chrome Extensions · Micro SaaS',
    'TypeScript · Python · SQL',
    'Open to Remote · Hybrid',
  ];
  const full = [...items, ...items]; // duplicated for seamless loop
  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee">
        {full.map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  );
}

function Workflows() {
  const [view, setView] = React.useState('workflows');

  const TAB_COPY = {
    workflows: {
      kicker: 'Published work',
      heading: <> n8n workflows,<br/><span className="serif-i">live and published</span> </>,
      lede: 'A selection of my published n8n workflows — including a community-challenge winner. Open any workflow to inspect the full node graph, or import it straight into your own instance.',
    },
    agent: {
      kicker: 'Flagship agent',
      heading: <> An AI agent that<br/><span className="serif-i">debugs your workflows</span> </>,
      lede: 'Built in n8n\'s new Agents tab. It monitors every workflow in an instance, explains failures on Telegram, and applies a fix only after a human approves it.',
    },
    community: {
      kicker: 'Open source',
      heading: <> Community nodes,<br/><span className="serif-i">built from scratch</span> </>,
      lede: 'When a built-in n8n node doesn\'t exist, I build one. Jev Router brings AI decision making and confidence based routing into any workflow, and Rate Limiter puts an end to 429 errors. Both are written in TypeScript and installable in one click.',
    },
    microsaas: {
      kicker: 'Micro SaaS',
      heading: <> Small tools,<br/><span className="serif-i">real problems solved</span> </>,
      lede: 'Beyond workflows I ship self-contained products — Chrome extensions, bots, and utilities — that wrap automation into a form anyone can use without touching a node graph.',
    },
  };

  const copy = TAB_COPY[view];
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-title">
          <div>
            <div className="kicker">{copy.kicker}</div>
            <h2 style={{ marginTop: 14 }}>
              {copy.heading}
            </h2>
          </div>
          <p className="lede">
            {copy.lede}
          </p>
        </div>

        <div className="proj-tabs-wrap">
          <div className="proj-tabs" role="tablist" aria-label="Project categories"
               onKeyDown={(e) => {
                 const order = ['workflows', 'agent', 'community', 'microsaas'];
                 if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
                 e.preventDefault();
                 const next = order[(order.indexOf(view) + (e.key === 'ArrowRight' ? 1 : order.length - 1)) % order.length];
                 setView(next);
                 const btn = e.currentTarget.querySelector(`[data-tab="${next}"]`);
                 if (btn) btn.focus();
               }}>
            <button className={`proj-tab ${view === 'workflows' ? 'active' : ''}`} data-tab="workflows"
                    role="tab" aria-selected={view === 'workflows'} tabIndex={view === 'workflows' ? 0 : -1}
                    onClick={() => setView('workflows')}>
              n8n Workflows <span className="count">06</span>
            </button>
            <button className={`proj-tab ${view === 'agent' ? 'active' : ''}`} data-tab="agent"
                    role="tab" aria-selected={view === 'agent'} tabIndex={view === 'agent' ? 0 : -1}
                    onClick={() => setView('agent')}>
              n8n Agent <span className="count">01</span>
            </button>
            <button className={`proj-tab ${view === 'community' ? 'active' : ''}`} data-tab="community"
                    role="tab" aria-selected={view === 'community'} tabIndex={view === 'community' ? 0 : -1}
                    onClick={() => setView('community')}>
              Community Nodes <span className="count">02</span>
            </button>
            <button className={`proj-tab ${view === 'microsaas' ? 'active' : ''}`} data-tab="microsaas"
                    role="tab" aria-selected={view === 'microsaas'} tabIndex={view === 'microsaas' ? 0 : -1}
                    onClick={() => setView('microsaas')}>
              Micro SaaS <span className="count">01</span>
            </button>
          </div>
        </div>

        {view === 'workflows' && (
          <>
            <FeaturedWorkflow wf={FEATURED} />

            <div className="workflows" style={{ marginTop: 32 }}>
              {WORKFLOWS.map(wf => (
                <WorkflowCard key={wf.title} wf={wf} />
              ))}
            </div>

            <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center' }}>
              <a className="btn btn-ghost" href={PROFILE_URL} target="_blank" rel="noreferrer">
                View all 10 workflows on n8n
                <span className="arrow">↗</span>
              </a>
            </div>
          </>
        )}
        {view === 'agent' && <AgentShowcase />}
        {view === 'community' && <CommunityNode />}
        {view === 'microsaas' && <MicroSaaS />}
      </div>
    </section>
  );
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => { applyPalette(t.palette); }, [t.palette]);
  React.useEffect(() => {
    document.body.dataset.density = t.density;
  }, [t.density]);

  return (
    <>
      <Nav />
      <main>
        <Hero showNodeGraph={t.showNodeGraph} headingStyle={t.headingStyle} />
        <MarqueeStrip />
        <Stats />
        <Services />
        <Workflows />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Accent palette" />
        <TweakColor
          label="Accent"
          value={t.palette}
          options={PALETTES}
          onChange={(v) => setTweak('palette', v)}
        />

        <TweakSection label="Layout" />
        <TweakRadio
          label="Density"
          value={t.density}
          options={['compact', 'regular', 'comfy']}
          onChange={(v) => setTweak('density', v)}
        />
        <TweakRadio
          label="Headline"
          value={t.headingStyle}
          options={[
            { value: 'sans',  label: 'Sans' },
            { value: 'mixed', label: 'Mixed' },
            { value: 'serif', label: 'Serif' },
          ]}
          onChange={(v) => setTweak('headingStyle', v)}
        />
        <TweakToggle
          label="Show hero graph"
          value={t.showNodeGraph}
          onChange={(v) => setTweak('showNodeGraph', v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
