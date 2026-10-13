// workflows.jsx — published n8n template case studies.
// Data sourced from the n8n Verified Creator profile:
//   https://n8n.io/creators/divyanshugupta/
// Each card renders a branded node-flow diagram (in place of a video),
// a description, the integration stack, and a link to the live template.

const PROFILE_URL = 'https://n8n.io/creators/divyanshugupta/';
const LINKEDIN_WIN = 'https://www.linkedin.com/feed/update/urn:li:activity:7455659931879456769/';

// ── Featured award-winning template ─────────────────────────────────────────
const FEATURED = {
  title: 'AI-Powered NPM Package Intelligence Agent',
  award: 'Community Challenge Winner · April 2026',
  desc: 'Analyzes any npm package and delivers a data-driven recommendation using Firecrawl + live APIs + AI reasoning. Firecrawl dynamically discovers the correct npm and GitHub URLs — no hardcoding — real-time stats are pulled from GitHub and npm, an AI agent scores health and risk, and a Slack-ready report is dispatched, with graceful fallbacks when a package is missing.',
  highlights: [
    'Firecrawl-powered dynamic URL discovery (no hardcoded endpoints)',
    'Real-time evaluation via GitHub + npm APIs — stars, issues, downloads, last commit',
    'AI reasoning for Low / Medium / High risk scoring, not just raw data',
    'Health metrics: activity status, issue-to-star ratio, adoption signals',
    'Graceful handling of missing packages + a clean Slack-ready report',
  ],
  apps: ['Firecrawl', 'GitHub API', 'npm API', 'OpenAI', 'OpenRouter', 'Slack'],
  image: 'assets/npm-agent-workflow.png',
  url: 'https://n8n.io/workflows/15410-ai-powered-npm-package-intelligence-agent/',
  linkedin: LINKEDIN_WIN,
};

// node visual styles — { l: label, m: monogram, c: colour }
const N = {
  github:   { l: 'GitHub',    m: 'GH', c: '#e9e7e0' },
  http:     { l: 'HTTP',      m: 'H',  c: '#5dade2' },
  iff:      { l: 'If',        m: 'IF', c: '#ffb84a' },
  set:      { l: 'Set',       m: 'Se', c: '#ffb84a' },
  merge:    { l: 'Merge',     m: 'Mg', c: '#5dade2' },
  firecraw: { l: 'Firecrawl', m: 'FC', c: '#ff6e5b' },
  npm:      { l: 'npm',       m: 'np', c: '#ea4b71' },
  gemini:   { l: 'Gemini',    m: 'Gm', c: '#a78bfa' },
  gpt:      { l: 'GPT',       m: 'AI', c: '#5be0a0' },
  quicknode:{ l: 'QuickNode', m: 'QN', c: '#5be0a0' },
  supabase: { l: 'Supabase',  m: 'Sb', c: '#34d399' },
  agent:    { l: 'AI Agent',  m: '◆',  c: '#ea4b71' },
  sheets:   { l: 'Sheets',    m: 'Sh', c: '#5be0a0' },
  sarvam:   { l: 'Sarvam',    m: 'Sv', c: '#ff6e5b' },
  reamaze:  { l: 'Re:amaze',  m: 'Re', c: '#ff6e5b' },
};

