---
title: "BIP 61"
slug: bip-61
draft: false
shortDefinition: "Specified the reject message protocol for invalid transactions or blocks, later removed in newer Bitcoin Core versions."
keyTakeaways:
  - "Allowed nodes to send ‘reject’ notifications to peers"
  - "Deemed unnecessary and removed for privacy/security"
  - "Illustrates ongoing refinement of Bitcoin’s P2P protocol"
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

BIP 61, documented in [BIP-61](https://github.com/bitcoin/bips/blob/master/bip-0061.mediawiki), introduced the ‘reject’ message for nodes to notify peers about invalid transactions or blocks. While it provided direct feedback, the idea had drawbacks: broadcasting reject messages could reveal node policies or transaction details, posing potential privacy risks.
Over time, Bitcoin Core developers concluded that the feature was less beneficial than initially hoped and could expose sensitive information. As a result, the ‘reject’ protocol messages were deprecated and then removed, reflecting Bitcoin’s ongoing push toward minimal, privacy-respecting communication. BIP 61 remains a footnote in the evolution of the P2P layer.
