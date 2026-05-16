---
title: "Lightning Channel Splicing"
slug: lightning-channel-splicing
draft: false
shortDefinition: "Modifying a channel's on-chain funds (increase/decrease capacity) without fully closing or reopening it."
keyTakeaways:
  - "Prevents channel closures when adjusting capacity"
  - "Saves on fees and maintains uninterrupted LN usage"
  - "Requires on-chain interaction but keeps off-chain states intact"
sources: []
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

Splicing arrived in production in 2024 (notably implemented in Phoenix and Core Lightning via the splicing-supported BOLT extension). Adoption is steadily growing.

What it enables:

- **Adjusting capacity dynamically.** Merchants who need more inbound liquidity during a busy period can splice-in. Users who want to withdraw to cold storage can splice-out without closing.
- **Better channel management.** Replace expensive "close and reopen" workflows with cheaper splice transactions.
- **Smoother onboarding.** A Lightning service provider can open a small channel for a new user and splice-in capacity later as they fund their wallet.

Splicing represents Lightning's gradual maturation from "channels are static once opened" to "channels are continuously-evolving long-lived relationships." That maturation is one of the under-discussed reasons Lightning UX has improved so much in 2024-2026.
