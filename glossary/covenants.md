---
title: "Covenants"
slug: covenants
draft: false
shortDefinition: "Scripts that impose conditions on how outputs are spent in the future, as proposed by BIP 119's CTV or other covenant designs."
keyTakeaways:
  - "Adds spending constraints beyond typical ownership rules"
  - "Could enable vaults, advanced channel operations, or batch spending"
  - "Debated in the community due to potential implications for coin fungibility"
sources: []
relatedTerms:
  - bip-119-ctv
  - bitcoin-script
  - checklocktimeverify-cltv
  - checksequenceverify-csv
  - checktemplateverify-ctv
  - clawback-mechanism
  - coin-freeze
  - colored-coins
  - counterparty-risk
  - op-code-operation-code
  - script
  - scriptless-scripts
liveWidget: ~
---

A covenant is a [Bitcoin Script](/glossary/bitcoin-script) construct that restricts not just *who* can spend a UTXO, but *how it must be spent*. The locking script doesn't just check signatures; it imposes constraints on what the spending transaction can look like - which addresses receive, in what amounts, with what timing, etc.

Bitcoin doesn't currently support covenants. They've been proposed in various forms since at least 2013, and the post-Taproot era (2022-2026) has seen the most serious discussion of activating one.

What covenants would enable:

- **Vault constructions.** Cold storage where withdrawal must go through a specific multi-step path with a cancellation window. Even if your signing key gets stolen, the attacker is forced into a slow, observable path you can interrupt.
- **Channel factories.** A single on-chain transaction that pre-commits to opening many [Lightning channels](/glossary/lightning-channel) later, deferring the bulk of fee cost.
- **Cross-input signature aggregation patterns.**
- **Trust-minimized custody products** with enforced policy.
- **Improved layer-2 protocols** (some of the harder Lightning UX problems get easier with covenants).

The debate has two sides:

**For:** Covenants unlock useful real-world constructions that are awkward or impossible today. The simplest proposals are well-scoped and don't break anything.

**Against:** Adding covenant capability is a major expansion of Script's expressiveness. Once a covenant opcode is activated, it's effectively permanent. There are concerns about subtle interactions with future protocol changes, and about the policy precedent - if covenants can enforce "this UTXO can only be spent to whitelisted addresses," that capability is dual-use (legitimate vaults vs forced KYC compliance schemes).

Current candidate proposals: [BIP-119 (CTV)](/glossary/bip-119-ctv), OP_VAULT, OP_CAT re-enablement, ANYPREVOUT, and others. No single proposal has yet built broad enough consensus to activate. The discussion continues.

The covenants debate is one of the more substantive open questions in Bitcoin protocol development as of 2026. Worth understanding even if you don't have a strong view on it yet.
