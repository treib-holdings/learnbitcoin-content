---
title: "Proof of Reserves"
slug: proof-of-reserves
linkText:
  - "proof of reserves"
  - "proof-of-reserves"
draft: false
published: "2026-06-18"
updated: "2026-10-15"
shortDefinition: "A cryptographic attestation that an exchange or custodian actually holds the coins it claims to. A real improvement after FTX - but it proves assets, not solvency."
keyTakeaways:
  - "Proof of reserves uses on-chain data and cryptography to show a custodian controls a specific set of coins"
  - "It became a standard demand the week FTX collapsed, because FTX is exactly what it is meant to catch"
  - "It is a partial signal, not a guarantee: it proves assets without proving liabilities, and a snapshot can be staged for the day of the audit"
sources:
  - { label: "BIP-127 - Simple Proof-of-Reserves Transactions (assigned 2019-01-28): proofs of reserves are a way for companies managing large amounts of bitcoins to prove ownership over a given amount of funds; the BIP formalizes only the de-facto method and notes its privacy shortcomings", url: "https://github.com/bitcoin/bips/blob/master/bip-0127.mediawiki" }
  - { label: "Bitcoin Optech - Proof of reserves topic: a timestamped commitment to a distribution of funds signed by the entity who controls them; it cannot guarantee the funds are available; a merkle-sum tree can show each depositor their own amount and how it contributes to the proven total", url: "https://bitcoinops.org/en/topics/proof-of-reserves/" }
  - { label: "Dagher, Bunz, Bonneau, Clark, Boneh - Provisions: Privacy-preserving proofs of solvency for Bitcoin exchanges (2015): a proof of solvency demonstrates that the exchange controls sufficient reserves to settle each customer's account", url: "https://eprint.iacr.org/2015/1008" }
  - { label: "PCAOB Office of the Investor Advocate - Exercise caution with proof of reserve reports (March 8, 2023): PoR reports purport to verify an asset type at a particular moment in time, likely do not address liabilities or whether the assets were borrowed, and give no assurance about what happens after the report", url: "https://pcaobus.org/resources/information-for-investors/investor-advisories/investor-advisory-exercise-caution-with-third-party-verification-proof-of-reserve-reports" }
  - { label: "CoinDesk - Crypto exchanges scramble to compile proof of reserves as FTX contagion grips markets (November 9, 2022): within 24 hours nine exchanges said they would publish Merkle tree reserve certificates, after Binance's CEO called for proof of reserves on November 8", url: "https://www.coindesk.com/business/2022/11/09/crypto-exchanges-scramble-to-compile-proof-of-reserves-as-ftx-contagion-grips-markets" }
  - { label: "SEC v. Bankman-Fried (S.D.N.Y. 22-cv-10501), complaint (December 13, 2022): FTX customer funds were diverted to Alameda Research; FTX paused all customer withdrawals on November 8, 2022", url: "https://www.sec.gov/files/litigation/complaints/2022/comp-pr2022-219.pdf" }
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
