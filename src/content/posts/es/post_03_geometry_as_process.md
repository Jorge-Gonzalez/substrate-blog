---
title: "Geometría como proceso: dirección, distancia y una regla"
series: "Las matemáticas en las que elegimos creer"
seriesPart: 3
topic: "Fundamentos · Geometría · Computación"
date: "2026-04-14"
readingTime: "14 min"
description: "¿Qué pasaría si la geometría no se construyera a partir de objetos en ubicaciones, sino a partir de movimientos? Tres parámetros — dirección, distancia y una función de desviación — resultan ser suficientes para construir cualquier forma geométrica, conectarse con el análisis de Fourier y reflejar la estructura de una máquina de Turing."
status: "published"
---

# Geometría como proceso: dirección, distancia y una regla

**Serie:** Las matemáticas en las que elegimos creer — Parte 3
**Tema:** Fundamentos · Geometría · Computación
**Fecha:** Abril de 2026
**Tiempo de lectura:** 14 min

---

## El giro equivocado valió la pena tomarlo

La última parte terminó con un fracaso.  El disco ε — que reemplaza los puntos adimensionales por discos de tamaño físico — fue un primer paso razonable.  Unificó polígonos y círculos bajo un solo tipo, disolvió la paradoja de la escalera y convirtió la resolución en una propiedad visible de primera clase.  Pero cada disco era en sí mismo un círculo, y un círculo era exactamente el objeto que el marco intentaba reemplazar.  La construcción tomó prestado su propio primitivo.  El retroceso fue real.

Lo que el fracaso hizo — y esta es la parte que vale la pena conservar — fue localizar el problema con mayor precisión.  El problema nunca fue el *tamaño* de la primitiva.  Era algo más profundo: la suposición de que la geometría se construye a partir de *objetos que se encuentran en ubicaciones*.  Cosas que existen en algún lugar del espacio y tienen propiedades.  Esa suposición está tan arraigada en la geometría clásica que es casi invisible.

Pero una vez que lo ves, se abre una pregunta diferente.  ¿Y si la geometría no está construida a partir de objetos en absoluto?

¿Y si está construida a partir de *movimientos*?

---

## El nautilus no conoce su ecuación

Antes de entrar en el marco, una observación en la que vale la pena detenerse.

La concha de un nautilus crece como una espiral logarítmica.  Las matemáticas clásicas describen esto con una ecuación: r = ae^(bθ) en coordenadas polares.  La ecuación es elegante.  Pero el nautilus no lo sabe.  La cáscara no consulta un sistema de coordenadas ni resuelve para r dado θ.

Lo que hace el nautilus es mucho más simple: cada nueva cámara se construye en un ángulo fijo con respecto a la anterior, escalado por una proporción constante.  Esa es toda la regla.  La espiral logarítmica no es la instrucción — es el resultado.  La forma global emerge de un proceso local repetido una y otra vez.

Este patrón aparece en todas partes de la naturaleza.  Los copos de nieve se ramifican según una regla aplicada a cada escala.  Las bifurcaciones de los árboles ocurren en ángulos consistentes.  Los brazos de las galaxias siguen la misma lógica que el nautilus.  El ADN es una secuencia de pasos químicos.  La naturaleza no describe sus formas desde el exterior con ecuaciones.  Las hace crecer desde dentro con reglas.

Las matemáticas clásicas construyeron su geometría de arriba abajo: primero la ecuación, luego la curva, luego los puntos.  Lo que sigue es un intento en la dirección opuesta — primero el paso, luego la regla, luego la forma.

---

## Tres parámetros

Una forma, en este marco, se define por tres cosas:

**d** — la distancia de cada paso

**θ** — la dirección inicial

**δ(n)** — una función que describe cómo cambia la dirección en cada paso

