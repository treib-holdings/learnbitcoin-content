---
title: "Atomic Swap"
slug: atomic-swap
draft: false
shortDefinition: "A trustless way for two parties to exchange different cryptocurrencies without using a centralized exchange."
keyTakeaways:
  - "Uses hashed timelock contracts to enable trustless trading"
  - "Removes reliance on centralized exchanges"
  - "Requires some technical setup and compatible blockchain features"
sources: []
relatedTerms:
  - atomic-multi-path-payment-amp
  - atomic-swap-refill
  - htlc-hashed-time-locked-contract
  - payjoin
  - submarine-swap
liveWidget: ~
---

An atomic swap is a trustless cross-chain or cross-layer trade. Two parties exchange tokens on different chains (or one on-chain and one Lightning) without ever giving up custody to a third party. Either both sides of the trade happen, or neither side does. There's no "I sent mine, but you didn't send yours" failure mode.

The mechanism is a paired [HTLC](/glossary/htlc-hashed-time-locked-contract):

1. **Alice picks a random secret** `s` and computes `hash(s)`. She publishes only the hash.
2. **Alice locks her funds** in an HTLC on chain A: "Bob can claim if he reveals `s`; otherwise Alice refunds after 24 hours."
3. **Bob locks his funds** in an HTLC on chain B: "Alice can claim if she reveals `s`; otherwise Bob refunds after 12 hours" (shorter timeout intentionally, so Bob isn't left exposed).
4. **Alice claims Bob's funds** by revealing `s`. This unavoidably publishes `s` on chain B.
5. **Bob sees `s`**, uses it to claim Alice's funds on chain A.

If anyone bails at any step, the HTLCs time out and refund automatically. The trade either completes atomically or unwinds atomically. No counterparty risk for either party.

Practical uses:

- **BTC ↔ BTC across layers.** Swap on-chain BTC for Lightning BTC and vice versa - see [submarine swaps](/glossary/submarine-swap).
- **BTC ↔ other Bitcoin-derived chains** (Liquid, sidechains, etc.).
- **BTC ↔ stablecoins** via decentralized swap markets like Robosats.

The catch is operational complexity. Atomic swaps require both parties' wallets to speak the protocol, both chains to support the necessary script primitives, and careful timeout management. Most ordinary users delegate to a swap service (which may itself be trust-minimized) rather than doing it raw.

This is one of the elegant primitives Bitcoin's [Script](/glossary/bitcoin-script) and [HTLCs](/glossary/htlc-hashed-time-locked-contract) make possible. It's also what powers a lot of decentralized exchange across the broader Bitcoin ecosystem.
