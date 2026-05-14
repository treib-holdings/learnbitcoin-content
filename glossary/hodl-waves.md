---
title: "HODL Waves"
slug: hodl-waves
draft: false
shortDefinition: "Visualization of how long UTXOs remain inactive, showing the percentage of coins unmoved for set time intervals."
keyTakeaways:
  - "Breaks down BTC by age since last movement"
  - "Highlights hodler conviction vs. active trading"
  - "Offers a window into market psychology and supply distribution"
sources: []
relatedTerms:
  - coin-age
  - hodl
  - volatility
liveWidget: ~
---

HODL Waves is an on-chain visualization that breaks down Bitcoin's circulating supply by how long each UTXO has been sitting unmoved. The chart shows colored bands stacked from young coins (recently moved) at the bottom to old coins (untouched for years) at the top, with the bands' relative thickness shifting over time as coins age into older brackets or move and reset to "young."

Glassnode popularized the modern format. Their bands typically cover:

- **< 1 month** - hot trading, recent purchases, exchange flows
- **1-3 months** - newer holders, ICO-era buyers
- **3-12 months** - medium-term holders
- **1-2 years** - one halving cycle
- **2-5 years** - multi-cycle holders
- **5-10 years and 10y+** - the deep cold storage, Satoshi-era coins, lost coins, hardcore long-term holders

What HODL Waves makes visible:

- **Coin age maturity.** During bull runs, old-age bands shrink as long-term holders sell into the rally. During bear markets and accumulation phases, the same bands expand as coins age in place.
- **Supply held by long-term holders.** Glassnode's heuristic threshold is 155 days; coins held longer are considered "long-term holder" supply. As of 2026 this is consistently 60-70% of circulating supply, a metric often cited as evidence of holder conviction.
- **"Lost coins" floor.** The 10-year+ band includes coins that haven't moved in over a decade. Some are intentional cold storage; many are lost. The band only grows over time (it never shrinks below its previous high).

What it doesn't tell you:

- **The aggregation reflects UTXOs, not wallets or owners.** Coin control practices (consolidation, change reuse) can make a single holder look like many or vice versa.
- **No direct price signal.** HODL Waves contextualize what's happening in the holder base, not what the price will do.

For market analysts it's one of the most-cited charts in Bitcoin on-chain analysis. For casual observers it's a useful "is everyone selling or is everyone sitting tight" gauge.
