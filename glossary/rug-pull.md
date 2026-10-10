---
title: "Rug Pull"
slug: rug-pull
draft: false
updated: "2026-10-10"
shortDefinition: "A DeFi/alt term where project founders vanish and abscond with user funds. Less relevant in Bitcoin's decentralized environment."
keyTakeaways:
  - "Common in alt/DeFi contexts where devs control locked liquidity"
  - "Investors lose funds as the project collapses or devs steal tokens"
  - "Highlighting Bitcoin's advantage in decentralization and self-custody"
sources:
  - { label: "US Attorney, SDNY - two charged in the Frosties NFT 'rug pull' (March 24, 2022): a rug pull is when a project's creator solicits investments, then abruptly abandons the project and keeps the funds; the pair deactivated the website hours after selling out", url: "https://www.justice.gov/usao-sdny/pr/two-defendants-charged-non-fungible-token-nft-fraud-and-money-laundering-scheme-0" }
  - { label: "Chainalysis - 2021 rug pulls put crypto scam revenue near an all-time high (December 16, 2021): rug pulls are a new scam type most common in DeFi; developers create a token on Ethereum or another chain, promote it with false promises, then drain the liquidity pool and disappear; the year's biggest was Thodex, a Turkish centralized exchange whose CEO vanished after it halted withdrawals", url: "https://www.chainalysis.com/blog/2021-crypto-scam-revenues/" }
  - { label: "Bitcoin Wiki - Script: Bitcoin's scripting system is intentionally not Turing-complete, with no loops", url: "https://en.bitcoin.it/wiki/Script" }
  - { label: "Satoshi Nakamoto - Bitcoin: A Peer-to-Peer Electronic Cash System (2008): new coins enter circulation through block rewards, since there is no central authority to issue them", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "Ontario Securities Commission - QuadrigaCX investigation report (2020): Quadriga operated like a Ponzi scheme, and its CEO misappropriated client assets", url: "https://www.osc.ca/quadrigacxreport/" }
  - { label: "US DOJ - BitConnect founder indicted over a global $2.4 billion scheme (February 25, 2022): prosecutors allege its 'Lending Program' was a Ponzi scheme", url: "https://www.justice.gov/archives/opa/pr/bitconnect-founder-indicted-global-24-billion-cryptocurrency-scheme" }
  - { label: "US Attorney, District of New Jersey - BitClub Network programmer pleads guilty (July 9, 2020): a fraud scheme selling shares of purported mining pools that took at least $722 million worth of bitcoin from investors", url: "https://www.justice.gov/usao-nj/pr/romanian-programmer-admits-he-helped-create-bitclub-network-fraud-scheme-worth-least-722" }
  - { label: "WizSec - The missing MtGox bitcoins (April 19, 2015): most or all were stolen from the hot wallet over time, beginning in late 2011", url: "https://blog.wizsec.jp/2015/04/the-missing-mtgox-bitcoins.html" }
  - { label: "CNN - Mark Karpeles acquitted of most charges (March 2019): found guilty of falsifying records, not guilty of embezzlement and aggravated breach of trust", url: "https://www.cnn.com/2019/03/14/tech/mark-karpeles-mt-gox" }
  - { label: "US DOJ, SDNY - founder of Celsius sentenced to 12 years (May 8, 2025): Celsius's Earn program deployed customer assets; it halted withdrawals on June 12, 2022 and filed for bankruptcy on July 13, 2022", url: "https://www.justice.gov/usao-sdny/pr/founder-celsius-sentenced-12-years-fraud-and-market-manipulation" }
  - { label: "NY Attorney General - lawsuit against Gemini, Genesis and DCG (October 19, 2023): Genesis's loans were undersecured, and it lost more than $1.1 billion when Three Arrows Capital and another borrower defaulted", url: "https://ag.ny.gov/press-release/2023/attorney-general-james-sues-cryptocurrency-companies-gemini-genesis-and-dcg" }
  - { label: "SEC - BlockFi to pay $100 million (February 14, 2022): investors lent crypto to BlockFi, which lent it on to institutional borrowers", url: "https://www.sec.gov/newsroom/press-releases/2022-26" }
  - { label: "CNBC - BlockFi files for bankruptcy as FTX fallout spreads (November 28, 2022)", url: "https://www.cnbc.com/2022/11/28/blockfi-files-for-bankruptcy-as-ftx-fallout-spreads.html" }
  - { label: "Genesis Global Holdco - first-day declaration of A. Derar Islim, In re Genesis (Bankr. S.D.N.Y. 23-10063), Doc 17 (January 20, 2023): lending paused November 16, 2022; Chapter 11 filed January 19, 2023", url: "https://storage.courtlistener.com/recap/gov.uscourts.nysb.314889/gov.uscourts.nysb.314889.17.0.pdf" }
  - { label: "SEC - charges against GAW Miners and ZenMiner (December 1, 2015): Hashlets were sold as shares of computing power the companies did not have, and early buyers were paid with later buyers' money, a Ponzi scheme", url: "https://www.sec.gov/newsroom/press-releases/2015-271" }
  - { label: "domo - BRC-20 experiment: inscriptions used to create off-chain balance states, with balances found by aggregating deploy, mint and transfer inscriptions", url: "https://domo-2.gitbook.io/brc-20-experiment" }
