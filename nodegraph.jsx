// nodegraph.jsx — animated n8n-style node graph used in the hero.
// Nodes use real brand logos (inline SVG) to mirror the n8n canvas look.

const ngNodes = [
  { id: 'trigger', x: 60,  y: 240, label: 'GitHub',   sub: 'Trigger',  color: '#e9e7e0', logo: 'github',   shape: 'trigger' },
  { id: 'ai',      x: 250, y: 120, label: 'OpenAI',   sub: 'Classify', color: '#10a37f', logo: 'openai',   shape: 'box' },
  { id: 'enrich',  x: 250, y: 360, label: 'Notion',   sub: 'Lookup',   color: '#f5f4ef', logo: 'notion',   shape: 'box' },
  { id: 'merge',   x: 440, y: 240, label: 'Sheets',   sub: 'Log row',  color: '#0f9d58', logo: 'sheets',   shape: 'box' },
  { id: 'crm',     x: 630, y: 120, label: 'Telegram', sub: 'Notify',   color: '#29a9eb', logo: 'telegram', shape: 'box' },
  { id: 'slack',   x: 630, y: 360, label: 'Slack',    sub: 'Alert',    color: '#e01e5a', logo: 'slack',    shape: 'box' },
];

const ngEdges = [
  { from: 'trigger', to: 'ai' },
  { from: 'trigger', to: 'enrich' },
  { from: 'ai',      to: 'merge' },
  { from: 'enrich',  to: 'merge' },
  { from: 'merge',   to: 'crm' },
  { from: 'merge',   to: 'slack' },
];

function ngEdgePath(a, b) {
  const x1 = a.x + 70, y1 = a.y;
  const x2 = b.x - 70, y2 = b.y;
  const mx = (x1 + x2) / 2;
  return `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`;
}

