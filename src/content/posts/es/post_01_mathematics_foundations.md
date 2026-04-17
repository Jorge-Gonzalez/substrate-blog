---
title: "Las matemáticas en las que elegimos creer"
series: "Las matemáticas en las que elegimos creer"
seriesPart: 1
topic: "Fundamentos · Matemáticas · Filosofía"
date: "2026-04-12"
readingTime: "15 min"
description: "¿Qué pasaría si la base sobre la que se construye todo se eligiera en lugar de probarse, y algunas de esas elecciones hubieran estado causando problemas silenciosamente desde entonces?"
status: "published"
---

¿Son las matemáticas el lenguaje de la lógica pura, la verdad absoluta, sin lugar para la opinión?  ¿Y si los cimientos sobre los que se construye todo se eligieron en lugar de demostrarse, y algunas de esas elecciones han estado causando problemas silenciosamente desde entonces?

Este no es un artículo sobre cómo las matemáticas están equivocadas.  Las matemáticas funcionan.  Es espectacular, irrazonablemente eficaz para describir el universo.  El punto es más sutil: algunas de las *historias que los matemáticos cuentan sobre por qué funcionan las matemáticas* son más endebles de lo que parecen — y si contáramos mejores historias, podríamos hacer matemáticas aún mejores.

Lo que sigue es un recorrido por algunas de las grietas más profundas en los cimientos, escrito por alguien que llegó a estas intuiciones no a través de un programa de doctorado, sino a través del diseño gráfico y la programación.  Lo cual, resulta que, no es un mal lugar para empezar.

---

## Las reglas al final no están probadas, sino que se eligen

Toda demostración matemática funciona partiendo de un conjunto de supuestos y mostrando que algo se deduce lógicamente de ellos.  Eso está bien hasta cierto punto.  Pero aquí está la pregunta que a nadie le gusta responder en la escuela: ¿en qué se basan las suposiciones iniciales?

La respuesta honesta es: nada.  Son axiomas: afirmaciones que aceptamos como verdaderas sin prueba, porque si siguiéramos preguntando "¿pero por qué?" nunca empezaríamos.  A esto a veces se le llama el *problema del regreso*.  Toda justificación requiere una justificación previa, para siempre, a menos que en algún momento decidas simplemente parar y llamar a algo una regla.

Imagina un sistema legal.  Las leyes derivan su autoridad de la constitución.  La constitución deriva su autoridad del acuerdo del pueblo que la escribió.  En el fondo, son los humanos quienes deciden que *así es como vamos a hacer las cosas*.  Las matemáticas no son tan diferentes.  Los axiomas en la base fueron elegidos, debatidos y revisados — por humanos, por razones históricas y prácticas, no porque fueran lógicamente inevitables.

El matemático Kurt Gödel demostró en 1931 que este problema es más profundo que una simple inconveniencia.  Demostró que en cualquier sistema formal suficientemente poderoso, siempre habrá enunciados verdaderos que no se pueden probar dentro de ese sistema.  No importa cuán cuidadosamente elijas tus axiomas, la verdad matemática siempre superará lo que puedas probar a partir de ellos.  La base no solo se elige, sino que, en un sentido técnico preciso, está incompleta.

> La incomodidad que sientes por los axiomas no es ignorancia matemática. Es claridad filosófica.

Esto no significa que las matemáticas estén rotas.  Significa que la historia de las matemáticas como una torre perfectamente lógica de certeza, construida a partir de primeros principios innegables, es un cuento de hadas.  La historia real es más desordenada, más humana y más interesante.

---

## El infinito no es un lugar al que puedas ir

Aquí hay una pregunta que vale la pena considerar: cuando los matemáticos dicen "a medida que x se acerca al infinito", ¿a dónde va exactamente x?

El infinito no es un número grande.  No es un número en absoluto, en el sentido ordinario.  No tiene ubicación.  No se puede alcanzar.  Y, sin embargo, las matemáticas modernas, particularmente después del trabajo de Georg Cantor en la década de 1870, lo tratan como un objeto completamente formado con el que se puede hacer aritmética.  Puedes comparar infinitos.  Algunos son más grandes que otros.  Hay infinitas cantidades de tamaños de infinito.

El trabajo de Cantor es genuinamente asombroso e internamente consistente.  Pero aquí está el problema: solo funciona si aceptas tratar el infinito como algo completo, un destino en lugar de una dirección.  Aristóteles llamó a esto *infinito real*, y pensó que era inadmisible.  Carl Friedrich Gauss, uno de los matemáticos más grandes que jamás haya existido, escribió que tratar el infinito como una cantidad completa era inadmisible, válido solo como una abreviatura para hablar de límites.

### Una mejor metáfora: Resolución

