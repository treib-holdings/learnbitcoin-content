---
title: "Seed Entropy Mixer"
slug: seed-entropy-mixer
draft: false
updated: "2026-10-10"
shortDefinition: "A collaborative process where multiple random seeds are combined into one final cryptographic seed."
keyTakeaways:
  - "Prevents a single point of failure in seed generation"
  - "Requires trust that at least one party's randomness is genuine"
  - "Used in hardware wallet setup and multi-party key generation"
sources:
  - { label: "Trezor firmware - reset_device (permalink, October 2026): the device draws its own internal entropy, asks the host for external entropy, and hashes the two together with SHA-256 to make the seed; with entropy check on, it first sends an HMAC-SHA256 commitment to its internal entropy", url: "https://github.com/trezor/trezor-firmware/blob/c1dacf2f4fad4e9580411cc7d3ea2097503f7d98/core/src/apps/management/reset_device/__init__.py" }
  - { label: "Trezor - Entropy check: how Trezor Suite verifies wallet generation (the device commits to its contribution before Suite sends its entropy, which stops it from changing its value afterwards; for discarded candidate wallets the device reveals its contribution so Suite can rebuild and compare them; the device entropy of the wallet that is kept is not revealed during the check)", url: "https://trezor.io/learn/security-privacy/how-trezor-keeps-you-safe/entropy-check-how-trezor-suite-verifies-wallet-generation" }
  - { label: "Trezor Knowledge Base - What is entropy and how does Trezor generate your wallet? (combines randomness from the device's hardware and from the computer or phone, so an attacker would need to compromise all sources at the same time; physical dice as a source of randomness)", url: "https://trezor.io/guides/trezor-devices/trezor-fundamentals/what-is-entropy-and-how-does-trezor-generate-your-wallet" }
  - { label: "BIP 39 - generating the mnemonic: entropy plus a checksum is mapped to words", url: "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" }
  - { label: "Ruffing, Nick et al. - ChillDKG: Distributed Key Generation for FROST (draft BIP, Draft as of October 2026): each participant shares its own random secret and ends up with only its own secret share; a single participant can make a session fail through malice, a software bug or a bad connection; key generation ceremony for a threshold cold wallet; federations typically set up keys in a one-time ceremony", url: "https://github.com/BlockstreamResearch/bip-frost-dkg" }
relatedTerms:
  - deterministic-wallet
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - seed-phrase
  - seed-tool
  - security
liveWidget: ~
---

A seed entropy mixer combines randomness from several independent sources into a single wallet seed that no one source could have predicted. A simple way to do that is to hash the inputs together. The result stays unpredictable as long as at least one input was truly random, so an attacker would have to compromise every source to guess the seed.

Typical workflow:

1. Each participant generates their own randomness independently, for example by rolling physical dice or reading a hardware random number generator.
2. Each participant commits to their value, by sharing a hash of it, before anyone reveals.
3. Once all the commitments are in, participants reveal their values, and everyone checks them against the commitments.
4. The values are hashed together. The result is the final seed entropy.
5. The entropy is turned into [BIP 39](/glossary/bip-39) recovery words.

The commit-then-reveal step matters. Without it, whoever goes last could wait to see everyone else's values and then pick their own to tilt the result. A commitment locks each value in before anyone sees the others.

Anyone who sees all the revealed values can work out the seed, so the mix protects against a bad source of randomness, but it doesn't keep the seed secret from the people taking part.

Where this is used:

- **Hardware wallet setup.** When a Trezor creates a wallet, it hashes randomness from its own hardware together with randomness from the connected computer or phone. With the entropy check in Trezor Suite, the device commits to its share before Suite sends its own, so it can't change that value after seeing Suite's. For test wallets that are then thrown away, the device reveals its share so Suite can rebuild them and compare. Its share for the wallet that is kept is not revealed.
- **Distributed key generation.** FROST threshold setups use a richer version of the idea. In ChillDKG, a draft Bitcoin spec, each participant contributes its own random secret and the group key is built from all of them, but each participant ends up holding only its own share of the key, never the whole thing. The draft describes this as a key generation ceremony, for example for a threshold cold wallet, and notes that federations typically set up their keys in a one-time ceremony.

The cost is coordination. Everyone has to take part, and a single participant can make the whole session fail, whether on purpose, through a software bug or over a bad connection, as the ChillDKG authors point out. In a commit-then-reveal mix, anyone who refuses to reveal stalls it the same way.
