# Substrate — Project Context

> This file is a briefing document for any AI assistant or collaborator
> joining this project. Read it fully before starting any task.

---

## What This Is

**substrate.lat** — a personal site and blog by Jorge Gonzalez, web designer
and programmer based in Costa Rica. The site publishes original ideas across
mathematics, design, programming, and philosophy. The through line is not the
subject matter but the method: questioning foundational assumptions, following
discomfort until it becomes a question, and following the question until
something simpler appears.

The name *Substrate* refers to the layer beneath the obvious layer — the
foundational assumptions that shape everything built on top of them. Every
post on this site operates at that level regardless of subject.

---

## Author

**Jorge Gonzalez**
Web designer and programmer, Costa Rica.
Background in graphic design, self-taught developer.
Builds browser extensions, explores ideas at the intersection of design,
development, mathematics, and philosophy.

Thinks through two primary instruments: a trained intuitive layer — a faster,
more associative kind of thinking beneath the conscious one that surfaces
connections before language catches up — and a lifelong obsession with design
as the study of why things are structured the way they are. An eye trained to
find patterns and structural flaws in one domain transfers unexpectedly to
completely different ones.

No formal mathematics training — arrives at foundational ideas through
intuition, pattern recognition, and a design habit of questioning underlying
structure. Most ideas have formal counterparts discovered after arriving at
them independently.

---

## Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Astro 6 | Static output, markdown-native, component model |
| Deployment | Cloudflare Pages | Auto-builds on push to GitHub |
| Repository | GitHub — substrate-blog | Connected to Cloudflare Pages |
| Domain | substrate.lat | Registered on Namecheap, DNS on Cloudflare |
| Package manager | pnpm | |

---

## Design System

**Fonts**
- Display: DM Serif Display (headings, titles)
- Body: Lora (prose)
- Mono: DM Mono (labels, metadata, code)

**Colors — Light theme (default)**
- Background: #f5f2ed (warm parchment)
- Cards: #faf8f4
- Hover: #ede9e1
- Border: #ddd8ce
- Text: #1a1712
- Muted: #6b6456
- Accent: #b85c20 (warm terracotta)

**Colors — Dark theme**
- Background: #0f0f0e
- Cards: #181815
- Hover: #1f1f1c
- Border: #2a2a26
- Text: #e8e4db
- Muted: #7a776e
- Accent: #c97d3a (warm amber)

**Theme toggle** — pill button in nav, persists preference in localStorage,
switches via `data-theme="dark"` on `<html>` element.

**Aesthetic** — editorial, typographically serious, warm tones. Not a
developer portfolio, not a generic blog. Closer to a literary magazine with
technical content.

---

## Content Architecture

### Blog posts
Written in markdown. Stored in `src/content/posts/`.
Frontmatter format:

```yaml
---
title: "The Mathematics We Chose to Believe In"
series: "The Mathematics We Chose to Believe In"
seriesPart: 1
topic: "Foundations · Mathematics · Philosophy"
date: "2026-04-01"
readingTime: "15 min"
description: "A short description for SEO and post cards"
---
```

### Published posts

**Post 1** — `post_01_mathematics_foundations.md`
*The Mathematics We Chose to Believe In*
A critique of foundational assumptions in mathematics: axioms as chosen
conventions, infinity as object vs direction, the dimensionless point problem,
the circle as a limit object rather than a geometric shape. Connects to
intuitionism, Gödel, Cantor, Brouwer.

**Post 2** — `post_02_epsilon_geometry.md`
*Mathematics Has Been Solving a Problem It Created Itself*
Introduces the resolution model as an alternative to limit-based calculus.
Presents the ε-disk as a first attempt at a discrete geometry, then honestly
diagnoses its failure — circular dependency, bumpy perimeter, intersection
ambiguity. Ends pointing toward Post 3.

