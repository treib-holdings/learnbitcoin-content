---
title: "Bitcoin Governance"
slug: bitcoin-governance
linkText:
  - "Bitcoin governance"
  - "Bitcoin's governance"
draft: false
published: "2026-05-29"
updated: "2026-10-10"
shortDefinition: "Bitcoin's informal decision-making process. There is no central authority. Changes happen through rough consensus among several stakeholder groups, each of whom holds de facto veto power."
keyTakeaways:
  - "Bitcoin has no formal voting body, foundation, or governance council"
  - "Developers, miners, full node operators, users, and businesses each hold informal veto power"
  - "The system is intentionally slow - being hard to change is part of what makes Bitcoin credible as money"
sources:
  - { label: "BIP 101 - Increase maximum block size, by Gavin Andresen (a hard fork from 1 MB to 8 MB that then keeps growing, to activate once 750 of 1,000 blocks signal; status: Closed)", url: "https://github.com/bitcoin/bips/blob/master/bip-0101.mediawiki" }
  - { label: "BIP 109 - Two million byte size limit with sigop and sighash limits, by Gavin Andresen (a hard fork from 1 MB to 2 MB, to activate once 750 of 1,000 blocks signal; status: Closed)", url: "https://github.com/bitcoin/bips/blob/master/bip-0109.mediawiki" }
  - { label: "Mike Belshe - Segwit2x Final Steps (bitcoin-segwit2x list, November 8, 2017, archived): the Segwit2x organizers suspend the planned 2MB block size increase, writing that they had not built sufficient consensus for it", url: "https://web.archive.org/web/20171108202305/https://lists.linuxfoundation.org/pipermail/bitcoin-segwit2x/2017-November/000685.html" }
  - { label: "BIP 148 - Mandatory activation of segwit deployment, by Shaolin Fry (from midnight August 1, 2017, by median time past, blocks that do not signal for SegWit on bit 1 are rejected, until SegWit locks in)", url: "https://github.com/bitcoin/bips/blob/master/bip-0148.mediawiki" }
  - { label: "mempool.space - block 477,120 (04:46 UTC, July 23, 2017), first block with BIP 91 active; it and every block after it up to SegWit's lock-in on August 9 signal for SegWit on bit 1", url: "https://mempool.space/block/0000000000000000015411ca4b35f7b48ecab015b14de5627b647e262ba0ec40" }
  - { label: "mempool.space - block 481,824 (01:57 UTC, August 24, 2017), the first block under SegWit rules", url: "https://mempool.space/block/0000000000000000001c8018d9cb3b742ef25114f27563e3fc4a1902167f9893" }
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - soft-fork
  - chain-split
  - miner-signaling
  - consensus-parameter
  - bip-148-uasf
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0003.md"
ogImage: "/diagrams/og/bitcoin-governance-vetoes.png"
ogImageAlt: "Pentagon diagram of Bitcoin's five governance stakeholder groups (Developers, Miners, Nodes, Users, Hodlers), each with a 'vetoes by' caption around a central CONSENSUS badge. Title: Five vetoes. One consensus. Tagline: No one is in charge. Everyone can refuse."
liveWidget: ~
---

Bitcoin has no boss. There is no foundation that votes on rule changes, no CEO who decides feature roadmaps, no shareholders' meeting. Yet the protocol does evolve - slowly, contentiously, and through a process that nobody designed but everybody has come to recognize. That process is what people mean by *Bitcoin governance*.

The honest summary: Bitcoin governance is rough consensus among several stakeholder groups, each of whom can effectively veto a change by refusing to adopt it.

## The stakeholders

Five groups hold practical influence over what Bitcoin actually does:

