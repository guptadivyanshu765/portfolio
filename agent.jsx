// n8n Agent tab — n8n Workflow Debugger showcase
// Swap the demo video here:
const AGENT_VIDEO_SRC = 'assets/n8n-agent-demo.mp4'; /* PLACEHOLDER: replace with your video path */

const AGENT_STEPS = [
  { label: 'Schedule', mono: '⏱', kind: 'ok' },
  { label: 'Check failures', mono: '⚠', kind: 'err' },
  { label: 'Alert on Telegram', mono: '✈', kind: 'ok' },
  { label: 'You approve', mono: '✓', kind: 'ok' },
  { label: 'Fix applied', mono: '⚙', kind: 'end' },
];

function useInView(ref, threshold = 0.35) {
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    if (!('IntersectionObserver' in window)) { setSeen(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return seen;
}

function ApprovalLoop() {
  const ref = React.useRef(null);
  const seen = useInView(ref, 0.5);
  const [step, setStep] = React.useState(-1);
  React.useEffect(() => {
    if (!seen) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setStep(AGENT_STEPS.length); return; }
    let i = 0;
    const t = setInterval(() => { setStep(i); i++; if (i > AGENT_STEPS.length) clearInterval(t); }, 650);
    return () => clearInterval(t);
  }, [seen]);
  const fixed = step >= 3;
  return (
    <div ref={ref} className="ag-loop" aria-label="Approval loop: Schedule, Check failures, Alert on Telegram, You approve, Fix applied">
      {AGENT_STEPS.map((s, i) => (
        <React.Fragment key={s.label}>
          <div className={`ag-node ag-node-${s.kind} ${step >= i ? 'on' : ''} ${s.kind === 'err' && fixed ? 'fixed' : ''}`}>
            <div className="ag-node-box">
              <span aria-hidden="true">{s.mono}</span>
              {s.kind === 'err' && <span className="ag-badge" aria-hidden="true">{fixed ? '✓' : '!'}</span>}
            </div>
            <div className="ag-node-label">{s.label}</div>
          </div>
          {i < AGENT_STEPS.length - 1 && <div className={`ag-edge ${step > i ? 'on' : ''}`}></div>}
        </React.Fragment>
      ))}
    </div>
  );
}

function TelegramAlert() {
  return (
    <div className="tg-bubble" role="group" aria-label="Example of what the alert contains">
      <div className="tg-head"><span>Example alert</span><span className="tg-time">sent to Telegram</span></div>
      <div className="tg-rows">
        <div><span>What broke</span><b>“Score Lead” workflow, Code node</b></div>
        <div><span>Why</span><b>Input had no customer name</b></div>
        <div><span>Suggested fix</span><b>Skip empty records before scoring</b></div>
        <div><span>Status</span><b className="tg-wait">Waiting for your approval</b></div>
      </div>
    </div>
  );
}

function AgentShowcase() {
  const cardRef = React.useRef(null);
  const vidRef = React.useRef(null);
  const mediaRef = React.useRef(null);
  const shown = useInView(cardRef, 0.1);
  const [playing, setPlaying] = React.useState(false);

  const play = () => { const v = vidRef.current; if (v) { v.play().catch(() => {}); } };
  const watchDemo = () => {
    const m = mediaRef.current;
    if (m) window.scrollTo({ top: m.getBoundingClientRect().top + window.scrollY - 110, behavior: 'smooth' });
    setTimeout(play, 450);
  };

  return (
    <article ref={cardRef} className={`community-node ag-card ag-reveal ${shown ? 'in' : ''}`}>
      <div className="cn-ribbon">
        <span className="cn-ribbon-text">N8N AGENT · FAILURE MONITORING</span>
        <span className="cn-ribbon-tag">n8n Agents tab · Preview</span>
      </div>
      <div className="cn-grid ag-grid">
        <div className="ag-left">
          <div ref={mediaRef} className="ag-media">
            <video ref={vidRef} controls={playing} preload="metadata" playsInline
                   src={AGENT_VIDEO_SRC + '#t=0.5'}
                   aria-label="Demo video of the n8n Workflow Debugger agent"
                   onPlay={() => setPlaying(true)}>
              Your browser does not support the video tag.
            </video>
            {!playing && (
              <button type="button" className="ag-play" onClick={play} aria-label="Play demo video">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
              </button>
            )}
          </div>
          <ApprovalLoop />
          <TelegramAlert />
        </div>
        <div className="cn-body">
          <div className="wf-num">BUILT IN THE N8N AGENTS TAB</div>
          <h3 className="featured-title">n8n Workflow Debugger</h3>
          <p className="ag-tagline">Watches every workflow. Fixes after you approve.</p>
          <p className="featured-desc">An AI agent that watches every workflow in an n8n instance. When something fails, it sends a Telegram alert that says what broke, why, and how to fix it. It only changes a workflow after a human taps Approve.</p>
          <ul className="featured-hl" style={{ marginTop: 22 }}>
            {[
              'Watches every workflow in the instance, not just one',
              'Scheduled failure check every 10 minutes',
              'Telegram alert: what broke, why, suggested fix, confidence, and execution ID',
              'No duplicate alerts for the same execution',
              'Human-in-the-loop: fixes only after Approve / Deny in Telegram',
              'Built with an agent, 3 custom tool workflows, and the n8n API',
            ].map((h, i) => <li key={i}><span className="featured-hl-dot"></span>{h}</li>)}
          </ul>
          <div className="featured-links">
            <a className="btn btn-primary" href="https://topmate.io/divyanshubistudio/2095328" target="_blank" rel="noreferrer">
              Book a call <span className="arrow">↗</span>
            </a>
            <button type="button" className="btn btn-ghost" onClick={watchDemo}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
              Watch the demo
            </button>
            <a className="btn btn-ghost" href="https://www.linkedin.com/feed/update/urn:li:activity:7514970230285217793/" target="_blank" rel="noreferrer">
              More details on LinkedIn <span className="arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

Object.assign(window, { AgentShowcase });
