# substrate.lat — Changes Required
# Based on current honest positioning of the PRG framework

---

## WHY THESE CHANGES

The paper has been repositioned: it is an exploratory conceptual framework
in dialogue with existing mathematics (geometric group theory, enriched
categories), not a completed foundational paper with novel proofs.
The site needs to reflect this in the three places where it currently
overclaims.

---

## CHANGE 1 — Post 4 companion paper footnote
### Files
- src/content/posts/en/emergent_geometry/post_04_process-relational_geometry.md
- src/content/posts/es/emergent_geometry/post_04_process-relational_geometry.md

### EN: Find (last paragraph)
```
*The formal mathematical development behind these ideas — including
complete proofs — is in the companion paper:
A Process-Relational Foundation for Geometry.*
```

### EN: Replace with
```
*The formal mathematical development behind these ideas is being developed
in a companion paper currently in progress.*
```

### ES: Find
```
El desarrollo matemático formal detrás de estas ideas, incluyendo pruebas
completas, se encuentra en el artículo complementario:
Una base procesual-relacional para la geometría.*
```

### ES: Replace with
```
*El desarrollo matemático formal detrás de estas ideas está siendo desarrollado
en un artículo complementario actualmente en progreso.*
```

---

## CHANGE 2 — Post 5 two changes
### Files
- src/content/posts/en/emergent_geometry/post_05_framework_projections.md
- src/content/posts/es/emergent_geometry/post_05_framework_projections.md

### EN Change A — physics speculation (in "Where the Thread Continues")
Find:
```
This is speculative. It is the direction a second paper would explore,
not a result of this one. But the structural parallel is not a
metaphor: it follows from the definitions. The framework was built to
fix a foundational problem in discrete geometry. It ended up pointing,
through its own internal logic, toward the deepest equations in
physics. Whether that pointing leads somewhere — whether the relational
structure can actually carry the full weight of gravitational geometry
— is the open question the framework leaves behind.
```
Replace with:
```
This is speculative — a direction worth exploring, not a result in hand.
The structural parallel is suggestive but not yet established. Whether
the relational structure can carry the weight of gravitational geometry
is an open question, not a claim.
```

### EN Change B — companion paper footnote (appears twice, change both)
Find:
```
*The formal mathematical development — complete proofs and precise
definitions — is in the companion paper:
A Process-Relational Foundation for Geometry.*
```
Replace with:
```
*The formal mathematical development behind these ideas is being developed
in a companion paper currently in progress.*
```

### ES: Apply equivalent changes to both occurrences.

---

## CHANGE 3 — About page (EN)
### File: src/pages/about.astro

Replace the entire content of the `.about-body` div with the following.
The lead paragraph (`.about-lead`) stays as-is. Replace everything from
the second `<p>` onward.

### Find (paragraphs 2–5 of about-body)
```
<p>
  At 18 I was designing luminous signs. Within a few years I was teaching 
  the design department Adobe Illustrator — which I had learned alone, from 
  an English manual, before I spoke English. Not because it was required, 
  but because I had seen what it could do and couldn't look away. That same 
  pull toward the next tool, the next layer of the problem, has driven 
  everything since — web departments, international markets, multimedia 
  systems, browser extensions. The fields changed. The reason didn't.     
</p>

<p>
  The same engine that drove all of that eventually turned toward something 
  that had bothered me for a long time. Infinity and dimensionless points 
  are treated in standard mathematics as settled facts — but they contain 
  contradictions. Contradiction, for me, is not a dead end. It's a signal 
  that something requires revision. The result is an ongoing exploration of 
  process-relational geometry — a framework that takes relations as primitive 
  and lets geometric objects emerge from them. The mathematics is still 
  developing and the framework sits in dialogue with existing work in 
  geometric group theory and enriched category theory.
</p>

<p>
  In a different realm, the same standard applies. I'm currently finishing 
  Monky — a browser extension for macro and text expansion built around a 
  keyboard-centric interface, for people whose thinking moves faster than 
  their typing. It's the same approach applied to a different problem: find 
  the minimum structure, remove what isn't necessary, build what remains well.
</p>

<p>
  If something here resonates or opens a question worth pursuing — in any 
  of these directions or beyond them — reach out. We can find the tools, 
  build a viable path, and create the opportunity together.
</p>
```

