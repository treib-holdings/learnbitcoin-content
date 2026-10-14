---
title: "Análisis de cadena"
slug: analisis-de-cadena
aliases:
  - "análisis de la cadena"
  - "analista de cadena"
  - "analistas de cadena"
  - "empresa de análisis de cadena"
  - "empresas de análisis de cadena"
  - "chain analysis"
avoid:
  - "análisis de blockchain"
draft: false
published: "2026-10-15"
shortDefinition: "Examinar transacciones, direcciones y patrones on-chain para identificar o vincular la actividad de los usuarios."
keyTakeaways:
  - "Aprovecha el registro abierto para rastrear los flujos de fondos"
  - "Lo usan empresas y fuerzas del orden"
  - "Impulsa las soluciones centradas en la privacidad que evitan la agrupación de direcciones"
sources:
  - { label: "Bitcoin Wiki - Privacy (the common-input-ownership heuristic, change address detection and taint analysis; transaction surveillance companies that do large-scale surveillance of the ecosystem; fungibility and blacklists; Tor broadcasting, CoinJoin, PayJoin and Lightning as defenses; written February 2019)", url: "https://en.bitcoin.it/wiki/Privacy" }
  - { label: "Meiklejohn et al. - A Fistful of Bitcoins, Characterizing Payments Among Men with No Names, IMC 2013 (heuristic clustering of wallets by evidence of shared authority, then re-identification by buying from known services)", url: "https://cseweb.ucsd.edu/~smeiklejohn/files/imc13.pdf" }
  - { label: "Biryukov, Khovratovich and Pustogarov - Deanonymisation of clients in Bitcoin P2P network (2014; links transaction pseudonyms to the IP addresses they were broadcast from, even behind NAT)", url: "https://arxiv.org/abs/1405.7418" }
  - { label: "OFAC - FAQ 562, how OFAC identifies digital currency information on the SDN List (digital currency addresses are listed as identifiers of blocked persons; March 19, 2018)", url: "https://ofac.treasury.gov/faqs/562" }
  - { label: "Chainalysis - company site (software to investigate and trace funds across blockchains, compliance tools, and practices for law enforcement, centralized exchanges and government; accessed 2026-10-14)", url: "https://www.chainalysis.com/" }
  - { label: "Elliptic - company site (crypto compliance software trusted by banks, exchanges and governments; law enforcement tools to trace illicit activity and recover assets; a case study tracing over 45 million dollars in stolen crypto; accessed 2026-10-14)", url: "https://www.elliptic.co/" }
  - { label: "U.S. Department of the Treasury - Treasury Takes Robust Actions to Counter Ransomware (September 21, 2021; OFAC designated the exchange SUEX for laundering proceeds of at least eight ransomware variants, after analysis of its known transactions tied over 40 percent of them to illicit actors)", url: "https://home.treasury.gov/news/press-releases/jy0364" }
relatedTerms:
  - address-clustering
  - address-reuse
  - block-explorer
  - chain-visualization
  - coinjoin
  - miner-extractable-value-mev
  - transaction
  - transaction-index-txindex
  - utxo-unspent-transaction-output
liveWidget: ~
translationOf: chain-analysis
sourceHash: "a4eafcfc7c5c"
sourceCommit: "b3ef864"
sourceUpdated: "2026-10-15"
translation:
  method: "llm-draft"
---

El análisis de cadena es la industria y el oficio de extraer información sobre identidades y comportamientos del mundo real a partir de la cadena de bloques pública de Bitcoin. Empresas especializadas (Chainalysis y Elliptic entre ellas) les venden ese análisis a exchanges, fuerzas del orden, gobiernos y equipos de cumplimiento normativo.

Los métodos se apoyan en el hecho de que la cadena de Bitcoin es completamente pública y nunca olvida. Técnicas habituales:

- **[Agrupación de direcciones](/es/glosario/agrupacion-de-direcciones).** Usar patrones de las transacciones (la heurística de propiedad común de las entradas, la detección de la salida de cambio, correlaciones de tiempo) para agrupar direcciones que probablemente comparten dueño.
- **Anclaje a exchanges / [KYC](/es/glosario/kyc).** Cruzar las direcciones agrupadas con rampas de entrada conocidas (exchanges que guardan los datos de identidad de sus clientes) y exigir esos registros cuando hace falta.
- **Etiquetado de OFAC / sanciones.** Marcar direcciones concretas vinculadas a ransomware, a entidades sancionadas o a investigaciones de fondos robados.
- **Perfiles de comportamiento.** Identificar patrones de mezcla, participación en [CoinJoin](/es/glosario/coinjoin), flujos de un exchange al almacenamiento en frío, y así sucesivamente.
- **Correlación en la capa de red.** Combinar el análisis on-chain con [escuchas (en inglés)](/glossary/eavesdropping-attack) en la red entre pares para vincular las transmisiones con direcciones IP.

Para qué *sirve* el análisis de cadena:

- Rastrear fondos robados hasta los exchanges donde aterrizan, donde pueden congelarse y recuperarse.
- Identificar pagos de ransomware y las billeteras detrás de ellos. En 2021 el Tesoro de Estados Unidos sancionó al exchange SUEX por lavar el producto de al menos ocho variantes de ransomware, después de que el análisis de sus transacciones conocidas vinculara más del 40% de ellas con actores ilícitos.
- Cumplimiento normativo: exchanges que cotejan los depósitos entrantes con las listas de sanciones.

Para qué *también* se usa el análisis de cadena:

- Vigilancia masiva de la actividad financiera de usuarios comunes.
- Determinaciones de "monedas contaminadas" (tainted) que erosionan la [fungibilidad](/es/glosario/fungibilidad) y crean mercados de dos niveles.
- Señalar y desanonimizar a activistas, periodistas y disidentes en jurisdicciones represivas.

Las defensas son las técnicas de privacidad que cubre el resto de este glosario: [evita reutilizar direcciones](/es/glosario/reutilizacion-de-direcciones), usa [CoinJoin](/es/glosario/coinjoin) o [PayJoin](/es/glosario/payjoin) donde aplique, prefiere [Lightning](/es/glosario/lightning-network) para los pagos, corre tu nodo a través de [Tor](/es/glosario/servicio-oculto-de-tor) y evita los puntos de control con KYC cuando sea posible.

El análisis de cadena no va a desaparecer. Usar Bitcoin con privacidad es una disciplina, no la opción por defecto.

Más a fondo en [Privacidad en Bitcoin](/es/a-fondo/privacidad-en-bitcoin): cómo funcionan las heurísticas, dónde queda pegado tu nombre, en qué se equivocan las herramientas y las defensas que todavía aguantan.
