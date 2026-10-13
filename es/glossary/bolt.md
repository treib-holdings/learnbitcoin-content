---
title: "BOLT"
slug: bolt
draft: false
published: "2026-10-13"
shortDefinition: "Siglas de 'Basis of Lightning Technology': las especificaciones que definen cómo interactúan las implementaciones de la red Lightning y cómo se mantienen compatibles entre sí."
keyTakeaways:
  - "Define la mecánica central del protocolo Lightning"
  - "Permite que distintas implementaciones de Lightning interoperen"
  - "Cubre la apertura de canales, el enrutamiento, la seguridad y más"
sources:
  - { label: "Lightning BOLTs repository - the specifications all major implementations follow", url: "https://github.com/lightning/bolts" }
  - { label: "ACINQ Phoenix README - self-custodial wallet built on lightning-kmp", url: "https://github.com/ACINQ/phoenix" }
relatedTerms:
  - bolt-11
  - core-lightning-c-lightning
  - lightning-anchor-commitment
  - gossip-protocol-lightning
  - lightning-channel
  - lightning-channel-capacity
  - lightning-network
  - lightning-network-daemon-lnd
  - lightning-node
  - lightning-refund-invoice
  - lightning-routing
sameAs:
  - "https://github.com/lightning/bolts"
liveWidget: ~
translationOf: bolt
sourceHash: "165bc37d3ba3"
sourceCommit: "645416e"
sourceUpdated: "2026-10-10"
translation:
  method: "llm-draft"
---

BOLT (**B**asis **O**f **L**ightning **T**echnology, "base de la tecnología Lightning") es la serie de especificaciones que define cómo interoperan las implementaciones de la red Lightning. Es para Lightning lo que los BIPs (las propuestas de mejora de Bitcoin) son para Bitcoin: un conjunto de documentos versionados y revisados por la comunidad que se espera que siga cualquiera que desarrolle software para Lightning.

Los documentos BOLT actuales (numerados del 0 al 12, con algunas adiciones experimentales) cubren:

- **BOLT 1** - protocolo base, estructura de los mensajes.
- **BOLT 2** - protocolo entre pares para la gestión de canales (abrir, cerrar, actualizar).
- **BOLT 3** - formatos de transacciones y scripts para el estado on-chain de los canales.
- **BOLT 4** - enrutamiento cebolla (el formato de paquetes Sphinx).
- **BOLT 5** - transacciones on-chain y lógica de cierre de canales.
- **BOLT 7** - protocolo gossip para anunciar la información de los canales.
- **BOLT 9** - feature flags (indicadores de funcionalidades).
- **[BOLT 11](/es/glosario/bolt-11)** - formato de las facturas Lightning (invoices).
- **BOLT 12** - Offers (ofertas), el sucesor de BOLT 11 con facturas reutilizables, integrado a la especificación en 2024.

Se mantienen en [github.com/lightning/bolts](https://github.com/lightning/bolts), a cargo de representantes de las principales implementaciones: Lightning Labs (LND), Blockstream (Core Lightning), ACINQ (Eclair), Spiral (LDK). Los cambios pasan por pull requests, revisión y un consenso amplio entre las implementaciones.

Esta coordinación entre distintos proveedores es la razón por la que un nodo Eclair puede abrir un canal con un nodo Core Lightning y enrutar un pago a través de infraestructura operada con LND hasta un receptor basado en LDK. Todos siguen los mismos BOLTs.
