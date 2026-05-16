---
title: "Tor Hidden Service"
slug: tor-hidden-service
draft: false
shortDefinition: "Hosting a Bitcoin node or service over Tor, hiding real IP addresses and enhancing privacy/censorship resistance."
keyTakeaways:
  - "Conceals node location and blocks direct IP correlation"
  - "Important for anonymity, avoids certain ISP or state-level blocking"
  - "Can be slower due to Tor's layered encryption and relay hops"
sources: []
relatedTerms:
  - hidden-service-node
  - i2p-invisible-internet-project
  - lightning-node
  - onion-routing-lightning
sameAs:
  - "https://en.wikipedia.org/wiki/Tor_(network)"
  - "https://www.wikidata.org/wiki/Q202044"
  - "https://en.wikipedia.org/wiki/.onion"
  - "https://www.wikidata.org/wiki/Q848715"
  - "https://en.bitcoin.it/wiki/Setting_up_a_Tor_hidden_service"
liveWidget: ~
---

A Tor hidden service - now officially called an **onion service** - is a network endpoint that's only reachable through the Tor network, identified by a `.onion` address. The endpoint's real IP location is hidden from both the user and the wider internet.

For a [Bitcoin node](/glossary/node), running as a Tor onion service provides:

- **Network-layer privacy.** Your real IP doesn't appear in peer lists, isn't visible to chainalysis firms scanning the gossip network, and isn't logged by other node operators.
- **Censorship resistance.** Governments or ISPs that try to block Bitcoin can block IP ranges, but blocking Tor itself is much harder (and crosses a much higher political line).
- **Protection against [eavesdropping attacks](/glossary/eavesdropping-attack).** Without your IP, observers can't easily correlate your broadcasts with your physical location or identity.
- **Protection against [eclipse attacks](/glossary/eclipse-attack).** Tor's random circuit selection makes it much harder for an attacker to predict or target your specific outbound peers.

The cost is latency. Tor adds ~200-500ms of round-trip time over normal internet routes due to its three-hop relay structure. For Bitcoin's needs - block propagation every ~10 minutes, transactions that propagate over seconds - this latency is essentially invisible in practice. Block- and transaction-relay over Tor work fine.

Bitcoin Core has shipped first-class Tor support since 2014. Running your node behind Tor is a single config-file change (`proxy=127.0.0.1:9050` plus a few related options). Many node-in-a-box products (Umbrel, Start9, RaspiBlitz) ship with Tor enabled by default.

For self-custody users running a [full node](/glossary/full-node), running over Tor is the single biggest privacy upgrade you can make at the network layer. Strongly recommended for anyone who cares about not having their on-chain activity correlated with their home IP.
