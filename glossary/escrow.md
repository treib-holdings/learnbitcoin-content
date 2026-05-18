---
title: "Escrow"
slug: escrow
draft: false
shortDefinition: "Funds held by a neutral party or mechanism until certain conditions are fulfilled."
keyTakeaways:
  - "Protects both buyer and seller in uncertain transactions"
  - "Can use a third party or a multisig script"
  - "Reduces fraud risk by withholding payment until agreed conditions"
sources: []
relatedTerms:
  - clawback-mechanism
  - coin-freeze
  - counterparty-risk
  - custodial-wallet
  - escrowed-lightning-channel
  - htlc-hashed-time-locked-contract
  - payment-channel
  - zkcp-zero-knowledge-contingent-payment
liveWidget: ~
---

Escrow is the practice of holding funds in a neutral arrangement until specific conditions are met. In Bitcoin, escrow can be implemented either by trusting a third party (custodial escrow) or by using cryptographic primitives to make the escrow trustless (script-based or HTLC-based escrow).

The Bitcoin-native escrow patterns:

- **2-of-3 multisig.** Buyer, seller, and a trusted arbitrator each hold one key. Funds release with any two signatures. In the normal happy path, buyer + seller sign together to release to seller. If there's a dispute, the arbitrator takes a side. This is the canonical Bitcoin escrow setup; widely used in peer-to-peer Bitcoin trading platforms like Bisq and HodlHodl.
- **[HTLC-based escrow](/glossary/htlc-hashed-time-locked-contract).** Funds are released by revealing a preimage. The seller holds the preimage; they reveal it after delivering the goods. If they don't reveal it by a deadline, funds refund to the buyer. Used in [atomic swaps](/glossary/atomic-swap) and [submarine swaps](/glossary/submarine-swap).
- **[ZKCP](/glossary/zkcp-zero-knowledge-contingent-payment).** For trading digital data, where the seller proves cryptographically that they have what they claim before payment releases.
- **Time-locked escrow.** Funds release automatically to a specific party after a deadline if no other action is taken. Useful for deadlines and dead-man's-switch patterns.

Why script-based escrow beats trusted-party escrow:

- **No third party can run off with the money.** With a 2-of-3, the arbitrator only ever has 1 signature - never enough to spend alone.
- **No custodial liability.** The escrow agent never custodies the funds; they just hold a signing key.
- **Auditability.** The escrow conditions are on-chain script logic, not contract language interpreted by a court.
- **Lower cost.** No escrow-as-a-service fees beyond the small Bitcoin transaction fees.

Real-world Bitcoin escrow services in 2026: Bisq, HodlHodl, Robosats (Lightning-based), and various smaller peer-to-peer marketplaces. Most reputable Bitcoin trading happens through some form of trustless escrow rather than custodial intermediaries.

See [HTLC](/glossary/htlc-hashed-time-locked-contract) for the primitive underlying Lightning-based escrow and [Hierarchical Multisig](/glossary/hierarchical-multisig) for the multisig patterns underlying on-chain escrow.
