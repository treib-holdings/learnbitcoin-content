---
title: "JoinMarket"
slug: joinmarket
draft: false
published: "2026-07-13"
shortDefinition: "The original decentralized CoinJoin: a two-sided market where makers earn fees for providing mixing liquidity and takers pay to mix on demand. No coordinator to seize, which is why it survived 2024 - though by 2026 the original codebase was archived, with an independent successor carrying the network forward."
keyTakeaways:
  - "Announced by Chris Belcher in January 2015 and long maintained by Adam Gibson; Bitcoin Optech credits it as the first working CoinJoin implementation"
  - "The taker builds the transaction and negotiation happens over encrypted, replaceable relays, so there is no central coordinator that can be shut down or subpoenaed"
  - "The reference codebase was archived by its own maintainers in April 2026 for lack of development; the network lives on through the wire-compatible joinmarket-ng and the Jam web interface"
sources:
  - { label: "Bitcointalk - JoinMarket announcement thread (2015)", url: "https://bitcointalk.org/index.php?topic=919116.0" }
  - { label: "Bitcoin Optech - CoinJoin topic", url: "https://bitcoinops.org/en/topics/coinjoin/" }
  - { label: "JoinMarket reference implementation (archived 2026)", url: "https://github.com/JoinMarket-Org/joinmarket-clientserver" }
  - { label: "joinmarket-ng - successor implementation", url: "https://github.com/joinmarket-ng/joinmarket-ng" }
relatedTerms:
  - coinjoin
  - joinstr
  - wasabi-wallet
  - whirlpool-samourai
  - coin-control
liveWidget: ~
---

JoinMarket solved the problem every [CoinJoin](/glossary/coinjoin) design before it had failed on: getting strangers to show up and mix coins with you. It did that by building a market. Makers run always-on bots offering their coins as mixing liquidity and set their own fee. Takers pay that fee to assemble a CoinJoin at whatever time and amount suits them. Everyone keeps their own keys (no one ever takes custody), and the fee incentive does the work a coordinator would otherwise do.

Chris Belcher announced it on Bitcointalk in January 2015 under a title that summed up the pitch: "Coinjoin that people will actually use." Adam Gibson led the implementation and its maintenance for most of the following decade. Bitcoin Optech credits JoinMarket as the first CoinJoin implementation that actually worked.

The design choice that aged best is the absence of a coordinator. The taker constructs the transaction itself, and participants negotiate over end-to-end encrypted messages relayed through public IRC servers and Tor onion directory nodes - infrastructure that never touches funds and can be swapped out if any relay disappears. When the US prosecuted [Samourai's](/glossary/whirlpool-samourai) coordinator operators in 2024 and [Wasabi's](/glossary/wasabi-wallet) coordinator shut down in response, JoinMarket had nothing to seize and nobody to arrest. Later additions strengthened the market itself: fidelity bonds (2021) make it expensive for one entity to pose as many makers and deanonymize takers.

By 2026 the honest status is that the network outlived its original codebase. The reference implementation was archived by its own maintainers in April 2026 after development had stalled, with a final release warning users off unmaintained code. What continues is the network: joinmarket-ng, an independently started wire-compatible successor from late 2025, ships actively, and Jam, the web interface that softens JoinMarket's command-line-first learning curve, remains in development. Decentralization made JoinMarket impossible for prosecutors to kill. Nothing makes software immune to maintainer fatigue.
