---
title: "Geometry as Process — Direction, Distance, and a Rule"
series: "The Mathematics We Chose to Believe In"
seriesPart: 3
topic: "Foundations · Geometry · Computation"
date: "2026-04-14"
readingTime: "14 min"
description: "What if geometry is not built from objects at locations but from moves? Three parameters — direction, distance, and a deviation function — turn out to be enough to construct every geometric shape, connect to Fourier analysis, and mirror the structure of a Turing machine."
status: "published"
---

# Geometry as Process — Direction, Distance, and a Rule

**Series:** The Mathematics We Chose to Believe In — Part 3
**Topic:** Foundations · Geometry · Computation
**Date:** April 2026
**Reading time:** 14 min

---

## The Wrong Turn Was Worth Taking

The last part ended with a failure. The ε-disk — replacing dimensionless points with physically sized disks — was a reasonable first move. It unified polygons and circles under one type, dissolved the staircase paradox, and made resolution a visible first-class property. But each disk was itself a circle, and a circle was exactly the object the framework was trying to replace. The construction borrowed its own primitive. The regress was real.

What the failure did — and this is the part worth keeping — was locate the problem more precisely. The issue was never the *size* of the primitive. It was something deeper: the assumption that geometry is built from *objects that sit at locations*. Things that exist somewhere in space and have properties. That assumption is so embedded in classical geometry it is almost invisible.

But once you see it, a different question opens up. What if geometry is not built from objects at all?

What if it is built from *moves*?

---

## The Nautilus Does Not Know Its Equation

Before getting into the framework, an observation worth sitting with.

A nautilus shell grows as a logarithmic spiral. Classical mathematics describes this with an equation — r = ae^(bθ) in polar coordinates. The equation is elegant. But the nautilus does not know it. The shell does not consult a coordinate system or solve for r given θ.

What the nautilus does is much simpler: each new chamber is built at a fixed angle relative to the previous one, scaled by a constant ratio. That is the entire rule. The logarithmic spiral is not the instruction — it is the outcome. The global shape emerges from a local process repeated over and over.

This pattern shows up everywhere in nature. Snowflakes branch by a rule applied at each scale. Tree forks happen at consistent angles. Galaxy arms follow the same logic as the nautilus. DNA is a sequence of chemical steps. Nature does not describe its shapes from the outside with equations. It grows them from the inside with rules.

Classical mathematics built its geometry top-down: first the equation, then the curve, then the points. What follows is an attempt at the opposite direction — first the step, then the rule, then the shape.

---

## Three Parameters

A shape, in this framework, is defined by three things:

**d** — the distance of each step

**θ** — the initial direction

**δ(n)** — a function describing how direction changes at each step

That is it. A shape is the trajectory produced by following these parameters from a starting anchor. The deviation function δ(n) is the generative engine — it takes the step number and returns how much to turn before the next step. When δ is constant, the shape is regular. When δ is a function, the shape curves, spirals, or oscillates depending on what the function does.

A triangle is three steps each turning 120°. A square is four steps each turning 90°. A circle is what you get as you increase the number of steps while decreasing each turn proportionally — not a separate kind of object, just the regular polygon family taken to finer resolution. And a nautilus shell is a sequence of steps where the distance grows exponentially while the turn stays fixed.

Same framework. Same three parameters. Everything follows.

---

## You Have Already Seen This Before

Here is where something interesting happens. If you have ever opened a vector graphics application — Illustrator, Inkscape, Figma — or looked inside an SVG file, you have already encountered this framework. You just did not know that is what it was.

SVG does not store shapes as collections of points. It stores them as sequences of commands:

```
M 100 100    ← move to starting anchor
L 200 100    ← line to: one step, fixed direction
A 50 50 ...  ← arc: step with constant δ
C 150 50 ... ← curve: step with varying δ via control points
Z            ← close path: return to anchor
```

The move, the line, the arc, the curve — these are all directed steps. The path is a sequence of moves. The shape is the trajectory. Whoever designed the SVG format was solving a practical problem — how do you represent geometry compactly and unambiguously for a computer — and arrived at vectors and commands rather than point sets. Not because of philosophy. Because it worked better.

Canvas in the browser works the same way. So does PostScript, the format that defined modern printing. So does the turtle in Logo, the language designed to teach children geometry by directing a small robot with move and turn commands.

All of these independently converged on the same idea: geometry is better described as a process than as a set of locations. The philosophical justification was never the starting point — practical necessity got there first. That convergence is not a coincidence. It is evidence that the framework is tracking something real.

---

## What Different Rules Produce

The power of making δ a function rather than a constant is worth dwelling on, because the range of what falls out is surprising.

**δ(n) = constant** gives you regular polygons approaching a circle as n grows. Familiar ground.

**d(n) grows linearly, δ constant** — each step slightly longer than the last — gives you an Archimedean spiral. The shape of a coiled rope laid flat, or a vinyl record groove.

**d(n) grows exponentially, δ constant** gives you a logarithmic spiral. The nautilus. The galaxy arm. The curve that appears wherever growth compounds on itself. The logarithmic behavior is not imposed by an equation — it emerges from the rule.

**δ(n) = sin(n)** produces a wave-like curve, alternating curvature — bending left, then right, then left again in a regular rhythm.

**δ(n) = k/n** gives a curve that gradually straightens — the Euler spiral, used in highway and railway engineering to transition smoothly between straight road and a bend. Engineers arrived at it by practical necessity. It falls out here as one specific choice of δ(n).

