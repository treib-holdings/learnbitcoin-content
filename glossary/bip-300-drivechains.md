---
title: "BIP 300 (Drivechains)"
slug: bip-300-drivechains
draft: false
shortDefinition: "Proposes a mechanism called 'drivechains'-merge-mined, two-way-pegged sidechains for extending Bitcoin functionality."
keyTakeaways:
  - "Leverages Bitcoin's PoW for sidechain security"
  - "Two-way peg allows BTC to move off and on sidechains"
  - "Debated concept due to potential miner power concerns"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-301
  - liquid-network
  - one-way-peg
  - peg
  - peg-out
  - sidechain
liveWidget: ~
---

[BIP-300](https://github.com/bitcoin/bips/blob/master/bip-0300.mediawiki) is the proposed Bitcoin consensus mechanism that would enable **drivechains** - [sidechains](/glossary/sidechain) where the peg between Bitcoin and the sidechain is enforced not by a federation, but by Bitcoin miners voting on withdrawal requests. Drivechains were proposed by Paul Sztorc in 2015 and remain one of the longest-running "should this activate?" debates in Bitcoin.

How drivechains would work, simplified:

1. **A drivechain is launched** with its own consensus rules. Users can [peg-in](/glossary/peg) BTC to it (locking the BTC on mainnet, receiving sidechain tokens).
2. **Sidechain activity happens** with whatever rules the sidechain implements (privacy, smart contracts, faster blocks, anything).
3. **To peg-out**, sidechain participants propose a withdrawal transaction to mainnet.
4. **Miners vote** on each withdrawal over a long period (~3 months). If enough miners support it, BTC is released back to mainnet. If not, it stays locked.

This is a [two-way peg](/glossary/peg) without a federated multisig. The trust assumption is: a majority of Bitcoin miners won't conspire to steal from drivechain peg-outs they don't approve, over months of voting.

The arguments **for**:

- **Permissionless sidechain experimentation.** Anyone could launch a drivechain with new features without needing Bitcoin protocol upgrades. Use cases: privacy chains (Confidential Transactions), high-throughput payment chains, alt-VM chains, etc.
- **BTC remains the only token.** No new altcoins; sidechain activity is denominated in pegged BTC.
- **Bitcoin captures the fee economy** of sidechains via [merged mining](/glossary/merged-mining) ([BIP-301](/glossary/bip-301)).

The arguments **against**:

- **Miner power expands.** Drivechains formally give miners the authority to approve/deny peg-outs - a major shift from "miners just order transactions" to "miners hold custody."
- **MEV pressure.** Sidechains with rich economies could generate MEV that flows back to miners, potentially incentivizing concentration.
- **Complexity.** Drivechain support adds non-trivial validation logic to Bitcoin Core.
- **Hype vs reality.** Years of "drivechains will solve X" discourse without much built.

BIP-300 has not activated. Patches exist in some Bitcoin Core forks; the proposal cycles in and out of community discussion. As of 2026 it's not on a near-term roadmap, but the conversation hasn't died either. See [BIP-301](/glossary/bip-301) for the companion merged-mining piece and [Sidechain](/glossary/sidechain) for the broader category.
