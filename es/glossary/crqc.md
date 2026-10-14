---
title: "CRQC (computadora cuántica criptográficamente relevante)"
slug: crqc
aliases:
  - "CRQC"
  - "CRQCs"
  - "computadora cuántica criptográficamente relevante"
  - "computadoras cuánticas criptográficamente relevantes"
  - "cryptographically relevant quantum computer"
  - "cryptographically-relevant quantum computer"
avoid:
  - "ordenador cuántico criptográficamente relevante"
draft: false
published: "2026-10-15"
shortDefinition: "El umbral a partir del cual una computadora cuántica es lo bastante grande y estable como para romper criptografía del mundo real; en concreto, ECDSA sobre secp256k1 en el caso de Bitcoin."
keyTakeaways:
  - "El umbral de hardware cuántico capaz de romper criptografía del mundo real"
  - "Los cúbits lógicos, el tiempo de coherencia y la fidelidad de las compuertas importan tanto como el número bruto de cúbits"
  - "Los sistemas actuales están varios órdenes de magnitud por debajo de una CRQC para Bitcoin, en varios ejes a la vez"
sources:
  - { label: "Roetteler, Naehrig, Svore and Lauter - Quantum resource estimates for computing elliptic curve discrete logarithms, ASIACRYPT 2017 (at most 9n + 2 log2(n) + 10 logical qubits, which is 2,330 for a 256-bit curve, and about 1.3 x 10^11 Toffoli gates)", url: "https://arxiv.org/abs/1706.06752" }
  - { label: "Webber et al. - The Impact of Hardware Specifications on Reaching Quantum Advantage in the Fault Tolerant Regime (2021; 317 million physical qubits to break Bitcoin's 256-bit elliptic curve key within one hour, 13 million within one day, at a 0.1 percent gate error rate and a one-microsecond code cycle)", url: "https://arxiv.org/abs/2108.12371" }
  - { label: "Google Quantum AI - Quantum error correction below the surface code threshold, Nature (9 December 2024; a 101-qubit distance-7 surface code at 0.143 percent logical error per cycle, error suppression by 2.14 for every two steps of distance, 2d^2 - 1 physical qubits per logical qubit)", url: "https://www.nature.com/articles/s41586-024-08449-y" }
  - { label: "Bluvstein et al. - Logical quantum processor based on reconfigurable atom arrays, Nature (6 December 2023; up to 280 physical qubits and circuits with up to 48 logical qubits, using error detection)", url: "https://www.nature.com/articles/s41586-023-06927-3" }
  - { label: "BIP 361 - Post Quantum Migration and Legacy Signature Sunset (draft; academic road-maps now estimate a cryptographically-relevant quantum computer as early as 2027-2030, citing McKinsey's 2025 Quantum Technology Monitor)", url: "https://github.com/bitcoin/bips/blob/master/bip-0361.mediawiki" }
  - { label: "Michele Mosca - Cybersecurity in an era with quantum computers, will we be ready? (IACR ePrint 2015/1075; a 1/2 chance of breaking RSA-2048 by 2031)", url: "https://eprint.iacr.org/2015/1075" }
relatedTerms:
  - post-quantum-bitcoin
  - shors-algorithm
  - grovers-algorithm
  - bip-361
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - schnorr-signature
  - elliptic-curve
  - public-key
liveWidget: ~
translationOf: crqc-cryptographically-relevant-quantum-computer
sourceHash: "79a00563ae5b"
sourceCommit: "b3ef864"
sourceUpdated: "2026-10-15"
translation:
  method: "llm-draft"
---

CRQC es el término de trabajo para la escala de hardware cuántico que haría falta para romper de verdad la criptografía que protege los sistemas modernos, Bitcoin incluido. Es un blanco móvil, definido tanto por el algoritmo que se ejecuta (el de [Shor](/es/glosario/algoritmo-de-shor), en el caso de Bitcoin) como por el parámetro criptográfico atacado (una clave de curva elíptica de 256 bits, para [ECDSA](/es/glosario/ecdsa) y [Schnorr](/es/glosario/firma-schnorr)).

"¿De cuántos cúbits (qubits) tiene que preocuparse Bitcoin?" es una pregunta cuya nota al pie es más larga que la respuesta.

## Qué separa a los cúbits de una CRQC

Una computadora cuántica con N cúbits físicos no equivale a "N cúbits de capacidad de ataque criptográfico". Tres factores separan el hardware bruto de la condición de CRQC:

