# Substrate — Ideas & Conceptual Context

> This document covers the intellectual content, developing ideas, and
> conceptual framework behind substrate.lat. For technical setup, stack,
> and site structure see TECHNICAL.md.

---

## Author

**Jorge Gonzalez**
Web designer and programmer, Costa Rica.
Background in graphic design, self-taught developer.

Thinks through two primary instruments: a trained intuitive layer — a faster,
more associative kind of thinking beneath the conscious one that surfaces
connections before language catches up — and a lifelong obsession with design
as the study of why things are structured the way they are. An eye trained to
find patterns and structural flaws in one domain transfers unexpectedly to
completely different ones.

No formal mathematics training — arrives at foundational ideas through
intuition, pattern recognition, and a design habit of questioning underlying
structure. Most ideas have formal counterparts discovered after arriving at
them independently. Approaches problems the way a software architect approaches
a domain model — identifying properties, interactions, and constraints before
building anything on top.

---

## The Site's Intellectual Identity

substrate.lat publishes original ideas across mathematics, design, programming,
and philosophy. The through line is not the subject matter but the method:
questioning foundational assumptions, following discomfort until it becomes a
question, and following the question until something simpler appears.

The name *Substrate* refers to the layer beneath the obvious layer — the
foundational assumptions that shape everything built on top of them.

---

## Published Series: The Mathematics We Chose to Believe In

A three-part series developing a critique of mathematical foundations and
proposing an alternative geometric framework.

**Post 1 — The Mathematics We Chose to Believe In**
A critique of foundational assumptions: axioms as chosen conventions not
discovered truths, infinity as object vs direction, the dimensionless point
problem, the circle as a limit object rather than a geometric shape. Connects
to intuitionism, Gödel, Cantor, Brouwer.

**Post 2 — Mathematics Has Been Solving a Problem It Created Itself**
Introduces the resolution model. Presents the ε-disk as a first attempt at
discrete geometry, then honestly diagnoses its failure — circular dependency,
bumpy perimeter, intersection ambiguity. The failure locates the real problem
more precisely than the attempt solved it.

**Post 3 — Geometry as Process — Direction, Distance, and a Rule**
The full framework now named Smoothless Geometry. Three parameters define
any shape. Connects to SVG path commands as independent validation, dynamical
systems, Fourier analysis, and Turing machines.

**Series narrative arc:** diagnosis → failed attempt honestly presented →
cleaner solution arrived at through the failure. The wrong turns are part of
the story, not embarrassments to hide.

---

## Smoothless Geometry — Core Framework

### Definition
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

Every shape is a program. Compressible curves correspond to simple programs.
Incompressible curves correspond to programs with no compression — their
description is as long as their output.

### Connection to SVG and computer graphics
SVG path commands (M, L, A, C, Z) independently arrived at the same
framework — directed steps, not point sets. PostScript, Canvas, and Logo
turtle graphics all converged on the same foundation through practical
necessity. This is evidence the framework tracks something real.

### The regular polygon sequence as iteration
Triangle → square → pentagon → ... → circle is a single iterative process
with one parameter: n. The whole family is one computation running at
different resolutions. A persistent subconscious human expression of
iterative thinking made visible in geometry across every civilization
independently.

### The computational hierarchy
Smoothless Geometry is the simplest case of a richer hierarchy:

1. **Single shape, fixed δ(n)** → regular polygons, spirals, standard curves
2. **Single shape, δ(n) as complex function** → fractals, Mandelbrot-like
   boundaries. The Mandelbrot set may be a Smoothless Geometry object —
   the boundary between closed and diverging step sequences.
3. **Multiple shapes, interaction rules** → cellular automaton equivalent,
   Game of Life analog. Shapes influence each other's δ(n) through proximity,
   alignment, or interference.
4. **Feedback rules** → universal computation. The output of the iteration
   modifies the rule itself.

The triangle, the Mandelbrot set, and Conway's Game of Life are all instances
of the same framework at different levels of rule complexity.

---

## Infinity as a Domain Object — Developing Property List

Treated as a domain modeling exercise — identifying properties infinity must
have to be what it claims to be.

**Known properties:**

- **No size** — most fundamental. Not very large, not unboundedly large, but
  no size at all. A different ontological category, not a point on a scale.
  This is why arithmetic with infinity feels wrong — you cannot add, compare,
  or rank things that have no size.

