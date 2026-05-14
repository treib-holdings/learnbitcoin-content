---
title: "Airdrop (BTC Fork)"
slug: airdrop-btc-fork
draft: false
shortDefinition: "In Bitcoin forks, it's when BTC holders automatically receive new forked coins in a 1:1 ratio, mirroring their BTC balance."
keyTakeaways:
  - "A fork snapshot grants holders new coins"
  - "Key management and security are crucial"
  - "The new chain might or might not gain value"
sources: []
relatedTerms:
  - bitcoin-cash
  - fork
  - fork-detection
  - fork-watcher
liveWidget: ~
---

An airdrop in the Bitcoin-fork context is the automatic distribution of new forked coins to whoever held BTC at the moment of a chain split. The split creates two chains sharing identical pre-fork history, so the same private keys control balances on both chains.

The canonical example is the [Bitcoin Cash](/glossary/bitcoin-cash) fork on August 1, 2017 at block 478,558. Every BTC holder at that block height also became a holder of the same number of BCH on the new chain. The same private key controlled both. To claim, holders had to import their key (carefully) into BCH-compatible software and either spend the BCH or move it to a BCH-aware address.

Subsequent BTC-derived forks airdropped to BTC holders too: Bitcoin Gold (Oct 2017), Bitcoin Diamond (Nov 2017), SegWit2x's attempted but-aborted 2X fork (Nov 2017), Bitcoin Private (Mar 2018), and a long tail of mostly-failed attempts. Most of these are now worthless or near-worthless; a few (BCH) retain meaningful market value.

The risks of "claiming" airdropped coins:

- **Private-key exposure.** Importing your BTC seed into an unfamiliar fork wallet means trusting that wallet's code with the seed. Malicious fork wallets have stolen actual BTC by this vector.
- **Replay risk on chains without replay protection.** Spending fork coins could accidentally also spend BTC on the original chain. Modern forks usually include replay protection (see [replay-attack](/glossary/replay-attack)), but it's still worth checking.
- **Time and attention.** Most forks aren't worth claiming relative to the operational risk.

The safe procedure if you do claim: first move your BTC to a fresh wallet (so the original keys hold zero BTC, no replay risk), then use the original keys with the fork's tools to claim the fork coins, then dispose of those tools.

By 2026, BTC-fork airdrops have mostly stopped being a thing. The 2017-2018 wave was driven by the block-size-war fallout; subsequent forks haven't generated meaningful adoption or value, and the community moved on.
