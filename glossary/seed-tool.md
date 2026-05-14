---
title: "Seed Tool"
slug: seed-tool
draft: false
shortDefinition: "An offline script or application that generates, verifies, or converts BIP 39 mnemonic seeds in a secure environment."
keyTakeaways:
  - "Enables manual or offline generation and verification of seed phrases"
  - "Minimizes risk of online tampering or seed compromise"
  - "Useful for advanced or paranoid setups requiring total transparency"
sources: []
relatedTerms:
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - seed-entropy-mixer
  - seed-phrase
  - security
liveWidget: ~
---

A seed tool is offline software for generating, verifying, or converting BIP 39 mnemonic seeds without trusting a hardware wallet or online generator for the randomness. Common operations:

- **Generate a seed from physical entropy.** Roll 99 dice (giving 128+ bits of true randomness) and feed the rolls into the tool; out comes the matching 12 or 24-word phrase. No software RNG involved at any point.
- **Convert between formats.** BIP 39 words to raw entropy and back. Useful for verifying that two backups (printed words and stamped metal) encode the same seed.
- **Verify a checksum.** Confirm a written-down 24-word phrase is internally consistent before relying on it.
- **Test an optional passphrase.** Compute the derived seed for a given (mnemonic + passphrase) pair and verify it produces the expected addresses.

Real implementations:

- **SeedSigner.** Stateless air-gapped device that takes dice rolls, produces a seed, and signs PSBTs without ever persisting the seed.
- **Coldcard's BIP 39 entropy tool.** Built into the device firmware; supports dice, cards, and other entropy sources.
- **Ian Coleman's open-source BIP 39 tool.** Runs in a browser, but designed to be downloaded and used offline. Used to verify seeds, derive addresses, and sanity-check wallet behavior.
- **Various Python / Rust CLI tools.** For developers who want to verify what their wallet is doing or build custom backup workflows.

The discipline that makes a seed tool useful: run it on an air-gapped machine (or a dedicated trusted device), use the verified open-source version, and confirm the output matches what your wallet sees before trusting any meaningful amount to the resulting seed.