const WORKFLOWS = [
  {
    num: '01',
    category: 'AI · Finance / OCR',
    title: 'Extract invoice data from scanned PDFs to Google Sheets',
    desc: 'OCRs scanned invoice PDFs with Sarvam, structures the line items with Google Gemini, then writes clean, validated rows straight into Google Sheets — turning a manual data-entry chore into a hands-off pipeline.',
    apps: ['Sarvam AI', 'Google Gemini', 'Google Sheets', 'HTTP'],
    image: 'assets/invoice-ocr-workflow.png',
    diagram: [N.sarvam, N.gemini, N.merge, N.sheets],
    extra: 7,
    likes: 146,
    linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7432499287395119104/',
    url: 'https://n8n.io/workflows/13779-extract-invoice-data-from-scanned-pdfs-to-google-sheets-with-sarvam-and-gemini/',
  },
  {
    num: '02',
    category: 'AI · Lead Generation',
    title: 'LinkedIn lead enrichment pipeline — profiles, companies & domains',
    desc: 'Takes a sheet of raw contacts and enriches each one: searches Google via SerpAPI for the LinkedIn profile, validates the match with an AI agent, scrapes work history with Apify, then finds the company website domain for email discovery — a 3-phase pipeline with batching and rate-limit handling.',
    apps: ['SerpAPI', 'Apify', 'Google Gemini', 'Google Sheets'],
    image: 'assets/lead-enrichment-workflow.png',
    diagram: [N.sheets, N.http, N.agent, N.gemini],
    extra: 12,
    likes: 0,
    url: 'https://n8n.io/workflows/16018-route-social-media-content-reviews-with-google-gemini-and-google-sheets/',
    linkedin: 'https://www.linkedin.com/posts/divyanshu-gupta-a4a787114_n8n-automation-leadenrichment-activity-7468746488911872001-aHnz',
  },
  {
    num: '03',
    category: 'AI · Customer Support',
    title: 'Summarize & answer Re:amaze support emails with an SOP knowledge base',
    desc: 'Reads incoming Re:amaze tickets, retrieves the matching SOP from a knowledge base, and drafts a grounded reply with Gemini — escalating to a human only when confidence is low.',
    apps: ['Re:amaze', 'Google Gemini', 'Knowledge base', 'HTTP'],
    image: 'assets/reamaze-support-workflow.png',
    diagram: [N.reamaze, N.iff, N.set, N.gemini],
    extra: 9,
    likes: 52,
    url: 'https://n8n.io/workflows/14168-summarize-and-answer-reamaze-support-emails-with-gemini-and-sop-knowledge-base/',
    linkedin: 'https://www.linkedin.com/posts/divyanshu-gupta-a4a787114_n8n-automation-aiworkflows-activity-7442586293311688704-7cK_/',
  },
  {
    num: '03',
    category: 'AI · RAG / Legal',
    title: 'Analyze legal contract risk with Gemini hybrid RAG & Supabase',
    desc: 'A hybrid-RAG pipeline that stores contract clauses as vectors in Supabase, then uses Gemini to retrieve relevant terms, flag risky language, and summarise the overall exposure.',
    apps: ['Google Gemini', 'Supabase', 'Vector store', 'HTTP'],
    image: 'assets/legal-rag-workflow.png',
    diagram: [N.http, N.supabase, N.gemini, N.merge],
    extra: 8,
    likes: 0,
    url: 'https://n8n.io/workflows/15307-analyze-legal-contract-risk-with-google-gemini-hybrid-rag-and-supabase/',
    linkedin: 'https://www.linkedin.com/posts/divyanshu-gupta-a4a787114_n8n-buildinpublic-aiautomation-activity-7454166874533036032-eDfY/',
  },
  {
    num: '04',
    category: 'AI · Web3',
    title: 'Track multi-chain crypto portfolios & analyze risk with QuickNode',
    desc: 'Pulls wallet balances across multiple chains through QuickNode, merges holdings into a single view, and uses Gemini to assess concentration and overall portfolio risk.',
    apps: ['QuickNode', 'Google Gemini', 'Multi-chain RPC', 'HTTP'],
    image: 'assets/crypto-portfolio-workflow.png',
    diagram: [N.quicknode, N.http, N.merge, N.gemini],
    extra: 6,
    likes: 0,
    url: 'https://n8n.io/workflows/15042-track-multi-chain-crypto-portfolios-and-analyze-risk-with-gemini-and-quicknode/',
    linkedin: 'https://www.linkedin.com/posts/divyanshu-gupta-a4a787114_n8n-automation-crypto-activity-7450555275293515778-hBYt/',
  },
];

function WorkflowDiagram({ nodes, extra }) {
  return (
    <div className="wf-flow" aria-hidden="true">
      {nodes.map((n, i) => (
        <React.Fragment key={i}>
          <div className="wf-node">
            <div className="wf-node-box" style={{ borderColor: `${n.c}55` }}>
              <span className="wf-node-mono" style={{ color: n.c }}>{n.m}</span>
            </div>
            <div className="wf-node-label">{n.l}</div>
          </div>
          {(i < nodes.length - 1 || extra > 0) && (
            <div className="wf-connector">
              <span className="wf-spark" style={{ animationDelay: `${i * 0.4}s` }} />
            </div>
          )}
        </React.Fragment>
      ))}
      {extra > 0 && (
        <div className="wf-node">
          <div className="wf-node-box wf-node-more">
            <span className="wf-node-mono">+{extra}</span>
          </div>
          <div className="wf-node-label">nodes</div>
        </div>
      )}
    </div>
  );
}

