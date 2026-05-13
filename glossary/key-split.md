---
title: "Key Split"
slug: key-split
draft: false
shortDefinition: "Partitioning a private key into multiple fragments (e.g., via Shamir’s Secret Sharing), so no single share can spend funds alone."
keyTakeaways:
  - "Enhances security by dividing the private key among multiple holders"
  - "No single party alone can recreate or use the key"
  - "Widely employed for off-chain backups or seed phrase resilience"
sources: []
relatedTerms:
  - bitcoin-inheritance-planning
  - dukpt-derived-unique-key-transaction
  - genesis-keys
  - hardware-security-module-hsm
  - key-generation-ceremony
  - key-rotation
  - key-wiping
  - paper-wallet
  - security
liveWidget: ~
---

Key splitting protects against a single point of failure: if an attacker (or an internal threat) obtains just one fragment, they still can’t move your Bitcoin. Shamir’s Secret Sharing is one well-known method—n-of-m shares can reconstruct the private key, but fewer than n is useless. Enterprises, families, or collaborative custody services leverage key splits to distribute control across different people or secure locations. It’s not exactly the same as a multisig on-chain, but it can serve a similar function off-chain, requiring partial collaboration to rebuild the key for signing.
