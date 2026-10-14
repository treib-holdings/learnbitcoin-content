---
title: "Replace-by-Fee (RBF)"
slug: rbf
draft: false
published: "2026-10-13"
shortDefinition: "Un mecanismo que permite a quien envía retransmitir una transacción sin confirmar con una comisión más alta, reemplazando la transacción original en el mempool."
keyTakeaways:
  - "Permite subir la comisión de transacciones sin confirmar"
  - "Da más control al usuario cuando el mempool está congestionado"
  - "Reduce la confiabilidad de los pagos sin confirmación (zero-conf)"
aliases:
  - "RBF"
  - "Replace-by-Fee"
  - "reemplazo por comisión"
sources:
  - { label: "BIP 125 - Opt-in Full Replace-by-Fee Signaling: a transaction opts in if any input has an nSequence less than 0xffffffff - 1; a replacement must pay at least the absolute fee of the originals plus enough to cover its own bandwidth at the minimum relay fee; no known wallet signaled by default when the BIP was written", url: "https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki" }
  - { label: "Bitcoin Core - doc/policy/mempool-replacements.md: the current rules (absolute fee, incremental relay feerate, cluster limit, and from 31.0 a strictly improved feerate diagram), with the signaling and new-unconfirmed-input rules removed; opt-in RBF honoured in mempool and mining since 0.12.0; full RBF the default since 28.0", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/policy/mempool-replacements.md" }
  - { label: "Bitcoin Optech - Replace-by-fee (RBF) topic: a node policy that lets an unconfirmed transaction be replaced by one that spends at least one of the same inputs and pays a higher fee; full-RBF replaces whether or not the original signaled", url: "https://bitcoinops.org/en/topics/replace-by-fee/" }
  - { label: "Bitcoin Core 0.16.0 release notes (February 26, 2018): the GUI send screen uses BIP 125 RBF by default", url: "https://bitcoincore.org/en/releases/0.16.0/" }
  - { label: "Bitcoin Core 28.0 release notes (October 2, 2024): the default of -mempoolfullrbf changed from 0 to 1", url: "https://bitcoincore.org/en/releases/28.0/" }
  - { label: "Bitcoin Core 29.0 release notes (April 14, 2025): the -mempoolfullrbf option removed, making full replace-by-fee the standard behavior", url: "https://bitcoincore.org/en/releases/29.0/" }
relatedTerms:
  - absolute-fee
  - accelerator
  - bip-125-replace-fee
  - delayed-justice-transaction
  - fee-bumping
  - fee-estimation
  - fee-floor
  - fee-rate-escalation
  - fee-sniping
  - full-rbf
  - transaction
  - transaction-fee
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki"
  - "https://bitcoinops.org/en/topics/replace-by-fee/"
liveWidget: ~
translationOf: replace-fee-rbf
sourceHash: "1b1d47004688"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

Replace-by-Fee (RBF, reemplazo por comisión) es una política del [mempool](/es/glosario/mempool) que permite a quien envía retransmitir una [transacción](/es/glosario/transaccion) atascada con una [comisión](/es/glosario/estimacion-de-comision) más alta, reemplazando la original.

Definido en el [BIP 125 (en inglés)](/glossary/bip-125-replace-fee) e incluido en Bitcoin Core 0.12.0, el RBF opcional (opt-in) funciona así: la transacción original señala que es reemplazable poniendo en al menos una de sus entradas un valor de `nSequence` de 0xfffffffd o menor (al menos dos por debajo del máximo). Si la congestión deja tu transacción atascada, puedes construir una transacción nueva que:

- Gaste al menos uno de los mismos UTXOs.
- Pague al menos tanta comisión absoluta como todo lo que reemplaza, más un extra suficiente para cubrir el ancho de banda que consume su propia retransmisión.
- Pague una *tasa* de comisión más alta que la original. (Esta regla es política de Bitcoin Core y no del BIP 125; desde Bitcoin Core 31.0 la prueba formal es que el reemplazo debe dejar el diagrama de tasas de comisión del mempool estrictamente mejor que antes.)

Los nodos que aceptan el reemplazo descartan la transacción vieja de su mempool y se quedan con la nueva. Los mineros, que buscan la tasa de comisión más alta, tienen más probabilidades de incluir la tuya.

Qué ganas con RBF:

- **Recuperarte de una comisión que se quedó corta.** Calculaste la comisión en un momento tranquilo y te agarró la congestión; subes la comisión y sigues adelante.
- **Confirmación más rápida cuando cambia la urgencia.** Necesitabas que se confirmara barato y de pronto necesitas que se confirme ya.

Qué cuesta:

- **La confiabilidad de los pagos sin confirmación (zero-conf).** Quien recibe y ve "sin confirmar en el mempool" ya no puede dar por hecho que la transacción no será reemplazada. Las transacciones que señalan RBF lo admiten de forma explícita. (Las que no lo señalaban tuvieron en su momento una posición algo más firme como pagos sin confirmación, pero Bitcoin Core retransmite por defecto los reemplazos de transacciones sin señal desde la versión 28.0, en octubre de 2024, y la 29.0 eliminó la opción.) Consulta [Full RBF (en inglés)](/glossary/full-rbf).

La interfaz gráfica de la billetera de Bitcoin Core señala RBF por defecto desde la versión 0.16.0 (2018). Los comercios que antes aceptaban pagos sin confirmación solo de transacciones sin señal perdieron esa protección cuando el full RBF (el reemplazo sin importar la señal) pasó a ser el comportamiento por defecto; lo seguro es esperar la primera confirmación. Consulta [Subir la comisión](/es/glosario/subir-la-comision) (fee bumping) para el concepto general: RBF es un método y Child Pays for Parent (CPFP, el hijo paga por el padre) es el otro.
