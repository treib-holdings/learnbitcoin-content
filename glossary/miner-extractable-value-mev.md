---
title: "Miner Extractable Value (MEV)"
slug: miner-extractable-value-mev
draft: false
shortDefinition: "A concept from Ethereum focusing on reordering/injecting transactions for profit; limited in Bitcoin due to simpler scripting."
keyTakeaways:
  - "Mainly relevant to smart-contract-based chains (e.g., Ethereum)"
  - "Bitcoin's limited script reduces front-running or contract exploit opportunities"
  - "Miners might reorder for higher fees but deeper MEV is uncommon"
sources: []
relatedTerms:
  - chain-analysis
  - competitive-block-propagation
  - competitive-mining
  - fee-sniping
  - hidden-miner-tax
  - mining
  - mining-algorithm
  - mining-colocation
  - mining-centralization
liveWidget: ~
---

Miner Extractable Value (MEV) is the profit a miner can extract from a block beyond the standard [block reward](/glossary/block-reward) by deliberately ordering, including, or excluding specific transactions. The term originated in the Ethereum ecosystem, where MEV is a major and well-studied phenomenon. In Bitcoin, it's much smaller in practice.

What MEV looks like on Ethereum:

- **Front-running DEX trades.** A miner sees a large pending buy on Uniswap, inserts their own buy before it, lets the victim's buy execute (pushing price up), then sells immediately for profit. Standard "sandwich attack."
- **Arbitrage extraction.** Miners take profitable arbitrage opportunities that bots would otherwise capture, since miners control transaction inclusion ordering within the block.
- **Liquidation racing.** Whoever's transaction arrives first liquidates undercollateralized positions; miners win the race by definition.

By 2022, MEV was a billion-dollar-plus annual industry on Ethereum, with specialized infrastructure (Flashbots, MEV-Boost) capturing and redistributing MEV.

Why Bitcoin has dramatically less MEV:

- **Limited script.** [Bitcoin Script](/glossary/bitcoin-script) doesn't support the kinds of complex DEX, lending, or liquidation contracts that generate large MEV. There's no on-chain Uniswap to front-run.
- **UTXO model.** Bitcoin's [UTXO](/glossary/utxo-unspent-transaction-output) model doesn't have the "shared global state" that makes Ethereum's account model MEV-rich. Each UTXO is independent.
- **Simpler fee market.** Bitcoin miners do reorder transactions by fee rate (a small form of MEV), but the dynamic range is narrow compared to Ethereum's contract-driven opportunities.

What Bitcoin MEV does exist:

- **Fee bidding wars** during congested moments. Whoever pays more gets in first. This is the basic fee market, sometimes labeled MEV.
- **[Fee sniping](/glossary/fee-sniping).** A miner could deliberately reorg blocks to capture old high-fee transactions. Defenses (locktime-anchored transactions) exist.
- **Inscription/Ordinals ordering.** Some MEV-like dynamics arose around 2023-2024 inscription mints where miners could prioritize specific submissions.

The shorter version: MEV is a meaningful concept that Bitcoin's design largely avoids, mostly because Bitcoin keeps its base layer intentionally narrow. This is one of the unsung benefits of not being a smart-contract platform.
