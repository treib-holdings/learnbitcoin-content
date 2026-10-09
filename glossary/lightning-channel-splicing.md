---
title: "Lightning Channel Splicing"
slug: lightning-channel-splicing
draft: false
updated: "2026-10-09"
shortDefinition: "Modifying a channel's on-chain funds (increase/decrease capacity) without fully closing or reopening it."
keyTakeaways:
  - "Prevents channel closures when adjusting capacity"
  - "Saves on fees and maintains uninterrupted LN usage"
  - "Requires on-chain interaction but keeps off-chain states intact"
sources:
  - { label: "Bitcoin Optech - Splicing (eclair April 2023, Phoenix July 2023, Core Lightning experimental August 2023, LDK complete August 2025)", url: "https://bitcoinops.org/en/topics/splicing/" }
  - { label: "BOLTs PR #1160 - Channel Splicing (merged March 23, 2026)", url: "https://github.com/lightning/bolts/pull/1160" }
relatedTerms:
  - atomic-multi-path-payment-amp
  - bolt-11
  - bridge-node-lightning
  - churn-lightning
  - custodial-lightning-wallet
  - eltoo
  - escrowed-lightning-channel
  - fraudulent-channel-close
  - htlc-hashed-time-locked-contract
  - htlc-invoice
  - htlc-preimage-manager
  - inactive-channel
  - lightning-channel
  - lightning-channel-capacity
  - lightning-network
  - lightning-network-daemon-lnd
  - lightning-node
  - lightning-routing
  - payment-channel
  - wumbo-channels-lightning
sameAs:
  - "https://bitcoinops.org/en/topics/splicing/"
liveWidget: ~
---

Lightning channel splicing is the ability to add to or withdraw from a [Lightning channel](/glossary/lightning-channel)'s on-chain funding without closing and reopening it. Before splicing, the only way to change a channel's [capacity](/glossary/lightning-channel-capacity) was to close it, do an on-chain transaction, and open a new one - paying fees twice and losing the channel's accumulated routing history.

How it works at a high level:

1. The channel partners cooperatively sign a new on-chain transaction that **spends the existing funding output** and creates a new funding output with adjusted capacity. The old funding is consumed; the new one becomes the channel's anchor.
2. The off-chain state continues with the new capacity. Channel history, gossip-advertised metadata, and routing relationships are all preserved.
3. The original channel ID may or may not change depending on splice variant - more recent designs keep the same ID for continuity.

ACINQ added splicing to eclair in April 2023 and to its mobile wallet that July. Core Lightning followed with an experimental version in August 2023, LDK completed its support in August 2025, and splicing was merged into the Lightning specification in March 2026.

What it enables:

- **Adjusting capacity dynamically.** Merchants who need more inbound liquidity during a busy period can splice-in. Users who want to withdraw to cold storage can splice-out without closing.
- **Better channel management.** Replace expensive "close and reopen" workflows with cheaper splice transactions.
- **Smoother onboarding.** A Lightning service provider can open a small channel for a new user and splice-in capacity later as they fund their wallet.

Splicing represents Lightning's gradual maturation from "channels are static once opened" to "channels are continuously-evolving long-lived relationships."
