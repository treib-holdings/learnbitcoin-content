---
title: "Chain Split"
slug: chain-split
draft: false
updated: "2026-10-13"
shortDefinition: "Occurs when conflicting consensus rules lead the blockchain to diverge into two incompatible chains."
keyTakeaways:
  - "Results in two blockchains with shared history but different rules"
  - "Can be intentional (hard forks) or accidental (software conflicts)"
  - "Users end up with coins on both chains if they controlled keys"
sources:
  - { label: "BIP 50 - March 2013 Chain Fork Post-Mortem (Gavin Andresen, 2013; 0.8 swapped Berkeley DB for LevelDB, older nodes hit the BDB lock limit, the 0.8 chain held about 60% of the hash power, and BTCGuild and Slush downgraded to 0.7 to end the split)", url: "https://github.com/bitcoin/bips/blob/master/bip-0050.mediawiki" }
  - { label: "bitcoin.org - 11/12 March 2013 Chain Fork Information (the notice as updated 16 May 2013)", url: "https://bitcoin.org/en/alert/2013-03-11-chain-fork" }
  - { label: "mempool.space - block 225,455 (06:20 UTC, 12 March 2013), where the chain every version could follow overtook the abandoned 25-block chain", url: "https://mempool.space/block/000000000000016924f85069603be8164578eedf113f44d60bf0438cba047c7f" }
  - { label: "Bitcoin Cash - UAHF technical specification (GitHub, 2017; activation at Unix time 1501590000, 1 August 2017 12:20 UTC; the fork block must exceed 1 MB; blocks of at least 8 MB; signature digest revised for a non-SegWit deployment)", url: "https://github.com/bitcoincashorg/bitcoincash.org/blob/master/spec/uahf-technical-spec.md" }
  - { label: "Bitcoin SV - release 0.1.0 notes (GitHub, October 2018; support for the November 2018 upgrade that split it from Bitcoin Cash, 128 MB blocks)", url: "https://github.com/bitcoin-sv/bitcoin-sv/releases/tag/v0.1.0" }
  - { label: "Blockchair - Bitcoin Cash chain stats (JSON; 13 October 2026: 24-hour hash rate 3.2 EH/s against 1,069 EH/s on the matching Bitcoin endpoint, api.blockchair.com/bitcoin/stats)", url: "https://api.blockchair.com/bitcoin-cash/stats" }
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

Once split, each chain proceeds with its own blocks, its own miners, and its own followers. Coins that existed before the split duplicate: holders end up with one balance on each chain, controlled by the same [private keys](/glossary/private-key). A deliberate split is meant to be permanent; an accidental one can heal, as 2013 showed.

Notable chain splits in Bitcoin's history:

- **[Bitcoin Cash](/glossary/bitcoin-cash) (BCH) - August 2017.** The big one. The [block size war](/glossary/block-size-war) of 2015-2017 culminated in BCH forking off Bitcoin on 1 August 2017 with 8 MB blocks and no [SegWit](/glossary/segwit-segregated-witness-bip-141). Today BCH still exists as a separate network with a few tenths of a percent of Bitcoin's hash rate.
- **[Bitcoin SV](/glossary/bitcoin-sv-bsv) (BSV) - November 2018.** A fork from BCH, not Bitcoin, with 128 MB blocks. Two forks removed from Bitcoin, and further still from relevance.
- **March 2013 (accidental, and it healed).** Version 0.8 replaced the database under the node software and, without anyone knowing, removed a limit that older versions had been enforcing. One large block split old nodes from new for 7 hours 41 minutes. Miners with most of the hash power then abandoned their own 25-block chain so that the chain older nodes could follow would overtake it. Unlike the two splits above, this one reconciled. The log of that night is in [The 2013 Chain Fork](/rabbit-hole/2013-chain-fork).

What the BCH split clarified: when there's a contentious hard fork, the market decides which chain is "Bitcoin." Both technical and economic factors matter, but in practice the chain with the original ticker symbol, exchange listings, brand association, and developer mindshare retains the "Bitcoin" name and most of the value. The fork chain rebrands and trades as a separate asset, typically at a fraction of Bitcoin's value.

If a chain split were ever to happen again, holders of the pre-split chain would have coins on both sides, but the two chains' markets would price them very differently. This pattern is a meaningful structural defense against changes nobody really wants: the threat of "rebrand as an altcoin" keeps protocol changes conservative.