// ── Brand logos (faithful inline SVG, positioned within the parent canvas) ──
function BrandLogo({ k, x, y, size = 22 }) {
  const p = { x, y, width: size, height: size, viewBox: '0 0 24 24' };
  switch (k) {
    case 'github':
      return (
        <svg {...p}>
          <path fill="#e9e7e0" d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.2 3.44 9.6 8.2 11.16.6.1.82-.25.82-.56v-2.1c-3.34.7-4.04-1.6-4.04-1.6-.55-1.36-1.33-1.72-1.33-1.72-1.08-.73.08-.71.08-.71 1.2.08 1.83 1.21 1.83 1.21 1.07 1.8 2.8 1.28 3.49.98.1-.76.42-1.28.76-1.57-2.67-.3-5.47-1.31-5.47-5.83 0-1.29.47-2.34 1.23-3.17-.12-.3-.53-1.52.12-3.16 0 0 1-.32 3.3 1.21a11.6 11.6 0 0 1 6 0c2.3-1.53 3.3-1.21 3.3-1.21.65 1.64.24 2.86.12 3.16.77.83 1.23 1.88 1.23 3.17 0 4.53-2.8 5.53-5.48 5.82.43.36.81 1.08.81 2.18v3.23c0 .31.22.67.83.56A12.02 12.02 0 0 0 24 12.29C24 5.78 18.63.5 12 .5z" />
        </svg>
      );
    case 'openai':
      return (
        <svg {...p}>
          <path fill="#fff" d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.07 6.07 0 0 0 4.98 4.18a5.99 5.99 0 0 0-4 2.9 6.05 6.05 0 0 0 .75 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9A5.98 5.98 0 0 0 13.26 24a6.06 6.06 0 0 0 5.77-4.21 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.07zM13.26 22.43a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.8.8 0 0 0 .39-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.49 4.49zM3.6 18.3a4.47 4.47 0 0 1-.54-3.01l.14.08 4.79 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06L9.74 22.5a4.5 4.5 0 0 1-6.14-1.66zM2.34 7.9a4.49 4.49 0 0 1 2.37-1.98v5.68a.77.77 0 0 0 .39.68l5.81 3.35-2.02 1.17a.08.08 0 0 1-.07 0l-4.83-2.79A4.5 4.5 0 0 1 2.34 7.9zm16.6 3.86l-5.84-3.39 2.02-1.16a.08.08 0 0 1 .07 0l4.83 2.79a4.49 4.49 0 0 1-.68 8.1v-5.68a.79.79 0 0 0-.4-.66zm2.01-3.02l-.14-.09-4.77-2.78a.78.78 0 0 0-.79 0L9.41 9.23V6.9a.07.07 0 0 1 .03-.06l4.83-2.79a4.5 4.5 0 0 1 6.68 4.66zM8.31 12.86l-2.02-1.16a.08.08 0 0 1-.04-.06V6.06A4.5 4.5 0 0 1 13.63 2.6l-.14.08-4.78 2.76a.8.8 0 0 0-.39.68zm1.1-2.37l2.6-1.5 2.61 1.5v3l-2.6 1.5-2.61-1.5z" />
        </svg>
      );
    case 'notion':
      return (
        <svg {...p}>
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#f5f4ef" />
          <path fill="none" stroke="#0a0a0d" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" d="M8.5 16.5V7.5l7 9v-9" />
        </svg>
      );
    case 'sheets':
      return (
        <svg {...p}>
          <rect x="4.5" y="2.5" width="15" height="19" rx="2.2" fill="#0f9d58" />
          <rect x="7.5" y="9" width="9" height="8.4" rx="0.8" fill="none" stroke="#fff" strokeWidth="1.3" />
          <line x1="7.5" y1="12.2" x2="16.5" y2="12.2" stroke="#fff" strokeWidth="1.3" />
          <line x1="7.5" y1="15.4" x2="16.5" y2="15.4" stroke="#fff" strokeWidth="1.3" />
          <line x1="12" y1="9" x2="12" y2="17.4" stroke="#fff" strokeWidth="1.3" />
        </svg>
      );
    case 'telegram':
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="11" fill="#29a9eb" />
          <path fill="#fff" d="M17.8 7.1l-1.9 9c-.14.64-.52.8-1.06.5l-2.93-2.16-1.41 1.36c-.16.16-.29.29-.59.29l.21-3 5.42-4.9c.24-.21-.05-.33-.37-.12l-6.7 4.22-2.89-.9c-.63-.2-.64-.63.13-.93l11.29-4.35c.52-.19.98.12.81.94z" />
        </svg>
      );
    case 'slack':
      return (
        <svg {...p}>
          <path fill="#e01e5a" d="M5.04 15.17a2.53 2.53 0 0 1-2.52 2.52A2.53 2.53 0 0 1 0 15.17a2.53 2.53 0 0 1 2.52-2.52h2.52v2.52zm1.27 0a2.53 2.53 0 0 1 2.52-2.52 2.53 2.53 0 0 1 2.52 2.52v6.31A2.53 2.53 0 0 1 8.83 24a2.53 2.53 0 0 1-2.52-2.52v-6.31z" />
          <path fill="#36c5f0" d="M8.83 5.04a2.53 2.53 0 0 1-2.52-2.52A2.53 2.53 0 0 1 8.83 0a2.53 2.53 0 0 1 2.52 2.52v2.52H8.83zm0 1.27a2.53 2.53 0 0 1 2.52 2.52 2.53 2.53 0 0 1-2.52 2.52H2.52A2.53 2.53 0 0 1 0 8.83a2.53 2.53 0 0 1 2.52-2.52h6.31z" />
          <path fill="#2eb67d" d="M18.96 8.83a2.53 2.53 0 0 1 2.52-2.52A2.53 2.53 0 0 1 24 8.83a2.53 2.53 0 0 1-2.52 2.52h-2.52V8.83zm-1.27 0a2.53 2.53 0 0 1-2.52 2.52 2.53 2.53 0 0 1-2.52-2.52V2.52A2.53 2.53 0 0 1 15.17 0a2.53 2.53 0 0 1 2.52 2.52v6.31z" />
          <path fill="#ecb22e" d="M15.17 18.96a2.53 2.53 0 0 1 2.52 2.52A2.53 2.53 0 0 1 15.17 24a2.53 2.53 0 0 1-2.52-2.52v-2.52h2.52zm0-1.27a2.53 2.53 0 0 1-2.52-2.52 2.53 2.53 0 0 1 2.52-2.52h6.31A2.53 2.53 0 0 1 24 15.17a2.53 2.53 0 0 1-2.52 2.52h-6.31z" />
        </svg>
      );
    default:
      return null;
  }
}

