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

Dust sweeping is the practice of consolidating many small UTXOs (dust and near-dust) into one larger UTXO via a transaction designed to be efficient when fees are low.

Why anyone does this:

- **Future transaction efficiency.** Each input you spend adds ~70-150 vbytes of transaction weight, costing fee at whatever the future feerate is. Consolidating now at 5 sat/vB is much cheaper than spending those inputs individually at 100 sat/vB in a future fee spike.
- **Wallet cleanup.** A wallet with hundreds of small UTXOs is slow to manage and ugly to look at. Consolidation tidies up.
- **UTXO set responsibility.** Dust-cluttered wallets contribute to the global UTXO set bloat. Consolidating is a small act of network citizenship.

How to do it correctly:

- **Wait for low fees.** Mempool.space's fee estimator shows the bottom-of-mempool feerate; consolidate when it's below 5 sat/vB (often weekends, late nights, post-fee-spike clearouts).
- **Group by privacy boundary.** Don't merge UTXOs from different identity / use-case clusters in the same transaction. If you have wallet-A and wallet-B intentionally separated, keep them separated through consolidation.
- **Watch out for dust attacks.** If you've received [dust attack](/glossary/dust-attack) outputs, consolidating them with your main wallet defeats your privacy. Either exclude them or sweep them through a CoinJoin first.
- **Sign once, broadcast once.** Build one large consolidation transaction rather than many small ones to amortize transaction overhead.

What not to do:

- **Don't sweep absurdly small UTXOs.** A 200-sat UTXO that would cost 50 sats in fee to spend is barely worth it; you net 150 sats minus the future-fee discount. Sometimes leaving dust as dust is fine.
- **Don't consolidate during fee spikes.** The whole point is fee arbitrage; consolidating during a spike is the wrong direction.

For users with large UTXO sets (heavy on-chain Lightning participants, miners, payment processors), consolidation is a regular operational task. For typical users with a handful of UTXOs, it's rarely worth thinking about until fees drop significantly and you happen to be looking.
