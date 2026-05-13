---
title: "Key Aggregation"
slug: key-aggregation
draft: false
shortDefinition: "Combining multiple public keys into one aggregated key (e.g., MuSig/Schnorr) to reduce on-chain data and increase privacy."
keyTakeaways:
  - "Consolidates multiple pubkeys into a single on-chain entity"
  - "Saves block space, lowering transaction fees"
  - "Obscures multisig usage, enhancing privacy"
sources: []
relatedTerms: []
liveWidget: ~
---

Key aggregation leverages cryptographic algorithms (like MuSig in Schnorr signatures) to merge multiple public keys into a single ‘aggregated’ key. On the blockchain, it appears as one public key controlling the funds, even if several parties contributed keys. When they collectively sign, the resulting signature looks indistinguishable from a single-sig. This technique shrinks transaction size (saving fees) and hides the multisig structure, bolstering privacy. While still evolving, key aggregation could streamline cooperative spending, multi-party channels, and advanced contract setups in a more compact on-chain footprint.
