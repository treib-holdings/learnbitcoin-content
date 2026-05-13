---
title: "Bitcoin Knots"
slug: bitcoin-knots
draft: false
shortDefinition: "A Bitcoin Core-based fork adding extra features, maintained by an independent development community."
keyTakeaways:
  - "Derived from Bitcoin Core but with more features"
  - "Maintained by a separate group, not official Core devs"
  - "May introduce new features sooner but with potentially more risk"
sources: []
relatedTerms:
  - bitcoin-client
  - bitcoin-core
  - bitcoin-core-rpc
  - node
  - node-operator
  - node-synchronization
  - safe-mode-bitcoin-core
liveWidget: ~
---

**Bitcoin Knots** is a Bitcoin full-node implementation maintained by Luke Dashjr as a derivative of [Bitcoin Core](/glossary/bitcoin-core). It tracks Core's codebase closely and adds patches that haven't been merged upstream - typically extra configuration options, tighter default policies, or experimental features.

Key differences from Bitcoin Core:

- **Stricter mempool policies by default.** Knots has historically applied more aggressive filtering against transactions Luke considers spammy (e.g., [Ordinals](/glossary/opreturn-based-tokens)-style inscriptions, large OP_RETURN payloads). Some node operators run Knots specifically for this filtering behavior.
- **Faster experimental adoption.** Some BIPs or proposals get implemented in Knots before reaching Core. If you want to try something pre-merge, Knots is one path.
- **More configuration knobs.** Various options that Core deliberately doesn't expose are available in Knots.

In 2024-2026, Bitcoin Knots saw a notable bump in deployment as the Ordinals controversy heated up. Operators wanting to filter inscription-style traffic from their nodes (and indirectly contribute to *not* relaying it to peers) often switched from Core to Knots specifically for this. The policy debate around "what should node operators relay" is one of the live governance topics in Bitcoin in 2026.

The compatibility note: Knots is consensus-compatible with Core. A Knots node sees the same chain as a Core node and accepts the same blocks. The differences are in *relay policy* (which transactions to forward to peers) and *mempool admission* (which transactions to keep in mempool). These are local policy choices, not consensus rule changes.

For most users, running Bitcoin Core is the conservative default. Knots is a viable alternative for operators with specific reasons to deviate from Core's default policies. Both are valid; both contribute to the network's diversity.