Eso es todo.  Una forma es la trayectoria producida al seguir estos parámetros desde un punto de anclaje inicial.  La función de desviación δ(n) es el motor generativo: toma el número de paso y devuelve cuánto girar antes del siguiente paso.  Cuando δ es constante, la forma es regular.  Cuando δ es una función, la forma se curva, se espirala u oscila dependiendo de lo que haga la función.

Un triángulo son tres pasos, cada uno girando 120°.  Un cuadrado tiene cuatro pasos, cada uno girando 90°.  Un círculo es lo que obtienes al aumentar el número de pasos mientras disminuyes cada giro proporcionalmente — no es un tipo de objeto separado, sino simplemente la familia de polígonos regulares llevada a una resolución más fina.  Y una concha de nautilus es una secuencia de pasos donde la distancia crece exponencialmente mientras que el giro permanece fijo.

El mismo marco.  Los mismos tres parámetros.  Todo sigue.

---

## Ya has visto esto antes

Aquí es donde sucede algo interesante.  Si alguna vez has abierto una aplicación de gráficos vectoriales — Illustrator, Inkscape, Figma — o has mirado dentro de un archivo SVG, ya te has encontrado con este marco.  Simplemente no sabías que era eso.

SVG no almacena las formas como colecciones de puntos.  Los almacena como secuencias de comandos:

```
M 100 100    ← mover al ancla inicial
L 200 100    ← línea a: un paso, dirección fija
A 50 50 ...  ← arco: paso con δ constante
C 150 50 ... ← curva: paso con δ variable a través de puntos de control
Z            ← cerrar ruta: volver al ancla
```

El movimiento, la línea, el arco, la curva — todos estos son pasos dirigidos.  El camino es una secuencia de movimientos.  La forma es la trayectoria.  Quienquiera que haya diseñado el formato SVG estaba resolviendo un problema práctico — ¿cómo representar la geometría de forma compacta e inequívoca para una computadora? — y llegó a los vectores y comandos en lugar de a los conjuntos de puntos.  No por la filosofía.  Porque funcionaba mejor.

Canvas en el navegador funciona de la misma manera.  También lo hace PostScript, el formato que definió la impresión moderna.  También lo hace la tortuga en Logo, el lenguaje diseñado para enseñar geometría a los niños dirigiendo un pequeño robot con comandos de movimiento y giro.

Todas estas ideas convergieron de forma independiente en la misma conclusión: la geometría se describe mejor como un proceso que como un conjunto de ubicaciones.  La justificación filosófica nunca fue el punto de partida — la necesidad práctica llegó primero.  Esa convergencia no es una coincidencia.  Es evidencia de que el marco está rastreando algo real.

---

## Lo que producen las diferentes reglas

Vale la pena detenerse en el poder de hacer que δ sea una función en lugar de una constante, porque el rango de lo que resulta es sorprendente.

**δ(n) = constante** te da polígonos regulares que se acercan a un círculo a medida que n crece.  Terreno conocido.

**d(n) crece linealmente, δ constante** — cada paso ligeramente más largo que el anterior — te da una espiral de Arquímedes.  La forma de una cuerda enrollada colocada plana, o el surco de un disco de vinilo.

**d(n) crece exponencialmente, δ constante** te da una espiral logarítmica.  El nautilus.  El brazo de la galaxia.  La curva que aparece dondequiera que el crecimiento se acumula sobre sí mismo.  El comportamiento logarítmico no es impuesto por una ecuación — emerge de la regla.

**δ(n) = sin(n)** produce una curva en forma de onda, alternando la curvatura — doblándose a la izquierda, luego a la derecha, y luego a la izquierda de nuevo en un ritmo regular.

**δ(n) = k/n** da una curva que se endereza gradualmente — la espiral de Euler, utilizada en ingeniería de carreteras y ferrocarriles para hacer una transición suave entre una carretera recta y una curva.  Los ingenieros llegaron a ella por necesidad práctica.  Aquí se deduce como una elección específica de δ(n).

