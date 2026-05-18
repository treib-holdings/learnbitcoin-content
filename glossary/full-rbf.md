---
title: "Full RBF"
slug: full-rbf
draft: false
shortDefinition: "A proposal to make all unconfirmed transactions replaceable by default, easing fee bumps in a congested mempool."
keyTakeaways:
  - "Makes fee updates simpler and more universal"
  - "Discourages reliance on zero-confirmation transactions"
  - "Hotly debated among merchants and node operators"
sources: []
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

Bitcoin Core enabled full RBF behavior optionally starting in v24 (late 2022) and made it the default in v26 (late 2023). By 2026, a substantial portion of the node network runs full RBF, meaning the practical guarantee that "an unsignaled transaction won't be replaced" no longer holds.

The argument **for** full RBF:

- It simplifies fee policy. Wallet implementations no longer need to track or care about the RBF-signaling bit.
- It reflects the underlying reality. Miners always *could* mine whichever conflicting transaction paid them more; opt-in RBF was a relay-layer politeness, not a consensus rule.
- It improves user experience for senders who need to bump fees.

The argument **against**:

- It further erodes [zero-confirmation](/glossary/double-spend) payments. Merchants relying on "I saw it in the mempool" for instant settlement have to either wait for one confirmation or accept the risk of a replacement attempt.
- It shifts the burden of "is this safe to act on?" onto merchants and exchanges, who must wait for confirmations.

The pragmatic landscape in 2026: zero-conf was always weakly secure; full RBF just made the weakness obvious. The practical answer for instant payments is [Lightning](/glossary/lightning-network), which is genuinely instant and final. For on-chain, wait one confirmation. The era of "I'll trust an unconfirmed transaction because most people don't RBF" is ending.

See [Replace-by-Fee (RBF)](/glossary/replace-fee-rbf) for the opt-in flavor full RBF extends.
