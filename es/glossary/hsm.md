---
title: "HSM (módulo de seguridad de hardware)"
slug: hsm
draft: false
published: "2026-10-14"
shortDefinition: "Un dispositivo especializado, diseñado para guardar y administrar claves criptográficas de forma segura; se usa a menudo en la custodia institucional de BTC."
keyTakeaways:
  - "Mantiene las claves privadas selladas dentro del hardware"
  - "Lo usan con frecuencia los bancos y los servicios de custodia de alto valor"
  - "Admite multisig y acceso basado en roles para reducir el riesgo"
aliases:
  - "HSM"
  - "HSMs"
  - "módulo de seguridad de hardware"
  - "módulos de seguridad de hardware"
  - "hardware security module"
sources:
  - { label: "NIST - FIPS 140-2, Security Requirements for Cryptographic Modules (Level 2 requires tamper-evidence and role-based authentication; Level 3 adds tamper detection/response that zeroizes keys and identity-based authentication)", url: "https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.140-2.pdf" }
  - { label: "NIST CMVP - Cryptographic Module Validation Program (validating to FIPS 140-3 since September 2020; FIPS 140-2 modules accepted through 21 September 2026, then moved to the Historical list)", url: "https://csrc.nist.gov/projects/cryptographic-module-validation-program" }
  - { label: "PCI Security Standards Council - PTS Hardware Security Module (HSM) standard for the financial payments industry", url: "https://www.pcisecuritystandards.org/standards/pts-hardware-security-module-hsm/" }
  - { label: "CA/Browser Forum - Baseline Requirements, section 6.2.7 (a CA must protect its private key in a device validated to at least FIPS 140-2 Level 3, FIPS 140-3 Level 3, or Common Criteria EAL 4+)", url: "https://github.com/cabforum/servercert/blob/main/docs/BR.md" }
  - { label: "Square - Subzero, HSM cold storage (FIPS-certified HSMs protect the private key material; moving funds out requires a multi-party signing ceremony; the HSMs only allow sending to Square-owned addresses)", url: "https://github.com/square/subzero" }
  - { label: "AWS - CloudHSM price list, US East (N. Virginia): $1.60 hourly charge per HSM, effective 1 April 2026", url: "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/CloudHSM/current/us-east-1/index.csv" }
relatedTerms:
  - air-gapped
  - bitcoin-vault
  - custodial-wallet
  - deterministic-wallet
  - hardware-seed-vault
  - hardware-wallet
  - hierarchical-deterministic-wallet
  - key-generation-ceremony
  - key-rotation
  - key-split
  - key-wiping
  - oracle-based-betting
  - security
liveWidget: ~
translationOf: hardware-security-module-hsm
sourceHash: "9e0d7f3078d3"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

Un módulo de seguridad de hardware (HSM, por hardware security module) es un dispositivo dedicado y resistente a manipulaciones que genera, guarda y usa claves criptográficas dentro de un perímetro sellado. Las claves nunca salen del dispositivo en una forma utilizable. La firma ocurre adentro: le envías al HSM un mensaje y la autorización de un operador, y te devuelve una firma.

Los HSMs son la pieza básica de seguridad de las finanzas tradicionales. La industria de pagos con tarjeta tiene su propio estándar de HSM, y los Baseline Requirements (requisitos básicos) para las autoridades de certificación públicas obligan a cada una a guardar su clave de firma en un dispositivo validado según FIPS 140 nivel 3 o Common Criteria EAL 4+, es decir, un HSM. Las características vienen de los niveles de certificación FIPS 140 (hoy el 140-3; los últimos certificados 140-2 pasaron a la lista histórica del NIST en septiembre de 2026): carcasas que delatan cualquier manipulación, control de acceso basado en roles y, en los niveles más altos, detección de manipulación que borra las claves ante una intrusión. Los despliegues serios agregan reglas de quórum, para que ningún operador pueda firmar solo.

En Bitcoin, los HSMs están detrás de muchas de las grandes operaciones de custodia: el almacenamiento en frío de los exchanges, los custodios regulados, las tesorerías corporativas. Square publicó el diseño del suyo: HSMs con certificación FIPS guardan fuera de línea las claves de su reserva de bitcoin, sacar fondos exige una ceremonia de firma entre varias partes y los HSMs se niegan a firmar hacia cualquier dirección que no sea de la empresa. El patrón natural es una billetera multisig en la que la clave de cada cofirmante vive en un HSM distinto, bajo un control operativo distinto, de modo que comprometer un solo HSM (o la colusión de un operador) no basta para mover los fondos.

El costo es real. Un solo HSM en la nube se alquila por $1.60 la hora (dólares estadounidenses) a precio de lista, unos $14,000 al año, y eso antes de pagar al equipo operativo que lo maneja. Están pensados para instituciones donde el cumplimiento regulatorio los exige y donde el valor resguardado justifica el gasto.

Para una persona, una billetera de hardware (hardware wallet) es el equivalente de consumo. La misma idea (las claves nunca salen del dispositivo, la firma ocurre en el chip), un modelo de amenazas mucho más pequeño y un costo muchísimo menor. La diferencia entre una billetera de hardware y un HSM está sobre todo en el régimen de certificación, las garantías de seguridad física y los controles de acceso entre varias partes.
