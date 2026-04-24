---
title: "Geometry as Process — Direction, Distance, and a Rule"
series: "Geometry as an Emergent Process"
seriesPart: 3
topic: "Foundations · Geometry · Computation"
date: "2026-04-14"
readingTime: "14 min"
description: "What if geometry is not built from objects at locations but from moves? A small set of parameters defines a generative process from which geometric shapes can be constructed."
status: "published"
---

## A Shift in Starting Point

The previous part ended with a limitation. The ε-disk — replacing dimensionless points with objects of finite size — provided a useful intermediate perspective. It unified polygons and circles under a common representation, made resolution explicit, and removed certain artifacts.

But it did not resolve the deeper issue. Each disk was itself a circle, and therefore depended on the very primitive it was meant to replace. The construction relied on what it was trying to avoid.

What this revealed was not a failure, but a misidentified starting point. The issue was not the *size* of the primitive. It was the assumption that geometry is built from *objects located in space*.

Once that assumption is made explicit, an alternative becomes possible:

> What if geometry is not built from objects at locations, but from *processes*?

---

## A Generative View

A nautilus shell grows as a logarithmic spiral. Classical mathematics describes this with an equation. But the nautilus does not consult a coordinate system — it follows a local rule: each new chamber is placed at a fixed angle relative to the previous one, scaled by a constant ratio. The global spiral is not the instruction. It is the outcome. The shape emerges from a repeated local process rather than from a global description.

This pattern appears broadly. Branching structures, growth processes, and iterative formations in nature arise from local rules rather than from equations fitted to the result. The process is primary; the shape is what it produces.

This suggests a different starting point for geometry:

> instead of describing a shape as a completed object, describe the process that generates it.

---

## Three Parameters

In this framework, a shape is constructed through a sequence of steps defined by:

- **d** — the step size  
- **θ** — the initial direction  
- **δ(n)** — a function describing how the direction changes at each step  

Starting from an anchor, each step is taken with length *d*, and the direction is updated according to δ(n).

- If δ is constant, the result is a regular polygonal path  
- If δ varies, the trajectory curves according to the rule  
- If *d* changes, the scale evolves along the path  

This defines a generative process. The shape is the trajectory produced by iterating the rule.

It is useful to distinguish between two kinds of parameters here. The deviation function δ(n) captures the shape's intrinsic relational structure — the pattern of how steps relate to each other — and is independent of scale and orientation. The step distance d and initial direction θ are contextual: they describe the shape in relation to an external unit and reference direction, not as properties of the shape itself. This distinction becomes more precise in the formal framework, but it is already visible here.

---

## Relation to Existing Representations

This perspective is not unfamiliar to anyone who has worked with vector graphics. SVG, canvas, PostScript, and turtle graphics all represent shapes as sequences of directed commands — move, line, curve, arc — rather than as lists of points. These are instructions that generate a path. The shape is the trajectory of the process.

These formats were designed to solve a practical problem — how to represent geometry compactly for computation and rendering — and they independently arrived at the same answer: process-based description. The convergence across unrelated systems suggests the approach is tracking something real, not merely a convenient representation. The framework here can be understood as making that implicit foundation explicit.

---

## What Different Rules Produce

The range of shapes that fall out of different δ(n) choices is worth dwelling on.

A constant δ gives regular polygons — and as n grows with δ decreasing proportionally, these approach a circle. Not a separate kind of object: the same family taken to finer resolution. When d grows exponentially while δ stays fixed, the result is a logarithmic spiral — the nautilus, the galaxy arm. When δ(n) = k/n the turn decreases at each step, producing a curve that gradually straightens: the Euler spiral, used in highway engineering to transition smoothly between a straight road and a bend. When δ is periodic, the trajectory oscillates in curvature, producing wave-like paths.

Classical geometry treats these as separate objects, each with its own definition and equation. Here they are variations of the same construction, differentiated only by the choice of δ(n). The unification is not imposed — it follows from describing all of them the same way.

---

## Composition and Irregular Curves

More complex curves can be constructed by combining segments governed by different rules. Each segment has its own δ(n), and the transitions between segments encode changes in behavior. The complexity of a curve is then a function of its compositional structure — how many distinct segments it contains and how they connect — rather than of its length or resolution.

This makes explicit something that is often left implicit: a smooth gradual curve requires many segments with small transitions between them, while a curve made of arcs and straight lines needs very few. A truly arbitrary curve with no underlying pattern requires storing every step. Which is honest — such a curve genuinely contains more information. The framework makes complexity visible rather than hiding it inside the formalism.

---

## Separating Shape from Position

A shape defined by d, θ, and δ(n) has no position. The rule describes how steps relate to each other — their relative directions and distances — but says nothing about where the sequence begins. Placement must come from outside.

This separates what a shape *is* from where it *is placed* — a distinction classical geometry knows informally as congruence, but does not enforce at the foundational level because coordinates are built in from the start.

The practical consequence is that the starting anchor is not a geometric primitive. It functions as a reference label — wherever the containing context decides to begin — not as an object with independent structure. This removes the need to treat points as foundational. The point problem that Euclid introduced with "that which has no part" simply does not arise in this construction. Not because it is resolved, but because the construction never required it.

The placement itself is naturally expressed as a vector — the same primitive type as everything else in the framework. There are no dimensionless objects anywhere in the system.

---

## A Computational Connection

There is a structural parallel to computation worth naming.

A basic computational model has a current state, a transition rule, and an iterative process. The step-based geometry framework has the same structure: the current step is the state, δ(n) is the transition rule, the trajectory is the output. A geometric shape, in this view, is the output of a computation defined by a rule.

This parallel is not coincidental. Shapes that have closed-form descriptions — spirals, regular polygons, oscillating curves — correspond to short programs: the rule is simpler than the output it generates. Truly arbitrary irregular curves with no underlying pattern correspond to programs with no compression — description and output are the same length. This maps directly onto the distinction between compressible and incompressible sequences in information theory.

Whether this structural parallel constitutes a deep connection or a useful analogy remains to be developed. What is clear is that the step-based framework sits at the intersection of geometry and computation in a way that classical geometry, built on smooth infinite objects, does not.

---

## What the Framework Provides

The framework introduces a different way of organizing geometric information:

- shapes are defined by generative rules  
- position is treated as external to the shape  
- complexity is tied to compositional structure  
- resolution is contextual, not intrinsic  

This does not replace classical formulations. It provides an alternative starting point from which similar structures can be reconstructed — one that is computationally native, avoids infinite primitives, and makes the separation between shape identity and placement explicit from the start.

The more abstract relational framework developed later in the series generalizes this further, replacing directed steps with arbitrary composable relations. The present formulation is a concrete instance of that broader approach, and the key distinctions established here — intrinsic rule versus contextual parameters, shape versus placement — carry forward directly.

---

## What Remains Open

Several questions arise naturally:

- How general is this representation? Can all classical curves be expressed as compositions of regular step sequences with closed-form δ(n) functions?  
- How does the framework extend to surfaces and higher dimensions?  
- What is the precise relationship to existing areas — discrete geometry, turtle geometry, constructive mathematics?  
- What notion of equivalence between generative processes best captures geometric identity?  

The last question turns out to be the entry point into the more abstract framework. When two relational processes are equivalent under all compositional tests — when no further composition can distinguish them — they define the same object in the quotient structure. That is the formal version of the same question, and it is where the series continues.