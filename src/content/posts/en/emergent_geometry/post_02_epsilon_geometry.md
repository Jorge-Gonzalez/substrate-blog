---
title: "Why Does Geometry Need ε?"
series: "Geometry as an Emergent Process"
seriesPart: 2
topic: "Foundations · Geometry · Calculus"
date: "2026-04-13"
readingTime: "12 min"
description: "Resolution is not something calculus produces. It is something calculus should have started with. A first attempt at discrete geometry, its honest failure, and what the failure revealed."
status: "published"
---

## Opening

The first part of this series identified three specific geometric primitives — the dimensionless point, the infinite line, and the continuous circle — and argued that each carries a commitment to actual infinity that is not inherent to the geometric object but was imported from the conditions under which geometry was first practiced. It ended by pointing toward two unresolved questions: what replaces the point, and what does it mean for the circle to be the same kind of object as a polygon.

This part addresses those questions through a first attempt at a different starting point — one that is honest about where it succeeds, and more honest still about where it fails.

---

## The Staircase That Never Smooths Out

You can approximate a diagonal line with a staircase. Make the steps smaller. Smaller again. The shape looks increasingly like the diagonal — but the total length of the staircase never changes. It stays stubbornly at 2, no matter how many steps you add. The actual length of the diagonal is √2 ≈ 1.414. The staircase never gets there.

Meanwhile if you approximate a circle with polygons — triangles, then pentagons, then hundreds of sides — the perimeter *does* converge correctly toward 2π. Both are limit processes. Both involve infinite sequences of discrete shapes approaching a smooth curve. One works. One does not.

Classical mathematics has a technical explanation: the staircase converges in *shape* but not in *length*, because the corners never align with the direction of the curve. This is correct. But it quietly admits something larger: **not all approaches to a smooth limit are trustworthy, and the smooth object itself cannot tell you which ones are.**

The smooth circle — the limit object — accepts both approximations without complaint. The error is only discovered afterward, by checking against a known answer. There is nothing in the framework that flags the problem in advance.

The question is whether resolution — the property the framework cannot locate — can be made primitive rather than manufactured. What follows is a first attempt at that construction.

---

## A Thought About Infinity and Size

The first part of this series pointed toward this argument. Here it is offered as a perspective worth sitting with, because it bears directly on what follows.

The natural number line has a property so basic we rarely think about it: every number has a definite position relative to every other. 100 is greater than 2. Always. Unambiguously. Mathematicians call this a *total order* and it is one of the most fundamental properties numbers possess.

Now try adding infinity to that line.

The distance from infinity to 100 is infinite. The distance from infinity to 2 is also infinite. From the perspective of infinity those distances are indistinguishable. The ordering that makes the number line useful does not survive contact with infinity as a point on that line.

Cantor proved that the set of real numbers cannot be mapped one-to-one onto the set of natural numbers, and concluded that some infinities are strictly larger than others. The diagonal argument behind this proof is technically airtight. What it demonstrates is that certain infinite sets cannot be put into correspondence with each other in a particular way. That is a genuine structural result about how infinite sets behave.

The interpretation of that result as a ranking by *size*, however, is worth examining carefully. Size is a concept that belongs to the finite world — it is defined by comparison and ordering, precisely the properties that become problematic when infinity is treated as a destination rather than a direction. The hierarchy of infinities is real as a description of structural differences between sets. Whether that hierarchy represents a ranking by size, or something more like a classification of correspondence behaviors, is a question the proof itself does not settle. It is a matter of interpretation, not of the mathematics.

This matters for what follows because the framework developed below never treats infinity as an object with a size. Infinity appears only as the direction a resolution parameter moves when you refine — a process you can continue, not a place you arrive. The question of whether one infinity is bigger than another simply does not arise, because nothing in the construction ever turns infinity into something that could be compared.

---

## Resolution as a Consequence

Calculus was invented to deal with smooth curves that have no natural discrete structure. To find a slope at a point — where there is no second point to measure against — you construct a limit process: bring two points closer and closer together and ask what the slope approaches. To find an area under a curve you sum infinitely many infinitely thin rectangles and ask what that sum approaches.

Both operations extract a precise finite answer from an infinite object. The entire theoretical apparatus of calculus — epsilon-delta definitions, continuity, differentiability, convergence theorems — exists to make that extraction rigorous.

It works. It is genuinely beautiful in places. But the complexity follows from a foundational choice made at the beginning: to build geometry on infinite smooth objects, and then recover finite precision when needed. Seen this way, ε is not a patch for a flaw — it is the language the framework requires once you have committed to working with continua. The ε-definitions do not fix a problem; they provide rigorous structure for reasoning about approximation within that commitment.

