---
title: "Geometría como proceso: dirección, distancia y una regla"
series: "Geometría como un proceso emergente"
seriesPart: 3
topic: "Fundamentos · Geometría · Computación"
date: "2026-04-14"
readingTime: "14 min"
description: "¿Qué pasaría si la geometría no se construyera a partir de objetos en ubicaciones, sino de movimientos?  Un pequeño conjunto de parámetros define un proceso generativo a partir del cual se pueden construir formas geométricas."
status: "published"
---

## Un cambio en el punto de partida

La parte anterior terminó con una limitación.  El disco ε —que reemplaza los puntos adimensionales por objetos de tamaño finito— proporcionó una perspectiva intermedia útil.  Unificó polígonos y círculos bajo una representación común, hizo explícita la resolución y eliminó ciertos artefactos.

Pero no resolvió el problema más profundo.  Cada disco era en sí mismo un círculo y, por lo tanto, dependía del mismo primitivo que pretendía reemplazar.  La construcción dependía de lo que intentaba evitar.

Lo que esto reveló no fue un fracaso, sino un punto de partida mal identificado.  El problema no era el *tamaño* de la primitiva.  Se asumía que la geometría se construye a partir de *objetos situados en el espacio*.

Una vez que esa suposición se hace explícita, se vuelve posible una alternativa:

¿Y si la geometría no se construye a partir de objetos en ubicaciones, sino a partir de *procesos*?

---

## Una Perspectiva Generativa

La concha de un nautilus crece como una espiral logarítmica.  Las matemáticas clásicas describen esto con una ecuación.  Pero el nautilus no consulta un sistema de coordenadas, sino que sigue una regla local: cada cámara nueva se coloca en un ángulo fijo con respecto a la anterior, escalado por una proporción constante.  La espiral global no es la instrucción.  Es el resultado.  La forma emerge de un proceso local repetido en lugar de una descripción global.

Este patrón aparece ampliamente.  Las estructuras ramificadas, los procesos de crecimiento y las formaciones iterativas en la naturaleza surgen de reglas locales en lugar de ecuaciones ajustadas al resultado.  El proceso es primario; la forma es lo que produce.

Esto sugiere un punto de partida diferente para la geometría:

> en lugar de describir una forma como un objeto terminado, describe el proceso que la genera.

---

## Tres parámetros

En este marco, una forma se construye a través de una secuencia de pasos definidos por:

- **d** — el tamaño del paso   
- **θ** — la dirección inicial   
- **δ(n)** — una función que describe cómo cambia la dirección en cada paso  

Partiendo de un ancla, cada paso se da con una longitud *d*, y la dirección se actualiza según δ(n).

- Si δ es constante, el resultado es una trayectoria poligonal regular.   
- Si δ varía, la trayectoria se curva según la regla   
- Si *d* cambia, la escala evoluciona a lo largo de la trayectoria  

Esto define un proceso generativo.  La forma es la trayectoria producida al iterar la regla.

Es útil distinguir entre dos tipos de parámetros aquí.  La función de desviación δ(n) captura la estructura relacional intrínseca de la forma —el patrón de cómo se relacionan los pasos entre sí— y es independiente de la escala y la orientación.  La distancia de paso d y la dirección inicial θ son contextuales: describen la forma en relación con una unidad externa y una dirección de referencia, no como propiedades de la forma en sí misma.  Esta distinción se vuelve más precisa en el marco formal, pero ya es visible aquí.

---

## Relación con las representaciones existentes

Esta perspectiva no es desconocida para nadie que haya trabajado con gráficos vectoriales.  SVG, canvas, PostScript y gráficos de tortuga representan las formas como secuencias de comandos dirigidos — mover, línea, curva, arco — en lugar de como listas de puntos.  Estas son instrucciones que generan una ruta.  La forma es la trayectoria del proceso.

Estos formatos fueron diseñados para resolver un problema práctico: cómo representar la geometría de forma compacta para el cálculo y la renderización, y llegaron de forma independiente a la misma respuesta: la descripción basada en procesos.  La convergencia entre sistemas no relacionados sugiere que el enfoque está rastreando algo real, no simplemente una representación conveniente.  El marco aquí puede entenderse como hacer explícita esa base implícita.

---

## Lo que producen las diferentes reglas

La variedad de formas que resultan de diferentes elecciones de δ(n) merece ser considerada.

Un δ constante da polígonos regulares — y a medida que n crece con δ disminuyendo proporcionalmente, estos se acercan a un círculo.  No es un tipo de objeto separado: es la misma familia llevada a una resolución más fina.  Cuando d crece exponencialmente mientras δ permanece fijo, el resultado es una espiral logarítmica: el nautilus, el brazo de la galaxia.  Cuando δ(n) = k/n, el giro disminuye en cada paso, produciendo una curva que se endereza gradualmente: la espiral de Euler, utilizada en ingeniería de carreteras para hacer una transición suave entre una carretera recta y una curva.  Cuando δ es periódico, la trayectoria oscila en curvatura, produciendo caminos similares a olas.