- **Cúbits lógicos frente a físicos.** Las operaciones cuánticas son ruidosas. Un cómputo confiable exige corrección de errores, que usa muchos cúbits físicos para codificar cada cúbit lógico tolerante a fallas. El código de superficie necesita 2d^2 - 1 cúbits físicos por cúbit lógico a una distancia de código d, alrededor de un centenar para el código de distancia 7 que Google demostró en 2024, y las tasas de error que requiere una ejecución de Shor son millones de veces más bajas que las que esos códigos entregan, así que la distancia y la sobrecarga tienen que crecer mucho más allá de eso.
- **Tiempo de coherencia.** Los estados cuánticos pierden la coherencia rápidamente. Ejecutar Shor a escala criptográfica exige mantener la coherencia a lo largo de millones de operaciones de compuerta.
- **Fidelidad de las compuertas.** Cada operación de una compuerta cuántica tiene una tasa de error. Menos fidelidad significa más corrección de errores, lo que significa más cúbits físicos por cúbit lógico. Una vez que el hardware está por debajo del umbral del código, la recompensa es exponencial: en el chip Willow de Google, cada aumento de dos en la distancia de código redujo la tasa de error lógico en un factor de 2.14, así que pequeñas mejoras de fidelidad rinden de forma desproporcionada.

## Qué hace falta para Bitcoin

Estimaciones de trabajo del hardware necesario para romper [secp256k1](/es/glosario/curva-eliptica) con el algoritmo de Shor:

- Unos 2,330 cúbits lógicos (con corrección de errores) y del orden de 10^11 compuertas Toffoli, según la estimación estándar de 2017
- Millones de cúbits físicos una vez contada la corrección de errores: una estimación de 2021 los sitúa en 13 millones para terminar en un día, o 317 millones para terminar en una hora, suponiendo un código de superficie, una tasa de error de compuerta del 0.1% y un ciclo de un microsegundo
- Coherencia cuántica sostenida durante toda la duración del cómputo: de horas a días

Los números exactos dependen de los supuestos: la tasa de error de las compuertas, el tiempo de ciclo, cómo están conectados los cúbits entre sí y cuánto está dispuesto a esperar el atacante. Ninguna de las estimaciones está a un solo orden de magnitud de ningún sistema que exista hoy.

## Dónde está el hardware

Los sistemas cuánticos públicos abarcan varias arquitecturas, cada una con un perfil de escalado distinto:

- **Circuitos superconductores.** Los procesadores Willow de Google corrieron códigos de superficie por debajo del umbral de corrección de errores en 2024: un código de distancia 7 con 101 cúbits que sostenía un cúbit lógico con un 0.143% de error por ciclo, y cada aumento de dos en la distancia de código reducía la tasa de error lógico en un factor de 2.14.
- **Arreglos de átomos neutros.** Un procesador con hasta 280 átomos atrapados corrió circuitos con hasta 48 cúbits lógicos en 2023, sobre códigos pequeños y con detección de errores en lugar de la corrección profunda que necesita una ejecución de Shor.
- **Iones atrapados, fotónica, cúbits topológicos y otras arquitecturas** están en la misma carrera, y las mismas tres restricciones se aplican a todas.

En todas ellas, **los cúbits lógicos demostrados se cuentan por decenas como mucho, y solo sobre códigos pequeños**. El número bruto de cúbits físicos es la métrica más visible en los comunicados de prensa, pero no es la restricción que manda: la fidelidad de las compuertas, el tiempo de coherencia y la sobrecarga de la corrección de errores importan más para ejecutar Shor de verdad a escala criptográfica.

No existe ninguna capacidad CRQC demostrada contra ninguna criptografía del mundo real. La brecha sigue siendo de varios órdenes de magnitud en varios ejes.

## Por qué el plazo se sigue alejando pero no se cierra

Los pronósticos sitúan una CRQC en algún punto de los próximos diez a veinte años desde al menos 2015, cuando Michele Mosca estimó una probabilidad de uno entre dos de que RSA-2048 estuviera roto para 2031. El patrón frustrante: cada año trae avances reales en número de cúbits y en corrección de errores, pero los desafíos de ingeniería escalan de forma superlineal con el tamaño del sistema. Agregar cúbits crea problemas de ruido nuevos; los problemas de ruido nuevos exigen más sobrecarga de corrección de errores; la sobrecarga nueva empuja el umbral de CRQC más lejos.

Pero la tendencia sigue apuntando hacia adelante. La pregunta no es si las CRQCs pueden construirse en principio (el algoritmo de Shor demuestra que sí), sino si la curva de progreso de la ingeniería llegará algún día al umbral. La pregunta abierta es *cuándo*.

Para Bitcoin, la implicación es que la migración tiene que empezar mucho antes de que llegue una CRQC, porque coordinar a la red en un esquema de firmas nuevo toma años. Los autores del [BIP 361](/es/glosario/bip-361) lo citan directamente: *"academic road-maps now estimate a cryptographically-relevant quantum computer as early as 2027-2030"* (las hojas de ruta académicas ahora estiman una computadora cuántica criptográficamente relevante para fechas tan tempranas como 2027 a 2030).

Consulta el tema a fondo [Computación cuántica y Bitcoin](/es/a-fondo/computacion-cuantica-y-bitcoin) para la cronología honesta y lo que significa en la práctica la ventana de migración.
