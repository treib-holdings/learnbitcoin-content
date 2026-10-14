---
title: "HTLC (contrato bloqueado por hash y tiempo)"
slug: htlc
aliases:
  - "HTLC"
  - "HTLCs"
  - "contrato bloqueado por hash y tiempo"
  - "contratos bloqueados por hash y tiempo"
  - "Hashed Time-Locked Contract"
draft: false
published: "2026-10-14"
shortDefinition: "Un mecanismo que exige un secreto (la preimagen) para desbloquear un pago antes de que venza un bloqueo de tiempo; es la base de la red Lightning y de los intercambios atómicos."
keyTakeaways:
  - "Permite pagos e intercambios que reducen al mínimo la necesidad de confiar"
  - "Usa un acertijo de hash + un bloqueo de tiempo para tener una salida segura"
  - "Base de la lógica de pagos de varios saltos de la red Lightning"
sources:
  - { label: "BIP 199 - Hashed Time-Locked Contract transactions (2017)", url: "https://github.com/bitcoin/bips/blob/master/bip-0199.mediawiki" }
  - { label: "Bitcoin Optech - Hash Time Locked Contract (HTLC) topic (accessed 2026-10-13)", url: "https://bitcoinops.org/en/topics/htlc/" }
  - { label: "Joseph Poon and Thaddeus Dryja - The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments, section 4, Hashed Timelock Contract (2016)", url: "https://lightning.network/lightning-network-paper.pdf" }
  - { label: "Bitcoin Optech - Submarine swaps topic (accessed 2026-10-13)", url: "https://bitcoinops.org/en/topics/submarine-swaps/" }
  - { label: "Bitcoin Optech - Point Time Locked Contracts (PTLCs) topic (accessed 2026-10-13)", url: "https://bitcoinops.org/en/topics/ptlc/" }
  - { label: "Lightning Labs - Announcing our first Lightning mainnet release, lnd 0.4-beta (2018-03-15)", url: "https://lightning.engineering/posts/2018-03-15-lnd-beta/" }
relatedTerms:
  - atomic-multi-path-payment-amp
  - atomic-swap
  - atomic-swap-refill
  - bolt-11
  - bridge-node-lightning
  - checklocktimeverify-cltv
  - eltoo
  - escrow
  - escrowed-lightning-channel
  - fraud-proof
  - fraudulent-channel-close
  - griefing-attack
  - hash-puzzle
  - htlc-invoice
  - htlc-preimage-manager
  - lightning-channel
  - lightning-channel-splicing
  - lightning-network
  - lightning-payment
  - lightning-routing
  - payment-channel
  - payment-point
  - routing-node
  - submarine-swap
  - time-locked-contract
sameAs:
  - "https://en.bitcoin.it/wiki/Hash_Time_Locked_Contracts"
  - "https://bitcoinops.org/en/topics/htlc/"
liveWidget: ~
translationOf: htlc-hashed-time-locked-contract
sourceHash: "875f48688f82"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

Un HTLC (Hashed Time-Locked Contract, contrato bloqueado por hash y tiempo) es un script de Bitcoin que bloquea fondos con dos condiciones: el destinatario previsto puede gastarlos si revela un valor secreto (la **preimagen** de un hash conocido) y firma con su propia clave, O BIEN el remitente puede recuperarlos si pasa una fecha límite sin que ese secreto se haya revelado. La verificación de la firma no es un adorno. Una preimagen revelada no dice nada sobre quién debe cobrar, así que sin esa firma cualquiera que viera el secreto podría reclamar los fondos.

En forma de script, más o menos:

```
IF hash(provided value) == target_hash AND signed by receiver THEN
  pay to receiver
ELSE IF current_time > deadline AND signed by sender THEN
  pay back to sender
END
```

Esta estructura, engañosamente simple, es la base de los protocolos de Bitcoin entre varias partes que funcionan sin necesidad de confiar en nadie.

Por qué los HTLCs son tan útiles:

- **[Enrutamiento en Lightning](/es/glosario/enrutamiento-en-lightning).** Cuando pagas a través de varios saltos de Lightning, cada salto queda atado por un HTLC. El destinatario conoce el secreto. Cobra del salto anterior revelándolo. Ese salto cobra del que lo precede pasando el mismo secreto. Y así hacia atrás a lo largo de la ruta: cada salto cobra de forma atómica a medida que el secreto se propaga. O el pago entero tiene éxito, o todo se deshace cuando vencen los plazos.
- **[Intercambios atómicos (en inglés)](/glossary/atomic-swap).** Dos partes en cadenas distintas pueden intercambiarse monedas (un atomic swap) sin confiar la una en la otra. Cada lado bloquea fondos en un HTLC. Quien revele primero el secreto reclama sus fondos y, al hacerlo, expone el secreto, lo que permite a la otra parte reclamar los suyos. Si alguien se echa atrás, los dos reembolsos se activan al vencer el plazo.
- **[Submarine swaps (en inglés)](/glossary/submarine-swap).** Cambias BTC on-chain por BTC en Lightning (o al revés) a través de un proveedor de intercambios. Los dos tramos pagan al mismo HTLC, así que el proveedor no puede cobrar un lado sin liberar el otro.

La parte del "bloqueo por tiempo" no es opcional. Sin una fecha límite, los fondos podrían quedar atascados para siempre, esperando un secreto que tal vez nunca se revele. El plazo garantiza que *algo* pase: o el pago se completa (se revela el secreto) o no se completa (se activa el reembolso). El tiempo mismo pasa a formar parte del modelo de seguridad.

Los HTLCs son la pieza básica que hace que el ecosistema de capa 2 de Bitcoin reduzca la confianza al mínimo en lugar de depender de ella. La idea de un pago bloqueado por un hash y limitado por un reloj se remonta al menos a publicaciones en foros de 2012, y cada pago enrutado por Lightning ha dependido de ella desde las primeras versiones para mainnet (la red principal) en 2018. Un [nodo de enrutamiento (en inglés)](/glossary/routing-node) puede negarse a reenviar un pago, pero no puede quedarse con el dinero.

Consulta [Puntos de pago (en inglés)](/glossary/payment-point) (payment points) para conocer el concepto sucesor, el PTLC: la misma atomicidad y las mismas garantías del bloqueo de tiempo, pero el candado de hash y preimagen se reemplaza por un punto de curva elíptica y un escalar. Los PTLCs pueden usar menos espacio en el bloque y, como cada salto puede usar un punto distinto, los nodos de enrutamiento ya no pueden emparejar los saltos de un mismo pago. Taproot trajo las firmas Schnorr que necesitan; Lightning sigue funcionando con HTLCs, y el paso a los PTLCs sigue siendo una discusión abierta sobre una actualización.
