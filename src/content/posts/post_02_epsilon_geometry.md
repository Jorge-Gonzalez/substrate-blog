---
title: "Mathematics Has Been Solving a Problem It Created Itself"
series: "The Mathematics We Chose to Believe In"
seriesPart: 2
topic: "Foundations · Geometry · Calculus"
date: "2026-04-13"
readingTime: "12 min"
description: "Resolution is not something calculus produces. It is something calculus should have started with. A first attempt at discrete geometry, its honest failure, and what the failure revealed."
---

# Mathematics Has Been Solving a Problem It Created Itself

**Series:** The Mathematics We Chose to Believe In — Part 2  
**Topic:** Foundations · Geometry · Calculus  
**Date:** April 2026  
**Reading time:** 12 min

---

## Opening

In the first part of this series we asked whether the foundations of mathematics were discovered or chosen. The answer, it turns out, is mostly chosen — and some of those choices introduced contradictions that have been quietly managed ever since.

This part is about one of those managed contradictions, and what happens when you stop managing it and fix it instead.

---

## The Staircase That Never Smooths Out

You can approximate a diagonal line with a staircase. Make the steps smaller. Smaller again. The shape looks increasingly like the diagonal — but the total length of the staircase never changes. It stays stubbornly at 2, no matter how many steps you add. The actual length of the diagonal is √2 ≈ 1.414. The staircase never gets there.

Meanwhile if you approximate a circle with polygons — triangles, then pentagons, then hundreds of sides — the perimeter *does* converge correctly toward 2π. Both are limit processes. Both involve infinite sequences of discrete shapes approaching a smooth curve. One works. One does not.

Classical mathematics has a technical explanation: the staircase converges in *shape* but not in *length*, because the corners never align with the direction of the curve. This is correct. But it quietly admits something larger: **not all approaches to a smooth limit are trustworthy, and the smooth object itself cannot tell you which ones are.**

This is not a curiosity. It is a diagnostic failure. The smooth circle — the limit object — accepts both approximations without complaint. The error is only discovered afterward, by checking against a known answer. The framework gives you no warning.

This is the problem we are going to fix.

---

## One More Crack: Infinity Has No Size

Before proposing a fix, one more foundational issue worth naming — because it is directly related to everything above.

The natural number line has a property so basic we rarely think about it: every number has a definite position relative to every other. 100 is greater than 2. Always. Unambiguously. Mathematicians call this a *total order* and it is one of the most fundamental properties numbers possess.

Now try adding infinity to that line.

The distance from infinity to 100 is infinite. The distance from infinity to 2 is also infinite. From the perspective of infinity those distances are indistinguishable — which means 100 and 2 become, in a precise sense, equivalent. The ordering collapses. The property that makes the number line useful simply does not survive contact with infinity as a point on that line.

Infinity is not compatible with the ordered structure of numbers. Adding it to the line does not extend it. It breaks it.

**On Cantor's hierarchy of infinities**

Cantor proved that the set of real numbers cannot be mapped one-to-one onto the set of natural numbers, and concluded that some infinities are strictly larger than others. The diagonal argument behind this proof is technically airtight. But the interpretation deserves scrutiny.

What Cantor actually demonstrated is that certain infinite sets cannot be put into correspondence with each other in a particular way. He described this as a difference in *size*. But size is a concept that belongs to the finite world — it is defined by comparison and ordering, precisely the properties that break down at infinity.

The issue is not the proof. The issue is borrowing the word *size* from a domain where it has clear meaning and applying it to a domain where the foundations of that meaning no longer hold. The result feels like a discovery about how large different infinities are. But it may be something more modest: a description of how certain infinite sets behave differently under correspondence — a structural property, not a size.

**Infinity is not big. It is not very big. It has no size at all.**

