---
title: "BIP 30"
slug: bip-30
draft: false
shortDefinition: "A rule preventing creation of a new transaction with the same txid spending the same outputs, blocking double-spend edge cases."
keyTakeaways:
  - "Prevents transactions with identical txids"
  - "Closes a niche double-spend vulnerability"
  - "Part of ongoing improvements to transaction validity"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-34
  - block
  - block-explorer
  - block-height
  - double-spend
  - transaction
liveWidget: ~
---

BIP 30, detailed in [BIP-30](https://github.com/bitcoin/bips/blob/master/bip-0030.mediawiki), was introduced to address a rare exploit scenario where a user could create a new transaction with exactly the same inputs and outputs as a prior one, generating identical transaction IDs. This could confuse the network or certain wallet implementations, potentially enabling subtle double-spend attacks.
By forbidding this behavior, BIP 30 closed a loophole that could disrupt the normal chain of transaction ownership. Later changes such as BIP 34 and subsequent improvements to transaction validation further hardened Bitcoin against these odd edge cases, ensuring that each transaction remains unique and traceable on the blockchain.