La geometría clásica trata estos objetos como entidades completamente separadas — cada una con su propia definición, su propia ecuación, su propio capítulo.  Aquí son todos lo mismo, diferenciados solo por qué función le das a δ(n).  La diversidad se reduce a variaciones sobre un solo tema.  Ese tipo de unificación suele ser una señal de que has encontrado el nivel de abstracción correcto.

---

## Curvas irregulares: composición hasta el final

Una sola función δ(n) produce un segmento regular — con curvatura uniforme en toda su extensión.  Una curva irregular es una *composición* de segmentos regulares, cada uno con su propio δ, unidos en las intersecciones.

La única información adicional en cada cruce es cuán bruscamente cambia la regla — un solo número.  Todo lo que hay entre las uniones está completamente determinado por tres parámetros.  La complejidad de toda la curva reside en las transiciones de las uniones, no en los segmentos en sí.

Así es como los gráficos por computadora ya manejan las curvas en la práctica.  Una spline es una secuencia de segmentos polinómicos unidos con condiciones de suavidad en los nodos.  Una ruta Bezier en Illustrator es una serie de segmentos de curva, cada uno definido por un pequeño número de parámetros de control.  La composición no es una idea nueva para el software gráfico — es el fundamento sobre el que se construye el software gráfico.  De nuevo, la necesidad práctica llegó a la respuesta correcta antes de que la filosofía la alcanzara.

Lo que esto también significa es que el costo de almacenamiento de una curva es proporcional a su *complejidad composicional* — cuántos segmentos regulares distintos contiene — no a su longitud o resolución.  Una curva suave y gradual necesita muchos segmentos con pequeños cambios en las uniones.  Una curva construida a partir de arcos y líneas rectas necesita muy pocos.  Una curva verdaderamente arbitraria sin ningún patrón subyacente genuinamente requiere almacenar cada paso.  Lo cual es honesto — tal curva realmente contiene más información.  El marco hace visible la complejidad en lugar de ocultarla dentro del formalismo.

---

## La forma no tiene ubicación

Aquí está el movimiento que completa el marco, y llegó desde una dirección inesperada en la conversación que produjo estas ideas.

Una forma definida por d, θ y δ(n) no tiene posición.  La regla describe cómo se relacionan los pasos entre sí — sus direcciones y distancias relativas.  No dice nada sobre dónde en el espacio comienza la secuencia.  Un triángulo definido como tres pasos girando 120° es el mismo triángulo independientemente de dónde lo dibujes.  Su identidad es su regla interna, no su ubicación.

La geometría clásica lo sabe informalmente — se llama congruencia — pero el formalismo no lo refleja porque las coordenadas están incorporadas desde el principio.  Cada punto tiene una ubicación absoluta.  La forma y su posición son inseparables en el objeto matemático, aunque conceptualmente sean completamente distintas.

En este marco, están separados por construcción.  La forma es la regla.  Su posición se proporciona externamente — por cualquier contexto que la ubique — como un *vector de ubicación*.  Un movimiento dirigido desde un ancla de referencia hasta el paso inicial de la forma.  No un punto.  Un vector.  El mismo tipo primitivo que todo lo demás.

Esto tiene una consecuencia silenciosa pero importante: no hay puntos adimensionales en ninguna parte del sistema.  Ni siquiera en el origen.  El ancla inicial no es una primitiva geométrica — es una etiqueta relacional, el nombre de donde el contexto contenedor decidió comenzar.  El problema del punto, que ha preocupado a los matemáticos desde que Euclides definió un punto como "aquello que no tiene parte", no se resuelve aquí.  Simplemente no surge.  Nunca se necesitaron puntos.

---

## Esto parece una máquina de Turing

Hay una conexión más que vale la pena mencionar, y probablemente sea la más profunda de todo el marco.

