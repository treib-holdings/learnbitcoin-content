---
title: "Sidechain"
slug: sidechain
draft: false
updated: "2026-10-10"
shortDefinition: "An external blockchain interoperable with Bitcoin via pegging (e.g., Liquid), enabling new features or faster transactions."
keyTakeaways:
  - "Brings extra functionality while maintaining BTC's monetary unit"
  - "Requires a bridging mechanism (federated or otherwise) to lock/unlock BTC"
  - "Allows experimentation without risking mainnet consensus"
sources:
  - { label: "Back et al. - Enabling Blockchain Innovations with Pegged Sidechains: a sidechain validates data from other blockchains; two-way peg moves coins over and back; federated peg in Appendix A (2014)", url: "https://blockstream.com/sidechains.pdf" }
  - { label: "Liquid docs - Technical Overview (sidechain runs in parallel with its own rules; one-minute blocks; confidential transactions; Issued Assets; the general public cannot peg out on its own; peg-outs only to addresses under a Peg-out Authorization Key; sidechains as a way to test new features)", url: "https://docs.liquid.net/docs/technical-overview" }
  - { label: "Blockstream Help - How does the Liquid Federation's multisig work? (11-of-15 multisig for peg-ins and peg-outs; each of the 15 functionaries holds one key)", url: "https://help.blockstream.com/liquid-network/faqs/how-does-the-liquid-federations-multisig-work" }
  - { label: "Blockstream - Liquid Network launch press release: an inter-exchange settlement network (October 10, 2018)", url: "https://blockstream.com/press-releases/2018-10-10-blockstream-launches-the-liquid-network/" }
  - { label: "Liquid Federation - Q1 2026 quarterly update: tokenized securities from STOKR and other issuers on Liquid (May 1, 2026)", url: "https://blog.liquid.net/liquid-federation-quarterly-update-q1-2026/" }
  - { label: "Blockstream - Liquid Network Security Incident Assessment: unbacked L-BTC redeemed through SideSwap, a federation member holding a Peg-out Authorization Key; network halted September 6, 2026, including peg-outs; recovery resumed blocks with peg-outs paused; USDt issued on Liquid (September 23, 2026)", url: "https://blog.blockstream.com/liquid-network-security-incident-assessment/" }
  - { label: "Liquid Network homepage - banner says LBTC peg-out operations remain paused (checked October 10, 2026)", url: "https://liquid.net/" }
  - { label: "mempool Liquid explorer API - BTC held in the Liquid peg wallet: 3,632.23 BTC (checked October 10, 2026)", url: "https://liquid.network/api/v1/liquid/reserves" }
  - { label: "mempool Liquid explorer API - L-BTC in circulation: 4,234.76 L-BTC (checked October 10, 2026)", url: "https://liquid.network/api/v1/liquid/pegs" }
  - { label: "BIP-300 (Draft as of October 2026) - Hashrate Escrows: withdrawals governed by proof-of-work instead of a federation", url: "https://github.com/bitcoin/bips/blob/master/bip-0300.mediawiki" }
  - { label: "BIP-301 (Draft as of October 2026) - Blind Merged Mining", url: "https://github.com/bitcoin/bips/blob/master/bip-0301.mediawiki" }
  - { label: "Rootstock docs - Foundations: an open-source, EVM-compatible Bitcoin sidechain, merge-mined with Bitcoin", url: "https://dev.rootstock.io/concepts/fundamentals/" }
  - { label: "Rootstock docs - PowPeg: began in 2018 as a federation; multisig keys kept in PowHSMs that sign only when commanded by Rootstock's cumulative proof of work; functionaries keep the hardware running but do not directly control the keys", url: "https://dev.rootstock.io/concepts/foundations/powpeg/" }
relatedTerms:
  - off-chain
  - one-way-peg
liveWidget: ~
---

A sidechain is a separate blockchain that's interoperable with Bitcoin via a **two-way peg**: you lock BTC on the main chain, an equivalent token is issued on the sidechain, and the process can later be reversed to get BTC back on the main chain. Whether you can do that yourself, and when, depends on who runs the peg (see Liquid below).

The sidechain runs its own consensus, its own block production, often its own scripting environment, and its own [block time](/glossary/block-time). Users can transact freely on the sidechain (often with features Bitcoin's base layer doesn't have, such as faster blocks, confidential transactions or smart contracts) while the BTC remains locked on mainnet.

The peg mechanism is the central trust question. The main approaches:

- **Federated peg.** A multisignature committee of operators holds the locked BTC. They issue/redeem sidechain tokens based on signed deposits/withdrawals. Trust is in the federation: if enough of them to meet the signing threshold (11 of 15 on Liquid) collude or get compromised, the peg breaks. Used by **Liquid** (Blockstream).
- **Drivechain ([BIP-300/301](/glossary/bip-300-drivechains))** - a proposed Bitcoin upgrade where miners enforce the peg via voting on withdrawal requests. Still a draft as of October 2026.

Notable Bitcoin sidechains in 2026:

- **Liquid Network** (Blockstream) - federated, supports confidential transactions and issued assets. Used for institutional inter-exchange settlement, security tokens, and some Tether USD. Only federation members holding a peg-out authorization key (PAK) can peg out, so other users go through one of them. Peg-outs were halted after an exploit on September 6, 2026; as of October 10, 2026 they were still paused, and the peg wallet held about 600 BTC less than the L-BTC in circulation (see [Liquid Network](/glossary/liquid-network)).
- **RSK (Rootstock)** - EVM-compatible smart contracts. Its peg, the PowPeg, began in 2018 as a federation. As of 2026, the multisig keys sit in hardware modules run by a set of functionaries, and the modules sign only when Rootstock's proof of work backs the request.

The general framing: sidechains let you experiment with features Bitcoin can't safely adopt on its base layer. The trade-off is some additional trust assumption (typically a federation). Different users will value that trade differently. Sidechains are one species of the broader [off-chain](/glossary/off-chain) category; see also [Second Layer](/glossary/second-layer) for the constructions that anchor to Bitcoin without running a separate chain.
