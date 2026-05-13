---
title: "Inverted TX Index"
slug: inverted-tx-index
draft: false
shortDefinition: "A data structure mapping outputs to the transactions that spend them, useful in analysis or wallet management."
keyTakeaways:
  - "Helps trace outputs forward to their spending TX"
  - "Useful for analytics, block explorers, or forensic tasks"
  - "Not a default Bitcoin Core feature due to extra resource cost"
sources: []
relatedTerms: []
liveWidget: ~
---

Bitcoin Core typically tracks transactions by their IDs and known outputs. An inverted TX index is the reverse: it lists each output along with the specific transaction input that claims it. This can speed up lookups if you want to see which transaction spent a particular output. It’s not enabled by default in Bitcoin Core due to space and performance overhead, but block explorers or chain analytics tools often maintain this index for quick searching. Some advanced wallets also utilize such an index to monitor UTXO usage without scanning the entire chain repeatedly.
