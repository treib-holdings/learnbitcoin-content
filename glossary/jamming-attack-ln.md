---
title: "Jamming Attack (LN)"
slug: jamming-attack-ln
draft: false
shortDefinition: "A malicious act of locking up LN channel liquidity with pending HTLCs that never finalize, hindering normal routing."
keyTakeaways:
  - "Maliciously blocks LN channels by holding HTLCs in limbo"
  - "Undermines payment routing capacity for honest users"
  - "Strategies like upfront fees or heuristics aim to reduce jamming"
sources: []
relatedTerms:
  - eavesdropping-attack
  - griefing-attack
  - htlc-hashed-time-locked-contract
  - hybrid-mining
  - jammed-htlc-detector
  - lightning-network
  - lightning-payment
  - lightning-routing
  - lightning-sphinx
  - race-attack
  - replay-attack
liveWidget: ~
---

Jamming occurs when an attacker floods a route with HTLCs that remain stuck, effectively 'congesting' the channel's capacity. These payments aren't settled or timed out promptly, so legitimate payments can't proceed. While not financially profitable for the jammer, it disrupts the network. Proposals to mitigate jamming include imposing upfront fees or requiring proof-of-payment intent. LN nodes also track suspicious behavior, flagging peers that consistently route non-finalizing HTLCs. As LN scales, preventing channel jamming remains an active area of research.