The question is whether the commitment was necessary in the first place. Resolution could have been declared as an explicit external parameter at the start — belonging to the context of comparison rather than to the object being described — rather than reconstructed at the end through a limit process.

---

## A Different Starting Point

What if instead of defining a circle as an infinite set of points equidistant from a center, we define it as a finite set of small disks arranged in a closed curve — where the size of the disks *is* the resolution?

This is the **ε-circle**.

---

## A First Attempt: The ε-Circle

The first instinct was to replace the dimensionless point with something physically sized. If the problem is that points have no extent, give them extent. Define each vertex of a polygon not as a dimensionless location but as a small disk of diameter ε. The circle becomes a ring of ε-disks, each touching the next, spaced ε apart along the perimeter.

Call this the ε-circle. For radius R and resolution ε, it has n = 2πR / ε vertices. The perimeter is a direct count:

```
P = n × ε = 2πR
```

No limit. No infinite process. Large but finite. And immediately, something useful appears: a triangle, a square, and an ε-circle are now the same kind of object — a finite collection of ε-disks connected by edges. The circle is no longer categorically different from a polygon. It is a polygon whose vertex count is set by resolution rather than chosen arbitrarily.

The staircase paradox also dissolves cleanly. An ε-diagonal places its disks along the diagonal direction. A staircase places them on horizontal and vertical axes — it fails the definition of a valid ε-approximation, and the framework says so immediately rather than producing a silent wrong answer.

The idea is productive. But it contains a problem.

---

## Where the First Attempt Breaks

The ε-disk was introduced to eliminate the dimensionless point. But each ε-disk is itself a circle — and a circle is precisely the object the framework was trying to replace. The construction borrows its own primitive as a component. That is not a solution. It is a regress.

Following that crack leads to more:

**The bumpy perimeter problem.** In two dimensions, a shape built from disks has a perimeter that is not a clean edge but a scalloped surface — the rounded edges of the disks produce a texture that does not disappear at finer resolutions. In three dimensions, a surface built from spheres is not airtight — gaps appear between the spheres regardless of how small they are. In higher dimensions the problem compounds.

**The intersection ambiguity.** When two ε-shapes meet, there is no clean answer to where exactly they intersect. Do they share boundary disks? Then a disk belongs to both shapes simultaneously — an ownership problem. Do they meet at the edges of the disks? Then the intersection is defined by the boundary of the disk, which is itself a circle — and we are back to the dimensionless point problem at one level of abstraction deeper.

**The root cause.** The ε-disk tried to solve two separate problems simultaneously — the infinite smooth circle and the dimensionless point — by making the primitive unit a physically sized object. But a disk is a two-dimensional shape with a boundary, and that boundary carries all the same problems as the original circle. You cannot build a geometry free of circular primitives by making the atoms circular.

The first attempt located the problem more precisely than it solved it. Which is, in its own way, progress. What the failure reveals is that the issue is not the *size* of the primitive. It is something deeper — the assumption that geometry is built from *objects* at all rather than from *relationships between steps*.

That realization is where the next essay begins.

---

## What This Does to Calculus

The core observation about resolution survives the ε-disk's failure independently. Even without a resolved geometric primitive, the same question stands: resolution is reconstructed at the end of a limit process, when it could have been declared at the beginning as an external parameter.

Differentiation as a direct slope between adjacent steps. Integration as a finite sum. The fundamental theorem as an obvious inverse relationship between differencing and summing. These follow from making resolution primitive — not from the ε-disk specifically.

What changes is not the results but their foundational status. Classical calculus has clean closed-form results — derivative of sin is cos, integral of x² is x³/3 — that depend on the smooth infinite structure. In a resolution-based framework those become descriptions of resolution-stable patterns: relationships that hold across all sufficiently fine resolutions. The results are not lost. They are attributed to the relational pattern rather than to an infinite object. The shorthand remains valid. What changes is what it is shorthand *for*.

---

## Where This Leaves Us

The ε-disk was a productive wrong turn — it unified polygons and circles under one type, dissolved the staircase paradox, and made resolution a visible first-class property. But it smuggled in the very primitive it was trying to replace.

The right question, which the failure forced into focus, is this: what if the primitive is not an object with a size, but a *directed step* — a move rather than a place? What if geometry is not built from things that exist at locations, but from processes that travel between them?

That question, and where it leads, is the subject of the next part.
