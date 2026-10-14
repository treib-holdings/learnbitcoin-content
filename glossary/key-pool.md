---
title: "Key Pool"
slug: key-pool
draft: false
updated: "2026-10-15"
shortDefinition: "A cache of pre-generated keys (and addresses) in Bitcoin Core wallets, so fresh addresses are instantly available and a backup stays valid for the next batch of them."
keyTakeaways:
  - "Ensures unique addresses without generating them on demand"
  - "Keeps a backup valid for addresses handed out after it was made"
  - "Part of older or internal wallet logic, now usually hidden by HD frameworks"
sources:
  - { label: "BIP-32 - Hierarchical Deterministic Wallets: the reference client caches (by default) 100 keys in a pool of reserve keys to avoid a backup after every transaction; nodes can keep a pool of N look-ahead keys to watch for incoming payments (2012)", url: "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" }
  - { label: "Bitcoin Core - 0.13.0 release notes: newly created wallets use hierarchical deterministic key generation per BIP 32; backups of HD wallets can re-generate all possible private keys, even ones not yet generated at the time of the backup (23 August 2016)", url: "https://bitcoincore.org/en/releases/0.13.0/" }
  - { label: "Bitcoin Core - 0.15.0 release notes: the default keypool increased to 1000 keys to make recovery more robust (14 September 2017)", url: "https://bitcoincore.org/en/releases/0.15.0/" }
  - { label: "BIP-44 - Multi-Account Hierarchy for Deterministic Wallets: address gap limit is currently set to 20 (2014)", url: "https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki" }
  - { label: "Bitcoin Core - doc/descriptors.md: ranged descriptors cover child keys in a configurable range, by default 0-1000 (accessed 2026-10-14)", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/descriptors.md" }
  - { label: "Bitcoin Core - 30.0 release notes: BDB legacy wallets can no longer be created or loaded and can be migrated to the descriptor wallet format (10 October 2025)", url: "https://bitcoincore.org/en/releases/30.0/" }
relatedTerms:
  - bitcoin-core
  - hd-wallet-hierarchical-deterministic-wallet
  - hierarchical-deterministic-wallet
  - output-descriptor
liveWidget: ~
---

The key pool is a Bitcoin Core wallet implementation detail: a cache of pre-generated keys (and addresses) so that fresh addresses are instantly available without on-demand key generation, and so backups remain valid across some window of address creation.

In the original legacy (non-HD) wallets, the key pool was load-bearing. Each generated key was independent random data; if the user requested addresses faster than the wallet backed itself up, the backup could become stale and addresses created after the backup wouldn't be recoverable. The pool (default 100 keys) was a buffer: as long as you backed up after the pool was generated, you were covered for the next 100 addresses.

After HD wallet support landed in Bitcoin Core 0.13.0 (2016), the keypool became less load-bearing. HD derivation lets the wallet regenerate any future key from the seed, so a backup made at any time covers keys that did not exist yet. But the keypool stayed, for two reasons. Addresses are still pre-generated. And the pool doubles as a lookahead window: a restored backup only notices payments to keys it has already derived, so Bitcoin Core raised the default from 100 to 1,000 keys in 0.15.0 (2017) to make recovery more robust. Other HD wallets use a much smaller window, the [BIP 44](/glossary/bip-44) [gap limit](/glossary/gap-limit): a recovering wallet stops scanning after 20 unused addresses in a row.

Bitcoin Core's descriptor wallets, the only kind since 30.0 (2025) dropped legacy wallets, keep the same idea in a different shape: each [output descriptor](/glossary/output-descriptor) covers a range of keys, 0 to 1,000 by default, and the wallet derives ahead within it. For users, it's invisible. Wallets just produce fresh addresses on demand, and backup is one seed phrase. The keypool plumbing is one of those things that makes "just use the wallet" work.
