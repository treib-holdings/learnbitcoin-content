---
title: "Dust"
slug: dust
draft: false
shortDefinition: "A very small BTC amount in a UTXO, often below the fee required to spend it economically."
keyTakeaways:
  - "Small outputs that cost more in fees to spend than their value"
  - "Consolidation can clean up dust if network fees are low"
  - "Potential vector for privacy attacks ('dust attacks')"
sources: []
relatedTerms:
  - address-reuse
  - discard-threshold
  - dust-attack
  - dust-limit
  - dust-sweeping
  - transaction-fee
  - utxo-unspent-transaction-output
liveWidget: ~
---

Dust is a [UTXO](/glossary/utxo-unspent-transaction-output) so small that spending it would cost more in transaction fees than it's worth. There's no fixed dust threshold; it depends on the fee rate at the moment you'd want to spend.

A rough rule: at 10 sat/vB, spending a typical P2WPKH input costs ~680 satoshis in fees. Any UTXO smaller than that is dust right now. At 50 sat/vB it's anything smaller than ~3,400 sats. Dust is a function of network conditions, not a fixed number.

Where dust comes from:

- **Change leftovers.** A transaction that pays X and has Y-X-fee in change can occasionally leave change small enough to qualify.
- **Faucets and giveaways.** Promotional drops are often dust by design.
- **[Dust attacks](/glossary/dust-attack).** An attacker sends small amounts to many addresses, hoping the recipients later combine those dust outputs with their other UTXOs in a single transaction - which links the addresses publicly and helps the attacker map a wallet.

Bitcoin Core enforces a minimum **dust threshold** below which it won't relay transactions at all - currently 546 sats for legacy outputs, lower for segwit. Outputs below threshold are considered non-standard and don't propagate. Above threshold but still economically dust is fine to create, just expensive to spend.

If you have dust, the right move is usually to wait. When fees drop to 1-2 sat/vB (idle periods do happen), you can sweep many dust UTXOs into one larger output with [consolidation](/glossary/consolidation-transaction). Just be aware: consolidating dust links the addresses involved, so do it deliberately, not casually.
