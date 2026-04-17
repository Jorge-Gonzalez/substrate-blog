---
title: "Las matemáticas han estado resolviendo un problema que ellas mismas crearon"
series: "Las matemáticas en las que elegimos creer"
seriesPart: 2
topic: "Fundamentos · Geometría · Cálculo"
date: "2026-04-13"
readingTime: "12 min"
description: "La resolución no es algo que el cálculo produzca. Es algo con lo que el cálculo debería haber comenzado. Un primer intento de geometría discreta, su fracaso honesto y lo que reveló ese fracaso."
status: "published"
---

# Las matemáticas han estado resolviendo un problema que ellas mismas crearon

**Serie:** Las matemáticas en las que elegimos creer — Parte 2
**Tema:** Fundamentos · Geometría · Cálculo
**Fecha:** Abril de 2026
**Tiempo de lectura:** 12 min

---

## Apertura

En la primera parte de esta serie nos preguntamos si los fundamentos de las matemáticas fueron descubiertos o elegidos.  La respuesta, resulta, se elige en su mayor parte — y algunas de esas elecciones introdujeron contradicciones que se han gestionado discretamente desde entonces.

Esta parte trata sobre una de esas contradicciones gestionadas, y lo que sucede cuando dejas de gestionarla y la arreglas en su lugar.

---

## La escalera que nunca se suaviza

Puedes aproximar una línea diagonal con una escalera.  Haz los escalones más pequeños.  Más pequeño de nuevo.  La forma se parece cada vez más a la diagonal, pero la longitud total de la escalera nunca cambia.  Se mantiene obstinadamente en 2, sin importar cuántos pasos añadas.  La longitud real de la diagonal es √2 ≈ 1.414.  La escalera nunca llega.

Mientras tanto, si aproximas un círculo con polígonos — triángulos, luego pentágonos, luego cientos de lados — el perímetro *sí* converge correctamente hacia 2π.  Ambos son procesos límite.  Ambos implican secuencias infinitas de formas discretas que se acercan a una curva suave.  Uno trabaja.  Uno no lo hace.

Las matemáticas clásicas tienen una explicación técnica: la escalera converge en *forma* pero no en *longitud*, porque las esquinas nunca se alinean con la dirección de la curva.  Esto es correcto.  Pero admite silenciosamente algo más grande: **no todos los enfoques hacia un límite suave son confiables, y el objeto suave en sí mismo no puede decirte cuáles lo son.**

Esto no es una curiosidad.  Es un fracaso diagnóstico.  El círculo liso — el objeto límite — acepta ambas aproximaciones sin queja.  El error solo se descubre después, al verificarlo con una respuesta conocida.  El marco no te da ninguna advertencia.

Este es el problema que vamos a solucionar.

---

## Una grieta más: El infinito no tiene tamaño

Antes de proponer una solución, un problema fundamental más que vale la pena mencionar, porque está directamente relacionado con todo lo anterior.

La recta numérica natural tiene una propiedad tan básica que rara vez pensamos en ella: cada número tiene una posición definida en relación con cualquier otro.  100 es mayor que 2.  Siempre.  Inambiguamente.  Los matemáticos llaman a esto un *orden total* y es una de las propiedades más fundamentales que poseen los números.

Ahora intenta añadir infinito a esa línea.

La distancia de infinito a 100 es infinita.  La distancia de infinito a 2 también es infinita.  Desde la perspectiva del infinito, esas distancias son indistinguibles, lo que significa que 100 y 2 se vuelven, en un sentido preciso, equivalentes.  El orden se colapsa.  La propiedad que hace que la recta numérica sea útil simplemente no sobrevive al contacto con el infinito como un punto en esa recta.

El infinito no es compatible con la estructura ordenada de los números.  Añadirlo a la línea no la extiende.  Lo rompe.

**Sobre la jerarquía de infinitos de Cantor**

Cantor demostró que el conjunto de los números reales no puede mapearse uno a uno sobre el conjunto de los números naturales, y concluyó que algunos infinitos son estrictamente mayores que otros.  El argumento diagonal detrás de esta prueba es técnicamente irrefutable.  Pero la interpretación merece escrutinio.

Lo que Cantor demostró en realidad es que ciertos conjuntos infinitos no pueden ponerse en correspondencia entre sí de una manera particular.  Lo describió como una diferencia de *tamaño*.  Pero el tamaño es un concepto que pertenece al mundo finito — se define por comparación y ordenamiento, precisamente las propiedades que se desmoronan en el infinito.

