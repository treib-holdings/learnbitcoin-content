---
title: "Bitcoin Core"
slug: bitcoin-core
draft: false
published: "2026-10-14"
shortDefinition: "La implementación de referencia del protocolo Bitcoin, iniciada originalmente por Satoshi Nakamoto y mantenida hoy por desarrolladores de la comunidad."
keyTakeaways:
  - "Fija el estándar de cómo se hacen cumplir las reglas de Bitcoin"
  - "Lo mantiene un grupo descentralizado de desarrolladores"
  - "Valida por completo cada bloque y cada transacción contra las reglas de consenso"
sources:
  - { label: "Bitcoin Core - About: an open source project that maintains and releases the Bitcoin Core client, a direct descendant of the original Bitcoin software client released by Satoshi Nakamoto; full-node software for fully validating the blockchain", url: "https://bitcoincore.org/en/about/" }
  - { label: "Bitcoin Core - 0.9.0 release notes: to reduce confusion between Bitcoin-the-network and Bitcoin-the-software, the reference client was renamed to Bitcoin Core (tagged 2014-03-18)", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.9.0.md" }
  - { label: "Bitcoin Core - CONTRIBUTING.md: an open contributor model with no privileged Bitcoin Core developers; repository maintainers merge pull requests and run the release cycle; patches that change consensus rules must be preceded by extensive mailing list discussion and have a numbered BIP", url: "https://github.com/bitcoin/bitcoin/blob/master/CONTRIBUTING.md" }
  - { label: "Bitcoin Core - Lifecycle: we aim to make a major release every 6 months; proposals to change consensus rules are always shipped first in maintenance versions", url: "https://bitcoincore.org/en/lifecycle/" }
  - { label: "Bitcoin Core - doc/bips.md: BIP 141 defined for mainnet as of v0.13.1; BIP 340, 341 and 342 with mainnet activation as of v0.21.1", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/bips.md" }
  - { label: "BTC Nodes API - snapshot of October 13, 2026, 23:37 UTC: 25,452 reachable nodes, 21,257 reporting a Bitcoin Core (Satoshi) user agent and 4,115 a Bitcoin Knots user agent", url: "https://btcnodes.io/api/v1/snapshots/1791934676/" }
  - { label: "bitcoin/bitcoin - pull request 16432, qt: Add privacy to the Overview page (Settings, Mask Values), by Hennadii Stepanov, merged 2020-05-29; a reviewer notes it works like the lurking wife mode of Wasabi Wallet", url: "https://github.com/bitcoin/bitcoin/pull/16432" }
relatedTerms:
  - bitcoin-client
  - bitcoin-core-rpc
  - bitcoin-knots
  - lurking-wife-mode
  - node
  - node-autoban
  - node-operator
  - node-synchronization
  - spv-simplified-payment-verification
sameAs:
  - "https://en.wikipedia.org/wiki/Bitcoin_Core"
  - "https://www.wikidata.org/wiki/Q18198917"
  - "https://en.bitcoin.it/wiki/Bitcoin_Core"
liveWidget: ~
translationOf: bitcoin-core
sourceHash: "0fee2894d15b"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

Bitcoin Core es la implementación de referencia del protocolo Bitcoin. Es el descendiente directo del cliente que [Satoshi](/es/glosario/satoshi-nakamoto) publicó con el nombre "Bitcoin", rebautizado en 2014 para reducir la confusión entre Bitcoin la red y Bitcoin el software. Corre en unos cinco de cada seis [nodos completos](/es/glosario/nodo-completo) accesibles públicamente (octubre de 2026), la mayor parte del resto corre [Bitcoin Knots](/es/glosario/bitcoin-knots), y es a lo que la mayoría de las demás billeteras y bibliotecas se remiten sin hacer ruido.

El código vive en **[github.com/bitcoin/bitcoin](https://github.com/bitcoin/bitcoin)**, mantenido por un elenco cambiante de colaboradores sin ninguna estructura formal de gobernanza. Los cambios pasan por:

1. Un [BIP](/es/glosario/bip) y una discusión extensa en la lista de correo para todo lo que cambie las reglas de consenso.
2. Un pull request al código, que revisa cualquiera que quiera (y muchos revisores serios quieren).
3. La integración por parte de los mantenedores, un grupo pequeño con permiso para fusionar cambios (merge). Ellos no fijan las reglas; integran lo que pasa la revisión.
4. Una versión (release), que publican los mantenedores, quienes también llevan el ciclo de lanzamientos.
5. **La adopción es voluntaria.** Cada operador de nodo decide si actualiza o no. Un cambio de consenso solo se afianza cuando tantos operadores corren la versión nueva que la red, en la práctica, ya migró.

La combinación de revisión abierta y adopción voluntaria es lo que hace que el protocolo Bitcoin sea genuinamente difícil de cambiar. Un mantenedor hostil no puede colar un cambio: los revisores lo van a detectar. Un grupo hostil no puede bifurcar las reglas: los nodos no van a correr su versión. El sistema está optimizado para *no cometer errores*, aunque eso cueste una evolución lenta.

Bitcoin Core apunta a una versión mayor cada seis meses, cada una con mejoras incrementales en la política del mempool, la capa de red y el rendimiento de la validación. Los cambios de consenso salen primero en versiones de mantenimiento y no en versiones mayores: los parámetros de SegWit para la red principal llegaron en la 0.13.1 y los parámetros de activación de Taproot en la 0.21.1. Es el estándar de facto de "qué es Bitcoin en realidad".

El código también tiene sus rarezas. La opción "Mask Values" (ocultar valores) de la interfaz gráfica, que esconde saldos y montos de cualquiera que mire por encima de tu hombro, se integró en 2020; durante la revisión alguien la comparó con la versión de la misma idea en [Wasabi Wallet](/es/glosario/wasabi-wallet), conocida como [Lurking Wife Mode (en inglés)](/glossary/lurking-wife-mode): un pequeño recordatorio de que este software lo escriben seres humanos de carne y hueso.

Lee [Nodo completo](/es/glosario/nodo-completo) para saber qué implica correrlo, y [Soberanía](/es/recorrido/soberania), el capítulo del Recorrido, para saber por qué querrías hacerlo.

Para entender por qué los cambios cercanos a la validación se tratan con tanto cuidado, lee [La bifurcación de la cadena de 2013](/es/a-fondo/bifurcacion-de-2013), la noche en que un cambio de base de datos resultó ser un cambio de consenso.