function WorkflowCard({ wf }) {
  const [open, setOpen] = React.useState(false);
  return (
    <article className="workflow">
      {wf.image ? (
        <button className="wf-media wf-media-img" onClick={() => setOpen(true)}
                aria-label={`Expand workflow screenshot — ${wf.title}`}>
          <img src={wf.image} alt={`${wf.title} — n8n workflow canvas`} loading="lazy" />
          <div className="wf-tag">
            <span className="dot" />
            {wf.category}
          </div>
          <div className="wf-open">Click to expand ⤢</div>
        </button>
      ) : (
        <a className="wf-media" href={wf.url} target="_blank" rel="noreferrer"
           aria-label={`Open workflow on n8n — ${wf.title}`}>
          <div className="wf-canvas" />
          <div className="wf-tag">
            <span className="dot" />
            {wf.category}
          </div>
          <WorkflowDiagram nodes={wf.diagram} extra={wf.extra} />
          <div className="wf-open">Open on n8n <span>↗</span></div>
        </a>
      )}

      <div className="wf-body">
        <div className="wf-num">
          N8N WORKFLOW
        </div>
        <h3 className="wf-title">{wf.title}</h3>
        <p className="wf-desc">{wf.desc}</p>

        <div style={{ marginTop: 4 }}>
          <div className="wf-row">
            <div className="k">Built with</div>
            <div className="v">
              <div className="wf-chips">
                {wf.apps.map(s => <span key={s} className="chip">{s}</span>)}
              </div>
            </div>
          </div>
        </div>

        <div className="wf-links">
          <a className="wf-link" href={wf.url} target="_blank" rel="noreferrer">
            View &amp; import workflow on n8n
            <span className="arrow">→</span>
          </a>
          {wf.linkedin && (
            <a className="wf-link wf-link-li" href={wf.linkedin} target="_blank" rel="noreferrer">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zM8 8h4.36v1.92h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.02 5.42 6.94V22h-4.54v-6.74c0-1.6-.04-3.66-2.24-3.66-2.24 0-2.58 1.74-2.58 3.54V22H8V8z"/></svg>
              More details on LinkedIn
              <span className="arrow">↗</span>
            </a>
          )}
        </div>
      </div>

      {open && wf.image && <ImageModal src={wf.image} onClose={() => setOpen(false)} />}
    </article>
  );
}

function ImageModal({ src, onClose }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);
  return (
    <div className="img-modal" onClick={onClose}>
      <button className="close" aria-label="Close" onClick={onClose}>✕</button>
      <img src={src} alt="Workflow canvas" onClick={(e) => e.stopPropagation()} />
      <div className="img-modal-hint">Scroll / pinch to zoom · Esc to close</div>
    </div>
  );
}

function FeaturedWorkflow({ wf }) {
  const [open, setOpen] = React.useState(false);
  return (
    <article className="featured-wf">
      <div className="featured-ribbon">
        <span className="featured-trophy">🏆</span>
        <span className="featured-award">{wf.award}</span>
        <span className="featured-ribbon-tag">n8n Community Challenge</span>
      </div>

      <button className="featured-media" onClick={() => setOpen(true)}
              aria-label="Expand workflow screenshot">
        <img src={wf.image} alt={`${wf.title} — n8n workflow canvas`} loading="lazy" />
        <div className="featured-expand">Click to expand the full workflow ⤢</div>
      </button>

      <div className="featured-body">
        <div className="featured-main">
          <div className="wf-num">FEATURED · AWARD-WINNING WORKFLOW</div>
          <h3 className="featured-title">{wf.title}</h3>
          <p className="featured-desc">{wf.desc}</p>
          <div className="wf-chips" style={{ marginTop: 4 }}>
            {wf.apps.map(s => <span key={s} className="chip">{s}</span>)}
          </div>
          <div className="featured-links">
            <a className="btn btn-primary" href={wf.url} target="_blank" rel="noreferrer">
              View &amp; import on n8n
              <span className="arrow">→</span>
            </a>
            <a className="btn btn-ghost" href={wf.linkedin} target="_blank" rel="noreferrer">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zM8 8h4.36v1.92h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.02 5.42 6.94V22h-4.54v-6.74c0-1.6-.04-3.66-2.24-3.66-2.24 0-2.58 1.74-2.58 3.54V22H8V8z"/></svg>
              See the win on LinkedIn
              <span className="arrow">↗</span>
            </a>
          </div>
        </div>

        <aside className="featured-side">
          <div className="featured-note-label">Why it stood out</div>
          <ul className="featured-hl">
            {wf.highlights.map((h, i) => (
              <li key={i}><span className="featured-hl-dot" />{h}</li>
            ))}
          </ul>
        </aside>
      </div>

      {open && <ImageModal src={wf.image} onClose={() => setOpen(false)} />}
    </article>
  );
}

