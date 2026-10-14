---
title: "Algoritmo de Grover"
slug: algoritmo-de-grover
aliases:
  - "Grover"
  - "algoritmo Grover"
  - "Grover's algorithm"
  - "Grover's"
draft: false
published: "2026-10-15"
shortDefinition: "El algoritmo cuántico que reduce a la mitad la seguridad efectiva de SHA-256 (la debilita, no la rompe) y deja en pie la prueba de trabajo y las direcciones con hash de Bitcoin, con un margen menor."
keyTakeaways:
  - "Aceleración cuadrática en la búsqueda no estructurada: significativa, pero no catastrófica"
  - "Reduce a la mitad la seguridad efectiva de SHA-256, de 256 bits a 128 (todavía muy fuerte)"
  - "La amenaza cuántica existencial para Bitcoin es Shor contra las firmas, no Grover contra los hashes"
sources:
  - { label: "Grover (1996) - a fast quantum mechanical algorithm for database search", url: "https://arxiv.org/abs/quant-ph/9605043" }
  - { label: "BIP 141 - P2WPKH uses a 20-byte (160-bit) key hash, and 2^80 work is not infeasible anymore", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "NIST Post-Quantum Cryptography Call for Proposals (2016) - Grover needs long serial runs (section 4.A.5)", url: "https://csrc.nist.gov/CSRC/media/Projects/Post-Quantum-Cryptography/documents/call-for-proposals-final-dec-2016.pdf" }
  - { label: "Aggarwal et al. (2017) - Quantum attacks on Bitcoin, and how to protect against them", url: "https://arxiv.org/abs/1710.10377" }
relatedTerms:
  - post-quantum-bitcoin
  - shors-algorithm
  - crqc-cryptographically-relevant-quantum-computer
  - hash
  - proof-work-pow
  - p2pkh-pay-public-key-hash
  - p2wpkh-pay-witness-public-key-hash
  - difficulty
liveWidget: ~
translationOf: grovers-algorithm
sourceHash: "97a30830144c"
sourceCommit: "0ea202c"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

El algoritmo de Grover, publicado por Lov Grover en 1996, ofrece una aceleración cuadrática en los problemas de búsqueda no estructurada. Aplicado a Bitcoin, debilita [SHA-256](/es/glosario/hash) y acelera un poco la minería, pero no rompe ninguna de las dos cosas. Es la menor de las dos exposiciones de Bitcoin a la amenaza cuántica, y la que no implica un riesgo existencial.

## Qué hace

Una búsqueda clásica en un espacio no estructurado de N posibilidades toma un tiempo O(N) en promedio. Grover lo reduce a O(sqrt(N)) en una computadora cuántica.

Para Bitcoin:

- Romper por fuerza bruta un hash de 256 bits con una computadora clásica toma unas 2^256 operaciones. Imposible en la práctica.
- Con Grover, la misma tarea toma unas 2^128 operaciones. Sigue siendo enorme: fuera del alcance de cualquier ataque práctico.

La seguridad efectiva se reduce a la mitad en el exponente: 256 bits pasan a ser 128. Es un recorte, no una guillotina. Una seguridad simétrica de 128 bits es el piso estándar de los sistemas criptográficos y sigue quedando muy lejos del alcance de un ataque práctico.

## Por qué no es existencial

Los dos usos principales que Bitcoin le da a SHA-256:

- **[Minería por prueba de trabajo](/es/glosario/prueba-de-trabajo).** Los mineros buscan nonces cuyo hash quede por debajo de un objetivo. Grover da una aceleración de sqrt(N), lo que significa que los mineros cuánticos podrían encontrar bloques más rápido que los clásicos en un factor que depende de la dificultad.
- **Derivación de direcciones** (con RIPEMD-160). Las direcciones [P2PKH](/es/glosario/p2pkh) y [P2WPKH](/es/glosario/p2wpkh) son hashes de 160 bits de la clave pública. Encontrar una clave pública que coincida con una de ellas tomaría unos 2^80 pasos de Grover, frente a unos 2^160 por la vía clásica. Esos pasos no se pueden repartir sin más entre muchas máquinas, como sí se hace con los hashes de la minería. El NIST señala que el algoritmo de Grover "requires a long-running serial computation, which is difficult to implement in practice" (requiere un cálculo en serie de larga duración, difícil de llevar a la práctica), y que correr muchas copias más pequeñas en paralelo "makes the quantum speedup less dramatic" (hace menos drástica la aceleración cuántica).

Lo esencial: Grover no rompe el tope de 21 millones, no permite dobles gastos y no rompe la prueba de trabajo como mecanismo de consenso. La economía de la minería cambiaría si el hardware cuántico llegara a ser competitivo, pero el sistema sigue funcionando.

## Efecto en la minería

Aggarwal et al. (2017) analizaron la aceleración cuántica en la minería de Bitcoin y concluyeron que la prueba de trabajo es *"relatively resistant to substantial speedup by quantum computers in the next 10 years"* (relativamente resistente a una aceleración sustancial por computadoras cuánticas en los próximos 10 años), un pronóstico que cubre más o menos de 2017 a 2027. Las razones:

- La aceleración de Grover es de raíz cuadrada, no exponencial. Los mineros cuánticos ganan una ventaja significativa, pero no dominante.
- La minería es iterativa y está limitada por el ancho de banda. El hardware cuántico optimizado para Grover no correría a las velocidades de reloj que alcanzan los ASICs modernos.
- La especialización del hardware es un blanco en movimiento. Importan tanto el avance de los ASICs clásicos como el desarrollo del hardware cuántico.

El resultado probable a largo plazo: si la minería cuántica llega a ser práctica, la [dificultad](/es/glosario/dificultad) sube para compensar. El sistema alcanza un nuevo equilibrio sin romperse.

## Efecto en las direcciones

Para los tipos de dirección con hash de Bitcoin, Grover reduce a la mitad, en la práctica, el parámetro de seguridad frente a los ataques de preimagen:

- P2PKH / P2WPKH: salida de hash de unos 160 bits (tras RIPEMD-160). Grover reduce la seguridad efectiva de preimagen a unos 80 bits, un margen mucho más estrecho que los 160 bits que tiene frente a las computadoras comunes. El BIP 141 califica 2^80 de trabajo clásico como "not infeasible anymore" (ya no inviable) para los ataques de colisión, pero los pasos de Grover tienen que correr en gran parte en secuencia, como se dijo arriba, y ningún hardware cuántico que exista a octubre de 2026 se acerca siquiera a correr 2^80 de ellos.
- El escenario de ataque realista supone que el [algoritmo de Shor](/es/glosario/algoritmo-de-shor) ya está disponible contra las claves públicas expuestas; Grover sería la herramienta secundaria para atacar direcciones con hash, no la amenaza principal.

Grover es la amenaza cuántica que le permite a Bitcoin conservar su función hash. Shor es la que obliga a reescribir las firmas.

Lee el tema a fondo [Computación cuántica y Bitcoin](/es/a-fondo/computacion-cuantica-y-bitcoin) para entender por qué el eslabón débil es la firma, no el hash.