**Post 3** — `post_03_geometry_as_process.md`
*Geometry as Process — Direction, Distance, and a Rule*
The full framework now named Smoothless Geometry. Geometric shapes defined
by three parameters: d (step distance), θ (initial direction), δ(n)
(deviation function). Shapes have no intrinsic position — placement is a
vector from external context. Connects to SVG/canvas path commands as
independent validation, dynamical systems, Fourier analysis, and Turing
machines.

### Series framing
The three posts form a series: diagnosis → failed attempt honestly presented
→ cleaner solution arrived at through the failure. This narrative arc is
intentional and should be preserved in how posts link to each other.

---

## Smoothless Geometry — Core Framework

### Name and definition
**Smoothless Geometry** — a framework in which geometric shapes are defined
as sequences of directed steps governed by a deviation function, with no
appeal to infinite smooth objects, dimensionless points, or actual infinity.
Resolution is a first-class parameter. Every shape is a computation. Position
is relational, not intrinsic.

The name is a precise counterpoint to smooth geometry — not discrete (which
sounds like a limitation), not rough (which sounds like an approximation),
but smoothless: the deliberate absence of the one assumption that causes the
foundational problems identified in the series.

### Three parameters
- **d** — step distance
- **θ** — initial direction
- **δ(n)** — deviation function: how direction changes at each step n

### Key properties
- A shape is fully defined by its rule — it has no intrinsic position
- Position is provided by a placement vector from external context
- There are no dimensionless points anywhere in the system
- Every object is either a vector or a rule over vectors
- The circle is not a separate kind of object — it is the regular polygon
  family observed at increasing iteration depth
- Resolution ε determines how many steps n are taken

### What different δ(n) functions produce
- δ(n) = constant, Σδ = 360° → regular polygon / circle in the limit
- d(n) linear, δ constant → Archimedean spiral
- d(n) exponential, δ constant → logarithmic spiral (nautilus, galaxy)
- δ(n) = sin(n) → wave-like oscillating curve
- δ(n) = k/n → Euler spiral (highway transition curve)

### Irregular curves
Compositions of regular segments each with their own δ(n), joined at
junctions. The only extra information needed is the junction condition —
how sharply the rule changes at each join. Compositional complexity
determines storage cost, not length or resolution.

### Placement vector
A shape has no intrinsic position. The external context provides a placement
vector — a directed move from a reference anchor to the shape's first step.
Not a point. A vector. The same primitive type as everything else in the
framework. There are no dimensionless points anywhere, including at the origin.

### Connection to computation
The framework is structurally identical to a Turing machine:
- Current step = current state
- δ(n) = transition function
- Trajectory = tape

Every shape is a program. Compressible curves (spirals, polygons) correspond
to simple programs. Incompressible curves correspond to programs with no
compression — their description is as long as their output.

### Connection to SVG and computer graphics
SVG path commands (M, L, A, C, Z) are independently the same framework —
directed steps, not point sets. PostScript, Canvas, and Logo turtle graphics
all converged on the same foundation through practical necessity. This is
evidence the framework tracks something real.

### The regular polygon sequence as iteration
The sequence triangle → square → pentagon → ... → circle is a single
iterative process with one parameter: n. Each shape is the previous one
plus one more step at a slightly smaller deviation angle. The whole family
is one computation running at different resolutions. This connects regular
geometric shapes to computation and iteration at a foundational level —
a persistent subconscious human expression of iterative thinking made visible
in geometry across every civilization independently.

### The computational hierarchy
Smoothless Geometry is the simplest case of a richer hierarchy:

1. **Single shape, fixed δ(n)** → regular polygons, spirals, standard curves
2. **Single shape, δ(n) as complex function** → fractals, Mandelbrot-like
   boundaries. The Mandelbrot set may already be a Smoothless Geometry
   object — the boundary between closed and diverging step sequences.
3. **Multiple shapes, interaction rules** → cellular automaton equivalent,
   Game of Life analog. Shapes influence each other's δ(n) through proximity,
   alignment, or interference rules.
