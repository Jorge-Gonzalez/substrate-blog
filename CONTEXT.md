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
No formal mathematics training — arrives at foundational ideas through
intuition, pattern recognition, and a design habit of questioning underlying
structure.

---

## Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Astro | Static output, markdown-native, component model |
| Deployment | Cloudflare Pages | Auto-builds on push to GitHub |
| Repository | GitHub — substrate-blog | Connected to Cloudflare Pages |
| Domain | substrate.lat | Registered on Namecheap, DNS on Cloudflare |
| Package manager | npm | |

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
Written in markdown. Stored in `src/posts/`.
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
slug: "mathematics-we-chose-to-believe-in"
---
```

### Published posts

**Post 1** — `post-01-mathematics-foundations.md`
*The Mathematics We Chose to Believe In*
A critique of foundational assumptions in mathematics: axioms as chosen
conventions, infinity as object vs direction, the dimensionless point problem,
the circle as a limit object rather than a geometric shape. Connects to
intuitionism, Gödel, Cantor, Brouwer.

**Post 2** — `post-02-epsilon-geometry.md`
*Mathematics Has Been Solving a Problem It Created Itself*
Introduces the resolution model as an alternative to limit-based calculus.
Presents the ε-disk as a first attempt at a discrete geometry, then honestly
diagnoses its failure — circular dependency, bumpy perimeter, intersection
ambiguity. Ends pointing toward Post 3.

**Post 3** — `post-03-geometry-as-process.md`
*Geometry as Process — Direction, Distance, and a Rule*
The full revised framework. Geometric shapes defined by three parameters:
d (step distance), θ (initial direction), δ(n) (deviation function). Shapes
have no intrinsic position — placement is a vector from external context.
Connects to SVG/canvas path commands as independent validation, dynamical
systems, Fourier analysis, and Turing machines. The framework is natively
computational — every shape is a program.

### Series framing
The three posts form a series: diagnosis → failed attempt honestly presented
→ cleaner solution arrived at through the failure. This narrative arc is
intentional and should be preserved in how posts link to each other.

---

## Key Ideas (for content continuity)

These ideas have been developed across the conversation and should be
understood before editing or extending any post:

**The symmetric axiom** — operations come in pairs. Addition and subtraction
are co-primitive, not sequential. Connects to group theory.

**Infinity as direction** — infinity is not an object with size but a
direction a process moves. Cantor's hierarchy of infinities is a structural
observation misread as a size comparison.

**The ε-disk failure** — replacing points with disks introduces a circular
dependency. Each disk is itself a circle. The regress is real.

**The step framework** — geometric shapes as sequences of directed steps
governed by δ(n). The primitive is the move, not the location.

**Placement vector** — a shape has no intrinsic position. Position is
provided by a placement vector from external context. There are no
dimensionless points anywhere in the system.

**Turing equivalence** — the step framework is structurally identical to a
Turing machine. δ(n) is the transition function. The curve is the tape.
Compressible curves correspond to simple programs. Incompressible curves to
uncomputable ones.

**The elastic mesh** — a speculative extension: all shapes drawn from unit
vectors in an underlying mesh, distorting it like matter distorts spacetime.
Not yet developed into a post.

---

## Site Structure (Astro)

```
substrate-blog/
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── ThemeToggle.astro
│   │   ├── PostCard.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   ├── Base.astro        ← shared HTML shell, theme toggle logic
│   │   └── Post.astro        ← blog post layout
│   ├── pages/
│   │   ├── index.astro       ← homepage
│   │   └── posts/
│   │       └── [...slug].astro  ← dynamic post route
│   ├── posts/
│   │   ├── post-01-mathematics-foundations.md
│   │   ├── post-02-epsilon-geometry.md
│   │   └── post-03-geometry-as-process.md
│   └── styles/
│       └── global.css        ← CSS variables, tokens, base styles
├── public/
├── CONTEXT.md                ← this file
├── astro.config.mjs
└── package.json
```

---

## Current Task

Setting up the Astro scaffold and converting existing HTML templates into
Astro components. The following files exist as reference HTML and should be
used as the source of truth for design and layout — do not redesign from
scratch, adapt from these:

- `index.html` (or `personal_site_template.html`) — homepage layout
- `mathematics_blog_post.html` — blog post layout

The markdown post files contain the content. The HTML files contain the
design. The task is to connect them cleanly through Astro components without
losing either.

---

## Tone and Voice

Posts are written in a conversational but precise register. Not academic,
not casual. The model is a well-read person thinking out loud with care.

Specific voice notes:
- No bullet points in prose — lists only when genuinely list-like
- No excessive hedging — state things directly, qualify where genuinely uncertain
- Honest about what is speculation vs established — but not apologetic about speculation
- The lack of formal training is acknowledged as a different kind of lens, not a gap
- Self-aware about the tendency to construct flattering narratives about oneself

---

## What Not To Do

- Do not redesign the visual aesthetic — it was deliberately chosen
- Do not add complexity to the stack without a clear reason
- Do not separate the series posts — they are meant to be read in sequence
- Do not add a CMS — content stays in markdown files in the repository
- Do not add comments, likes, or social features — not the right fit for this site
- Do not use Arial, Inter, Roboto, or system fonts — the typography is intentional

---

*Last updated: April 2026*
*Maintained by: Jorge Gonzalez*
