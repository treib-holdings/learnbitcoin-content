---
title: "Canal de pago"
slug: canal-de-pago
draft: false
published: "2026-10-14"
shortDefinition: "Un mecanismo off-chain (Lightning, por ejemplo) que permite transacciones repetidas entre dos partes sin tocar la cadena de bloques (blockchain) a cada rato."
keyTakeaways:
  - "Permite transacciones frecuentes sin pagar varias comisiones on-chain"
  - "Usa una salida multisig que solo se liquida en la cadena al abrir y al cerrar"
  - "Es la base del escalado en segunda capa (la red Lightning, por ejemplo)"
aliases:
  - "canales de pago"
  - "payment channel"
  - "payment channels"
sources:
  - { label: "Joseph Poon and Thaddeus Dryja - The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments, sections 2 and 3: 2-of-2 multisignature funding output, old states invalidated by penalty, balance reflected on the blockchain only when a party disagrees (14 January 2016)", url: "https://lightning.network/lightning-network-paper.pdf" }
  - { label: "Lightning BOLT #0 - Introduction and Index: channels, commitment transactions, commitment revocation keys, penalty transactions", url: "https://github.com/lightning/bolts/blob/master/00-introduction.md" }
  - { label: "Lightning BOLT #3 - Bitcoin Transaction and Script Formats: funding output is a P2WSH 2-of-2 multisig; to_self_delay and penalty transactions", url: "https://github.com/lightning/bolts/blob/master/03-transactions.md" }
  - { label: "BIP-118 - SIGHASH_ANYPREVOUT for Taproot Scripts, consensus soft fork, status Draft", url: "https://github.com/bitcoin/bips/blob/master/bip-0118.mediawiki" }
  - { label: "Christian Decker, Rusty Russell and Olaoluwa Osuntokun - eltoo: A Simple Layer2 Protocol for Bitcoin (2018)", url: "https://blockstream.com/eltoo.pdf" }
  - { label: "Bitcoin Optech - Eltoo (LN-Symmetry) topic: lets any later channel state replace any earlier one without a penalty mechanism", url: "https://bitcoinops.org/en/topics/eltoo/" }
relatedTerms:
  - delayed-payment-channel
  - eltoo
  - escrow
  - escrowed-lightning-channel
  - htlc-hashed-time-locked-contract
  - lightning-channel
  - lightning-channel-splicing
  - lightning-network
  - lightning-payment
  - locktime
  - submarine-swap
liveWidget: ~
translationOf: payment-channel
sourceHash: "d4d6d3535d5c"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

Un canal de pago es el concepto general de dos partes que bloquean bitcoin en una salida on-chain compartida e intercambian entre ellas actualizaciones firmadas del saldo, off-chain, sin transmitir cada una a la red. La cadena ve dos transacciones en total (una para abrir y otra para cerrar) mientras en medio pueden ocurrir miles de transferencias.

El mecanismo resuelve la disyuntiva de escalabilidad de Bitcoin. En la cadena, cada pago cuesta espacio en el bloque, tarda en confirmarse lo que dure el [tiempo de bloque (en inglés)](/glossary/block-time), unos 10 minutos en promedio, y paga una comisión. Off-chain, dentro de un canal, cada pago es instantáneo y no cuesta nada on-chain. Lo que mantiene honestos a ambos lados es que cualquiera de los dos puede llevar el último estado firmado a la cadena de [prueba de trabajo](/es/glosario/prueba-de-trabajo) (proof-of-work) en cualquier momento: la cadena es el tribunal de última instancia, no el lugar donde se hace cada pago.

Las piezas mínimas de un canal de pago:

1. **Una salida [multisig](/es/glosario/multisig) 2 de 2** que bloquea los fondos de ambas partes, creada por una sola [transacción](/es/glosario/transaccion) de financiamiento on-chain.
2. **Transacciones de compromiso** (commitment transactions): transacciones firmadas pero no transmitidas, cada una de las cuales representa el reparto actual del saldo. Cada nueva transferencia crea un nuevo compromiso que reemplaza al anterior.
3. **Un mecanismo de revocación** para que transmitir un compromiso viejo que te favorezca tenga castigo: en Lightning, la parte engañada puede reclamar el saldo completo del canal con una [transacción de penalización (en inglés)](/glossary/penalty-transaction). Sin esto, cualquiera podría hacer trampa volviendo a un estado que le conviniera más.
4. **Un mecanismo de tiempo límite** para que ninguna de las partes pueda quedar como rehén para siempre si la otra se desconecta.

La implementación de Lightning usa [HTLCs](/es/glosario/htlc) para los pagos condicionales y una clave de revocación nueva para cada compromiso, que se entrega una vez firmado el estado siguiente, para que todo esto funcione sin necesidad de confiar en la otra parte. Consulta [Canal Lightning](/es/glosario/canal-lightning) para los detalles propios de Lightning.

Existen, o se han propuesto, otros diseños de canal de pago. **[Eltoo (en inglés)](/glossary/eltoo)** (también llamado LN-Symmetry), propuesto en 2018 por Christian Decker, Rusty Russell y Olaoluwa Osuntokun, permite que cualquier estado posterior del canal reemplace a cualquier estado anterior, así que la maquinaria de penalización deja de ser necesaria; depende del modo de firma [`SIGHASH_ANYPREVOUT` (en inglés)](/glossary/anyprevout) del BIP 118, que todavía es un soft fork (bifurcación compatible hacia atrás) en borrador. En 2026, lo que de verdad está desplegado a escala es el canal Lightning especificado en los BOLTs.

Los canales de pago son la forma en que Bitcoin escala sin agrandar la cadena base. La [Lightning Network](/es/glosario/lightning-network) es la realización práctica de esta idea.
