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

## La geometría como proceso: dirección, distancia y una regla

---

## Un cambio en el punto de partida

La parte anterior terminó con una limitación.  El disco ε —que reemplaza los puntos adimensionales por objetos de tamaño finito— proporcionó una perspectiva intermedia útil.  Unificó polígonos y círculos bajo una representación común, hizo explícita la resolución y eliminó ciertos artefactos.

Pero no resolvió el problema más profundo.  Cada disco era en sí mismo un círculo y, por lo tanto, dependía del mismo primitivo que pretendía reemplazar.  La construcción dependía de lo que intentaba evitar.

Lo que esto reveló no fue un fracaso, sino un punto de partida mal identificado.  El problema no era el *tamaño* del primitivo.  Se asumía que la geometría se construye a partir de *objetos situados en el espacio*.

Una vez que esa suposición se hace explícita, se hace posible una alternativa:

¿Y si la geometría no se construye a partir de objetos en ubicaciones, sino a partir de *procesos*?

---

## Una Perspectiva Generativa

Consideremos una simple observación.

La concha de un nautilus crece siguiendo un patrón que puede describirse como una espiral logarítmica.  En las matemáticas clásicas, esto se expresa a través de una ecuación.  Pero el organismo en sí mismo no funciona en términos de coordenadas o ecuaciones.

En cambio, sigue una regla local: cada nueva cámara se coloca en un ángulo fijo con respecto a la anterior, con un factor de escala constante.  La forma global emerge de la aplicación repetida de esa regla.

Patrones similares aparecen en muchos sistemas naturales.  Las estructuras ramificadas, los procesos de crecimiento y las formaciones iterativas a menudo surgen de reglas locales en lugar de descripciones globales.

Esto sugiere una perspectiva diferente:

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

A este nivel, es útil distinguir entre:

- **estructura intrínseca** — codificada por δ(n), que describe cómo se relacionan los pasos   
- **parámetros contextuales** — como d y θ, que dependen de la escala y la orientación  

Esta distinción se formalizará más adelante, pero ya es visible aquí.

---

## Relación con las representaciones existentes

Esta perspectiva no es del todo desconocida.

Los sistemas de gráficos vectoriales —como SVG o las API de dibujo— representan las formas como secuencias de comandos: mover, línea, curva, arco.  Estas son instrucciones que generan una ruta, en lugar de listas de puntos.

De manera similar, sistemas como los gráficos de tortuga describen la geometría a través de secuencias de movimientos y giros.

Estas son representaciones prácticas desarrolladas para el cálculo y la renderización.  No están pensados como fundamentos de la geometría, pero ilustran que:

> Describir las formas como procesos es un enfoque viable y a menudo eficaz.

El marco aquí puede verse como una generalización conceptual de esa idea.

---

## Lo que producen las diferentes reglas

Diferentes elecciones de δ(n) y d conducen a diferentes familias de curvas.

- δ constante produce trayectorias poligonales regulares   
- Una δ que varía lentamente produce una curvatura suave   
- El δ dependiente del paso puede generar un comportamiento oscilatorio o transicional.  

Por ejemplo:

- Un giro constante con un tamaño de paso creciente produce estructuras en espiral.   
- Un giro decreciente puede producir curvas que se enderezan gradualmente.   
- Las δ periódicas pueden generar patrones similares a ondas.  

Estos corresponden a formas geométricas familiares, pero aquí surgen de un mecanismo generativo unificado.

Es importante interpretar esto cuidadosamente: el marco no reemplaza las definiciones clásicas, sino que proporciona una forma alternativa de construirlas y organizarlas.

---

## Composición y Curvas Irregulares

Curvas más complejas se pueden construir combinando segmentos definidos por diferentes reglas.

Cada segmento se rige por su propio δ(n), y las transiciones entre segmentos codifican cambios en el comportamiento.  Esto es análogo a las construcciones por partes en la geometría clásica o a las representaciones basadas en splines en computación.

La complejidad de una curva está entonces relacionada con el número y la naturaleza de estos segmentos, en lugar de con su longitud o resolución.

Esta perspectiva explicita una distinción entre:

- estructura regular (reglas simples)   
- complejidad composicional (cuántas reglas se combinan)

---

## Separando la forma de la posición

Una característica clave de este marco es que la regla generativa no determina una posición en el espacio.

La secuencia definida por d, θ y δ(n) describe cómo se relacionan los pasos entre sí, pero no dónde comienza la secuencia.  La ubicación debe especificarse externamente.

Esto separa:

- la **forma**, definida por su regla generativa   
- la **ubicación**, definida por una referencia externa  

La geometría clásica captura una idea similar a través de la congruencia, pero típicamente codifica la posición directamente en coordenadas.  Aquí, la separación es parte de la construcción misma.

Esto también elimina la necesidad de tratar los puntos como primitivas fundamentales.  El ancla inicial funciona como referencia, no como un objeto geométrico con estructura independiente.

---

## Una Analogía Computacional

Hay una analogía natural con el cálculo.

Un modelo computacional simple consta de:

- un estado actual   
- una regla de transición  

- un proceso iterativo  

El marco generativo para formas tiene una estructura similar:

- el paso actual corresponde a un estado   
- δ(n) actúa como una regla de transición  

- iterar la regla produce una trayectoria  

Bajo esta interpretación, una forma geométrica puede ser vista como la salida de un proceso definido por una regla.

Esta es una analogía más que una equivalencia formal, pero sugiere una conexión entre:

- descripciones generativas de la geometría   
- sistemas basados en reglas en computación  

Explorar esta conexión con mayor precisión requeriría un desarrollo adicional.

---

## Lo que proporciona el marco

En esta etapa, el marco introduce una forma diferente de organizar la información geométrica:

- las formas se definen por reglas generativas   
- la posición se trata como externa  

- la complejidad está ligada a la estructura composicional  

- la resolución no es intrínseca, sino contextual  

Esto aún no reemplaza las formulaciones clásicas.  Proporciona un punto de partida alternativo desde el cual se pueden reconstruir estructuras similares.

El marco relacional más abstracto desarrollado más adelante en la serie generaliza aún más esta idea, reemplazando las construcciones basadas en pasos con relaciones componibles.  La formulación actual puede entenderse como un ejemplo concreto de ese enfoque más amplio.

---

## Lo que sigue abierto

Varias preguntas surgen naturalmente desde esta perspectiva:

- ¿Qué tan general es esta representación?  ¿Pueden todas las curvas clásicas expresarse de esta forma?   
- ¿Cómo se extiende el marco a superficies y estructuras de dimensiones superiores?   
- ¿Cuál es la relación precisa con áreas existentes como la geometría discreta o los enfoques constructivos?   
- ¿Qué noción de equivalencia entre procesos generativos captura mejor la identidad geométrica?  

Estas preguntas marcan el límite entre lo que se ha establecido y lo que queda por desarrollar.

También apuntan al siguiente paso: precisar la noción de equivalencia, lo que conduce al marco relacional más abstracto.
