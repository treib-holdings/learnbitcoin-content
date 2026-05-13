---
title: "Peg-out"
slug: peg-out
draft: false
shortDefinition: "Returning tokens from a sidechain to mainnet BTC after federation or multi-sig checks the transaction's validity."
keyTakeaways:
  - "Sidechain tokens are redeemed for real BTC on mainnet"
  - "Federation multi-sig or functionaries confirm no double spends"
  - "Closes the loop on two-way pegging from sidechain to Bitcoin"
sources: []
relatedTerms: []
liveWidget: ~
---

A **peg-out** is the operation of converting sidechain tokens back into mainnet BTC, completing the round trip that began with a [peg-in](/glossary/peg). It's the half of the [two-way peg](/glossary/peg) lifecycle that requires the most trust assumption, because someone has to authorize releasing the originally-locked BTC on mainnet.

The mechanics depend on the peg architecture:

- **[Federated peg](/glossary/liquid-network) (e.g., Liquid):** the user burns L-BTC on Liquid; the [federation](/glossary/liquid-federation) verifies the burn, and a threshold of federation members (e.g., 11-of-15 functionaries) signs a transaction releasing BTC from the federation's mainnet multisig. The federation honestly executing peg-outs is the critical trust assumption.
- **Drivechain ([BIP-300](/glossary/bip-300-drivechains)):** withdrawal proposals are voted on by [miners](/glossary/miner) over a long period (~3 months). If enough miners approve, BTC is released. This shifts the trust to the mining majority.
- **SPV-validated peg:** sidechain validators verify the peg-out via SPV proofs of mainnet activity. Theoretically more trustless but rarely deployed at scale.

What can go wrong with peg-outs:

- **Federation refusal.** If a federation decides to censor a peg-out (sanctions compliance, dispute, malicious behavior), the user is stuck with sidechain tokens they can't redeem.
- **Federation compromise.** A hacked or coerced federation could approve a fake peg-out, draining the locked BTC.
- **Slow processing.** Drivechain-style peg-outs are intentionally slow (months); federated peg-outs are faster (hours-days) but still slower than on-chain transfers.
- **Sidechain failure.** If the sidechain itself fails (bug, shutdown, hostile takeover), peg-outs may become impossible.

For users moving real value via sidechains, the peg-out path is the key risk to evaluate. Once your BTC is pegged in, you're committed to whatever the peg-out mechanism actually delivers under stress.

See [Peg](/glossary/peg) for peg-in and broader context, [Peg-Guard](/glossary/peg-guard) for security mechanisms.
