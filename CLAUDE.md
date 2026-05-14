@AGENTS.md

# MOHE Web — Claude Context

## Organization
**Ministry of Human Empowerment (MOHE)**
GitHub: https://github.com/Ministry-Of-Human-Empowerment
Website repo: https://github.com/Ministry-Of-Human-Empowerment/mohe-web

## Mission
MOHE is a Private Membership Association (PMA), faith-based organization dedicated to supporting life and human empowerment.

## Team & Claude Instances
Two Claude Code instances collaborate on this project:

| Person | Role | Claude instance |
|--------|------|-----------------|
| Steph Ferrera (Cryptocoatl) | Architect / Developer | Personal Mac — Claude Code |
| Cavino | Founder / Developer | Personal Mac — Claude Code |

**Coordination rule:** When either Claude makes a significant architectural decision or introduces a new pattern, document it in the PR description or in `content/docs/` so the other Claude picks it up on next context load. Never assume the other instance has session memory.

## Tech Stack
- **Framework:** Next.js 15+ (App Router, TypeScript, Tailwind CSS)
- **Auth:** Reown AppKit + Supabase (when auth is needed — not yet implemented)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (target)
- **Package manager:** npm

## Branch & PR Workflow
```
main        ← protected, production only. No direct pushes.
dev         ← integration branch. All features merge here first.
feature/*   ← short-lived feature branches from dev
fix/*       ← bug fix branches from dev
docs/*      ← documentation-only changes
```

**Rules:**
- All changes go through Pull Requests
- `main` requires 1 approved review before merge
- `dev` → `main` only for releases
- Conventional commits: `feat(scope): description`, `fix`, `docs`, `chore`, `refactor`

## Project Structure
```
src/
  app/              # Next.js App Router pages
    about/          # About MOHE page
    mission/        # Mission & values page
    membership/     # Membership info page
    docs/           # Public documentation browser
  components/
    ui/             # Reusable UI primitives
    layout/         # Header, Footer, Nav
  lib/              # Utilities and constants
content/
  docs/             # MDX documentation files
  pages/            # Static page content (MDX)
.github/
  workflows/        # CI — lint, type-check
  pull_request_template.md
```

## Key Constraints
- No Privy — auth is Reown AppKit + Supabase only
- Content-first: docs and page copy live in /content as MDX, not hardcoded in components
- Mobile-first, accessible — MOHE serves a broad faith-based community

## For New Claude Sessions
Before writing code:
```bash
git log --oneline -10        # see recent changes
git branch -a                # see active branches
npm run build                # verify build is clean
```

Check open PRs: https://github.com/Ministry-Of-Human-Empowerment/mohe-web/pulls
