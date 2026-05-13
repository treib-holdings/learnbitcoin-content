---
title: "BIP 170 (TxOut Proof)"
slug: bip-170-txout-proof
draft: false
shortDefinition: "Proposed a standard for proving a transaction's inclusion in a block via merkle proofs, aiding SPV validation."
keyTakeaways:
  - "Formalizes merkle proofs for transaction inclusion"
  - "Aids lightweight verification of specific UTXOs"
  - "Hasn't become a universal practice but remains useful"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - merkle-block
  - merkle-inclusion-proof
  - merkle-proof
  - transaction
  - transaction-index-txindex
  - utxo-unspent-transaction-output
liveWidget: ~
---

BIP 170, detailed in [BIP-170](https://github.com/bitcoin/bips/blob/master/bip-0170.mediawiki), outlines a standardized format for creating a "TxOut proof"-effectively, a merkle proof that demonstrates a transaction's presence in a specific block. This is an essential component for SPV wallets that want to confirm funds without downloading the full blockchain.
Although the BIP offered a structured solution, it's not as widely employed as some other protocols. Still, the concept of a TxOut proof remains fundamental in verifying on-chain data with minimal resource usage. Having a consistent standard for these proofs can reduce development complexity and promote interoperability.
