---
title: "Las matemáticas en las que elegimos creer"
series: "La geometría como proceso emergente"
seriesPart: 1
topic: "Fundamentos · Geometría · Filosofía"
date: "2026-04-12"
readingTime: "10 min"
description: "La geometría clásica comienza con un conjunto de supuestos sobre qué son los objetos geométricos.  Esas suposiciones no se derivaron, se eligieron.  Esta publicación examina tres de ellos."
status: "published"
---

La geometría comienza con un conjunto de supuestos sobre qué son los objetos geométricos: qué es un punto, qué es una línea, qué es un círculo.  Esas suposiciones no se derivaron de estructuras más primitivas dentro de la propia teoría.  Se introdujeron en contextos históricos y prácticos específicos, y luego se formalizaron en definiciones que ahora se tratan como fundamentales.

El plano euclidiano no fue seleccionado después de una comparación sistemática de alternativas; reflejaba la superficie sobre la que la gente ya estaba trabajando.  La línea infinita no se construyó a partir de objetos más básicos; surge naturalmente de extender una dirección indefinidamente.  El punto adimensional no aparece en la experiencia física; es una idealización obtenida al llevar la noción de "ubicación" a un límite.

Esta publicación examina tres de estas suposiciones y pregunta si son tan necesarias como parecen.  El argumento no es que la geometría clásica esté equivocada.  Es que algunas características que a menudo se tratan como intrínsecas podrían, en cambio, reflejar el marco en el que se formuló por primera vez la geometría.

Lo que sigue se obtuvo no a través de un programa de doctorado, sino a través del diseño gráfico y la programación.  Eso resultó ser un punto de partida productivo.  Los problemas prácticos que diseñadores y programadores resolvieron de forma independiente convergieron, más de una vez, en formulaciones a las que la geometría académica se había acercado desde una dirección diferente.  Esa convergencia merece ser tomada en serio.

---

## El punto no existe como primitivo

Euclides definió un punto como "aquello que no tiene partes". Sin ancho.  Sin altura.  Sin profundidad.  Pura ubicación, sin sustancia.

Luego usó puntos para construir líneas, líneas para construir planos y planos para construir espacio.  Surge una pregunta natural: ¿cómo una colección de objetos sin extensión da lugar a algo con longitud?  En las matemáticas modernas, esto se aborda tratando una línea no como una suma de puntos en un sentido literal, sino como un conjunto estructurado dotado de propiedades adicionales (topología, medida, orden).  La construcción resultante es internamente consistente, pero se basa en un marco en el que las colecciones infinitas y los procesos límite son fundamentales.

Si uno intenta interpretar los puntos como entidades físicas que se mueven y trazan trayectorias, surgen dificultades.  En la geometría formal, sin embargo, los puntos no se tratan como objetos que generan líneas a través del movimiento, sino como elementos dentro de una estructura que define qué es una línea.

La misma tensión aparece en física: el electrón modelado como una partícula puntual conduce a cantidades divergentes, y los físicos desarrollaron procedimientos para gestionar estos infinitos.  Algunos enfoques, como la teoría de cuerdas, reemplazan los objetos puntuales con objetos extendidos para evitar estos problemas, lo que sugiere que el malestar con las primitivas sin dimensiones no es meramente filosófico.

Al momento de escribir esto, el problema era claro pero la solución no.  El marco desarrollado en las últimas partes de esta serie no intenta reparar el punto como una primitiva; lo elimina por completo.  Los objetos se definen como clases de equivalencia de procesos relacionales finitos, y no se necesita ni se invoca ninguna primitiva adimensional.

La incomodidad con las primitivas adimensionales no es exclusiva de este planteamiento — los matemáticos llevan mucho tiempo conscientes de estas tensiones, y existen varios enfoques que las abordan de diferentes maneras.  Lo que es específico aquí es el camino tomado: construir estructura geométrica a partir de pasos finitos componibles, y dejar que las propiedades métricas emerjan de esas reglas en lugar de asumirlas desde el principio.

---

## El infinito está incrustado en objetos geométricos

El problema del punto es un caso particular de un compromiso geométrico más amplio: la infinitud está integrada en los primitivos.

La línea es infinita en dos aspectos: se extiende sin límites en ambas direcciones y es infinitamente divisible.  Entre dos puntos cualesquiera de ella siempre hay otro.  Ambas propiedades requieren infinito real, no simplemente como herramienta de cálculo, sino como característica del modelo.

