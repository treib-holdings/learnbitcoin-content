---
title: "Shielded CoinJoin"
slug: shielded-coinjoin
draft: false
shortDefinition: "A hypothetical or future approach merging CoinJoin with zero-knowledge proofs to further obscure transaction details."
keyTakeaways:
  - "Further obfuscates data within a CoinJoin beyond typical input-output mixing"
  - "May need new cryptographic primitives or chain upgrades"
  - "Represents a potential future direction for privacy enhancements in Bitcoin"
sources: []
relatedTerms:
  - coinjoin
  - fungibility
  - mixing-service
  - payjoin
  - stealth-address
liveWidget: ~
---

A "shielded CoinJoin" is a hypothetical/research-stage privacy enhancement that would combine [CoinJoin](/glossary/coinjoin)'s multi-party mixing with zero-knowledge cryptography to hide *amounts* and *ownership patterns* that ordinary CoinJoins still leak.

The motivation: a regular CoinJoin breaks the common-input heuristic by mixing inputs from many users into one transaction with equal-value outputs. But chain analysts can still see:

- **Which UTXOs went in.** Public on-chain.
- **Which equal-value outputs came out.** Public on-chain.
- **Heuristic patterns.** Coordinator metadata, timing, uneven amounts, peel-chain behavior after the mix.

These leaks let sophisticated analysts probabilistically de-anonymize a meaningful fraction of CoinJoin participants. A shielded CoinJoin would replace the public input-and-output amounts with cryptographically committed values, hiding *which* equal-value chunk corresponds to which contributor.

Implementation paths under research:

- **Confidential Transactions** (Greg Maxwell, Andrew Poelstra) - homomorphic commitments hide transaction amounts while still letting nodes verify no inflation occurred. Used in [Liquid](/glossary/liquid-network) but would need a Bitcoin soft fork to deploy on mainnet.
- **Bulletproofs** - efficient zero-knowledge range proofs that could enable confidential CoinJoins more cheaply than naive zk-SNARK approaches.
- **MimbleWimble-style aggregation** - mathematically combines transaction data so individual amounts/parties are unobservable.

None of these are currently part of Bitcoin's protocol. Shielded CoinJoin remains a research direction more than a near-term roadmap item. The 2024 shutdowns of major CoinJoin coordinators (Wasabi, Whirlpool) shifted the privacy conversation toward decentralized alternatives like [PayJoin](/glossary/payjoin) and [Silent Payments](/glossary/silent-payments) rather than more elaborate mixing schemes.

See [CoinJoin](/glossary/coinjoin) for the current-generation technique and [Fungibility](/glossary/fungibility) for why this matters.
