---
title: "División de la clave (key split)"
slug: division-de-la-clave
draft: false
published: "2026-10-14"
shortDefinition: "Repartir una clave privada en varios fragmentos (por ejemplo, con el secreto compartido de Shamir), de modo que ninguna parte por sí sola pueda gastar los fondos."
keyTakeaways:
  - "Mejora la seguridad al repartir la clave privada entre varias manos"
  - "Ninguna de las partes, por sí sola, puede reconstruir ni usar la clave"
  - "Se usa para respaldar la frase semilla, de modo que ningún escondite guarde el secreto completo"
aliases:
  - "división de la clave"
  - "dividir la clave"
  - "división de claves"
  - "división de la frase semilla"
  - "dividir la frase semilla"
  - "key split"
  - "key splitting"
sources:
  - { label: "Adi Shamir - How to Share a Secret, Communications of the ACM 22(11) (1979)", url: "https://web.mit.edu/6.857/OldStuff/Fall03/ref/Shamir-HowToShareASecret.pdf" }
  - { label: "SatoshiLabs - SLIP-0039: Shamir's Secret-Sharing for Mnemonic Codes (2017, Final)", url: "https://github.com/satoshilabs/slips/blob/master/slip-0039.md" }
  - { label: "BIP 39 - Mnemonic code for generating deterministic keys, Related Work (2013)", url: "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" }
  - { label: "Trezor - What is Shamir backup? (accessed 2026-10-13)", url: "https://trezor.io/learn/advanced/standards-proposals/what-is-shamir-backup" }
  - { label: "Jameson Lopp, Casa - Shamir's Secret Sharing shortcomings (2019-10-17)", url: "https://blog.casa.io/shamirs-secret-sharing-security-shortcomings/" }
  - { label: "Bitcoin Optech - Threshold signature topic (accessed 2026-10-13)", url: "https://bitcoinops.org/en/topics/threshold-signature/" }
relatedTerms:
  - bip-39
  - bitcoin-inheritance-planning
  - hardware-security-module-hsm
  - key-generation-ceremony
  - key-rotation
  - key-wiping
  - multisig
  - paper-wallet
  - security
  - seed-phrase
  - shamir-secret-sharing
liveWidget: ~
translationOf: key-split
sourceHash: "8fa56dfae017"
sourceCommit: "9838a39"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

Dividir la clave es repartir una clave privada (o una semilla) en varias partes, de modo que cualquier conjunto que alcance cierto umbral pueda reconstruir el secreto y uno menor no pueda. La matemática canónica es el [secreto compartido de Shamir](/es/glosario/secreto-compartido-de-shamir) (SSS), publicado en 1979: cualesquiera k de las n partes reconstruyen el secreto, y k-1 partes no revelan absolutamente nada.

En la práctica de Bitcoin, la forma estándar es SLIP-39, que divide la semilla maestra (BIP 32) de una billetera en partes escritas como palabras de su propia lista de 1024 palabras. Es un reemplazo del [BIP 39](/es/glosario/bip-39), propuesto por los mismos autores del BIP 39, no una capa encima de él: una frase existente de 12 o 24 palabras solo puede convertirse dividiendo la semilla de 512 bits que deriva de ella, lo que deja cada parte en 59 palabras, y la especificación aconseja más bien mover los fondos a una billetera SLIP-39 nueva. Trezor lo implementa de forma nativa. Configuraciones comunes: 2 de 3 o 3 de 5 partes repartidas entre distintos lugares geográficos o personas de confianza.

La advertencia crucial que casi todas las introducciones omiten: dividir la clave no es el mismo modelo de seguridad que una [multisig](/es/glosario/multisig).

- Multisig: cada cofirmante firma por su cuenta con su propia clave, y el script combina las M firmas. Ningún dispositivo tiene nunca, por sí solo, la capacidad de gastar.
- División de la clave al estilo Shamir: en el momento de firmar, el umbral de partes tiene que volver a combinarse en una sola clave privada dentro de un dispositivo, que es el que firma. Ese dispositivo tiene la clave completa por un instante.

Los esquemas de firma por umbral como FROST son un tercer modelo: la clave se divide en partes que firman cada una su pedazo, y las partes nunca se vuelven a juntar. En términos de seguridad se parecen más a una multisig, pero apenas empiezan a aparecer en las billeteras de Bitcoin.

Así que dividir la clave es excelente para repartir un respaldo en frío (ningún lugar basta por sí solo para robar la billetera), pero peor que una multisig para el uso operativo en caliente o templado (el momento de la reconstrucción es un blanco muy apetecible). Un patrón común es usar multisig para la capa operativa y reservar SSS solo para repartir el respaldo de una de las claves.
