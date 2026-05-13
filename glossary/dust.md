---
title: "Dust"
slug: dust
draft: false
shortDefinition: "A very small BTC amount in a UTXO, often below the fee required to spend it economically."
keyTakeaways:
  - "Small outputs that cost more in fees to spend than their value"
  - "Consolidation can clean up dust if network fees are low"
  - "Potential vector for privacy attacks (‘dust attacks’)"
sources: []
relatedTerms:
  - address-reuse
  - discard-threshold
  - dust-attack
  - dust-limit
  - dust-sweeping
  - transaction-fee
  - utxo-unspent-transaction-output
liveWidget: ~
---

Dust typically refers to outputs so tiny that the transaction fee to spend them would exceed their actual value. You might receive dust in a faucet giveaway, as a leftover output from a transaction, or through spam attacks. Though not completely worthless, dust can clutter a wallet’s UTXO set and sometimes degrade privacy if these tiny outputs get consolidated later.
Wallets commonly hide dust UTXOs from the main display or mark them as unspendable if fees are high. When network fees drop, you can perform a consolidation transaction to reclaim the value. Still, if dust is minuscule enough, it might remain effectively stuck indefinitely, waiting for a day when fees are incredibly low or BTC price is high enough to justify spending it.
