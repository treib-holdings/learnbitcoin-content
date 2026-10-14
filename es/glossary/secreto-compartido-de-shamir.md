---
title: "Secreto compartido de Shamir"
slug: secreto-compartido-de-shamir
draft: false
published: "2026-10-13"
shortDefinition: "Esquema criptográfico que divide un secreto en N partes de modo que cualquier grupo de M partes (el umbral) puede reconstruirlo, pero con menos no se puede."
keyTakeaways:
  - "La matemática estándar para dividir una semilla y repartirla entre varios lugares"
  - "Estandarizado para semillas de billetera como SLIP-39, que reemplaza al BIP 39 en vez de ser una capa sobre él (Trezor lo implementa de forma nativa)"
  - "No equivale a una multisig: la advertencia de seguridad está en la entrada key-split"
sources:
  - { label: "Adi Shamir - How to Share a Secret, Communications of the ACM 22(11) (1979)", url: "https://web.mit.edu/6.857/OldStuff/Fall03/ref/Shamir-HowToShareASecret.pdf" }
  - { label: "SatoshiLabs - SLIP-0039: Shamir's Secret-Sharing for Mnemonic Codes (2017)", url: "https://github.com/satoshilabs/slips/blob/master/slip-0039.md" }
  - { label: "BIP-39 - Mnemonic code for generating deterministic keys, Related Work: SLIP-0039 proposed by the BIP-39 authors as its intended successor (2013)", url: "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" }
  - { label: "Trezor - What is Shamir backup? (accessed 2026-10-13)", url: "https://trezor.io/learn/a/what-is-shamir-backup" }
relatedTerms:
  - bitcoin-inheritance-planning
  - key-split
  - multisig
  - seed-phrase
liveWidget: ~
translationOf: shamir-secret-sharing
sourceHash: "0348808a99eb"
sourceCommit: "b8304cf"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

El secreto compartido de Shamir (SSS, por sus siglas en inglés) es la matemática que permite dividir una semilla de Bitcoin (o cualquier otro secreto) en varias partes, de modo que cualquier grupo de M de las N partes basta para reconstruirla, pero cualquier grupo de M-1 no revela nada. Lleva el nombre del criptógrafo Adi Shamir, quien publicó la construcción en 1979.

En Bitcoin, la forma estándar en la práctica es SLIP-39, que divide la semilla maestra BIP 32 de una billetera en partes escritas con palabras de su propia lista de 1024 palabras. No es una capa sobre el BIP 39: lo propusieron los propios autores del BIP 39 como su sucesor, y los dos son en gran medida incompatibles. Convertir una frase semilla existente de 12 o 24 palabras en partes SLIP-39 solo es posible dividiendo la semilla derivada de 512 bits, lo que deja cada parte en 59 palabras, y la especificación aconseja más bien mover los fondos a una billetera SLIP-39 nueva. Trezor implementa SLIP-39 de forma nativa y lo tiene como tipo de respaldo predeterminado en sus dispositivos Safe desde 2024. Configuraciones comunes: 2 de 3 o 3 de 5 partes repartidas entre distintos lugares geográficos o personas de confianza.

La discusión completa de SSS en Bitcoin está en la entrada [división de la clave](/es/glosario/division-de-la-clave), incluida la advertencia crucial de que SSS **no** es el mismo modelo de seguridad que una [multisig](/es/glosario/multisig), porque reconstruir la clave para firmar deja la clave completa, por un momento, en un solo dispositivo.