### Replace with
```
<p>
  At 18 I was designing luminous signs. Within a few years I was teaching 
  the design department Adobe Illustrator — which I had learned alone, from 
  an English manual, before I spoke English. Not because it was required, 
  but because I had seen what it could do and couldn't look away. That 
  pattern has repeated across every domain since. The fields change. 
  The pull doesn't.
</p>

<p>
  That same pull eventually turned toward something that had bothered me 
  for a long time: the foundational assumptions of geometry. The 
  dimensionless point, the infinite line, the circle as a limit object 
  rather than a constructible shape — these are treated as settled facts, 
  but they contain tensions that rarely get examined. I've been developing 
  a process-relational framework as a way to think through them: one in 
  which geometric objects arise from finite relational rules rather than 
  from an ambient space, and in which metric structure is an external 
  parameter rather than an intrinsic property. The mathematics sits in 
  dialogue with existing work in geometric group theory and enriched 
  category theory. It is still developing, and I am still learning the 
  territory it connects to. The ideas are serious; the humility about 
  where they stand is equally serious.
</p>

<p>
  In parallel, I'm finishing Monky — a browser extension for macro and 
  text expansion built around a keyboard-centric interface, for people 
  whose thinking moves faster than their typing. The same instinct 
  applies: find the minimum structure that solves the real problem, 
  remove what isn't necessary, build what remains well.
</p>

<p>
  If something here opens a question worth pursuing — in any of these 
  directions — I'm glad to hear it.
</p>
```

(The ES about page does not mention the paper so no change needed there.)

---

## CHANGE 4 — Add PRG homology tool

### Action
Copy prg.html into the public/ directory:
  public/prg.html

This makes it available at: https://substrate.lat/prg.html

The file is self-contained — no server, no dependencies beyond
Google Fonts. Anyone can open it and run the homology computation
in the browser.

In the Zulip post, link as:
  https://substrate.lat/prg.html

---

## WHAT NOT TO CHANGE

- Posts 1, 2, 3: entirely philosophical/exploratory — no overclaims
- Post 4 sections I–VI: all fine as written, EXCEPT Change 5 below
- Post 5 "right posture" section: correctly calibrated already
- The ES about page: doesn't mention the paper
- IDEAS.md: context file, not public content

---

## CHANGE 5 — Post 4 overclaim about "proved result"
### Files
- src/content/posts/en/emergent_geometry/post_04_process-relational_geometry.md
- src/content/posts/es/emergent_geometry/post_04_process-relational_geometry.md

### Context
In Section I, the text presents a reconstruction theorem as proof of a
philosophical claim. The theorem proves expressiveness (every finite metric
space arises from a relational system), not the philosophical interpretation
that "geometry is in the choice of rules." The category theory community
will immediately see the gap.

### EN: Find
```
The claim that geometry is in the choice of rules is not just a philosophical
position. It is a proved result.
```

### EN: Replace with
```
The claim that geometry is in the choice of rules is not just a philosophical
position — it has a precise mathematical counterpart. Every finite metric
space can be expressed as such a system of moves and rules, and the
correspondence is exact. The philosophical interpretation is my own, but
it is grounded in that structure.
```

### ES: Find
```
La afirmación de que la geometría está en la elección de las reglas no es
solo una posición filosófica. Es un resultado probado.
```

### ES: Replace with
```
La afirmación de que la geometría está en la elección de las reglas no es
solo una posición filosófica — tiene un correlato matemático preciso. Cada
espacio métrico finito puede expresarse como tal sistema de movimientos y
reglas, y la correspondencia es exacta. La interpretación filosófica es mía,
pero está fundamentada en esa estructura.
```

---

## CHANGE 6 — Post 5 "hundred years" discovery narrative
### Files
- src/content/posts/en/emergent_geometry/post_05_framework_projections.md
- src/content/posts/es/emergent_geometry/post_05_framework_projections.md

### Context
The section reads as if the framework independently arrived at geometric
group theory — a framing that may read as grandiose to people who work in
that field. The observation is real and worth keeping, but needs a sentence
that frames the author as a newcomer recognizing something, not inheriting
a century of work.

### EN: Find (opening of "A Hundred Years of Free Mathematics" section)
```
Here is the one that is genuinely surprising, at least to me.

When the relational framework is expressed in its full mathematical
form, a connection becomes visible: the distances the framework
produces turn out to be the same as the distances studied in geometric
group theory — a field that has been active for over a century,
studying how algebraic structures can be understood through the
geometry of the spaces they generate.
```

### EN: Replace with
```
Here is the one that was genuinely surprising to me — though I suspect
it will not surprise anyone already working in the area.

When the relational framework is expressed in its full mathematical
form, a connection becomes visible: the distances the framework
produces turn out to be the same as the distances studied in geometric
group theory — a field that has been active for over a century,
studying how algebraic structures can be understood through the
geometry of the spaces they generate. I am still learning this
territory. What I can say is that the connection was not planned.
```

