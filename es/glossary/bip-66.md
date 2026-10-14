---
title: "BIP 66"
slug: bip-66
draft: false
published: "2026-10-14"
shortDefinition: "Exige firmas codificadas en DER estricto, lo que mitiga ciertos problemas de maleabilidad de transacciones y de lectura de firmas."
keyTakeaways:
  - "Hace que las firmas sigan un único estándar DER"
  - "Reduce la maleabilidad al eliminar codificaciones alternativas"
  - "Mejora la estabilidad de la red y la compatibilidad de las billeteras"
sources:
  - { label: "BIP 66 - strict DER signatures: removes the consensus rules' reliance on OpenSSL's signature parsing, with reduced malleability as an added benefit (deployment reuses the BIP 34 switchover)", url: "https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki" }
  - { label: "BIP 68 - deployed by BIP 9 version bits, starting May 2016", url: "https://github.com/bitcoin/bips/blob/master/bip-0068.mediawiki" }
  - { label: "bitcoin.org alert - July 2015 chain forks (a 6-block invalid chain on July 4, 2015)", url: "https://bitcoin.org/en/alert/2015-07-04-spv-mining" }
  - { label: "BIP 146 - the signature malleability left after BIP 66 (negating S); LOW_S relay policy since Bitcoin Core 0.11.1; status Closed", url: "https://github.com/bitcoin/bips/blob/master/bip-0146.mediawiki" }
  - { label: "BIP 62 - known sources of malleability, including changes to the scriptSig (status Closed)", url: "https://github.com/bitcoin/bips/blob/master/bip-0062.mediawiki" }
  - { label: "BIP 141 - Segregated Witness: signature data is no longer part of the txid", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "BIP 9 deployments table - csv (BIPs 68, 112, 113) from May 2016, then segwit, active since block 481,824", url: "https://github.com/bitcoin/bips/blob/master/bip-0009/assignments.mediawiki" }
  - { label: "mempool.space - block 481,824, mined August 24, 2017", url: "https://mempool.space/block/0000000000000000001c8018d9cb3b742ef25114f27563e3fc4a1902167f9893" }
  - { label: "Christian Decker and Roger Wattenhofer - Bitcoin Transaction Malleability and MtGox (ETH Zurich, March 2014): no widespread malleability attacks; at most about 386 BTC taken", url: "https://arxiv.org/abs/1403.6676" }
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - elliptic-curve
  - schnorr-signature
  - signature-aggregation
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0066"
liveWidget: ~
translationOf: bip-66
sourceHash: "f044da97b21c"
sourceCommit: "c546920"
sourceUpdated: "2026-10-10"
translation: { method: "llm-draft" }
---

[BIP 66](https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki) endureció las reglas de codificación de firmas de Bitcoin para exigir el formato estricto **Distinguished Encoding Rules (DER)**. Activado como soft fork (bifurcación compatible hacia atrás) en julio de 2015, su objetivo principal era que las reglas de consenso de Bitcoin dejaran de depender de los detalles de cómo la biblioteca OpenSSL leía las firmas. De paso redujo un tipo de maleabilidad de las transacciones, que el BIP menciona como beneficio adicional.

El problema: antes del BIP 66, Bitcoin aceptaba cualquier firma que OpenSSL aceptara, y OpenSSL era permisivo. Una misma firma ECDSA, en términos lógicos, podía codificarse de varias maneras: ceros a la izquierda, distintas codificaciones de los enteros, búferes con relleno. Cada codificación se interpretaba como la misma firma, pero los *bytes* eran distintos, y eso significaba que el txid de la transacción (que se calcula sobre esos bytes) también era distinto.

Era una forma de maleabilidad de las transacciones: alguien podía interceptar una transacción ya transmitida a la red, volver a codificar la firma de otra manera válida y retransmitirla con un txid diferente. La billetera del remitente original perdía el rastro de la transacción aunque esta terminara confirmándose. El caso famoso es Mt. Gox: en febrero de 2014 culpó a la maleabilidad de las pérdidas que acabaron con el exchange, y que después cifró en unos 850,000 BTC. Christian Decker y Roger Wattenhofer, de ETH Zúrich, estudiaron más de un año de datos de la red y no encontraron un uso generalizado de ataques de maleabilidad antes de esa fecha. Según su conteo, a lo sumo unos 386 BTC pudieron haber sido robados así, de Mt. Gox o de quien fuera.

La solución del BIP 66: exigir que las firmas estén en formato DER canónico, es decir, una sola disposición de bytes por cada firma lógica. Cualquier otra cosa la rechazan todos los nodos.

Eso cerró la puerta a los trucos de codificación. No eliminó todas las formas de alterar una firma. Una firma ECDSA sigue siendo válida si su valor S se cambia por su imagen espejo en la otra mitad del rango permitido, así que cualquiera que retransmitiera una transacción podía convertir una firma "low-S" en una "high-S" y cambiar el txid. El BIP 66 no tocó eso. Bitcoin Core se niega a retransmitir firmas high-S desde la versión 0.11.1, pero eso es solo política de retransmisión. El BIP 146, que proponía convertirlo en regla de consenso, se cerró sin llegar a desplegarse. Algunos cambios al script de desbloqueo de una transacción también seguían siendo válidos.

La solución de raíz llegó con SegWit, en vigor desde el bloque 481,824, en agosto de 2017. Cuando una transacción gasta salidas SegWit, sus firmas van en una sección aparte, el testigo (witness), que el txid no cubre, de modo que cambiarlas ya no cambia el txid. Las transacciones que gastan salidas de tipo antiguo, sin SegWit, siguen siendo maleables en principio. El BIP 66 fue un paso intermedio útil.

El BIP 66 reutilizó el mecanismo de cambio por número de versión del BIP 34: una vez que 950 de los 1,000 bloques anteriores eran de versión 3, los bloques de versión 2 pasaban a ser inválidos. El mecanismo de bits de versión del BIP 9 llegó después, y su primer despliegue fue el soft fork CSV de 2016 (BIP 68, BIP 112 y BIP 113).

La regla empezó a aplicarse el 4 de julio de 2015. Poco después, un minero pequeño que no había actualizado produjo un bloque inválido, y mineros que no validaban por completo lo extendieron hasta formar una cadena de 6 bloques antes de que la cadena válida tomara la delantera. [Cómo funciona Bitcoin](/es/recorrido/como-funciona-bitcoin) coloca esa bifurcación junto a las otras reorganizaciones (reorgs) profundas de la historia de Bitcoin.
