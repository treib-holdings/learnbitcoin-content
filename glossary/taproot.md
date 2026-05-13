---
title: "Taproot"
slug: taproot
draft: false
shortDefinition: "A 2021 soft fork (BIP 341/342) enabling more private, efficient Bitcoin scripts that look like single-sig spends."
keyTakeaways:
  - "Enhances privacy by hiding script complexity behind a single output"
  - "Introduces Schnorr-based multi-sig (MuSig) with smaller signatures"
  - "Soft fork upgrade that further evolves Bitcoin's scripting and contract potential"
sources: []
relatedTerms:
  - bip-341-taproot
  - bip-342-tapscript
  - merkleized-abstract-syntax-tree-mast
  - schnorr-signature
  - signature-aggregation
  - signature-clipping
liveWidget: ~
---

Taproot combines Schnorr signatures and MAST (Merkleized Abstract Syntax Trees) so that complex contracts reveal only the executed branch or appear as a single-sig if all parties agree. This reduces on-chain data, saving fees and hiding unused conditions. It also allows aggregated signatures (MuSig), making multi-party transactions indistinguishable from standard ones. Activated in November 2021, Taproot cements Bitcoin's incremental shift toward flexible, privacy-oriented scripts, all while remaining backward-compatible with older outputs.
