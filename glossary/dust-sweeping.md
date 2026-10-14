---
title: "Dust Sweeping"
slug: dust-sweeping
draft: false
updated: "2026-10-15"
shortDefinition: "Combining multiple low-value UTXOs (dust) into a single output, typically done when transaction fees are low."
keyTakeaways:
  - "Merges small outputs into fewer, larger UTXOs"
  - "Saves on future fees if done at low-fee times"
  - "Potential privacy trade-off if addresses are linked"
sources:
  - { label: "Bitcoin Optech - Transaction size calculator (inputs of 148 vbytes for P2PKH, 68 for P2WPKH and 57.5 for a P2TR key-path spend; 10.5 vbytes of fixed overhead in a segwit transaction)", url: "https://bitcoinops.org/en/tools/calc-size/" }
  - { label: "Bitcoin Optech - Uneconomical outputs (dust) topic (outputs worth less than the fee to spend them; the dust limit exists to keep them from growing the UTXO set)", url: "https://bitcoinops.org/en/topics/uneconomical-outputs/" }
  - { label: "mempool.space - Block fee rates graph (1-month series to 14 October 2026; the median block's median feerate was 1 sat/vB overall and on six days of the week, 2 sat/vB on Fridays; 90th percentile 3 sat/vB)", url: "https://mempool.space/graphs/mining/block-fee-rates" }
  - { label: "mempool.space - recommended fees (two fetches on 14 October 2026; fastest 3 to 4 sat/vB, hour, economy and minimum 1 sat/vB)", url: "https://mempool.space/api/v1/fees/recommended" }
  - { label: "Bitcoin Wiki - Privacy (the common-input-ownership heuristic: inputs spent together are assumed to share an owner, which is exactly what a consolidation across privacy boundaries gives away)", url: "https://en.bitcoin.it/wiki/Privacy" }
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

Dust sweeping is the practice of consolidating many small [UTXOs](/glossary/utxo-unspent-transaction-output) ([dust](/glossary/dust) and near-dust) into one larger UTXO via a [consolidation transaction](/glossary/consolidation-transaction) sent when fees are low.

Why anyone does this:

- **Future transaction efficiency.** Each input you spend adds 57.5 to 148 vbytes to a transaction depending on script type (57.5 for a Taproot key-path input, 68 for native SegWit, 148 for legacy P2PKH), costing fee at whatever the future feerate is. Consolidating now at 5 sat/vB is much cheaper than spending those inputs individually at 100 sat/vB in a future fee spike.
- **Wallet cleanup.** A wallet with hundreds of small UTXOs is slow to manage and ugly to look at. Consolidation tidies up.
- **UTXO set responsibility.** Dust-cluttered wallets contribute to the global UTXO set bloat. Consolidating is a small act of network citizenship.

How to do it correctly:

- **Wait for low fees.** A mempool explorer's fee estimate shows where the floor is; consolidate when the next-block feerate is down at a few sat/vB. Quiet stretches can run for weeks: in the month to mid-October 2026 the typical block cleared at 1 sat/vB.
- **Group by privacy boundary.** Don't merge UTXOs from different identity / use-case clusters in the same transaction. If you have wallet-A and wallet-B intentionally separated, keep them separated through consolidation.
- **Watch out for dust attacks.** If you've received [dust attack](/glossary/dust-attack) outputs, consolidating them with your main wallet defeats your privacy. Leave them out: freeze or lock the crumb so it never gets picked up in a sweep (the dust attack entry has the full rule).
- **Sign once, broadcast once.** Build one large consolidation transaction rather than many small ones to amortize the fixed overhead (about 10.5 vbytes per transaction, plus one output).

What not to do:

- **Don't sweep absurdly small UTXOs.** A 200-sat native SegWit UTXO costs 68 sats to add as an input even at 1 sat/vB; you net 132 sats, and nothing at all above about 3 sat/vB. Sometimes leaving dust as dust is fine.
- **Don't consolidate during fee spikes.** The whole point is fee arbitrage; consolidating during a spike is the wrong direction.

For wallets that pile up UTXOs by the hundreds, such as miners paid per block or payment processors, consolidation is routine housekeeping. For typical users with a handful of UTXOs, it's rarely worth thinking about until fees drop significantly and you happen to be looking.
