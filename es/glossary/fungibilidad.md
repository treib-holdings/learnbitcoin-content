---
title: "Fungibilidad"
slug: fungibilidad
draft: false
published: "2026-10-15"
shortDefinition: "La propiedad de que todas las unidades de una moneda sean intercambiables, sin una 'identidad' ni un historial distinto que las acompañe."
keyTakeaways:
  - "Es crucial para que una moneda se acepte y sea útil"
  - "El rastreo de la cadena de bloques puede amenazar la fungibilidad pura"
  - "Las técnicas de privacidad buscan que en BTC siga valiendo 'una moneda = una moneda'"
aliases:
  - "fungible"
  - "fungibles"
  - "fungibility"
sources:
  - { label: "Satoshi Nakamoto - Bitcoin: A Peer-to-Peer Electronic Cash System, section 10 Privacy: the necessity to announce all transactions publicly; the public can see that someone is sending an amount to someone else; a new key pair should be used for each transaction (2008)", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "Bitcoin Wiki - Privacy: units of bitcoin are not watermarked within a transaction; if you can meaningfully distinguish one coin from another, their fungibility is weak; block chain analysis companies fingerprint particular spenders, and the surveillance company Chainalysis is used to find the ownership of addresses; CoinJoin lets multiple people cooperate on a single transaction involving all their inputs (accessed 2026-10-14)", url: "https://en.bitcoin.it/wiki/Privacy" }
  - { label: "US Treasury, OFAC - FAQ 563: digital currency addresses listed on the SDN List, including Bitcoin (XBT) addresses, carry their unique alphanumeric identifier (accessed 2026-10-14)", url: "https://ofac.treasury.gov/faqs/563" }
  - { label: "US Treasury, OFAC - FAQ 562: OFAC may add digital currency addresses to the SDN List to alert the public; parties who identify wallets associated with an SDN and hold such property should block the digital currency and file a report with OFAC (19 March 2018)", url: "https://ofac.treasury.gov/faqs/562" }
  - { label: "BIP-352 - Silent Payments: static payment addresses without on-chain linkability of payments; each silent payment goes to a unique address, avoiding accidental address reuse (2023)", url: "https://github.com/bitcoin/bips/blob/master/bip-0352.mediawiki" }
  - { label: "BOLT #0 - Introduction and Index: a layer-2 protocol for off-chain bitcoin transfer by mutual cooperation, relying on on-chain transactions for enforcement if necessary (accessed 2026-10-14)", url: "https://github.com/lightning/bolts/blob/master/00-introduction.md" }
relatedTerms:
  - address-clustering
  - address-reuse
  - coinjoin
  - disinflation
  - double-blind-marketplace
  - security
  - shielded-coinjoin
  - silent-payments
  - stealth-address
liveWidget: ~
translationOf: fungibility
sourceHash: "b79737911a2f"
sourceCommit: "b3ef864"
sourceUpdated: "2026-10-15"
translation:
  method: "llm-draft"
---

La fungibilidad es la propiedad de que cualquier unidad de una moneda sea intercambiable por cualquier otra. Un dólar de tu bolsillo y un dólar de la caja registradora son el mismo dólar; nadie pregunta por dónde anduvo.

Bitcoin es fungible *en el protocolo*: 1 BTC siempre equivale a 1 BTC, y las reglas de consenso no distinguen entre monedas según su historial. Pero Bitcoin también es completamente *transparente*: cada transacción es pública y visible para siempre, lo que significa que las monedas pueden rastrearse hasta actividades pasadas, incluidas las ilícitas. Las empresas de análisis de cadena explotan eso. El Tesoro de Estados Unidos incluye direcciones de Bitcoin concretas en su lista de sanciones y espera que quien tenga monedas vinculadas a ellas las bloquee y lo reporte a la OFAC, y algunos exchanges o contrapartes rechazan las monedas que asocian con hackeos, ransomware o direcciones sancionadas. Esa realidad práctica erosiona la fungibilidad pura.

Varias herramientas empujan en sentido contrario. [CoinJoin](/es/glosario/coinjoin) rompe los vínculos del grafo de transacciones al combinar entradas de muchos usuarios en una sola transacción. Los [Silent Payments](/es/glosario/silent-payments) (pagos silenciosos) y las [direcciones stealth (en inglés)](/glossary/stealth-address) reducen la reutilización de direcciones en la cadena. [Lightning](/es/glosario/lightning-network) enruta los pagos fuera de la cadena, donde no se transmiten uno por uno.

El argumento de fondo es que la fungibilidad es una propiedad que una comunidad tiene que defender, no solo una que el protocolo impone. El protocolo no puede impedir que un tercero decida que algunas monedas están "contaminadas". Los bitcoiners sí pueden: negándose a aceptar ese planteamiento y usando herramientas de privacidad como algo habitual. Un dinero cuyas monedas tienen memoria acaba siendo un dinero cuyas monedas necesitan permiso.

Consulta [Privacidad en Bitcoin](/es/a-fondo/privacidad-en-bitcoin) para ver cómo la calificación de riesgo de los exchanges erosiona la fungibilidad en la práctica.
