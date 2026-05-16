---
title: "Replace-by-Fee (RBF)"
slug: replace-fee-rbf
draft: false
shortDefinition: "A mechanism allowing a sender to rebroadcast an unconfirmed TX with higher fees, replacing the original transaction in the mempool."
keyTakeaways:
  - "Allows fee bumping on unconfirmed transactions"
  - "Enhances user control in congested mempool conditions"
  - "Reduces reliability of zero-conf payments"
sources: []
relatedTerms:
  - absolute-fee
  - accelerator
  - bip-125-replace-fee
  - delayed-justice-transaction
  - fee-bumping
  - fee-estimation
  - fee-floor
  - fee-rate-escalation
  - fee-sniping
  - full-rbf
  - transaction
  - transaction-fee
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki"
  - "https://bitcoinops.org/en/topics/replace-by-fee/"
liveWidget: ~
---

Replace-by-Fee (RBF) is a [mempool](/glossary/mempool) policy that lets a sender rebroadcast a stuck [transaction](/glossary/transaction) with a higher [fee](/glossary/fee-estimation), replacing the original.

Defined in [BIP-125](/glossary/bip-125-replace-fee), opt-in RBF works like this: the original transaction signals it's replaceable by setting an `nSequence` value below the maximum. If congestion makes your transaction stall, you can construct a new transaction that:

- Spends at least one of the same UTXOs.
- Pays a higher absolute fee than the original.
- Pays a higher fee *rate* than the original.

Nodes that follow BIP-125 will drop the old transaction from their mempool and accept the new one. Miners, looking for the highest fee rate, are more likely to pick yours up.

What RBF buys you:

- **Recovery from fee underestimation.** You miscalculated fees during a quiet period and got caught when congestion hit; bump and proceed.
- **Faster confirmation when urgency changes.** You needed it confirmed cheaply, then suddenly you need it confirmed now.

What it costs:

- **Zero-confirmation reliability.** A recipient looking at "unconfirmed in the mempool" can no longer assume the transaction won't be replaced. RBF-signaled transactions explicitly admit this. (Non-RBF transactions historically had stronger zero-conf guarantees, but see [Full RBF](/glossary/full-rbf) for why those are eroding.)

Most modern wallets default to RBF-enabled transactions. Some merchants who accept zero-conf payments require non-RBF transactions or just wait for the first confirmation. See [Fee Bumping](/glossary/fee-bumping) for the broader concept (RBF is one method; CPFP is the other).