function NodeShape({ n, idx }) {
  const w = 144, h = 56;
  const x = n.x - w / 2, y = n.y - h / 2;
  const badgeX = x + 10, badgeY = n.y - 14;
  return (
    <g style={{ animation: `ngFloat 6s ease-in-out ${idx * 0.2}s infinite alternate` }}>
      <rect x={x} y={y} width={w} height={h} rx={n.shape === 'trigger' ? 28 : 13}
            fill="rgba(20,20,27,0.96)" stroke="rgba(255,255,255,0.13)" strokeWidth="1" />
      <rect x={x} y={y} width={4} height={h} rx={2} fill={n.color} />
      {/* logo badge */}
      <rect x={badgeX} y={badgeY} width={28} height={28} rx={8}
            fill="rgba(255,255,255,0.05)" stroke={`${n.color}55`} strokeWidth="1" />
      <BrandLogo k={n.logo} x={badgeX + 4} y={badgeY + 4} size={20} />
      {/* labels */}
      <text x={x + 50} y={n.y - 3} fill="#f5f4ef" fontSize="13.5" fontFamily="Geist, sans-serif" fontWeight="500">
        {n.label}
      </text>
      <text x={x + 50} y={n.y + 13} fill="rgba(245,244,239,0.5)" fontSize="10.5"
            fontFamily="JetBrains Mono, monospace" letterSpacing="0.05em">
        {n.sub.toUpperCase()}
      </text>
    </g>
  );
}

function NodeGraph() {
  const nodeById = Object.fromEntries(ngNodes.map(n => [n.id, n]));
  return (
    <div className="node-graph-wrap" aria-hidden="true">
      <style>{`
        @keyframes ngFloat { from { transform: translateY(-3px); } to { transform: translateY(3px); } }
        @keyframes ngDash { to { stroke-dashoffset: -32; } }
        @keyframes ngPacket {
          from { offset-distance: 0%; opacity: 0; }
          10%, 90% { opacity: 1; }
          to { offset-distance: 100%; opacity: 0; }
        }
        .ng-edge {
          fill: none; stroke: rgba(255,255,255,0.18); stroke-width: 1.4;
          stroke-dasharray: 4 4; animation: ngDash 1.4s linear infinite;
        }
        .ng-edge-glow { fill: none; stroke: rgba(234,75,113,0.25); stroke-width: 4; filter: blur(4px); }
        .ng-packet { fill: var(--accent, #ea4b71); filter: drop-shadow(0 0 6px rgba(234,75,113,0.8)); }
        @media (prefers-reduced-motion: reduce) {
          .ng-edge, .ng-packet { animation: none; }
          .ng-packet { opacity: 0; }
        }
      `}</style>
      <svg viewBox="0 0 740 480" width="100%" height="100%" preserveAspectRatio="xMidYMid meet"
           style={{ overflow: 'visible' }}>
        <defs>
          <radialGradient id="ngBgGlow" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="rgba(234,75,113,0.18)" />
            <stop offset="100%" stopColor="rgba(234,75,113,0)" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="740" height="480" fill="url(#ngBgGlow)" />

        {ngEdges.map((e, i) => (
          <path key={`g${i}`} d={ngEdgePath(nodeById[e.from], nodeById[e.to])} className="ng-edge-glow" />
        ))}
        {ngEdges.map((e, i) => (
          <path key={`e${i}`} d={ngEdgePath(nodeById[e.from], nodeById[e.to])} className="ng-edge"
                style={{ animationDelay: `${i * 0.18}s` }} />
        ))}
        {ngEdges.map((e, i) => {
          const d = ngEdgePath(nodeById[e.from], nodeById[e.to]);
          return (
            <circle key={`p${i}`} r="3.5" className="ng-packet"
                    style={{ offsetPath: `path("${d}")`, animation: `ngPacket ${2.4 + (i % 2) * 0.4}s linear ${i * 0.45}s infinite` }} />
          );
        })}
        {ngNodes.map((n, i) => <NodeShape key={n.id} n={n} idx={i} />)}
      </svg>
    </div>
  );
}

window.NodeGraph = NodeGraph;
