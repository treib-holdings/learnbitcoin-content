---
title: "BIP 125 (Replace-by-Fee)"
slug: bip-125-replace-fee
draft: false
shortDefinition: "Allows a sender to replace an unconfirmed transaction with a higher-fee version, accelerating confirmation."
keyTakeaways:
  - "Enables fee bumping on unconfirmed transactions"
  - "Improves confirmation times under heavy network load"
  - "Affects zero-conf assumptions for real-time payments"
sources: []
relatedTerms:
  - absolute-fee
  - accelerator
  - bip-bitcoin-improvement-proposal
  - bip-9-versionbits
  - fee-bumping
  - fee-estimation
  - fee-floor
  - fee-rate-escalation
  - fee-sniping
  - replace-fee-rbf
  - transaction
  - transaction-fee
liveWidget: ~
---

BIP 125, found in [BIP-125](https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki), formalizes Replace-by-Fee (RBF). It lets a user bump the fee on an unconfirmed transaction by broadcasting a new transaction (with the same inputs) that pays a higher fee. This capability is like telling your taxi driver, “Here’s an extra tip-could we move a bit faster?”
While it can help in times of network congestion, RBF has also sparked debate about zero-confirmation payments. Merchants relying on unconfirmed transactions might find them less secure if those transactions can be replaced. Nevertheless, RBF offers a flexible way to ensure timely confirmations when mempool fees are volatile.
