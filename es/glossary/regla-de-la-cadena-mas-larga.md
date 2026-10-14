---
title: "Regla de la cadena más larga"
slug: regla-de-la-cadena-mas-larga
aliases:
  - "cadena más larga"
  - "cadena con más trabajo"
  - "cadena con más trabajo acumulado"
  - "regla de la cadena con más trabajo"
  - "consenso de Nakamoto"
  - "longest chain rule"
  - "Nakamoto consensus"
draft: false
published: "2026-10-15"
shortDefinition: "Los nodos de Bitcoin siguen la cadena con más prueba de trabajo acumulada, lo que garantiza el consenso en una red descentralizada."
keyTakeaways:
  - "Los nodos resuelven los conflictos eligiendo la cadena con más trabajo"
  - "Disuade a los atacantes de reescribir el registro sin un hashrate inmenso"
  - "Garantiza un estado del registro coherente en toda la red descentralizada"
sources:
  - { label: "mempool.space API - daily network hash rate since 2009 (June to August 2026 average about 9.1 x 10^20 H/s)", url: "https://mempool.space/api/v1/mining/hashrate/all" }
  - { label: "Meni Rosenfeld - Analysis of hashrate-based double spending (2012), Table 1: 0.059% for a 10% attacker and 15.6% for a 30% attacker at six confirmations", url: "https://arxiv.org/abs/1402.2009" }
relatedTerms:
  - block
  - chain-split
  - consensus-parameter
  - fork
  - proof-work-pow
  - reorg-reorganization
liveWidget: ~
translationOf: longest-chain-rule
sourceHash: "117bc8ae7e99"
sourceCommit: "94e823a"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

La regla de la cadena más larga es el mecanismo de consenso con el que Bitcoin resuelve los conflictos cuando existen varias cadenas válidas: cada [nodo](/es/glosario/nodo) sigue la cadena que tenga más [prueba de trabajo](/es/glosario/prueba-de-trabajo) acumulada.

El nombre engaña un poco. *No* es la cadena con más bloques (la más larga); es la cadena con más trabajo acumulado. En la práctica suelen coincidir, pero durante los ajustes de [dificultad](/es/glosario/dificultad) o en un intento de ataque pueden separarse.

Qué hace la regla:

1. Cuando dos mineros encuentran bloques a la misma [altura](/es/glosario/altura-de-bloque) casi en el mismo instante, la red se divide por un momento.
2. Cada nodo sigue el bloque que vio primero y construye encima de él.
3. En cuanto aparece el siguiente bloque de un lado, ese lado tiene más trabajo acumulado.
4. Los nodos que estaban del otro lado se [reorganizan](/es/glosario/reorganizacion) hacia la cadena que ahora pesa más.
5. El bloque perdedor se convierte en un [bloque obsoleto](/es/glosario/bloque-obsoleto); sus transacciones vuelven al [mempool](/es/glosario/mempool).

Por qué esta regla es la base de la seguridad de Bitcoin:

- **Atacar la cadena exige más trabajo del que produce la red honesta.** Un atacante que quiera reescribir la historia tiene que minar una bifurcación más larga, *en secreto*, más rápido de lo que el resto del mundo mina la real. Con un hashrate de Bitcoin que promedió unos 910 EH/s a mediados de 2026, lograrlo de forma confiable exige ser dueño de más de la mitad de la industria minera mundial, lo que vuelve el ataque económicamente inviable.
- **Cuanto más profunda está una transacción, más trabajo haría falta para revertirla.** Un atacante que trabaje en secreto con el 10% del hashrate revertiría una transacción con 6 confirmaciones más o menos una vez cada 1,700 intentos, y uno con el 30%, más o menos una de cada seis, según el análisis de Meni Rosenfeld de 2012. Solo un atacante con más del 50% podría contar con lograrlo. Para cualquiera por debajo de eso, la probabilidad cae de forma exponencial con la profundidad.
- **Los mineros honestos tienen incentivos para construir sobre la cadena más larga.** Un minero que encuentra un bloque fuera de la cadena principal no cobra; el bloque queda obsoleto.

A la regla de la cadena más larga a veces se la llama "consenso de Nakamoto": la versión del consenso que Satoshi describió en el [whitepaper](/es/glosario/whitepaper). Es la regla, engañosamente simple, que convierte la prueba de trabajo en un registro acordado por todo el mundo.

La regla tiene un límite: una cadena que algunos nodos consideran inválida no gana por ser más larga. [La bifurcación de la cadena de 2013](/es/a-fondo/bifurcacion-de-2013) es el caso en que la cadena con la mayor parte del hashrate fue la que se abandonó.
