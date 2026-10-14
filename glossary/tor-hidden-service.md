---
title: "Tor Hidden Service"
slug: tor-hidden-service
draft: false
updated: "2026-10-13"
shortDefinition: "Hosting a Bitcoin node or service over Tor, hiding real IP addresses and enhancing privacy/censorship resistance."
keyTakeaways:
  - "Conceals node location and blocks direct IP correlation"
  - "Important for anonymity, avoids certain ISP or state-level blocking"
  - "Can be slower due to Tor's layered encryption and relay hops"
sources:
  - { label: "Tor Project - Onion services (support site): onion services, formerly known as hidden services, are reachable only through the Tor network, and their location and IP address are hidden, making it difficult for adversaries to censor them or identify their operators", url: "https://support.torproject.org/onionservices/" }
  - { label: "Tor Project - How do onion services work: the complete connection between a client and an onion service consists of 6 relays, 3 picked by each side; the service reaches its introduction points over three-hop circuits", url: "https://community.torproject.org/onion-services/overview/" }
  - { label: "Tor Metrics - Performance, circuit round-trip latencies (onion server measurements, July 1 to September 21, 2026): the median of the daily median round trips is about 440 ms, from about 290 ms at the German vantage point to about 700 ms at the Hong Kong one", url: "https://metrics.torproject.org/onionperf-latencies.html" }
  - { label: "Bitcoin Core - doc/tor.md: run bitcoind -proxy=127.0.0.1:9050 to reach the network through Tor; when Tor's control port is reachable, Bitcoin Core automatically creates an onion service to listen on", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/tor.md" }
  - { label: "Bitcoin Core 0.7.0 release notes (September 2012): Tor hidden service support, SOCKS5 proxy by default, and -onlynet to connect only over IPv4, IPv6 or Tor", url: "https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.7.0.md" }
  - { label: "Bitcoin Core 0.12.0 release notes (February 23, 2016): when Tor is running and authorization is available, Bitcoin Core automatically creates a hidden service to listen on, without manual configuration", url: "https://bitcoincore.org/en/releases/0.12.0/" }
  - { label: "Bitcoin Core 26.0 release notes (December 6, 2023): nodes with multiple reachable networks keep at least one outbound connection to each, which improves resistance to eclipse attacks and to network partition", url: "https://bitcoincore.org/en/releases/26.0/" }
relatedTerms:
  - hidden-service-node
  - i2p-invisible-internet-project
  - json-rpc-over-tor
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

- **Network-layer privacy.** Your real IP doesn't appear in peer lists, isn't visible to [chain analysis](/glossary/chain-analysis) firms scanning the gossip network, and isn't logged by other node operators.
- **Censorship resistance.** An onion service's location and IP address are hidden, which the Tor Project says makes it difficult for adversaries to censor it or identify its operator. A blocklist of known Bitcoin node IPs cannot include yours, because the IP behind a `.onion` address is never announced to the network.
- **Protection against [eavesdropping attacks](/glossary/eavesdropping-attack).** Without your IP, observers can't easily correlate your broadcasts with your physical location or identity.
- **A second network to peer over.** Since version 26.0, Bitcoin Core keeps at least one outbound connection on every network it can reach, which its release notes say improves resistance to [eclipse attacks](/glossary/eclipse-attack). A node that is on Tor as well as the clear internet is harder to box in than one on either alone.

The cost is latency. A connection to an onion service runs through six relays, three picked by each side, and the Tor Project's own measurements put the round trip through an onion circuit at a few hundred milliseconds in 2026, about 440 at the median. For Bitcoin's needs - block propagation every ~10 minutes, transactions that propagate over seconds - this latency is essentially invisible in practice. Block- and transaction-relay over Tor work fine.

Bitcoin Core has shipped Tor support since version 0.7 in 2012, and since version 0.12 in 2016 it creates an onion service for you automatically when it can reach a Tor control port. Running your node behind Tor is a single config-file change (`proxy=127.0.0.1:9050` plus a few related options). The same hidden-service pattern can also expose [RPC for remote management](/glossary/json-rpc-over-tor), letting you control your home node from anywhere without opening any firewall ports.

For self-custody users running a [full node](/glossary/full-node), running over Tor is the single biggest privacy upgrade you can make at the network layer. Strongly recommended for anyone who cares about not having their on-chain activity correlated with their home IP.

See [Privacy on Bitcoin](/rabbit-hole/bitcoin-privacy) for which leak Tor closes and which ones it does not touch.
