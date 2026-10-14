---
title: "Chain Analysis"
slug: chain-analysis
draft: false
updated: "2026-10-15"
shortDefinition: "Examining on-chain transactions, addresses, and patterns to identify or link user activity."
keyTakeaways:
  - "Leverages the open ledger to track fund flows"
  - "Used by companies and law enforcement"
  - "Drives privacy-focused solutions to avoid address clustering"
sources:
  - { label: "Bitcoin Wiki - Privacy (the common-input-ownership heuristic, change address detection and taint analysis; transaction surveillance companies that do large-scale surveillance of the ecosystem; fungibility and blacklists; Tor broadcasting, CoinJoin, PayJoin and Lightning as defenses; written February 2019)", url: "https://en.bitcoin.it/wiki/Privacy" }
  - { label: "Meiklejohn et al. - A Fistful of Bitcoins, Characterizing Payments Among Men with No Names, IMC 2013 (heuristic clustering of wallets by evidence of shared authority, then re-identification by buying from known services)", url: "https://cseweb.ucsd.edu/~smeiklejohn/files/imc13.pdf" }
  - { label: "Biryukov, Khovratovich and Pustogarov - Deanonymisation of clients in Bitcoin P2P network (2014; links transaction pseudonyms to the IP addresses they were broadcast from, even behind NAT)", url: "https://arxiv.org/abs/1405.7418" }
  - { label: "OFAC - FAQ 562, how OFAC identifies digital currency information on the SDN List (digital currency addresses are listed as identifiers of blocked persons; March 19, 2018)", url: "https://ofac.treasury.gov/faqs/562" }
  - { label: "Chainalysis - company site (software to investigate and trace funds across blockchains, compliance tools, and practices for law enforcement, centralized exchanges and government; accessed 2026-10-14)", url: "https://www.chainalysis.com/" }
  - { label: "Elliptic - company site (crypto compliance software trusted by banks, exchanges and governments; law enforcement tools to trace illicit activity and recover assets; a case study tracing over 45 million dollars in stolen crypto; accessed 2026-10-14)", url: "https://www.elliptic.co/" }
  - { label: "U.S. Department of the Treasury - Treasury Takes Robust Actions to Counter Ransomware (September 21, 2021; OFAC designated the exchange SUEX for laundering proceeds of at least eight ransomware variants, after analysis of its known transactions tied over 40 percent of them to illicit actors)", url: "https://home.treasury.gov/news/press-releases/jy0364" }
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

Chain analysis is the industry and craft of extracting information about real-world identities and behaviors from the public Bitcoin blockchain. Specialized firms (Chainalysis and Elliptic among them) sell this analysis to exchanges, law enforcement, governments, and compliance teams.

The methods rely on the fact that Bitcoin's chain is fully public and never forgets. Common techniques:

- **[Address clustering](/glossary/address-clustering).** Use transaction patterns (the common-input-ownership heuristic, change-output detection, timing correlations) to group addresses that probably share an owner.
- **Exchange / [KYC](/glossary/kyc-know-your-customer) anchoring.** Match clustered addresses to known on-ramps (exchanges that hold customer identity records) and demand those records when needed.
- **OFAC / sanctions tagging.** Flag specific addresses tied to ransomware, sanctioned entities, or stolen-funds investigations.
- **Behavioral profiles.** Identify mixing patterns, [CoinJoin](/glossary/coinjoin) participation, exchange-to-cold-storage flows, and so on.
- **Network-layer correlation.** Combine on-chain analysis with [eavesdropping](/glossary/eavesdropping-attack) on the peer-to-peer network to link broadcasts to IPs.

What chain analysis is *good* for:

- Tracing stolen funds to the exchanges they land on, where they can be frozen and recovered.
- Identifying ransomware payouts and the wallets behind them. In 2021 the US Treasury sanctioned the exchange SUEX for laundering proceeds of at least eight ransomware strains, after analysis of its known transactions tied over 40 percent of them to illicit actors.
- Compliance: exchanges checking incoming deposits against sanctions lists.

What chain analysis is *also* used for:

- Mass surveillance of ordinary users' financial activity.
- "Tainted coin" determinations that erode [fungibility](/glossary/fungibility) and create two-tier markets.
- Targeting and deanonymization of activists, journalists, and dissidents in repressive jurisdictions.

The defenses are the privacy techniques covered elsewhere in this glossary: [avoid address reuse](/glossary/address-reuse), use [CoinJoin](/glossary/coinjoin) or [PayJoin](/glossary/payjoin) where applicable, prefer [Lightning](/glossary/lightning-network) for payments, run your node over [Tor](/glossary/tor-hidden-service), avoid KYC choke points where possible.

Chain analysis isn't going away. Privacy-preserving Bitcoin use is a discipline, not a default.

Go deeper in [Privacy on Bitcoin](/rabbit-hole/bitcoin-privacy) - how the heuristics work, where the name attaches, what the tools get wrong, and the defenses that still hold.
