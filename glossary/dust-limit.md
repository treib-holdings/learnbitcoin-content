---
title: "Dust Limit"
slug: dust-limit
draft: false
shortDefinition: "A threshold below which an output is deemed dust and rejected by nodes' default policy as non-standard (e.g., ~546 sat for legacy P2PKH)."
keyTakeaways:
  - "Prevents trivial outputs from flooding the network"
  - "Varies based on script type (e.g., legacy vs. SegWit)"
  - "Policy-level, not a hard consensus rule, but widely enforced"
sources: []
relatedTerms:
  - discard-threshold
  - dust
  - dust-attack
  - dust-sweeping
  - transaction-fee
  - utxo-unspent-transaction-output
liveWidget: ~
---

The dust limit is Bitcoin Core's policy threshold below which an output is considered "dust" and the transaction is treated as non-standard, meaning the node won't relay or include it in its mempool.

The exact threshold depends on the output script type, because the calculation accounts for the cost of *spending* that output later: an output is dust if spending it would cost more in fees than the value being moved. As of 2026:

- **P2PKH (legacy)**: ~546 sats.
- **P2SH**: ~540 sats.
- **P2WPKH (native SegWit)**: ~294 sats (smaller because SegWit input is smaller).
- **P2TR (Taproot)**: ~330 sats.
- **OP_RETURN** outputs are exempt because they're provably unspendable (no future spending cost to amortize).

The formula in Bitcoin Core: `dust_threshold = (output_size + input_size) * dustRelayFee / 1000`, where `dustRelayFee` defaults to 3,000 sats/kvB. Operators can adjust the fee rate, which changes the threshold proportionally.

What "non-standard" means in practice:

- **Default Bitcoin Core nodes won't relay** transactions with dust outputs. The transaction is effectively invisible to most of the network.
- **Default Bitcoin Core mining policy won't include** them in candidate blocks.
- **Consensus rules don't reject them.** A dust-containing transaction can technically be in a block; the policy is a relay/standardness filter, not a hard rule. Some miners and pools accept dust-containing transactions through out-of-band submission for a fee.

Why the limit exists:

- **UTXO set growth.** Every output a node stores costs memory. Dust outputs that nobody will ever spend bloat the UTXO set forever.
- **Economically rational.** If spending an output costs more than the output is worth, no one will ever spend it - it's permanently stuck. Better to never create it in the first place.
- **Spam resistance.** Tiny outputs are a cheap way to abuse the network. The dust limit raises the cost.

Users typically encounter the dust limit only at the edges - building a transaction with very small change output, or trying to send a tiny amount. The wallet either consolidates the dust into the fee or refuses to build the transaction, depending on the wallet's UX.