const COMMUNITY_NODES = [
  {
    id: 'jev',
    icon: '🧭',
    ribbon: 'Open-source community node · AI routing',
    tag: 'npm · TypeScript',
    video: 'assets/jev-router-demo.mp4',
    title: 'Jev Router',
    desc: 'An n8n community node for TypeSafe AI\'s Jev, a decision model built to answer typed questions instead of chatting. Send it any text, ask Choice, Score or Yes/No questions in one API call, and get structured answers with confidence scores. The node then routes each item to the right branch automatically, and anything below your confidence threshold lands in a Needs Review branch for a human.',
    highlights: [
      'Classify & Route: one output branch per answer, plus a Needs Review branch for low confidence items',
      'All questions batched into a single API call per item',
      'Calibration Check mode tests confidence scores against your own labeled data before production',
      'Automatic retries with exponential backoff on 429 and 529 errors',
      'Usable as a tool inside the n8n AI Agent node',
    ],
    chips: ['TypeScript', 'TypeSafe AI', 'AI Agent tool', 'Open source'],
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7509330484284465152/',
  },
  {
    id: 'rl',
    icon: '🧩',
    ribbon: 'Open-source community node · Live on n8n Cloud',
    tag: 'npm · TypeScript',
    video: 'assets/rate-limiter-node.mp4',
    title: 'n8n Rate Limiter',
    desc: 'An open-source n8n community node that solves one of the most common pain points in workflow automation — API rate-limit errors. Drop it between any two nodes and it automatically controls the flow of requests based on the exact rate limit from your API docs. No math, no guessing, no 429s. Built entirely with TypeScript and Claude Code — verified and live on n8n Cloud.',
    highlights: [
      'Sits between any two nodes — no reconfiguration',
      'Enforces the exact rate limit straight from your API docs',
      'Eliminates 429 “Too Many Requests” errors entirely',
      'Built in TypeScript with Claude Code — verified & live on n8n Cloud',
    ],
    chips: ['TypeScript', 'Claude Code', 'n8n Cloud', 'Open source'],
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7475230153611046913/',
  },
];

function CommunityNodeCard({ node }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const key = node.id + '_node_video_time';
    const saved = parseFloat(localStorage.getItem(key) || '0');
    if (saved > 0 && saved < (v.duration || 1e9)) {
      try { v.currentTime = saved; } catch (e) {}
    }
    const onTime = () => { if (!v.paused) localStorage.setItem(key, String(v.currentTime)); };
    v.addEventListener('timeupdate', onTime);
    return () => v.removeEventListener('timeupdate', onTime);
  }, []);

  return (
    <article className="community-node">
      <div className="cn-ribbon">
        <span className="cn-ribbon-icon">{node.icon}</span>
        <span className="cn-ribbon-text">{node.ribbon}</span>
        <span className="cn-ribbon-tag">{node.tag}</span>
      </div>
      <div className="cn-grid">
        <div className="cn-media">
          <video ref={ref} controls preload="metadata" playsInline src={node.video}>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="cn-body">
          <div className="wf-num">COMMUNITY NODE · OPEN SOURCE</div>
          <h3 className="featured-title">{node.title}</h3>
          <p className="featured-desc">{node.desc}</p>
          <ul className="featured-hl" style={{ marginTop: 22 }}>
            {node.highlights.map((h, i) => (
              <li key={i}><span className="featured-hl-dot" />{h}</li>
            ))}
          </ul>
          <div className="wf-chips" style={{ marginTop: 22 }}>
            {node.chips.map(s => <span key={s} className="chip">{s}</span>)}
          </div>
          <div className="featured-links">
            <a className="btn btn-primary" href={node.link} target="_blank" rel="noreferrer">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zM8 8h4.36v1.92h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.02 5.42 6.94V22h-4.54v-6.74c0-1.6-.04-3.66-2.24-3.66-2.24 0-2.58 1.74-2.58 3.54V22H8V8z"/></svg>
              More details on LinkedIn
              <span className="arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function CommunityNode() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {COMMUNITY_NODES.map(n => <CommunityNodeCard key={n.id} node={n} />)}
    </div>
  );
}

