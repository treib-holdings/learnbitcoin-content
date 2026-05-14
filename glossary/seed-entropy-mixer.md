---
title: "Seed Entropy Mixer"
slug: seed-entropy-mixer
draft: false
shortDefinition: "A collaborative process where multiple random seeds are combined into one final cryptographic seed."
keyTakeaways:
  - "Prevents a single point of failure in seed generation"
  - "Requires trust that at least one party's randomness is genuine"
  - "Used in high-security setups or multi-party ceremonies"
sources: []
relatedTerms:
  - deterministic-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - seed-phrase
  - seed-tool
  - security
liveWidget: ~
---

A seed entropy mixer combines randomness from multiple independent sources to produce a single wallet seed that no individual participant could have predicted. The math is straightforward: XOR (or hash) the contributions together; the result is unpredictable as long as at least one input was actually random.

Typical workflow:

1. Each participant generates their own entropy independently. Common methods: a hundred dice rolls, a hardware RNG output, the SHA-256 of some carefully-collected randomness.
2. Each participant commits to their value (a hash of it) before anyone reveals.
3. After all commits are received, participants reveal their entropy values.
4. The values get XORed (or hashed) together. The result is the final seed entropy.
5. The seed is converted to BIP 39 words.

The commit-then-reveal step is important. Without it, the last participant to share could see everyone else's contribution and adversarially pick their own to bias the result. Commit-then-reveal forces each participant to pick their entropy blind to everyone else's.

Where this is used:

- **High-stakes key generation ceremonies.** Hardware wallet manufacturer signing keys, federation key sets (Liquid functionaries, Fedimint guardians), institutional cold-storage roots.
- **Distributed key generation for threshold schemes.** FROST and similar protocols use cryptographically richer versions of this idea, where the "shared entropy" is built up in a way that produces individually-useful key shares rather than just a combined secret.
- **Paranoid personal setups.** A small minority of self-custody users generate their seeds this way as defense against a compromised hardware RNG.

The tradeoff is operational: every participant needs to be present (or trusted to commit and reveal correctly), all contributions need to happen on air-gapped equipment, and any one corrupted participant can DoS the ceremony (refuse to reveal, etc.). For most users, trusting a well-audited hardware wallet's RNG is dramatically more practical and only marginally less secure.
