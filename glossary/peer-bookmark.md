---
title: "Peer Bookmark"
slug: peer-bookmark
draft: false
updated: "2026-10-10"
shortDefinition: "An informal name for node settings that tell a node to keep connecting to specific peers, named by IP address or hostname."
keyTakeaways:
  - "Keeps a node connected to chosen peers, retrying when a connection drops"
  - "Useful for linking your own nodes or running a private test network"
  - "Peers added this way are never disconnected or discouraged for misbehavior; -whitelist grants separate permissions, and by default only to incoming peers"
sources:
  - { label: "Bitcoin Core 31.1 source - src/init.cpp: -addnode connects to a node and tries to keep the connection open, up to 8 at a time, counted apart from -maxconnections; -connect connects only to the given nodes with the same rules as -addnode and turns off DNS seeding and listening by default; -whitelist and -whitebind add permissions, default download, noban, mempool and relay, and the in and out flags control whether -whitelist applies to incoming connections and/or manual ones, incoming only by default (released July 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/init.cpp" }
  - { label: "Bitcoin Core 31.1 source - src/rpc/net.cpp: the addnode command takes an IP address or hostname; nodes added with addnode or -connect are protected from DoS disconnection (released July 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/rpc/net.cpp" }
  - { label: "Bitcoin Core 31.1 source - src/net.cpp: added nodes are retried every 60 seconds; whitelist permissions apply to manual outbound connections only through the out list; noban peers may connect even when banned or discouraged (released July 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/net.cpp" }
  - { label: "Bitcoin Core 31.1 source - src/node/connection_types.h: manual connections from addnode, -addnode or -connect are never automatically disconnected or added to the discouragement filter (released July 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/node/connection_types.h" }
  - { label: "Bitcoin Core 31.1 source - src/net_permissions.cpp: what each permission does - noban (do not ban for misbehavior; implies download), download (getheaders during initial sync, no disconnect after the -maxuploadtarget limit), relay (relay even in -blocksonly mode, unlimited transaction announcements), mempool (BIP 35 mempool requests), addr, bloomfilter and forcerelay (released July 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/net_permissions.cpp" }
  - { label: "Bitcoin Core 31.1 source - src/net_permissions.h: noban peers can't be banned, disconnected or discouraged for misbehavior; the addr permission lets a peer request addresses without hitting a privacy-preserving cache and send unlimited amounts of addresses (released July 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/net_permissions.h" }
  - { label: "Bitcoin Core 31.1 source - src/net_processing.cpp: one Misbehaving() call marks a peer to be disconnected and discouraged; peers with noban and manually connected peers are never punished; the address rate limit of 0.1 per second on average can be bypassed with the addr permission, while an addr message over 1,000 entries still counts as misbehavior (released July 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/net_processing.cpp" }
  - { label: "Bitcoin Core 31.1 source - src/node/eviction.cpp: noban peers are protected from inbound eviction (released July 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/node/eviction.cpp" }
  - { label: "Bitcoin Core 31.1 source - src/addrman.h: the address manager keeps known peer addresses and saves them to peers.dat (released July 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/addrman.h" }
relatedTerms:
  - bitcoin-core
  - node
  - node-operator
  - peer-management
liveWidget: ~
---

"Peer bookmark" is an informal name for Bitcoin Core's settings that tell a node which peers to connect to:

- `-addnode=<ip>` adds a peer that the node connects to and tries to keep connected, on top of the peers it picks on its own. If the connection drops, the node keeps retrying, about once a minute. Up to 8 of these connections can be open at a time, counted separately from the `-maxconnections` limit. The `addnode` command does the same while the node is running.
- `-connect=<ip>` connects only to the peers listed, under the same rules as `-addnode`, and makes no other automatic outbound connections. It also turns off DNS seed lookups and listening for incoming connections, unless those are switched back on. This suits a setup where the operator wants full control, like a private test network or a node that should only talk to machines its owner runs.

Typical uses:

- Someone running two nodes, say one at home and one on a rented server, can point each at the other with `-addnode` so the two always stay connected.
- A business can keep its payment node linked to its own backup node the same way.
- A private test network or lab can use `-connect` so each node talks only to the machines the operator chose.

Peers added with `-addnode`, `-connect` or the `addnode` command already get gentle treatment: Bitcoin Core never disconnects or discourages them for misbehavior.

The `-whitelist` setting does something else. It gives extra permissions to peers at chosen IP addresses or ranges. By default it applies only to incoming connections. Its `in` and `out` flags choose whether it covers incoming connections, peers the node connects to by hand, or both. `-whitebind` does the same for every peer that connects to a chosen local address and port. With no permissions named, these peers get four:

- `noban`: never disconnected or discouraged for misbehavior, allowed to connect even if banned or discouraged, and never dropped to make room for a new incoming peer.
- `download`: can ask for block headers while the node is still syncing, and isn't cut off when the node reaches its `-maxuploadtarget` upload limit.
- `relay`: the node accepts their transactions even in blocks-only mode, with no cap on how many transaction announcements it tracks from them.
- `mempool`: can ask for a list of the transactions in the node's [mempool](/glossary/mempool).

Other permissions can be named one at a time. One example is `addr`, which frees a peer from the rate limit on the addresses it sends. There is no ban score for any of these to skip. In current versions of Bitcoin Core, a peer that misbehaves is disconnected and discouraged after one offense, unless it has `noban` or was added by hand (see [node autoban](/glossary/node-autoban) for how this used to work).

Without any of these settings, Bitcoin Core finds peers on its own, from addresses it has saved, addresses other peers pass along, and DNS seeds when it runs low (see [peer discovery](/glossary/peer-discovery)).
