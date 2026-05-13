---
title: "BIP 155 (Addr v2)"
slug: bip-155-addr-v2
draft: false
shortDefinition: "Extended the network address format to support longer addresses (e.g., Tor v3) in P2P messages."
keyTakeaways:
  - "Supports new address types like Tor v3"
  - "Modernizes the addr message for flexible formats"
  - "Improves Bitcoin’s network interoperability"
sources: []
relatedTerms:
  - address
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - node
  - peer-bookmark
  - peer-discovery
  - peer-management
liveWidget: ~
---

BIP 155, documented in [BIP-155](https://github.com/bitcoin/bips/blob/master/bip-0155.mediawiki), updated the way Bitcoin nodes share network addresses. Previously, the addr message format couldn’t handle newer address types like Tor v3, which use more bytes than older protocols.
By introducing an addr v2 message, this proposal allowed the network to remain compatible with evolving address standards. It makes Bitcoin’s P2P layer more adaptable, ensuring that privacy-focused addresses and other extended formats are properly shared and relayed among nodes.
