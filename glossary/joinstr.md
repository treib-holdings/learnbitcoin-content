---
title: "Joinstr"
slug: joinstr
draft: false
published: "2026-07-13"
shortDefinition: "An experimental CoinJoin design that coordinates mixing rounds over Nostr relays instead of a dedicated coordinator. Interesting precisely because there is nothing to seize - but as of 2026 it remains a niche proof of concept, not a production tool."
keyTakeaways:
  - "Announced on the bitcoin-dev mailing list in August 2022 by a pseudonymous developer, explicitly as a proof of concept"
  - "Participants find each other and exchange partially signed transactions through ordinary Nostr relays, which are generic, interchangeable, and never touch funds; there is no coordinator fee, only the mining fee"
  - "Every public release is labeled experimental or pre-alpha, and no independent data shows meaningful real-world usage - an honest description is promising design, unproven adoption"
sources:
  - { label: "bitcoin-dev mailing list - joinstr announcement (2022)", url: "https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2022-August/020875.html" }
  - { label: "Bitcoin Optech Newsletter #214 (2022)", url: "https://bitcoinops.org/en/newsletters/2022/08/24/" }
  - { label: "Joinstr documentation", url: "https://docs.joinstr.xyz" }
relatedTerms:
  - coinjoin
  - joinmarket
  - wasabi-wallet
  - whirlpool-samourai
  - mixing-service
liveWidget: ~
---

Joinstr is a [CoinJoin](/glossary/coinjoin) design that answers the coordinator problem by not having one. Participants discover mixing pools and coordinate rounds over Nostr, the open relay network better known for social media. Each participant registers a fresh output address, then contributes a partially signed transaction covering its own input and everyone's equal-sized outputs; combined, those become one CoinJoin. The relays that carry the messages are ordinary Nostr relays: generic, interchangeable, run by strangers for other purposes, and never in contact with anyone's money.

After 2024, that architecture became the whole point. Prosecutors took down [Samourai's](/glossary/whirlpool-samourai) coordinator and scared [Wasabi's](/glossary/wasabi-wallet) into retirement because a coordinator is a business you can charge. A mixing round arranged over public relays by pseudonymous participants offers no such handle. Joinstr also charges nothing beyond the mining fee, since there is no operator to pay.

The honesty requirement cuts the other way, though. Joinstr was announced on the bitcoin-dev mailing list in August 2022 by its pseudonymous developer as an explicit proof of concept, with the denial-of-service and Sybil weaknesses acknowledged in the same thread. Years later, the public artifacts are still an Electrum plugin marked pre-alpha, an experimental Rust library that warns against mainnet use, and documentation. No independent measurements show meaningful mixing volume. [JoinMarket](/glossary/joinmarket) has run for a decade and struggles to keep maintainers; Joinstr has yet to show that anyone much uses it at all.

It earns its place in the privacy conversation as a direction of travel: coordination pushed onto infrastructure so generic that shutting it down would mean shutting down Nostr itself. Whether it matures into something people actually use is, as of 2026, genuinely unsettled.
