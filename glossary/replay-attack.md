---
title: "Replay Attack"
slug: replay-attack
draft: false
shortDefinition: "Reusing a valid transaction from one chain on another chain post-fork, potentially causing unintended fund transfers."
keyTakeaways:
  - "Arises when two chains share transaction formats and addresses post-fork"
  - "Can unintentionally spend the same UTXO on multiple networks"
  - "Mitigated via replay protection or distinct address formats"
sources: []
relatedTerms:
  - double-spend
  - double-spend-relay
  - eavesdropping-attack
  - eclipse-attack
  - griefing-attack
  - jamming-attack-ln
  - race-attack
  - reorg-reorganization
  - spv-simplified-payment-verification
liveWidget: ~
---

A replay attack happens after a chain fork: a transaction signed and broadcast on chain A is also valid on chain B because both chains share UTXOs, addresses, and signature rules. An attacker (or just the natural P2P network) can rebroadcast your transaction on the other chain, spending the corresponding "twin" coins without your consent.

The canonical historical example is the August 2017 Bitcoin Cash split. Initially BCH had partial replay protection; Bitcoin Cash later added strong replay protection via a custom `SIGHASH_FORKID` flag that makes a BCH transaction invalid on Bitcoin and vice versa. Bitcoin SV's later split from BCH added its own.

Mitigations on a forking chain:

- Strong replay protection: the fork introduces a chain-specific signature change (a different sighash, a chain-ID-style commit, etc.) so transactions don't cross-validate.
- Separate spending: spend each side's coins to a fresh address before broadcasting anywhere, using inputs that are valid only on one chain.
- "Splitter" services: trusted helpers that produce a transaction explicitly valid on only one chain.

In 2026 the practical replay-attack risk is essentially zero for normal Bitcoin users. Any contentious fork that mattered would ship with replay protection, because the experience without it was painful enough in 2017 that no future fork would skip it.
