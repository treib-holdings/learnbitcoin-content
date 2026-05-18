---
title: "Fidelity Bond"
slug: fidelity-bond
draft: false
shortDefinition: "A mechanism (e.g., used in JoinMarket) where participants time-lock or stake BTC to prove commitment and reduce Sybil attacks."
keyTakeaways:
  - "Locks BTC to deter fake or spammy participants"
  - "Used in privacy tools like JoinMarket to raise attack costs"
  - "Strikes a balance between anonymity and accountability"
sources: []
relatedTerms:
  - counterparty-risk
  - custodial-wallet
  - escrow
  - escrowed-lightning-channel
  - hierarchical-multisig
  - m-n
  - quorum-signatures
liveWidget: ~
---

A fidelity bond is a [time-locked](/glossary/locktime) BTC deposit used as an [anti-sybil](/glossary/anti-sybil-mechanism) mechanism. The participant commits to having capital locked up for a period; this makes spinning up many fake identities expensive, which makes attacking a privacy protocol economically unattractive.

The canonical use case is **JoinMarket** - a decentralized [CoinJoin](/glossary/coinjoin) coordination protocol. JoinMarket's matching market lets participants act as either "makers" (provide liquidity, earn fees) or "takers" (pay for the mix). Without anti-sybil measures, an attacker could spin up many fake makers, all controlled by the same entity, and dominate the matching process to compromise the mix.

Fidelity bonds fix this. A maker can prove their commitment by locking BTC in a time-locked output - typically a [CLTV](/glossary/checklocktimeverify-cltv)-protected UTXO that can't be spent until some future block. Takers prefer to mix with makers who have larger bonds locked for longer, because:

- **An attacker would need to lock real BTC** to spin up convincing fake identities.
- **Larger bonds + longer locks = higher attack cost** for the same level of sybil capability.
- **Bond holders have skin in the game** - they can't recover the BTC for the lock period, so they're committed to behaving consistently.

The capital isn't lost; it's just unspendable for the lock period. The attacker bears the *opportunity cost* of capital tied up. At scale, that opportunity cost becomes prohibitive.

This concept generalizes. Similar economic-stake mechanisms appear in:

- Lightning Network's channel funding (channel parties have skin in the game).
- Proof-of-stake systems (validators stake to participate).
- Some federated systems where committee members post bonds.

Fidelity bonds are a clean example of how Bitcoin's primitives ([time locks](/glossary/locktime), public verifiability) can be composed to solve adjacent problems like sybil resistance, without changing the base protocol.