- **No position** — cannot be located on the number line without destroying
  the total ordering property. From infinity, 2 and 100 are indistinguishable.
  The ordering collapses.

- **Direction not destination** — infinity is the name for the absence of a
  boundary, not a place a process arrives at.

- **Requires internal economy (hypothesis)** — for something to be genuinely
  infinite it must be governed by a repeating structure or finite rule.
  Infinite variety would be incoherent. The Mandelbrot set supports this —
  a finite rule (z → z² + c) produces infinite complexity precisely because
  the complexity is structured. An infinity with no internal structure is not
  infinity — it is undefined.

- **Not compatible with disorder (corollary)** — unstructured infinity
  collapses into incomprehensible noise. Only rule-governed infinities are
  coherent.

**Implication for the universe:**
If infinity requires internal economy, a truly infinite universe would need
to be self-similar at every scale. Observation suggests the universe has a
specific age and large scale structure that does not obviously repeat at all
scales. This adds a philosophical reason to be skeptical of spatial infinity
beyond the observational limits.

**The emerging characterization:**
Infinity is better understood as a structural principle than as an object —
a constraint on how rules can behave when applied without limit. Consistent
with Smoothless Geometry treating infinity as a direction that δ(n) approaches
but never reaches.

---

## The Elastic Mesh Conjecture (speculative)

All shapes drawn from unit vectors in an underlying mesh, distorting it like
matter distorts spacetime. The mesh and the shapes share the same primitive —
vectors redistributed rather than objects placed on a background. Space is not
a container. It is the network of placement relationships between shapes.
Consistent with general relativity's relational spacetime. Not yet developed
into a post.

---

## Speculative Parallel With Physics — Dynamical Interactions

**Status: speculative. Requires research and review. Must not be presented
as a physical theory — only as a structural parallel worth examining.**

**The core observation:** In Smoothless Geometry, space is the network of
placement relationships between step processes. This is already structurally
identical to how general relativity describes spacetime — relational, not fixed.

**Force as δ(n) modification:**
- Gravity — always attractive δ(n) influence, proportional to source magnitude
- Electromagnetism — attractive or repulsive δ(n) modification by sign
- Quantum uncertainty — δ(n) probabilistic rather than deterministic
- Nuclear forces — very short range, very strong δ(n) modifications

**The unifying speculation:** All physical forces may be modifications of
δ(n) in the presence of other step processes. They differ in the nature of
the modification, not in kind. Matter is a step process. Space is the
aggregate network of placement relationships. Forces are how δ(n) modifications
propagate.

**The honest caveat:** No predictions, does not reduce to known equations,
not reviewed by anyone with relevant expertise. Value is in the question —
whether Smoothless Geometry and physics describe the same underlying reality
from different directions.

---

## Ideas in Development (not yet posts)

- **Smoothless Geometry formal introduction** — the name and definition
  deserve a dedicated post or updated section in post 3

- **The computational hierarchy post** — Game of Life, Mandelbrot, and
  universal computation as levels of Smoothless Geometry

- **The elastic mesh conjecture post** — when sufficiently developed

- **The physics parallel post**
  **STATUS: DO NOT DRAFT YET. Waiting on playground simulations.**
  The post must emerge from what the simulations actually show.
  Steps before drafting:
  1. Build canvas playground with multiple interaction rules
  2. Run each rule and observe what emerges without narrative pressure
  3. Note what resembles known physical phenomena and what does not
  4. Only then draft the post around actual observations
  Simulation rules to try: alignment only, repulsion only, alignment at short
  range repulsion at long range, δ(n) modification proportional to neighbor
  density. Start with the simplest possible version — a handful of step
  processes, one rule, watch what happens.

- **Macro browser extension writeup** — showing the builder side alongside
  the thinker side

- **Compositional web layout framework** — connects directly to the
  step-based geometry thinking

---

## Tone and Voice

Posts are written in a conversational but precise register. Not academic,
not casual. A well-read person thinking out loud with care.

- No bullet points in prose — lists only when genuinely list-like
- No excessive hedging — state things directly, qualify where genuinely uncertain
- Honest about what is speculation vs established — not apologetic about it
- The lack of formal training is a different kind of lens, not a gap
- Self-aware about the tendency to construct flattering narratives
- Ideas presented as developing in real time — wrong turns are part of the story

---

*Last updated: April 2026*
*Maintained by: Jorge Gonzalez*
