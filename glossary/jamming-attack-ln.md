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

A jamming attack on the [Lightning Network](/glossary/lightning-network) is when an attacker deliberately ties up channel liquidity by initiating payments that are designed to fail at the last moment - tying up [HTLCs](/glossary/htlc-hashed-time-locked-contract) in pending state until they time out. The attacker doesn't lose money (the payment unwinds), but legitimate payments through those channels can't get through during the jam window.

The attack mechanics:

1. Attacker initiates a [Lightning payment](/glossary/lightning-payment) along a target route, using a fake or non-redeemable [payment hash](/glossary/htlc-invoice).
2. Each hop along the route locks the relevant channel capacity in a pending HTLC.
3. The payment can't complete (the receiver can't reveal a preimage they don't have).
4. The HTLCs remain locked until their timeout expires - typically tens of minutes to hours.
5. During the lockup, legitimate users trying to route through those channels see "insufficient capacity" failures.

There are variants:

- **Slow jamming.** Use many small HTLCs to exhaust a channel's *HTLC count* limit (typically 483 in-flight HTLCs per channel direction). Channels reach capacity in HTLC slots rather than in BTC.
- **Quick jamming.** Use larger HTLCs to exhaust the BTC capacity.
- **Targeted jamming.** Attack specific routes to disrupt competitors or extract some other operational advantage.

Defenses being researched and deployed:

- **Upfront fees.** Make routing attempts cost something (small but non-zero) so jamming has real cost. Discussed in the LN community for years; deployment is gradual.
- **Reputation systems.** Nodes track peers that frequently initiate non-completing payments and degrade or drop those connections.
- **Channel jamming detectors.** Real-time monitoring of HTLC patterns to identify likely attacks. See [Jammed HTLC Detector](/glossary/jammed-htlc-detector).

Jamming is one of the open security problems in Lightning. Not theoretical - it has been observed in the wild - but also not catastrophic. The defenses are improving. The protocol is being hardened. The cat-and-mouse continues.
