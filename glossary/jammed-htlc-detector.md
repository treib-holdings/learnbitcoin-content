---
title: "Jammed HTLC Detector"
slug: jammed-htlc-detector
draft: false
shortDefinition: "A tool or node feature that identifies ongoing LN channel jamming, letting operators take remedial actions."
keyTakeaways:
  - "Monitors HTLC activity for suspicious patterns"
  - "Helps LN nodes fight against channel congestion attacks"
  - "Might trigger channel closures or peer blacklisting as countermeasures"
sources: []
relatedTerms:
  - eavesdropping-attack
  - htlc-preimage-manager
  - jamming-attack-ln
  - lightning-network
  - lightning-payment
  - lightning-routing
  - lightning-sphinx
liveWidget: ~
---

A jammed HTLC detector is a node-side mechanism that watches for patterns suggestive of a [Lightning jamming attack](/glossary/jamming-attack-ln) and takes defensive action - typically flagging the offending peer, throttling future routing requests from them, or in extreme cases force-closing the channel.

What detectors actually look for:

- **High HTLC slot usage** by a single peer without successful settlements.
- **Many small HTLCs** initiated in rapid succession - the slot-exhaustion variant of jamming.
- **Long-duration pending HTLCs** that don't make progress.
- **Failure-rate spikes** on specific routes or peers.
- **Asymmetric in/out patterns** suggesting deliberate liquidity tie-up.

Modern Lightning implementations include various heuristics. LND's "circuit breaker" pattern, Core Lightning's plugin-based monitoring, and third-party tools like Charge-LND can all be configured to detect and respond to jamming-like patterns.

The hard problem: distinguishing actual jamming from honest patterns like:

- A wallet retrying a payment with exponential backoff.
- Multi-path payments (AMP) that touch many channels with small HTLCs.
- Probe traffic from honest [route probing](/glossary/lightning-probe).
- General payment failure during congested moments.

False positives - blocking honest payments while trying to defend against jamming - is the real cost of aggressive detection. Detection logic has to be conservative enough to not break Lightning's UX for legitimate users.

As Lightning matures, detectors are getting more sophisticated and more standardized. They're part of the answer to jamming, not the whole answer; the full solution likely combines detection with upfront fees and reputation systems.
