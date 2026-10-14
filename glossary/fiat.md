---
title: "Fiat"
slug: fiat
draft: false
updated: "2026-10-13"
shortDefinition: "Government-issued money, like USD or EUR, unbacked by any physical commodity and relying on state authority for value."
keyTakeaways:
  - "Issued and regulated by governments"
  - "No inherent commodity backing, value rests on trust and policy"
  - "Bitcoin frequently paired against fiat for liquidity and adoption"
sources:
  - { label: "Federal Reserve - Is U.S. currency still backed by gold? (FAQ: Federal Reserve notes are not redeemable in gold, silver, or any other commodity)", url: "https://www.federalreserve.gov/faqs/currency_12770.htm" }
  - { label: "Federal Reserve - Is it legal for a business to refuse cash? (FAQ quoting 31 U.S.C. 5103: coins and currency are legal tender for all debts, public charges, taxes, and dues)", url: "https://www.federalreserve.gov/faqs/currency_12772.htm" }
  - { label: "BLS - CPI Inflation Calculator ($100 in January 1913 has the same buying power as $3,418.16 in August 2026)", url: "https://data.bls.gov/cgi-bin/cpicalc.pl?cost1=100&year1=191301&year2=202608" }
  - { label: "INDEC - Indice de precios al consumidor, serie historica, sheet 'Indices IPC Cobertura Nacional' (national general index, December 2016 = 100: 126.99 in January 2018, 12,276.77 in August 2026)", url: "https://www.indec.gob.ar/ftp/cuadros/economia/sh_ipc_09_26.xls" }
  - { label: "Satoshi Nakamoto - Bitcoin open source implementation of P2P currency, P2P Foundation, 11 February 2009 (the central bank must be trusted not to debase the currency, but the history of fiat currencies is full of breaches of that trust)", url: "https://satoshi.nakamotoinstitute.org/posts/p2pfoundation/1/" }
  - { label: "Bitcoin Core source - GetBlockSubsidy, the fixed issuance schedule every node enforces (src/validation.cpp)", url: "https://github.com/bitcoin/bitcoin/blob/master/src/validation.cpp" }
relatedTerms:
  - bitcoin-atm
  - bitcoin-bond
  - cbdc-central-bank-digital-currency
  - fincen
  - kyc-know-your-customer
  - price-discovery
  - price-floor-btc
  - price-slippage
  - volatility
liveWidget: ~
---

Fiat is money declared valuable by government decree rather than by any physical backing. The US dollar, the euro, the yen - these are fiat. There's no gold in a vault redeeming them; their value rests entirely on legal tender laws and trust in the issuing central bank.

Fiat has two superpowers that Bitcoin doesn't. First, a state's authority can force people to accept it - try paying your US taxes in BTC. Second, the issuer can create more of it on demand. That second power is also why fiat reliably loses purchasing power over decades. The US dollar has lost about 97% of its 1913 value: what $100 bought in January 1913 cost $3,418 in August 2026, by the BLS's own calculator. The Argentine peso has lost about 99% of its 2018 value in under a decade: INDEC's consumer price index rose 97-fold between January 2018 and August 2026.

Bitcoin was designed as a direct alternative: no issuer, no discretionary policy, a fixed supply. That doesn't mean fiat is going away tomorrow. Most people on Earth get paid in fiat, pay rent in fiat, and convert to BTC through a "fiat on-ramp" - an exchange, ATM, or peer-to-peer trade. The two systems coexist. Bitcoin's role is to be the option that can't be diluted.

See [Inflation](/glossary/inflation) for the specific mechanism by which fiat purchasing power declines, and [Journey Chapter 1](/journey/why-money-is-broken) for the long version of why this matters.
