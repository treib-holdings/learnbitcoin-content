---
title: "Escrowed Lightning Channel"
slug: escrowed-lightning-channel
draft: false
shortDefinition: "A Lightning channel where a third party or a multi-sig arrangement adds extra security or conditional controls."
keyTakeaways:
  - "Adds a neutral or conditional party to LN channels"
  - "Strengthens security/dispute resolution for channel payments"
  - "Introduces complexity beyond standard LN two-party setups"
sources: []
relatedTerms:
  - core-lightning-c-lightning
  - counterparty-risk
  - custodial-lightning-wallet
  - escrow
  - htlc-hashed-time-locked-contract
  - lightning-channel
  - lightning-channel-splicing
  - lightning-network
  - lightning-node
  - payment-channel
liveWidget: ~
---

An escrowed [Lightning channel](/glossary/lightning-channel) is a non-standard channel design that adds a third party (or additional script conditions) to mediate channel operations. Instead of the standard 2-of-2 multisig between the two channel parties, an escrowed setup might use a 2-of-3 multisig with an escrow agent as the third signer.

The pattern is rare in practice but appears in specific business contexts:

- **B2B settlement channels** where a neutral party can resolve disputes without taking custody of funds.
- **Insurance or guarantee arrangements** where an escrow holder can release funds under specific conditions.
- **Lightning Service Provider (LSP) integrations** where the LSP holds some authority over routing or liquidity decisions, in exchange for managing the channel operationally.

The trade-offs:

- **Added flexibility.** Disputes can be resolved without going to court or relying purely on the [penalty transaction](/glossary/penalty-transaction) mechanism.
- **Loss of pure two-party trustlessness.** The third party can theoretically collude with one side. The escrow assumption matters.
- **Operational complexity.** More moving parts, more keys to manage, more failure modes.

For most Lightning users, standard two-party channels work fine and the escrowed variant adds unnecessary complexity. The pattern lives in specialized financial relationships - a niche, but a real one.

See [Lightning Channel](/glossary/lightning-channel) for the standard design and [Escrow](/glossary/escrow) for the on-chain escrow concept this borrows from.
