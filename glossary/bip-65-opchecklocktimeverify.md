---
title: "BIP 65 (OP_CHECKLOCKTIMEVERIFY)"
slug: bip-65-opchecklocktimeverify
draft: false
shortDefinition: "Added a script opcode (CLTV) enabling funds to be locked until a certain block height or timestamp is reached."
keyTakeaways:
  - "Implements time-based spending constraints"
  - "Enables contracts like payment channels, escrows"
  - "Strengthens Bitcoin's smart contract flexibility"
sources: []
relatedTerms:
  - absolute-locktime
  - bip-bitcoin-improvement-proposal
  - bip-68-relative-locktime
  - bitcoin-script
  - checklocktimeverify-cltv
  - locktime
  - nlocktime
  - nsequence
  - time-locked-contract
liveWidget: ~
---

[BIP-65](https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki) added the **OP_CHECKLOCKTIMEVERIFY** (CLTV) opcode to [Bitcoin Script](/glossary/bitcoin-script). Activated as a [soft fork](/glossary/soft-fork) in December 2015, it gave script-level enforcement to [absolute locktimes](/glossary/absolute-locktime).

Before BIP-65, the only locktime mechanism was the transaction-level `nLockTime` field, which prevents a *whole transaction* from being mined before a given height or time. CLTV brought the same concept into the script itself: an output's locking script could now require that "the spending transaction's `nLockTime` is at least X."

This sounds like a small distinction. It's actually load-bearing for entire categories of Bitcoin applications:

- **[Payment channels](/glossary/payment-channel)** and the [Lightning Network](/glossary/lightning-network) use CLTV to enforce withdrawal delays after force-closing a channel.
- **[Atomic swaps](/glossary/atomic-swap)** use CLTV to enforce refund deadlines if a counterparty bails.
- **[HTLCs](/glossary/htlc-hashed-time-locked-contract)** use CLTV as the time-based fallback in their "preimage or timeout" structure.
- **Inheritance vaults** use CLTV to ensure heirs can claim funds after a long delay if the original owner is inactive.

CLTV was paired with [BIP-68/112 (CSV)](/glossary/checksequenceverify-csv) for relative locktimes a year later. Together, the two opcodes turned Bitcoin Script into something powerful enough to support Lightning and most modern multi-party protocols.

For users, you'll rarely interact with CLTV directly. Your wallet or [Lightning](/glossary/lightning-network) implementation handles it behind the scenes. But every Lightning channel you ever use relies on CLTV being there.