El problema no es la prueba.  El problema es tomar la palabra *tamaño* de un dominio donde tiene un significado claro y aplicarla a un dominio donde los fundamentos de ese significado ya no son válidos.  El resultado se siente como un descubrimiento sobre cuán grandes son los diferentes infinitos.  Pero podría ser algo más modesto: una descripción de cómo ciertos conjuntos infinitos se comportan de manera diferente bajo correspondencia — una propiedad estructural, no un tamaño.

**El infinito no es grande. No es muy grande. No tiene tamaño en absoluto.**

Es el nombre para la ausencia de un límite: una dirección, no un destino.  Tratarlo como una cantidad que puede ser mayor o menor que otra cantidad es un error de categoría.  La jerarquía de infinitos es real como descripción de las diferencias estructurales entre conjuntos.  La interpretación de esa jerarquía como una clasificación por tamaño es una proyección de la intuición finita sobre algo que no tiene tamaño para clasificar.

Esto importa para lo que sigue. La ε-geometría nunca asigna tamaño al infinito, porque el infinito nunca aparece como un objeto en primer lugar.  Aparece solo como la dirección en la que se mueve ε cuando refinas.  La cuestión de si una infinidad es mayor que otra no se plantea, porque nada en el marco reifica la infinidad en algo que pudiera tener un tamaño.  El error de categoría se evita no resolviéndolo, sino nunca cometiéndolo.

---

## Resolución como artefacto

El cálculo se inventó para tratar curvas suaves que no tienen una estructura discreta natural.  Para encontrar la pendiente en un punto — donde no hay un segundo punto contra el cual medir — se construye un proceso límite: se acercan dos puntos cada vez más y se pregunta a qué valor se aproxima la pendiente.  Para encontrar el área bajo una curva, sumas infinitos rectángulos infinitamente delgados y te preguntas a qué se acerca esa suma.

Ambas operaciones fabrican la resolución como un dispositivo técnico.  El proceso límite es una forma de extraer una respuesta finita de un objeto infinito.  Todo el aparato teórico del cálculo — definiciones épsilon-delta, continuidad, diferenciabilidad, teoremas de convergencia — existe en gran medida para hacer rigurosa esa extracción.

Funciona.  Es genuinamente hermoso en algunos lugares.  Pero la complejidad no es inherente a las matemáticas.  Es un artefacto de una elección fundamental hecha al principio: construir la geometría sobre objetos lisos infinitos, y luego reconstruir laboriosamente la precisión finita cuando sea necesario.

**La resolución no es algo que produzca el cálculo. Es algo con lo que el cálculo debería haber comenzado.**

---

## Un punto de partida diferente

¿Qué pasaría si en lugar de definir un círculo como un conjunto infinito de puntos equidistantes de un centro, lo definiéramos como un conjunto finito de pequeños discos dispuestos en una curva cerrada — donde el tamaño de los discos *es* la resolución?

Este es el **círculo ε**.

---

## Un primer intento: El círculo ε

El primer instinto fue reemplazar el punto adimensional con algo de tamaño físico.  Si el problema es que los puntos no tienen extensión, dales extensión.  Define cada vértice de un polígono no como una ubicación sin dimensiones, sino como un pequeño disco de diámetro ε.  El círculo se convierte en un anillo de discos ε, cada uno tocando el siguiente, espaciados ε a lo largo del perímetro.

Llamemos a esto el círculo ε.  Para un radio R y una resolución ε, tiene n = 2πR / ε vértices.  El perímetro es un conteo directo:

```
P = n × ε = 2πR
```

Sin límite.  Sin proceso infinito.  Grande pero finito.  E inmediatamente, aparece algo útil: un triángulo, un cuadrado y un ε-círculo son ahora el mismo tipo de objeto — una colección finita de ε-discos conectados por aristas.  El círculo ya no es categóricamente diferente de un polígono.  Es un polígono cuyo número de vértices se establece por resolución en lugar de elegirse arbitrariamente.

La paradoja de la escalera también se disuelve limpiamente.  Una ε-diagonal coloca sus discos a lo largo de la dirección diagonal.  Una escalera los sitúa en ejes horizontales y verticales — no cumple la definición de una ε-aproximación válida, y el marco lo indica inmediatamente en lugar de producir una respuesta incorrecta silenciosa.

