---
title: "Sin conexión (air-gapped)"
slug: air-gapped
translationOf: air-gapped
sourceHash: "4fbe30db4eef"
sourceCommit: "94e823a"
sourceUpdated: "2026-10-09"
translation:
  method: "llm-draft"
aliases:
  - "air-gapped"
  - "air gap"
draft: false
published: "2026-10-13"
shortDefinition: "Describe un dispositivo completamente aislado de cualquier red, usado para generar o guardar claves privadas sin conexión de forma segura."
keyTakeaways:
  - "Impide los ataques remotos por la red contra las claves privadas"
  - "Requiere dispositivos o computadoras sin conexión"
  - "Lo usan personas y organizaciones que valoran la máxima seguridad"
sources:
  - { label: "Foundation docs - Glossary (Passport Core, discontinued, was fully air-gapped; Passport Prime is not air-gapped by design)", url: "https://docs.foundation.xyz/glossary/home/" }
relatedTerms:
  - hardware-seed-vault
  - hardware-security-module-hsm
  - hardware-wallet
  - paper-wallet
  - security
liveWidget: ~
---

"Sin conexión" o "air-gapped" describe un dispositivo que no tiene ninguna clase de conexión de red: ni Wi-Fi, ni Ethernet, ni Bluetooth, ni red celular, ni NFC. La única forma en que los datos entran o salen del dispositivo es por un canal físico, deliberado y de un solo uso: un código QR que se muestra en la pantalla, una tarjeta microSD que se lleva a mano o, en casos extremos, la transcripción a mano.

Para la autocustodia de Bitcoin, el air gap (el aislamiento de la red) es una estrategia de seguridad: el dispositivo que guarda las claves privadas nunca ve la internet pública, así que los atacantes remotos no tienen ningún camino por la red hasta la semilla.

Cómo se ve en la práctica una configuración sin conexión:

- **Billeteras de hardware (hardware wallets) bien hechas.** SeedSigner, el Passport Core de Foundation (descontinuado) y dispositivos parecidos están diseñados para operar sin conexión. Las transacciones entran como PSBTs (transacciones de Bitcoin parcialmente firmadas) por tarjeta SD o código QR; los PSBTs firmados vuelven por el mismo camino. El dispositivo firmante nunca toca la red.
- **Una laptop vieja sin hardware de red.** Una máquina dedicada a la que se le quitó físicamente la tarjeta Wi-Fi (o nunca la tuvo), con una herramienta de firma que funciona sin conexión. Común en configuraciones multisig avanzadas.
- **Salas de firma con blindaje de Faraday.** Las operaciones institucionales de almacenamiento en frío a veces firman dentro de una sala blindada contra emisiones de radio, lo que frustra tanto los ataques por la red como los ataques de canal lateral, como el monitoreo de las emisiones electromagnéticas del teclado.

Contra qué no protege el air gap:

- **Ataques a la cadena de suministro.** Un dispositivo comprometido que llega ya malicioso puede filtrar la semilla por canales laterales sutiles (tiempos de respuesta, micromodulaciones en lo que muestra la pantalla, etc.). Siempre que puedas, compra las billeteras de hardware directamente al fabricante.
- **Robo físico y coerción.** El air gap es una defensa de red, no una defensa física. Combínalo con la seguridad física adecuada.
- **Manipulación del PSBT.** El dispositivo firmante tiene que verificar por su cuenta que la transacción que firma coincide con lo que el usuario quería. Una máquina en línea comprometida podría mandarle un PSBT malicioso al dispositivo sin conexión; si la pantalla del dispositivo no muestra el destino real, el usuario firma el ataque. Por eso las billeteras de hardware tienen pantalla.

Para la mayoría de la gente, una sola billetera de hardware es la respuesta práctica. Incluso un modelo que se conecta por USB o se empareja por Bluetooth mantiene sus claves privadas dentro del dispositivo, lejos de la computadora en línea. Las computadoras dedicadas sin conexión, con PSBTs yendo y viniendo, son para configuraciones de alto valor o institucionales, donde la seguridad adicional justifica la carga operativa.
