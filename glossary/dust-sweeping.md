---
title: "Dust Sweeping"
slug: dust-sweeping
draft: false
shortDefinition: "Combining multiple low-value UTXOs (dust) into a single output, typically done when transaction fees are low."
keyTakeaways:
  - "Merges small outputs into fewer, larger UTXOs"
  - "Saves on future fees if done at low-fee times"
  - "Potential privacy trade-off if addresses are linked"
sources: []
relatedTerms:
  - discard-threshold
  - dust
  - dust-attack
  - dust-limit
  - transaction
  - transaction-fee
  - utxo-unspent-transaction-output
liveWidget: ~
---

Dust sweeping is like tidying up spare change from various pockets into one jar. By consolidating dust outputs into a single higher-value UTXO, you eliminate clutter and reduce the overhead for future transactions. Because each input adds bytes-and thus fees-to a transaction, merging them at a time when fees are cheap can save you money in the long run.
However, combining dust can reduce privacy if it links separate addresses. That's why some privacy-focused users prefer mixing dust outputs via CoinJoin or other techniques. Sweeping might also not be worthwhile if the dust is so minuscule that even a low-fee environment won't justify the cost. It's a balancing act between practicality and on-chain footprints.
