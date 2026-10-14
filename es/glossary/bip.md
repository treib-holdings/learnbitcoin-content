---
title: "BIP (propuesta de mejora de Bitcoin)"
slug: bip
draft: false
published: "2026-10-14"
shortDefinition: "Un documento de diseño que propone cambios o adiciones al protocolo de Bitcoin y a los estándares de su ecosistema."
keyTakeaways:
  - "Propuestas formales para el protocolo o los estándares de Bitcoin"
  - "Pasan por la revisión y las pruebas de la comunidad"
  - "Algunos BIPs se convierten en grandes actualizaciones, como SegWit o Taproot"
sources:
  - { label: "BIP-1 - BIP Purpose and Guidelines: derived heavily from Python's PEP-0001 (2011)", url: "https://github.com/bitcoin/bips/blob/master/bip-0001.mediawiki" }
  - { label: "BIP-2 - BIP process, revised: nine statuses (Draft, Active, Proposed, Deferred, Rejected, Withdrawn, Final, Replaced, Obsolete) and the types Standards Track, Informational and Process; now Closed (2016)", url: "https://github.com/bitcoin/bips/blob/master/bip-0002.mediawiki" }
  - { label: "BIP-3 - Updated BIP Process: BIPs may be submitted by anyone, only BIP Editors assign numbers, drafts are presented to the Bitcoin Development Mailing List; statuses Draft, Complete, Deployed and Closed; types Specification, Informational and Process (Deployed)", url: "https://github.com/bitcoin/bips/blob/master/bip-0003.md" }
  - { label: "bitcoin/bips - pull request 1820, Process: Activate BIP3, merged 2026-01-14", url: "https://github.com/bitcoin/bips/pull/1820" }
  - { label: "BIP-141 - Segregated Witness (Consensus layer): assigned 2015-12-21, Deployed", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "mempool.space - block 481,824 (2017-08-24), the SegWit activation height", url: "https://mempool.space/block/0000000000000000001c8018d9cb3b742ef25114f27563e3fc4a1902167f9893" }
relatedTerms:
  - bip-9-versionbits
  - p2sh
  - bip-22-getblocktemplate
  - bip-65-opchecklocktimeverify
  - bip-68-relative-locktime
  - segwit-segregated-witness-bip-141
  - bip-173-bech32
  - bitcoin-governance
  - psbt
  - taproot
  - bip-342-tapscript
  - bolt-11
sameAs:
  - "https://en.bitcoin.it/wiki/BIP"
  - "https://github.com/bitcoin/bips"
liveWidget: ~
aliases:
  - "BIPs"
  - "Bitcoin Improvement Proposal"
  - "propuesta de mejora de Bitcoin"
  - "propuestas de mejora de Bitcoin"
translationOf: bip-bitcoin-improvement-proposal
sourceHash: "f1c27d3a286b"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

Un BIP (**B**itcoin **I**mprovement **P**roposal, propuesta de mejora de Bitcoin) es un documento formal de diseño que propone un cambio o una adición al protocolo, al software o a los estándares de Bitcoin. El sistema de BIPs, inspirado en el proceso PEP de Python, es la forma en que el desarrollo de código abierto de Bitcoin propone, debate y codifica cambios en la práctica.

Cualquiera puede escribir un BIP. El proceso, definido primero en el [BIP 1](https://github.com/bitcoin/bips/blob/master/bip-0001.mediawiki) y el [BIP 2](https://github.com/bitcoin/bips/blob/master/bip-0002.mediawiki) y actualizado por el [BIP 3](https://github.com/bitcoin/bips/blob/master/bip-0003.md) en enero de 2026:

1. **Borrador.** El autor redacta la propuesta en el formato estándar de los BIPs: resumen, motivación, especificación, justificación, compatibilidad hacia atrás, etc.
2. **Discusión.** El borrador se comparte en la lista de correo bitcoin-dev y en GitHub. Cualquier persona interesada (desarrolladores, mineros, usuarios, investigadores) lo revisa y comenta.
3. **Asignación.** Si la propuesta está bien formada y merece un número, los editores de BIPs le asignan un número de BIP permanente.
4. **Iteración.** El autor la revisa a partir de los comentarios. Muchos BIPs nunca pasan de esta etapa.
5. **Progresión de estado.** Con el BIP 3 (desde enero de 2026): Draft (borrador), luego Complete (completo) cuando la especificación está terminada, luego Deployed (desplegado) una vez que se usa en el mundo real; o Closed (cerrado) si se retira, se rechaza o se reemplaza. (El esquema anterior, el del BIP 2, usaba nueve estados, entre ellos Proposed y Final.)
6. **Despliegue real.** Que Bitcoin Core (u otras implementaciones) lo acepte es una decisión aparte. La activación en la red requiere la adopción voluntaria de quienes operan nodos y, para los cambios de consenso, normalmente un periodo de señalización de los mineros.

Tipos de BIP:

- **Specification** (de especificación; se llamó Standards Track hasta el BIP 3): reglas técnicas que una implementación puede cumplir, como las reglas de consenso, los mensajes entre pares (P2P) y los estándares de interoperabilidad, por ejemplo los formatos de dirección. Ejemplos: BIP 141 ([SegWit](/es/glosario/segwit)), BIP 340/341/342 ([Schnorr](/es/glosario/firma-schnorr) / [Taproot](/es/glosario/taproot)), BIP 352 ([Silent Payments](/es/glosario/silent-payments)).
- **Informational** (informativo): un problema de diseño, pautas generales u otra información para la comunidad; nada que una implementación tenga que cumplir.
- **Process** (de proceso): cambios a un proceso en torno a Bitcoin, incluido el propio proceso de los BIPs.

El proceso de los BIPs es, a propósito, lento, conservador y adversarial: es el extremo formal de la [gobernanza de Bitcoin](/es/glosario/gobernanza-de-bitcoin), donde desarrolladores, mineros, quienes operan nodos, usuarios y tenedores de largo plazo tienen, cada uno, un poder de veto de facto. Un cambio que afecta al consenso suele tardar más de un año desde que la propuesta recibe número hasta que se activa en la red (a SegWit se le asignó el BIP 141 en diciembre de 2015 y no se activó hasta agosto de 2017), y muchas propuestas nunca lo logran. Eso es una virtud, no un defecto: un protocolo monetario global debería ser muy, muy difícil de cambiar por accidente. Lee [SegWit](/es/glosario/segwit) y [Taproot](/es/glosario/taproot) para ver dos BIPs que sí llegaron hasta el final.

Más a fondo en [El proceso de los BIPs (en inglés)](/rabbit-hole/bip-process): qué controlan realmente los editores, el ciclo de vida y cómo funciona la activación.
