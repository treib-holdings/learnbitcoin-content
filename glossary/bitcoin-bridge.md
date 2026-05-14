---
title: "Bitcoin Bridge"
slug: bitcoin-bridge
draft: false
shortDefinition: "Any mechanism linking Bitcoin to other blockchains or layers, enabling cross-chain swaps or wrapped BTC."
keyTakeaways:
  - "Facilitates BTC usage on other chains or layers"
  - "Enables cross-chain liquidity and DeFi access"
  - "Involves trade-offs in security and trust models"
sources: []
relatedTerms:
  - bip-300-drivechains
  - bip-301
  - liquid-network
  - one-way-peg
  - peg
  - peg-out
  - sidechain
liveWidget: ~
---

A Bitcoin bridge is any mechanism for moving BTC's value onto another blockchain so it can be used in that chain's applications. The bridge holds the real BTC (or claims to) and issues a representation - a "wrapped" version - on the destination chain.

Major patterns:

- **Custodial wrapped BTC.** WBTC on Ethereum is the canonical example: a custodian (BitGo) holds real BTC and issues ERC-20 tokens 1:1. Users trust the custodian. Tens of billions of dollars have been bridged this way over the years.
- **Federated bridges.** Liquid Network and Rootstock (RSK) use multisig federations: a quorum of designated parties controls the BTC and signs off on peg-ins / peg-outs. Less trust-minimized than non-custodial but more decentralized than a single custodian.
- **tBTC and sBTC-style proposals.** Attempt to be more decentralized: collateralized peg-keepers, threshold signature ceremonies, etc. Mixed track records.
- **Atomic swaps.** Not technically a bridge - direct peer-to-peer exchange where BTC stays on Bitcoin and the counterparty asset stays on its native chain. No wrapped token involved, no trust required, but requires a counterparty willing to swap.

The track record is grim. Cross-chain bridges have collectively lost over $2.5 billion to hacks: Ronin Bridge ($625M, March 2022), Wormhole ($325M, February 2022), Nomad Bridge ($190M, August 2022), Harmony Horizon ($100M, June 2022), and many smaller incidents. Bridges are among the most-targeted attack surfaces in the broader crypto landscape because they're high-value honeypots holding pools of locked assets.

The Bitcoin-only perspective: bridging BTC to other chains exposes it to those chains' risks, regulatory profiles, and smart-contract bug surfaces - all things Bitcoin was designed to avoid. The honest framing is that bridges trade Bitcoin's security properties for access to other ecosystems' applications, and historically that trade has been expensive.

If you genuinely need BTC value on another chain (for arbitrage, specific DeFi exposure, whatever), accept the custodial / smart-contract risk knowingly. For everything else, Lightning, Liquid, or just keeping BTC on Bitcoin are usually better answers.