La pregunta que vale la pena considerar es si esas propiedades son genuinamente parte de lo que una línea *es*, o si surgen de trabajar dentro de un marco que asume la infinitud desde el principio.  Un segmento de línea de longitud finita, compuesto por un número finito de pasos, puede aproximar muchas propiedades de una línea con precisión arbitraria en entornos prácticos; la extensión infinita y la divisibilidad infinita no se observan directamente, sino que se infieren dentro del modelo.

Aquí hay una forma alternativa de pensarlo, tomada del diseño gráfico.  Cuando trabajas con imágenes digitales, trabajas con una resolución, un nivel de detalle por debajo del cual un refinamiento adicional no produce ninguna diferencia perceptible.  No necesitas infinitos píxeles para que una fotografía parezca suave.  Necesitas lo suficiente para que los adicionales no cambien significativamente la imagen.

Una idea similar se puede aplicar geométricamente.  En lugar de tratar una línea como infinitamente divisible en principio, se pueden considerar modelos en los que la resolución es un parámetro explícito, no una propiedad intrínseca del objeto, sino parte de cómo se representa u observa.

Esto comenzó como una intuición proveniente de un dominio práctico.  Resultó apuntar hacia una formulación más precisa, una en la que la resolución es externa al objeto mismo.  Ese desarrollo pertenece a las partes posteriores de esta serie.

---

## El círculo no es el mismo tipo de cosa que un triángulo

Pídale a la mayoría de la gente que enumere formas geométricas: triángulo, cuadrado, pentágono, círculo.  Se sienten como compañeros naturales, miembros de la misma categoría.

Pero considera qué hace que un triángulo sea un triángulo.  Tiene tres lados.  Tres vértices.  Una estructura discreta, finita y contable.  Puedes construir uno en un número finito de pasos.  A medida que añades más lados, la forma se acerca a un círculo, pero nunca llega a serlo.  Un polígono regular con un millón de lados sigue siendo un polígono.  No es un círculo.

El círculo no es un polígono con infinitos lados.  Es lo que los polígonos pueden aproximar, pero nunca realizar completamente dentro de esta construcción.

El círculo pertenece a una categoría diferente en la formulación clásica: no es una figura discreta construible, sino lo que los matemáticos llaman un *objeto límite*.  Algo definido como el resultado de un proceso limitante en lugar de una construcción finita.  Arquímedes lo entendió intuitivamente cuando aproximó π calculando los perímetros de polígonos con un número creciente de lados.  No estaba construyendo un círculo directamente; se estaba acercando a uno.

La idea de modelar un círculo mediante estructuras discretas finitas no es nueva — es una herramienta familiar en matemáticas.  La pregunta que persigue esta serie es diferente: no si tales modelos existen, sino si la resolución misma puede tratarse como algo externo a lo que la forma *es*, en lugar de una propiedad a la que la forma se aproxima en el límite.

El marco desarrollado más adelante en esta serie retoma esta distinción.  Sugiere que la diferencia entre polígonos y círculos podría no residir en su naturaleza fundamental, sino en cómo se representan y comparan.  En ese contexto, las estructuras que parecen continuas pueden modelarse utilizando relaciones cíclicas finitas, con la resolución tratada como un parámetro externo en lugar de una propiedad intrínseca del objeto.

---

## Lo que estas tres tienen en común

El punto, la línea infinita y el círculo continuo no son opciones independientes.  Forman un sistema.  Cada uno depende de los demás, y los tres implican un compromiso con el infinito como parte del modelo subyacente, en lugar de simplemente como un proceso limitante.

Si ese compromiso se relaja, estas primitivas se reinterpretan.  El punto ya no es necesario como elemento de partida adimensional.  La línea se puede modelar con estructura y resolución finitas tratadas externamente.  El círculo puede entenderse en términos de relaciones cíclicas, en lugar de como un objeto inherentemente continuo.

Lo que queda es la estructura relacional —la forma, la simetría, el patrón de conexiones— sin requerir que esas características estén sustentadas por un compromiso explícito con primitivas infinitas.

Si esto constituye una mejor base para la geometría es la pregunta que esta serie explora.  La respuesta, desarrollada a lo largo de las publicaciones siguientes, es que relajar el papel de los primitivos infinitos no disminuye la geometría.  Aclara qué propiedades son intrínsecas y cuáles dependen del marco utilizado para describirlas.
