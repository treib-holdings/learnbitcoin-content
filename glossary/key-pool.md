---
title: "Key Pool"
slug: key-pool
draft: false
shortDefinition: "A cache of pre-generated addresses (and keys) in Bitcoin Core wallets to avoid address reuse and speed new address creation."
keyTakeaways:
  - "Ensures unique addresses without generating them on demand"
  - "Prevents inadvertent address reuse affecting privacy"
  - "Part of older or internal wallet logic, now usually hidden by HD frameworks"
sources: []
relatedTerms: []
liveWidget: ~
---

The key pool is a Bitcoin Core wallet implementation detail: a cache of pre-generated keys (and addresses) so that fresh addresses are instantly available without on-demand key generation, and so backups remain valid across some window of address creation.

In the original legacy (non-HD) wallets, the key pool was load-bearing. Each generated key was independent random data; if the user requested addresses faster than the wallet backed itself up, the backup could become stale and addresses created after the backup wouldn't be recoverable. The pool (default 100 keys) was a buffer: as long as you backed up after the pool was generated, you were covered for the next 100 addresses.

After HD wallet support landed in Bitcoin Core 0.13 (2016), the keypool concept became less load-bearing. HD derivation lets the wallet generate any future address deterministically from the seed, so backup is just "back up the seed." But the keypool is still maintained internally so addresses are pre-generated and so the wallet keeps a derivation window for gap-limit scanning (the standard convention is that addresses beyond 20 unused derivations don't get scanned).

In 2026, Bitcoin Core's descriptor wallets handle this through descriptor ranges instead of an opaque "keypool," but the underlying idea is the same. For users, it's invisible. Wallets just produce fresh addresses on demand, and backup is one seed phrase. The keypool plumbing is one of those things that makes "just use the wallet" work.
