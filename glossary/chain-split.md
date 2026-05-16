---
title: "Chain Split"
slug: chain-split
draft: false
shortDefinition: "Occurs when conflicting consensus rules lead the blockchain to diverge into two incompatible chains."
keyTakeaways:
  - "Results in two blockchains with shared history but different rules"
  - "Can be intentional (hard forks) or accidental (software conflicts)"
  - "Users end up with coins on both chains if they controlled keys"
sources: []
relatedTerms:
  - airdrop-btc-fork
  - bitcoin-cash
  - chain-flag-day
  - fork
  - fork-detection
  - fork-watcher
  - reorg-reorganization
sameAs:
  - "https://en.wikipedia.org/wiki/Fork_(blockchain)"
  - "https://www.wikidata.org/wiki/Q48893562"
  - "https://en.wikipedia.org/wiki/Bitcoin_Cash"
liveWidget: ~
---

A chain split happens when Bitcoin's network diverges into two persistent, separately-valid chains - either accidentally (because of a software bug) or deliberately (because of a contentious [hard fork](/glossary/fork)).

Once split, each chain proceeds with its own blocks, its own miners, and its own followers. Coins that existed before the split duplicate: holders end up with one balance on each chain, controlled by the same [private keys](/glossary/private-key). The chains never reconcile.

Notable chain splits in Bitcoin's history:

- **Bitcoin Cash (BCH) - August 2017.** The big one. The "scaling wars" of 2015-2017 culminated in BCH forking off Bitcoin with larger blocks but no [SegWit](/glossary/segwit-segregated-witness-bip-141). Today BCH still exists as a separate, much smaller network.
- **Bitcoin SV (BSV) - November 2018.** A fork from BCH, not Bitcoin. Even smaller; even further from relevance.
- **March 2013 (accidental).** A subtle database difference between Bitcoin v0.7 and v0.8 caused a 24-block accidental fork. Resolved within hours by miners coordinating to roll back to v0.7-compatible behavior. The only "consensus bug" chain split in Bitcoin's history.

What the BCH split clarified: when there's a contentious hard fork, the market decides which chain is "Bitcoin." Both technical and economic factors matter, but in practice the chain with the original ticker symbol, exchange listings, brand association, and developer mindshare retains the "Bitcoin" name and most of the value. The fork chain rebrands and trades as a separate asset, typically at a fraction of Bitcoin's value.

If a chain split were ever to happen again, holders of the pre-split chain would have coins on both sides, but the two chains' markets would price them very differently. This pattern is a meaningful structural defense against changes nobody really wants: the threat of "rebrand as an altcoin" keeps protocol changes conservative.
