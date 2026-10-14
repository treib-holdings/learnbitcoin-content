---
title: "Explorador de bloques"
slug: explorador-de-bloques
draft: false
published: "2026-10-13"
shortDefinition: "Una herramienta en línea para consultar datos de la cadena de bloques (blockchain): transacciones, direcciones, bloques y más."
keyTakeaways:
  - "Muestra públicamente historiales de transacciones e información de los bloques"
  - "Una forma común de verificar confirmaciones o el saldo de una dirección"
  - "Posibles costos de privacidad si dependes de servicios de terceros"
aliases:
  - "exploradores de bloques"
  - "block explorer"
sources:
  - { label: "Bitcoin Wiki - Privacy, Blockchain explorer websites: the website can easily link the user's IP address to their bitcoin transaction (accessed 2026-10-13)", url: "https://en.bitcoin.it/wiki/Privacy#Blockchain_explorer_websites" }
  - { label: "EFF - Cover Your Tracks: cookie tracking and browser fingerprinting (accessed 2026-10-13)", url: "https://coveryourtracks.eff.org/learn" }
  - { label: "mempool - The Mempool Open Source Project, README: open source, focused on the fee market, self-hosted on your own hardware (accessed 2026-10-13)", url: "https://github.com/mempool/mempool/blob/master/README.md" }
  - { label: "mempool - docker/README.md: a self-hosted Mempool instance needs your own Bitcoin Core deployed and configured separately (accessed 2026-10-13)", url: "https://github.com/mempool/mempool/blob/master/docker/README.md" }
  - { label: "janoside - BTC RPC Explorer, README: self-hosted explorer driven by RPC calls to your own Bitcoin node (accessed 2026-10-13)", url: "https://github.com/janoside/btc-rpc-explorer/blob/master/README.md" }
  - { label: "ChainQuery - Bitcoin, queried: backed by our own node, not third-party APIs (accessed 2026-10-13)", url: "https://chainquery.com/" }
  - { label: "ChainQuery - Privacy Policy: cookieless Plausible analytics, no cookies, no fingerprinting, no cross-site tracking (accessed 2026-10-13)", url: "https://chainquery.com/privacy-policy" }
relatedTerms:
  - bip-30
  - bip-34
  - bitcoin-core
  - block
  - block-header
  - block-height
  - block-propagation
  - block-reward
  - blockchain
  - chain-visualization
  - transaction
  - transaction-index-txindex
  - utxo-unspent-transaction-output
sameAs:
  - "https://en.bitcoin.it/wiki/Block_explorer"
liveWidget: ~
translationOf: block-explorer
sourceHash: "9f506bd78c1d"
sourceCommit: "c52bac9"
sourceUpdated: "2026-10-13"
translation:
  method: "llm-draft"
---

Un explorador de bloques es una interfaz web para navegar por la cadena de Bitcoin. Escribes una [dirección](/es/glosario/direccion), el identificador (txid) de una [transacción](/es/glosario/transaccion) o una altura de bloque, y recibes los datos on-chain asociados: saldos, historial de transacciones, confirmaciones, comisiones, estado en el mempool.

Los exploradores de bloques son útiles para todo el mundo y, para todo el mundo, un costo en privacidad. Cada búsqueda que haces le dice al operador qué direcciones o transacciones te interesan. Para consultas ocasionales no pasa nada; para consultas sobre tu propia billetera es una fuga de privacidad que se correlaciona con tu IP, la huella de tu navegador (fingerprint) y cualquier cookie que esté en juego.

Dos exploradores que vale la pena conocer:

- **[mempool.space](https://mempool.space)**: de código abierto, construido en torno al mercado de comisiones y diseñado para que lo alojes en tu propia máquina, conectado a tu propio nodo.
- **[ChainQuery.com](https://chainquery.com)**: el explorador de Bitcoin asociado a este sitio. Se alimenta de su propio nodo completo, no de la API de un tercero; analítica sin cookies, sin fingerprinting, sin rastreo entre sitios.

Para los casos en que la privacidad importa, corre tu propio nodo y usa un explorador local (una instancia propia de mempool o BTC RPC Explorer; los dos leen de tu propio nodo de [Bitcoin Core](/es/glosario/bitcoin-core)). Un [nodo completo](/es/glosario/nodo-completo) más un explorador local significa que los datos de la cadena los ves *tú* y *solo* tú: ningún tercero registra tus consultas.

Para las preguntas de todos los días, del tipo "¿ya se confirmó mi transacción?" o "¿cómo está el mercado de comisiones?", los exploradores públicos están bien. Solo no pegues la dirección donde guardas tus ahorros en el cuadro de búsqueda de cada sitio que visitas.