function MicroSaaS() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const key = 'contextshift_video_time';
    const saved = parseFloat(localStorage.getItem(key) || '0');
    if (saved > 0 && saved < (v.duration || 1e9)) {
      try { v.currentTime = saved; } catch (e) {}
    }
    const onTime = () => { if (!v.paused) localStorage.setItem(key, String(v.currentTime)); };
    v.addEventListener('timeupdate', onTime);
    return () => v.removeEventListener('timeupdate', onTime);
  }, []);

  const highlights = [
    'One click captures your entire conversation context',
    'One click transfers it to Claude, ChatGPT, or Gemini',
    'Never lose momentum to a usage limit again',
    'Built solo with Claude Code — live on the Chrome Web Store',
  ];

  return (
    <article className="community-node">
      <div className="cn-ribbon">
        <span className="cn-ribbon-icon">🧠</span>
        <span className="cn-ribbon-text">Micro-SaaS · Chrome extension · Live</span>
        <span className="cn-ribbon-tag">Chrome Web Store</span>
      </div>

      <div className="cn-grid">
        <div className="cn-media">
          <video ref={ref} controls preload="metadata" playsInline
                 src="assets/contextshift-demo.mp4">
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="cn-body">
          <div className="wf-num">MICRO-SAAS · CHROME EXTENSION</div>
          <h3 className="featured-title">ContextShift</h3>
          <p className="featured-desc">
            Hit a usage limit mid-conversation and you face two bad options: wait for the reset and
            lose all momentum, or switch LLMs and re-explain your whole architecture from scratch.
            ContextShift fixes that — a Chrome extension that carries your full conversation context
            to any LLM the instant you hit the limit. One click captures everything; one click
            transfers it to Claude, ChatGPT, or Gemini. I built it while learning Claude Code —
            the tool that caused the frustration helped me ship the fix.
          </p>

          <ul className="featured-hl" style={{ marginTop: 22 }}>
            {highlights.map((h, i) => (
              <li key={i}><span className="featured-hl-dot" />{h}</li>
            ))}
          </ul>

          <div className="wf-chips" style={{ marginTop: 22 }}>
            {['Chrome Extension', 'Claude Code', 'Claude · ChatGPT · Gemini', 'Build in public'].map(s => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>

          <div className="featured-links">
            <a className="btn btn-primary"
               href="https://chromewebstore.google.com/detail/contextshift/klfncokllkgddppfmnfikdnepikkkkbo"
               target="_blank" rel="noreferrer">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.2"/><path d="M12 8.8H21 M8.6 13.8 4.2 6.4 M15.4 13.8 11 21.4" strokeLinecap="round"/></svg>
              Add to Chrome
              <span className="arrow">→</span>
            </a>
            <a className="btn btn-ghost"
               href="https://www.linkedin.com/posts/divyanshu-gupta-a4a787114_buildinpublic-claudecode-shipped-ugcPost-7466378163284021248-Qjyb/"
               target="_blank" rel="noreferrer">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zM8 8h4.36v1.92h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.02 5.42 6.94V22h-4.54v-6.74c0-1.6-.04-3.66-2.24-3.66-2.24 0-2.58 1.74-2.58 3.54V22H8V8z"/></svg>
              More details on LinkedIn
              <span className="arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

Object.assign(window, { WORKFLOWS, FEATURED, WorkflowCard, WorkflowDiagram, FeaturedWorkflow, CommunityNode, MicroSaaS, ImageModal, PROFILE_URL });
