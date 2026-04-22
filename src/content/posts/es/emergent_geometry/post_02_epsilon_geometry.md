---
title: "¿Por qué la geometría necesita ε?"
series: "Geometría como un proceso emergente"
seriesPart: 2
topic: "Fundamentos · Geometría · Cálculo"
date: "2026-04-13"
readingTime: "12 min"
description: "La resolución no es algo que el cálculo produzca.  Es algo con lo que el cálculo debería haber empezado.  Un primer intento de geometría discreta, su fracaso honesto y lo que reveló ese fracaso."
status: "published"
---

## Apertura

La primera parte de esta serie identificó tres primitivas geométricas específicas —el punto sin dimensiones, la línea infinita y el círculo continuo— y argumentó que cada una conlleva un compromiso con el infinito real que no es inherente al objeto geométrico, sino que fue importado de las condiciones bajo las cuales la geometría se practicó por primera vez.  Terminó señalando dos preguntas sin resolver: qué reemplaza al punto y qué significa que el círculo sea el mismo tipo de objeto que un polígono.

Esta parte aborda esas preguntas a través de un primer intento de un punto de partida diferente, uno que es honesto sobre dónde tiene éxito y aún más honesto sobre dónde fracasa.

---

## La escalera que nunca se suaviza

Puedes aproximar una línea diagonal con una escalera.  Haz los escalones más pequeños.  Más pequeño de nuevo.  La forma se parece cada vez más a la diagonal, pero la longitud total de la escalera nunca cambia.  Se mantiene obstinadamente en 2, sin importar cuántos pasos añadas.  La longitud real de la diagonal es √2 ≈ 1.414.  La escalera nunca llega.

Mientras tanto, si aproximas un círculo con polígonos —triángulos, luego pentágonos, luego cientos de lados— el perímetro *sí* converge correctamente hacia 2π.  Ambos son procesos límite.  Ambos implican secuencias infinitas de formas discretas que se acercan a una curva suave.  Uno trabaja.  Uno no lo hace.

Las matemáticas clásicas tienen una explicación técnica: la escalera converge en *forma* pero no en *longitud*, porque las esquinas nunca se alinean con la dirección de la curva.  Esto es correcto.  Pero admite silenciosamente algo más grande: **no todos los enfoques hacia un límite suave son confiables, y el objeto suave en sí mismo no puede decirte cuáles lo son.**

El círculo liso —el objeto límite— acepta ambas aproximaciones sin queja.  El error solo se descubre después, al verificarlo con una respuesta conocida.  No hay nada en el marco que señale el problema de antemano.

La pregunta es si la resolución —la propiedad que el marco no puede localizar— puede hacerse primitiva en lugar de fabricada.  Lo que sigue es un primer intento de esa construcción.

---

## Un pensamiento sobre el infinito y el tamaño

La primera parte de esta serie apuntaba hacia este argumento.  Aquí se ofrece como una perspectiva con la que vale la pena quedarse, porque está directamente relacionada con lo que sigue.

La recta numérica natural tiene una propiedad tan básica que rara vez pensamos en ella: cada número tiene una posición definida en relación con cualquier otro.  100 es mayor que 2.  Siempre.  Inambiguamente.  Los matemáticos llaman a esto un *orden total* y es una de las propiedades más fundamentales que poseen los números.

Ahora intenta añadir infinito a esa línea.

La distancia de infinito a 100 es infinita.  La distancia de infinito a 2 también es infinita.  Desde la perspectiva del infinito, esas distancias son indistinguibles.  El orden que hace que la recta numérica sea útil no sobrevive al contacto con el infinito como un punto en esa recta.

Cantor demostró que el conjunto de los números reales no puede mapearse uno a uno sobre el conjunto de los números naturales, y concluyó que algunos infinitos son estrictamente mayores que otros.  El argumento diagonal detrás de esta prueba es técnicamente irrefutable.  Lo que demuestra es que ciertos conjuntos infinitos no pueden ponerse en correspondencia entre sí de una manera particular.  Ese es un resultado estructural genuino sobre cómo se comportan los conjuntos infinitos.

