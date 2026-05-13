---
title: "BIP 174 (PSBT)"
slug: bip-174-psbt
draft: false
shortDefinition: "Defines Partially Signed Bitcoin Transactions, enabling multi-signer or multi-step transaction workflows."
keyTakeaways:
  - "Enables coordinated signing among multiple parties"
  - "Enhances security by separating signing from creation"
  - "Boosts interoperability across hardware/software wallets"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - hierarchical-multisig
  - mono-signature
  - partial-signature
  - partially-signed-bitcoin-transaction-psbt
  - psbt
  - transaction
liveWidget: ~
---

BIP 174, described in [BIP-174](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki), provides a standard format for Partially Signed Bitcoin Transactions (PSBTs). Think of a PSBT as a 'collaborative transaction file' that one or more participants can sign sequentially. This approach is very handy for hardware wallets, multi-signature setups, and offline signing workflows.
By separating transaction creation from the final signature, PSBT simplifies complex operations like coin joins or multi-device custody. Each step can be performed by different tools without losing track of critical metadata. The result is a more flexible and interoperable system for advanced Bitcoin transactions.
