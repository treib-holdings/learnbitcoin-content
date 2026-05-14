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

BIP 35 added a `mempool` P2P message: a peer sends `mempool` and the node replies with an `inv` listing every txid currently in its mempool. Useful around 2012, when nascent block explorers and wallets wanted a quick way to see unconfirmed activity from any willing peer.

Then it became a footgun. Dumping the whole mempool on request lets an observer fingerprint a node's policy, time propagation, and probe for transactions other peers haven't seen yet. Bitcoin Core now gates the response behind the `NODE_BLOOM` service bit (or peer whitelisting), so the wider P2P network has effectively stopped serving it. In 2026, public mempool data flows through block explorers and dedicated mempool infrastructure, not opportunistic `mempool` queries.

Spec: [BIP-35](https://github.com/bitcoin/bips/blob/master/bip-0035.mediawiki). Still defined, almost never used in the wild.
