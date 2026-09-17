---
title: "NUMS Point"
slug: nums-point
draft: false
published: "2026-09-17"
shortDefinition: "A 'nothing up my sleeve' curve point whose private key provably nobody knows, used as the internal key of a Taproot output that must only be spendable through its scripts. The output still looks like any other; its key door is welded shut."
keyTakeaways:
  - "BIP-341 provides one: the point whose X coordinate is the SHA256 hash of the base point's uncompressed encoding, chosen so that no one could have picked it with a known private key"
  - "Using it as the internal key removes the key path; the BIP suggests adding a fresh random multiple of G to it so that different wallets' script-only outputs are not linkable by sharing the same internal key"
  - "The same point originated years earlier in Gregory Maxwell's confidential-transactions code, where an alternative generator with unknown discrete log was needed"
sources:
  - { label: "BIP-341 - Taproot: SegWit version 1 spending rules (constructing and spending Taproot outputs)", url: "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki" }
  - { label: "BIP-360 - Pay-to-Merkle-Root (P2MR), the proposed key-path-free output type", url: "https://github.com/bitcoin/bips/blob/master/bip-0360.mediawiki" }
relatedTerms:
  - taproot
  - taproot-tweak
  - script-path-spend
  - key-path-spend
  - x-only-public-key
  - bip-360
  - hash
liveWidget: ~
---

Every [Taproot](/glossary/taproot) output has an internal key, and normally that is the point: the people behind the key can spend cooperatively through the [key path](/glossary/key-path-spend) without ever revealing their scripts. Some outputs should not have that option. A coin that must be locked by a timelock, a covenant-style construction, or an inscription's reveal leaf needs the scripts to be the only way in. Taproot has no flag for "no key path," so the solution is an internal key that nobody can sign for.

That is what a NUMS point is. The name stands for "nothing up my sleeve," borrowed from cryptography's habit of deriving constants from something public and unremarkable so that no one could have chosen them with a hidden property. A point whose X coordinate is the output of a hash function has an unknown discrete logarithm, meaning no one knows a private key for it, and finding one would be the same problem as breaking secp256k1 outright.

[BIP-341](/glossary/bip-341) supplies a specific one. It is the point whose X coordinate is the SHA256 hash of the base point G in its uncompressed encoding, and the BIP gives the 32-byte value in full. The construction is older than Taproot: the same point served as the alternative generator in Gregory Maxwell's confidential-transactions code, where a second base point with unknown discrete log was needed for the same reason.

Using the raw NUMS point has one drawback, which the BIP also addresses. If every script-only wallet used the identical internal key, a [script-path spend](/glossary/script-path-spend), which reveals the internal key in its [control block](/glossary/control-block), would announce "this is a script-only output" to anyone watching. The BIP's suggestion is to add a fresh random multiple of G to the NUMS point, giving each output its own internal key that is still unspendable, since the random value is known to the wallet and the NUMS discrete log is not.

The idea has an afterlife. [BIP-360](/glossary/bip-360), the proposed post-quantum output type, is in effect a Taproot output with the key path removed by design rather than by NUMS convention, so that no elliptic-curve key is exposed on the chain at all.

See [How Taproot Actually Works](/rabbit-hole/how-taproot-works) for where the internal key sits in the construction.
