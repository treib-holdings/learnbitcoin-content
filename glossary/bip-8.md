---
title: "BIP-8 (Version Bits with Lock-in by Height)"
slug: bip-8
draft: false
published: "2026-07-13"
shortDefinition: "A proposed soft-fork activation mechanism that measures deployment windows in block heights instead of timestamps and can guarantee activation through its lockinontimeout flag. Never used for a mainnet activation, but central to every activation debate since 2017."
keyTakeaways:
  - "Written by Shaolin Fry, the pseudonymous author of BIP-148, in February 2017, with Luke Dashjr as co-author through later revisions"
  - "The lockinontimeout (LOT) flag is the famous part: LOT=true requires miners to signal in the final period, guaranteeing the fork locks in; LOT=false lets it quietly fail"
  - "As of 2026 BIP-8 has never activated anything on mainnet - Taproot used the BIP-9-based Speedy Trial instead - but its 90 percent threshold and height-based thinking shaped that deployment"
sources:
  - { label: "BIP-8 specification (bitcoin/bips)", url: "https://github.com/bitcoin/bips/blob/master/bip-0008.mediawiki" }
  - { label: "Bitcoin Optech - Soft fork activation", url: "https://bitcoinops.org/en/topics/soft-fork-activation/" }
  - { label: "Bitcoin Optech Newsletter #137 - Taproot activation meetings (2021)", url: "https://bitcoinops.org/en/newsletters/2021/02/24/" }
relatedTerms:
  - bip-9-versionbits
  - bip-148-uasf
  - speedy-trial
  - miner-signaling
  - soft-fork
  - taproot
  - bip-bitcoin-improvement-proposal
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0008.mediawiki"
liveWidget: ~
---

BIP-8 is a proposed way to activate [soft forks](/glossary/soft-fork). It was created in February 2017 by Shaolin Fry, the same pseudonymous developer who wrote [BIP-148](/glossary/bip-148-uasf), with Luke Dashjr becoming co-author through later revisions. It fixes two complaints about [BIP-9](/glossary/bip-9-versionbits), the mechanism Bitcoin had been using.

The first fix is small: BIP-8 measures its deployment window in block heights instead of timestamps, because block timestamps are only loosely accurate and can be gamed by miners. The second fix is the one everybody argues about. BIP-9 deployments simply expire if miners never signal enough support, which hands miners a quiet veto, since stalling long enough kills the proposal. BIP-8 adds a flag called lockinontimeout, or LOT. With LOT=false, a deployment that never reaches its threshold fails, just like BIP-9. With LOT=true, blocks are required to signal during the final signaling period, so the fork is guaranteed to lock in by the deadline. Nodes running LOT=true reject non-signaling blocks in that last window, which is the [BIP-148](/glossary/bip-148-uasf) user-activated playbook turned into a reusable mechanism.

BIP-8 also recommends a signaling threshold of 90 percent (1,815 of 2,016 blocks per difficulty period), down from BIP-9's 95 percent.

The LOT flag turned into the central fight of the Taproot activation debate in early 2021. Community meetings agreed on almost everything, including the 90 percent threshold, but split on LOT=true versus LOT=false, with neither side able to claim consensus. Bitcoin Core ultimately sidestepped the question by shipping [Speedy Trial](/glossary/speedy-trial), a BIP-9-based deployment that borrowed BIP-8's threshold and added a height-based activation delay. A minority of node operators ran an alternative client that used BIP-8 with LOT=true as a backstop; it never had to enforce anything, because Speedy Trial succeeded first.

As of 2026, BIP-8 is still a draft and has never been used for a mainnet activation. Its influence is real anyway: every activation discussion since 2017, including the current covenant debates, is argued partly in BIP-8's vocabulary of guaranteed versus miner-dependent activation.

See [The BIP Process](/rabbit-hole/bip-process) for where BIP-8 fits in the activation story.
