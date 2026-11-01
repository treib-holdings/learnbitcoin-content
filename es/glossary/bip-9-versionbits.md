---
title: "BIP 9 (bits de versión)"
slug: bip-9-versionbits
draft: false
published: "2026-10-14"
shortDefinition: "Un método de señalización que permite a los mineros indicar en los encabezados de bloque su apoyo a propuestas de soft fork antes de alcanzar los umbrales de activación."
keyTakeaways:
  - "Usa bits de los encabezados de bloque para la señalización de los mineros"
  - "Activa soft forks cuando se superan los umbrales"
  - "Ayuda a coordinar las actualizaciones de la red con menos fricción"
sources:
  - { label: "BIP 9 - deployment assignments (csv, from May 2016, was the first)", url: "https://github.com/bitcoin/bips/blob/master/bip-0009/assignments.mediawiki" }
  - { label: "BIP 65 - deployed with the older IsSuperMajority switchover, not BIP 9", url: "https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki" }
  - { label: "BIP 341 - Deployment: modified BIP 9, 90% threshold, signaling 24 April to 11 August 2021, minimum activation height 709,632", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki#deployment" }
  - { label: "BIP 9 - Version bits (threshold 1,916 of 2,016 blocks, 95%; a change is locked in for one retarget period, then active)", url: "https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki" }
  - { label: "BIP 141 - Segregated Witness, deployment (BIP-9 bit 1, signaling from November 15, 2016)", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "Bitcoin Magazine - BIP91: The SegWit Activation Kludge That Should Keep Bitcoin Whole (Aaron van Wirdum, June 16, 2017): SegWit needs 95 percent of blocks to signal bit 1, and so far only some 30 percent of hash power is signaling", url: "https://bitcoinmagazine.com/technical/bip91-segwit-activation-kludge-should-keep-bitcoin-whole" }
  - { label: "Mike Belshe - Segwit2x Final Steps (bitcoin-segwit2x list, November 8, 2017, archived): SegWit had only 30% support among miners in May 2017; the organizers say Segwit2x broke the deadlock", url: "https://web.archive.org/web/20171108202305/https://lists.linuxfoundation.org/pipermail/bitcoin-segwit2x/2017-November/000685.html" }
  - { label: "BIP 148 - Mandatory activation of segwit deployment (from August 1, 2017, blocks that do not signal for SegWit are rejected)", url: "https://github.com/bitcoin/bips/blob/master/bip-0148.mediawiki" }
  - { label: "BIP 91 - Reduced threshold Segwit MASF (activates the existing SegWit deployment with less than 95% of hash power by rejecting blocks that do not signal for it)", url: "https://github.com/bitcoin/bips/blob/master/bip-0091.mediawiki" }
  - { label: "BIP 8 - Version bits with lock-in by height, by Shaolin Fry and Luke Dashjr (assigned February 1, 2017): an alternative to BIP 9 whose deployments can be set to require signaling in their final period", url: "https://github.com/bitcoin/bips/blob/master/bip-0008.mediawiki" }
  - { label: "Braiins - Anniversary of the BIP148 UASF (August 1, 2020), a retrospective that celebrates it: says the UASF put Bitcoin's future in the hands of users, not miners, and that miners are not paid to decide the rules", url: "https://braiins.com/blog/3-year-anniversary-bip148-uasf" }
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-91
  - bip-119-ctv
  - bip-125-replace-fee
  - segwit-segregated-witness-bip-141
  - bip-144-segwit-relay
  - bip-148-uasf
  - deployment-threshold-soft-fork
  - locked-period-soft-fork
  - soft-fork
liveWidget: ~
aliases:
  - "BIP 9"
  - "BIP-9"
  - "VersionBits"
  - "bits de versión"
translationOf: bip-9-versionbits
sourceHash: "6f0e21cafde7"
sourceCommit: "659e6f9"
sourceUpdated: "2026-10-10"
translation:
  method: "llm-draft"
---

El [BIP 9](https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki) introdujo **VersionBits** (los bits de versión), el mecanismo de señalización de mineros que se usa para coordinar la activación de un [soft fork](/es/glosario/soft-fork) (una bifurcación compatible hacia atrás) en Bitcoin. La premisa: codificar las propuestas de soft fork candidatas en bits concretos del campo de versión del [encabezado del bloque](/es/glosario/encabezado-del-bloque), y dejar que los mineros enciendan esos bits para indicar que están listos.

El mecanismo:

1. A un BIP nuevo se le asigna uno de los bits de versión y una ventana de despliegue (un momento de inicio y un momento de fin).
2. Durante la ventana, los mineros pueden encender el bit en sus bloques para señalizar apoyo.
3. Si el 95% de los bloques de un periodo de ajuste de dificultad de 2,016 bloques señalizan, el soft fork queda "fijado" (locked in) durante el siguiente periodo de ajuste y después se activa.
4. Si la ventana de despliegue termina sin alcanzar el umbral, la propuesta expira.

Esto funcionó sin problemas en su primer despliegue, el soft fork CSV de 2016, formado por el [BIP 68 (en inglés)](/glossary/bip-68-relative-locktime), el BIP 112 y el BIP 113. Su fracaso más famoso llegó con la activación de [SegWit](/es/glosario/segwit) en 2017. La señalización se abrió el 15 de noviembre de 2016, pero en mayo y principios de junio de 2017 solo alrededor del 30 por ciento de los bloques señalizaba a favor de SegWit, muy lejos del 95 por ciento que necesitaba. Ese estancamiento dio pie a métodos de activación alternativos: la propuesta [BIP 8 (en inglés)](/glossary/bip-8), de febrero de 2017, el [BIP 148, el UASF (en inglés)](/glossary/bip-148-uasf) y el [BIP 91 (en inglés)](/glossary/bip-91). Taproot, en 2021, no usó ni el BIP 8 ni una fecha de activación forzosa (flag day). Usó Speedy Trial, un despliegue BIP 9 modificado con un umbral del 90 por ciento, una ventana de señalización corta y una altura mínima de activación, que simplemente habría fracasado si los mineros no hubieran señalizado.

Quienes apoyaron el BIP 148 sacaron una lección de la pelea por SegWit: los mineros señalizan que están listos, pero no deciden las reglas. Los organizadores de SegWit2x, en cambio, le dieron el crédito a su propio acuerdo. Sea como sea, el BIP 9 funcionó sin problemas para las actualizaciones que nadie objetaba y no tenía una respuesta limpia para las disputadas. El BIP 8 añade la opción de volver obligatoria la señalización al final de un despliegue. Speedy Trial tomó otro camino con Taproot: los mineros todavía podían frenarlo, pero solo durante unos tres meses.

Lee [El proceso de los BIPs (en inglés)](/rabbit-hole/bip-process) para ver cómo encajan los bits de versión en la maquinaria más amplia de las actualizaciones.
