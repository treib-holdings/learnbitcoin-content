---
title: "Whitepaper"
slug: whitepaper
draft: false
shortDefinition: "Satoshi Nakamoto's original 2008 publication, 'Bitcoin: A Peer-to-Peer Electronic Cash System,' detailing Bitcoin's design."
keyTakeaways:
  - "Pioneering document that invented decentralized digital currency"
  - "Explains block headers, PoW, and peer-to-peer consensus"
  - "Considered a landmark in cryptographic and monetary innovation"
sources: []
relatedTerms:
  - bitcoin-pizza-day
  - genesis-block
  - hal-finneys-running-bitcoin
  - satoshi-nakamoto
liveWidget: ~
---

The Bitcoin whitepaper is the founding document of the network: a nine-page PDF titled **"Bitcoin: A Peer-to-Peer Electronic Cash System"**, published by [Satoshi Nakamoto](/glossary/satoshi-nakamoto) on October 31, 2008. It describes, with unusual brevity and precision, the entire core idea of Bitcoin.

What's actually in those nine pages:

1. **Transactions as chained signatures** - the core mechanism by which coin ownership is transferred.
2. **The double-spend problem and its proposed solution** - timestamping transactions into a publicly verified chain via [proof-of-work](/glossary/proof-work-pow).
3. **The network model** - nodes broadcasting, validating, and converging on the longest chain.
4. **Incentives** - the [block subsidy](/glossary/block-subsidy) plus transaction fees as the economic engine that secures the network.
5. **Privacy via address rotation** - explicitly addressed; the whitepaper anticipated the [address-reuse](/glossary/address-reuse) issue from the start.
6. **A back-of-envelope security analysis** - the probabilistic argument for why proof-of-work makes double-spends impractical given any reasonable share of honest hash power.

What's *not* in the whitepaper: Lightning, SegWit, Taproot, multisig setups, fee markets at high-fee equilibrium, HD wallets. None of these existed yet. Satoshi described the chassis; everything since has been built on top.

You can read the whitepaper in about 20 minutes. It is genuinely the densest, clearest, most consequential nine pages in the history of computing. If you've never read it, you should - especially because it has aged remarkably well. Every claim it makes about how the system would work has held up across sixteen years of operation.

A locally-served copy lives at [/bitcoin.pdf](/bitcoin.pdf). See also [Satoshi Nakamoto](/glossary/satoshi-nakamoto) for the author, [Genesis Block](/glossary/genesis-block) for the network launch two months later, and [Journey Chapter 2](/journey/what-bitcoin-actually-is) for a longer guided read.
