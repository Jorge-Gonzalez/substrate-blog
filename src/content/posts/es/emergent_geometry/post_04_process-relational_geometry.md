---
title: "Cómo se ve La Geometría Desde Esta Perspectiva"
series: "La Geometría como un Proceso Emergente"
seriesPart: 4
topic: "Fundamentos · Geometría · Filosofía"
date: "2026-04-15"
readingTime: "14 min"
description: "Las tres publicaciones anteriores identificaron problemas, intentaron una solución y propusieron un marco. Esta publicación explica qué es realmente el marco, qué elimina, qué revela y a dónde apunta."
status: "published"
---

La primera publicación de esta serie identificó tres primitivas geométricas —el punto sin dimensiones, la línea infinita, el círculo continuo— y argumentó que cada una conlleva supuestos importados de las condiciones históricas y cognitivas bajo las cuales se practicó por primera vez la geometría, no de ninguna necesidad inherente a la geometría misma.  El segundo post intentó solucionar uno de esos problemas y fracasó honestamente.  El tercero propuso un punto de partida diferente: una geometría construida a partir de movimientos en lugar de ubicaciones, de reglas en lugar de objetos.

Lo que esas tres publicaciones no hicieron fue declarar llanamente cuál es el marco, qué logra y qué sugiere.  Eso es lo que hace esta publicación.

---

## I. Qué es realmente el Marco

El marco comienza con una pregunta simple: ¿qué es lo mínimo que necesitas especificar para definir un objeto geométrico?

La respuesta clásica es: un espacio, y la ubicación del objeto dentro de él.
Un círculo es un conjunto de puntos equidistantes de un centro en algún plano ambiente.  Un triángulo son tres puntos conectados por segmentos de línea.  El espacio es lo primero, el objeto se coloca dentro de él, y la descripción solo está completa cuando ambos están presentes.

La respuesta relacional es diferente.  Comienza con un conjunto de relaciones primitivas: operaciones básicas componibles, los movimientos más simples disponibles en el sistema.  A partir de estos, construye configuraciones: secuencias finitas de relaciones compuestas de principio a fin, como pasos en un camino.  Dos configuraciones son equivalentes si ninguna composición adicional puede distinguirlas — si cada prueba relacional que puedas construir produce el mismo resultado para ambas.  Los objetos son las clases de equivalencia que resultan: todas las configuraciones que se comportan idénticamente bajo cualquier prueba, agrupadas en una sola cosa.

Esa es la descripción completa.  No hay espacio.  Sin coordenadas.  No, incrustación.  No procesos infinitos.  Solo relaciones finitas, composiciones finitas y la equivalencia que agrupa las indistinguibles.

El círculo es el ejemplo más limpio.  Toma una única relación primitiva $a$ — un paso adelante.  Construye todas las configuraciones posibles: $a$, $a$ compuesta con $a$, $a$ compuesta tres veces, y así sucesivamente.  Ahora imponga una ley: después de $n$ pasos, vuelve a donde empezó.  Esa ley — $a^n \sim \mathrm{id}$ — es todo el contenido geométrico del círculo.  Las clases de equivalencia resultantes son $n$ objetos dispuestos en un ciclo, cada uno a un paso del siguiente, volviendo al inicio.  Este es $\mathbb{Z}/n\mathbb{Z}$: el círculo discreto de resolución $n$.

No avión.  Sin arco.  Sin coordenadas.  No divisibilidad infinita.  El círculo
está plenamente presente —su cierre, su simetría, su estructura cíclica—
en una única ley relacional.

La congruencia es el motor que hace el trabajo.  Es la relación de equivalencia que separa las configuraciones que se comportan idénticamente de las que no.  Elegir una congruencia diferente produce un objeto geométrico diferente.  La misma relación primitiva $a$ con la ley $a^m \sim \mathrm{id}$ para un $m$ diferente produce un círculo diferente.
Añadir una segunda relación primitiva $b$ con conmutación y periodicidad independiente produce un toro.  Eliminar la conmutación y permitir que las dos relaciones interactúen de forma no trivial produce curvatura.  La geometría está enteramente en la elección de las leyes.

