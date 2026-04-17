# Substrate — Technical Context

> This document covers the technical setup, stack, processes, and site
> structure for substrate.lat. For conceptual framework and ideas see IDEAS.md.

---

## Site Overview

**substrate.lat** — personal site and blog by Jorge Gonzalez.
Live at https://substrate.lat
Repository: GitHub — substrate-blog

---

## Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Astro 6 | Static output, markdown-native, component model |
| Deployment | Cloudflare Pages | Auto-builds on push to GitHub master branch |
| Repository | GitHub — substrate-blog | Connected to Cloudflare Pages |
| Domain | substrate.lat | Registered on Namecheap, DNS on Cloudflare |
| Package manager | pnpm | |
| Node | ≥22.12.0 | Specified in package.json engines field |

---

## Design System

**Fonts** — loaded from Google Fonts
- Display: DM Serif Display (headings, titles)
- Body: Lora (prose)
- Mono: DM Mono (labels, metadata, code)

**Colors — Light theme (default)**
```css
--bg:           #f5f2ed;   /* warm parchment */
--bg-card:      #faf8f4;
--bg-hover:     #ede9e1;
--border:       #ddd8ce;
--border-soft:  #e8e3da;
--text:         #1a1712;
--text-muted:   #6b6456;
--text-dim:     #b8b0a4;
--accent:       #b85c20;   /* warm terracotta */
--accent-dim:   #d4845a;
--accent-pale:  rgba(184,92,32,.07);
```

**Colors — Dark theme**
```css
--bg:           #0f0f0e;
--bg-card:      #181815;
--bg-hover:     #1f1f1c;
--border:       #2a2a26;
--border-soft:  #222220;
--text:         #e8e4db;
--text-muted:   #7a776e;
--text-dim:     #3d3d38;
--accent:       #c97d3a;   /* warm amber */
--accent-dim:   #7a4a1f;
--accent-pale:  rgba(201,125,58,.08);
```

**Theme toggle** — pill button in nav, persists preference in localStorage
via `data-theme="dark"` on `<html>` element. Script in Base.astro.
System preference (`prefers-color-scheme`) respected on first visit.

**Aesthetic** — editorial, typographically serious, warm tones. Not a
developer portfolio. Closer to a literary magazine with technical content.

---

## Internationalisation (i18n)

The site supports English (default, no URL prefix) and Spanish (`/es/`).
Built on Astro 6's built-in i18n routing with `prefixDefaultLocale: false`.

**URL structure**
- English: `substrate.lat/` `substrate.lat/about` `substrate.lat/posts/slug`
- Spanish: `substrate.lat/es/` `substrate.lat/es/about` `substrate.lat/es/posts/slug`

**Content collections**
- `postsEn` — `src/content/posts/en/*.md`
- `postsEs` — `src/content/posts/es/*.md`

**UI strings** — `src/i18n/ui.ts`
All static strings (nav, footer, post labels, theme toggle) live here
as typed translation objects for `en` and `es`. Every page imports
`useTranslations(lang)` and calls `t('key')`.

**Language switcher** — `EN · ES` inline in the nav, highlights active
language. Switches to the equivalent page in the other language.

**Post frontmatter** — keys always in English, values translated per language.
Required fields: `title`, `topic`, `date`, `readingTime`, `description`, `status`.
Optional: `series`, `seriesPart`.
`status` is `'published' | 'draft'` (default `'published'`).

**Translation workflow** — GitHub Actions + PRs + Resend email
- `translate.yml`: detects new/changed English content, calls Anthropic API,
  opens a PR with the Spanish draft for review
- `translation-reminder.yml`: weekly schedule, emails via Resend if
  translation PRs older than 7 days are still open
- Review happens in the GitHub PR diff editor — merge = deployed

---

## Site Structure

```
substrate-blog/
├── src/
│   ├── components/               ← shared components (currently unused)
│   ├── i18n/
│   │   └── ui.ts                 ← all UI strings in EN + ES
│   ├── layouts/
│   │   └── Base.astro            ← shared HTML shell, nav, language
│   │                                switcher, theme toggle, SEO meta tags
│   ├── pages/
│   │   ├── index.astro           ← English homepage
│   │   ├── about.astro           ← English about page
│   │   ├── posts/
│   │   │   └── [...slug].astro   ← English post route
│   │   └── es/
│   │       ├── index.astro       ← Spanish homepage
│   │       ├── about.astro       ← Spanish about page
│   │       └── posts/
│   │           └── [...slug].astro ← Spanish post route (draft fallback)
│   ├── content/
│   │   └── posts/
│   │       ├── en/               ← English markdown posts
│   │       └── es/               ← Spanish markdown posts
│   ├── styles/
│   │   └── global.css            ← CSS variables, tokens, base styles
│   └── utils/
│       └── formatDate.ts         ← locale-aware date formatting
├── public/                       ← static assets
├── scripts/                      ← Node scripts (translation automation)
├── .github/
│   └── workflows/
│       ├── translate.yml         ← auto-translate on content push
│       └── translation-reminder.yml ← weekly PR reminder via email
├── context/
│   ├── IDEAS.md                  ← conceptual framework and ideas
│   └── TECHNICAL.md              ← this document
├── astro.config.mjs              ← Astro config with i18n settings
├── src/content.config.ts         ← content collections: postsEn, postsEs
├── wrangler.toml                 ← Cloudflare Pages config
└── package.json
```

