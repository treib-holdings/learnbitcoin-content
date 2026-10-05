---
title: "Geographic Mining Distribution"
slug: geographic-mining-distribution
draft: false
updated: "2026-10-05"
shortDefinition: "A snapshot of how global hashing power is spread among different regions, relevant for decentralization and policy."
keyTakeaways:
  - "Distribution impacts regulatory and censorship concerns"
  - "Historically, large presence in China; now more globally dispersed"
  - "Reflects how miners chase low energy costs and favorable rules"
sources:
  - { label: "CoinDesk - Sichuan becomes latest Chinese province to order bitcoin miner shutdown (June 2021)", url: "https://www.coindesk.com/markets/2021/06/18/sichuan-becomes-latest-chinese-province-to-order-bitcoin-miner-shutdown" }
  - { label: "CoinDesk - China tightens crypto mining crackdown, bans trading (September 2021)", url: "https://www.coindesk.com/policy/2021/09/24/china-tightens-crypto-mining-crackdown-bans-trading" }
  - { label: "Cambridge Judge Business School - Bitcoin mining: new data reveal a surprising resurgence (CCAF, May 2022; country shares to January 2022)", url: "https://www.jbs.cam.ac.uk/2022/bitcoin-mining-new-data-reveal-a-surprising-resurgence/" }
relatedTerms:
  - competitive-block-propagation
  - competitive-mining
  - decentralization
  - energy-fud
  - mining
  - mining-centralization
  - mining-colocation
  - retail-mining
liveWidget: ~
---

Geographic mining distribution is the breakdown of Bitcoin's hash rate across countries and regions. It matters for one reason: if too much hash concentrates in one jurisdiction, that jurisdiction effectively has veto power over Bitcoin via simple regulation.

The history is dramatic:

- **2017-2021: China dominant.** Estimates put China at 50-75% of global hash rate, fueled by cheap hydro power in Sichuan/Yunnan during wet seasons and coal-power Mongolia/Xinjiang in dry seasons.
- **May-September 2021: China's ban.** In May the State Council ordered a crackdown on Bitcoin mining and trading; in June the main mining provinces ordered miners shut down; in September regulators declared crypto trading illegal and set out a plan to phase mining out nationwide. Hash rate dropped roughly 50% within weeks as miners packed shipping containers full of ASICs and exported.
- **2022-2026: post-ban dispersion.** The hash rate moved to the United States (the leading host country, ~38% as of January 2022, the last month in Cambridge's country data), Russia, Kazakhstan, Canada, Malaysia, and a long tail of other countries.

What "distribution" actually depends on:

- **Cheap power availability.** Stranded hydro (Paraguay, Iceland, Norway, Pacific Northwest US), flared natural gas (Texas, North Dakota, Oman), nuclear baseload (Tennessee, parts of Europe), excess solar/wind.
- **Regulatory tolerance.** Some jurisdictions actively court miners (El Salvador, parts of Texas); others ban or heavily tax them.
- **Climate.** Cold climates reduce cooling cost; warm climates require immersion cooling or hydro-power-paired air-conditioning.
- **Political stability.** Mining operations require multi-year capital deployments; unstable regulation makes that infeasible.

Why this matters for Bitcoin security:

- A single country with 51%+ hash could censor transactions or attempt deeper reorgs. No single country currently has that.
- Concentration into 3-4 cooperating countries could still produce a censoring majority. The actual dispersion across many countries makes this politically difficult.
- The post-2021 dispersion is the structural reason "China shutting down mining" became a non-event for Bitcoin's security - the hash relocated rather than disappearing.

Monitoring sources: Cambridge Centre for Alternative Finance's Bitcoin Mining Map (the canonical academic source) plus on-chain heuristics from various analytics firms. All sources are estimates; mining operations don't publicize locations, and the picture changes monthly.
