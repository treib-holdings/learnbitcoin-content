---
title: "Planificación de la herencia (Bitcoin)"
slug: planificacion-de-la-herencia
aliases:
  - "planificación de la herencia"
  - "planificación de herencia"
  - "herencia de bitcoin"
draft: false
published: "2026-10-14"
shortDefinition: "Estrategias para que tus herederos puedan acceder a tus BTC si mueres, a menudo con multisig, albaceas de confianza o scripts con bloqueo de tiempo."
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
sourceHash: "d33fddcd67e7"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

La planificación de la herencia en Bitcoin es la práctica de asegurarte de que tus herederos puedan acceder a tus BTC si mueres o sufres una incapacidad permanente, sin darles acceso antes de tiempo mientras vives.

La red Bitcoin no tiene tribunal de sucesiones, ni albacea con facultades para pasar por encima de nada, ni banco al que mandarle una orden judicial. Si tus herederos no tienen una forma viable de llegar a tus [claves privadas](/es/glosario/clave-privada), a tu [frase semilla](/es/glosario/frase-semilla) (también llamada frase de recuperación) o a tu esquema [multisig](/es/glosario/multisig), los BTC se pierden para siempre. Nadie sabe cuántas monedas han quedado enterradas así; una estimación de Chainalysis de 2017 situó todas las monedas perdidas, por todas las causas juntas, entre 2.8 y 3.8 millones de BTC. A la cadena no le importa tu acta de defunción.

Los requisitos que compiten entre sí:

1. **Los herederos deben poder acceder a los fondos en algún momento.** Necesitan saber que la billetera existe, dónde están guardados los materiales y qué hacer.
2. **Los herederos no deben acceder a los fondos antes de tiempo.** Darle la frase semilla a un heredero mientras sigues usando la billetera equivale a regalarle tu dinero.
3. **Ningún adversario debe poder coaccionar o engañar a los herederos para que den acceso.** "Tu papá murió, así es como puedes reclamar sus BTC" es una plantilla de phishing que solo espera a que alguien la use.

Enfoques comunes:

- **Carta sellada con un abogado.** Documenta cómo está armada tu billetera, dónde están los dispositivos de hardware y dónde guardas la frase semilla. El abogado conserva el sobre y lo abre cuando le notifican la muerte. Sirve para montos moderados; depende de la jurisdicción legal.
- **Multisig con una rama sujeta a un bloqueo de tiempo (timelock).** Tú tienes las claves que gastan en el día a día. Una segunda rama del script permite que un heredero designado (solo, o junto con una persona de confianza, como un fideicomisario) gaste únicamente después de que las monedas hayan pasado un plazo fijo sin moverse, digamos seis meses, impuesto por un [bloqueo de tiempo relativo (en inglés)](/glossary/bip-68-relative-locktime) que [CheckSequenceVerify (en inglés)](/glossary/checksequenceverify-csv) comprueba dentro del script. El reloj vuelve a cero cada vez que mueves las monedas, así que la rama del heredero nunca madura mientras estás ahí para gastar; cuando ya no estás, sí. El lenguaje de [descriptores de salida](/es/glosario/descriptor-de-salida) de Bitcoin Core puede expresar esa rama directamente, con el `older()` de Miniscript para el plazo.
- **[Secreto compartido de Shamir](/es/glosario/secreto-compartido-de-shamir).** Divide la frase semilla en N partes, de modo que cualesquiera M de ellas la reconstruyen; SLIP-39 es la forma estándar. Repártelas entre personas de confianza. Es útil pero añade complejidad y, a diferencia de una multisig, la frase semilla reconstruida termina entera en un solo lugar.
- **Custodia colaborativa.** Si una empresa guarda una de las claves de tu multisig, revisa qué exige en realidad su procedimiento de herencia. El plan pasa a depender de que la empresa siga existiendo y de sus controles de identidad: una decisión de confianza, no técnica.

Probarlo importa muchísimo. **Haz que tu heredero (o alguien que haga sus veces) recorra el procedimiento de recuperación** con una billetera de prueba con muy poco dinero. Actualiza el plan cada vez que cambie tu esquema de custodia. Un plan que nunca ensayaste es un plan que no tienes.

Lee [Respaldo de la frase semilla para la herencia (en inglés)](/glossary/inheritance-seed-backup) para la mecánica del respaldo y [Multisig jerárquica (en inglés)](/glossary/hierarchical-multisig) para diseños de multisig por capas.
