---
title: "Framework Projections"
series: "Geometry as an Emergent Process"
seriesPart: 5
topic: "Foundations · Geometry · Speculation"
date: "2026-04-20"
readingTime: "9 min"
description: "The framework was built to solve a specific problem. Some of what came with it was not part of the original question."
status: "published"
---

The previous posts had a purpose. They were building an argument —
identifying what was wrong with the classical foundations, attempting
a fix, failing honestly, finding the right starting point, and finally
stating what the framework actually is. That argument is complete.

This post is different. It is not an argument. It is closer to what
happens when you finish building something and step back to see what
it has become.

The framework was built to answer one question: what is the minimum
you need to specify in order to define a geometric object? The answer
it arrived at turned out to have connections that were not part of the
original motivation. Some of those connections led to places that
already had names. This post notices some of them.

---

## Networks Have Always Been Relational

A computer network is nodes connected by weighted links. A message
finds its destination by the cheapest path. Some connections are
redundant and can be removed without affecting reachability.

This is not a metaphor — the structural correspondence is direct. The
relational framework and network routing theory describe the same
underlying structures. The metric emergence result is the same
computation as finding a shortest-path metric on a graph; the minimal
presentation result is the same as identifying redundant edges.

The question of when two different network configurations produce the
same routing behavior has a precise formulation in this language. In
the single-generator case, the congruence classification answers it
completely. In the general multi-generator case, the equivalence
question is undecidable — the framework supplies a formal language for
the question, not a general solution.

Networks did not become relational when the framework was built. They
always were. The framework just made the connection visible by
describing both with the same primitives.

---

## Already Classical

Here is the one that was genuinely surprising to me — though I suspect
it will not surprise anyone already working in the area.

When the relational framework is expressed in its full mathematical
form, a connection becomes visible: the distances the framework
produces turn out to be the same as the distances studied in geometric
group theory — a field that has been active for over a century,
studying how algebraic structures can be understood through the
geometry of the spaces they generate. I am still learning this
territory. What I can say is that the connection was not planned.

The framework arrived there not by borrowing from it deliberately, not
by recognizing the connection in advance, but by following the logic
of the definitions until it landed somewhere that already had a name.

The distances the framework produces are formally the same as word
metrics in geometric group theory — not analogous to them, but the
same construction. What that body of knowledge makes available to the
study of relational systems, and what requires further work to make
explicit, are questions I am still inside.

---

## A Question About Descriptive Complexity

The framework stores shapes as rules rather than as sets of points. A
circle is one generator and one law. A torus requires two generators
and the law governing how they relate. Every finite metric space has a
minimal presentation — one from which no generator can be removed
without changing the geometry.

This raises a question the framework does not answer: whether the size
of a minimal presentation corresponds to any information-theoretic
notion of complexity. The minimal presentation measures something about
a shape's internal structure — a circle is simpler than a torus in a
precise sense — but whether that measure connects to notions like
Kolmogorov complexity is outside the current scope.

---

## Where the Thread Continues

The clearest next step is also the most internal to the framework itself.

The framework naturally produces two ways of measuring distance. One
measures the cost of getting from one state to another — how many steps,
how much weight. The other measures the distance between entire
processes — how different two sequences of moves are from each other.
Both are real, both are useful, but the precise relationship between
them has not yet been formally established. Closing that gap is the
work currently in progress. It requires mathematical tools the author
is still learning.

Further out, there is a structural parallel with the way physics
measures curvature — both involve asking how much a loop fails to
return to where it started. That parallel is suggestive and worth
eventually following. But it belongs on the horizon, not on the
immediate path. The next concrete step is the one closer in: understanding
exactly how the two distance measures relate to each other, and what
that relationship reveals about the framework's deeper structure.

---

## A Direction, Not a Map

What the previous four posts developed was a framework. What this post
notices are the connections that came with it — a structural parallel
with compression, a language for networks, a place inside an existing
mathematical tradition, and a thread pointing toward physics.

These are not the same kind of thing. Some follow directly from the
theorems. Some are open questions the framework raises without yet
answering. Some are visible on the horizon without knowing how long
the walk is. The honest posture is to hold them at different levels
of confidence.

What they have in common is that none of them were part of the
original question. The framework was built to answer one question about geometric
objects. Whether it answers that question well, and whether any
of these connections lead somewhere real, are questions still being
worked through.

That uncertainty is where the thinking currently stands. It is not
a finished map — it is a direction. If any of it resonates or opens
a question worth pursuing, that is exactly what this series was for.

---

*The formal mathematical development behind these ideas is being developed
in a companion paper currently in progress. An earlier version of that
paper overstated the novelty of the framework. Following substantive
critique from members of the Category Theory Zulip community, the paper
was revised to clarify that the machinery is classical and the
contribution is organizational and conceptual. The current version
reflects that.*