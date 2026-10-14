---
title: "HTLC (Hashed Time-Locked Contract)"
slug: htlc-hashed-time-locked-contract
draft: false
updated: "2026-10-13"
shortDefinition: "A mechanism requiring a secret (preimage) to unlock payment before a time lock expires, core to LN and atomic swaps."
keyTakeaways:
  - "Enables trust-minimized payment and swaps"
  - "Uses a hash puzzle + time lock for safe fallback"
  - "Foundation of LN's multi-hop payment logic"
sources:
  - { label: "BIP 199 - Hashed Time-Locked Contract transactions (2017)", url: "https://github.com/bitcoin/bips/blob/master/bip-0199.mediawiki" }
  - { label: "Bitcoin Optech - Hash Time Locked Contract (HTLC) topic (accessed 2026-10-13)", url: "https://bitcoinops.org/en/topics/htlc/" }
  - { label: "Joseph Poon and Thaddeus Dryja - The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments, section 4, Hashed Timelock Contract (2016)", url: "https://lightning.network/lightning-network-paper.pdf" }
  - { label: "Bitcoin Optech - Submarine swaps topic (accessed 2026-10-13)", url: "https://bitcoinops.org/en/topics/submarine-swaps/" }
  - { label: "Bitcoin Optech - Point Time Locked Contracts (PTLCs) topic (accessed 2026-10-13)", url: "https://bitcoinops.org/en/topics/ptlc/" }
  - { label: "Lightning Labs - Announcing our first Lightning mainnet release, lnd 0.4-beta (2018-03-15)", url: "https://lightning.engineering/posts/2018-03-15-lnd-beta/" }
relatedTerms:
  - atomic-multi-path-payment-amp
  - atomic-swap
  - atomic-swap-refill
  - bolt-11
  - bridge-node-lightning
  - checklocktimeverify-cltv
  - eltoo
  - escrow
  - escrowed-lightning-channel
  - fraud-proof
  - fraudulent-channel-close
  - griefing-attack
  - hash-puzzle
  - htlc-invoice
  - htlc-preimage-manager
  - lightning-channel
  - lightning-channel-splicing
  - lightning-network
  - lightning-payment
  - lightning-routing
  - payment-channel
  - payment-point
  - routing-node
  - submarine-swap
  - time-locked-contract
sameAs:
  - "https://en.bitcoin.it/wiki/Hash_Time_Locked_Contracts"
  - "https://bitcoinops.org/en/topics/htlc/"
liveWidget: ~
---

A Hashed Time-Locked Contract (HTLC) is a Bitcoin script that locks funds with two conditions: spendable by the intended receiver if they reveal a secret value (the **preimage** of a known hash) and sign with their own key, OR refundable to the sender if a time deadline passes without that secret being revealed. The signature check is not decoration. A revealed preimage says nothing about who should be paid, so without it anyone who saw the secret could claim the funds.

In script form, roughly:

```
IF hash(provided value) == target_hash AND signed by receiver THEN
  pay to receiver
ELSE IF current_time > deadline AND signed by sender THEN
  pay back to sender
END
```

This deceptively simple structure is the foundation of trustless multi-party Bitcoin protocols.

Why HTLCs are so useful:

- **[Lightning Network routing](/glossary/lightning-routing).** When you pay across multiple Lightning hops, each hop is bound by an HTLC. The receiver knows the secret. They claim from the previous hop by revealing it. That hop claims from the one before by passing on the same secret. Backward up the chain, every hop gets paid atomically as the secret propagates. Either the whole payment succeeds, or it all unwinds when the timeouts hit.
- **[Atomic swaps](/glossary/atomic-swap).** Two parties on different chains can swap coins without trusting each other. Each side locks funds in an HTLC. Whoever first reveals the secret claims their funds and exposes the secret, letting the other party claim theirs. If anyone bails, both refunds trigger at the deadline.
- **[Submarine swaps](/glossary/submarine-swap).** Swap on-chain BTC for Lightning BTC (or vice versa) through a swap provider. Both legs pay the same HTLC, so the provider cannot collect one side without releasing the other.

The "time-locked" part isn't optional. Without a deadline, funds could be stuck forever waiting for a secret that may never be revealed. The deadline ensures that *something* happens - either the payment completes (secret revealed) or it doesn't (refund triggers). Time itself becomes part of the security model.

HTLCs are the primitive that makes Bitcoin's layer-2 ecosystem trust-minimized rather than trust-based. The idea of a payment locked by a hash and limited by a clock goes back at least to forum posts from 2012, and every routed Lightning payment has depended on it since the first mainnet releases in 2018. A [routing node](/glossary/routing-node) can refuse to forward a payment, but it cannot take the money.

See [Payment Points](/glossary/payment-point) for the PTLC successor concept: same atomicity, same time-lock guarantees, but the hash-and-preimage lock is replaced by an elliptic-curve point and scalar. PTLCs can use less block space, and because every hop can use a different point, routing nodes can no longer match up the hops of one payment. Taproot brought the Schnorr signatures they need; Lightning still runs on HTLCs, and the move to PTLCs remains an open upgrade discussion.
