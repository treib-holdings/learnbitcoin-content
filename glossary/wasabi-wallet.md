---
title: "Wasabi Wallet"
slug: wasabi-wallet
draft: false
published: "2026-07-13"
shortDefinition: "An open-source desktop Bitcoin wallet with built-in CoinJoin. Its company-run coordinator shut down voluntarily in June 2024 after the Samourai arrests; the wallet itself survived and now coinjoins through independent third-party coordinators."
keyTakeaways:
  - "Built by zkSNACKs from 2018; version 2.0 (2022) introduced the WabiSabi protocol, which lets a coordinator build variable-amount coinjoins without learning which inputs and outputs belong together"
  - "zkSNACKs shut its coordinator down on June 1, 2024, a preemptive response to the Samourai Wallet prosecutions - the company itself was never charged with anything"
  - "The wallet did not die: it moved to community development, added coordinator selection so anyone can run or choose a coordinator, and kept shipping releases into 2026"
sources:
  - { label: "Wasabi Wallet blog - zkSNACKs discontinues its coinjoin coordination service (2024)", url: "https://blog.wasabiwallet.io/zksnacks-is-discontinuing-its-coinjoin-coordination-service-1st-of-june/" }
  - { label: "CoinDesk - Wasabi coordinator to blacklist certain bitcoin transactions (2022)", url: "https://www.coindesk.com/tech/2022/03/14/wasabi-wallets-coinjoin-coordinator-to-blacklist-certain-bitcoin-transactions" }
  - { label: "WabiSabi paper - IACR ePrint 2021/206", url: "https://eprint.iacr.org/2021/206" }
relatedTerms:
  - coinjoin
  - whirlpool-samourai
  - joinmarket
  - joinstr
  - chain-analysis
  - coin-control
sameAs:
  - "https://github.com/WalletWasabi/WalletWasabi"
liveWidget: ~
---

Wasabi is an open-source, non-custodial desktop wallet whose defining feature is built-in [CoinJoin](/glossary/coinjoin). It was developed by a company called zkSNACKs and first released in 2018. Version 2.0, in June 2022, made coinjoining automatic and switched to the WabiSabi protocol, a piece of real cryptographic engineering: a central coordinator arranges variable-amount coinjoins using blinded credentials, so it can build the transaction without ever learning which inputs and outputs belong to the same person. The coordinator never holds funds and cannot steal them.

Two controversies define Wasabi's history. In March 2022, zkSNACKs announced its coordinator would start refusing coins flagged by a [chain-analysis](/glossary/chain-analysis) provider. A privacy tool paying a surveillance firm to screen its users was, to put it gently, a hard sell, and rival [Samourai](/glossary/whirlpool-samourai) made the most of it. In fairness, the filtering applied only to zkSNACKs' own coordinator, not to the protocol, and the wallet's architecture meant the company still could not identify users. It was still coordinator-level gatekeeping, and it hinted at the legal exposure that would end the coordinator two years later.

In April 2024, the US arrested Samourai Wallet's founders and treated their non-custodial coinjoin service as unlicensed money transmission. Within days zkSNACKs blocked US users; on May 2, 2024 it announced it was exiting the coordination business entirely, and its coordinator went offline on June 1. The shutdown was voluntary and preemptive. zkSNACKs was never arrested, charged, or sanctioned. It read the legal weather and got out.

People routinely say Wasabi shut down. It did not. The wallet software kept working, development moved to an open-source community organization, and the same June the app gained coordinator selection, so users can point it at any independently run WabiSabi coordinator (discoverable over Nostr relays, and anyone can run one, since the coordinator ships open-source). Later releases hardened the client against malicious coordinators and, by 2026, removed the last zkSNACKs-era server dependency. zkSNACKs is out of the picture; the wallet and the protocol carried on without it.