Una máquina de Turing es un modelo mínimo de computación.  Tiene una cinta, un cabezal de lectura/escritura, un estado actual y una función de transición — una regla que toma el estado actual y devuelve un nuevo estado y una dirección de movimiento.  Esa es la descripción completa.  Todo lo que una computadora puede calcular, una máquina de Turing puede calcularlo.  La complejidad de todo el software surge de esa regla mínima aplicada repetidamente a una cinta.

El marco de geometría tiene la misma estructura.  El paso actual es el estado actual.  La función de desviación δ(n) es la función de transición.  La trayectoria es la cinta que se está escribiendo.  Ejecutar el programa produce la forma.

Una forma geométrica, en este marco, es un cálculo.  La regla δ(n) es el programa.  La curva es la salida.  Ejecutarlo con una resolución más fina — pasos más pequeños, mayor n — es equivalente a aumentar la precisión del cálculo.

Esto no es una analogía.  Es la misma estructura matemática que aparece simultáneamente en dos dominios.  Lo cual tiene una consecuencia interesante: las formas que tienen descripciones de forma cerrada — espirales, polígonos, curvas sinusoidales — corresponden a programas simples con descripciones cortas.  Las curvas irregulares verdaderamente arbitrarias sin un patrón subyacente corresponden a programas sin compresión — su descripción es tan larga como su salida.  Esta es exactamente la distinción entre secuencias compresibles e incompresibles en la teoría de la información y la computabilidad.

La geometría y la computación, que suelen tratarse como campos completamente separados, podrían compartir una base común que ni la geometría clásica ni la informática clásica han explicitado por completo.  El marco basado en pasos se sitúa en esa intersección — y llegó allí no intentando unificar los dos campos, sino preguntando cuál podría ser la descripción más sencilla y honesta de una forma geométrica.

---

## Lo que contiene el marco

Enunciado completamente, el marco tiene exactamente un tipo de primitiva en cada nivel: **el vector** — una dirección y una distancia.

- Un paso es un vector
- δ(n) rige cómo se relacionan entre sí los vectores de paso sucesivos
- Una forma es una secuencia de vectores de paso gobernada por δ(n)
- Una colocación es un vector que se pasa del contexto a la forma
- Una relación entre formas es un vector entre sus ubicaciones

Sin puntos.  Sin conjuntos infinitos.  Sin supuestos de suavidad.  Sin primitivas adimensionales.  Todo objeto es un vector o una regla sobre vectores.  El marco es lo más atómico que se puede ser.

---

## Lo que sigue abierto

Este es un marco en desarrollo, no una teoría terminada.  Varias preguntas siguen genuinamente abiertas — y plantearlas precisamente es en sí mismo un resultado, porque significa que la base es lo suficientemente clara como para saber qué necesita construirse sobre ella.

¿Pueden todas las curvas clásicas expresarse como composiciones de secuencias de pasos regulares con funciones δ(n) en forma cerrada — o algunas requieren descripciones genuinamente incompresibles?  ¿Cómo se extienden las superficies y los volúmenes de forma natural a partir de esto?  ¿Cuál es la relación precisa con la geometría de tortugas, la geometría diferencial discreta y las matemáticas constructivas — campos que ya se movían en esta dirección desde diferentes puntos de partida?

Y lo más interesante: si las formas geométricas son cálculos, ¿qué significa que dos formas sean *equivalentes*?  ¿Son equivalentes cuando sus funciones δ(n) producen la misma trayectoria a todas las resoluciones?  ¿O cuando las funciones mismas son equivalentes como programas — el mismo cálculo por diferentes rutas?  Estas son condiciones diferentes.  La diferencia entre ellos podría ser donde reside la matemática más interesante.

---

*Esta es la parte 3 de una serie continua que explora cómo se ve la matemática cuando se cuestionan sus supuestos fundamentales desde los primeros principios.*

*Parte 1: [Las matemáticas en las que elegimos creer](/es/posts/post_01_mathematics_foundations)*
*Parte 2: [Las matemáticas han estado resolviendo un problema que ellas mismas crearon](/es/posts/post_02_epsilon_geometry)*
