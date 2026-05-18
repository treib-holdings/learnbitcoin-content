---
title: "Mono-Signature"
slug: mono-signature
draft: false
shortDefinition: "A single ECDSA or Schnorr signature controlling an output-typical single-sig scenario versus multisig."
keyTakeaways:
  - "Standard approach: one private key signs, one signature suffices"
  - "Less secure than multisig if the key is compromised"
  - "Schnorr single-sig can be more compact than ECDSA"
sources: []
relatedTerms:
  - interactive-multi-sig
  - m-n
  - musig
  - musig2
  - quorum-signatures
  - schnorr-signature
  - signature-aggregation
  - signature-clipping
liveWidget: ~
---

"Mono-signature" is an unusual phrasing for what most people call single-sig: one private key, one signature, controlling one output. It's the default Bitcoin spending pattern.

The vast majority of on-chain Bitcoin transactions today are single-sig. The rest use classical multisig or aggregated schemes for higher-security custody (vaults, exchange cold storage, treasuries) or for protocol reasons (Lightning channels are technically 2-of-2 multisig under the hood, but most other 2-of-2 outputs are now Taproot key-path spends that look like single-sig).

Schnorr (Taproot) single-sig signatures are 64 bytes; ECDSA single-sig signatures are 71-72 bytes after [low-R](/glossary/low-r-signatures) grinding. Both authorize spending with one private key, both look on-chain like one signature, both have the same single-point-of-failure security profile.

The tradeoff is the obvious one: one key, one point of failure. Lose access to the key (lost seed, dead drive, no backup) and the coins are gone. Compromise the key (malware, supply-chain attack on a wallet, careless seed handling) and the coins are stolen. Multisig and aggregated signatures spread that risk across multiple keys or devices, at the cost of operational complexity.

For most users, a single hardware wallet (single-sig) with a properly verified seed backup is dramatically more secure than the alternatives they'd actually execute correctly. Multisig is a real upgrade only if you're willing to use it competently.
