---
title: "Liquid Network"
slug: liquid-network
draft: false
updated: "2026-10-10"
shortDefinition: "A federated sidechain developed by Blockstream, offering faster settlements, confidential transactions, and a pegged BTC model."
keyTakeaways:
  - "Federated peg secures BTC locked on mainnet in a multi-sig"
  - "Confidential Transactions hide amounts on L-BTC transfers"
  - "Faster settlements but relies on trusted functionaries"
sources:
  - { label: "Blockstream - Liquid Network launch press release: chain live September 27, 2018; an inter-exchange settlement network for exchanges, market makers, brokers and financial institutions (October 10, 2018)", url: "https://blockstream.com/press-releases/2018-10-10-blockstream-launches-the-liquid-network/" }
  - { label: "Liquid docs - Technical Overview (a block every minute; final after two confirmations, two to three minutes; amounts and asset types hidden by default; Issued Assets for stablecoins and tokenized securities; peg-outs only to addresses under a Peg-out Authorization Key)", url: "https://docs.liquid.net/docs/technical-overview" }
  - { label: "Blockstream Help - What is a Liquid Network functionary? (15 functionaries take turns proposing blocks; 11 of 15 sign each block; each functionary is run by a single federation member)", url: "https://help.blockstream.com/liquid-network/faqs/what-is-a-liquid-network-functionary" }
  - { label: "Blockstream Help - How does the Liquid Federation's multisig work? (11-of-15 multisig wallet for peg-ins and peg-outs)", url: "https://help.blockstream.com/liquid-network/faqs/how-does-the-liquid-federations-multisig-work" }
  - { label: "Liquid Federation - Q1 2026 quarterly update: 87 federation members; DePix stablecoin about half of transaction volume; new tokenized securities (May 1, 2026)", url: "https://blog.liquid.net/liquid-federation-quarterly-update-q1-2026/" }
  - { label: "Blockstream - Liquid Network Security Incident Assessment: Pedersen commitments and range proofs; range-proof cache bug; about 4,000 unbacked L-BTC; 3,996.02 BTC released via SideSwap's peg-out; no key compromised; 3,400 BTC returned; chain restarted from block 4,050,335 with valid transactions replayed; USDt unaffected (September 23, 2026)", url: "https://blog.blockstream.com/liquid-network-security-incident-assessment/" }
  - { label: "ElementsProject on GitHub - Elements 23.3.4 release, hardens range proof cache keys (September 9, 2026)", url: "https://github.com/ElementsProject/elements/releases/tag/elements-23.3.4" }
  - { label: "Liquid Network official update - transfers running since September 10; peg-outs paused and will resume only after full 1:1 BTC backing for LBTC is confirmed; about 600 BTC unreturned (September 17, 2026; also posted on X as @Liquid_BTC)", url: "https://t.me/liquid/101" }
  - { label: "Liquid Network homepage - banner says LBTC peg-out operations remain paused (checked October 10, 2026)", url: "https://liquid.net/" }
  - { label: "mempool Liquid explorer API - BTC held in the Liquid peg wallet: 3,632.23 BTC (checked October 10, 2026)", url: "https://liquid.network/api/v1/liquid/reserves" }
  - { label: "mempool Liquid explorer API - L-BTC in circulation: 4,234.76 L-BTC (checked October 10, 2026)", url: "https://liquid.network/api/v1/liquid/pegs" }
  - { label: "Decrypt - Blockstream refuses to pay the attacker's demanded bounty for the remaining 598.5 BTC (September 11, 2026)", url: "https://decrypt.co/377959/blockstream-refuses-ransom-for-return-of-47m-in-bitcoin-from-liquid-hack-it-is-theft" }
  - { label: "Satoshi Nakamoto - Bitcoin whitepaper: blocks assumed every 10 minutes (2008)", url: "https://bitcoin.org/bitcoin.pdf" }
relatedTerms:
  - bitcoin-bridge
  - liquid-federation
  - multisig
  - peg
  - peg-out
  - second-layer
  - sidechain
liveWidget: ~
---

The **Liquid Network** is a federated Bitcoin [sidechain](/glossary/sidechain) developed by Blockstream and operating since September 2018. It offers faster settlements (~1-minute blocks vs Bitcoin's ~10-minute), confidential transactions (amounts and asset types are hidden from chain observers), and a native asset-issuance framework. Pegged BTC on Liquid is called **L-BTC**.

How Liquid works in practice:

- **The [Liquid Federation](/glossary/liquid-federation)** - 87 member companies as of May 2026, from exchanges and trading firms to wallets and asset issuers - oversees the sidechain. Fifteen functionaries, each run by a single member, take turns proposing blocks, and each block needs signatures from 11 of the 15.
- **Peg-in** sends BTC to a federation-controlled multisig on mainnet; L-BTC is issued on Liquid 1:1.
- **Peg-out** burns L-BTC on Liquid; the functionaries release the same amount of BTC from the mainnet multisig. They pay only to addresses registered under a member's peg-out authorization key (PAK).
- **Confidential Transactions** use cryptographic commitments (homomorphic Pedersen commitments) to hide amounts while letting nodes verify no inflation occurred. Each hidden amount comes with a range proof showing it falls within a valid range, and the September 2026 exploit got around that check (see below).
- **Issued Assets.** Liquid supports issuing arbitrary assets (used for Tether's USDT, the Brazilian-real stablecoin DePix, tokenized securities, etc.) alongside L-BTC.

What Liquid is used for, as of 2026:

- **Inter-exchange settlement.** Liquid launched in 2018 as a settlement network for exchanges, market makers and brokers. In normal operation its transactions are final after two blocks, about two to three minutes.
- **Stablecoin payments.** DePix, a stablecoin pegged to the Brazilian real, made up roughly half of Liquid's transaction volume in early 2026. Tether's USDT is also issued on Liquid.
- **Security token experiments.** Several issuers have launched tokenized securities on Liquid.

What Liquid is not:

- **Not trustless like mainnet.** If 11 of the 15 functionaries colluded, or had their keys stolen, they could in principle steal pegged BTC. The peg also depends on the software every node runs being free of bugs, as the September 2026 exploit showed. These are trust assumptions, materially different from Bitcoin's proof-of-work security model.
- **Not Bitcoin's main scaling solution.** Liquid serves a specific niche (institutional fast settlement, confidential transactions). [Lightning](/glossary/lightning-network) is the general-purpose layer-2.

**The September 2026 exploit.** On September 6, 2026, an attacker used a flaw in Elements, the software Liquid runs, to create about 4,000 L-BTC with no bitcoin behind it: nodes cache the results of range-proof checks, and a forged proof matched an earlier, genuine cache entry, so it was never actually checked. The attacker redeemed the coins through the peg-out service of SideSwap, a federation member, and the functionaries released about 3,996 BTC on Bitcoin; Blockstream says no keys were compromised. The attacker returned 3,400 BTC the next day. To remove the fake coins, Blockstream's recovery restarted the chain from block 4,050,335, the last block before the attack, and replayed the valid transactions. Transactions resumed on September 10 after a fix shipped in Elements 23.3.4, but as of October 10, 2026, peg-outs were still paused and the peg wallet held about 600 BTC less than the L-BTC in circulation. Liquid's official update of September 17 said peg-outs would resume only once L-BTC was fully backed 1:1 again, and gave no date. Blockstream refused the attacker's demand for a bounty on the coins still held, Decrypt reported.

See [Liquid Federation](/glossary/liquid-federation) for the federation structure and [Sidechain](/glossary/sidechain) for the broader category.
