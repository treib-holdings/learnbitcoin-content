---
title: "BIP 148 (UASF)"
slug: bip-148-uasf
draft: false
shortDefinition: "A user-activated soft fork pushing SegWit by rejecting blocks not signaling for SegWit after a deadline."
keyTakeaways:
  - "Nodes refused non-SegWit blocks after a certain time"
  - "Demonstrated node-driven consensus power"
  - "Helped finalize SegWit activation in 2017"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bip-9-versionbits
  - bip-91
  - segwit-segregated-witness-bip-141
  - bip-144-segwit-relay
  - bitcoin-core
  - deployment-threshold-soft-fork
  - locked-period-soft-fork
  - soft-fork
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0148.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0148"
  - "https://en.bitcoin.it/wiki/Softfork"
liveWidget: ~
---

[BIP-148](https://github.com/bitcoin/bips/blob/master/bip-0148.mediawiki) is the user-activated soft fork (UASF) proposal that ended the multi-year [SegWit](/glossary/segwit-segregated-witness-bip-141) activation deadlock in mid-2017. It's one of the most important episodes in Bitcoin's governance history.

The setup: SegWit had broad support from developers, exchanges, businesses, and a clear majority of [nodes](/glossary/node) - but a significant fraction of miners refused to signal for it under [BIP-9](/glossary/bip-9-versionbits). The deadlock persisted for over a year. Some miners wanted concessions (notably a larger block size); others were simply running mining hardware that could exploit a covert optimization called [AsicBoost](/glossary/asicboost) that SegWit would have disrupted.

BIP-148's proposal, authored by Shaolinfry: starting August 1, 2017, BIP-148-compliant nodes would *reject* any block that didn't signal for SegWit. If enough nodes ran this software, miners would either signal SegWit or get their blocks orphaned by the economic majority of the network.

What actually happened:

- **The threat of BIP-148 was credible.** Major exchanges, businesses, and node operators signaled intent to run it.
- **Miners blinked.** Before the August 1 deadline, miners agreed to activate [BIP-91](/glossary/bip-91), which forced SegWit signaling without splitting the chain. SegWit locked in soon after, activating in late August.
- **The chain didn't split (on Bitcoin's side).** The dispute did spawn Bitcoin Cash as a separate altcoin, but Bitcoin itself remained one chain.

The lesson: **nodes - not miners - are the ultimate authority on Bitcoin's rules.** Miners can refuse to signal, but they can't force the network to accept blocks that the economic majority of nodes will reject. BIP-148 established this principle in practice. It's been referenced in every subsequent activation discussion.
