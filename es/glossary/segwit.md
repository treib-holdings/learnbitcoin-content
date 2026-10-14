---
title: "SegWit (testigo segregado, BIP 141)"
slug: segwit
draft: false
published: "2026-10-14"
shortDefinition: "El BIP principal de Segregated Witness (testigo segregado), que separa los datos de testigo, corrige la maleabilidad y, en la práctica, aumenta la capacidad de los bloques."
keyTakeaways:
  - "Saca los datos de testigo del hash que forma el id de la transacción; siguen dentro del bloque"
  - "Resuelve la maleabilidad y aumenta la capacidad"
  - "Hace posibles soluciones de capa 2 como Lightning"
aliases:
  - "SegWit"
  - "Segregated Witness"
  - "testigo segregado"
  - "BIP 141"
  - "BIP-141"
sources:
  - { label: "BIP 141 - Segregated Witness (Consensus layer): block weight is base size * 3 + total size, capped at 4,000,000, where base size is what a non-upgraded node sees; txid stays the double SHA256 of the serialization without witness data, so nonintentional malleability becomes impossible once all inputs are signed; witness versions 1 to 16 are reserved for future extensions; fixing malleability enables trust-free chains of unconfirmed transactions", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "Bitcoin Core - Segregated Witness Benefits (January 26, 2016): old nodes only download the witness-stripped block and enforce the 1 MB limit on that; segwit raises the limit to nearly 4 MB, with an effective limit closer to 1.6 to 2 MB", url: "https://bitcoincore.org/en/2016/01/26/segwit-benefits/" }
  - { label: "mempool.space - block 481,824 (01:57 UTC, August 24, 2017), the first block under SegWit rules", url: "https://mempool.space/block/0000000000000000001c8018d9cb3b742ef25114f27563e3fc4a1902167f9893" }
  - { label: "Bitcoin Cash UAHF technical specification: activation time 1501590000 (12:20 UTC, August 1, 2017); the fork block must be larger than 1,000,000 bytes", url: "https://github.com/bitcoincashorg/bitcoincash.org/blob/master/spec/uahf-technical-spec.md" }
  - { label: "Bitcoin Core 0.20.0 release notes (June 3, 2020): the wallet now uses bech32 addresses by default over RPC and creates native segwit change outputs", url: "https://bitcoincore.org/en/releases/0.20.0/" }
  - { label: "mainnet.observer - SegWit spending payments chart (0xB10C, the open-source successor to transactionfee.info): 96.5% of payments spent SegWit outputs over the 30 days to October 13, 2026, computed from the site's date.csv, payments_sum.csv and payments_segwit_spending_tx_sum.csv", url: "https://mainnet.observer/charts/payments-spending-segwit/" }
relatedTerms:
  - bech32m
  - bip-bitcoin-improvement-proposal
  - bip-9-versionbits
  - p2sh
  - bip-91
  - bip-144-segwit-relay
  - bip-148-uasf
  - taproot
  - bip-342-tapscript
  - native-segwit
  - p2sh-p2wsh-nested-segwit
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
sameAs:
  - "https://en.wikipedia.org/wiki/SegWit"
  - "https://www.wikidata.org/wiki/Q30327698"
  - "https://en.bitcoin.it/wiki/Segregated_Witness"
  - "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki"
  - "https://bitcoinops.org/en/topics/segregated-witness/"
liveWidget: ~
translationOf: segwit-segregated-witness-bip-141
sourceHash: "d702457e8f3f"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

SegWit (**Seg**regated **Wit**ness, "testigo segregado") es el soft fork (una bifurcación compatible hacia atrás) que se activó en Bitcoin el 24 de agosto de 2017, en el bloque 481,824, definido en el [BIP 141](https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki). Reestructuró la forma en que las [transacciones](/es/glosario/transaccion) de Bitcoin guardan los datos de firma y resolvió varios problemas a la vez.

El cambio central: los datos de firma (los "datos de testigo") se sacaron del cuerpo principal de la transacción y se pasaron a una estructura aparte que sigue dentro del bloque, pero que los nodos antiguos nunca descargan, así que no cuenta para el límite de 1 MB de tamaño de bloque que esos nodos siguen haciendo cumplir. Para los nodos actualizados, los bloques se redefinieron en términos de **unidades de peso**, con un máximo de 4 millones de unidades de peso por bloque. Los datos de testigo cuestan 1 unidad de peso por byte; los datos que no son de testigo cuestan 4. Esto más o menos duplicó la capacidad (a entre 1.6 y 2 MB de transacciones típicas) sin un hard fork.

Lo que SegWit corrigió:

- **La maleabilidad de las transacciones.** Antes de SegWit, el [txid](/es/glosario/transaccion) se calculaba sobre la transacción completa, firmas incluidas, y las firmas eran maleables. Un tercero podía cambiar la apariencia de una transacción (y su txid) sin invalidarla. Eso rompía las cadenas de transacciones sin confirmar y hacía casi imposible construir protocolos de capa 2 con seguridad. SegWit excluye los datos de testigo del cálculo del txid, así que, una vez firmadas todas las entradas, nadie más puede cambiar el txid.
- **La capacidad de los bloques.** El límite pasó de 1 MB a casi 4 MB en el caso extremo, lo que en la práctica da entre 1.6 y 2 MB para una mezcla típica de transacciones.
- **Las actualizaciones futuras.** SegWit puso un byte de versión delante de cada programa testigo (witness program) y reservó las versiones 1 a 16 para futuros sistemas de script; así fue como más tarde se añadió [Taproot](/es/glosario/taproot) como un soft fork limpio.

La activación de 2017 fue políticamente explosiva: salió de la [guerra del tamaño de bloque (en inglés)](/glossary/block-size-war), que duró varios años, entre quienes querían aumentar el tamaño de bloque a secas y quienes querían escalar con una capa 2. El bando de los bloques grandes se bifurcó de la cadena como [Bitcoin Cash (en inglés)](/glossary/bitcoin-cash) el 1 de agosto de 2017, tres semanas antes de que SegWit entrara en vigor. El resto de la comunidad de Bitcoin se quedó con SegWit y con la hoja de ruta de escalado por capas, y la [Lightning Network](/es/glosario/lightning-network), que depende de txids estables, ya se podía construir encima.

La adopción inicial se facilitó con las variantes envueltas en P2SH, [P2SH-P2WPKH y P2SH-P2WSH (en inglés)](/glossary/p2sh-p2wsh-nested-segwit), que permitían a quien recibe aprovechar las ventajas de SegWit detrás de una dirección `3...` conocida, que quienes enviaban ya sabían manejar. Después llegó [SegWit nativo (en inglés)](/glossary/native-segwit) (`bc1q...`): Bitcoin Core hizo de bech32 el formato predeterminado de su billetera en la versión 0.20.0 (junio de 2020), y las variantes envueltas quedaron como alternativa de compatibilidad.

Para octubre de 2026, más del 95% de los pagos gastan salidas SegWit. Las salidas antiguas (legacy), anteriores a SegWit, todavía existen, pero son una proporción cada vez menor.
