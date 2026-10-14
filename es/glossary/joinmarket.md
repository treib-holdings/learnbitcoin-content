---
title: "JoinMarket"
slug: joinmarket
aliases:
  - "Joinmarket"
  - "joinmarket-ng"
draft: false
published: "2026-10-15"
shortDefinition: "El CoinJoin descentralizado original: un mercado de dos lados donde los makers cobran comisiones por ofrecer liquidez para mezclar y los takers pagan por mezclar cuando quieren. No hay coordinador que incautar, y por eso sobrevivió a 2024, aunque para 2026 el código original ya estaba archivado y un sucesor independiente mantiene viva la red."
keyTakeaways:
  - "Lo anunció Chris Belcher en enero de 2015 y lo mantuvo Adam Gibson durante años; Bitcoin Optech lo reconoce como la primera implementación de CoinJoin que funcionó"
  - "El taker arma la transacción y la negociación pasa por relays cifrados y reemplazables, así que no hay un coordinador central que se pueda cerrar ni citar ante un tribunal"
  - "Sus propios mantenedores archivaron el código de referencia en abril de 2026 por falta de desarrollo; la red sigue viva gracias a joinmarket-ng, que habla el mismo protocolo, y a la interfaz web Jam"
sources:
  - { label: "Bitcointalk - JoinMarket announcement thread (2015)", url: "https://bitcointalk.org/index.php?topic=919116.0" }
  - { label: "Bitcoin Optech - CoinJoin topic", url: "https://bitcoinops.org/en/topics/coinjoin/" }
  - { label: "JoinMarket reference implementation (archived 2026)", url: "https://github.com/JoinMarket-Org/joinmarket-clientserver" }
  - { label: "joinmarket-ng - successor implementation", url: "https://github.com/joinmarket-ng/joinmarket-ng" }
relatedTerms:
  - coinjoin
  - joinstr
  - wasabi-wallet
  - whirlpool-samourai
  - coin-control
liveWidget: ~
translationOf: joinmarket
sourceHash: "ab9d1b02ceed"
sourceCommit: "0ea202c"
sourceUpdated: "2026-07-13"
translation:
  method: "llm-draft"
---

JoinMarket resolvió el problema en el que había fracasado todo diseño de [CoinJoin](/es/glosario/coinjoin) anterior: lograr que desconocidos aparezcan y mezclen monedas contigo. Lo hizo construyendo un mercado. Los makers (quienes ofrecen liquidez) corren bots siempre encendidos que ponen sus monedas como liquidez para mezclar y fijan su propia comisión. Los takers (quienes la toman) pagan esa comisión para armar un CoinJoin a la hora y por el monto que les convenga. Cada participante conserva sus propias claves (nadie toma nunca la custodia), y el incentivo de la comisión hace el trabajo que de otro modo haría un coordinador.

Chris Belcher lo anunció en Bitcointalk en enero de 2015 con un título que resumía la propuesta: "Coinjoin that people will actually use" (un CoinJoin que la gente sí va a usar). Adam Gibson dirigió la implementación y su mantenimiento durante casi toda la década siguiente. Bitcoin Optech reconoce a JoinMarket como la primera implementación de CoinJoin que de verdad funcionó.

La decisión de diseño que mejor envejeció es la ausencia de coordinador. El taker construye la transacción por su cuenta, y los participantes negocian mediante mensajes cifrados de extremo a extremo que se retransmiten a través de servidores IRC públicos y nodos de directorio onion de Tor: infraestructura que nunca toca los fondos y que se puede reemplazar si algún relay desaparece. Cuando Estados Unidos procesó en 2024 a los operadores del coordinador de [Samourai](/es/glosario/whirlpool-samourai) y el coordinador de [Wasabi](/es/glosario/wasabi-wallet) cerró en respuesta, en JoinMarket no había nada que incautar ni nadie a quien arrestar. Adiciones posteriores reforzaron el mercado en sí: los bonos de fidelidad (2021) hacen que a una sola entidad le salga caro hacerse pasar por muchos makers para desanonimizar a los takers.

Para 2026, lo honesto es decir que la red sobrevivió a su código original. Sus propios mantenedores archivaron la implementación de referencia en abril de 2026, después de que el desarrollo se estancara, con una última versión que advertía a los usuarios que no usaran código sin mantenimiento. Lo que continúa es la red: joinmarket-ng, un sucesor independiente nacido a fines de 2025 que habla el mismo protocolo, publica versiones de forma activa, y Jam, la interfaz web que suaviza la curva de aprendizaje de un JoinMarket pensado primero para la línea de comandos, sigue en desarrollo. La descentralización hizo que a los fiscales les resultara imposible matar a JoinMarket. Nada hace al software inmune al cansancio de sus mantenedores.

Lee [Privacidad en Bitcoin](/es/a-fondo/privacidad-en-bitcoin) para la historia completa de 2024 y dónde está CoinJoin hoy.
