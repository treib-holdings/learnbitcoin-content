---
title: "Payment Point"
slug: payment-point
draft: false
shortDefinition: "In LN, the public key derived from a payment's secret hash preimage; the receiver must reveal that preimage to claim funds."
keyTakeaways:
  - "Ties to LN's hashed timelock contracts (HTLCs)"
  - "Receiver claims payment by revealing preimage of the hashed secret"
  - "Ensures route-level security without revealing the entire payment path"
sources: []
relatedTerms: []
liveWidget: ~
---

A payment point is the public-key form of a Lightning payment secret, used as the cryptographic anchor in PTLC (Point Time-Locked Contract) payment routing instead of the hash of a preimage.

The classical Lightning construction uses HTLCs: each hop holds funds that can be claimed by revealing a preimage `r` such that `SHA256(r) = h`. The hash `h` is the same across the entire route, so a network observer who sees the preimage revealed at one hop can correlate it with revelations at other hops, linking the path. PTLCs fix this.

PTLCs use a payment point `P = r * G` (where `G` is the curve generator). The sender constructs the route so each hop sees a different shifted point (`P + t_i * G` for some shift `t_i`). The final recipient reveals `r` (the discrete log of `P`); each forwarding hop subtracts its shift and uses the resulting scalar to claim its incoming HTLC. Each hop sees a different point on the curve, so external observers correlating points across hops see nothing useful.

What PTLCs unlock once they ship:

- **Stronger routing privacy.** Observers can no longer trivially link hops via shared payment hashes.
- **Async / spontaneous payments** (LN-keysend equivalents) with better properties.
- **Atomic Multi-Path payments without correlation.** Each path uses a different point; observers can't tell the parts belong to one payment.
- **Statless invoices and other advanced constructions** built on the more flexible cryptographic primitive.

The dependency is Schnorr signatures (BIP 340), which Taproot deployed in 2021. PTLC mechanics are designed and specified, but production Lightning implementations are still rolling them out. As of 2026 most real Lightning payments still go over HTLCs. PTLCs are coming.