---

## Content Architecture

### Post frontmatter schema
```yaml
---
title: "Post Title"           # string, required — translated per language
series: "Series Name"         # string, optional — translated per language
seriesPart: 1                 # integer, optional — same across languages
topic: "Topic · Subtopic"     # string, required — translated per language
date: "2026-04-01"            # YYYY-MM-DD, required — same across languages
readingTime: "15 min"         # string, required — translated per language
description: "..."            # string, required — translated per language
status: "published"           # 'published' | 'draft', default 'published'
---
```

### Published posts

| Slug | English title | Series part |
|---|---|---|
| `post_01_mathematics_foundations` | The Mathematics We Chose to Believe In | 1 |
| `post_02_epsilon_geometry` | Mathematics Has Been Solving a Problem It Created Itself | 2 |
| `post_03_geometry_as_process` | Geometry as Process — Direction, Distance, and a Rule | 3 |

All three posts have Spanish translations published.

### Adding a new post
1. Create `src/content/posts/en/your-slug.md` with frontmatter + content
2. Push to master — Cloudflare deploys the English version
3. GitHub Action opens a Spanish translation PR automatically
4. Review and merge the PR — Spanish version goes live

### Post sorting
Posts sort by `seriesPart` if both posts have it, otherwise by date
descending. Featured card is always the first in the sorted list.

---

## Key Components

### Base.astro
Shared HTML shell for all pages. Accepts `title` and `description` props.
- Google Fonts import
- global.css import
- Fixed nav with language switcher and theme toggle
- `<html lang={lang}>` and `hreflang` alternate links for SEO
- Footer with translated role string
- Theme toggle script (localStorage + system preference on first visit)

### index.astro / es/index.astro
Hero, ideas grid (featured + regular cards), connect section.
English page uses `postsEn` collection, Spanish uses `postsEs`.

### about.astro / es/about.astro
Personal statement pages. No skills list, no CV.

### posts/[...slug].astro / es/posts/[...slug].astro
Dynamic post route with full markdown body, prev/next series navigation,
comments section (Remark42), and back link.
Spanish route shows a "translation pending" notice if `status: 'draft'`
and falls back to the English content.

---

## Comments — Remark42

Self-hosted comment system at comments.substrate.lat.

**Infrastructure**
- Service: Railway project `remark42`, service `remark42`
- Image: `umputun/remark42:latest`
- Storage: BoltDB at `/srv/var/data/substrate.db` on persistent Railway volume
- Backups: auto-backup every 24h to `/srv/var/backup`
- Deployment repo: `/mnt/data/Documents/code/remark42-railway`

**Auth providers:** GitHub OAuth, Google OAuth, Email (Resend magic link), Anonymous

**Frontend integration**
- Embedded in post page via `<div id="remark42">` and loader script
- Theme syncs with site toggle via `window.REMARK42.changeTheme()`
- MutationObserver on `data-theme` attribute drives runtime switching
- `no_footer: true` — Remark42 branding hidden
- Widget wrapped in a card using `--bg-card` and `--border` CSS variables

**Admin panel:** https://comments.substrate.lat/web

**Railway CLI**
```bash
cd /mnt/data/Documents/code/remark42-railway
railway up --detach
railway logs
```

---

## Deployment

**Cloudflare Pages**
- Auto-deploys on push to `master` branch
- Build command: `pnpm astro build`
- Output directory: `dist`
- Production URL: https://substrate.lat

**wrangler.toml**
```toml
name = "substrate-blog"
pages_build_output_dir = "dist"
```

**DNS — Cloudflare**
- `substrate.lat` → Cloudflare Pages
- `comments.substrate.lat` → Railway (CNAME, DNS only — not proxied)

---

## Analytics

Cloudflare Web Analytics — built in, privacy-preserving. No cookie banner.

---

## Development Workflow

```bash
# Start dev server
pnpm dev

# Build for production
pnpm astro build

# Deploy (automatic on push)
git add .
git commit -m "description"
git push origin master
```

**Clear cache if styles not updating:**
```bash
rm -rf .astro && pnpm dev
```

---

## What Not To Do

- Do not redesign the visual aesthetic — it was deliberately chosen
- Do not add complexity to the stack without a clear reason
- Do not add a CMS — content stays in markdown files in the repository
- Do not add likes or social features beyond Remark42 comments
- Do not use Arial, Inter, Roboto, or system fonts — typography is intentional
- Do not separate the series posts — they link to each other intentionally
- Do not present Smoothless Geometry as finished theory — it is developing
- Do not add a third language without updating the routing architecture first

---

*Last updated: April 2026*
*Maintained by: Jorge Gonzalez*
