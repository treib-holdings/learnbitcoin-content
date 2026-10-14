---
title: "Soft Fork"
slug: soft-fork
draft: false
updated: "2026-10-13"
shortDefinition: "A backward-compatible tightening of Bitcoin's consensus rules. Blocks that follow the new rules still look valid to nodes that have not upgraded, and a hashrate majority of miners can impose them."
keyTakeaways:
  - "Backward-compatible rule changes tighten or add new constraints"
  - "Safe once a hashrate majority enforces the new rules; BIP 9 deployments wait for miner signaling to lock in"
  - "Non-upgraded nodes keep following the chain but do not enforce the new rules"
sources:
  - { label: "BIP-99 - Motivation and deployment of consensus rule changes: a softfork is a consensus fork in which everything previously invalid stays invalid while some previously valid blocks become invalid, and a hashrate majority of miners can impose the new rules; a hardfork makes previously invalid blocks valid and requires all users to upgrade", url: "https://github.com/bitcoin/bips/blob/master/bip-0099.mediawiki" }
  - { label: "BIP-9 - Version bits with timeout and delay: backward-compatible changes (soft forks) are signaled by miners through bits in the block version, tallied each retarget period, and move through STARTED, LOCKED_IN and ACTIVE states", url: "https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki" }
  - { label: "BIP-16 - Pay to Script Hash: the new rules apply to blocks timestamped from April 1, 2012; the matching address format is BIP-13", url: "https://github.com/bitcoin/bips/blob/master/bip-0016.mediawiki" }
  - { label: "BIP-141 - Segregated Witness (consensus layer): signature data leaves the transaction hash so nonintentional malleability becomes impossible; block weight is capped at 4,000,000; deployed with BIP-9 on bit 1", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "Bitcoin Core - Segregated Witness benefits (2016): SegWit raises the block size limit to nearly 4 MB, and its cost limit results in an effective limit closer to 1.6 to 2 MB", url: "https://bitcoincore.org/en/2016/01/26/segwit-benefits/" }
  - { label: "Bitcoin Core 0.21.1 release notes (May 1, 2021): Taproot's Speedy Trial needs 90 percent of blocks in a 2,016-block retarget period to signal; once locked in, Taproot activates at block 709632, expected in November 2021", url: "https://bitcoincore.org/en/releases/0.21.1/" }
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-9-versionbits
  - bip-91
  - bip-148-uasf
  - bitcoin-governance
  - chain-split
  - consensus-parameter
  - deployment-threshold-soft-fork
  - locked-period-soft-fork
  - miner-signaling
sameAs:
  - "https://en.wikipedia.org/wiki/Fork_(blockchain)"
  - "https://www.wikidata.org/wiki/Q48893562"
  - "https://en.bitcoin.it/wiki/Softfork"
liveWidget: ~
---

A soft fork is a Bitcoin consensus change that *tightens* the rules: things that were previously valid become invalid under the new rules, but anything valid under the new rules is also valid under the old. Older nodes that haven't upgraded still see new blocks as legitimate; they just don't enforce the new constraints themselves.

This is the *backwards-compatible* way to evolve Bitcoin's protocol. It contrasts with a hard fork, which loosens rules and creates an incompatible chain that old nodes reject.

Notable Bitcoin soft forks:

- **[BIP-16 (P2SH)](/glossary/p2sh)** - 2012. Added [P2SH](/glossary/p2sh) outputs, the script type behind addresses that start with 3.
- **[BIP-65 (CLTV)](/glossary/bip-65-opchecklocktimeverify)** - 2015. Added `OP_CHECKLOCKTIMEVERIFY` for [absolute locktimes](/glossary/absolute-locktime) in scripts.
- **[BIP-68/112/113 (CSV)](/glossary/checksequenceverify-csv)** - 2016. Added relative locktimes.
- **[BIP-141 (SegWit)](/glossary/segwit-segregated-witness-bip-141)** - 2017. The big one; moved signature data into a separate witness, fixed third-party malleability, and raised effective block capacity to roughly 1.6 to 2 MB under a new 4 million weight-unit limit.
- **[BIP-340/341/342 (Taproot)](/glossary/taproot)** - 2021. Added [Schnorr signatures](/glossary/schnorr-signature), Taproot, and Tapscript.

Activation typically involves [miner signaling](/glossary/miner-signaling): enough miners must signal readiness for the new rules in their block headers before the fork "locks in" and starts being enforced. The mechanism is defined in [BIP-9](/glossary/bip-9-versionbits) and its successors. After activation, nodes that haven't upgraded continue working but may accept blocks that violate the new rules - which is why genuinely majority-supported soft forks are essentially safe, while contested ones can create [chain splits](/glossary/chain-split).

The soft-fork approach is conservative: Bitcoin can add features without forcing everyone to upgrade simultaneously. It's also part of why Bitcoin evolves slowly - any proposal has to satisfy a high bar of community + miner + economic-node consensus to actually activate. The full multi-stakeholder dynamic is what [Bitcoin governance](/glossary/bitcoin-governance) describes; soft forks are the most common shape that process takes when the goal is adding capability without splitting the network.

See [The BIP Process](/rabbit-hole/bip-process) for how soft forks move from proposal to activation.
