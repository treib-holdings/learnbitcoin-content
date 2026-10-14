---
title: "P2SH (pago a hash de script)"
slug: p2sh
draft: false
published: "2026-10-15"
shortDefinition: "Pay to Script Hash (BIP 16, 2012): un tipo de salida que bloquea bitcoin al hash de 20 bytes de un script. Quien recibe comparte una dirección corta que empieza con 3 y revela el script completo solo al gastar."
keyTakeaways:
  - "Quien recibe publica un hash de 20 bytes; el script de canje (redeem script) real se revela solo al gastar"
  - "Convirtió las billeteras multisig en una primitiva usable (ya no hacía falta que quien enviaba conociera el script completo)"
  - "Traslado del costo: los bytes del script complejo los paga quien gasta, no quien pone los fondos"
  - "Fue el puente que permitió desplegar SegWit de forma gradual mediante las direcciones de 'SegWit envuelto en P2SH'"
aliases:
  - "P2SH"
  - "pay-to-script-hash"
  - "Pay to Script Hash"
  - "pago a hash de script"
  - "direcciones P2SH"
  - "salidas P2SH"
  - "BIP 16"
  - "BIP-16"
sources:
  - { label: "BIP 16 - Pay to Script Hash (new rules apply to blocks timestamped from April 1, 2012)", url: "https://github.com/bitcoin/bips/blob/master/bip-0016.mediawiki" }
  - { label: "BIP 13 - Address format for pay-to-script-hash (version byte 5, addresses start with 3)", url: "https://github.com/bitcoin/bips/blob/master/bip-0013.mediawiki" }
  - { label: "BIP 11 - M-of-N standard transactions (multisig was valid but non-standard before)", url: "https://github.com/bitcoin/bips/blob/master/bip-0011.mediawiki" }
  - { label: "BIP 141 - Segregated Witness, including P2WPKH and P2WSH nested in BIP16 P2SH", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "Bitcoin Core - BIPs implemented (doc/bips.md): BIP 16 took effect on April 1, 2012", url: "https://github.com/bitcoin/bitcoin/blob/v31.1/doc/bips.md" }
  - { label: "mainnet-observer - Input Types by Count: daily P2SH, nested P2WPKH and nested P2WSH spends", url: "https://mainnet.observer/charts/inputs-types-by-count/" }
relatedTerms:
  - address
  - bip-bitcoin-improvement-proposal
  - bitcoin-script
  - multisig
  - p2pkh-pay-public-key-hash
  - p2pk-pay-public-key
  - p2wpkh-pay-witness-public-key-hash
  - p2wsh-pay-witness-script-hash
  - psbt
  - script
  - segwit-segregated-witness-bip-141
  - soft-fork
  - taproot
sameAs:
  - "https://en.bitcoin.it/wiki/Pay_to_script_hash"
  - "https://en.bitcoin.it/wiki/BIP_0016"
  - "https://github.com/bitcoin/bips/blob/master/bip-0016.mediawiki"
liveWidget: ~
translationOf: p2sh
sourceHash: "1ade343dff04"
sourceCommit: "b4fda3b"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
---

P2SH, "Pay to Script Hash" (pago a hash de script), es el formato de script que hizo práctico usar scripts complejos de [Bitcoin Script (en inglés)](/glossary/bitcoin-script) como direcciones de recepción. Se introdujo con el [BIP 16](https://github.com/bitcoin/bips/blob/master/bip-0016.mediawiki) y entró en vigor como [soft fork](/es/glosario/soft-fork) el 1 de abril de 2012; fue la primera gran actualización del formato de direcciones de Bitcoin después de P2PKH. Las direcciones P2SH empiezan con `3` (por ejemplo, `3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy`).

## El mecanismo

Antes del BIP 16, si querías recibir fondos en una multisig o en otro script complejo, *quien enviaba* tenía que conocer el script completo e incluirlo en la salida, lo que significaba transacciones más largas, cero privacidad y una experiencia de uso incómoda. P2SH invirtió la lógica: quien recibe publica solo un hash de 20 bytes del script, y el script real se revela únicamente cuando el destinatario gasta.

La salida se limita a bloquear los fondos al "script cuyo hash es X". Cuando más tarde gastas, revelas el script real (el "script de canje" o redeem script) más lo que ese script exija: firmas, preimágenes, comprobaciones de bloqueo de tiempo, etc.

## Lo que hizo posible

- **Billeteras multisig como primitiva usable.** Antes de P2SH, los scripts multisig eran válidos pero no estándar (los nodos no los retransmitían), así que en la práctica no servían. Con P2SH, los usuarios podían compartir direcciones `3...` sencillas y recibir directamente en configuraciones multisig.
- **Traslado del costo.** El costo en bytes del script complejo lo paga quien gasta (al revelarlo), no quien pone los fondos. Razonable.
- **Complejidad oculta.** La cadena muestra la dirección, no la estructura del script: una ventaja de privacidad hasta que se gasta.
- **Un patrón para las actualizaciones de formato posteriores.** El modelo "primero el hash, después el script" de P2SH influyó directamente en el formato nativo de hash de script de [SegWit](/es/glosario/segwit) ([P2WSH](/es/glosario/p2wsh)) y en Taproot.
- **El puente para la adopción de SegWit.** Cuando SegWit se lanzó en 2017, se podía envolver dentro de P2SH ("P2SH-P2WPKH") por compatibilidad con las billeteras que todavía no entendían SegWit nativo. Las direcciones de SegWit envuelto en P2SH también empiezan con `3`, pero se gastan bajo las reglas de SegWit.

## Uso actual

En 2026, P2SH se ve sobre todo en billeteras de SegWit envuelto y en configuraciones multisig antiguas (scripts basados en `OP_CHECKMULTISIG`). Sus sucesores modernos son [P2WSH](/es/glosario/p2wsh) (hash de script en SegWit nativo) y el gasto por la ruta de script de [Taproot](/es/glosario/taproot): ambos más baratos y con propiedades más limpias.

El BIP 16 fue uno de los primeros ejemplos de cómo un soft fork pequeño y bien diseñado puede abrir categorías de uso completamente nuevas sin cambiar la naturaleza del protocolo base.
