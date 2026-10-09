---
title: "Security"
slug: security
draft: false
updated: "2026-10-09"
shortDefinition: "Refers both to Bitcoin's protocol robustness (PoW, node consensus) and end-user key protection (wallet safety)."
keyTakeaways:
  - "Protocol security hinges on PoW, difficulty retarget, and full node validation"
  - "User-level security focuses on private key custody and safe wallets"
  - "Combining both fosters a resilient, trust-minimized currency system"
sources:
  - { label: "BIP-50 - March 2013 Chain Fork Post-Mortem (older nodes rejected a valid block; at least one large double spend)", url: "https://github.com/bitcoin/bips/blob/master/bip-0050.mediawiki" }
relatedTerms:
  - address-reuse
  - air-gapped
  - bitcoin-inheritance-planning
  - bitcoin-vault
  - counterparty-risk
  - cpu-mining
  - eavesdropping-attack
  - eclipse-attack
  - fungibility
  - green-address
  - hardware-seed-vault
  - hardware-security-module-hsm
  - hardware-wallet
  - inheritance-seed-backup
  - key-rotation
  - key-split
  - key-wiping
  - kyc-know-your-customer
  - merchant-adoption
  - oracle-based-betting
  - proof-keys
  - seed-entropy-mixer
  - seed-phrase
  - seed-tool
  - stealth-address
  - submarine-swap
  - wallet
  - watch-only-wallet
liveWidget: ~
---

"Security" in Bitcoin has two distinct meanings that often get conflated:

**Protocol security.** The Bitcoin network's resistance to attack. This rests on [proof-of-work](/glossary/proof-work-pow), a globally distributed mining industry, every full node independently enforcing consensus rules, and a track record going back to January 2009. The network has never had a successful 51% attack on its mainnet or been shut down. The best-known double spend of a confirmed payment was made possible by a software bug, during the [March 2013 chain split](/rabbit-hole/2013-chain-fork). The cryptographic primitives (SHA-256, secp256k1) remain unbroken. The protocol has been a constant target, and it has held.

**Operational security ("opsec").** *Your* personal security as a Bitcoin user. This is where the failures actually happen:

- **[Seed phrase](/glossary/seed-phrase) leaks.** Photographed, written next to a computer that got hacked, stored in a cloud drive, shared with someone trusted who became untrusted.
- **Weak entropy.** A key generated with predictable randomness. Has happened many times; people have lost millions to it.
- **Phishing and social engineering.** Fake support staff, fake wallet apps, fake "wallet upgrade required" emails. The dominant way ordinary users lose Bitcoin.
- **[Custodial](/glossary/custodial-wallet) failure.** Exchange insolvency, hacks, freezes. Real losses, real customers, real bankruptcies.
- **Compromised hardware.** Supply-chain attacks on hardware wallets, malicious firmware updates, side-channel attacks.
- **Inheritance gaps.** Dying without a usable [inheritance plan](/glossary/inheritance-seed-backup) is a permanent loss event.

Protocol security is what *Bitcoin* gives you. Operational security is what *you* have to give yourself. The defenses (hardware wallets, multisig, [air-gapped](/glossary/air-gapped) setups, careful seed management, avoiding custodial honeypots, KYC-minimization) are well-known. The discipline of applying them isn't automatic.

A reasonable framing: Bitcoin's protocol layer is secure to a degree that's unusual in computing. Your wallet is secure to whatever degree *you* make it. Don't confuse the two.