- **Developers** - the people who write [Bitcoin Core](/glossary/bitcoin-core) and other node implementations. They can propose, design, review, and merge code. They cannot force anyone to run it.
- **Miners** - produce blocks and signal activation of new rules through [miner signaling](/glossary/miner-signaling). They have a structural role in [soft fork](/glossary/soft-fork) activation but cannot enforce rules nodes haven't adopted.
- **Full node operators** - run the consensus rules. They reject any block that violates the rules they enforce. A change miners and developers want is functionally dead if economic nodes refuse to upgrade.
- **Users and businesses** - exchanges, wallets, custodians, merchants. They choose which chain to recognize as "Bitcoin" if a split occurs, and their decision determines which fork retains value.
- **Hodlers** - the long-term economic majority. They don't sign blocks or write code, but their willingness to hold (or sell) defines what miners actually earn and which chain has market-recognized scarcity.

<figure>
  <img src="/diagrams/bitcoin-governance-vetoes.svg" alt="A pentagon diagram of Bitcoin's five governance stakeholder groups, each able to veto a consensus change. Developers at top (vetoes by refusing to merge), Miners upper-right (by refusing to signal), Nodes lower-right (by refusing to upgrade), Users lower-left (by recognizing another chain), and Hodlers upper-left (by selling the new chain). A central CONSENSUS badge represents the alignment all five must reach. No one is in charge; everyone can refuse." />
  <figcaption>Five groups, five vetoes. No central authority. Any rule change has to clear all five.</figcaption>
</figure>

Any change to Bitcoin's consensus rules ultimately requires alignment across these groups. If any one group refuses, the change either fails or creates a chain split.

## The process

The standard path looks roughly like:

1. **Discussion** - an idea is proposed on the mailing list, on developer chats, or in a [BIP](/glossary/bip-bitcoin-improvement-proposal) draft. It gets reviewed, criticized, and refined over months or years.
2. **Implementation** - code is written, peer-reviewed, and merged into a node implementation.
3. **Release** - the new client ships. Users choose to upgrade or not.
4. **Signaling** - for [soft forks](/glossary/soft-fork), miners begin [signaling](/glossary/miner-signaling) support through their blocks.
5. **Lock-in and activation** - if the threshold is met, the rule activates. Nodes running the new client enforce it.
6. **Adoption** - economic nodes continue (or stop) recognizing the chain that follows the new rule. If a critical mass of value-handling nodes upgrades, the change has succeeded.

This sequence has played out for [SegWit](/glossary/segwit-segregated-witness-bip-141), [Taproot](/glossary/taproot), and every other significant change since 2012. It typically takes years end-to-end. Proposed changes that fail, like the block-size hard forks attempted from 2015 to 2017, fail at one of these steps - not by formal vote, but by failure to align the relevant stakeholder groups. [BIP-148](/glossary/bip-148-uasf), the 2017 user-activated soft fork, was a different case. Its rule, that blocks signal for SegWit from August 1, 2017, was already being met when that date came, and SegWit activated later that month.

## Why slow is the point

Bitcoin's governance is often criticized for being inefficient. The criticism misses the point. A monetary system whose rules are easy to change is not a credible monetary system. The slowness is not a bug - it is the property that makes Bitcoin's "21 million cap" believable in a way a corporate roadmap never could be.

The same procedural friction that made it hard to ship SegWit also makes it hard for anyone - government, corporation, or developer cabal - to change the supply schedule, alter the security model, or quietly weaken the consensus rules. Rough consensus is a feature.

## What Bitcoin governance is not

It is helpful to be explicit about what Bitcoin governance is *not*:

- It is **not voting by coin holdings.** Bitcoin has no on-chain governance token.
- It is **not majority rule of miners.** Miners can signal, but they cannot force economic nodes to recognize blocks under different rules.
- It is **not controlled by Bitcoin Core developers.** They write code, but every line they write must be accepted by the people who run it.
- It is **not absent.** The lack of formal governance does not mean no governance - it means an emergent process that has, so far, proven harder to capture than any formal mechanism that's been tried elsewhere in money.

For a deeper look at how this plays out in practice, the histories of [SegWit activation](/glossary/segwit-segregated-witness-bip-141) and the [block size war](/rabbit-hole/block-size-war) are the canonical case studies.
