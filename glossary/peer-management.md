---
title: "Peer Management"
slug: peer-management
draft: false
updated: "2026-10-10"
shortDefinition: "Node policies deciding how many connections to keep, which peers to evict, and how to respond to misbehavior or spam."
keyTakeaways:
  - "Bitcoin Core keeps 11 of its 125 default connection slots for connections it opens itself, so incoming peers can never take them all"
  - "A peer that breaks protocol rules is disconnected and discouraged after one offense; there is no score, and bans are only set by hand"
  - "Outbound peers are spread across address ranges and networks to make it harder for one attacker to surround a node"
sources:
  - { label: "Bitcoin Core 31.1 source - src/net.h: 125 connections by default; 8 full-relay, 2 block-relay-only and 1 feeler outbound connection; 8 addnode connections; the feeler loop runs every 2 minutes and the extra block-relay-only loop every 5; inbound slots are the automatic connections left after the outbound ones (released July 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/net.h" }
  - { label: "Bitcoin Core 31.1 source - src/node/connection_types.h: full-relay connections relay blocks, addresses and transactions; block-relay-only connections help prevent partition attacks because, relaying no transactions or addresses, they are harder for a third party to detect; feelers are short-lived connections to check that a node is alive; manual connections from addnode, -addnode or -connect are never automatically disconnected or discouraged (released July 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/node/connection_types.h" }
  - { label: "Bitcoin Core 31.1 source - src/init.cpp: -maxconnections caps automatic connections at 125 by default, with -addnode connections limited separately to 8; -onlynet limits automatic outbound connections to chosen networks; -asmap uses a file or the embedded map for bucketing peers (released July 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/init.cpp" }
  - { label: "Bitcoin Core 31.1 source - src/net.cpp: only one outbound peer per IPv4/IPv6 network group; extra connections to get at least one outbound peer on each reachable network; extra short-lived block-relay-only peers every few minutes to make eclipse attacks very difficult; discouraged addresses are not connected out to (released July 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/net.cpp" }
  - { label: "Bitcoin Core 31.1 source - src/netgroup.cpp: network groups are /16 for IPv4 and /32 for most IPv6, or the AS number when an asmap is supplied (released July 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/netgroup.cpp" }
  - { label: "Bitcoin Core - 31.0 release notes: asmap data is embedded for the first time, but the option remains off by default and must be turned on with -asmap (April 19, 2026)", url: "https://bitcoincore.org/en/releases/31.0/" }
  - { label: "Bitcoin Core 31.1 source - src/node/eviction.cpp: inbound eviction protects noban peers, 4 by network group, the 8 with the lowest ping, 4 that recently sent new transactions, up to 8 peers that relay no transactions and 4 others that recently sent new blocks, and half of the rest by connection time with up to half of those spots for Tor, I2P, CJDNS and localhost peers; then prefers peers marked for eviction and drops the newest peer in the network group with the most connections (released July 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/node/eviction.cpp" }
  - { label: "Bitcoin Core 31.1 source - src/net_processing.cpp: one Misbehaving() call marks a peer to be disconnected and discouraged, for example for an invalid block or an inv message with more than 50,000 entries; noban and manually connected peers are never punished (released July 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/net_processing.cpp" }
  - { label: "Bitcoin Core 31.1 source - src/banman.h: bans are set by hand with setban; misbehaving peers are discouraged instead of banned, as they once were; discouraged peers are never connected to, not gossiped and preferred for eviction; neither banning nor discouragement protects against denial of service (released July 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/banman.h" }
relatedTerms:
  - bitcoin-core
  - eclipse-attack
  - node
  - node-operator
  - peer-bookmark
liveWidget: ~
---

Peer management is the set of rules a node uses to decide which connections to keep, which to drop, and how to respond to misbehavior.

Bitcoin Core's defaults, as of version 31.1:

- 8 outbound full-relay peers, which the node trades everything with: blocks, transactions and addresses.
- 2 outbound block-relay-only peers, which pass only blocks. Because they carry no transactions or addresses, outsiders have a harder time spotting these connections, which helps protect the node against attempts to cut it off from the rest of the network.
- 1 outbound "feeler" connection, made about every two minutes, which briefly checks whether a known address is still online and then disconnects.
- Up to 114 inbound peers. The `-maxconnections` setting (125 by default) caps the connections the node makes and accepts on its own, and the 11 outbound slots above come out of that total first.
- Up to 8 more connections to peers the operator names with `-addnode`, counted separately from `-maxconnections`.

Outbound peers are spread out on purpose. On IPv4 and IPv6, Bitcoin Core connects out to only one peer in each address group, which for IPv4 means each /16 range (addresses that share their first two numbers). If the operator turns on the `-asmap` option, the groups follow the network operator an address belongs to instead (see [asmap](/glossary/asmap)). Version 31.0 started shipping that map inside the program, but the option is still off by default. The node also tries to keep at least one outbound peer on each network it can reach (IPv4, IPv6, Tor, I2P and CJDNS), opening an extra connection when one is missing. And every few minutes it briefly connects to one more peer just to check for new blocks. The code says the point is to make [eclipse attacks](/glossary/eclipse-attack), where an attacker takes over all of a node's connections, very difficult to pull off.

When the inbound slots are full and a new peer wants in, the node looks for an inbound peer to drop. First it sets aside the ones it wants to keep: peers with the `noban` permission, 4 chosen by address group in a way an attacker can't predict, the 8 with the fastest ping times, the 4 that most recently sent it new transactions, up to 8 peers that don't relay transactions and 4 others that most recently sent it new blocks, and the longest-connected half of whoever is left, with some of those spots kept for peers on Tor, I2P, CJDNS or the same machine. Of the peers that remain, discouraged ones go first. Otherwise the node drops the newest peer from the address group with the most connections. If nobody is left to drop, the newcomer is turned away.

A peer that breaks certain protocol rules, for example by sending an invalid block or an oversized list of items, is disconnected after a single offense, and its address is "discouraged": the node won't connect out to it or pass its address on, and drops it first when it needs room for new incoming peers. There is no misbehavior score and no automatic ban. A ban happens only when the operator sets one with the `setban` command. Peers added by hand and peers with the `noban` permission are never punished this way. See [node autoban](/glossary/node-autoban) for how this used to work. Bitcoin Core's own code notes that neither banning nor discouraging an address stops a denial-of-service attack, since the attacker can come back from another IP address.

Operators can change most of this. `-maxconnections` sets the total, `-onlynet` limits automatic outbound connections to chosen networks, `-asmap` turns on grouping by network operator, and `-addnode`, `-connect` and `-whitelist` handle peers the operator picks by hand (see [peer bookmark](/glossary/peer-bookmark)).
