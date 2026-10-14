---
title: "Algoritmo de Shor"
slug: algoritmo-de-shor
aliases:
  - "Shor's algorithm"
  - "Shor's"
  - "Shor"
  - "algoritmo Shor"
draft: false
published: "2026-10-15"
shortDefinition: "El algoritmo cuántico que rompe la criptografía de curva elíptica (y, por lo tanto, las firmas ECDSA y Schnorr de Bitcoin) si existe una computadora cuántica lo bastante grande."
keyTakeaways:
  - "Rompe la criptografía de curva elíptica (y RSA) si hay suficientes cúbits con corrección de errores"
  - "La razón concreta por la que las firmas ECDSA y Schnorr de Bitcoin tendrán que reemplazarse antes de que lleguen las CRQCs"
  - "El algoritmo funciona en principio; el hardware para correrlo a escala criptográfica todavía no existe"
sources:
  - { label: "SEC 1 v2.0 - Pollard's rho needs about sqrt(pi n/4) steps, the best known non-quantum attack on elliptic-curve keys (Appendix B.1)", url: "https://www.secg.org/sec1-v2.pdf" }
relatedTerms:
  - post-quantum-bitcoin
  - grovers-algorithm
  - crqc-cryptographically-relevant-quantum-computer
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - schnorr-signature
  - elliptic-curve
  - bip-361
  - p2pk-pay-public-key
  - public-key
liveWidget: ~
translationOf: shors-algorithm
sourceHash: "10847728d267"
sourceCommit: "0ea202c"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

El algoritmo de Shor, publicado por Peter Shor en 1994, es la razón de que "Bitcoin poscuántico" sea siquiera un tema. Es el algoritmo cuántico que convierte a una computadora cuántica lo bastante grande en una amenaza existencial para la mayor parte de la criptografía de clave pública que se usa hoy, incluida la de Bitcoin. Resuelve con eficiencia dos problemas que las computadoras clásicas no pueden resolver en un tiempo razonable: la factorización de enteros (rompe RSA) y el problema del logaritmo discreto (rompe la criptografía de curva elíptica, incluidas [ECDSA](/es/glosario/ecdsa) y [Schnorr](/es/glosario/firma-schnorr)).

## Qué hace

Los esquemas de firma de Bitcoin se apoyan en el supuesto de que, dada una [clave pública](/es/glosario/clave-publica) en la [curva secp256k1](/es/glosario/curva-eliptica), derivar la clave privada correspondiente es computacionalmente inviable. En el mundo clásico, el mejor ataque conocido tarda un tiempo exponencial en el tamaño de la clave: unas 2^128 operaciones para una curva de 256 bits. Infinito en la práctica.

El algoritmo de Shor lo reduce a tiempo polinómico. En una computadora cuántica con suficientes cúbits (qubits) estables y con corrección de errores, derivar una clave privada secp256k1 a partir de su clave pública se vuelve factible. Sin una máquina así, incluso una flota imaginaria de 10,000 millones de computadoras ordinarias, cada una dando un billón de pasos por segundo, necesitaría unos mil millones de años para recuperar una sola clave (ver el [tema a fondo sobre el espacio de claves (en inglés)](/rabbit-hole/key-space)).

El núcleo matemático es encontrar el periodo de una función definida módulo un número difícil. A las computadoras clásicas les cuesta; las cuánticas aprovechan la superposición y la transformada cuántica de Fourier para encontrar el periodo con eficiencia. Tanto la factorización de enteros como el logaritmo discreto se reducen a encontrar un periodo. Los dos caen ante el algoritmo de Shor.

## Por qué es la amenaza concreta para Bitcoin

Dos piezas de la criptografía de Bitcoin son directamente vulnerables:

- **ECDSA** (las firmas de las transacciones desde 2009): la clave privada puede derivarse con el algoritmo de Shor a partir de cualquier clave pública expuesta.
- **Firmas Schnorr** (en uso desde [Taproot](/es/glosario/taproot), [BIP 340](https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki)): el mismo supuesto de curva elíptica de fondo, la misma vulnerabilidad.

Los tipos de dirección que exponen la clave pública en la cadena, es decir, [P2PK](/es/glosario/p2pk), las P2PKH y P2WPKH reutilizadas y todas las salidas P2TR (Taproot), están hoy dentro de la superficie de ataque. Cualquiera que corra un nodo puede ver la clave pública; a esas monedas solo las protege que todavía no exista una computadora cuántica lo bastante grande.

Lo que el algoritmo de Shor *no* amenaza directamente: la función hash de Bitcoin ([SHA-256](/es/glosario/hash)) y el mecanismo de [prueba de trabajo](/es/glosario/prueba-de-trabajo). Esos se enfrentan al [algoritmo de Grover](/es/glosario/algoritmo-de-grover), una amenaza cuántica mucho más débil.

## Qué escala hace falta

Correr el algoritmo de Shor contra una curva elíptica de 256 bits exige del orden de miles de cúbits lógicos (con corrección de errores), coherencia cuántica sostenida a lo largo de millones de operaciones de compuerta y una fidelidad de compuerta lo bastante alta para que el costo de la corrección de errores no se dispare. Consulta [CRQC](/es/glosario/crqc) para los umbrales concretos y la brecha actual entre el hardware de hoy y esa vara.

La versión corta: varios órdenes de magnitud separan los sistemas cuánticos de hoy del "hardware capaz de correr el algoritmo de Shor a una escala relevante para Bitcoin", en varios ejes a la vez (cantidad de cúbits, tasas de error, tiempo de coherencia).

## Estado actual

El algoritmo de Shor se ha ejecutado de forma experimental para factorizar números pequeños (15, 21, a veces algo mayores) en hardware cuántico. Esas demostraciones son matemáticamente válidas, pero trivialmente pequeñas. Ninguna demostración pública se ha acercado a factorizar o a resolver el logaritmo discreto con claves de tamaño criptográficamente relevante.

La carrera está del lado de la ingeniería, no del algoritmo. El algoritmo existe y funciona en principio. Construir el hardware para correrlo a escala es el problema abierto, y la base de toda estimación de cuándo llegará una [CRQC](/es/glosario/crqc).

Consulta el tema a fondo [Computación cuántica y Bitcoin](/es/a-fondo/computacion-cuantica-y-bitcoin) para ver qué amenaza realmente el algoritmo de Shor en Bitcoin: la oferta con clave pública expuesta, medida.
