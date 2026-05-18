---
title: "Fee Bumping"
slug: fee-bumping
draft: false
shortDefinition: "Increasing a transaction's priority after it's broadcast, typically via Replace-by-Fee (RBF) or Child-Pays-for-Parent (CPFP)."
keyTakeaways:
  - "Prevents transactions from lingering in mempool at low fees"
  - "RBF replaces the original transaction; CPFP uses a child transaction"
  - "Widely supported feature in modern Bitcoin wallets"
sources: []
relatedTerms:
  - absolute-fee
  - accelerator
  - bip-125-replace-fee
  - estimated-confirmation-blocks
  - fee-estimation
  - fee-floor
  - fee-rate-escalation
  - fee-sniping
  - replace-fee-rbf
  - transaction
  - transaction-fee
liveWidget: ~
---

Fee bumping is what you do when your [transaction](/glossary/transaction) is stuck. The [mempool](/glossary/mempool) has more transactions than will fit in the next several blocks, miners are picking the higher-fee ones first, and yours is sitting too far down the priority list. Two mechanisms let you raise the effective fee after broadcast:

**Replace-by-Fee (RBF).** Rebroadcast the same transaction with a higher fee, replacing the original in mempools. Defined in [BIP 125](/glossary/bip-125-replace-fee), now opt-in by default in most wallets. Requires the original transaction to signal RBF (or, with **full-RBF**, doesn't require it - nodes running full-RBF will accept the replacement regardless).

**Child-Pays-for-Parent (CPFP).** Don't touch the stuck transaction. Instead, spend one of its unconfirmed outputs in a new "child" transaction with a fee large enough to cover both itself and the parent's shortfall. Miners are economically incentivized to include both - the child only confirms if the parent does. Useful when you can't RBF (the original didn't signal, or you don't control all the inputs) but you do control an output.

Most modern wallets handle this for you with a "bump fee" button. The actual decision tree:

- **You're the sender, RBF was signaled** → RBF (cleaner, replaces in place).
- **You're the receiver of a stuck incoming transaction** → CPFP, spending the unconfirmed output to yourself.
- **Sender, RBF wasn't signaled** → CPFP if you have a spendable output, otherwise wait.

See [Fee Estimation](/glossary/fee-estimation) to avoid needing this in the first place.
