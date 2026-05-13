---
title: "BIP 22 (getblocktemplate)"
slug: bip-22-getblocktemplate
draft: false
shortDefinition: "A proposal for an RPC method giving miners raw block data to assemble their own candidate blocks instead of relying on getwork."
keyTakeaways:
  - "Offers full control over block construction"
  - "Supersedes the simpler but less flexible getwork"
  - "Enhances decentralization in transaction selection"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - bitcoin-core-rpc
  - block
  - block-header
  - mining-centralization
  - mining-rig
  - mining-software
liveWidget: ~
---

BIP 22, found in [BIP-22](https://github.com/bitcoin/bips/blob/master/bip-0022.mediawiki), introduced the getblocktemplate (GBT) call. Rather than receiving just a partially assembled block header (as in the older getwork protocol), miners get the entire block template, including transactions they can freely reorder or select.
This advancement gave miners more autonomy and transparency in choosing which transactions to include, aligning with the decentralized ethos of Bitcoin. It also improved efficiency by reducing back-and-forth communication. While GBT is more complex than getwork, it became the foundation for modern mining software and is often paired with BIP 23, which refined JSON-based block template submission.