It is the name for the absence of a boundary — a direction, not a destination. Treating it as a quantity that can be larger or smaller than another quantity is a category error. The hierarchy of infinities is real as a description of structural differences between sets. The interpretation of that hierarchy as a ranking by size is a projection of finite intuition onto something that has no size to rank.

This matters for what follows. ε-geometry never assigns size to infinity — because infinity never appears as an object in the first place. It appears only as the direction ε moves when you refine. The question of whether one infinity is bigger than another does not arise, because nothing in the framework ever reifies infinity into something that could have a size. The category error is avoided not by resolving it but by never making it.

---

## Resolution as an Artifact

Calculus was invented to deal with smooth curves that have no natural discrete structure. To find a slope at a point — where there is no second point to measure against — you construct a limit process: bring two points closer and closer together and ask what the slope approaches. To find an area under a curve you sum infinitely many infinitely thin rectangles and ask what that sum approaches.

Both operations manufacture resolution as a technical device. The limit process is a way of extracting a finite answer from an infinite object. The entire theoretical apparatus of calculus — epsilon-delta definitions, continuity, differentiability, convergence theorems — exists largely to make that extraction rigorous.

It works. It is genuinely beautiful in places. But the complexity is not inherent to the mathematics. It is an artifact of a foundational choice made at the beginning: to build geometry on infinite smooth objects, and then laboriously reconstruct finite precision when needed.

**Resolution is not something calculus produces. It is something calculus should have started with.**

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

**The intersection ambiguity.** When two ε-shapes meet, there is no clean answer to where exactly they intersect. Do they share boundary disks? Then a disk belongs to both shapes simultaneously — an ownership problem. Do they meet at the edges of the disks? Then the intersection is defined by the boundary of the disk, which is itself a circle — and we are back to the dimensionless point problem at one level of abstraction deeper. None of the available options is satisfying.

**The root cause.** The ε-disk tried to solve two separate problems simultaneously — the infinite smooth circle and the dimensionless point — by making the primitive unit a physically sized object. But a disk is a two-dimensional shape with a boundary, and that boundary carries all the same problems as the original circle. You cannot build a geometry free of circular primitives by making the atoms circular.

The first attempt located the problem more precisely than it solved it. Which is, in its own way, progress. What the failure reveals is that the issue is not the *size* of the primitive. It is something deeper — the assumption that geometry is built from *objects* at all rather than from *relationships between steps*.

That realization is where the next essay begins.

---

## What This Does to Calculus

The resolution model still stands independently of the ε-disk idea. Even without a fully resolved geometric primitive, the core observation holds: resolution is an artifact in classical calculus, manufactured laboriously at the end of a limit process, when it could have been a parameter declared at the beginning.

Differentiation as a direct slope between adjacent steps. Integration as a finite sum. The fundamental theorem as an obvious inverse relationship between differencing and summing. These follow from making resolution primitive — not from the ε-disk specifically. They survive the amendment.

**What you would give up** is worth stating honestly. Classical calculus has clean closed-form results — derivative of sin is cos, integral of x² is x³/3 — that depend on the smooth infinite structure. In a resolution-based framework those become descriptions of resolution-stable families rather than exact truths about infinite objects. The shorthand remains valid. Its foundational status changes.

---

## Where This Leaves Us

The resolution model is a sound diagnostic. The ε-disk was a productive wrong turn — it unified polygons and circles under one type, dissolved the staircase paradox, and made resolution a visible first-class property. But it smuggled in the very primitive it was trying to replace.

The right question, which the failure forced into focus, is this: what if the primitive is not an object with a size, but a *directed step* — a move rather than a place? What if geometry is not built from things that exist at locations, but from processes that travel between them?

That question, and where it leads, is the subject of the next part.

---

*This is part 2 of an ongoing series exploring what mathematics looks like when its foundational assumptions are questioned from first principles.*

*Part 1: [The Mathematics We Chose to Believe In](mathematics_blog_post.html)*
*Part 3: [Geometry as Process](post_03_geometry_as_process.html)*
