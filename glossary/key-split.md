---
title: "Key Split"
slug: key-split
draft: false
shortDefinition: "Partitioning a private key into multiple fragments (e.g., via Shamir's Secret Sharing), so no single share can spend funds alone."
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

Key splitting partitions a private key (or a seed) into multiple shares such that any threshold number can reconstruct the secret but fewer cannot. The canonical math is Shamir's Secret Sharing (SSS).

In Bitcoin practice, the most common form is SLIP-39, a standardized SSS scheme for BIP 39 seeds. Trezor supports it natively, and tools like SeedSigner can produce SLIP-39 shares from any seed. Typical configurations: 2-of-3 or 3-of-5 shares spread across geographic locations or trusted parties.

The crucial caveat that most introductions skip: key splitting is not the same security model as multisig.

- Multisig: each cosigner signs independently with their own key, and the M signatures get combined by the script. No single device ever holds the spending capacity.
- Key splitting: at signing time, the threshold of shares must be combined back into a single private key on one device, which then signs. That device momentarily holds the full key.

So key splitting is excellent for cold backup distribution (no one location is sufficient to steal the wallet) but worse than multisig for hot/warm operational use (the reconstruction event is a juicy target). Most security-serious setups use multisig for the operational layer and may use SSS to distribute backup of any single key.
