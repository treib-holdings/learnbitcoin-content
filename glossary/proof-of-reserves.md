---
title: "Proof of Reserves"
slug: proof-of-reserves
draft: false
published: "2026-06-18"
shortDefinition: "A cryptographic attestation that an exchange or custodian actually holds the coins it claims to. A real improvement after FTX - but it proves assets, not solvency."
keyTakeaways:
  - "Proof of reserves uses on-chain data and cryptography to show a custodian controls a specific set of coins"
  - "It became a standard demand the week FTX collapsed, because FTX is exactly what it is meant to catch"
  - "It is a partial signal, not a guarantee: it proves assets without proving liabilities, and a snapshot can be staged for the day of the audit"
sources: []
relatedTerms:
  - ftx
  - counterparty-risk
  - centralized-exchange-cex
  - self-custody
liveWidget: ~
---

Proof of reserves is an attempt to let a custodian show, using on-chain and cryptographic evidence, that it really holds the coins it claims to. The fuller versions pair a proof of assets, where the custodian demonstrates control of specific addresses (often anchored to a Merkle tree of customer balances, so each user can check that their own balance is included), with a proof of liabilities, a verifiable total of what the custodian owes. That second part is much harder and much rarer.

It became a standard demand the week [FTX](/glossary/ftx) collapsed, because FTX is the exact situation it's meant to catch: an exchange whose customer deposits had quietly been sent elsewhere. An exchange that can prove it controls the coins is harder to run the way FTX was.

It's a partial signal, not a guarantee. Showing your reserves isn't the same as showing you're solvent. A company can demonstrate the assets it holds while saying nothing about what it owes, it can borrow coins to pass an audit it knows is coming, and it can arrange to look fully funded on the single day it's being checked. Most "proof of reserves" published so far covers only the assets side. It's better than the marketing promises it replaced, but it isn't a replacement for [self-custody](/glossary/self-custody). The one set of reserves you never have to take on trust is the coins whose keys you hold.

See [Mt. Gox to FTX: The Custody Graveyard](/rabbit-hole/mt-gox-ftx-graveyard) for the failures that made it necessary.
