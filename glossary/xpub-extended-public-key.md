---
title: "Xpub (Extended Public Key)"
slug: xpub-extended-public-key
draft: false
shortDefinition: "A BIP 32 feature allowing derivation of child public keys without exposing the master private key."
keyTakeaways:
  - "Enables derivation of multiple child addresses from a single root"
  - "Retains spending security if the master private key is safely hidden"
  - "Used for watch-only wallets, accounting, and multi-sig coordination"
sources: []
relatedTerms:
  - bip-44
  - bip-85
  - chaincode
  - deterministic-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - public-key
liveWidget: ~
---

Hierarchical Deterministic (HD) wallets generate a master private key (seed) and master public key (xpub). The xpub can be shared safely to create receive addresses, watch-only wallets, or partial multi-sig setups. It doesn't let anyone spend funds, as private keys remain offline. This suits scenarios like a website showing fresh deposit addresses or a co-signer verifying transactions. However, if the xpub leaks, it can compromise privacy by revealing all child addresses. Some wallets also use ypub/zpub versions for specific script types like P2WPKH or P2WSH.
