---
title: "SPV (Simplified Payment Verification)"
slug: spv-simplified-payment-verification
draft: false
shortDefinition: "A lightweight client model verifying transactions using block headers and Merkle proofs instead of the full blockchain."
keyTakeaways:
  - "Stores only block headers, relying on Merkle proofs"
  - "Less resource-intensive than a full node, but more trust in peers"
  - "Privacy concerns arise unless advanced methods (e.g., Neutrino) are used"
sources: []
relatedTerms:
  - adaptive-block-filter
  - bip-37
  - bip-158
  - bitcoin-client
  - chain-analysis
  - eclipse-attack
  - full-validation
  - merkle-root
  - race-attack
  - replay-attack
liveWidget: ~
---

SPV wallets only download block headers—80 bytes per block—and request Merkle proofs from full nodes for transactions they care about. The wallet can confirm a transaction’s inclusion in a block by checking the Merkle path to the block’s root hash. While more bandwidth-efficient and requiring less storage, SPV has privacy trade-offs: full nodes see which addresses or TXIDs you’re querying. Newer methods like Neutrino (BIP 157/158) improve privacy by letting clients fetch compact filters. Still, SPV depends on honest nodes relaying valid headers and proofs, so it’s slightly less trustless than running a full node.