relatedTerms:
  - altcoin
  - bitcoin-faucet
  - exchange
  - fud-fear-uncertainty-doubt
  - hashlet
liveWidget: ~
---

A rug pull is a scam pattern (predominantly in DeFi and altcoin markets) where project founders attract investment into a token, contract, or liquidity pool, then abruptly drain it and disappear. The investors are left holding worthless tokens; the founders abscond with the real value.

The mechanics in a classic DeFi rug pull:

1. Founders create a new token on Ethereum or another smart-contract chain.
2. They promote it hard, on promises that turn out to be false.
3. Users buy the token, which puts money into a liquidity pool on a decentralized exchange, a pool the founders control.
4. Once enough money is in, the founders drain the liquidity pool, and the token's price falls to near zero.
5. The website goes offline and the founders disappear.

Why this is structurally less common in Bitcoin:

- **No general-purpose smart contracts.** Bitcoin's scripting language is deliberately limited, with no loops, so its base layer has no programmable liquidity pools of the kind that get drained. Most rug pulls happen on programmable-contract platforms.
- **No projects to invest in at the protocol level.** You can hold BTC, full stop. There's no "Bitcoin project" issuing tokens that you're funding.
- **No founders to abscond.** New bitcoin comes from mining, with no central issuer; no team controls the supply or can drain it.

Where rug-pull-like scams DO happen in the Bitcoin context:

- **Custodial scams.** [QuadrigaCX](/glossary/quadriga-cx), Bitconnect and BitClub Network all took in customers' money or bitcoin, and regulators or prosecutors later described each one as a fraud or a Ponzi scheme. Functionally similar pattern: trust the operator, operator drains funds. The Bitcoin is real; the custodian is the scam. [Mt. Gox](/glossary/mt-gox) is often lumped in with these, but it fits less well: investigators traced its missing coins to thefts from its hot wallet, and its CEO was acquitted of embezzlement.
- **Bitcoin "yield" products.** A company paying yield on your bitcoin usually gets it by lending your coins out, and that lending can go bad. Celsius, Genesis and BlockFi all lent or invested customers' coins elsewhere, and all three went bankrupt in 2022-2023. Genesis's loans were undersecured, and Celsius's founder was later sentenced to 12 years for fraud.
- **Mining-share scams.** [Hashlet](/glossary/hashlet) / GAW Miners' Hashlets are the canonical example: sold fractional ownership of mining hash rate that didn't exist. Pure Ponzi.
- **"Bitcoin-related" tokens.** BRC-20 tokens are written onto Bitcoin's chain as inscriptions, but their balances are tracked off-chain by indexers, not by Bitcoin's rules. A token like that can be hyped and dumped like any altcoin, and it is separate from BTC itself.

The protective framing:

- **If a "Bitcoin product" pays yield greater than the risk-free rate, it's either lending your BTC out (counterparty risk, as Celsius customers learned) or paying old depositors with new deposits (the Bitconnect story), or it's outright fraud.**
- **If a project asks you to deposit BTC and trust their custody, you're not buying Bitcoin's properties anymore. You're buying their operational integrity.**
- **Self-custody takes the custodian out of the picture.** Hardware wallet + seed phrase + cold storage. Nobody can drain coins they have no access to.

The honest term-of-art point: "rug pull" is borrowed from altcoin / DeFi culture, where it became common around 2021. In Bitcoin contexts, it usually refers to either custodial failures (which go back years before the term caught on) or tokens issued on top of Bitcoin's chain (which can be rugged without touching BTC itself). The structural lesson is older and simpler: not your keys, not your coins.

See [Rat Poison, Tulips and a Pet Rock](/rabbit-hole/bitcoin-is-dead) for the frauds that used bitcoin as the deposit, and why the convictions were of custodians rather than the protocol.
