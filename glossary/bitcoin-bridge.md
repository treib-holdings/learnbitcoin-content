---
title: "Bitcoin Bridge"
slug: bitcoin-bridge
draft: false
updated: "2026-10-10"
shortDefinition: "Any mechanism linking Bitcoin to other blockchains or layers, enabling cross-chain swaps or wrapped BTC."
keyTakeaways:
  - "Facilitates BTC usage on other chains or layers"
  - "Enables cross-chain liquidity and DeFi access"
  - "Involves trade-offs in security and trust models"
sources:
  - { label: "WBTC - official site: every WBTC backed 1:1 by bitcoin in custody; custody is a partnership between regulated custodians (checked October 10, 2026)", url: "https://www.wbtc.network/" }
  - { label: "BitGo - BitGo to move WBTC to multi-jurisdictional custody in a joint venture with BiT Global, same BitGo multisig and cold storage, keys distributed in several locations; the bitcoin was previously held in the United States (August 9, 2024)", url: "https://bitgo.com/resources/blog/bitgo-to-move-wbtc-to-multi-jurisdictional-custody-to-accelerate-global/" }
  - { label: "Decrypt - BiT Global sues Coinbase over WBTC delisting: BiT Global helps custody WBTC, and BitGo also custodies it (December 13, 2024)", url: "https://decrypt.co/296540/bit-global-sues-coinbase-delisting-wrapped-bitcoin" }
  - { label: "Blockstream Help - How does the Liquid Federation's multisig work? (11-of-15 multisig; each of the 15 functionaries holds one key)", url: "https://help.blockstream.com/liquid-network/faqs/how-does-the-liquid-federations-multisig-work" }
  - { label: "Rootstock docs - PowPeg: began as a federation, then moved to the PowPeg (decided in 2020); multisig keys held in PowHSMs that sign only when commanded by proof of work; functionaries do not directly control the keys", url: "https://dev.rootstock.io/concepts/foundations/powpeg/" }
  - { label: "Threshold Network docs - tBTC: randomly selected operators secure deposits with threshold cryptography and need a threshold majority to act", url: "https://docs.threshold.network/tbtc-v2" }
  - { label: "Stacks docs - The sBTC Signers: peg wallet spends need a 70% signer threshold", url: "https://docs.stacks.co/learn/sbtc/sbtc-signers" }
  - { label: "Bitcoin Wiki - Atomic swap: two parties exchange coins without trusting a third party", url: "https://en.bitcoin.it/wiki/Atomic_swap" }
  - { label: "Chainalysis - $2 billion stolen in 13 cross-chain bridge hacks, most of it in 2022; bridges a target because funds sit in one central store (August 2, 2022)", url: "https://www.chainalysis.com/blog/cross-chain-bridge-hacks-2022/" }
  - { label: "The Block - Ronin replaces compromised validators after the hack disclosed Tuesday, March 29: 173,600 ETH and 25.5 million USDC, almost $600 million (April 1, 2022)", url: "https://www.theblock.co/post/140165/ronin-replaces-compromised-validators-and-plans-to-bolster-security-after-600-million-hack" }
  - { label: "The Block - $323 million in ETH stolen from cross-chain protocol Wormhole (February 2, 2022)", url: "https://www.theblock.co/post/132841/256-million-in-eth-stolen-from-cross-chain-protocol-wormhole" }
  - { label: "The Block - Nomad's $190 million bridge exploit (August 2, 2022)", url: "https://www.theblock.co/post/160851/nomads-190-million-bridge-exploit-drew-hacking-feeding-frenzy-of-300-addresses" }
  - { label: "The Block - Harmony's cross-chain bridge hit by ETH theft worth nearly $100 million (June 23, 2022)", url: "https://www.theblock.co/post/153973/harmonys-cross-chain-bridge-hit-by-eth-theft-worth-nearly-100-million" }
  - { label: "Blockstream - Liquid Network Security Incident Assessment: a software bug created about 4,000 unbacked L-BTC; 3,996.02 BTC released through a peg-out; 3,400 BTC returned (September 23, 2026)", url: "https://blog.blockstream.com/liquid-network-security-incident-assessment/" }
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

- **Custodial wrapped BTC.** WBTC on Ethereum is the canonical example: a custodian holds real BTC and issues ERC-20 tokens 1:1. BitGo held the reserves on its own until 2024, when custody moved to a joint venture of BitGo and BiT Global that spreads the keys across several jurisdictions. Users trust that custodian.
- **Federated bridges.** Liquid Network keeps pegged BTC in an 11-of-15 multisig whose keys are held by 15 functionaries run by members of its federation. Rootstock (RSK) began with a federation and later moved to its PowPeg, where the multisig keys sit in hardware modules that sign only when Rootstock's proof-of-work chain commands it. Less trust-minimized than non-custodial but more decentralized than a single custodian.
- **Threshold-signer bridges (tBTC, sBTC).** Spread custody across a group of signers using threshold signatures. tBTC uses a randomly selected group of operators and needs a majority of them to act; sBTC needs 70% of its signer set to approve any spend.
- **Atomic swaps.** Not technically a bridge - direct peer-to-peer exchange where BTC stays on Bitcoin and the counterparty asset stays on its native chain. No wrapped token involved, no trust required, but requires a counterparty willing to swap.

The track record is grim. Chainalysis estimated in August 2022 that $2 billion had been stolen in 13 cross-chain bridge hacks, most of it that year. Big ones included Ronin Bridge (almost $600M, March 2022), Wormhole ($323M, February 2022), Nomad Bridge ($190M, August 2022), Harmony Horizon (nearly $100M, June 2022), and many smaller incidents. Bridges are among the most-targeted attack surfaces in the broader crypto landscape because they're high-value honeypots holding pools of locked assets. Bitcoin's own federated pegs are not immune: in September 2026 a software bug let an attacker take about 3,996 BTC out of Liquid's peg, and 3,400 BTC was later returned (see [Liquid Network](/glossary/liquid-network)).

The Bitcoin-only perspective: bridging BTC to other chains exposes it to those chains' risks, regulatory profiles, and smart-contract bug surfaces - all things Bitcoin was designed to avoid. The honest framing is that bridges trade Bitcoin's security properties for access to other ecosystems' applications, and historically that trade has been expensive.

If you genuinely need BTC value on another chain (for arbitrage, specific DeFi exposure, whatever), accept the custodial / smart-contract risk knowingly. For everything else, keeping BTC on Bitcoin itself, on-chain or over Lightning, avoids that extra layer of risk.