El marco formal hace esto preciso.  Para sistemas de un solo generador — una relación primitiva, una congruencia — el tipo de isomorfismo del objeto geométrico resultante está completamente determinado por un par de invariantes $(n, k)$: el período (cuántos pasos antes de cualquier retorno) y el orden de desplazamiento (cuánta estructura de bucle interno está presente dentro de ese período).  Diferentes pares producen objetos no isomorfos; el mismo par siempre produce objetos isomorfos.  Para la clase más amplia de sistemas relacionales finitos, el marco es demostrablemente equivalente a toda la geometría métrica finita: cada espacio métrico finito surge de un sistema relacional, y la correspondencia es una equivalencia de categorías.  La afirmación de que la geometría está en la elección de las leyes no es solo una posición filosófica, es un resultado probado.

---

## II. Las tres cosas que siempre fueron externas

Una vez que el marco está en su lugar, tres propiedades que la geometría clásica trata como intrínsecas a los objetos geométricos se vuelven visiblemente externas a ellos.

Estos tres no son independientes entre sí; se basan uno en otro en un orden específico.  La métrica es la más fundamental: es la regla que define lo que significa comparación.  El tamaño es una métrica aplicada con una unidad de referencia elegida; no se puede tener tamaño sin una métrica, pero se puede tener una métrica sin un tamaño fijo, ya que la misma métrica produce diferentes tamaños dependiendo de la unidad que se utilice.  La posición va más allá: requiere no solo una métrica, sino también un origen y una orientación elegidos, una ubicación de referencia además de una regla para medir la distancia.  Dos observadores que comparten la misma métrica pero anclan sus coordenadas de manera diferente asignarán posiciones distintas al mismo objeto.

Así que los tres forman una dependencia: métrica primero, luego tamaño, luego posición.
Los tres son externos al objeto relacional.  Pero la geometría clásica importa las tres simultáneamente a través del sistema de coordenadas, razón por la cual es tan fácil pasar por alto su distinción —y su separación del objeto mismo—.

Posición.  En el marco relacional, un objeto geométrico no tiene ubicación.  El círculo definido por $a^n \sim \mathrm{id}$ no está en ninguna parte.
Es un patrón de relaciones.  La posición solo aparece cuando el objeto se coloca en un marco de referencia, es decir, cuando un contexto externo proporciona un punto de partida y una orientación.  La posición no es una propiedad del círculo.  Es una propiedad de la relación entre el círculo y cualquier contexto en el que esté incrustado.  La geometría clásica fusiona las dos porque el espacio ambiente siempre estaba ya presente.  El marco relacional los separa por construcción.

Tamaño.  El círculo tiene $n$ pasos.  Pero $n$ tampoco es intrínseco.
Es una razón: la circunferencia del círculo medida en unidades del tamaño del paso.  Cambia el tamaño del paso y $n$ cambia; el círculo no.
Un círculo discreto con 6 pasos y uno con 600 pasos son el mismo objeto relacional observado a diferentes resoluciones: el mismo patrón de cierre bajo un proceso uniforme y repetitivo, visto a diferentes granularidades.  El tamaño siempre es una comparación entre el objeto y una referencia externa.  Pertenece al contexto de la medición, no al objeto en sí.

Métrico.  La regla para medir la distancia entre objetos no está fijada por la estructura relacional.  La función de peso que asigna costos a las relaciones —y que define así la distancia como la ruta de menor costo— es una elección adicional, impuesta a la estructura desde fuera.
Diferentes funciones de ponderación producen diferentes métricas sobre el mismo sustrato relacional.  La métrica euclidiana es una de esas opciones.  No es la natural ni la necesaria; es la que coincidía con la experiencia física de los humanos que formalizaron la geometría por primera vez.  Su aparente necesidad es un artefacto de esa historia.

