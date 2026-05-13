---
title: "BIP 35 (mempool message)"
slug: bip-35-mempool-message
draft: false
shortDefinition: "Provided a way for peers to request the node's mempool transactions, though it's rarely used in modern Bitcoin Core."
keyTakeaways:
  - "Lets peers request a node's unconfirmed tx list"
  - "Not frequently implemented or permitted nowadays"
  - "An early attempt to share mempool data openly"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - bitcoin-core-rpc
  - mempool
  - node
  - node-synchronization
  - transaction
liveWidget: ~
---

BIP 35, outlined in [BIP-35](https://github.com/bitcoin/bips/blob/master/bip-0035.mediawiki), introduced a 'mempool' message that peers could send to a node to ask for a list of currently unconfirmed transactions. While conceptually useful, it never gained widespread adoption in everyday node communications.
Many nodes simply limit or disable direct mempool queries, focusing on more efficient or privacy-preserving protocols. As a result, BIP 35 is part of Bitcoin's historical evolution of P2P message types-still valid, but overshadowed by newer, more robust ways of sharing transaction data.