La interpretación de ese resultado como una clasificación por *tamaño*, sin embargo, merece un examen cuidadoso.  El tamaño es un concepto que pertenece al mundo finito — se define por comparación y ordenamiento, precisamente las propiedades que se vuelven problemáticas cuando la infinitud se trata como un destino en lugar de una dirección.  La jerarquía de infinitos es real como descripción de las diferencias estructurales entre conjuntos.  Si esa jerarquía representa una clasificación por tamaño, o algo más parecido a una clasificación de comportamientos de correspondencia, es una pregunta que la prueba en sí misma no resuelve.  Es una cuestión de interpretación, no de matemáticas.

Esto importa para lo que sigue porque el marco desarrollado a continuación nunca trata el infinito como un objeto con un tamaño.  El infinito solo aparece como la dirección en la que se mueve un parámetro de resolución al refinar, un proceso que puedes continuar, no un lugar al que llegas.  La cuestión de si una infinidad es mayor que otra simplemente no se plantea, porque nada en la construcción convierte la infinidad en algo que pueda ser comparado.

---

## Resolución como Consecuencia

El cálculo se inventó para tratar curvas suaves que no tienen una estructura discreta natural.  Para encontrar la pendiente en un punto, donde no hay un segundo punto contra el cual medir, se construye un proceso límite: se acercan dos puntos cada vez más y se pregunta a qué valor se aproxima la pendiente.  Para encontrar el área bajo una curva, sumas infinitos rectángulos infinitamente delgados y te preguntas a qué se acerca esa suma.

Ambas operaciones extraen una respuesta finita precisa de un objeto infinito.  Todo el aparato teórico del cálculo —definiciones épsilon-delta, continuidad, diferenciabilidad, teoremas de convergencia— existe para hacer rigurosa esa extracción.

Funciona.  Es genuinamente hermoso en algunos lugares.  Pero la complejidad se deriva de una elección fundamental hecha al principio: construir la geometría sobre objetos lisos infinitos y luego recuperar la precisión finita cuando sea necesario.  Visto así, ε no es un parche para un defecto, sino el lenguaje que requiere el marco una vez que te has comprometido a trabajar con continuos.  Las definiciones ε no resuelven un problema; proporcionan una estructura rigurosa para razonar sobre la aproximación dentro de ese compromiso.

La pregunta es si el compromiso fue necesario en primer lugar.  La resolución podría haberse declarado como un parámetro externo explícito al principio, perteneciente al contexto de comparación en lugar de al objeto que se describe, en lugar de reconstruirse al final mediante un proceso límite.

---

## Un punto de partida diferente

¿Qué pasaría si en lugar de definir un círculo como un conjunto infinito de puntos equidistantes de un centro, lo definiéramos como un conjunto finito de pequeños discos dispuestos en una curva cerrada, donde el tamaño de los discos *es* la resolución?

Este es el círculo ε.

---

## Un Primer Intento: El Círculo ε

El primer instinto fue reemplazar el punto adimensional con algo de tamaño físico.  Si el problema es que los puntos no tienen extensión, dales extensión.  Defina cada vértice de un polígono no como una ubicación sin dimensiones, sino como un pequeño disco de diámetro ε.  El círculo se convierte en un anillo de discos ε, cada uno tocando el siguiente, espaciados ε a lo largo del perímetro.

Llamemos a esto el círculo ε.  Para un radio R y una resolución ε, tiene n = 2πR / ε vértices.  El perímetro es un conteo directo:

P = n × ε = 2πR

Sin límite.  No proceso infinito.  Grande pero finito.  E inmediatamente, aparece algo útil: un triángulo, un cuadrado y un ε-círculo son ahora el mismo tipo de objeto — una colección finita de ε-discos conectados por aristas.  El círculo ya no es categóricamente diferente de un polígono.  Es un polígono cuyo número de vértices se establece por resolución en lugar de elegirse arbitrariamente.

La paradoja de la escalera también se disuelve limpiamente.  Una ε-diagonal coloca sus discos a lo largo de la dirección diagonal.  Una escalera los sitúa en ejes horizontales y verticales; no cumple la definición de una ε-aproximación válida, y el marco lo indica inmediatamente en lugar de producir una respuesta incorrecta silenciosa.

