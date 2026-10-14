---
title: "M de N"
slug: m-de-n
aliases:
  - "M-of-N"
  - "M-of-n"
  - "multisig M de N"
  - "umbral M de N"
draft: false
published: "2026-10-14"
shortDefinition: "Una forma genérica de describir una multisig: hacen falta M firmas de un total de N firmantes posibles (por ejemplo, 2 de 3)."
keyTakeaways:
  - "Término general para las configuraciones de firma por umbral"
  - "Permite políticas de seguridad flexibles según las necesidades de los participantes"
  - "Práctico para fondos de empresas, de familias o administrados entre varios"
sources:
  - { label: "BIP-11 - M-of-N Standard Transactions (2011; proposes standardness for up to 3 keys)", url: "https://github.com/bitcoin/bips/blob/master/bip-0011.mediawiki" }
  - { label: "Bitcoin Core - BIPs implemented (doc/bips.md): multisig outputs standard since v0.6.0", url: "https://github.com/bitcoin/bitcoin/blob/v31.1/doc/bips.md" }
  - { label: "Bitcoin 0.6.0 release notes (30 March 2012): multisignature transactions become standard", url: "https://bitcoin.org/en/release/v0.6.0" }
  - { label: "BIP-383 - Multisig Output Script Descriptors (key limits: 3 bare, 15 in P2SH, 20 otherwise)", url: "https://github.com/bitcoin/bips/blob/master/bip-0383.mediawiki" }
  - { label: "BIP-141 - Segregated Witness: P2WSH bypasses the 520-byte push limit (10,000-byte script max)", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "BIP-387 - Tapscript Multisig Output Script Descriptors (multi_a, up to 999 keys)", url: "https://github.com/bitcoin/bips/blob/master/bip-0387.mediawiki" }
  - { label: "BIP-445 (Draft as of October 2026) - FROST Signing Protocol for BIP340 Signatures (t-of-n; MuSig2 for n-of-n)", url: "https://github.com/siv2r/bip-frost-signing" }
  - { label: "Nick, Poelstra, Sanders - Liquid: A Bitcoin Sidechain (Blockstream whitepaper, 2020), 11-of-15 watchman multisig; watchmen sign the Bitcoin transactions that process peg-outs", url: "https://blockstream.com/assets/downloads/pdf/liquid-whitepaper.pdf" }
  - { label: "Blockstream Help - What is a Liquid Network functionary? (15 functionaries; each functionary is run by a single federation member)", url: "https://help.blockstream.com/liquid-network/faqs/what-is-a-liquid-network-functionary" }
  - { label: "Blockstream Help - How does the Liquid Federation's multisig work? (11-of-15 multisig for peg-ins and peg-outs; each of the 15 functionaries holds one key in its HSM)", url: "https://help.blockstream.com/liquid-network/faqs/how-does-the-liquid-federations-multisig-work" }
  - { label: "Liquid Federation - Q1 2026 quarterly update: 87 federation members (May 1, 2026)", url: "https://blog.liquid.net/liquid-federation-quarterly-update-q1-2026/" }
relatedTerms:
  - psbt
  - bitcoin-vault
  - fidelity-bond
  - green-address
  - hdm-multi-signature-hd-wallet
  - hierarchical-multisig
  - interactive-multi-sig
  - musig
  - musig2
  - quorum-signatures
liveWidget: ~
translationOf: m-n
sourceHash: "b17a9dbdf563"
sourceCommit: "8bb2e1c"
sourceUpdated: "2026-10-10"
translation:
  method: "llm-draft"
---

M de N es la forma abreviada habitual de referirse a una multisig por umbral: cualesquiera M firmas de un total de N cofirmantes bastan para gastar. El BIP 11, escrito en 2011, usó la misma notación cuando propuso que una multisig M de N con hasta tres claves fuera una transacción "estándar", es decir, una que los nodos retransmiten y los mineros incluyen en los bloques. La versión 0.6.0 del software de Bitcoin (hoy Bitcoin Core) lo puso en vigor en marzo de 2012. M y N ajustan dos perillas independientes:

- M es el umbral de seguridad. Cuanto mayor es M, más cofirmantes tienen que estar de acuerdo y más difícil es robar.
- N - M es la redundancia. La billetera sobrevive a la pérdida de hasta N - M cofirmantes sin perder el acceso.

Configuraciones comunes:

- 2 de 3: el punto ideal para la custodia personal. Una clave contigo, una en un lugar de respaldo de confianza, una con un tercero (un abogado, un amigo, un servicio de custodia). Sobrevive a la pérdida de cualquiera de ellas. Con una robada no se puede gastar; con dos, sí.
- 3 de 5: para grupos y empresas donde más personas deben tener voz. Sobrevive a la pérdida de dos y exige tres para gastar.
- 4 de 7 o más: grandes federaciones y custodia donde hay mucho en juego. El whitepaper de 2020 de Blockstream sobre la sidechain (cadena lateral) [Liquid](/es/glosario/liquid-network) dice que el bitcoin que respalda Liquid está bloqueado en una multisig 11 de 15. Sus 15 claves están en manos de 15 funcionarios, a los que el whitepaper llama "watchmen" (vigilantes) cuando firman los retiros de Liquid de vuelta a Bitcoin. Cada funcionario lo opera un miembro de la Federación de Liquid, que tenía 87 miembros a mayo de 2026.

La multisig anterior a Taproot usa `OP_CHECKMULTISIG`, que acepta como máximo 20 claves. En [P2SH](/es/glosario/p2sh) el tope son 15 claves comprimidas, porque el script completo tiene que caber en un solo elemento de datos de 520 bytes. [P2WSH](/es/glosario/p2wsh) evita ese límite y admite el máximo de 20. Los gastos por la ruta de script (script path) de Taproot usan en su lugar [`OP_CHECKSIGADD` (en inglés)](/glossary/op-checksigadd), que admite muchas más claves. El [descriptor](/es/glosario/descriptor-de-salida) `multi_a` de Bitcoin Core (BIP 387) admite hasta 999.

Los gastos por la ruta de clave (key path) de Taproot pueden hacer que la estructura M de N sea completamente invisible on-chain. [MuSig2 (en inglés)](/glossary/musig2) lo hace cuando firman los N cofirmantes. FROST lo hace para cualquier M de N; su especificación para Bitcoin sigue siendo un BIP en borrador a octubre de 2026.

La elección correcta rara vez es "más cofirmantes". Cada cofirmante es una persona o un dispositivo de verdad, y cada uno es un modo de falla: un dispositivo perdido, una persona que muere, una passphrase olvidada, un malentendido a la hora de firmar. A la mayoría de los usuarios de a pie les va mejor con 2 de 3 que con cualquier cosa más sofisticada. Para una empresa o un grupo, 3 de 5 es un punto de partida razonable; sube más solo por una razón concreta, como que haya más directivos que deban aprobar cada gasto.