Classical geometry treats these as completely separate objects — each with its own definition, its own equation, its own chapter. Here they are all the same thing, differentiated only by which function you hand to δ(n). The diversity collapses into variations on a single theme. That kind of unification is usually a sign you have found the right level of abstraction.

---

## Irregular Curves: Composition All the Way Down

A single δ(n) function produces a regular segment — uniform curvature throughout. An irregular curve is a *composition* of regular segments, each with its own δ, joined at junctions.

The only extra information at each junction is how sharply the rule changes — one number. Everything between junctions is fully determined by three parameters. The complexity of the whole curve lives in the junction transitions, not in the segments themselves.

This is already how computer graphics handles curves in practice. A spline is a sequence of polynomial segments joined with smoothness conditions at the knots. A bezier path in Illustrator is a series of curve segments each defined by a small number of control parameters. Composition is not a new idea to graphics software — it is the foundation graphics software is built on. Again, practical necessity arrived at the right answer before the philosophy caught up.

What this also means is that a curve's storage cost is proportional to its *compositional complexity* — how many distinct regular segments it contains — not its length or resolution. A smooth gradual curve needs many segments with small junction changes. A curve built from arcs and straight lines needs very few. A truly arbitrary curve with no underlying pattern genuinely requires storing every step. Which is honest — such a curve really does contain more information. The framework makes complexity visible rather than hiding it inside the formalism.

---

## The Shape Has No Location

Here is the move that completes the framework, and it arrived from an unexpected direction in the conversation that produced these ideas.

A shape defined by d, θ, and δ(n) has no position. The rule describes how steps relate to each other — their relative directions and distances. It says nothing about where in space the sequence begins. A triangle defined as three steps turning 120° is the same triangle regardless of where you draw it. Its identity is its internal rule, not its location.

Classical geometry knows this informally — it is called congruence — but the formalism does not reflect it because coordinates are baked in from the start. Every point carries an absolute location. The shape and its position are inseparable in the mathematical object, even though they are conceptually completely distinct.

In this framework they are separated by construction. The shape is the rule. Its position is provided externally — by whatever context places it — as a *placement vector*. A directed move from a reference anchor to the shape's starting step. Not a point. A vector. The same primitive type as everything else.

This has a quiet but important consequence: there are no dimensionless points anywhere in the system. Not even at the origin. The starting anchor is not a geometric primitive — it is a relational label, the name of wherever the containing context decided to begin. The point problem, which has bothered mathematicians since Euclid defined a point as "that which has no part," is not solved here. It simply does not arise. Points were never needed.

---

## This Looks Like a Turing Machine

There is one more connection worth naming, and it is probably the deepest one in the whole framework.

A Turing machine is a minimal model of computation. It has a tape, a read/write head, a current state, and a transition function — a rule that takes the current state and returns a new state and a direction to move. That is the complete description. Everything a computer can compute, a Turing machine can compute. The complexity of all software emerges from that minimal rule applied repeatedly to a tape.

The geometry framework has the same structure. The current step is the current state. The deviation function δ(n) is the transition function. The trajectory is the tape being written. Running the program produces the shape.

A geometric shape, in this framework, is a computation. The rule δ(n) is the program. The curve is the output. Running it at finer resolution — smaller steps, larger n — is equivalent to increasing the precision of the computation.

This is not an analogy. It is the same mathematical structure appearing in two domains simultaneously. Which has an interesting consequence: the shapes that have closed-form descriptions — spirals, polygons, sine curves — correspond to simple programs with short descriptions. Truly arbitrary irregular curves with no underlying pattern correspond to programs with no compression — their description is as long as their output. This is exactly the distinction between compressible and incompressible sequences in information theory and computability.

Geometry and computation, usually treated as entirely separate fields, may share a common foundation that neither classical geometry nor classical computer science has made fully explicit. The step-based framework sits at that intersection — and it got there not by trying to unify the two fields, but by asking what the simplest honest description of a geometric shape could possibly be.

---

## What the Framework Contains

Stated completely, the framework has exactly one type of primitive at every level: **the vector** — a direction and a distance.

- A step is a vector
- δ(n) governs how successive step vectors relate to each other
- A shape is a sequence of step vectors governed by δ(n)
- A placement is a vector handed from context to shape
- A relationship between shapes is a vector between their placements

No points. No infinite sets. No smoothness assumptions. No dimensionless primitives. Every object is either a vector or a rule over vectors. The framework is as atomic as it gets.

---

## What Remains Open

This is a framework in development, not a finished theory. Several questions remain genuinely open — and raising them precisely is itself a result, because it means the foundation is clear enough to know what needs to be built on top of it.

Can all classical curves be expressed as compositions of regular step sequences with closed-form δ(n) functions — or do some require genuinely uncompressible descriptions? How do surfaces and volumes extend from this naturally? What is the precise relationship to turtle geometry, discrete differential geometry, and constructive mathematics — fields that were already moving in this direction from different starting points?

And most interestingly: if geometric shapes are computations, what does it mean for two shapes to be *equivalent*? Are they equivalent when their δ(n) functions produce the same trajectory at all resolutions? Or when the functions themselves are equivalent as programs — the same computation by different routes? These are different conditions. The difference between them might be where the most interesting mathematics lives.

---

*This is part 3 of an ongoing series exploring what mathematics looks like when its foundational assumptions are questioned from first principles.*

*Part 1: [The Mathematics We Chose to Believe In](/posts/post_01_mathematics_foundations)*
*Part 2: [Mathematics Has Been Solving a Problem It Created Itself](/posts/post_02_epsilon_geometry)*
