# Substrate — Technical Context

> This document covers the technical setup, stack, processes, and
> site structure for substrate.lat. For conceptual framework and ideas
> see IDEAS.md.

---

## Site Overview

**substrate.lat** — personal site and blog by Jorge Gonzalez.
Live at https://substrate.lat
Repository: GitHub — Jorge-Gonzalez/substrate-blog

---

## Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Astro 6 | Static output, markdown-native, component model |
| Deployment | Cloudflare Pages | Auto-builds on push to GitHub master branch |
| Repository | GitHub — substrate-blog | Connected to Cloudflare Pages |
| Domain | substrate.lat | Registered on Namecheap, DNS on Cloudflare |
| Package manager | pnpm | |
| Node | 22 | |

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
```

**Theme toggle** — pill button in nav, persists in localStorage via
`data-theme="dark"` on `<html>` element. Script in Base.astro.

**Aesthetic** — editorial, typographically serious, warm tones. Not a
developer portfolio. Closer to a literary magazine with technical content.

---

## Site Structure

```
substrate-blog/
├── src/
│   ├── components/           ← shared components (currently unused)
│   ├── layouts/
│   │   └── Base.astro        ← shared HTML shell, nav, footer,
│   │                            theme toggle, SEO meta tags
│   ├── pages/
│   │   ├── index.astro       ← homepage
│   │   ├── about.astro       ← about page
│   │   └── posts/
│   │       └── [...slug].astro  ← dynamic post route with
│   │                               prev/next series navigation
│   ├── content/
│   │   └── posts/            ← markdown post files
│   ├── styles/
│   │   └── global.css        ← CSS variables, tokens, base styles
│   └── utils/
│       └── formatDate.ts     ← formats date string to "Month Year"
├── public/                   ← static assets
├── reference/                ← not deployed, gitignored
│   ├── personal_site_template.html
│   ├── mathematics_blog_post.html
│   ├── number_line_infinity_perspective.html
│   └── mathematical_foundations_critique.docx
├── context/
│   ├── IDEAS.md              ← conceptual framework and ideas
│   └── TECHNICAL.md          ← this document
├── astro.config.mjs
├── src/content.config.ts     ← Astro 6 content collection config
├── wrangler.toml             ← Cloudflare Pages config
└── package.json
```

---

## Content Architecture

### Post frontmatter schema
```yaml
---
title: "Post Title"
series: "Series Name"        # optional
seriesPart: 1                # optional, integer
topic: "Topic · Subtopic"
date: "2026-04-01"           # YYYY-MM-DD
readingTime: "15 min"
description: "SEO description and post card excerpt"
---
```

### Published posts

| File | Title | Series Part |
|---|---|---|
| `post_01_mathematics_foundations.md` | The Mathematics We Chose to Believe In | 1 |
| `post_02_epsilon_geometry.md` | Mathematics Has Been Solving a Problem It Created Itself | 2 |
| `post_03_geometry_as_process.md` | Geometry as Process — Direction, Distance, and a Rule | 3 |

### Post sorting
Posts in the ideas grid sort by `seriesPart` if both have it, otherwise
by date descending. Featured card is always the first in the sorted list.

### Adding a new post
1. Create markdown file in `src/content/posts/`
2. Add frontmatter with all required fields
3. Write content in markdown
4. Commit and push — Cloudflare builds automatically

---

## Key Components

### Base.astro
- Shared HTML shell for all pages
- Google Fonts import
- global.css import
- Nav with theme toggle
- Footer
- SEO meta tags (Open Graph, Twitter, canonical)
- Theme toggle script

### index.astro
- Hero section with placement vector link to about page
- Ideas grid with featured card and regular cards
- Connect section with real contact details:
  - jorge.gonzalez@live.com
  - github.com/Jorge-Gonzalez
  - linkedin.com/in/jorge-leonardo-gonzalez-b80b2b402

### [...slug].astro
- Dynamic post route
- Prev/next series navigation
- Post header with series label, title, topic, date, reading time
- Full markdown body with typography styles
- Back to ideas link

### about.astro
- Personal statement
- No skills list, no CV — communicates through the quality of thinking

---

## Deployment

**Cloudflare Pages**
- Auto-deploys on push to `master` branch
- Build command: `pnpm astro build`
- Output directory: `dist`
- Production URL: https://substrate.lat
- Pages URL: https://substrate-blog.pages.dev

**wrangler.toml**
```toml
name = "substrate-blog"
pages_build_output_dir = "dist"
```

**DNS**
- Registrar: Namecheap
- Nameservers: anuj.ns.cloudflare.com / suzanne.ns.cloudflare.com
- DNS managed in Cloudflare
- AI crawlers: blocked on all pages

---

## Analytics

Cloudflare Web Analytics — built in, free, privacy-preserving.
No cookie banner required.

---

## Comments (pending setup)

**Chosen solution: Remark42**
- Self-hosted, open source
- Multiple login providers: Google, GitHub, Twitter/X, email, anonymous
- No ads, no tracking, data stays under your control

**Planned setup:**
1. Deploy Remark42 on Railway (Docker container)
2. Configure OAuth providers — Google as minimum
3. Point `comments.substrate.lat` at Railway deployment via Cloudflare DNS
4. Add Remark42 script to `src/pages/posts/[...slug].astro`

**Status: not yet implemented**

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
rm -rf .astro
pnpm dev
```

---

## What Not To Do

- Do not redesign the visual aesthetic — it was deliberately chosen
- Do not add complexity to the stack without a clear reason
- Do not add a CMS — content stays in markdown files in the repository
- Do not add comments, likes, or social features beyond Remark42
- Do not use Arial, Inter, Roboto, or system fonts — typography is intentional
- Do not separate the series posts — they link to each other intentionally
- Do not present Smoothless Geometry as finished theory — it is developing

---

*Last updated: April 2026*
*Maintained by: Jorge Gonzalez*
