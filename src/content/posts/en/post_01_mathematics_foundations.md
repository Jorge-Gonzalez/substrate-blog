---
title: "The Mathematics We Chose to Believe In"
series: "The Mathematics We Chose to Believe In"
seriesPart: 1
topic: "Foundations · Mathematics · Philosophy"
date: "2026-04-12"
readingTime: "15 min"
description: "What if the foundation everything is built on was chosen rather than proved — and some of those choices have been quietly causing problems ever since?"
status: "published"
---

Is Mathematics the language of pure logic, absolute truth, no room for opinion? What if the foundation everything is built on was chosen rather than proved — and some of those choices have been quietly causing problems ever since?

This is not an article about how math is wrong. Math works. It is spectacularly, unreasonably effective at describing the universe. The point is more subtle: some of the *stories mathematicians tell about why math works* are shakier than they appear — and if we told better stories, we might do even better mathematics.

What follows is a tour through some of the deepest cracks in the foundation, written by someone who arrived at these intuitions not through a PhD program but through graphic design and programming. Which, it turns out, is not a bad place to start.

---

## The Rules at the Bottom Are Not Proved — They Are Chosen

Every mathematical proof works by starting from a set of assumptions and showing that something logically follows from them. That's fine as far as it goes. But here's the question nobody likes to answer in school: **what are the starting assumptions based on?**

The honest answer is: nothing. They are axioms — statements we accept as true without proof, because if we kept asking "but why?" we would never start. This is sometimes called the *regress problem*. Every justification requires a prior justification, forever, unless you decide at some point to just stop and call something a rule.

Imagine a legal system. Laws derive their authority from the constitution. The constitution derives its authority from the agreement of the people who wrote it. At the bottom, it's humans deciding that *this is how we're doing things*. Mathematics is not so different. The axioms at the base were chosen, debated, and revised — by humans, for historical and practical reasons, not because they were logically inevitable.

The mathematician Kurt Gödel proved in 1931 that this problem runs deeper than a mere inconvenience. He showed that in any sufficiently powerful formal system, there will always be true statements that cannot be proved within that system. No matter how carefully you choose your axioms, mathematical truth will always exceed what you can prove from them. The foundation is not just chosen — it is, in a precise technical sense, incomplete.

> The discomfort you feel about axioms is not mathematical ignorance. It is philosophical clarity.

This doesn't mean mathematics is broken. It means the story of mathematics as a perfectly logical tower of certainty, built from undeniable first principles, is a fairy tale. The real story is messier, more human, and more interesting.

---

## Infinity Is Not a Place You Can Go

Here is a question worth sitting with: when mathematicians say "as x approaches infinity," where exactly is x going?

Infinity is not a large number. It is not a number at all, in the ordinary sense. It has no location. It cannot be reached. And yet modern mathematics, particularly after the work of Georg Cantor in the 1870s, treats it as a fully-formed object you can do arithmetic with. You can compare infinities. Some are bigger than others. There are infinitely many sizes of infinity.

Cantor's work is genuinely astonishing and internally consistent. But here is the thing: it only works if you agree to treat infinity as a completed thing — a destination rather than a direction. Aristotle called this *actual infinity*, and he thought it was inadmissible. Carl Friedrich Gauss, one of the greatest mathematicians who ever lived, wrote that treating infinity as a completed quantity was inadmissible — valid only as a shorthand for talking about limits.

### A Better Metaphor: Resolution

Here is an alternative way to think about it, borrowed from graphic design. When you work with digital images, you work with a resolution — a level of detail below which further refinement becomes imperceptible. You do not need infinitely many pixels to make a photograph look smooth. You need enough pixels that additional ones make no visible difference.

Instead of asking "what happens as we approach infinity?", ask: at what point does further refinement produce no meaningful change in the result? This is more physically honest, more computationally useful, and arguably more mathematically precise — because it makes the threshold explicit rather than hiding it in the word "infinity."

This is, in fact, closer to how calculus actually works in practice. When a computer calculates a derivative, it does not approach infinity. It iterates until the change falls below a threshold and stops. The infinity language in the textbooks is almost cosmetic — a way of speaking that was convenient for human mathematicians with pencil and paper, not a description of what is actually happening.

---

## One More Crack: Infinity Has No Size

The natural number line has a property so basic we rarely think about it: every number has a definite position relative to every other. 100 is greater than 2. Always. Unambiguously. Mathematicians call this a *total order*.

Now try adding infinity to that line.

The distance from infinity to 100 is infinite. The distance from infinity to 2 is also infinite. From the perspective of infinity those distances are indistinguishable — which means 100 and 2 become, in a precise sense, equivalent. The ordering collapses. The property that makes the number line useful simply does not survive contact with infinity as a point on that line.

Cantor proved that the set of real numbers cannot be mapped one-to-one onto the set of natural numbers, and concluded that some infinities are strictly larger than others. But size is a concept that belongs to the finite world — it is defined by comparison and ordering, precisely the properties that break down at infinity.

**Infinity is not big. It is not very big. It has no size at all.**

It is the name for the absence of a boundary — a direction, not a destination.

---

## The Point Does Not Exist (And That Is a Problem)

Euclid defined a point as "that which has no part." No width. No height. No depth. Pure location, no substance.

