---
title: "Hierarchical Multisig"
slug: hierarchical-multisig
draft: false
shortDefinition: "A layered multi-signature approach where each 'key' in a multisig can itself be multi-party or structured."
keyTakeaways:
  - "Each 'key' slot in multisig can be an additional multisig itself"
  - "Improves security and governance for larger organizations"
  - "Requires careful planning to avoid excessive complexity"
sources: []
relatedTerms:
  - psbt
  - custodial-lightning-wallet
  - green-address
  - hd-wallet-hierarchical-deterministic-wallet
  - hdm-multi-signature-hd-wallet
  - hierarchical-deterministic-wallet
  - m-n
  - mono-signature
  - musig
  - musig2
  - quorum-signatures
  - wallet
liveWidget: ~
---

Hierarchical multisig is a layered structure where one or more "keys" in a multisig setup are themselves multisigs. Instead of a flat 2-of-3, you can build "2-of-3 where one of the three is itself a 3-of-5" - nesting authorization requirements to match organizational structure.

Why it exists: simple multisig works fine for personal or small-team custody. But for organizations - exchanges, custody services, treasury setups, family offices - the security and governance needs are more nuanced:

- **Approval hierarchies.** A spend might require sign-off from the treasurer (1 key), the CFO (1 key), and *either* the CEO or the board (a 1-of-2 nested under one slot).
- **Departmental separation.** Engineering, finance, and operations might each control one "key" that internally is a sub-multisig of their respective team members.
- **Defense in depth.** A hot wallet for daily operations might be 2-of-3, but withdrawals from cold storage might require 3-of-5 where one of those keys is itself a 4-of-7 time-locked geographic-distributed signature.

The construction can in principle use [Bitcoin Script](/glossary/bitcoin-script)'s native multisig opcodes or, more elegantly with [Taproot](/glossary/taproot), express complex policies via MAST. Modern hardware-wallet ecosystems (Sparrow, Specter, Nunchuk) increasingly support these arrangements via [PSBT](/glossary/psbt)-based workflows.

The tradeoff is operational complexity. Every additional layer adds a chance for someone to lose a key, forget a procedure, or get locked out. Hierarchical multisig is genuinely useful for organizations with real custody policies, and probably overkill for individuals. Most personal users are well-served by a flat 2-of-3 with hardware devices.
