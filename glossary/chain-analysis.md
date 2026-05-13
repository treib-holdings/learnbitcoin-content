---
title: "Chain Analysis"
slug: chain-analysis
draft: false
shortDefinition: "Examining on-chain transactions, addresses, and patterns to identify or link user activity."
keyTakeaways:
  - "Leverages the open ledger to track fund flows"
  - "Used by companies and law enforcement"
  - "Drives privacy-focused solutions to avoid address clustering"
sources: []
relatedTerms:
  - address-clustering
  - address-reuse
  - block-explorer
  - chain-visualization
  - coinjoin
  - miner-extractable-value-mev
  - transaction
  - transaction-index-txindex
  - utxo-unspent-transaction-output
liveWidget: ~
---

Chain analysis is the industry and craft of extracting information about real-world identities and behaviors from the public Bitcoin blockchain. Specialized firms (Chainalysis, Elliptic, CipherTrace, TRM Labs, others) sell this analysis to exchanges, law enforcement, governments, and compliance teams.

The methods rely on the fact that Bitcoin's chain is fully public and never forgets. Common techniques:

- **[Address clustering](/glossary/address-clustering).** Use transaction patterns (common inputs, change-output heuristics, timing correlations) to group addresses that probably share an owner.
- **Exchange / KYC anchoring.** Match clustered addresses to known on-ramps (Coinbase, Kraken, etc.) and demand customer records when needed.
- **OFAC / sanctions tagging.** Flag specific addresses tied to ransomware, sanctioned entities, or stolen-funds investigations.
- **Behavioral profiles.** Identify mixing patterns, [CoinJoin](/glossary/coinjoin) participation, exchange-to-cold-storage flows, and so on.
- **Network-layer correlation.** Combine on-chain analysis with [eavesdropping](/glossary/eavesdropping-attack) on the peer-to-peer network to link broadcasts to IPs.

What chain analysis is *good* for:

- Tracing stolen funds back to exchanges that can freeze them.
- Identifying ransomware payouts and the wallets behind them.
- Compliance: exchanges checking incoming deposits against sanctions lists.

What chain analysis is *also* used for:

- Mass surveillance of ordinary users' financial activity.
- "Tainted coin" determinations that erode [fungibility](/glossary/fungibility) and create two-tier markets.
- Targeting and deanonymization of activists, journalists, and dissidents in repressive jurisdictions.

The defenses are the privacy techniques covered elsewhere in this glossary: [avoid address reuse](/glossary/address-reuse), use [CoinJoin](/glossary/coinjoin) or [PayJoin](/glossary/payjoin) where applicable, prefer [Lightning](/glossary/lightning-network) for payments, run your node over [Tor](/glossary/tor-hidden-service), avoid KYC choke points where possible.

Chain analysis isn't going away. Privacy-preserving Bitcoin use is a discipline, not a default.
