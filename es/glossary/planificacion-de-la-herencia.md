---
title: "Planificación de la herencia (Bitcoin)"
slug: planificacion-de-la-herencia
aliases:
  - "planificación de la herencia"
  - "planificación de herencia"
  - "herencia de bitcoin"
draft: false
published: "2026-10-14"
updated: "2026-11-17"
shortDefinition: "Formas de asegurarte de que tus herederos puedan llegar a tus BTC después de tu muerte, a menudo con multisig, una carta que dice dónde está el respaldo o scripts con bloqueo de tiempo."
keyTakeaways:
  - "Evita que los BTC queden inaccesibles al morir su dueño"
  - "Combina soluciones técnicas (multisig, bloqueo de tiempo) con medidas legales"
  - "Exige un equilibrio cuidadoso entre seguridad y facilidad de uso"
sources:
  - { label: "BIP-112 - CHECKSEQUENCEVERIFY, Escrow with Timeout: the clock does not start ticking until the payment confirms (2015)", url: "https://github.com/bitcoin/bips/blob/master/bip-0112.mediawiki" }
  - { label: "BIP-68 - Relative lock-time using consensus-enforced sequence numbers: an input stays invalid for a set period after the output it spends confirms (2015)", url: "https://github.com/bitcoin/bips/blob/master/bip-0068.mediawiki" }
  - { label: "BIP-65 - OP_CHECKLOCKTIMEVERIFY: absolute time-locks in script (2014)", url: "https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki" }
  - { label: "Bitcoin Core - doc/descriptors.md: Miniscript older() and after(), and the decaying multisig example (accessed 2026-10-13)", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/descriptors.md" }
  - { label: "Bitcoin Optech - Timelocks topic (accessed 2026-10-13)", url: "https://bitcoinops.org/en/topics/timelocks/" }
  - { label: "SatoshiLabs - SLIP-0039: Shamir's Secret-Sharing for Mnemonic Codes (2017)", url: "https://github.com/satoshilabs/slips/blob/master/slip-0039.md" }
  - { label: "Fortune - Exclusive: Nearly 4 Million Bitcoins Lost Forever, New Study Says (2017-11-25)", url: "https://fortune.com/crypto/2017/11/25/lost-bitcoins/" }
  - { label: "ABA Journal - Next generation: Cryptocurrency and estate lawyers (November 1, 2018): coins held at an exchange can be reached through the normal probate process; for coins the owner holds, the plan must tell heirs where to find the devices and the seed phrases", url: "https://www.abajournal.com/magazine/article/cryptocurrency_estate_lawyers_caution" }
  - { label: "Superior Court of California, County of Orange - Wills and trusts: property passes under a will, through a living trust, or to heirs under state law when there is no will; a will that has been filed is likely to be open to the public", url: "https://www.occourts.org/self-help/self-help-probate/wills-trusts" }
  - { label: "FBI - public service announcement of August 11, 2023: recovery schemes charge a fee up front and then stop answering or ask for more", url: "https://www.ic3.gov/PSA/2023/PSA230811" }
  - { label: "US Internal Revenue Service - Publication 551, Basis of Assets (December 2025): the basis of inherited property is generally its fair market value at the date of death", url: "https://www.irs.gov/publications/p551" }
  - { label: "US Internal Revenue Service - Digital assets: for US tax purposes digital assets are property, not currency", url: "https://www.irs.gov/filing/digital-assets" }
relatedTerms:
  - bip-68-relative-locktime
  - checksequenceverify-csv
  - decentralization
  - deterministic-wallet
  - hardware-security-module-hsm
  - hardware-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - inheritance-seed-backup
  - key-generation-ceremony
  - key-rotation
  - multisig
  - output-descriptor
  - paper-wallet
  - seed-phrase
  - shamir-secret-sharing
liveWidget: ~
translationOf: bitcoin-inheritance-planning
sourceHash: "7caa659c0e1c"
sourceCommit: "74f1a22"
sourceUpdated: "2026-11-17"
translation:
  method: "llm-draft"
---

La planificación de la herencia en Bitcoin es la práctica de asegurarte de que tus herederos puedan acceder a tus BTC si mueres o sufres una incapacidad permanente, sin darles acceso antes de tiempo mientras vives.

La red Bitcoin no tiene tribunal de sucesiones, ni albacea con facultades para pasar por encima de nada, ni banco al que mandarle una orden judicial. Si tus herederos no tienen una forma viable de llegar a tus [claves privadas](/es/glosario/clave-privada), a tu [frase semilla](/es/glosario/frase-semilla) (también llamada frase de recuperación) o a tu esquema [multisig](/es/glosario/multisig), los BTC se pierden para siempre. Nadie sabe cuántas monedas han quedado enterradas así; una estimación de Chainalysis de 2017 situó todas las monedas perdidas, por todas las causas juntas, entre 2.8 y 3.8 millones de BTC. A la cadena no le importa tu acta de defunción. Eso vale para las monedas cuyas claves guardas tú. Las monedas que se dejan en un exchange son otro caso: en Estados Unidos un heredero generalmente puede reclamarlas por el proceso de sucesión ordinario, como con una cuenta de banco, mientras el propio exchange siga en pie. Ese reclamo pasa por el tribunal y por el propio exchange, nunca por nadie que ofrezca recuperar las monedas a cambio de una comisión que se paga por adelantado.

Los requisitos que compiten entre sí:

1. **Los herederos deben poder acceder a los fondos en algún momento.** Necesitan saber que la billetera existe, dónde están guardados los materiales y qué hacer.
2. **Los herederos no deben acceder a los fondos antes de tiempo.** Darle la frase semilla a un heredero mientras sigues usando la billetera equivale a regalarle tu dinero.
3. **Ningún adversario debe poder coaccionar o engañar a los herederos para que den acceso.** "Tu papá murió, así es como puedes reclamar sus BTC" es una plantilla de phishing que solo espera a que alguien la use.

Ninguno de los enfoques de abajo decide quién hereda. Eso lo hace un testamento o un fideicomiso, o la ley cuando no hay ninguno de los dos. El plan únicamente se asegura de que la persona nombrada pueda llegar a las monedas. Mantén la frase semilla fuera del testamento mismo: una vez que un testamento se presenta ante un tribunal, es probable que quede abierto al público.

Enfoques comunes:

- **Carta sellada con un abogado.** Documenta cómo está armada tu billetera, dónde están los dispositivos de hardware y dónde guardas la frase semilla, nunca las palabras mismas. El abogado conserva el sobre y lo abre cuando le notifican tu muerte. Un sobre que enumera cada lugar es un mapa para quien lo abra, así que este plan descansa en la oficina de ese abogado.
- **Multisig con una rama sujeta a un bloqueo de tiempo (timelock).** Tú tienes las claves que gastan en el día a día. Una segunda rama del script permite que un heredero designado (solo, o junto con una segunda persona que tiene una clave) gaste únicamente después de que las monedas hayan pasado un plazo fijo sin moverse, digamos seis meses, impuesto por un [bloqueo de tiempo relativo (en inglés)](/glossary/bip-68-relative-locktime) que [CheckSequenceVerify (en inglés)](/glossary/checksequenceverify-csv) comprueba dentro del script. El reloj corre para cada moneda desde el bloque que la confirmó y vuelve a cero únicamente cuando esa moneda se mueve. Así que tienes que mover cada moneda antes de que venza su plazo, pagando una comisión cada vez, para evitar que la rama del heredero madure; cuando dejas de hacerlo, madura. El plazo no puede ser de más de unos 15 meses, lo máximo que puede expresar un bloqueo de tiempo relativo. El lenguaje de [descriptores de salida](/es/glosario/descriptor-de-salida) de Bitcoin Core puede expresar esa rama directamente, con el `older()` de Miniscript para el plazo.
- **[Secreto compartido de Shamir](/es/glosario/secreto-compartido-de-shamir).** Divide la frase semilla en N partes, de modo que cualesquiera M de ellas la reconstruyen; SLIP-39 es la forma estándar. Repártelas entre personas que conoces en persona; M de ellas juntas pueden llevarse las monedas. Cada parte se entrega en persona. Nunca se lee en voz alta, ni se fotografía, ni se teclea en un mensaje, la pida quien la pida. Es útil pero añade complejidad y, a diferencia de una multisig, la frase semilla reconstruida termina entera en un solo lugar.
- **Custodia colaborativa.** Si una empresa guarda una de las claves de tu multisig, revisa qué exige en realidad su procedimiento de herencia. El plan pasa a depender de que la empresa siga existiendo y de sus controles de identidad: una decisión de confianza, no técnica.

Probarlo importa muchísimo. **Haz que tu heredero (o alguien que haga sus veces) recorra el procedimiento de recuperación** con una billetera de prueba con muy poco dinero. Actualiza el plan cada vez que cambie tu esquema de custodia. Un plan que nunca ensayaste es un plan que no tienes.

Los impuestos son una cuestión aparte. En Estados Unidos, para fines de impuestos, el costo que se le cuenta a un heredero generalmente vuelve a empezar en el valor de la fecha de la muerte, así que el heredero necesita el precio de ese día. En otros lugares, el propio sitio web de la oficina de impuestos de tu país es donde hay que consultarlo.

Lee [Respaldo de la frase semilla para la herencia (en inglés)](/glossary/inheritance-seed-backup) para la mecánica del respaldo y [Multisig jerárquica (en inglés)](/glossary/hierarchical-multisig) para diseños de multisig por capas.