4. **Feedback rules** → universal computation. The output of the iteration
   modifies the rule itself. Arbitrary complexity from simple foundations.

The triangle and the Mandelbrot set and Conway's Game of Life are all
instances of the same framework at different levels of rule complexity.

### The elastic mesh conjecture (speculative)
All shapes are drawn from unit vectors in an underlying mesh, distorting it
like matter distorts spacetime. The mesh and the shapes share the same
primitive — vectors redistributed rather than objects placed on a background.
Space is not a container. It is the network of placement relationships between
shapes. Consistent with how general relativity describes spacetime as
relational rather than fixed. Not yet developed into a post.

### Speculative parallel with physics — dynamical interactions
**Status: speculative. Requires research and review before any strong claims.**

The structural correspondence between Smoothless Geometry and physics is
close enough to be worth examining carefully — not as a claim but as a
parallel that may be informative.

**The setup:** In Smoothless Geometry, space is the network of placement
relationships between step processes. Nothing exists at an absolute location.
Everything exists in relation to everything else. This is already structurally
identical to how general relativity describes spacetime — relational, not fixed.

**The dynamical interaction claim:** When shapes interact, their δ(n)
functions influence each other through proximity. The trajectory that emerges
is different from what either rule would produce alone. This mirrors how
physical forces work — not objects pushing each other from separate locations,
but processes modifying each other's local rules.

**Force as δ(n) modification:**
- Gravity — a step process with a strong δ(n) influence radius. Always
  attractive, proportional to the magnitude of the source process. An orbit
  is what emerges when a step process runs inside the modified δ(n) field
  produced by another process's presence.
- Electromagnetism — δ(n) modification that is attractive or repulsive
  depending on the sign relationship between processes. The field is the
  aggregate influence on the deviation functions of everything nearby.
- Quantum uncertainty — δ(n) is not deterministic but probabilistic. At each
  step the deviation is drawn from a distribution. Wave function collapse
  corresponds to the step process committing to a single δ(n) value.
- Nuclear forces — very short range, very strong δ(n) modifications, active
  only when step processes are within ε of each other.

**The unifying claim (speculative):** All physical forces may be
modifications of δ(n) — the deviation function of step processes in the
presence of other step processes. They differ in the nature of the
modification, not in kind.

**What this would mean if it held:** Matter is not a thing that exists in
space and generates forces on other things. Matter is a step process whose
δ(n) function modifies the δ(n) functions of nearby step processes. Space
is the aggregate network of those relationships. Forces are the names we
give to the different ways δ(n) modifications propagate.

**The honest caveat:** This is a structural parallel, not a physical theory.
It does not make predictions, does not reduce to known equations, and has
not been reviewed by anyone with relevant expertise. The value is in the
question it raises — whether the mathematical structure of Smoothless
Geometry and the mathematical structure of modern physics are describing
the same underlying reality from different directions. That question is
worth pursuing carefully and honestly.

---

## Site Structure (Astro)

```
substrate-blog/
├── src/
│   ├── components/
│   ├── layouts/
│   │   └── Base.astro        ← shared HTML shell, theme toggle, SEO tags
│   ├── pages/
│   │   ├── index.astro       ← homepage
│   │   ├── about.astro       ← about page
│   │   └── posts/
│   │       └── [...slug].astro  ← dynamic post route
│   ├── content/
│   │   └── posts/            ← markdown post files
│   ├── styles/
│   │   └── global.css        ← CSS variables, tokens, base styles
│   └── utils/
│       └── formatDate.ts     ← date formatting utility
├── public/
├── reference/                ← not deployed, gitignored
├── CONTEXT.md                ← this file
├── astro.config.mjs
├── src/content.config.ts     ← Astro 6 content collection config
├── wrangler.toml             ← Cloudflare Pages config
└── package.json
```

---

## Current Status

Site is live at substrate.lat. Three posts published. About page live.
Theme toggle working. Series navigation between posts working. SEO meta
tags in place. Cloudflare Pages auto-deploys on push to master branch.

