---
title: "Griefing Attack"
slug: griefing-attack
draft: false
shortDefinition: "In the Lightning Network, a malicious node that routes payments but never finalizes them, locking up capacity and frustrating senders."
keyTakeaways:
  - "Locks channel capacity without providing a preimage"
  - "Doesn't yield direct profit but disrupts network liquidity"
  - "Workarounds include smaller HTLCs and payment splitting strategies"
sources: []
relatedTerms:
  - eavesdropping-attack
  - eclipse-attack
  - htlc-hashed-time-locked-contract
  - jamming-attack-ln
  - jammed-htlc-detector
  - race-attack
  - replay-attack
  - resource-exhaustion-attack
liveWidget: ~
---

A griefing attack is a Lightning Network attack where the attacker locks up channel capacity without profit, just to deny service to others. The attacker doesn't gain anything; the target loses operational capacity for the duration of the attack.

The mechanism is HTLC stalling. Lightning payments traverse multiple hops; each hop locks its outgoing channel's HTLC value (the payment amount plus a routing buffer) until the payment either completes (preimage revealed) or times out (CSV expiry).

The attacker's playbook:

1. Initiate a payment through the target's channels. The target's outbound liquidity gets locked in the HTLC.
2. Just before the timeout, fail to reveal the preimage (or simply let the payment time out).
3. The target's capacity was locked for the full HTLC window (typically 40-2016 blocks, hours to weeks) with no fee earned.
4. Repeat across many channels and many attackers, with the right routing, you can tie up significant network liquidity.

The variants:

- **Loop attack.** Send a payment to yourself through the longest possible route, tying up many hops' liquidity. The attacker pays no fees (the payment fails), but every hop holds the HTLC for the timeout window.
- **Jamming attack (BIP 119 territory).** A more sophisticated version where the attacker sends many simultaneous in-flight payments to fill up routing capacity.
- **Slow HTLC release.** Sit on the preimage just long enough to be maximally disruptive without timing out.

Mitigations the Lightning community has explored:

- **Reputation systems.** Penalize peers who repeatedly take long to release HTLCs.
- **Up-front fees / forwarding deposits.** Require a small fee to be paid up-front to discourage griefing economics.
- **Channel jamming detection.** Heuristics to identify and disconnect from griefing peers.
- **Smaller HTLC timeouts** with more granular routing decisions.
- **PTLCs.** Point Time-Locked Contracts replace HTLCs and have some properties that make griefing harder.

Griefing is a real but limited problem in 2026 Lightning. Active griefing campaigns happen periodically but don't fundamentally break the network. The defenses listed are incremental; no single fix has fully closed the attack vector.