El marco formal hace que la afirmación métrica sea lo más sólida posible: el Teorema de la Reconstrucción demuestra que cualquier espacio métrico finito puede codificarse como un sistema relacional con una función de peso apropiada.  Esta es la versión formal del argumento de que las métricas son externas.  Cualquier métrica es expresable relacionalmente, pero la codificación siempre refleja una elección contextual, y una métrica externa diferente impuesta por un observador diferente daría como resultado una presentación relacional diferente de la misma estructura subyacente.  El marco no hace que la métrica sea intrínseca.  Hace explícita la elección que la geometría clásica dejó implícita.

---

## III. Descripción y Objeto

Con la posición, el tamaño y la métrica reubicados en el contexto externo, lo que permanece intrínseco a un objeto geométrico es exactamente su patrón compositivo: las leyes relacionales que definen su congruencia.

Esto tiene una consecuencia precisa y sorprendente.  El objeto geométrico y la regla que lo genera son descripciones equivalentes de la misma cosa.  Conocer la ley composicional —la congruencia— determina completamente el objeto.  Conocer el objeto hasta la indistinguibilidad relacional determina completamente la ley.  Hay una biyección entre los dos.

En el marco formal, esto no es solo una observación, sino el contenido de un teorema de equivalencia categórica.  Después de identificar los sistemas relacionales que producen la misma estructura métrica, el marco se vuelve equivalente, como categoría, a la categoría de espacios métricos finitos.  La biyección entre descripción y objeto no es una metáfora filosófica.  Es un resultado estructural probado: los sistemas relacionales son una teoría de presentación para espacios métricos, y la geometría es el contenido invariante de la presentación.

Esto significa que razonar sobre la regla se transfiere directamente a razonar sobre la geometría.  Las propiedades algebraicas de la congruencia son propiedades geométricas del objeto, y viceversa, sin ninguna brecha entre la descripción formal y la realidad geométrica.  La brecha solo apareció porque la geometría clásica incorporaba material externo —el espacio ambiente, el sistema de coordenadas, la métrica— como parte de la definición del objeto.  Quita eso y la descripción y el objeto coinciden.

Una consecuencia adicional: la complejidad de un objeto geométrico es exactamente la complejidad de su regla generadora.  Una regla simple — un generador, una ley — produce un objeto simple.  Una regla compleja produce un objeto complejo.  No hay complejidad geométrica oculta que la regla no logre capturar, y no hay complejidad de la regla que no corresponda a la estructura geométrica.  Simplicidad y complejidad son lo mismo visto desde dos ángulos.

---

## IV. Lo que esto unifica

La geometría clásica no es una sola teoría.  Es una familia de teorías —euclidiana, hiperbólica, esférica, proyectiva y otras— cada una con sus propios axiomas, sus propios primitivos, sus propios teoremas.  La relación entre ellos siempre ha sido un tanto incómoda: comparten una gran cantidad de estructura pero se presentan como fundamentalmente separados, relacionados por transformaciones o incrustaciones especiales.

En el marco relacional no están separados.  Son el mismo sustrato relacional —el mismo tipo de objeto, definido por el mismo tipo de reglas— equipado con diferentes parámetros externos.  La geometría euclidiana es la estructura relacional con una elección específica de métrica, un marco de referencia específico y una escala específica.  La geometría hiperbólica es la misma estructura relacional con una elección métrica diferente.  La geometría esférica es otra parametrización del mismo patrón subyacente.

