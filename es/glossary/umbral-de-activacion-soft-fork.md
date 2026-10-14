---
title: "Umbral de activación (soft fork)"
slug: umbral-de-activacion-soft-fork
aliases:
  - "umbral de activación"
  - "umbral de despliegue"
published: "2026-10-14"
draft: false
shortDefinition: "El porcentaje de bloques que deben señalizar apoyo a un soft fork antes de que quede fijado (locked in) y se active (por ejemplo, 95%)."
keyTakeaways:
  - "Fija una meta de señalización en bloques para saber si un soft fork está listo"
  - "Garantiza que las actualizaciones solo se activen con un apoyo alto de los mineros"
  - "A veces se critica por darles a los mineros una influencia desproporcionada"
sources:
  - { label: "BIP 341 - Deployment: modified BIP 9, 90% threshold, signaling 24 April to 11 August 2021, minimum activation height 709,632", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki#deployment" }
  - { label: "BIP 9 - Version bits (threshold 1,916 of 2,016 blocks, 95%, in a 2,016-block retarget period)", url: "https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki" }
  - { label: "BIP 141 - Segregated Witness, deployment (BIP-9 bit 1, signaling from November 15, 2016)", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "Bitcoin Magazine - BIP91: The SegWit Activation Kludge That Should Keep Bitcoin Whole (Aaron van Wirdum, June 16, 2017): only some 30 percent of hash power signals for SegWit; SegWit2x pairs SegWit with a hard fork to 2 MB; BIP91 uses its own 80% trigger on bit 4 to activate the existing SegWit deployment", url: "https://bitcoinmagazine.com/technical/bip91-segwit-activation-kludge-should-keep-bitcoin-whole" }
  - { label: "Mike Belshe - Segwit2x Final Steps (bitcoin-segwit2x list, November 8, 2017, archived): SegWit had only 30% support among miners in May 2017", url: "https://web.archive.org/web/20171108202305/https://lists.linuxfoundation.org/pipermail/bitcoin-segwit2x/2017-November/000685.html" }
  - { label: "Bitcoin Magazine - Breaking Down Bitcoin's AsicBoost Scandal (Aaron van Wirdum, April 12, 2017): covert AsicBoost is largely incompatible with SegWit; Bitmain says its chips support AsicBoost but denies using it on the main chain", url: "https://bitcoinmagazine.com/technical/breaking-down-bitcoins-asicboost-scandal" }
  - { label: "BIP 8 - Version bits with lock-in by height: BIP 9's near-unanimous threshold can mean a veto by a small minority of non-signaling hash rate; its lockinontimeout option requires blocks to signal in a deployment's final period", url: "https://github.com/bitcoin/bips/blob/master/bip-0008.mediawiki" }
  - { label: "BIP 148 - Mandatory activation of segwit deployment (from midnight August 1, 2017, blocks that do not signal for SegWit are rejected, until SegWit locks in)", url: "https://github.com/bitcoin/bips/blob/master/bip-0148.mediawiki" }
  - { label: "BIP 91 - Reduced threshold Segwit MASF (its own deployment, segsignal, on bit 4: activates once 269 of 336 blocks, 80%, signal; while active, blocks that do not signal for SegWit on bit 1 are rejected)", url: "https://github.com/bitcoin/bips/blob/master/bip-0091.mediawiki" }
  - { label: "mempool.space - block 477,120 (04:46 UTC, July 23, 2017), first block with BIP 91 active; it and every block after it up to SegWit's lock-in signal bit 1", url: "https://mempool.space/block/0000000000000000015411ca4b35f7b48ecab015b14de5627b647e262ba0ec40" }
  - { label: "mempool.space - block 479,808 (12:36 UTC, August 9, 2017), first block of SegWit's locked-in period; all 2,016 blocks of the previous period signaled bit 1", url: "https://mempool.space/block/0000000000000000012e6060980c6475a9a8e62a1bf44b76c5d51f707d54522c" }
  - { label: "mempool.space - block 481,824 (01:57 UTC, August 24, 2017), the first block under SegWit rules", url: "https://mempool.space/block/0000000000000000001c8018d9cb3b742ef25114f27563e3fc4a1902167f9893" }
relatedTerms:
  - bip-9-versionbits
  - bip-91
  - bip-119-ctv
  - bip-148-uasf
  - bip-159
  - chain-flag-day
  - consensus-parameter
  - locked-period-soft-fork
  - soft-fork
liveWidget: ~
translationOf: deployment-threshold-soft-fork
sourceHash: "8a4ccb6aceeb"
sourceCommit: "659e6f9"
sourceUpdated: "2026-10-10"
translation:
  method: "llm-draft"
---

El umbral de activación es el porcentaje de bloques recientes que deben señalizar apoyo a una propuesta de soft fork (bifurcación compatible hacia atrás) antes de que esta se active. Bajo BIP 9 (bits de versión), el umbral estándar era que el 95% de los bloques de un periodo de ajuste de dificultad de 2,016 bloques llevaran encendido un bit de versión designado.

Esto funcionó bien para actualizaciones técnicas que la comunidad minera respaldaba de forma unánime. Funcionó mal para actualizaciones que los mineros tenían razones económicas o políticas para frenar.

El despliegue de SegWit (de 2016 a 2017) es el caso de estudio canónico. La señalización se abrió el 15 de noviembre de 2016, pero en mayo y principios de junio de 2017 solo alrededor del 30% de los bloques señalizaban a favor de SegWit. Muchos mineros querían un aumento del tamaño de bloque como parte de cualquier acuerdo. Algunos sospechaban también un motivo comercial: una forma encubierta de usar la optimización de minería ASICBoost dejaría de funcionar en gran medida bajo SegWit. Bitmain, cuyos chips eran compatibles con ASICBoost, dijo que no lo había usado en la cadena principal. Un umbral del 95% permite que una pequeña minoría de mineros bloquee una actualización; en el caso de SegWit, la mayoría de los mineros no estaba señalizando.

La solución llegó por dos frentes. BIP 148, un soft fork activado por los usuarios (UASF, User-Activated Soft Fork), fijó una fecha de activación forzosa (flag day): a partir del 1 de agosto de 2017, sus nodos rechazarían cualquier bloque que no señalizara a favor de SegWit. BIP 91 no bajó el umbral del 95% de SegWit. Puso en marcha un despliegue aparte en el bit 4 con su propio umbral del 80% (269 de 336 bloques) y, una vez activo, desde el bloque 477,120 el 23 de julio de 2017, los nodos que lo corrían rechazaban cualquier bloque que no señalizara a favor de SegWit. Desde entonces y hasta que SegWit quedó fijado, todos los bloques señalizaron a su favor. SegWit alcanzó su propio umbral del 95% con 2,016 de 2,016 bloques, quedó fijado el 9 de agosto y se activó en el bloque 481,824 el 24 de agosto de 2017. La regla de BIP 148 ya se cumplía cuando entró en vigor, así que nunca se puso a prueba contra mineros que se negaran a señalizar.

Lección aprendida: la activación basada solo en un umbral de mineros deja las actualizaciones como rehenes de la política minera. La activación de Taproot usó Speedy Trial: señalización BIP 9 con un umbral del 90 por ciento durante unos tres meses, más una altura mínima de activación para que quienes operan nodos tuvieran tiempo de actualizar. Todavía podía fracasar si los mineros no señalizaban, pero la ventana corta significaba que un fracaso sería rápido, en lugar de un bloqueo que se arrastrara durante un año.

El umbral de activación sigue siendo una señal de coordinación, y bajo Speedy Trial siguió decidiendo si Taproot se activaba o no. [BIP 8 (en inglés)](/glossary/bip-8), en cambio, puede configurarse para terminar un despliegue con señalización obligatoria.
