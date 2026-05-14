---
title: "Bitcoin Cash"
slug: bitcoin-cash
draft: false
shortDefinition: "A 2017 Bitcoin hard fork increasing the block size limit, diverging from SegWit-based upgrades."
keyTakeaways:
  - "Forked from Bitcoin to enable larger on-chain blocks"
  - "Adopts a different scaling philosophy than BTC"
  - "Sparked ongoing debates about decentralization vs. throughput"
sources: []
relatedTerms:
  - airdrop-btc-fork
  - altcoin
  - bitcoin-core
  - fork
  - fork-detection
  - fork-watcher
liveWidget: ~
---

Bitcoin Cash (BCH) is the hard-fork chain that split from Bitcoin on August 1, 2017 at block height 478,558. It carried forward Bitcoin's pre-fork transaction history and balances - everyone who held BTC at that block also held an equivalent amount of BCH afterward - but diverged in consensus rules immediately.

The split was the final act of the 2015-2017 block size war. Bitcoin (BTC) activated SegWit (BIP 141) as a soft fork; the big-block faction rejected SegWit and forked off to a chain that lifted the block size cap (initially 8 MB, later raised to 32 MB) without SegWit. Both chains continue to exist today; both call themselves the "real Bitcoin" by some definition, but the market has long since picked sides.

The differences in 2026:

- **Hash rate.** BTC carries the overwhelming majority of network hash. BCH has its own (much smaller) mining ecosystem.
- **Block size and content.** BCH allows 32 MB blocks; BTC's effective limit remains around 4M weight units. In practice, neither chain typically hits its block cap; both have plenty of unused on-chain capacity at current demand.
- **Scaling strategy.** BCH continues to bet on bigger on-chain blocks. BTC bet on SegWit + Lightning + Taproot. The Lightning Network has grown into a real payment rail; BCH has experimented with various on-chain payment schemes (CashFusion, SLP tokens, etc).
- **Fork history.** BCH itself split in November 2018 into Bitcoin Cash ABC (now just BCH) and Bitcoin SV. Bitcoin SV later forked again. Each fork has fewer users and less hash than the parent.

The 2017 dispute was substantive: real disagreements about scaling, decentralization, and protocol direction, with reasonable engineers and economists on each side. The outcome is what it is. BTC retains the dominant position by hash rate, market cap, developer mindshare, and ecosystem depth.

On this site, "Bitcoin" without qualification means BTC. Bitcoin Cash is a separate network with its own community and engineering choices; we cover it as relevant history rather than as a peer chain.
