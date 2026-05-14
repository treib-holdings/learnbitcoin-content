---
title: "Fork Watcher"
slug: fork-watcher
draft: false
shortDefinition: "A specialized tool/service that tracks blockchain forks or abnormal reorganizations, alerting operators to possible chain splits."
keyTakeaways:
  - "Monitors for chain reorganizations or unexpected forks"
  - "Commonly used by exchanges, miners, and node operators"
  - "Provides real-time alerts for rapid response"
sources: []
relatedTerms:
  - airdrop-btc-fork
  - bitcoin-cash
  - chain-split
  - fork
  - fork-detection
  - reorg-reorganization
liveWidget: ~
---

A fork watcher is the dedicated tooling that does [fork detection](/glossary/fork-detection) as a continuous service, alerting operators when something unusual happens at the chain-consensus layer.

The reference implementation is [forkmonitor.info](https://forkmonitor.info), run by Bitcoin Core developer Sjors Provoost. It does several things at once:

- Runs many Bitcoin node implementations side-by-side (Core, Knots, btcd, libbitcoin, etc.) plus multiple versions of each.
- Watches for chain divergence between any of them.
- Tracks stale-block events, deep reorgs, soft-fork activation signal bits, and inflation-bug-style consensus failures.
- Publishes alerts to public RSS / Twitter / mailing-list feeds.
- Maintains the canonical public record of "what the chain actually looked like during event X."

Why fork-watcher infrastructure matters beyond any single operator:

- During the 2018 inflation-bug (CVE-2018-17144) patching window, fork watchers helped track which versions were upgraded and whether any actually-buggy chain existed.
- During soft-fork activations (SegWit, Taproot), fork watchers tracked signaling and confirmation that the activation didn't split the chain.
- During the BCH split (August 2017) and subsequent BCH-internal splits (November 2018), fork watchers were the authoritative public source for "what hash is the tip on each chain right now."

Commercial offerings (exchanges, custodians) typically run their own fork watchers internally as a deposit-freezing trigger. Public watchers like forkmonitor.info serve the community-research function. Both exist because Bitcoin's correctness is too important to assume nothing's gone wrong - someone has to actively check.
