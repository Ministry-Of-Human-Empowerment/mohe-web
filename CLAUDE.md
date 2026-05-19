@AGENTS.md

# MOHE Web — Claude Context

## Organization
**Ministry of Human Empowerment (MOHE)**
GitHub: https://github.com/Ministry-Of-Human-Empowerment
Website repo: https://github.com/Ministry-Of-Human-Empowerment/mohe-web
Live: https://mohe-web.vercel.app

## Mission
MOHE is an unincorporated Private Ministerial Association (PMA), faith-based organization dedicated
to the upliftment, enlightenment, sovereignty, and empowerment of every human being.
Founded May 8, 2026 by Cavin Balaster.

## Team & Claude Instances

| Person | Role | Claude instance |
|--------|------|-----------------|
| Steph Ferrera (Cryptocoatl) | Architect / Developer | Personal Mac — Claude Code |
| Cavino Balaster | Founder / Developer | Personal Mac — Claude Code |

**Coordination rule:** When either Claude makes a significant architectural decision or introduces a new
pattern, document it in the PR description so the other Claude picks it up on next context load.
Never assume the other instance has session memory.

---

## Branch & Deployment Workflow — MULTI-SIG APPROVAL SYSTEM

This project uses a two-person approval system. **No code reaches production without both Steph
and Cavino approving.** This is foundational to MOHE's decentralized operations philosophy.

### Branch Structure
```
main   ← production (mohe-web.vercel.app) — requires 2 approvals to merge
dev    ← staging/test — requires 1 approval to merge
feature/cavino-*  ← Cavino's feature branches (from dev)
feature/steph-*   ← Steph's feature branches (from dev)
fix/*             ← bug fixes (from dev)
docs/*            ← documentation only (from dev)
```

### Preview URLs (Vercel auto-generates these)
- **Production:** https://mohe-web.vercel.app (from `main`)
- **Staging:** https://mohe-web-git-dev-flowbond.vercel.app (from `dev`)
- **Feature preview:** https://mohe-web-git-[branch-name]-flowbond.vercel.app (auto per branch/PR)

### How Cavino makes a change
```bash
git checkout dev && git pull origin dev      # always start from latest dev
git checkout -b feature/cavino-[description] # create your branch
# ... make changes with Claude Code ...
git add [specific files]
git commit -m "feat(scope): description"
git push origin feature/cavino-[description]
# Open PR → base: dev  (Vercel will post preview URL in the PR automatically)
# Request review from: stephferrera
# Steph approves → merge to dev → visible on staging URL
```

### How Steph makes a change
```bash
git checkout dev && git pull origin dev
git checkout -b feature/steph-[description]
# ... make changes ...
git push origin feature/steph-[description]
# Open PR → base: dev
# Request review from: Cavino
# Cavino approves → merge to dev
```

### How to ship to production (both must approve)
```bash
# When dev is ready for production:
# Open PR: dev → main
# Both Steph AND Cavino must approve the PR
# Once both approve: merge → auto-deploys to mohe-web.vercel.app
```

### PR Title Convention
```
feat(home): add hero section redesign
fix(membership): correct application email link
chore(deps): update Next.js to latest
docs(mission): update statement of faith copy
```

---

## Tech Stack
- **Framework:** Next.js 16 (App Router, TypeScript, Tailwind CSS v4)
- **Auth:** Reown AppKit + Supabase — **not yet implemented**, planned for member portal
- **Styling:** Tailwind CSS v4 (config via `@theme` in globals.css)
- **Deployment:** Vercel (flowbond team)
- **Package manager:** npm

## Current Project Structure
```
src/
  app/
    page.tsx          # Home — hero, pillars, ecosystem, CTA
    about/page.tsx    # About MOHE, Cavin, PMA explained, ecosystem
    mission/page.tsx  # Statement of Faith, commitments, purpose
    membership/page.tsx  # Rights, agreement summary, apply CTA
    layout.tsx        # Root layout — Header + Footer wrapper
    globals.css       # Tailwind v4 + brand CSS vars
  components/
    Header.tsx        # Sticky nav — logo + links
    Footer.tsx        # Footer — logo, links, est. date
public/
  mohe-logo.png       # Phoenix Brain — color, transparent bg (primary)
  mohe-logo-bnw.png   # Phoenix Brain — black & white
  mohe-logo-full.png  # Full MOHE wordmark logo
```

## Brand
- **Logo:** Phoenix Brain (a phoenix rising from a human mind silhouette)
- **Colors:** Dark `#060810` bg · Crimson `#C41E1E` accent · Off-white `#EDE8DC` text
- **Font:** Geist Sans + Geist Mono (Google Fonts)
- **Tone:** Dignified, sovereign, faith-grounded — not startup-y

## Key Constraints
- **No Privy** — auth is Reown AppKit + Supabase only (when implemented)
- **No direct pushes to main or dev** — all changes through PRs
- **Both approvals required for main** — this is the multi-sig rule
- Mobile-first, accessible — MOHE serves a broad faith-based community

## For New Claude Sessions
```bash
git log --oneline -10          # see recent changes
git branch -a                  # see active branches
npm install && npm run build   # verify build is clean before editing
```

Check open PRs: https://github.com/Ministry-Of-Human-Empowerment/mohe-web/pulls
Check live site: https://mohe-web.vercel.app
