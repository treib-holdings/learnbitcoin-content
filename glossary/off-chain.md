---
title: "Off-Chain"
slug: off-chain
draft: false
shortDefinition: "Any Bitcoin-related activity that doesn't settle directly on the main blockchain, including Lightning channels, sidechains, and custodial bookkeeping."
keyTakeaways:
  - "Lowers mainnet usage; saves block space and fees"
  - "Ranges from trust-minimized (Lightning) to fully trusted (custodial)"
  - "Trust-minimized off-chain still anchors disputes back to the base layer"
sources: []
relatedTerms:
  - layer-1
  - lightning-network
  - second-layer
  - sidechain
  - state-channel
liveWidget: ~
---

"Off-chain" is the catchall for any Bitcoin-related activity that doesn't produce an on-chain transaction. The base layer remains the ultimate source of truth; off-chain systems track state, balances, or commitments somewhere else and (in trust-minimized designs) anchor back to the chain when needed.

The major flavors:

- **Trust-minimized off-chain.** The [Lightning Network](/glossary/lightning-network) is the canonical example. Two parties open a channel with one on-chain funding transaction, exchange unlimited signed off-chain state updates between themselves, and only return to the chain when they close the channel or get into a dispute. The off-chain state is enforceable on-chain if anyone misbehaves.

- **Sidechains.** Liquid, Drivechains-style proposals, and other [sidechain](/glossary/sidechain) designs run a separate chain that pegs into Bitcoin. Activity happens on the sidechain; the base layer only sees the peg events.

- **Custodial off-chain.** Every exchange's internal ledger is off-chain. When you trade BTC on Coinbase or move balance between accounts on Strike, no Bitcoin transaction happens. The custodian just updates rows in a database. Fast, free, and exactly as secure as the custodian.

What off-chain lets you do that on-chain can't:

- **Sub-second settlement.** Lightning payments finalize in seconds; on-chain takes minutes.
- **Sub-cent fees.** Off-chain payments don't compete for block space.
- **Privacy improvements.** Lightning routing doesn't leave a permanent on-chain record of every hop.
- **Throughput.** The off-chain layer can process millions of state updates between two on-chain anchor points.

What you give up:

- **Some trust.** Trust-minimized off-chain (Lightning) has carefully-designed dispute resolution. Custodial off-chain doesn't, and the [exchange failure list](/glossary/exchange) is the warning label.
- **Some liquidity flexibility.** Lightning channel balance is locked between two parties; on-chain UTXOs can be spent to anyone.
- **Some auditability.** Off-chain activity isn't publicly verifiable unless the operator chooses to publish it.

The on-chain / off-chain split is intentional. The base layer optimizes for security and settlement; off-chain layers optimize for volume and speed. Bitcoin's strategy from the start was to use one to serve the other, rather than try to make a single layer do everything.
