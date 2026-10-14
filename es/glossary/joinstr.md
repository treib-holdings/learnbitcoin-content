---
title: "Joinstr"
slug: joinstr
draft: false
published: "2026-10-15"
shortDefinition: "Un diseño de CoinJoin que coordina las rondas a través de relays de Nostr, sin coordinador que operar, pagar ni incautar. Empezó como prueba de concepto en 2022; para 2026 se distribuye como plugin de Electrum, app de Android y app de Umbrel con soporte para la red principal, y su uso sigue siendo pequeño y difícil de medir."
keyTakeaways:
  - "Lo anunció en bitcoin-dev en agosto de 2022 el desarrollador seudónimo /dev/fd0 (también 1440000bytes) como prueba de concepto explícita; los pools se anuncian como eventos de Nostr de tipo (kind) 2022 y se entra a ellos por mensajes directos cifrados"
  - "Software disponible a septiembre de 2026: plugin de Electrum 0.4.1, app de Android 0.2.0, una app de Umbrel añadida en julio de 2026, un daemon sin interfaz y una CLI, una versión derivada de Sparrow Wallet y una biblioteca en Rust sin versión etiquetada"
  - "Las firmas de anillo contra la denegación de servicio llegaron en junio de 2026 y la resistencia opcional a ataques Sybil en julio de 2026; los pools que no la activan no tienen ninguna, y no hay un conteo público de rondas completadas"
sources:
  - { label: "bitcoin-dev mailing list - joinstr announcement (2022, archive mirror)", url: "https://www.mail-archive.com/bitcoin-dev@lists.linuxfoundation.org/msg11887.html" }
  - { label: "Bitcoin Optech Newsletter #214 (2022)", url: "https://bitcoinops.org/en/newsletters/2022/08/24/" }
  - { label: "Bitcoin Optech Newsletter #308 - Electrum plugin (2024)", url: "https://bitcoinops.org/en/newsletters/2024/06/21/" }
  - { label: "Joinstr documentation - FAQ", url: "https://docs.joinstr.xyz/users/faqs" }
  - { label: "Joinstr protocol document (Nostr kind 2022, DoS and sybil mitigations)", url: "https://gitlab.com/invincible-privacy/joinstr/-/blob/main/NIP.md" }
  - { label: "Joinstr source repository (plugin, daemon, CLI, web UI)", url: "https://gitlab.com/invincible-privacy/joinstr" }
  - { label: "Umbrel app store - Joinstr", url: "https://apps.umbrel.com/app/joinstr" }
  - { label: "Joinstr Rust library (rust-joinstr organization, 2026)", url: "https://github.com/rust-joinstr/joinstr" }
relatedTerms:
  - coinjoin
  - joinmarket
  - wasabi-wallet
  - whirlpool-samourai
  - mixing-service
  - payjoin
  - chain-analysis
liveWidget: ~
translationOf: joinstr
sourceHash: "fd8817d7c34b"
sourceCommit: "0ea202c"
sourceUpdated: "2026-09-17"
translation:
  method: "llm-draft"
---

Joinstr es un diseño de [CoinJoin](/es/glosario/coinjoin) que responde al problema del coordinador no teniendo uno. Quien quiere mezclar publica un pool como evento de Nostr, de tipo (kind) 2022, en un relay: la denominación, cuántos pares busca y cómo llegar a él. Los demás lo encuentran leyendo el relay, se unen por mensajes directos cifrados, registran direcciones de salida nuevas y cada uno aporta una transacción parcialmente firmada que cubre su propia entrada y las salidas de igual tamaño de todos. Combinadas, se convierten en un solo CoinJoin. Los relays son relays comunes de Nostr, operados por desconocidos para otros fines, y nunca entran en contacto con el dinero de nadie. Nadie cobra una comisión de coordinador, así que el costo es la comisión de minería: del orden de un par de miles de sats a 10 sat/vB, según el propio ejemplo del proyecto.

Después de 2024, esa arquitectura pasó a ser el punto central. Los fiscales incautaron el coordinador de [Samourai](/es/glosario/whirlpool-samourai) en abril de 2024, y zkSNACKs apagó el de [Wasabi](/es/glosario/wasabi-wallet) semanas después; un coordinador es un operador al que se puede acusar. Una ronda de mezcla organizada por participantes seudónimos a través de relays públicos no ofrece ese asidero.

El proyecto dejó de ser solo una prueba de concepto en 2024. El plugin de Electrum salió como pre-alfa en junio de 2024, perdió esa etiqueta en pocas versiones, sumó firmas de anillo contra la denegación de servicio en junio de 2026 y resistencia opcional a ataques Sybil en julio de 2026, y llegó a la versión 0.4.1 en agosto de 2026. Una app de Android funciona en la red principal (mainnet) desde octubre de 2024 y llegó a la 0.2.0 en junio de 2026. En julio de 2026 se añadió una app a la tienda de Umbrel. Existen un daemon sin interfaz y un cliente de línea de comandos, y una versión derivada de Sparrow Wallet con Joinstr integrado, mantenida en gran parte por el propio desarrollador de Joinstr, publicó su primera versión no preliminar en agosto de 2026; Sparrow Wallet en sí no lleva código de Joinstr. La biblioteca en Rust se mudó a un repositorio nuevo en febrero de 2026, donde se quitó la vieja advertencia contra usarla en la red principal y el trabajo siguió hasta julio de 2026; no tiene ninguna versión etiquetada. La documentación dice que hay soporte para la red principal, y el desarrollador seudónimo que escribió el anuncio de 2022 todavía mantiene la mayor parte.

Lo que nadie puede mostrar es cuánto se usa. No hay un conteo público de rondas completadas, Bitcoin Optech no lo cubre desde enero de 2025, y los anuncios de pools en los relays son el único rastro observable. Una consulta al relay por defecto a mediados de septiembre de 2026 encontró unos cientos de anuncios de pools en los diez meses anteriores, la mayoría pools de dos personas por 0.001 BTC a través de Tor, y un anuncio no es un CoinJoin completado. Los pools que no activan la función de resistencia a ataques Sybil no tienen ninguna, y el documento del protocolo lo dice sin rodeos. Es software que funciona, con una base de usuarios pequeña, y su propiedad principal, la coordinación a través de relays que cualquiera puede operar y que existen para otros fines, no ha sido puesta a prueba por nadie que intente apagarlo.

Lee [Privacidad en Bitcoin](/es/a-fondo/privacidad-en-bitcoin) para la historia completa de 2024 y dónde está CoinJoin hoy.
