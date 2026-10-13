# Divyanshu Gupta: AI Automation Portfolio

A working static portfolio site. There's no build step: React and Babel load from a CDN and the `.jsx` files are compiled in the browser. Deploy the folder as it is.

## First steps for Claude Code
1. `git init`, commit everything, create a GitHub repo (`gh repo create portfolio --public --source=. --push`).
2. Import the repo in Vercel (Framework preset: **Other**, no build command, output dir: `.`). Every push to `main` then auto-deploys to the same URL.
3. Optional later improvement: move to Vite + React to drop in-browser Babel and get faster loads. Keep the visuals identical.

## Files
- `index.html`: page shell, all global CSS and design tokens (`:root` vars), and the script load order
- `app.jsx`: Nav (logo), Hero, marquee strip, Projects section with tabs (`n8n Workflows 06`, `n8n Agent 01`, `Community Nodes 02`, `Micro SaaS`), and the per-tab heading copy (`TAB_COPY`)
- `workflows.jsx`: workflow cards, featured winner card, `COMMUNITY_NODES` data (Jev Router first, Rate Limiter second), Micro SaaS
- `agent.jsx` + `agent.css`: n8n Workflow Debugger card (video, animated approval loop, example alert)
- `sections.jsx`: Skills (9, in a 3×3 grid), Tech stack logos, About (photo), Contact form, Footer
- `nodegraph.jsx`: hero node-graph animation
- `tweaks-panel.jsx`: design-tool tweak panel. It's safe to remove, along with its script tag and usage.
- `assets/`: photo, `resume.pdf`, demo videos, workflow screenshots

## Live integrations
- Contact form POSTs to Formspree: `https://formspree.io/f/mrewqrap`
- Email: guptadivyanshu765@gmail.com
- LinkedIn: https://www.linkedin.com/in/divyanshu-gupta-a4a787114
- Mentorship: https://topmate.io/divyanshubistudio · Book a call: https://topmate.io/divyanshubistudio/2095328
- Tech stack logos load from the `@lobehub/icons-static-svg` CDN, svgl.app, apify.com and simpleicons, with a text fallback if one fails

## Copy rules the owner set
- Write "Resume", never "Résumé"
- Don't use the word "JavaScript" anywhere on the site
- Skill descriptions: human tone, no hyphens
- Don't use the term "contract-to-hire"
- Position him as an AI Automation Engineer and n8n Workflow + Micro SaaS builder, n8n Verified Creator, and n8n Community Challenge winner
- Never commit API keys, tokens, Telegram chat IDs or n8n instance URLs

## Notes
- Videos over 25MB are fine with git but may need Git LFS if they go over 100MB.
- Download buttons only work on the deployed site. The design tool's preview blocked them.
