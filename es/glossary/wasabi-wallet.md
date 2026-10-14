---
title: "Wasabi Wallet"
slug: wasabi-wallet
aliases:
  - "Wasabi"
  - "zkSNACKs"
  - "WabiSabi"
draft: false
published: "2026-10-15"
shortDefinition: "Billetera de Bitcoin de escritorio y de código abierto con CoinJoin integrado. Su coordinador, operado por una empresa, cerró de forma voluntaria en junio de 2024 tras los arrestos de Samourai; la billetera sobrevivió y hoy hace coinjoins a través de coordinadores independientes de terceros."
keyTakeaways:
  - "Desarrollada por zkSNACKs desde 2018; la versión 2.0 (2022) introdujo el protocolo WabiSabi, que le permite a un coordinador armar coinjoins de montos variables sin saber qué entradas y salidas van juntas"
  - "zkSNACKs apagó su coordinador el 1 de junio de 2024, como respuesta preventiva a los procesos contra Samourai Wallet; a la empresa nunca se le imputó nada"
  - "La billetera no murió: pasó a desarrollo comunitario, añadió la selección de coordinador para que cualquiera pueda operar o elegir uno, y ha seguido publicando versiones en 2026"
sources:
  - { label: "Wasabi Wallet blog - zkSNACKs discontinues its coinjoin coordination service (2024, archived copy)", url: "http://web.archive.org/web/20241007122748/https://blog.wasabiwallet.io/zksnacks-is-discontinuing-its-coinjoin-coordination-service-1st-of-june/" }
  - { label: "CoinDesk - Wasabi coordinator to blacklist certain bitcoin transactions (2022)", url: "https://www.coindesk.com/tech/2022/03/14/wasabi-wallets-coinjoin-coordinator-to-blacklist-certain-bitcoin-transactions" }
  - { label: "WabiSabi paper - IACR ePrint 2021/206", url: "https://eprint.iacr.org/2021/206" }
relatedTerms:
  - coinjoin
  - whirlpool-samourai
  - joinmarket
  - joinstr
  - chain-analysis
  - coin-control
sameAs:
  - "https://github.com/WalletWasabi/WalletWasabi"
liveWidget: ~
translationOf: wasabi-wallet
sourceHash: "776a8bf426e4"
sourceCommit: "0ea202c"
sourceUpdated: "2026-07-13"
translation:
  method: "llm-draft"
---

Wasabi es una billetera de escritorio, de código abierto y no custodial, cuya característica distintiva es el [CoinJoin](/es/glosario/coinjoin) integrado. La desarrolló una empresa llamada zkSNACKs y salió por primera vez en 2018. La versión 2.0, en junio de 2022, automatizó los coinjoins y adoptó el protocolo WabiSabi, una pieza de ingeniería criptográfica seria: un coordinador central arma coinjoins de montos variables con credenciales cegadas, de modo que puede construir la transacción sin enterarse nunca de qué entradas y salidas pertenecen a la misma persona. El coordinador nunca tiene los fondos en su poder y no puede robarlos.

Dos controversias definen la historia de Wasabi. En marzo de 2022, zkSNACKs anunció que su coordinador empezaría a rechazar monedas marcadas por un proveedor de [análisis de cadena](/es/glosario/analisis-de-cadena). Que una herramienta de privacidad le pagara a una empresa de vigilancia para filtrar a sus propios usuarios era, por decirlo con suavidad, difícil de justificar, y su rival [Samourai](/es/glosario/whirlpool-samourai) le sacó todo el jugo. En honor a la verdad, el filtro se aplicaba solo al coordinador de zkSNACKs, no al protocolo, y por la arquitectura de la billetera la empresa seguía sin poder identificar a los usuarios. Aun así, era un control de acceso a nivel de coordinador, y dejaba entrever la exposición legal que acabaría con ese coordinador dos años después.

En abril de 2024, Estados Unidos arrestó a los fundadores de Samourai Wallet y trató su servicio de coinjoin no custodial como transmisión de dinero sin licencia. En cuestión de días, zkSNACKs bloqueó a los usuarios de Estados Unidos; el 2 de mayo de 2024 anunció que abandonaba por completo el negocio de la coordinación, y su coordinador se desconectó el 1 de junio. El cierre fue voluntario y preventivo. A zkSNACKs nunca la arrestaron, acusaron ni sancionaron. Leyó el clima legal y se retiró.

La gente dice a cada rato que Wasabi cerró. No cerró. El software de la billetera siguió funcionando, el desarrollo pasó a una organización comunitaria de código abierto, y ese mismo junio la app incorporó la selección de coordinador, con lo que los usuarios pueden apuntarla a cualquier coordinador WabiSabi operado de forma independiente (se descubren a través de relays de Nostr, y cualquiera puede operar uno, porque el coordinador se publica como código abierto). Versiones posteriores blindaron el cliente contra coordinadores maliciosos y, para 2026, eliminaron la última dependencia de servidores de la era zkSNACKs. zkSNACKs desapareció del mapa; la billetera y el protocolo siguieron adelante sin ella.

Lee [Privacidad en Bitcoin](/es/a-fondo/privacidad-en-bitcoin) para ver la historia completa de 2024 y en qué punto está CoinJoin hoy.
