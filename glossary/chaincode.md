---
title: "Chaincode"
slug: chaincode
draft: false
shortDefinition: "In HD wallets (BIP 32), a 256-bit value paired with a parent key to derive child keys deterministically."
keyTakeaways:
  - "Paired with a key to deterministically create child keys"
  - "Central to hierarchical deterministic wallet design (BIP 32)"
  - "Protects the master seed while enabling multiple derivation paths"
sources: []
relatedTerms:
  - address-derivation-path
  - bip-44
  - deterministic-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - key-generation-ceremony
  - key-rotation
  - seed-phrase
  - xpub-extended-public-key
liveWidget: ~
---

Chaincode is essentially the ‘secret sauce’ used alongside a parent private/public key to generate a hierarchy of child keys in the BIP 32 scheme. When you derive a child key, you combine the parent key with the chaincode via HMAC-SHA512, producing the child’s private (or public) key and new chaincode.
This mechanism ensures that a single seed can produce countless keys without revealing the master private key. By splitting the derivation data into a key and chaincode, HD wallets can securely manage advanced setups like separate accounts or layered passphrases. Chaincode never changes arbitrarily; it remains consistent once it’s generated at each step in the derivation path.
