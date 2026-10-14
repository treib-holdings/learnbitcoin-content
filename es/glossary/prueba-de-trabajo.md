---
title: "Prueba de trabajo (PoW)"
slug: prueba-de-trabajo
aliases:
  - "prueba de trabajo"
  - "proof-of-work"
  - "proof of work"
  - "PoW"
draft: false
published: "2026-10-14"
shortDefinition: "El mecanismo de consenso de Bitcoin, en el que los mineros calculan hashes SHA-256 hasta que el hash de un bloque válido cumple con el objetivo de dificultad."
keyTakeaways:
  - "Proponer bloques válidos exige un esfuerzo computacional enorme"
  - "Garantiza la seguridad al volver los ataques prohibitivamente caros"
  - "Es fundamental en el diseño de consenso descentralizado de Bitcoin"
sources:
  - { label: "Satoshi Nakamoto - Bitcoin whitepaper, section 4, Proof-of-Work (similar to Adam Back's Hashcash; verified by executing a single hash) and section 6, Incentive (2008)", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "Adam Back - Hashcash: A Denial of Service Counter-Measure; the scheme was first announced in May 1997 (2002)", url: "http://www.hashcash.org/papers/hashcash.pdf" }
  - { label: "Bitcoin Core - CheckProofOfWork in src/pow.cpp: the block hash must not exceed the target derived from nBits", url: "https://github.com/bitcoin/bitcoin/blob/master/src/pow.cpp" }
  - { label: "Bitcoin Core - nPowTargetTimespan of two weeks and nPowTargetSpacing of 10 minutes in src/kernel/chainparams.cpp", url: "https://github.com/bitcoin/bitcoin/blob/master/src/kernel/chainparams.cpp" }
  - { label: "Bitcoin Wiki - Difficulty: expected number of hashes to find a block is D * 2^48 / 0xffff, about D * 2^32", url: "https://en.bitcoin.it/wiki/Difficulty" }
  - { label: "mempool.space - Network hash rate and difficulty, last 30 days (JSON; fetched 13 October 2026: about 1,000 EH/s, difficulty 132.7 trillion)", url: "https://mempool.space/api/v1/mining/hashrate/1m" }
relatedTerms:
  - anti-sybil-mechanism
  - byzantine-fault-tolerance
  - consensus-parameter
  - decentralization
  - difficulty
  - difficulty-retargeting
  - energy-fud
  - grovers-algorithm
  - hash
  - incentive-compatibility
  - nonce
  - nonce-exhaustion
  - poisson-process
sameAs:
  - "https://en.wikipedia.org/wiki/Proof_of_work"
  - "https://www.wikidata.org/wiki/Q7249984"
  - "https://en.bitcoin.it/wiki/Proof_of_work"
liveWidget: ~
translationOf: proof-work-pow
sourceHash: "ba6d67062536"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

La prueba de trabajo (proof-of-work) es el mecanismo de consenso de Bitcoin. Es la regla que convierte electricidad y tiempo en el derecho a añadir un bloque nuevo a la cadena. Satoshi la adaptó de Hashcash, de Adam Back, un esquema contra el spam publicado por primera vez en 1997.

El mecanismo es simple. Para proponer un bloque, un [minero](/es/glosario/minero) tiene que producir un [encabezado del bloque](/es/glosario/encabezado-del-bloque) cuyo [hash](/es/glosario/hash) quede por debajo de un objetivo definido por la red. La única forma de lograrlo es probar [nonces](/es/glosario/nonce) hasta que uno, por casualidad, produzca un hash lo bastante bajo. No hay álgebra. No hay atajo. El "trabajo" es adivinar por fuerza bruta con hardware a escala industrial: unos 1,000 exahashes por segundo en toda la red a octubre de 2026.

Tres propiedades hacen que la PoW cargue con el peso del modelo de seguridad de Bitcoin:

- **Costo asimétrico.** Producir un hash válido toma, en promedio, la dificultad multiplicada por 2^32 intentos: con la dificultad de octubre de 2026, de unos 133 billones, eso son alrededor de 570,000 trillones (5.7 x 10^23) de hashes. Verificarlo toma un solo hash. Los nodos honestos validan bloques a un costo trivial; los atacantes no pueden falsificarlos barato.
- **Atada a recursos del mundo real.** Hacer hashes requiere chips especializados y electricidad, y ambos existen en la realidad física. No puedes imprimir prueba de trabajo como se imprime dinero fiat (fiduciario).
- **La [dificultad](/es/glosario/dificultad) se ajusta sola** cada 2,016 bloques para mantener el tiempo entre bloques cerca de los 10 minutos, sin importar cuánto hashrate (el poder de cómputo de la red) entre o salga. Más hashrate sube el costo de un ataque, no el ritmo de los bloques.

La crítica estándar es el consumo de energía. La defensa estándar es que esa energía no se desperdicia: es el costo de [proteger toda la cadena contra la manipulación (en inglés)](/rabbit-hole/mining#7-energy-as-security-budget), y la operación minera marginal corre con energía que no tiene otro comprador (renovables varadas, gas natural que de otro modo se quemaría en antorcha, hidroeléctrica fuera de las horas pico). Consulta el [tema a fondo sobre minería (en inglés)](/rabbit-hole/mining) para la versión larga de ambos argumentos.

La PoW es la respuesta a la pregunta que Satoshi intentaba resolver: ¿cómo se logra un consenso sin necesidad de confiar, a través de internet y sin una autoridad central? Haz que ponerse de acuerdo sea *caro*. Haz que manipular sea *más* caro todavía. Deja que el camino más barato hacia los ingresos sea la honestidad. Es la propiedad que los teóricos de juegos llaman [compatibilidad de incentivos (en inglés)](/glossary/incentive-compatibility), y es lo que permite que Bitcoin funcione con interés propio racional en vez de confianza.
