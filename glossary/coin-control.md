---
title: "Coin Control"
slug: coin-control
draft: false
shortDefinition: "A wallet feature allowing users to manually select which UTXOs to spend, aiding privacy and fee optimization."
keyTakeaways:
  - "Allows precise selection of specific UTXOs for transactions"
  - "Improves privacy by limiting unnecessary input merging"
  - "Can optimize fees and avoid dust buildup"
sources: []
relatedTerms:
  - address-clustering
  - bitcoin-days-destroyed
  - bitcoin-vault
  - clawback-mechanism
  - coin-age
  - coin-freeze
  - coin-plasma
  - coinjoin
  - deterministic-wallet
  - difficulty
  - security
  - utxo-unspent-transaction-output
  - vanity-address
  - wallet
liveWidget: ~
---

Coin control is like picking exactly which bills you pay with instead of letting the cashier decide. By selecting specific unspent transaction outputs (UTXOs) in your wallet, you can avoid merging multiple addresses, thus preserving privacy. It also lets you pick older, smaller UTXOs to reduce dust or pick fewer large UTXOs to minimize transaction fees.
Many advanced wallets offer coin control to power users, while simpler wallets often handle it automatically. If you care about privacy, you might choose to spend only certain addresses, preventing address clustering. If fees are high, you might consolidate UTXOs during a low-fee period. Ultimately, coin control grants finer-grained control over how your on-chain history and fees evolve.
