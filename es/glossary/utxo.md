---
title: "UTXO (salida de transacción no gastada)"
slug: utxo
draft: false
published: "2026-10-14"
shortDefinition: "Una porción gastable de BTC registrada en la cadena. Cada entrada de una transacción consume uno o más UTXOs."
keyTakeaways:
  - "Refleja el concepto de 'moneda' en el modelo de registro de Bitcoin"
  - "Debe gastarse por completo; lo que sobra tiene que ir a una salida de 'cambio'"
  - "Fundamental para la lógica de las transacciones on-chain y para la privacidad"
aliases:
  - "UTXOs"
  - "salida de transacción no gastada"
  - "salidas de transacción no gastadas"
  - "salida no gastada"
sources:
  - { label: "UTXOs rabbit hole", url: "https://www.learnbitcoin.com/rabbit-hole/utxos" }
relatedTerms:
  - absolute-fee
  - coin-age
  - coin-control
  - coinbase-transaction
  - consolidation-transaction
  - output-transaction-output
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
  - p2pkh-pay-public-key-hash
  - p2pk-pay-public-key
  - transaction
  - transaction-index-txindex
  - vanity-address
sameAs:
  - "https://en.wikipedia.org/wiki/Unspent_transaction_output"
  - "https://www.wikidata.org/wiki/Q55636735"
  - "https://en.bitcoin.it/wiki/UTXO"
liveWidget: ~
translationOf: utxo-unspent-transaction-output
sourceHash: "74ee9e9d29dc"
sourceCommit: "01378cb"
translation:
  method: "llm-draft"
---

Un UTXO (del inglés **u**nspent **t**ransaction **o**utput, salida de transacción no gastada) es una [salida de transacción](/es/glosario/salida-de-transaccion) que todavía se puede gastar. Bitcoin no registra saldos de cuentas; registra UTXOs. El "saldo" que te muestra tu billetera es solo la suma de todos los UTXOs que esa billetera puede desbloquear.

Cada UTXO tiene dos partes: un **monto** (en satoshis) y un **script de bloqueo** que define qué hace falta para gastarlo. El script más común es "demuestra que tienes la clave privada de esta dirección". Los scripts más avanzados pueden exigir varias firmas, un tiempo de espera u otras condiciones.

Los UTXOs son todo o nada. Cuando gastas uno como [entrada de una transacción](/es/glosario/entrada-de-transaccion), se consume entero. Si solo quieres enviar una parte, tu transacción crea dos salidas: una para quien recibe y otra de vuelta para ti como **cambio**. La mayoría de las billeteras lo hacen sin que lo notes y eligen una dirección nueva para el cambio.

Pensar en UTXOs importa por dos razones prácticas:

- **Comisiones.** Cada entrada que gastas ocupa entre 68 y 148 bytes aproximadamente (según el tipo de script), y las transacciones más grandes cuestan más. Muchos UTXOs pequeños = transacciones caras. Consolidarlos de vez en cuando, cuando las comisiones están bajas, puede ahorrarte dinero después.
- **Privacidad.** Cuando gastas dos UTXOs en la misma transacción, declaras públicamente que tenían un dueño en común. Los analistas de cadena usan eso para agrupar direcciones. El control de monedas (elegir a mano qué UTXOs gastar) y herramientas como [CoinJoin](/es/glosario/coinjoin) te permiten defenderte.

Profundiza en el [tema a fondo sobre UTXOs (en inglés)](/rabbit-hole/utxos): direcciones de cambio, selección de monedas, polvo (dust) y las implicaciones para la privacidad. Consulta también [Transacción](/es/glosario/transaccion) para la estructura de datos que consume y crea UTXOs, y la [sección 6 del tema a fondo sobre minería (en inglés)](/rabbit-hole/mining) para ver cómo los mineros los valoran.
