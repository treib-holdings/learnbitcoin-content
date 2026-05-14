---
title: "ZKCP (Zero-Knowledge Contingent Payment)"
slug: zkcp-zero-knowledge-contingent-payment
draft: false
shortDefinition: "A protocol letting a buyer pay for secret data only if it's correct, using zero-knowledge proofs to ensure fairness."
keyTakeaways:
  - "Leverages zero-knowledge proofs so data validity is provable before reveal"
  - "Prevents seller cheating (fake data) or buyer cheating (not paying after receiving data)"
  - "An example of advanced contract logic possible on top of Bitcoin"
sources: []
relatedTerms:
  - hash-puzzle
  - htlc-hashed-time-locked-contract
liveWidget: ~
---

A **Zero-Knowledge Contingent Payment** (ZKCP) is a Bitcoin-native protocol for trustlessly trading digital data for BTC. The mechanism, designed by Greg Maxwell in 2016 and demonstrated by Sean Bowe selling a zk-SNARK puzzle solution for 0.4 BTC the same year, lets a buyer pay for secret information only if the seller can cryptographically prove they have valid information.

How ZKCP works at a high level:

1. **Seller has data X** that the buyer wants.
2. **Seller encrypts X** with a random key `k`, producing `E_k(X)`. Seller sends the encrypted blob to the buyer.
3. **Seller produces a zero-knowledge proof** that `E_k(X)` decrypts with some specific key to data that matches a buyer-verifiable property (e.g., "the solution to this specific puzzle").
4. **Seller commits to `k` via a hash `H = hash(k)`.**
5. **Buyer constructs a Bitcoin payment** locked by an [HTLC](/glossary/htlc-hashed-time-locked-contract) that pays the seller if they reveal `k` (preimage of H), or refunds to buyer after a timeout.
6. **Seller reveals `k` to claim the payment.** Doing so on-chain publishes `k` to the world; the buyer reads it from the blockchain, uses it to decrypt `E_k(X)`, and now has the data.

What this achieves: the buyer either gets valid data or pays nothing. The seller either gets paid or doesn't reveal the key. Neither party can cheat. No third-party escrow is involved.

ZKCP is mostly proof-of-concept rather than widely deployed. The cryptographic infrastructure (zero-knowledge proofs for arbitrary statements) is heavyweight, and most digital-goods marketplaces use simpler trust models. But ZKCP is a foundational demonstration of how rich the contracts on top of Bitcoin can be without needing complex on-chain scripting - just standard HTLCs plus off-chain zero-knowledge proofs.

See [HTLC](/glossary/htlc-hashed-time-locked-contract) for the on-chain primitive ZKCP relies on, and [Scriptless Scripts](/glossary/scriptless-scripts) for related ideas using Schnorr-based contract encoding.
