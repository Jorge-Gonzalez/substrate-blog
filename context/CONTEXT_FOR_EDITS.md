# Context for Site Edits
# For Claude Code — read before making any changes to substrate.lat

---

## What this project is

substrate.lat is the personal site of Jorge Gonzalez — web designer and
programmer from Costa Rica, no formal mathematics training. The site
publishes a five-part philosophical/mathematical series called "Geometry
as an Emergent Process" alongside a companion paper in development called
"A Process-Relational Foundation for Geometry."

The series and paper develop a framework where geometric objects arise
as equivalence classes of finite relational processes. The framework
turns out to sit within existing mathematics — geometric group theory,
enriched category theory, Lawvere metric spaces — which the author
discovered independently and is still learning.

---

## Why these edits are happening now

The author submitted the paper for arXiv endorsement in the Category
Theory Zulip community (Mathstodon-adjacent). The submission received
substantive critique from John Baez, Todd Trimble, and Kevin Carlson.
Key findings from that exchange:

- The mathematical machinery is largely classical, not new
- The abstract was overclaiming novelty
- The composition operation in the original definition was ambiguous
- The philosophical framing was mixed into the mathematics unhelpfully

The paper has since been substantially revised. Its abstract now says
explicitly: "the machinery is classical, the contribution is
organizational and conceptual." The site needs to match that honesty.

A second Zulip post is being prepared. The people who will read the site
know the field. They will notice any gap between what the site claims
and what the mathematics delivers.

---

## The specific audience for these edits

Category theorists and geometric group theorists, specifically:
- John Baez (mathematical physicist, category theory)
- Todd Trimble (category theory)
- Kevin Carlson (enriched categories, categorical logic)

These are people who immediately recognize Lawvere's metric space
formulation, the word metric on group presentations, and the nerve
construction. Any sentence that implies these are new will damage
credibility. Any sentence that honestly situates the work within
those traditions will build it.

---

## What is genuinely new vs. classical

### Classical (do not present as original)
- Quotient construction (category presented by generators and relations)
- Metric emergence from path optimization (word metric)
- Reconstruction theorem (every finite metric space from a weighted graph)
- Categorical equivalence with Lawvere metric spaces
- Gromov-Hausdorff convergence results
- The nerve construction and its connection to homology

### New in formulation (can claim, with appropriate hedging)
- (n,k) classification of single-generator congruences in
  relational-process language
- Fiber infimum formula connecting object metric to state metric
- Explicit naming and separation of the two metric levels
- The nerve connection framed as "triangulation bypass"

### Philosophical/original (present as perspective, not proof)
- Interactions-first: states derived from relations, not the reverse
- Metric as external parameter rather than intrinsic property
- Space as emergent from inter-system relations
- The "compiler" framing: relational presentation → topology

---

## The tone the site should have

From IDEAS.md (already correct): "conversational but precise. Not
academic, not casual. A well-read person thinking out loud with care."

For the mathematics content specifically: the same voice, but with
one additional property — **newcomer recognizing something**, not
expert announcing results. The author arrived at these structures
independently, is still learning the territory they connect to, and
is genuinely curious whether the connections are interesting to people
who know that territory.

When in doubt between two phrasings, choose the one that sounds like
someone thinking, not someone concluding.

---

## Specific things to avoid

**Avoid:** "It is a proved result" applied to philosophical claims
**Use instead:** "It has a precise mathematical counterpart" + acknowledge
the interpretation is the author's own

**Avoid:** Discovery narrative that implies arriving independently =
inheriting the field ("a hundred years of free mathematics")
**Use instead:** Recognition narrative — found a door, still learning
what's behind it

**Avoid:** Series building toward companion paper as climax
**Use instead:** Series closing toward open invitation and honest
uncertainty about where things currently stand

**Avoid:** "complete proofs" in companion paper references
**Use instead:** "in progress" or "currently being developed"

**Avoid:** "new foundation for geometry"
**Use instead:** "alternative starting point" or "different organization
of familiar structures"

---

## The companion paper

File: process_relational_geometry_math_v3.tex (in repo or uploads)

Status: Substantially developed, not publication-ready. Has been through
multiple critique rounds. The abstract now reads honestly.

The paper's own abstract says:
"The machinery is classical. The primary contribution is a
presentation-level semantic framework: geometric structure is defined
at the level of generators and congruence laws, prior to quotienting,
and metric properties arise as invariants of congruence classes of
processes."

All site content should be consistent with that self-description.

---

## The PRG homology tool

File: public/prg.html (self-contained HTML, no server needed)

This is a browser-based homology calculator that takes a relational
presentation (generators + congruence laws) and computes homology
groups via the nerve construction — no triangulation performed.

It demonstrates the nerve connection concretely: circle S¹ gives
H₀=ℤ, H₁=ℤ. Torus T² gives H₀=ℤ, H₁=ℤ², H₂=ℤ. Congruence laws
are applied as explicit rewrite rules (visible in the startup trace),
not as a sorting shortcut.

It will be linked from the Zulip post as:
https://substrate.lat/prg.html

---

## What not to change

- Posts 1, 2, 3: philosophical/exploratory, well-calibrated, no
  overclaims
- The site's visual design, typography, color system
- The bilingual structure (EN default, ES under /es/)
- The Remark42 comment system integration
- The ES about page: does not mention the paper, leave as-is
- IDEAS.md and TECHNICAL.md (context files, not public content)
- The series navigation and prev/next structure

---

## About page (EN) — what the revision achieves

The EN about page (src/pages/about.astro) is being revised as part of
these changes (see Change 3 in substrate-changes.md for the exact
find/replace). The personal voice is preserved — first person, direct,
no anxious hedging. What changes is the framing of the mathematical work.

Key moves in the revision:

- The personal story is tightened. The list of domains ("web departments,
  international markets, multimedia systems, browser extensions") is
  removed — it reads like a CV. Replaced with two clean sentences:
  "The fields change. The pull doesn't."

- The framework is described as "developing" and "in dialogue with
  existing work in geometric group theory and enriched category theory."
  Naming those fields signals awareness of the tradition — important
  for any reader who knows them.

- The key diplomatic sentence: "The ideas are serious; the humility
  about where they stand is equally serious." This preempts skepticism
  without being defensive. It should not be softened or removed.

- The closing drops the marketing language ("We can find the tools,
  build a viable path, and create the opportunity together") in favor
  of a simple genuine invitation: "If something here opens a question
  worth pursuing — in any of these directions — I'm glad to hear it."

---

## Deployment

Push to master → Cloudflare Pages auto-deploys in ~1 minute.
No build configuration changes needed.
The prg.html file in public/ is served as a static asset automatically.