Aquí hay una forma alternativa de pensarlo, tomada del diseño gráfico.  Cuando trabajas con imágenes digitales, trabajas con una resolución, un nivel de detalle por debajo del cual un refinamiento adicional se vuelve imperceptible.  No necesitas infinitos píxeles para que una fotografía se vea suave.  Necesitas suficientes píxeles para que los adicionales no hagan ninguna diferencia visible.

En lugar de preguntar "¿qué sucede a medida que nos acercamos al infinito?", pregunta: ¿en qué punto un refinamiento adicional no produce ningún cambio significativo en el resultado?  Esto es más físicamente honesto, más útil computacionalmente y, posiblemente, más preciso matemáticamente, porque explicita el umbral en lugar de ocultarlo en la palabra "infinito".

Esto, de hecho, se acerca más a cómo funciona realmente el cálculo en la práctica.  Cuando una computadora calcula una derivada, no se acerca al infinito.  Itera hasta que el cambio cae por debajo de un umbral y se detiene.  El lenguaje del infinito en los libros de texto es casi cosmético: una forma de hablar que era conveniente para los matemáticos humanos con lápiz y papel, no una descripción de lo que realmente está sucediendo.

---

## Una grieta más: El infinito no tiene tamaño

La recta numérica natural tiene una propiedad tan básica que rara vez pensamos en ella: cada número tiene una posición definida en relación con cualquier otro.  100 es mayor que 2.  Siempre.  Inambiguamente.  Los matemáticos llaman a esto un *orden total*.

Ahora intenta añadir infinito a esa línea.

La distancia de infinito a 100 es infinita.  La distancia de infinito a 2 también es infinita.  Desde la perspectiva del infinito, esas distancias son indistinguibles, lo que significa que 100 y 2 se vuelven, desde esta perspectiva, equivalentes.  El orden se colapsa.  La propiedad que hace que la recta numérica sea útil simplemente no sobrevive al contacto con el infinito como un punto en esa recta.

Cantor demostró que el conjunto de los números reales no puede mapearse uno a uno sobre el conjunto de los números naturales, y concluyó que algunos infinitos son estrictamente mayores que otros.  Pero el tamaño es un concepto que pertenece al mundo finito — se define por comparación y ordenamiento, precisamente las propiedades que se desmoronan en el infinito.

**El infinito no es grande. No es muy grande. No tiene tamaño en absoluto.**

Es el nombre para la ausencia de un límite: una dirección, no un destino.

---

## El punto no existe (y eso es un problema)

Euclides definió un punto como "aquello que no tiene partes". Sin ancho.  Sin altura.  Sin profundidad.  Pura ubicación, sin sustancia.

Luego usó puntos para construir líneas, líneas para construir planos y planos para construir espacio.  Y aquí es donde las cosas se ponen silenciosamente incómodas: **¿cómo construyes algo con longitud a partir de repeticiones infinitas de algo con longitud cero?**

Cero, sumado a sí mismo cualquier número de veces, sigue siendo cero.  La solución matemática — que necesitas un número *incontablemente infinito* de puntos para producir una línea con longitud distinta de cero — funciona formalmente.  Pero requiere una infinidad real para rescatar lo que, en el fondo, es una construcción rota.

Si un punto no tiene anchura, no puede generar una línea al moverse, porque un objeto verdaderamente sin dimensiones que se mueve por el espacio no traza ninguna trayectoria.  Si una línea no tiene grosor, apilar infinitas líneas no produce ninguna superficie.  Si un plano no tiene profundidad, infinitos planos no producen volumen.  Cada paso de la construcción requiere que el objeto de menor dimensión ya posea secretamente un rastro de la dimensión superior que estás intentando construir.  La construcción es circular.

Este mismo problema aparece en física con consecuencias devastadoras.  El electrón, modelado como una partícula puntual, genera una energía propia infinita: las ecuaciones literalmente se rompen.  Los físicos han desarrollado procedimientos elaborados para restar un infinito de otro y obtener una respuesta finita.  Esto funciona, pero son los primeros en admitir que es matemáticamente incómodo.  La teoría de cuerdas existe en gran medida para reemplazar las partículas puntuales con cuerdas unidimensionales y escapar de este problema exacto.

---

## El círculo no es una forma, es una dirección

Pídale a la mayoría de la gente que enumere formas geométricas: triángulo, cuadrado, pentágono, círculo.  Se sienten como compañeros naturales, miembros de la misma categoría.

Pero considera qué hace que un triángulo sea un triángulo.  Tiene tres lados.  Tres vértices.  Una estructura discreta, finita y contable.  Puedes construir uno en un número finito de pasos.  A medida que añades más lados, la forma se acerca a un círculo, pero nunca llega a serlo.  Un polígono regular con un millón de lados sigue siendo un polígono.  No es un círculo.

> El círculo no es un polígono con infinitos lados. Es lo que los polígonos nunca pueden llegar a ser, sin importar cuántos lados les des.

