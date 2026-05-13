---
title: "Lightning Probe"
slug: lightning-probe
draft: false
shortDefinition: "A test payment that intentionally fails on the final hop, used to check LN route capacity or node responsiveness."
keyTakeaways:
  - "Checks channel liquidity and node availability along a path"
  - "Fails intentionally at the last hop, avoiding a real payment"
  - "Used for LN reliability checks but can add minor network overhead"
sources: []
relatedTerms:
  - custodial-lightning-wallet
  - lightning-network
  - lightning-node
  - lightning-payment
  - lightning-routing
  - lightning-sphinx
liveWidget: ~
---

A Lightning probe is a test payment sent along a candidate [route](/glossary/lightning-routing) before committing a real payment. Probes deliberately fail at the final hop (typically by using a random payment hash the receiver can't resolve), letting the sender learn whether the route has enough liquidity without actually moving real funds.

Why probing exists: Lightning's gossip layer tells you channels exist and their *total* capacity, but not their *current balance distribution*. A 1 BTC channel might have all the liquidity on one side, making it useless for routing in the other direction. Probing is how you discover the hidden balance state.

How probes work:

1. Sender picks a candidate route through the gossip graph.
2. Sender sends an HTLC along that route with a random (un-revealable) payment hash.
3. Each hop locks liquidity for the HTLC, then forwards.
4. If the route has insufficient liquidity somewhere, the relevant hop returns a failure. The sender learns where the route broke.
5. If the route has enough liquidity all the way to the final hop, the final hop tries to resolve the payment hash and fails (because the hash is random). The HTLC unwinds.

What probing buys: knowledge about route viability without risking real funds. Useful for:

- **Wallets testing large payment paths** before committing.
- **Routing analytics services** mapping liquidity across the network.
- **Routing node operators** assessing the health of their channel network.

What probing costs:

- **Time.** Each probe is a multi-hop round trip; not free.
- **Network load.** Probes consume hops' channel slots temporarily.
- **Privacy.** Heavy probing reveals what routes you're considering.
- **Looks like jamming.** Excessive probing can trigger [jamming detectors](/glossary/jammed-htlc-detector) on the hops you're testing. Defensive nodes might throttle you.

Modern Lightning wallets use minimal automatic probing - typically just enough to validate the first candidate route before sending. Aggressive probing is mostly a research/analytics tool, not an everyday user behavior.
