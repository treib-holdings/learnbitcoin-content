---
title: "Full RBF"
slug: full-rbf
draft: false
updated: "2026-10-09"
shortDefinition: "A relay policy that treats all unconfirmed transactions as replaceable, easing fee bumps in a congested mempool."
keyTakeaways:
  - "Makes fee updates simpler and more universal"
  - "Discourages reliance on zero-confirmation transactions"
  - "Default in Bitcoin Core since 28.0 (October 2024)"
sources:
  - { label: "Bitcoin Core 24.0.1 release notes (December 2022) - mempoolfullrbf option added, off by default", url: "https://bitcoincore.org/en/releases/24.0.1/" }
  - { label: "Bitcoin Core 28.0 release notes (October 2024) - mempoolfullrbf default changed from 0 to 1", url: "https://bitcoincore.org/en/releases/28.0/" }
  - { label: "Bitcoin Core 29.0 release notes (April 2025) - mempoolfullrbf option removed, full RBF is standard", url: "https://bitcoincore.org/en/releases/29.0/" }
relatedTerms:
  - absolute-fee
  - accelerator
  - bip-125-replace-fee
  - fee-bumping
  - fee-estimation
  - fee-floor
  - fee-rate-escalation
  - fee-sniping
  - full-node
  - replace-fee-rbf
  - transaction
  - transaction-fee
liveWidget: ~
---

Full RBF means a [node](/glossary/node) accepts any fee-bump replacement of an unconfirmed [transaction](/glossary/transaction) - regardless of whether the original signaled [BIP-125 opt-in RBF](/glossary/replace-fee-rbf). In other words, *all* unconfirmed transactions are treated as replaceable.

Bitcoin Core added full RBF as an option in v24 (late 2022), made it the default in v28.0 (October 2024) and removed the option in v29.0 (April 2025). Every Bitcoin Core node from 29.0 on runs full RBF, so the practical guarantee that "an unsignaled transaction won't be replaced" no longer holds.

The argument **for** full RBF:

- It simplifies fee policy. Wallet implementations no longer need to track or care about the RBF-signaling bit.
- It reflects the underlying reality. Miners always *could* mine whichever conflicting transaction paid them more; opt-in RBF was a relay-layer politeness, not a consensus rule.
- It improves user experience for senders who need to bump fees.

The argument **against**:

- It further erodes [zero-confirmation](/glossary/double-spend) payments. Merchants relying on "I saw it in the mempool" for instant settlement have to either wait for one confirmation or accept the risk of a replacement attempt.
- It shifts the burden of "is this safe to act on?" onto merchants and exchanges, who must wait for confirmations.

Zero-conf was always weakly secure, and full RBF made the weakness obvious. The practical answer for instant payments is [Lightning](/glossary/lightning-network), which is genuinely instant and final. For on-chain, wait one confirmation. Trusting an unconfirmed transaction because most people don't bother to replace one stopped making sense once Bitcoin Core nodes began relaying replacements by default.

See [Replace-by-Fee (RBF)](/glossary/replace-fee-rbf) for the opt-in flavor full RBF extends.
