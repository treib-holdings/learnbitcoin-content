---
title: "Delayed Payment Channel"
slug: delayed-payment-channel
draft: false
shortDefinition: "A Lightning channel variant that enforces a waiting period for one party's funds, ensuring time to apply penalty transactions if cheating occurs."
keyTakeaways:
  - "Channels incorporate a built-in waiting period for certain outputs"
  - "Ensures security by granting time to apply penalties"
  - "Balances LN's trust model with user-defined liquidity constraints"
sources: []
relatedTerms:
  - atomic-multi-path-payment-amp
  - checklocktimeverify-cltv
  - checksequenceverify-csv
  - core-lightning-c-lightning
  - htlc-hashed-time-locked-contract
  - lightning-channel
  - lightning-channel-splicing
  - lightning-network
  - lightning-node
  - lightning-payment
  - lightning-routing
  - locktime
  - payment-channel
liveWidget: ~
---

"Delayed payment channel" is a descriptive name for the standard Lightning channel design where each party's own balance, in a unilaterally-broadcast commitment, is locked behind a [CSV](/glossary/checksequenceverify-csv) timelock for some number of blocks before it can be spent.

The mechanics are the same as the [delayed justice transaction](/glossary/delayed-justice-transaction) story: when you broadcast your own latest commitment to close a channel unilaterally, your own balance gets a CSV-locked output (typically 144-2016 blocks) while your counterparty's balance is immediately spendable. The asymmetry isn't unfair; it's deliberate. The delay is the window during which your counterparty can punish you if your "latest commitment" turns out to be an outdated one (a [penalty transaction](/glossary/penalty-transaction) sweep).

For users, the practical takeaways:

- **Cooperative closes are fast.** When both parties agree to close, the channel produces a normal on-chain transaction with no CSV delays. Funds are available after one confirmation.
- **Unilateral force-closes are slow.** If you close without your counterparty's cooperation, expect to wait through the `to_self_delay` (whatever was negotiated at channel-open) before your own balance is spendable.
- **The delay protects you too.** When your counterparty force-closes, the same CSV delay applies to their balance, giving you (or your watchtower) time to respond if their broadcast was a cheat attempt.

The term "delayed payment channel" isn't standard Lightning vocabulary - most documentation just calls it "a Lightning channel" and treats the CSV delay as an implementation detail. The phrase exists in some older glossaries to emphasize the asymmetric-delay property as a defining feature of the design.

[Eltoo](/glossary/eltoo)-style channels (which depend on SIGHASH_ANYPREVOUT, not yet activated) would soften this asymmetry: any newer state automatically invalidates older ones, removing the need for the unilaterally-broadcast-then-wait-then-punish dance.
