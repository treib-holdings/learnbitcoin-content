---
title: "Dust"
slug: dust
draft: false
updated: "2026-10-21"
shortDefinition: "A very small BTC amount in a UTXO, often below the fee required to spend it economically."
keyTakeaways:
  - "Small outputs that cost more in fees to spend than their value"
  - "Consolidation can clean up dust if network fees are low"
  - "Potential vector for privacy attacks ('dust attacks')"
sources:
  - { label: "Bitcoin Core - GetDustThreshold in src/policy/policy.cpp (546 satoshis for a legacy output and 294 for P2WPKH at the default dust relay rate of 3,000 sat/kvB)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/policy/policy.cpp" }
  - { label: "Bitcoin Core 29.0 release notes - ephemeral dust: a single dust output is allowed in a zero-fee transaction, provided the spender of any of its outputs also spends the dust (2025)", url: "https://bitcoincore.org/en/releases/29.0/" }
  - { label: "Bitcoin Core 29.1 release notes - minrelaytxfee and incrementalrelayfee defaults lowered to 100 satoshis per kvB, which is 0.1 sat/vB (September 4, 2025)", url: "https://bitcoincore.org/en/releases/29.1/" }
  - { label: "Bitcoin Core 30.0 release notes - the same two defaults restated as 0.1 satoshis per vB (October 10, 2025)", url: "https://bitcoincore.org/en/releases/30.0/" }
  - { label: "Bitcoin Optech - Uneconomical outputs (dust) topic: outputs worth less than the fee to spend them, the dust limit, and dust attacks", url: "https://bitcoinops.org/en/topics/uneconomical-outputs/" }
  - { label: "Bitcoin Optech - Transaction size calculator (a P2WPKH input is 68 vbytes: 36-byte outpoint, 1-byte scriptSig length, 4-byte sequence and 27 vbytes of witness)", url: "https://bitcoinops.org/en/tools/calc-size/" }
  - { label: "Bitcoin Wiki - Bitcoin faucet (sites that purport to pay bitcoin for free but often pay such paltry sums as to make the effort pointless)", url: "https://en.bitcoin.it/wiki/Bitcoin_faucet" }
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

Dust is a [UTXO](/glossary/utxo-unspent-transaction-output) so small that spending it would cost more in transaction fees than it's worth. There's no fixed cutoff for that; it depends on the fee rate at the moment you'd want to spend.

A rough rule: at 10 sat/vB, spending a typical P2WPKH input costs ~680 satoshis in fees. Any UTXO smaller than that is dust right now. At 50 sat/vB it's anything smaller than ~3,400 sats. Dust is a function of network conditions, not a fixed number.

Where dust comes from:

- **Change leftovers.** A transaction that pays X and has Y-X-fee in change can occasionally leave change small enough to qualify.
- **Faucets and giveaways.** Promotional payouts are often paltry by design.
- **[Dust attacks](/glossary/dust-attack).** An attacker sends small amounts to many addresses, hoping the recipients later combine those dust outputs with their other UTXOs in a single transaction - which links the addresses publicly and helps the attacker map a wallet.

Bitcoin Core also enforces a policy floor, the [dust limit](/glossary/dust-limit), below which it won't relay a transaction: 546 sats for a legacy P2PKH output and 294 sats for P2WPKH, at the default dust fee rate of 3 sat/vB. Outputs below the limit are non-standard and don't propagate, with one narrow exception since Bitcoin Core 29.0: ephemeral dust, a single dust output in a zero-fee transaction that a child transaction relayed alongside it spends right away. Above the limit but still economically dust is fine to create, just expensive to spend.

If you have dust, the right move is usually to wait. When fees drop to 1 sat/vB or lower (idle periods do happen, and since Bitcoin Core 29.1, in September 2025, the default relay floor is 0.1 sat/vB), you can [sweep](/glossary/dust-sweeping) many dust UTXOs into one larger output with a [consolidation transaction](/glossary/consolidation-transaction). Just be aware: consolidating dust links the addresses involved, so do it deliberately, not casually.