He then used points to build lines, lines to build planes, and planes to build space. And here is where things get quietly uncomfortable: **how do you build something with length out of infinite repetitions of something with zero length?**

Zero, added to itself any number of times, is still zero. The mathematical solution — that you need an *uncountably infinite* number of points to produce a line with nonzero length — works formally. But it requires actual infinity to rescue what is, at bottom, a broken construction.

If a point has no width, it cannot generate a line by moving — because a truly dimensionless object moving through space traces no path. If a line has no thickness, stacking infinitely many lines produces no surface. If a plane has no depth, infinitely many planes produce no volume. Each step of the construction requires that the lower-dimensional object already secretly possesses a trace of the higher dimension you are trying to build. The construction is circular.

This same problem appears in physics with devastating consequences. The electron, modeled as a point particle, generates infinite self-energy — the equations literally break. Physicists have developed elaborate procedures to subtract one infinity from another and get a finite answer. This works, but they are the first to admit it is mathematically uncomfortable. String theory exists largely to replace point particles with one-dimensional strings and escape this exact problem.

---

## The Circle Is Not a Shape — It Is a Direction

Ask most people to list geometric shapes: triangle, square, pentagon, circle. They feel like natural peers, members of the same category.

But consider what makes a triangle a triangle. It has three sides. Three vertices. A discrete, finite, countable structure. You can build one in a finite number of steps. As you add more sides, the shape approaches a circle — but it never becomes one. A regular polygon with a million sides is still a polygon. It is not a circle.

> The circle is not a polygon with infinitely many sides. It is what polygons can never quite become, no matter how many sides you give them.

The circle belongs to a fundamentally different category — not a discrete constructible figure, but what mathematicians call a *limit object*. Something that exists as the destination of a process, not as the product of a construction. Archimedes understood this intuitively when he approximated pi by computing the perimeters of polygons with more and more sides. He was not building a circle. He was approaching one.

---

## Why Does 1 + 1 = 2? (The Answer Is Weirder Than You Think)

The famous proof of 1 + 1 = 2 in Whitehead and Russell's *Principia Mathematica* runs to hundreds of pages of symbolic logic. This is sometimes cited as evidence that mathematicians are absurdly pedantic. But there is a real reason for the length — Russell and Whitehead were trying to derive arithmetic from *pure logic alone*, starting with no numerical concepts whatsoever.

Here is a different question: what if the statement **2 − 1 = 1** is just as valid a proof of the same fact as 1 + 1 = 2? Not as a trick or a shortcut, but as a reflection of something deeper — that addition and subtraction are not two separate things where one comes first and the other is derived. They are two faces of the same primitive relationship.

For any well-defined way of combining things, a corresponding way of taking them apart exists. These are defined together, not sequentially. Neither has priority over the other. Composition and decomposition are two faces of one coin.

This is actually the foundation of one of the most powerful structures in modern mathematics: group theory. A group requires that every operation have an inverse — not as a property to be proved, but as a fundamental requirement. Group theory turned out to be the hidden skeleton of algebra, geometry, particle physics, cryptography, and much else. It was powerful precisely because it started from symmetry as a primitive, not as a conclusion.

---

## It Is the Same Crack, Appearing Everywhere

Step back and look at the pattern.

Dimensionless points constructing dimensional space — resolved by invoking uncountable infinity. Zero-width lines producing surfaces — resolved by limit construction. The circle being treated as a polygon — glossed over by category confusion. Infinity treated as a destination — managed by separating cardinality from measure. Operations defined asymmetrically — patched by deriving inverses after the fact.

Each contradiction is managed by introducing a new formal category to contain it. The system remains consistent. But the cracks do not disappear — they are plastered over, and the plaster shows.

> The foundation was not built wrong. It was built for a different purpose — human pencil-and-paper reasoning — and it shows the seams when pushed.

---

## Fixing the Foundation Would Make Mathematics Stronger, Not Weaker

Every time in history that mathematicians have been forced into greater foundational honesty, the resulting mathematics has been more powerful, not less.

Negative numbers were resisted for centuries as absurd. Accepting them unlocked general algebra almost immediately. Complex numbers were dismissed as imaginary — a word that still carries the original mockery. Taking them seriously unified trigonometry, exponential functions, and geometry into one of the most beautiful equations in mathematics. Non-Euclidean geometry seemed impossible until it was developed — and turned out to describe physical space more accurately than Euclid's. Category theory was mocked as abstract nonsense in the 1940s — and then collapsed mountains of difficult proofs into near-trivial observations by working at the right level of abstraction.

The pattern is consistent: **removing a foundational discomfort opens a door, it does not close one.**

A mathematics built from resolution thresholds rather than actual infinity, symmetric operational primitives rather than asymmetric derivations, and honest categories for limit objects and discrete constructions — such a mathematics would be more physically coherent, more computationally native, and more honest about what it is actually doing.

The contradictions in mathematical foundations are not the price of mathematical power. They are constraints on it. Resolving them would not simplify mathematics into something weaker. It would open it into something richer — just as it has every time before.

---

*This is part 1 of an ongoing series exploring what mathematics looks like when its foundational assumptions are questioned from first principles.*

*Part 2: [Mathematics Has Been Solving a Problem It Created Itself](/posts/post_02_epsilon_geometry)*
*Part 3: [Geometry as Process — Direction, Distance, and a Rule](/posts/post_03_geometry_as_process)*