### ES: Apply equivalent change to the opening of the equivalent section.

---

## CHANGE 7 — Post 5 series climax reframe
### Files
- src/content/posts/en/emergent_geometry/post_05_framework_projections.md
- src/content/posts/es/emergent_geometry/post_05_framework_projections.md

### Context
The series currently builds toward the companion paper as a climax —
implying a finished, rigorous work is waiting at the end. The series
should instead close toward an open invitation: this is where the thinking
currently stands, not where it concludes.

### EN: Find (the "Right Posture" section closing paragraph)
```
What they have in common is that none of them were part of the
original question. The framework was built to fix a foundational
problem in geometry. It did that. Then it kept going.

That is what interesting mathematics does. It opens more than it was
asked to. The framework has that quality. That is worth noticing.
```

### EN: Replace with
```
What they have in common is that none of them were part of the
original question. The framework was built to fix a foundational
problem in geometry. Whether it succeeds at that, and whether any
of these connections lead somewhere real, are questions still being
worked through.

That uncertainty is where the thinking currently stands. It is not
a finished map — it is a direction. If any of it resonates or opens
a question worth pursuing, that is exactly what this series was for.
```

### ES: Apply equivalent change to the closing paragraph of "La postura correcta."

---

## CHANGE 8 — Post 4 "no infinite processes" imprecision
### Files
- src/content/posts/en/emergent_geometry/post_04_process-relational_geometry.md
- src/content/posts/es/emergent_geometry/post_04_process-relational_geometry.md

### Context
The quotient construction involves equivalence classes over all finite
configurations — an infinite set. Saying "no infinite processes" is
technically imprecise and a category theorist will notice. The real claim
is that no infinite *primitives* are required, not that the construction
is finite in every sense.

### EN: Find
```
No space required. No coordinates. No infinite processes. Just moves,
rules, and the grouping that results.
```

### EN: Replace with
```
No background space. No coordinates. No infinite primitives. Just moves,
rules, and the grouping that results.
```

### ES: Find
```
No se requiere espacio. Sin coordenadas. No procesos infinitos. Solo
movimientos, reglas y la agrupación que resulta.
```

### ES: Replace with
```
Sin espacio de fondo. Sin coordenadas. Sin primitivas infinitas. Solo
movimientos, reglas y la agrupación que resulta.
```

---

## CHANGE 9 — Post 4 Section II ordering presented as necessary
### Files
- src/content/posts/en/emergent_geometry/post_04_process-relational_geometry.md
- src/content/posts/es/emergent_geometry/post_04_process-relational_geometry.md

### Context
The claim that the four properties (distance, size, position, space)
"build on each other in a specific order" is presented as if it follows
necessarily from the framework. It doesn't — it is the author's
philosophical interpretation of what the framework reveals. A reader
could reasonably argue the ordering differently.

### EN: Find
```
They build on each other in a specific order. The way of measuring
distance is most fundamental. Size is that measurement applied with a
chosen unit — same way of measuring, different unit, different size.
Position requires a measuring rule plus a chosen reference point and
orientation. And space — the most surprising of the four — turns out
not to be a container at all, but the structure that emerges when
objects are connected to each other by relations.
```

### EN: Replace with
```
One way to see their relationship: the way of measuring distance is
most fundamental. Size is that measurement applied with a chosen unit.
Position requires a measuring rule plus a chosen reference point and
orientation. And space — the most surprising of the four — turns out
not to be a container at all, but the structure that emerges when
objects are connected to each other by relations. This ordering is my
reading of what the framework reveals, not a claim the framework
itself proves.
```

### ES: Apply equivalent change — add the clarifying sentence at the end
of the equivalent paragraph.

---

## CHANGE 10 — Post 4 Section III overreach on "entire domain"
### Files
- src/content/posts/en/emergent_geometry/post_04_process-relational_geometry.md
- src/content/posts/es/emergent_geometry/post_04_process-relational_geometry.md

### Context
"The entire domain of finite geometry with distances" is broader than
what the reconstruction theorem actually covers. The theorem covers
finite metric spaces — it says nothing about angles, curvature, or
topological properties beyond what the metric captures. Finite
projective planes, for instance, are not captured by a metric alone.
The sentence needs to be narrowed to what the theorem actually says.

