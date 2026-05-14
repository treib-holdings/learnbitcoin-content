---
title: "Oracle-based Betting"
slug: oracle-based-betting
draft: false
shortDefinition: "Using external oracles in Discreet Log Contracts (DLCs) to settle bets on real-world outcomes, with oracles publishing the final result."
keyTakeaways:
  - "Leverages external data for real-world event outcomes"
  - "Uses DLCs to ensure trust-minimized payouts based on oracle signatures"
  - "Requires a reliably honest oracle to avoid false reporting"
sources: []
relatedTerms:
  - counterparty-risk
  - hardware-security-module-hsm
  - rpc-whitelist
  - security
liveWidget: ~
---

Oracle-based betting on Bitcoin uses **Discreet Log Contracts (DLCs)** to settle wagers on real-world outcomes without requiring trust between the bettors. The trust is shifted to an **oracle** - an external party that publishes a cryptographic signature attesting to the outcome.

How a DLC bet works at a high level:

1. **The oracle publicly commits in advance** to a public key and a set of possible outcome announcements. ("On election day, I'll sign one of these specific messages: 'Outcome A' or 'Outcome B'.")
2. **The bettors construct a multi-signature contract** that uses the oracle's commitment. The contract has different payout branches for each possible oracle signature.
3. **Funds are locked in the contract** by both bettors.
4. **The event happens.** The oracle publishes their signature on the actual outcome.
5. **Either bettor can use that signature** to claim the appropriate payout, settling the contract automatically.

Why this is interesting:

- **The oracle doesn't need to know about the contract.** They just need to publicly commit to signing on event outcomes. Multiple unrelated bets can use the same oracle attestation. The oracle never sees the parties or amounts.
- **The oracle can't unilaterally steal funds.** They can only influence the outcome distribution - and the bettors choose which oracle they trust.
- **Settlement happens on Bitcoin's main chain** without any custodial intermediary or specialized infrastructure beyond the oracle's signature.

Real-world DLC oracles in 2026: a small but growing ecosystem. **Suredbits** runs the most-established oracle infrastructure (including the Krystal Bull oracle tool and a public oracle explorer). **Lava Protocol** uses DLCs for Bitcoin-collateralized stablecoin loans, with their own Pythia oracle. **DLC.Link** has been building DLC-Chainlink bridge infrastructure. Various smaller sports and election oracles operate publicly. Most DLC activity is still niche relative to traditional betting markets, but the underlying technology is production-ready.

The privacy advantage is real: from the chain's perspective, a DLC settlement looks like an ordinary [Taproot](/glossary/taproot) spend, indistinguishable from a regular cooperative spend. Bets, sports outcomes, election predictions - all settling on-chain without revealing what they are.

See [Scriptless Scripts](/glossary/scriptless-scripts) for the cryptographic primitive DLCs are built on.
