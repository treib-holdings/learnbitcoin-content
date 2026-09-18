---
title: "Joinstr"
slug: joinstr
draft: false
published: "2026-07-13"
updated: "2026-09-17"
shortDefinition: "A CoinJoin design that coordinates rounds over Nostr relays, with no coordinator to run, pay, or seize. It began as a 2022 proof of concept; by 2026 it ships as an Electrum plugin, an Android app, and an Umbrel app with mainnet supported, and its usage is still small and hard to measure."
keyTakeaways:
  - "Announced on bitcoin-dev in August 2022 by the pseudonymous developer /dev/fd0 (also 1440000bytes) as an explicit proof of concept; pools are advertised as Nostr events of kind 2022 and joined over encrypted direct messages"
  - "Shipping software as of September 2026: Electrum plugin 0.4.1, Android app 0.2.0, an Umbrel app added in July 2026, a headless daemon and CLI, a fork of Sparrow Wallet, and a Rust library with no tagged release"
  - "Ring signatures against denial of service arrived in June 2026 and optional sybil resistance in July 2026; pools that do not opt in have none, and there is no public count of completed rounds"
sources:
  - { label: "bitcoin-dev mailing list - joinstr announcement (2022, archive mirror)", url: "https://www.mail-archive.com/bitcoin-dev@lists.linuxfoundation.org/msg11887.html" }
  - { label: "Bitcoin Optech Newsletter #214 (2022)", url: "https://bitcoinops.org/en/newsletters/2022/08/24/" }
  - { label: "Bitcoin Optech Newsletter #308 - Electrum plugin (2024)", url: "https://bitcoinops.org/en/newsletters/2024/06/21/" }
  - { label: "Joinstr documentation - FAQ", url: "https://docs.joinstr.xyz/users/faqs" }
  - { label: "Joinstr protocol document (Nostr kind 2022, DoS and sybil mitigations)", url: "https://gitlab.com/invincible-privacy/joinstr/-/blob/main/NIP.md" }
  - { label: "Joinstr source repository (plugin, daemon, CLI, web UI)", url: "https://gitlab.com/invincible-privacy/joinstr" }
  - { label: "Umbrel app store - Joinstr", url: "https://apps.umbrel.com/app/joinstr" }
  - { label: "Joinstr Rust library (rust-joinstr organization, 2026)", url: "https://github.com/rust-joinstr/joinstr" }
relatedTerms:
  - coinjoin
  - joinmarket
  - wasabi-wallet
  - whirlpool-samourai
  - mixing-service
  - payjoin
  - chain-analysis
liveWidget: ~
---

Joinstr is a [CoinJoin](/glossary/coinjoin) design that answers the coordinator problem by not having one. A participant who wants to mix publishes a pool as a Nostr event, kind 2022, on a relay: the denomination, the number of peers wanted, and how to reach it. Others find it by reading the relay, join over encrypted direct messages, register fresh output addresses, and each contributes a partially signed transaction covering its own input and everyone's equal-sized outputs. Combined, those become one CoinJoin. The relays are ordinary Nostr relays, run by strangers for other purposes, and never in contact with anyone's money. Nobody collects a coordinator fee, so the cost is the mining fee, on the order of a couple of thousand sats at 10 sat/vB by the project's own example.

After 2024, that architecture became the whole point. Prosecutors seized [Samourai's](/glossary/whirlpool-samourai) coordinator in April 2024, and zkSNACKs shut down [Wasabi's](/glossary/wasabi-wallet) within weeks; a coordinator is an operator who can be charged. A mixing round arranged over public relays by pseudonymous participants offers no such handle.

The project stopped being only a proof of concept in 2024. The Electrum plugin shipped as pre-alpha in June 2024, dropped the label within a few releases, added ring signatures against denial-of-service in June 2026 and optional sybil resistance in July 2026, and reached version 0.4.1 in August 2026. An Android app has supported mainnet since October 2024 and reached 0.2.0 in June 2026. An Umbrel app was added to that store in July 2026. A headless daemon and a command-line client exist, and a fork of Sparrow Wallet with Joinstr built in, maintained largely by Joinstr's own developer, shipped its first non-prerelease in August 2026; upstream Sparrow carries no Joinstr code. The Rust library moved to a new repository in February 2026, where the old warning against mainnet use was removed and work continued through July 2026; it has no tagged release. The documentation says mainnet is supported, and the pseudonymous developer who wrote the 2022 announcement still maintains most of it.

What nobody can show is how much it is used. There is no public count of completed rounds, Bitcoin Optech has not covered it since January 2025, and the pool announcements on the relays are the only observable trace. A query of the default relay in mid-September 2026 found a few hundred pool announcements over the preceding ten months, most of them two-person pools of 0.001 BTC over Tor, and an announcement is not a completed CoinJoin. Pools that do not opt into the sybil-resistance feature have none, which the protocol document says outright. It is working software with a small user base, and its main property, coordination over relays that anyone can run and that exist for other purposes, has not been tested by anyone trying to shut it down.

See [Privacy on Bitcoin](/rabbit-hole/bitcoin-privacy) for the whole 2024 story and where CoinJoin stands now.