### EN: Find
```
The formal mathematics confirms this — the framework turns out to be
exactly equivalent, as a mathematical structure, to the entire domain
of finite geometry with distances. Every finite metric space corresponds
to a system of rules, and every system of rules corresponds to a finite
metric space. The two are the same thing seen from different angles.
```

### EN: Replace with
```
The formal mathematics confirms a precise version of this: every finite
metric space corresponds to a system of rules, and every system of rules
corresponds to a finite metric space. The two are the same thing seen
from different angles — at least within the domain of finite metric
geometry, which is what the framework covers.
```

### ES: Find
```
Las matemáticas formales confirman esto: el marco resulta ser exactamente
equivalente, como estructura matemática, a todo el dominio de la geometría
finita con distancias. Todo espacio métrico finito corresponde a un sistema
de reglas, y todo sistema de reglas corresponde a un espacio métrico finito.
Las dos son lo mismo visto desde diferentes ángulos.
```

### ES: Replace with
```
Las matemáticas formales confirman una versión precisa de esto: todo
espacio métrico finito corresponde a un sistema de reglas, y todo sistema
de reglas corresponde a un espacio métrico finito. Las dos son lo mismo
visto desde diferentes ángulos — al menos dentro del dominio de la
geometría métrica finita, que es lo que el marco cubre.
```

---

## CHANGE 11 — Post 5 "Where the Thread Continues" — replace physics horizon with honest next step
### Files
- src/content/posts/en/emergent_geometry/post_05_framework_projections.md
- src/content/posts/es/emergent_geometry/post_05_framework_projections.md

### Context
The current section points toward physics as the next horizon. This
overstates where the work actually is. The genuine next step is internal
to the framework: formally establishing the relationship between the two
ways of measuring distance the framework naturally produces. That work
is in progress and requires mathematics the author is still learning.
Physics stays as a distant direction at most.

The replacement is written for the post's intended audience —
non-mathematicians — so "adjunction" and "enriched category" are not
used. The idea is translated into plain language: two ways of measuring
distance, a gap between them not yet formally closed.

### EN: Find (entire "Where the Thread Continues" section)
```
## Where the Thread Continues

The further the framework is developed, the closer it gets to
something unexpected: the foundations of physics.

Here is why. The framework measures curvature by how much a loop
fails to close — traverse a small path and return to where you
started, and the residual difference is the curvature. This turns out
to be precisely the mathematical structure at the heart of gauge
theory, the framework that describes electromagnetism, the strong and
weak nuclear forces, and — through general relativity — gravity.

In gauge theory, curvature is also measured by how much a loop fails
to return to its starting state. The mathematics is the same
operation, in a more general setting. Following this thread leads to
a natural question: can the Einstein field equations — the equations
that govern how matter curves spacetime in general relativity — be
derived from relational structure rather than assumed as the starting
point?

This is speculative — a direction worth exploring, not a result in hand.
The structural parallel is suggestive but not yet established. Whether
the relational structure can carry the weight of gravitational geometry
is an open question, not a claim.
```

### EN: Replace with
```
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
```

### ES: Find (entire "Donde el Hilo Continúa" section)
```
## Donde el Hilo Continúa

Cuanto más se desarrolla el marco, más se acerca a algo inesperado:
los fundamentos de la física.

Aquí está el porqué. El marco mide la curvatura por la medida en que
un bucle no se cierra: recorra un pequeño camino y regrese a donde
comenzó, y la diferencia residual es la curvatura. Resulta ser
precisamente la estructura matemática que está en el corazón de la
teoría de gauge, el marco que describe el electromagnetismo, las
fuerzas nucleares fuerte y débil, y — a través de la relatividad
general — la gravedad.

En la teoría de gauge, la curvatura también se mide por cuánto un
bucle no logra regresar a su estado inicial. La matemática es la
misma operación, en un contexto más general. Siguiendo este hilo se
llega a una pregunta natural: ¿pueden las ecuaciones de campo de
Einstein —las ecuaciones que rigen cómo la materia curva el
espacio-tiempo en la relatividad general— derivarse de la estructura
relacional en lugar de asumirse como el punto de partida?

Esto es especulativo. Es la dirección que exploraría un segundo
artículo, no un resultado de este. Pero el paralelismo estructural no
es una metáfora: se deduce de las definiciones. El marco se construyó
para solucionar un problema fundamental en la geometría discreta.
Acabó apuntando, a través de su propia lógica interna, hacia las
ecuaciones más profundas de la física. Si esa indicación lleva a
alguna parte —si la estructura relacional puede soportar realmente
todo el peso de la geometría gravitacional— es la pregunta abierta
que deja el marco.
```
