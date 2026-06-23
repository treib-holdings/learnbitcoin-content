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

Proof of reserves is an attempt to let a custodian prove, with on-chain and cryptographic evidence, that it actually holds the coins it says it holds. In its fuller forms it pairs a proof of assets - the custodian demonstrates control of specific addresses, often anchored to a Merkle tree of customer balances so each user can check their own inclusion - with the harder and much rarer proof of liabilities, a verifiable total of what it owes.

It became a standard demand the week [FTX](/glossary/ftx) collapsed, because FTX is exactly what proof of reserves is meant to catch: an exchange whose customer deposits had quietly been routed somewhere else. A custodian that can prove it controls the coins is harder to run the way FTX was run.

Treat it as a partial signal, not a guarantee. Proving reserves is not proving solvency. An exchange can show its assets while hiding its liabilities, can borrow coins to pass an audit it knows is coming, and can present a snapshot staged for a single moment in time. Most published "proof of reserves" to date proves only the assets half of the equation. It is better than the marketing assurances it replaced, and it is not a substitute for [self-custody](/glossary/self-custody). The only reserve you never have to take on faith is the one whose keys you hold yourself.

See [Mt. Gox to FTX: The Custody Graveyard](/rabbit-hole/mt-gox-ftx-graveyard) for the failures that made it necessary.
