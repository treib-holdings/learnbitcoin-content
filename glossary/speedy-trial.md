---
title: "Speedy Trial"
slug: speedy-trial
draft: false
published: "2026-07-13"
shortDefinition: "The activation strategy used for Taproot in 2021: a three-month miner signaling window designed to either succeed quickly or fail quickly, with activation delayed to a fixed block height either way. It ended a months-long deadlock over how soft forks should activate."
keyTakeaways:
  - "Proposed by Russell O'Connor and written up by David Harding in March 2021 as a way out of the LOT=true versus LOT=false stalemate"
  - "Miners reached the 90 percent threshold on June 12, 2021, about six weeks into the three-month window; Taproot then waited until block 709,632 (November 14, 2021) to actually activate"
  - "Not a BIP itself - it is a deployment strategy, a modified BIP-9 with a minimum activation height, and it remains Bitcoin's most recent successful consensus activation"
sources:
  - { label: "bitcoin-dev mailing list - David Harding, Taproot activation proposal Speedy Trial (2021)", url: "https://www.mail-archive.com/bitcoin-dev@lists.linuxfoundation.org/msg09604.html" }
  - { label: "Bitcoin Core 0.21.1 release notes (2021)", url: "https://bitcoincore.org/en/releases/0.21.1/" }
  - { label: "Bitcoin Optech Newsletter #153 - Taproot locked in (2021)", url: "https://bitcoinops.org/en/newsletters/2021/06/16/" }
relatedTerms:
  - taproot
  - bip-9-versionbits
  - bip-8
  - bip-341
  - miner-signaling
  - soft-fork
liveWidget: ~
---

Speedy Trial is the strategy Bitcoin used to activate [Taproot](/glossary/taproot) in 2021, and the reason the upgrade happened calmly after months of deadlock.

The deadlock was about failure modes. After the block size war, nobody wanted a repeat of the SegWit stalemate, but the community split over [BIP-8](/glossary/bip-8)'s LOT flag: should a soft fork be guaranteed to activate even if miners stall (LOT=true), or should it be allowed to fail quietly (LOT=false)? Neither side had consensus, and the argument was consuming the developers.

Russell O'Connor proposed the way out on the activation IRC channel, and David Harding wrote it up and named it on the mailing list in March 2021. The idea was to stop trying to settle the philosophical question and run a short experiment instead. Give miners roughly three months to signal at a 90 percent threshold. If they signal, the fork locks in. If they do not, it fails, and the community can regroup and argue about stronger mechanisms with real data in hand. Either way the answer arrives quickly, which is where the name comes from.

The last piece was a minimum activation height. Even if miners locked Taproot in immediately, the rules would not take effect until block 709,632, months later, giving node operators plenty of time to upgrade. That delay separated whether miners would signal from whether the network was ready to enforce the new rules.

Technically, Speedy Trial is not a BIP. It is a deployment configuration, a modified [BIP-9](/glossary/bip-9-versionbits) with the lowered threshold and the added height floor, and its parameters live in [BIP-341](/glossary/bip-341)'s deployment section. It shipped in Bitcoin Core 0.21.1 on May 1, 2021. Signaling ran in whole difficulty periods starting at block 681,408, and on June 12, 2021 the 1,815th block of a period signaled, guaranteeing lock-in at that period's end, about six weeks into the window. Taproot then activated on schedule at block 709,632 on November 14, 2021.

As of 2026 it is still the most recent soft fork to activate on Bitcoin, which makes Speedy Trial the reference precedent in today's covenant activation debates. See [miner signaling](/glossary/miner-signaling) for the underlying mechanism.

See [The BIP Process](/rabbit-hole/bip-process) for the deadlock Speedy Trial resolved.
