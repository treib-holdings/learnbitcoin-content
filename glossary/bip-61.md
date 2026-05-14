---
title: "BIP 61"
slug: bip-61
draft: false
shortDefinition: "Specified the reject message protocol for invalid transactions or blocks, later removed in newer Bitcoin Core versions."
keyTakeaways:
  - "Allowed nodes to send 'reject' notifications to peers"
  - "Deemed unnecessary and removed for privacy/security"
  - "Illustrates ongoing refinement of Bitcoin's P2P protocol"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - bitcoin-core-rpc
  - node
  - node-autoban
  - node-synchronization
liveWidget: ~
---

BIP 61 specified a `reject` P2P message: when a node rejects a transaction or block, it tells the sender why. Sounds helpful. Wasn't.

Two problems. The reject reason is advisory and trivially forgeable, so wallets that relied on it were trusting an unreliable signal from anonymous peers. And broadcasting rejections leaks a node's mempool policy (fee floor, standardness rules, version preferences) that's better kept private. Bitcoin Core disabled `reject` by default in 0.18 (2019) and removed the code entirely in 0.20 (2020).

Modern wallets infer rejection from absence. If a transaction doesn't appear in block explorers or peer mempools after a reasonable window, assume it was dropped and rebroadcast with a higher fee, ideally signaling [Replace-by-Fee (RBF)](/glossary/replace-fee-rbf) so the bump is unambiguous.

Spec: [BIP-61](https://github.com/bitcoin/bips/blob/master/bip-0061.mediawiki).