La idea es productiva.  Pero contiene un problema.

---

## Dónde falla el primer intento

El disco ε se introdujo para eliminar el punto adimensional.  Pero cada disco ε es en sí mismo un círculo, y un círculo es precisamente el objeto que el marco intentaba reemplazar.  La construcción toma prestado su propio primitivo como componente.  Esa no es una solución.  Es un retroceso.

Seguir esa grieta lleva a más:

El problema del perímetro irregular.  En dos dimensiones, una forma construida a partir de discos tiene un perímetro que no es un borde limpio sino una superficie festoneada: los bordes redondeados de los discos producen una textura que no desaparece a resoluciones más finas.  En tres dimensiones, una superficie construida a partir de esferas no es hermética al aire: aparecen huecos entre las esferas, por pequeños que sean.  En dimensiones superiores el problema se agrava.

La ambigüedad de la intersección.  Cuando dos formas ε se encuentran, no hay una respuesta clara sobre dónde se intersectan exactamente.  ¿Comparten discos de límite?  Entonces un disco pertenece a ambas formas simultáneamente, lo cual es un problema de propiedad.  ¿Se encuentran en los bordes de los discos?  Entonces la intersección está definida por el límite del disco, que es a su vez un círculo — y volvemos al problema del punto sin dimensiones a un nivel de abstracción más profundo.

La causa raíz.  El disco ε intentó resolver dos problemas separados simultáneamente: el círculo liso infinito y el punto sin dimensiones, haciendo que la unidad primitiva fuera un objeto de tamaño físico.  Pero un disco es una forma bidimensional con un límite, y ese límite conlleva los mismos problemas que el círculo original.  No se puede construir una geometría libre de primitivas circulares haciendo que los átomos sean circulares.

El primer intento localizó el problema con más precisión de lo que lo resolvió.  Lo cual, a su manera, es progreso.  Lo que revela el fracaso es que el problema no es el *tamaño* de la primitiva.  Es algo más profundo: la suposición de que la geometría está construida a partir de *objetos* en absoluto, en lugar de a partir de *relaciones entre pasos*.

Esa realización es donde comienza el próximo ensayo.

---

## Lo que esto le hace al cálculo

La observación central sobre la resolución sobrevive independientemente al fracaso del disco ε.  Incluso sin una primitiva geométrica resuelta, la misma pregunta sigue en pie: la resolución se reconstruye al final de un proceso límite, cuando podría haberse declarado al principio como un parámetro externo.

Diferenciación como pendiente directa entre pasos adyacentes.  Integración como una suma finita.  El teorema fundamental como una relación inversa obvia entre la diferenciación y la suma.  Estos resultados se derivan de hacer la resolución primitiva, no específicamente del disco ε.

Lo que cambia no son los resultados, sino su estatus fundamental.  El cálculo clásico tiene resultados limpios en forma cerrada —la derivada de sin es cos, la integral de x² es x³/3— que dependen de la estructura suave e infinita.  En un marco basado en la resolución, esas se convierten en descripciones de patrones estables en la resolución: relaciones que se mantienen en todas las resoluciones suficientemente finas.  Los resultados no se pierden.  Se atribuyen al patrón relacional en lugar de a un objeto infinito.  La taquigrafía sigue siendo válida.  Lo que cambia es lo que representa.

---

## Dónde nos deja esto

El ε-disco fue un desvío productivo: unificó polígonos y círculos bajo un mismo tipo, disolvió la paradoja de la escalera y convirtió la resolución en una propiedad visible de primera clase.  Pero introdujo de contrabando lo mismo primitivo que intentaba reemplazar.

La pregunta correcta, que el fracaso obligó a enfocar, es esta: ¿y si lo primitivo no es un objeto con un tamaño, sino un *paso dirigido* — un movimiento en lugar de un lugar?  ¿Y si la geometría no se construye a partir de cosas que existen en lugares, sino de procesos que viajan entre ellos?

Esa pregunta, y a dónde lleva, es el tema de la siguiente parte.


