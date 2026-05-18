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

**Bitcoin Knots** is a derivative of [Bitcoin Core](/glossary/bitcoin-core) maintained by a single developer, Luke Dashjr. It tracks Core's codebase closely and adds patches that reflect the maintainer's particular views on how a Bitcoin node should behave - especially around mempool policy and what transactions are considered "spam."

Two important things to understand about Knots' governance:

- **It's a one-person project.** Unlike [Bitcoin Core](/glossary/bitcoin-core), which is maintained by a rotating cast of contributors with formal review processes and broad community input, Knots reflects one developer's editorial decisions. The community doesn't dictate what goes into Knots; the maintainer does. The code is open-source and anyone can fork it, but direction sits with the maintainer.
- **The added patches encode specific policy opinions.** Most notably, Knots applies stricter default filtering against transaction types its maintainer considers spam (large [OP_RETURN](/glossary/opreturn) payloads, [Ordinals](/glossary/opreturn-based-tokens)-style inscriptions, etc.). This is a policy choice, not a neutral technical improvement, and reasonable people disagree about whether node operators should impose these filters on what they relay.

The compatibility note: Knots is consensus-compatible with Core. A Knots node sees the same chain and accepts the same blocks. The differences are in **relay policy** (which transactions to forward) and **mempool admission** (which transactions to keep), which are local node choices, not consensus rules.

For most users, **[Bitcoin Core](/glossary/bitcoin-core) is the reference implementation** - the codebase with broad developer review, the most-tested validation logic, and policies that emerge from the community-review process rather than a single maintainer's preferences. It's the default for a reason, and the default this site recommends.

Knots is a legitimate option if you've thought carefully about the policy stance you're taking by running it. If you haven't - if you're just looking for a Bitcoin node - Core is the answer.