El marco demuestra esto concretamente a lo largo de todo el espectro de curvatura.  Un sistema de un solo generador sin ley de cierre ni composición ramificada produce una estructura con crecimiento exponencial del volumen y geodésicas únicas, la firma de la curvatura negativa (hiperbólica).
Un sistema de dos generadores con generadores conmutativos y leyes periódicas produce una estructura plana donde los bucles cerrados regresan sin desviación.
Una triangulación finita de la esfera produce una estructura con caminos reconvergentes y un diámetro finito — curvatura positiva.  Los tres surgen del mismo marco compositivo.  Lo que difiere no es el tipo de objeto sino la elección de las leyes relacionales.  La aparente multiplicidad de tipos de curvatura clásicos no es una multiplicidad de estructuras subyacentes, sino una multiplicidad de elecciones de reglas sobre la misma base.

La aparente multiplicidad colapsa en un único marco con una familia de opciones contextuales.  Esta no es la unificación al encontrar una estructura más grande que contenga todas las clásicas como casos especiales — eso añadiría complejidad.  Es la unificación eliminando las capas contextuales que los hacían parecer distintos en primer lugar.

---

## V. El patio de recreo

El marco es computacional por naturaleza.  Las formas son reglas.  Las reglas son finitas, discretas, computables.  Ejecutar una regla produce una forma.  Esto significa que el marco puede ser demostrado directamente en lugar de simplemente descrito.

La herramienta interactiva a continuación te permite explorar la correspondencia entre la regla y el objeto directamente.  Usted especifica una función de desviación $\delta(n)$ — la regla que rige cómo cada paso se relaciona con el anterior — y observa cómo emerge la forma resultante.  Cambia la función y la forma cambia.  La misma forma puede ser producida por diferentes funciones; diferentes formas siempre requieren diferentes funciones.  La biyección entre la regla y el objeto es algo que puedes ver y manipular en lugar de solo leer al respecto.

Algunas cosas que vale la pena probar:

Una constante $\delta$ produce polígonos regulares.  Aumentar el número de pasos y la resolución del círculo aumenta — el mismo patrón relacional con mayor granularidad.  Una distancia de paso que crece exponencialmente con $\delta$ constante produce la espiral logarítmica.  Una $\delta$ sinusoidal produce curvas en forma de onda con curvatura alternada.  En cada caso, la forma está completamente determinada por la función.  No hay nada más.

El patio de recreo también hace visibles los parámetros externos.  El tamaño del paso $d$ y la dirección inicial $\theta$ se pueden ajustar independientemente de la regla.  Cambiarlos cambia el tamaño y la orientación de la forma sin alterar su identidad relacional.  La separación entre intrínseco y contextual no es solo una afirmación filosófica, sino una característica directamente observable de la construcción.

*[Parque infantil interactivo incrustado aquí]*

---

## VI. Lo que esto abre

El marco no es una teoría terminada.  Es un punto de partida.  Varias direcciones se desprenden de lo que se ha establecido aquí —matemáticas, computacionales, físicas, filosóficas— y algunas de las conexiones que aparecieron en el camino no formaban parte de la pregunta original en absoluto.

Esas conexiones son el tema de la siguiente parte de esta serie.

---

## VII. Creado o Descubierto, Revisado

La primera publicación de esta serie comenzó con una pregunta que se dejó deliberadamente sin respuesta: ¿las matemáticas se crean o se descubren?

Platón creía que lo estaba descubriendo.  Las formas —las estructuras eternas bajo las apariencias de las cosas— estaban allí esperando, y el trabajo del filósofo era ver a través de la superficie y alcanzarlas.  Euclides, partiendo de una convicción similar, formalizó la geometría de su mundo como si estuviera transcribiendo leyes que existían independientemente de cualquier mente que pudiera observarlas.  El punto, la línea, el círculo no fueron invenciones.  Eran sofía: estructura profunda hecha visible.

Y quizás tenían razón sobre el sentimiento.  Cuando una consecuencia necesaria se deriva de un conjunto de leyes, hay algo que genuinamente no se siente inventado.  El círculo discreto $\mathbb{Z}/n\mathbb{Z}$ no se elige; es lo que resulta cuando se impone la única ley $a^n \sim \mathrm{id}$ a un sistema con un solo generador.  Ese sentido de necesidad es real.  Hay algo ahí.

