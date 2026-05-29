---
title: "Peg-Guard"
slug: peg-guard
draft: false
shortDefinition: "A security measure in sidechain peg systems preventing exploit or double-spend of pegged BTC, often requiring federation consent."
keyTakeaways:
  - "Prevents pegged BTC from being withdrawn illegitimately"
  - "Federation or multi-sig typically verifies legitimate peg-outs"
  - "Crucial to sidechain security where two-way pegs are used"
sources: []
relatedTerms:
  - liquid-federation
  - liquid-network
  - peg
  - peg-out
  - sidechain
liveWidget: ~
---

A **peg-guard** is a security mechanism in a [sidechain](/glossary/sidechain) peg system designed to prevent fraudulent withdrawals - especially the catastrophic failure mode where a bug or attack lets someone "print" pegged BTC out of thin air, creating sidechain tokens that aren't backed by actual mainnet BTC reserves.

What a peg-guard needs to protect against:

- **Sidechain consensus bugs.** A bug that lets invalid blocks pass could create sidechain tokens that shouldn't exist. If those tokens then get peg-out approval, real BTC drains from the locked reserve.
- **Inflation in sidechain code.** Software bugs that issue more sidechain tokens than were locked via peg-ins.
- **Collusion among peg operators.** Federation members signing peg-outs not backed by valid peg-ins.

Common peg-guard implementations:

- **Multi-signature thresholds on peg-out.** Requiring 11-of-15 federation signatures means a single rogue operator can't drain funds. Used by [Liquid](/glossary/liquid-network).
- **Cross-validation requirements.** Federation members independently validate both the sidechain state and the peg-out proposal before signing. If a sidechain bug looks like it's draining the peg reserve, members refuse to sign.
- **Audit reserves.** Some sidechains publish proof-of-reserves regularly so users can verify the peg backing matches the issued tokens.
- **Slow withdrawal windows** (drivechain style). Long delays before peg-outs finalize give time to detect anomalies.

In Liquid specifically, the "peg-guard" framing isn't formally branded but the function is performed by federation members independently validating Liquid state before signing peg-out releases. The decentralized validation is the guard - if the federation suspects a Liquid bug, individual members can refuse to sign and the peg-out doesn't go through.

For users, the peg-guard isn't directly visible but is part of what makes a sidechain peg trustworthy enough to use at scale. A sidechain with a strong peg-guard is one where consensus bugs don't immediately drain the BTC reserve.