El círculo pertenece a una categoría fundamentalmente diferente: no es una figura discreta y construible, sino lo que los matemáticos llaman un *objeto límite*.  Algo que existe como destino de un proceso, no como producto de una construcción.  Arquímedes lo entendió intuitivamente cuando aproximó pi calculando los perímetros de polígonos con cada vez más lados.  No estaba construyendo un círculo.  Se acercaba a uno.

---

## ¿Por qué 1 + 1 = 2? (La respuesta es más extraña de lo que crees)

La famosa demostración de 1 + 1 = 2 en los *Principia Mathematica* de Whitehead y Russell ocupa cientos de páginas de lógica simbólica.  Esto a veces se cita como evidencia de que los matemáticos son absurdamente pedantes.  Pero hay una razón real para la longitud: Russell y Whitehead estaban tratando de derivar la aritmética de la *lógica pura solamente*, sin partir de ningún concepto numérico en absoluto.

Aquí hay una pregunta diferente: ¿qué pasaría si la afirmación **2 − 1 = 1** fuera una prueba tan válida del mismo hecho como 1 + 1 = 2?  No como un truco o un atajo, sino como un reflejo de algo más profundo: que la suma y la resta no son dos cosas separadas donde una viene primero y la otra se deriva.  Son dos caras de la misma relación primitiva.

Para cualquier forma bien definida de combinar cosas, existe una forma correspondiente de separarlas.  Estos se definen juntos, no secuencialmente.  Ninguno tiene prioridad sobre el otro.  Composición y descomposición son dos caras de la misma moneda.

Esta es, de hecho, la base de una de las estructuras más poderosas de las matemáticas modernas: la teoría de grupos.  Un grupo requiere que cada operación tenga un inverso, no como una propiedad a demostrar, sino como un requisito fundamental.  La teoría de grupos resultó ser el esqueleto oculto del álgebra, la geometría, la física de partículas, la criptografía y mucho más.  Fue poderoso precisamente porque partió de la simetría como un primitivo, no como una conclusión.

---

## Es la misma grieta, que aparece en todas partes

Retrocede y mira el patrón.

Puntos adimensionales que construyen el espacio dimensional — resueltos invocando una infinidad incontable.  Líneas de ancho cero que producen superficies — resuelto por construcción de límite.  El círculo se trata como un polígono, lo cual se pasa por alto debido a la confusión de categorías.  El infinito tratado como un destino — gestionado separando la cardinalidad de la medida.  Operaciones definidas asimétricamente — parcheadas derivando inversas a posteriori.

Cada contradicción se gestiona introduciendo una nueva categoría formal para contenerla.  El sistema sigue siendo coherente.  Pero las grietas no desaparecen: se enyesan, y el yeso se nota.

> La base no fue construida incorrectamente. Fue construida para un propósito diferente — el razonamiento humano con lápiz y papel — y muestra las costuras cuando se le exige.

---

## Arreglar los fundamentos fortalecería las matemáticas, no las debilitaría

Cada vez en la historia que los matemáticos se han visto obligados a una mayor honestidad fundamental, las matemáticas resultantes han sido más poderosas, no menos.

Los números negativos fueron resistidos durante siglos como absurdos.  Aceptarlos desbloqueó el álgebra general casi de inmediato.  Los números complejos fueron descartados como imaginarios, una palabra que aún conserva la burla original.  Tomándolos en serio, unificó la trigonometría, las funciones exponenciales y la geometría en una de las ecuaciones más bellas de las matemáticas.  La geometría no euclidiana parecía imposible hasta que se desarrolló, y resultó describir el espacio físico con mayor precisión que la de Euclides.  La teoría de categorías fue ridiculizada como un sinsentido abstracto en la década de 1940, y luego colapsó montañas de pruebas difíciles en observaciones casi triviales al trabajar en el nivel correcto de abstracción.

El patrón es consistente: **eliminar una incomodidad fundamental abre una puerta, no la cierra.**

Una matemática construida a partir de umbrales de resolución en lugar de infinito real, primitivas operacionales simétricas en lugar de derivaciones asimétricas, y categorías honestas para objetos límite y construcciones discretas — una matemática así sería más físicamente coherente, más nativa computacionalmente y más honesta sobre lo que realmente está haciendo.

Las contradicciones en los fundamentos matemáticos no son el precio del poder matemático.  Son restricciones sobre él.  Resolverlos no simplificaría las matemáticas en algo más débil.  Lo abriría a algo más rico, tal como lo ha hecho cada vez antes.

---

*Esta es la parte 1 de una serie continua que explora cómo se ve la matemática cuando se cuestionan sus supuestos fundamentales desde los primeros principios.*

*Parte 2: [Las matemáticas han estado resolviendo un problema que ellas mismas crearon](/es/posts/post_02_epsilon_geometry)*
*Parte 3: [Geometría como proceso](/es/posts/post_03_geometry_as_process)*
