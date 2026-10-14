---
title: "P2WPKH (pago a hash de clave pública con testigo)"
slug: p2wpkh
draft: false
published: "2026-10-15"
shortDefinition: "Un formato de SegWit nativo de una sola firma (por lo general bech32, bc1q...) que baja las comisiones e impide la maleabilidad de las firmas."
keyTakeaways:
  - "Una versión de testigo para una sola clave y una sola firma, con mejor eficiencia en comisiones"
  - "Saca los datos de la firma del cuerpo principal de la transacción y elimina la maleabilidad"
  - "Recomendado como estándar para las billeteras modernas, por encima de las direcciones legacy"
aliases:
  - "P2WPKH"
  - "pay-to-witness-public-key-hash"
  - "Pay to Witness Public Key Hash"
  - "pago a hash de clave pública con testigo"
  - "direcciones P2WPKH"
  - "salidas P2WPKH"
  - "bc1q"
sources:
  - { label: "Bitcoin Core 0.20.0 release notes (2020) - wallet uses bech32 addresses by default", url: "https://bitcoincore.org/en/releases/0.20.0/" }
  - { label: "mainnet-observer - Output Types by Count, daily share of P2WPKH, P2TR and other outputs", url: "https://mainnet.observer/charts/output-type-distribution-count/" }
  - { label: "BIP 341 - Taproot: 32-byte output key and 64-byte key-path signature", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "BIP 141 - Segregated Witness: the P2WPKH witness is a signature and the public key", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
relatedTerms:
  - address
  - bip-85
  - p2sh
  - p2wsh-pay-witness-script-hash
  - p2pkh-pay-public-key-hash
  - p2pk-pay-public-key
  - post-quantum-bitcoin
  - utxo-unspent-transaction-output
sameAs:
  - "https://en.wikipedia.org/wiki/SegWit"
  - "https://www.wikidata.org/wiki/Q30327698"
  - "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0141"
liveWidget: ~
translationOf: p2wpkh-pay-witness-public-key-hash
sourceHash: "9e4fdb9ac29f"
sourceCommit: "94e823a"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

P2WPKH, "Pay to Witness Public Key Hash" (pago a hash de clave pública con testigo), es la versión de [P2PKH](/es/glosario/p2pkh) en [SegWit](/es/glosario/segwit) nativo. Es el formato de dirección de una sola firma que se volvió estándar después de que SegWit se activó en 2017. Las direcciones empiezan con `bc1q` (por ejemplo, `bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq`).

Funcionalmente es idéntico a P2PKH: se bloquea al hash de 20 bytes de una [clave pública](/es/glosario/clave-publica) y se desbloquea con la clave pública más una firma. Lo que cambia es *dónde vive la firma*.

En SegWit, los datos de desbloqueo (el "testigo" o witness) van separados del cuerpo principal de la transacción. Eso tiene dos consecuencias prácticas:

- **Comisión efectiva más baja.** Los datos de testigo cuentan una cuarta parte del peso de los datos que no son de testigo. Un gasto P2WPKH típico cuesta alrededor de un 40% menos en comisiones que el gasto P2PKH equivalente.
- **Sin maleabilidad de las transacciones.** El [txid](/es/glosario/transaccion) se calcula solo sobre la parte que no es testigo. La firma no se puede retocar después de transmitirla para cambiar el txid. Esto es lo que hizo que [Lightning](/es/glosario/lightning-network) fuera desplegable en la práctica.

P2WPKH es el tipo de dirección predeterminado de Bitcoin Core desde la versión 0.20.0 (2020), y desde 2022 ha sido el tipo de salida más común en la cadena la mayoría de los meses. En septiembre de 2026 representó alrededor del 53% de las salidas nuevas, frente a cerca del 5% de [P2TR](/es/glosario/taproot) (Taproot, `bc1p...`). Para el uso con una sola clave, las entradas más pequeñas y las salidas más grandes de Taproot dejan las comisiones más o menos a la par con P2WPKH. P2WPKH sigue contando con soporte completo, es más barato que P2PKH y P2SH, y es una opción perfectamente buena para el uso cotidiano.

Como P2PKH, P2WPKH ofrece defensa en profundidad frente a las [amenazas poscuánticas](/es/glosario/bitcoin-poscuantico): la clave pública queda detrás de un hash en la dirección y solo se revela al gastar. Al reutilizar la dirección se pierde esa cobertura, porque el primer gasto pone la clave pública sin hash en el testigo, y cada depósito posterior a esa dirección hereda esa exposición.