### Recently completed
- Full Astro site scaffold
- Three post series on mathematical foundations
- About page
- Dark/light theme toggle — system preference aware on first visit, persists in localStorage
- Series prev/next navigation
- SEO meta tags
- Custom domain substrate.lat
- Remark42 comments on all post pages

### Ideas in development (not yet posts)
- Smoothless Geometry formal introduction — the name and definition deserve
  a dedicated post or an updated section in post 3
- The computational hierarchy post — Game of Life, Mandelbrot, and universal
  computation as levels of Smoothless Geometry
- The elastic mesh conjecture post
- The physics parallel post — δ(n) modification as a unified description of
  physical forces. Speculative, requires research and review. Must be framed
  honestly as a structural parallel not a physical theory.
  **STATUS: DO NOT DRAFT YET. Waiting on playground simulations.**
  The post should emerge from what the simulations actually show, not from
  the outline. Steps before drafting:
  1. Build canvas playground with multiple interaction rules
  2. Run each rule and observe what emerges
  3. Note what resembles known physical phenomena and what does not
  4. Only then draft the post around the actual observations
  Simulation ideas to try: alignment only, repulsion only, alignment at short
  range repulsion at long range, δ(n) modification proportional to neighbor
  density. Start with the simplest possible version — a handful of step
  processes, one rule, watch what happens.
- Macro browser extension writeup
- Compositional web layout framework

---

## Tone and Voice

Posts are written in a conversational but precise register. Not academic,
not casual. The model is a well-read person thinking out loud with care.

Specific voice notes:
- No bullet points in prose — lists only when genuinely list-like
- No excessive hedging — state things directly, qualify where genuinely uncertain
- Honest about what is speculation vs established — but not apologetic about it
- The lack of formal training is a different kind of lens, not a gap
- Self-aware about the tendency to construct flattering narratives about oneself
- Ideas are presented as developing in real time — the wrong turns are part
  of the story, not embarrassments to hide

---

## What Not To Do

- Do not redesign the visual aesthetic — it was deliberately chosen
- Do not add complexity to the stack without a clear reason
- Do not separate the series posts — they are meant to be read in sequence
- Do not add a CMS — content stays in markdown files in the repository
- Do not add likes, or social features beyond comments — not the right fit
- Do not use Arial, Inter, Roboto, or system fonts — typography is intentional
- Do not present Smoothless Geometry as finished theory — it is a framework
  in development and that honesty is part of its credibility

---

## Comments — Remark42

Self-hosted comment system deployed on Railway, served at comments.substrate.lat.
Added to support intellectual dialogue with readers — the posts invite questioning
and the comments section provides the channel for that.

### Infrastructure
- **Service:** Railway project `remark42`, service `remark42`
- **Image:** `umputun/remark42:latest`
- **URL:** https://comments.substrate.lat
- **Storage:** BoltDB at `/srv/var/data/substrate.db` on a persistent Railway volume
- **Backups:** auto-backup every 24h to `/srv/var/backup`
- **Deployment repo:** `/mnt/data/Documents/code/remark42-railway`

### Auth providers
- GitHub OAuth
- Google OAuth
- Email (magic link via Resend SMTP, sending domain substrate.lat)
- Anonymous (no login required)

### Frontend integration
- Embedded in `src/pages/posts/[...slug].astro`
- Theme syncs with site light/dark toggle via `window.REMARK42.changeTheme()`
- MutationObserver on `data-theme` attribute drives runtime theme switching
- `no_footer: true` — Remark42 branding hidden
- Widget wrapped in a card using `--bg-card` and `--border` CSS variables

### Admin panel
- Available at https://comments.substrate.lat/web
- Protected by `ADMIN_PASSWD` environment variable

### Railway CLI deployment
```bash
cd /mnt/data/Documents/code/remark42-railway
railway up --detach
railway logs
```

---

*Last updated: April 2026*
*Maintained by: Jorge Gonzalez*
