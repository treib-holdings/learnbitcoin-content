---
title: "BIP 119 (CTV)"
slug: bip-119-ctv
draft: false
shortDefinition: "Proposes a new opcode CHECKTEMPLATEVERIFY for covenant-like controls on how funds can be spent in the future."
keyTakeaways:
  - "Adds templated spending conditions (covenants)"
  - "Could improve channel factories, vault designs"
  - "Debated for possible impact on fungibility and policy"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-9-versionbits
  - bitcoin-script
  - checklocktimeverify-cltv
  - checksequenceverify-csv
  - checktemplateverify-ctv
  - covenants
  - deployment-threshold-soft-fork
  - locked-period-soft-fork
  - soft-fork
liveWidget: ~
---

[BIP-119](https://github.com/bitcoin/bips/blob/master/bip-0119.mediawiki) is a draft Bitcoin Improvement Proposal by Jeremy Rubin that proposes adding the [`OP_CHECKTEMPLATEVERIFY`](/glossary/checktemplateverify-ctv) (CTV) opcode. It's the most-discussed "covenant" proposal of the post-Taproot era, and as of 2026 it remains a draft - not activated, not rejected, ongoing.

What the proposal does at a technical level: CTV would let a [Bitcoin Script](/glossary/bitcoin-script) commit to the *shape* of any transaction that's allowed to spend an output - the number of inputs and outputs, their amounts, the script types involved, etc. This is a [covenant](/glossary/covenants): a restriction on how the coins can move in the future, not just who can move them.

Use cases the proposal targets:

- **Vaults.** A withdrawal from cold storage that's forced to go through a pre-committed two-step process, with a delay where the user can cancel if it wasn't them.
- **Channel factories.** Open a single on-chain transaction that commits to opening many Lightning channels later, deferring most of the fee cost.
- **Discrete log contracts and similar advanced primitives.**
- **Batch payments to many recipients with one on-chain transaction.**

Where the debate sits:

- **Pro:** CTV is the smallest, simplest covenant primitive proposed. It would unlock useful structures while leaving the door open to more advanced covenant ideas later.
- **Con:** Adding *any* covenant opcode is irreversible. Some Bitcoin developers worry about subtle interactions with future protocol changes, or about the precedent of opening the covenant door at all. Other covenant proposals (like OP_VAULT, OP_CTV+CSFS, and various Taproot-based alternatives) have different tradeoffs.

BIP-119 has been technically ready for years. Whether it activates depends on community consensus that hasn't yet formed. See [Covenants](/glossary/covenants) for the broader concept and [CTV](/glossary/checktemplateverify-ctv) for the opcode-level mechanic.