La geometría clásica trata estos objetos como entidades separadas, cada una con su propia definición y ecuación.  Aquí son variaciones de la misma construcción, diferenciadas solo por la elección de δ(n).  La unificación no se impone, sino que se deriva de describirlos a todos de la misma manera.

---

## Composición y Curvas Irregulares

Curvas más complejas se pueden construir combinando segmentos regidos por diferentes reglas.  Cada segmento tiene su propio δ(n), y las transiciones entre segmentos codifican cambios en el comportamiento.  La complejidad de una curva es entonces una función de su estructura composicional —cuántos segmentos distintos contiene y cómo se conectan—, en lugar de su longitud o resolución.

Esto explicita algo que a menudo se deja implícito: una curva suave y gradual requiere muchos segmentos con pequeñas transiciones entre ellos, mientras que una curva hecha de arcos y líneas rectas necesita muy pocos.  Una curva verdaderamente arbitraria sin un patrón subyacente requiere almacenar cada paso.  Lo cual es honesto: tal curva genuinamente contiene más información.  El marco hace visible la complejidad en lugar de ocultarla dentro del formalismo.

---

## Separando la forma de la posición

Una forma definida por d, θ y δ(n) no tiene posición.  La regla describe cómo se relacionan los pasos entre sí —sus direcciones y distancias relativas— pero no dice nada sobre dónde comienza la secuencia.  La colocación debe venir de fuera.

Esto separa lo que una forma *es* de dónde *se coloca*: una distinción que la geometría clásica conoce informalmente como congruencia, pero que no impone a nivel fundamental porque las coordenadas están incorporadas desde el principio.

La consecuencia práctica es que el ancla inicial no es una primitiva geométrica.  Funciona como una etiqueta de referencia, dondequiera que el contexto contenedor decida comenzar, no como un objeto con estructura independiente.  Esto elimina la necesidad de tratar los puntos como fundamentales.  El problema del punto que Euclides introdujo con "aquello que no tiene parte" simplemente no surge en esta construcción.  No porque esté resuelto, sino porque la construcción nunca lo requirió.

La ubicación en sí misma se expresa naturalmente como un vector, el mismo tipo primitivo que todo lo demás en el marco.  No hay objetos adimensionales en ninguna parte del sistema.

---

## Una Conexión Computacional

Hay un paralelo estructural con la computación que vale la pena nombrar.

Un modelo computacional básico tiene un estado actual, una regla de transición y un proceso iterativo.  El marco de geometría basado en pasos tiene la misma estructura: el paso actual es el estado, δ(n) es la regla de transición, la trayectoria es la salida.  Una forma geométrica, en esta visión, es el resultado de un cálculo definido por una regla.

Esta similitud no es casual.  Las formas que tienen descripciones de forma cerrada —espirales, polígonos regulares, curvas oscilantes— corresponden a programas cortos: la regla es más simple que la salida que genera.  Las curvas irregulares verdaderamente arbitrarias sin un patrón subyacente corresponden a programas sin compresión: la descripción y la salida tienen la misma longitud.  Esto se corresponde directamente con la distinción entre secuencias compresibles e incompresibles en la teoría de la información.

Queda por desarrollar si este paralelismo estructural constituye una conexión profunda o una analogía útil.  Lo que está claro es que el marco basado en pasos se sitúa en la intersección de la geometría y la computación de una manera que la geometría clásica, construida sobre objetos infinitos suaves, no lo hace.

---

## Lo que proporciona el marco

El marco introduce una forma diferente de organizar la información geométrica:

- las formas se definen por reglas generativas   
- la posición se trata como externa a la forma  

- la complejidad está ligada a la estructura composicional  

- la resolución es contextual, no intrínseca  

Esto no reemplaza las formulaciones clásicas.  Proporciona un punto de partida alternativo desde el cual se pueden reconstruir estructuras similares, uno que es computacionalmente nativo, evita primitivas infinitas y hace explícita desde el principio la separación entre la identidad de la forma y su ubicación.

El marco relacional más abstracto desarrollado más adelante en la serie generaliza esto aún más, reemplazando los pasos dirigidos con relaciones arbitrarias y componibles.  La formulación actual es un ejemplo concreto de ese enfoque más amplio, y las distinciones clave establecidas aquí —regla intrínseca versus parámetros contextuales, forma versus colocación— se trasladan directamente.

---

## Lo que sigue abierto

Surgen varias preguntas de forma natural:

- ¿Qué tan general es esta representación?  ¿Pueden todas las curvas clásicas expresarse como composiciones de secuencias de pasos regulares con funciones δ(n) de forma cerrada?   
- ¿Cómo se extiende el marco a superficies y dimensiones superiores?   
- ¿Cuál es la relación precisa con las áreas existentes: geometría discreta, geometría de tortugas, matemáticas constructivas?   
- ¿Qué noción de equivalencia entre procesos generativos captura mejor la identidad geométrica?  

La última pregunta resulta ser el punto de entrada al marco más abstracto.  Cuando dos procesos relacionales son equivalentes bajo todas las pruebas composicionales —cuando ninguna composición adicional puede distinguirlos— definen el mismo objeto en la estructura cociente.  Esa es la versión formal de la misma pregunta, y es donde continúa la serie.