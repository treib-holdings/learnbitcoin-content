---
title: "Gap Limit"
slug: gap-limit
draft: false
published: "2026-10-12"
shortDefinition: "The number of unused addresses in a row a wallet will check before it decides there is nothing further to find. BIP-44 sets it at 20; Bitcoin Core keeps 1,000 keys ahead instead. It is the one real limit on handing out a fresh address every time, and it only bites when addresses are created and never paid."
keyTakeaways:
  - "BIP-44: 'If the software hits 20 unused addresses in a row, it expects there are no used addresses beyond this point and stops searching the address chain'; wallets are told to warn a user who tries to generate past it"
  - "Bitcoin Core does not use a gap limit of 20; its keypool has kept 1,000 keys ahead since 0.15.0 (2017), raised from 100 'to make recovery more robust'"
  - "The limit bites when many addresses are minted and never paid, such as a server that creates an address on every page view; it is an argument for one address per invoice, not for reusing one"
sources:
  - { label: "BIP-44 - Multi-Account Hierarchy for Deterministic Wallets (Address gap limit)", url: "https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki" }
  - { label: "Electrum documentation - FAQ (What is the gap limit?)", url: "https://electrum.readthedocs.io/en/latest/faq.html" }
  - { label: "Bitcoin Core 0.15.0 release notes (default keypool raised to 1,000)", url: "https://bitcoincore.org/en/releases/0.15.0/" }
  - { label: "Bitcoin Core PR #10831 - Batch flushing operations to the walletdb during top up and increase keypool size (merged 2017-07-17)", url: "https://github.com/bitcoin/bitcoin/pull/10831" }
  - { label: "BIP-32 - Hierarchical Deterministic Wallets (Motivation: the 100-key reserve pool)", url: "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" }
relatedTerms:
  - bip-44
  - bip-32
  - key-pool
  - hd-wallet-hierarchical-deterministic-wallet
  - address-derivation-path
  - address-reuse
  - seed-phrase
  - xpub-extended-public-key
  - watch-only-wallet
  - change-output
liveWidget: ~
---

A gap limit is a wallet's stopping rule. An [HD wallet](/glossary/hd-wallet-hierarchical-deterministic-wallet) can derive an endless sequence of addresses from one seed, so when it restores from that seed it has to decide how far down the sequence to look for coins. It walks the chain of receiving addresses, checks each against the blockchain, and stops after a run of unused addresses long enough to conclude that nothing lies beyond.

[BIP-44](/glossary/bip-44) fixes the run at 20: "Address gap limit is currently set to 20. If the software hits 20 unused addresses in a row, it expects there are no used addresses beyond this point and stops searching the address chain." Only the receiving chain is scanned; as the BIP puts it, "internal chains receive only coins that come from the associated external chains", so once the external addresses are found the change follows. The BIP also tells wallet authors what to do when a user keeps minting addresses: "Wallet software should warn when the user is trying to exceed the gap limit on an external chain by generating a new address."

Electrum's FAQ states the consequence plainly: "Addresses beyond the gap limit will not automatically be recovered from the seed." The coins are not lost; the keys still derive from the seed. The restored wallet stops looking before it reaches them until the user raises the limit.

Bitcoin Core works differently. It keeps a [key pool](/glossary/key-pool) of addresses derived ahead of time, and a restore finds anything paid to any of them, so in effect its gap is the size of the pool. The original client kept 100 keys in reserve, as [BIP-32](/glossary/bip-32) puts it, "In order to avoid the necessity for a backup after every transaction". Release 0.15.0 (2017) raised the number: "Part of this speedup was used to increase the default keypool to 1000 keys to make recovery more robust" (PR #10831). Core's descriptor wallets still keep 1,000 ahead per descriptor.

Why it matters for fresh-address practice: the gap limit is the only real cost of using every address once, and it only bites when addresses are created and never paid. Hand out one address per person who owes you money and you will never get near 20 unpaid in a row. The case that does hit it is a server that mints an address on every page view, since most views never turn into a payment; a wallet restored from the same seed later under-reports until its limit is raised. That is an argument for one address per invoice, not for reusing one. [Address reuse](/glossary/address-reuse) costs privacy and, after the first spend, key security. Running out of gap costs a settings change.