Pero esta serie ha estado argumentando, desde el principio, que algunas de las cosas que Euclides transcribió como fundamentales no lo eran en absoluto.
El punto sin extensión, la línea infinita en ambas direcciones, el círculo como objeto límite categóricamente distinto de los polígonos: estas se sintieron como descubrimientos de estructura profunda.  Eran, en parte, formalizaciones de las condiciones cognitivas y prácticas de un mundo particular: la experiencia del espacio continuo y suave, el hábito de la medición, la geometría de las superficies en las que la gente ya vivía.  Lo que parecía Sofía era en parte el mundo mediterráneo hecho riguroso.

La inquietante implicación no es que Platón y Euclides simplemente estuvieran equivocados.  Es que no podían ver sus propias suposiciones desde dentro.  Las suposiciones eran invisibles precisamente porque estaban tan profundamente arraigadas.  No parecían opciones.  Parecían la forma en que son las cosas.

Y aquí estamos, haciendo el mismo tipo de afirmación.  El marco relacional desarrollado en estas publicaciones identifica supuestos en la geometría clásica que la geometría clásica no podía ver.  Hace visibles ciertas cosas que antes eran invisibles.  Pero lo hace desde dentro de un momento particular, moldeado por la computación digital, por la experiencia de trabajar con estructuras discretas finitas, por conceptos que estuvieron disponibles en un punto específico del desarrollo de las matemáticas y la tecnología.  Lo que nos parece una descripción más fundamental de los objetos geométricos podría parecer, desde una perspectiva futura, otra capa de encuadre condicionado históricamente.  Las cosas que no podemos ver desde aquí son, por definición, cosas que actualmente no podemos nombrar.

Esta no es una razón para detenerse.  Es la postura epistémica correcta hacia cualquier trabajo fundamental: hacer las suposiciones lo más explícitas posible, reducir lo que se da por sentado, permanecer genuinamente abierto a la posibilidad de que incluso las categorías que se utilizan para hacer eso —intrínsecas, contextuales, relacionales, emergentes— sean en sí mismas parte de lo que se aportó a la investigación en lugar de encontrarse en ella.

La cuestión de si las matemáticas se crean o se descubren puede no tener una respuesta que nuestra naturaleza como perceptores nos permita alcanzar plenamente.
Encontramos cosas desde nuestra perspectiva interior.  Si lo que encontramos nos estaba esperando, o si el hallazgo dio forma al hallazgo, es una pregunta que no podemos responder saliendo de nosotros mismos.

Lo que podemos hacer es reconocer humildemente esa condición y encontrar algo que valga la pena celebrar en ella.  Las matemáticas nunca han sido un destino fijo.  Siempre ha sido un proceso de preguntas que abren a mejores preguntas, marcos que revelan los límites de los marcos anteriores, cada generación viendo un poco más lejos al pararse sobre lo que la anterior construyó.  Las suposiciones que no podemos ver hoy se harán visibles para alguien.  Las estructuras que se sienten más fundamentales ahora mismo serán el punto de partida para una investigación futura que no podemos anticipar.  Eso no es una limitación de la empresa.  Es lo que lo hace vivo.

Hay una satisfacción particular en el trabajo fundamental que no proviene de cerrar preguntas, sino de abrirlas con mayor precisión.
Este marco no ofrece sabiduría.  Le da a la siguiente persona una visión más clara de lo que queda por encontrar, y eso, en las matemáticas que aún estamos en proceso de crear, es un tipo de descubrimiento en sí mismo.

---

El desarrollo matemático formal de este marco —definiciones precisas, el teorema de la construcción del cociente, la emergencia métrica, los teoremas de reconstrucción y equivalencia categórica, la clasificación de congruencias y los resultados del puente de Gromov-Hausdorff— se presenta en el artículo complementario: Una base procesual-relacional para la geometría.