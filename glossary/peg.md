---
title: "Peg-in"
slug: peg
draft: false
updated: "2026-10-10"
shortDefinition: "Locking BTC on the main chain to receive pegged tokens on a sidechain (e.g., Liquid's L-BTC)."
keyTakeaways:
  - "Transfers BTC from mainnet to a sidechain address"
  - "Federation or functionaries validate the lock, issue pegged assets"
  - "Enables sidechain features like faster blocks or privacy"
sources:
  - { label: "Back et al. - Enabling Blockchain Innovations with Pegged Sidechains: two-way peg at a fixed or otherwise deterministic exchange rate; destroying bitcoins as a one-way transfer; SPV peg needs a Bitcoin soft fork; federated peg in Appendix A (2014)", url: "https://blockstream.com/sidechains.pdf" }
  - { label: "Liquid docs - Technical Overview (anyone can peg in; the general public cannot peg out on its own and goes through a functionary or participant; peg-outs only to addresses under a Peg-out Authorization Key; one-minute blocks; confidential transactions)", url: "https://docs.liquid.net/docs/technical-overview" }
  - { label: "Blockstream Help - How does the Liquid Federation's multisig work? (11-of-15 multisig for peg-ins and peg-outs; each of the 15 functionaries holds one key)", url: "https://help.blockstream.com/liquid-network/faqs/how-does-the-liquid-federations-multisig-work" }
  - { label: "BIP-300 (Draft as of October 2026) - Hashrate Escrows: withdrawals governed by proof-of-work, need 13,150 miner ACKs at most one per block", url: "https://github.com/bitcoin/bips/blob/master/bip-0300.mediawiki" }
  - { label: "Blockstream - Liquid Network Security Incident Assessment: about 4,000 unbacked L-BTC created through an Elements bug and redeemed through SideSwap's peg-out; network halted September 6, 2026, including peg-outs; recovery resumed blocks with peg-outs paused; about 602 BTC outstanding (September 23, 2026)", url: "https://blog.blockstream.com/liquid-network-security-incident-assessment/" }
  - { label: "Liquid Network homepage - banner says LBTC peg-out operations remain paused (checked October 10, 2026)", url: "https://liquid.net/" }
  - { label: "mempool Liquid explorer API - BTC held in the Liquid peg wallet: 3,632.23 BTC (checked October 10, 2026)", url: "https://liquid.network/api/v1/liquid/reserves" }
  - { label: "mempool Liquid explorer API - L-BTC in circulation: 4,234.76 L-BTC (checked October 10, 2026)", url: "https://liquid.network/api/v1/liquid/pegs" }
relatedTerms:
  - bitcoin-bridge
  - liquid-federation
  - liquid-network
  - peg-guard
  - peg-out
  - sidechain
liveWidget: ~
---

A **peg** in the Bitcoin context is the mechanism that ties units on a [sidechain](/glossary/sidechain) (or other separate system) to BTC on mainnet at a fixed 1:1 ratio. Pegging is the process of moving BTC across that mechanism.

The two operations:

- **Peg-in:** lock BTC on mainnet, receive equivalent sidechain tokens. The mainnet BTC is locked in a multisig or script controlled by the sidechain's peg infrastructure.
- **[Peg-out](/glossary/peg-out):** burn or move sidechain tokens, receive equivalent BTC on mainnet from the peg's locked reserve.

The aim is that each sidechain token can be redeemed for one BTC (1 L-BTC = 1 BTC), while it lives on a separate chain with different properties. That only holds while the peg works. On Liquid, peg-outs were halted after an exploit on September 6, 2026. As of October 10, 2026 they were still paused, and the peg wallet held about 600 BTC less than the L-BTC in circulation (see [Liquid Network](/glossary/liquid-network)).

Peg architectures vary by trust model:

- **Federated peg** (used by [Liquid](/glossary/liquid-network)). A consortium of trusted operators controls the locked BTC via multisig; on Liquid, 15 functionaries each hold one key and 11 must sign. Peg-in is permissionless (anyone can lock BTC); peg-out requires a federation threshold to sign. On Liquid, only federation members holding a peg-out authorization key (PAK) can request a peg-out, so other users go through one of them.
- **Drivechain peg** (proposed, [BIP-300](/glossary/bip-300-drivechains)). Bitcoin miners vote on peg-out withdrawals over a long period. Still a draft as of October 2026.
- **SPV peg.** Proposed in the 2014 sidechains paper: each chain checks compact proofs (SPV proofs) of what happened on the other, so Bitcoin itself would release the locked coins once shown they were sent back. Bitcoin's script can't check such proofs without a soft fork, so the same paper suggested a federated peg in the meantime.
- **One-way peg** ([proof-of-burn](/glossary/one-way-peg)). BTC moves to the sidechain via verifiable destruction; there's no return path.

The peg mechanism is the trust hotspot for any sidechain. A federated peg is only as good as the federation's honesty, its operational security and the software it runs. A drivechain peg is only as good as miner alignment. Different users will value different trade-offs.

See [Peg-out](/glossary/peg-out), [Peg-Guard](/glossary/peg-guard), [Sidechain](/glossary/sidechain), and [Liquid Network](/glossary/liquid-network) for related concepts.
