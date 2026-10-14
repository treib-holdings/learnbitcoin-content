---
title: "Servicio oculto de Tor"
slug: servicio-oculto-de-tor
aliases:
  - "servicios ocultos de Tor"
  - "servicio onion"
  - "servicios onion"
  - "hidden service"
  - "onion service"
draft: false
published: "2026-10-14"
shortDefinition: "Alojar un nodo o un servicio de Bitcoin a través de Tor, ocultando las direcciones IP reales y mejorando la privacidad y la resistencia a la censura."
keyTakeaways:
  - "Oculta la ubicación del nodo e impide la correlación directa por IP"
  - "Importante para el anonimato; evita ciertos bloqueos de los proveedores de internet o de los gobiernos"
  - "Puede ser más lento por el cifrado en capas de Tor y sus saltos entre repetidores"
sources:
  - { label: "Tor Project - Onion services (support site): onion services, formerly known as hidden services, are reachable only through the Tor network, and their location and IP address are hidden, making it difficult for adversaries to censor them or identify their operators", url: "https://support.torproject.org/onionservices/" }
  - { label: "Tor Project - How do onion services work: the complete connection between a client and an onion service consists of 6 relays, 3 picked by each side; the service reaches its introduction points over three-hop circuits", url: "https://community.torproject.org/onion-services/overview/" }
  - { label: "Tor Metrics - Performance, circuit round-trip latencies (onion server measurements, July 1 to September 21, 2026): the median of the daily median round trips is about 440 ms, from about 290 ms at the German vantage point to about 700 ms at the Hong Kong one", url: "https://metrics.torproject.org/onionperf-latencies.html" }
  - { label: "Bitcoin Core - doc/tor.md: run bitcoind -proxy=127.0.0.1:9050 to reach the network through Tor; when Tor's control port is reachable, Bitcoin Core automatically creates an onion service to listen on", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/tor.md" }
  - { label: "Bitcoin Core 0.7.0 release notes (September 2012): Tor hidden service support, SOCKS5 proxy by default, and -onlynet to connect only over IPv4, IPv6 or Tor", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.7.0.md" }
  - { label: "Bitcoin Core 0.12.0 release notes (February 23, 2016): when Tor is running and authorization is available, Bitcoin Core automatically creates a hidden service to listen on, without manual configuration", url: "https://bitcoincore.org/en/releases/0.12.0/" }
  - { label: "Bitcoin Core 26.0 release notes (December 6, 2023): nodes with multiple reachable networks keep at least one outbound connection to each, which improves resistance to eclipse attacks and to network partition", url: "https://bitcoincore.org/en/releases/26.0/" }
relatedTerms:
  - hidden-service-node
  - i2p-invisible-internet-project
  - json-rpc-over-tor
  - lightning-node
  - onion-routing-lightning
sameAs:
  - "https://en.wikipedia.org/wiki/Tor_(network)"
  - "https://www.wikidata.org/wiki/Q202044"
  - "https://en.wikipedia.org/wiki/.onion"
  - "https://www.wikidata.org/wiki/Q848715"
  - "https://en.bitcoin.it/wiki/Setting_up_a_Tor_hidden_service"
liveWidget: ~
translationOf: tor-hidden-service
sourceHash: "1d8128b76554"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

Un servicio oculto de Tor, que hoy se llama oficialmente **servicio onion** (onion service), es un punto de conexión al que solo se llega a través de la red Tor y que se identifica con una dirección `.onion`. La ubicación IP real de ese punto queda oculta tanto para quien lo usa como para el resto de internet.

Para un [nodo de Bitcoin](/es/glosario/nodo), correr como servicio onion de Tor aporta:

- **Privacidad en la capa de red.** Tu IP real no aparece en las listas de pares, no la ven las empresas de [análisis de cadena](/es/glosario/analisis-de-cadena) que escanean la red entre pares, y no la registran quienes operan otros nodos.
- **Resistencia a la censura.** La ubicación y la dirección IP de un servicio onion están ocultas, lo que, según el Tor Project, dificulta que un adversario lo censure o identifique a quien lo opera. Una lista de bloqueo de IPs conocidas de nodos de Bitcoin no puede incluir la tuya, porque la IP detrás de una dirección `.onion` nunca se anuncia a la red.
- **Protección contra [ataques de escucha (en inglés)](/glossary/eavesdropping-attack).** Sin tu IP, a quien observa le cuesta mucho más relacionar lo que transmites con tu ubicación física o tu identidad.
- **Una segunda red por la que conectarse.** Desde la versión 26.0, Bitcoin Core mantiene al menos una conexión saliente en cada red a la que puede llegar, lo que, según sus notas de versión, mejora la resistencia a los [ataques de eclipse (en inglés)](/glossary/eclipse-attack). Un nodo que está en Tor y también en la internet abierta (clearnet) es más difícil de acorralar que uno que está solo en una de las dos.

El costo es la latencia. Una conexión a un servicio onion pasa por seis repetidores (relays), tres elegidos por cada lado, y las mediciones del propio Tor Project sitúan el viaje de ida y vuelta por un circuito onion en unos cientos de milisegundos en 2026, con una mediana de unos 440. Para lo que Bitcoin necesita (propagar un bloque más o menos cada 10 minutos y transacciones que se propagan en segundos), esa latencia es casi invisible en la práctica. La propagación de bloques y de transacciones por Tor funciona bien.

Bitcoin Core es compatible con Tor desde la versión 0.7, de 2012, y desde la versión 0.12, de 2016, crea un servicio onion por ti de forma automática cuando puede llegar al puerto de control de Tor. Correr tu nodo detrás de Tor es un solo cambio en el archivo de configuración (`proxy=127.0.0.1:9050` más unas pocas opciones relacionadas). El mismo patrón de servicio oculto puede exponer también el [RPC para administración remota (en inglés)](/glossary/json-rpc-over-tor), lo que te permite controlar el nodo de tu casa desde cualquier lugar sin abrir ningún puerto en el firewall.

Si haces autocustodia y corres un [nodo completo](/es/glosario/nodo-completo), correrlo a través de Tor es la mejora de privacidad más grande que puedes hacer en la capa de red. Muy recomendable para cualquiera a quien le importe que su actividad on-chain no se relacione con la IP de su casa.

Lee [Privacidad en Bitcoin](/es/a-fondo/privacidad-en-bitcoin) para ver qué fuga cierra Tor y cuáles no toca.
