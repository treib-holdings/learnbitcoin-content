---
title: "Address Indexing"
slug: address-indexing
draft: false
shortDefinition: "A service or feature that tracks and organizes Bitcoin transactions by address, enabling fast lookups or block explorer queries."
keyTakeaways:
  - "Organizes transaction data by address"
  - "Not enabled by default in Bitcoin Core"
  - "Speeds up lookups but can affect privacy"
sources: []
relatedTerms:
  - address
  - address-clustering
  - address-derivation-path
  - address-reuse
  - transaction-index-txindex
liveWidget: ~
---

Address indexing is the practice of building and maintaining a database that maps each Bitcoin address to all the transactions that pay to or spend from it. Bitcoin Core doesn't do this by default; it's a feature provided by external services and a few specialized node forks.

Why Bitcoin Core skips it:

- **Privacy posture.** Address indexing makes it trivial to look up the entire history of any address. Bitcoin Core's wallet only tracks the addresses it owns; mass-address indexing is a tool for outside observers, not for self-custody users.
- **Resource cost.** A full address index would add tens of GB to disk usage and slow down initial block download.
- **Use cases are external.** Block explorers, chain analysis firms, and payment processors need it. Personal wallets don't.

Where address indexing lives:

- **Electrum servers** (Electrs by Romanz, ElectrumX by kyuupichan, Fulcrum by cculianu). Run alongside a Bitcoin Core full node, build their own address index, serve queries to Electrum-protocol clients (Sparrow, BlueWallet, Electrum desktop, etc.).
- **Public block explorers** (mempool.space, blockstream.info, mempool.observer, Bitaroo). Internally run address-indexed databases derived from a full node.
- **Chain analysis firms** (Chainalysis, Elliptic, TRM, CipherTrace). Address indexing is the entry-level capability; the real product is clustering heuristics that group addresses into entities.

The privacy implications:

- **For users**: any address you reuse exposes your full transaction history to anyone who can query an address index. This is structural; the protocol allows it. The defense is address rotation (using a fresh address per transaction, which HD wallets do automatically).
- **For self-hosters**: running your own Electrum server lets your wallet query address indexes without sharing your addresses with an external service. Sparrow + your own Electrs + your own Bitcoin Core = the modern privacy-respecting self-custody stack.

Address indexing is one of those features where the same capability serves wildly different masters. Useful for legitimate explorers and self-hosted wallets; foundational for surveillance. The honest framing is that it's a tool, and what matters is who runs it and against whom.
