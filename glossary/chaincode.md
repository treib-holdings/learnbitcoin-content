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

The chaincode is the 32-byte "right half" of a BIP 32 extended key. It pairs with the actual key material (the "left half") to form an extended private key (`xprv`) or extended public key (`xpub`).

Why split it. BIP 32 derives child keys via HMAC-SHA512 over the parent key, the chaincode, and the child index. The chaincode contributes entropy to the derivation so that knowing the parent public key alone is not enough to derive children; you also need the chaincode. That's what makes `xpub` a real artifact: it carries the chaincode along with the public key, allowing watch-only descendants to be derived without giving up the private side.

The privacy implications are sharp:

- A chaincode plus a public key (the `xpub`) lets anyone derive all non-hardened child public keys. Useful for watch-only wallets. Dangerous if the `xpub` leaks: a leaked `xpub` exposes the full address tree of that wallet, breaking transactional privacy completely. Treat `xpub` like a balance sheet, not like an address.
- A chaincode plus a child private key, in a non-hardened derivation, lets you reconstruct the parent private key. This is the "BIP 32 non-hardened leak" that motivates hardened derivation (indexes 2^31 and above) for top-level accounts. Bitcoin Core, hardware wallets, and any sensible HD wallet use hardened derivation for the account level so that leaking one child private key doesn't compromise siblings or ancestors.

For users, the chaincode is invisible plumbing. For developers and integrators, it's the load-bearing detail that separates "HD wallet" from "deterministic but fragile key generation."