La idea es productiva.  Pero contiene un problema.

---

## Dónde falla el primer intento

El disco ε se introdujo para eliminar el punto adimensional.  Pero cada disco ε es en sí mismo un círculo — y un círculo es precisamente el objeto que el marco intentaba reemplazar.  La construcción toma prestado su propio primitivo como componente.  Eso no es una solución.  Es un retroceso.

Seguir esa grieta lleva a más:

**El problema del perímetro irregular.** En dos dimensiones, una forma construida a partir de discos tiene un perímetro que no es un borde limpio sino una superficie festoneada: los bordes redondeados de los discos producen una textura que no desaparece a resoluciones más finas.  En tres dimensiones, una superficie construida a partir de esferas no es hermética: aparecen huecos entre las esferas, por pequeños que sean.  En dimensiones superiores el problema se agrava.

**La ambigüedad de la intersección.** Cuando dos formas ε se encuentran, no hay una respuesta clara sobre dónde se intersectan exactamente.  ¿Comparten discos de límite?  Entonces un disco pertenece a ambas formas simultáneamente — un problema de propiedad.  ¿Se encuentran en los bordes de los discos?  Entonces la intersección está definida por el límite del disco, que es a su vez un círculo — y volvemos al problema del punto sin dimensiones a un nivel de abstracción más profundo.  Ninguna de las opciones disponibles es satisfactoria.

**La causa raíz.** El disco ε intentó resolver dos problemas separados simultáneamente — el círculo liso infinito y el punto sin dimensiones — haciendo que la unidad primitiva fuera un objeto de tamaño físico.  Pero un disco es una forma bidimensional con un límite, y ese límite conlleva los mismos problemas que el círculo original.  No se puede construir una geometría libre de primitivas circulares haciendo que los átomos sean circulares.

El primer intento localizó el problema con más precisión de lo que lo resolvió.  Lo cual, a su manera, es progreso.  Lo que revela el fracaso es que el problema no es el *tamaño* del primitivo.  Es algo más profundo: la suposición de que la geometría está construida a partir de *objetos* en absoluto, en lugar de a partir de *relaciones entre pasos*.

Esa realización es donde comienza el próximo ensayo.

---

## Lo que esto le hace al cálculo

El modelo de resolución sigue siendo independiente de la idea del disco ε.  Incluso sin una primitiva geométrica completamente resuelta, la observación central se mantiene: la resolución es un artefacto en el cálculo clásico, fabricado laboriosamente al final de un proceso de límite, cuando podría haber sido un parámetro declarado al principio.

Diferenciación como pendiente directa entre pasos adyacentes.  Integración como una suma finita.  El teorema fundamental como una relación inversa obvia entre la diferenciación y la suma.  Esto se deduce de hacer la resolución primitiva — no específicamente del disco ε.  Sobreviven a la enmienda.

Lo que estarías dispuesto a renunciar vale la pena decirlo honestamente.  El cálculo clásico tiene resultados limpios en forma cerrada — la derivada de sin es cos, la integral de x² es x³/3 — que dependen de la estructura suave e infinita.  En un marco basado en la resolución, esos se convierten en descripciones de familias estables en resolución en lugar de verdades exactas sobre objetos infinitos.  La taquigrafía sigue siendo válida.  Su estatus fundacional cambia.

---

## Dónde nos deja esto

El modelo de resolución es un diagnóstico sólido.  El ε-disco fue un desvío productivo — unificó polígonos y círculos bajo un mismo tipo, disolvió la paradoja de la escalera y convirtió la resolución en una propiedad visible de primera clase.  Pero introdujo de contrabando el mismo primitivo que intentaba reemplazar.

La pregunta correcta, que el fracaso obligó a enfocar, es esta: ¿y si lo primitivo no es un objeto con un tamaño, sino un *paso dirigido* — un movimiento en lugar de un lugar?  ¿Y si la geometría no se construye a partir de cosas que existen en lugares, sino de procesos que viajan entre ellos?

Esa pregunta, y a dónde lleva, es el tema de la siguiente parte.

---

*Esta es la parte 2 de una serie continua que explora cómo se ve la matemática cuando se cuestionan sus supuestos fundamentales desde los primeros principios.*

*Parte 1: [Las matemáticas en las que elegimos creer](/es/posts/post_01_mathematics_foundations)*
*Parte 3: [Geometría como proceso](/es/posts/post_03_geometry_as_process)*
