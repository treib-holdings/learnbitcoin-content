---
title: "Merged Mining"
slug: merged-mining
draft: false
shortDefinition: "Simultaneously mining two PoW blockchains (e.g., Bitcoin + Namecoin) using the same hash algorithm."
keyTakeaways:
  - "Allows miners to reuse hashes for multiple SHA-256 coins"
  - "Helps smaller chains share security from Bitcoin's hashing power"
  - "Requires support in node software for both blockchains"
sources: []
relatedTerms:
  - hash
  - miner
  - mining-pool
  - mining-algorithm
  - mining-colocation
  - mining-software
  - retail-mining
liveWidget: ~
---

Merged mining lets a miner produce valid proof-of-work for two (or more) SHA-256 blockchains simultaneously, without doing extra hashing. The miner's work nonce satisfies both chains' difficulty requirements; if it does, both chains get a new block from the same effort.

The canonical example is Bitcoin + Namecoin, set up in 2011 when Namecoin's hash rate was too low to be secure on its own. Namecoin's block-header validation accepts a Bitcoin coinbase transaction as proof of work (encoded with a commitment to the Namecoin block), letting Bitcoin miners mine Namecoin essentially for free.

How the mechanics work:

1. The miner constructs a Namecoin block (with its own transactions, merkle root, etc.).
2. The miner includes a commitment to the Namecoin block's hash inside their Bitcoin coinbase transaction.
3. The miner hashes the Bitcoin block header normally.
4. If the resulting hash meets *Bitcoin's* difficulty, they win a Bitcoin block. If it also meets *Namecoin's* (lower) difficulty, they win a Namecoin block too.
5. The Namecoin block is constructed with a proof showing the Bitcoin coinbase committed to it, and Namecoin validators accept it.

Other merged-mined chains over Bitcoin's history: Namecoin, Devcoin, Ixcoin, Rootstock (RSK), Syscoin. All are smaller chains that benefit from Bitcoin's enormous hash rate without competing for it.

What merged mining buys you:

- **Hash rate for free**, from the perspective of the smaller chain.
- **Higher security floor** for the smaller chain (now requires attacking a fraction of Bitcoin's hash rather than just its own).
- **Optional revenue for Bitcoin miners** who choose to include the commitment, if the smaller chain's rewards are worth claiming.

What it doesn't fix:

- The smaller chain still has its own consensus rules, validators, and trust model.
- Bitcoin miners aren't *required* to merge-mine; if they collectively decided to stop, the smaller chain's security would drop.
- The smaller chain inherits some Bitcoin-mining concentration risks at the level of pool operators.

Merged mining is an interesting technical trick but mostly a footnote in Bitcoin's own story. It matters more for the chains that depend on Bitcoin's hash than for Bitcoin itself.
