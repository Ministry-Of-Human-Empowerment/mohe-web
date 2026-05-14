# Ministry of Human Empowerment — Web

Official website, documentation, and member information for MOHE.

**GitHub Org:** https://github.com/Ministry-Of-Human-Empowerment
**Live:** coming soon

---

## Stack
- Next.js 15+ (App Router, TypeScript)
- Tailwind CSS
- Vercel deployment

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Branch Workflow

```
main      ← production, protected — no direct pushes
dev       ← integration branch
feature/* ← feature branches from dev
fix/*     ← bug fixes from dev
docs/*    ← docs-only changes
```

All changes go through Pull Requests. `main` requires 1 review.

## Team
- **Cavino** — Founder
- **Steph Ferrera** — Developer / Architect

Both developers use Claude Code. See `CLAUDE.md` for the full context that both Claude instances use.

## Contributing
1. Branch from `dev`
2. Open a PR against `dev`
3. CI must pass (lint, type-check, build)
4. Request review from a team member
