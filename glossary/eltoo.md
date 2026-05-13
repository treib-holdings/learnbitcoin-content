---
title: "Eltoo"
slug: eltoo
draft: false
shortDefinition: "A proposed LN channel update mechanism (requiring ANYPREVOUT) eliminating the need for penalty transactions."
keyTakeaways:
  - "Removes the penalty-based approach to outdated states"
  - "Relies on ANYPREVOUT to reference the latest valid transaction"
  - "Simplifies LN's dispute mechanics for safer channel updates"
sources: []
relatedTerms:
  - anyprevout
  - htlc-hashed-time-locked-contract
  - lightning-channel
  - lightning-channel-splicing
  - lightning-network
  - payment-channel
  - penalty-transaction
liveWidget: ~
---

Eltoo (sometimes written L2 or "Eltoo channels") is a proposed alternative design for [Lightning](/glossary/lightning-network) channels that would significantly simplify their security model. Designed by Christian Decker, Rusty Russell, and Olaoluwa Osuntokun, it requires a Bitcoin soft fork that hasn't yet activated.

The problem Eltoo addresses: current Lightning channels use a **penalty-based** dispute mechanism. If you broadcast an old channel state (claiming to be richer than you actually are), your counterparty can take *all* the channel's funds as punishment. This works but has costs:

- **Asymmetric channel state.** Each party holds a different version of the commitment transaction, complicating channel logic.
- **Operational pressure.** If you accidentally publish an old state from a backup, you lose all your channel funds. Backup management has to be very careful.
- **Watchtower complexity.** You need a third party watching the chain on your behalf when you're offline, ready to publish a punishment if your counterparty cheats.

Eltoo's approach: instead of punishing cheaters, **let any party invalidate an old state by publishing the latest one**. The newest signed state simply overrides any earlier state, no matter who tries to broadcast what. No penalty needed.

What this enables:

- **Symmetric channels.** Both parties hold the same commitment state, simplifying logic.
- **Easier backups.** Re-publishing an old state can't cost you anything; it just gets overridden.
- **Simpler watchtowers.** Watch logic becomes "publish the latest known state" rather than "detect and punish cheating."
- **Better multi-party constructions.** Channel factories, multi-party channels, and other advanced layer-2 designs become much more practical.

What it needs: **ANYPREVOUT**, a new SIGHASH variant that lets a signed transaction be applied to any prior commitment transaction in a chain. ANYPREVOUT is documented in [BIP-118](https://github.com/bitcoin/bips/blob/master/bip-0118.mediawiki). It's a proposed [soft fork](/glossary/soft-fork) but, like other covenant-adjacent proposals, hasn't yet built broad enough consensus to activate.

If ANYPREVOUT activates, Eltoo channels become practical to deploy alongside (eventually replacing) the current Lightning channel design. Until then, Eltoo is one of the more compelling reasons people give for wanting more script flexibility in Bitcoin.
