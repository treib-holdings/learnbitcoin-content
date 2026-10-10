---
title: "Node Autoban"
slug: node-autoban
draft: false
updated: "2026-10-10"
shortDefinition: "Bitcoin Core's old practice of scoring misbehaving peers and banning their IP addresses for 24 hours, since replaced by disconnection and discouragement."
keyTakeaways:
  - "Older Bitcoin Core versions gave misbehaving peers points and banned an address for 24 hours once it reached 100"
  - "Since 0.20.1 (2020) misbehaving peers are discouraged instead of banned, and since 28.0 (2024) a single offense is enough"
  - "Bans now happen only when an operator sets one by hand, and neither bans nor discouragement stop an attacker who can switch IP addresses"
sources:
  - { label: "Bitcoin Core 0.20.0 source - src/init.cpp: -banscore sets the threshold for disconnecting misbehaving peers and -bantime the number of seconds to keep misbehaving peers from reconnecting; the ban list is created with the -bantime default (released June 3, 2020)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v0.20.0/src/init.cpp" }
  - { label: "Bitcoin Core 0.20.0 source - src/validation.h: DEFAULT_BANSCORE_THRESHOLD, the -banscore default, is 100 (released June 3, 2020)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v0.20.0/src/validation.h" }
  - { label: "Bitcoin Core 0.20.0 source - src/banman.h: DEFAULT_MISBEHAVING_BANTIME, the -bantime default, is 60 * 60 * 24 seconds, a 24-hour ban (released June 3, 2020)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v0.20.0/src/banman.h" }
  - { label: "Bitcoin Core 0.20.0 source - src/net_processing.cpp: Misbehaving() adds points to a peer's score, 100 for an invalid block or a consensus-invalid transaction and 20 for an addr message over 1,000 entries or an oversized inv message; at the threshold the peer's address is banned, except for whitelisted (noban) and manually connected peers (released June 3, 2020)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v0.20.0/src/net_processing.cpp" }
  - { label: "Bitcoin Core - 0.20.1 release notes: misbehaving peers are now discouraged, not banned (#19219, Replace automatic bans with discouragement filter); they were not strictly banned before either, since incoming connections were still allowed; discouragement is not kept over restarts, cannot be listed or removed with setban, and may time out at an indeterminate time (August 1, 2020)", url: "https://bitcoincore.org/en/releases/0.20.1/" }
  - { label: "Bitcoin Core - CVE-2020-14198 disclosure: the unlimited list of banned IP addresses could be grown by an attacker, leading to an out-of-memory crash and CPU denial of service; fixed by #19219 in 0.20.1; official public disclosure (July 3, 2024)", url: "https://bitcoincore.org/en/2024/07/03/disclose-unbounded-banlist/" }
  - { label: "GitHub bitcoin/bitcoin #29575 - make any misbehavior trigger immediate discouragement: until then discouragement triggered at a score of 100; more than 1000 addresses in an addr message or more than 50000 entries in an inv message used to score 20; removes score accumulation so any misbehavior causes disconnection and discouragement, and stops counting two header-related offenses that scored 10 and 20 (merged June 20, 2024)", url: "https://github.com/bitcoin/bitcoin/pull/29575" }
  - { label: "Bitcoin Core 28.0 source - src/net_processing.cpp: Misbehaving() takes no score and marks the peer to be discouraged (released October 2, 2024)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v28.0/src/net_processing.cpp" }
  - { label: "GitHub bitcoin/bitcoin #33050 - don't punish peers for consensus-invalid txs: removed because peers were never punished for non-standard transactions, so the check gave no protection, and to reduce the risk of splitting the network when relay policy changes; milestone 30.0 (merged August 12, 2025)", url: "https://github.com/bitcoin/bitcoin/pull/33050" }
  - { label: "Bitcoin Core - 30.0 release notes: Bitcoin Core 30.0, the release #33050 was milestoned for, was published on October 10, 2025", url: "https://bitcoincore.org/en/releases/30.0/" }
  - { label: "Bitcoin Core 31.1 source - src/net_processing.cpp: one Misbehaving() call marks a peer to be disconnected and discouraged; the cases are invalid or mutated blocks, invalid headers, blocks that do not connect, outbound peers on a known-invalid chain, headers without valid proof of work or out of sequence, over 2,000 headers, bad compact block data, addr messages over 1,000 entries, inv or getdata over 50,000, and oversized or bad bloom filter messages; noban and manually connected peers are never punished, local peers are disconnected but not discouraged (released July 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/net_processing.cpp" }
  - { label: "Bitcoin Core 31.1 source - src/net_processing.h: MAX_HEADERS_RESULTS is 2000; DEFAULT_PEERBLOOMFILTERS is false, so bloom filter support is off by default (released July 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/net_processing.h" }
  - { label: "Bitcoin Core 31.1 source - src/banman.h: bans are set by hand with setban, stored to disk and reloaded on startup; misbehaving peers are discouraged instead of banned, as they once were; discouraged peers are never connected to, not gossiped and preferred for eviction; discouragement is a bloom filter that cannot be listed or unmarked; neither banning nor discouragement protects against denial of service; automatic punishment risks splitting the network (released July 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/banman.h" }
  - { label: "Bitcoin Core 31.1 source - src/net.cpp: discouraged and banned addresses are not connected out to; a discouraged peer's incoming connection is dropped when inbound slots are almost full, and otherwise marked to be preferred for eviction (released July 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/net.cpp" }
  - { label: "Bitcoin Core 31.1 source - src/rpc/net.cpp: setban adds or removes a ban on an IP address or subnet, for 24 hours by default (changeable with -bantime); listbanned lists manual bans and clearbanned clears them all (released July 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/rpc/net.cpp" }
  - { label: "Bitcoin Core 31.1 source - src/init.cpp: -bantime is the default duration of manually configured bans; the ban list is kept in the node's own data directory (released July 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/init.cpp" }
relatedTerms:
  - bitcoin-satellite
  - dedicated-ip-nodes
  - eclipse-attack
  - full-node
  - node
  - node-headcount
  - node-operator
  - node-synchronization
  - node-uptime
  - peer-management
  - resource-exhaustion-attack
liveWidget: ~
---

"Node autoban" describes how Bitcoin Core used to deal with peers that broke the rules. It kept a score for each peer, and once a peer scored high enough, the node banned it automatically. Current versions don't do this. They disconnect a misbehaving peer after its first offense and "discourage" its address instead of banning it.

## How it used to work

In Bitcoin Core 0.20.0 (June 2020) and earlier, every peer had a misbehavior score that started at zero. Each offense added points. Serious ones, like sending an invalid block or a transaction that broke the consensus rules, cost 100 points at once. Lesser ones, like an address message with more than 1,000 entries or an inventory message with more than 50,000, cost 20. When a peer reached 100 points (the default, which the `-banscore` setting could change), the node disconnected it and put its IP address on the ban list for 24 hours (the `-bantime` default). Peers on the operator's whitelist, and peers the operator had added by hand, were never punished.

By then the ban was softer than the name suggests. The 0.20.1 release notes point out that these peers were not strictly banned: they could still connect in, and were simply the first to be dropped when the node needed room.

## What changed

- **0.20.1 (August 2020): discouragement replaces automatic bans.** Misbehaving peers stopped going on the ban list and went into a separate "discouraged" list instead. The score stayed, but reaching 100 now meant discouragement. The change also fixed a bug: the ban list had no size limit, and an attacker could make it grow until the node ran out of memory or bogged down. Bitcoin Core published the full details of that bug, CVE-2020-14198, in July 2024.
- **28.0 (October 2024): no more score.** The points system was removed. Any misbehavior now gets a peer disconnected and discouraged straight away. Two minor header-related offenses that used to cost 10 or 20 points stopped counting at all.
- **30.0 (October 2025): invalid transactions no longer count.** A peer that relays a transaction breaking the consensus rules is no longer discouraged. The node just rejects the transaction. The change's author reasoned that peers were never punished for non-standard transactions anyway, so the check gave no real protection, and dropping it lowers the risk of splitting the network when relay rules change.

## What Bitcoin Core does now

In Bitcoin Core 31.1, a peer that misbehaves once is disconnected and its address is discouraged. A discouraged address:

- is never connected out to,
- is not passed on to other peers when the node shares addresses,
- can still connect in, but is turned away when the node's inbound slots are almost full, and is the first to be dropped when the node needs room for a new incoming peer.

Discouragement is kept only in memory. It can't be listed or undone one address at a time, it is forgotten when the node restarts, and an entry can fade out as new ones are added.

Bans still exist, but only by hand. An operator can ban an IP address or a whole range with the `setban` command (for 24 hours by default, changeable with `-bantime`), see bans with `listbanned`, and lift them one at a time with `setban` or all at once with `clearbanned`. A banned address can't connect in, the node won't connect out to it, and bans are saved to disk so they survive a restart. Each node keeps its own ban list in its own data directory. There is no shared list for the whole network.

## What gets a peer discouraged

In Bitcoin Core 31.1, these count as misbehavior:

- **Bad blocks.** A block that breaks the consensus rules or has been tampered with, a block header that is invalid or builds on an invalid block, or a block whose parent the node doesn't know. Some of these are let off when the block came through the faster compact-block route. An outbound peer that sends a block from a chain the node already knows is invalid is discouraged too.
- **Bad headers.** Block headers without valid proof of work, headers that don't link up in order, or more than 2,000 headers in one message.
- **Bad compact block data.** An invalid [compact block](/glossary/bip-152-compact-blocks), transactions that don't fit the block they are meant to fill in, sending them twice, or asking for transactions past the end of a block.
- **Oversized lists.** More than 1,000 addresses in one `addr` message, or more than 50,000 entries in one `inv` or `getdata` message.
- **Bloom filter misuse**, on nodes that offer [bloom filters](/glossary/bloom-filter) (off by default): a filter over the size limit, or a `filteradd` message with an oversized item or no filter loaded.

Some peers are exempt. Peers with the `noban` permission (given with `-whitelist` or `-whitebind`) and peers added by hand with `-addnode`, `-connect` or the `addnode` command are never disconnected or discouraged for misbehavior. Peers connecting from the node's own machine, which includes incoming Tor connections, are disconnected but not discouraged, because discouraging that one address would hit every peer arriving the same way.

## What it is for

Bitcoin Core's code spells out the limits. Neither banning nor discouragement protects against denial-of-service attacks, because an attacker can reconnect from another IP address. What discouragement does is keep the node's limited connection slots from being used up by broken or incompatible peers. The same code warns that punishing peers too eagerly carries its own risk: if nodes cut off peers for a transaction that fails one of today's relay rules and a later version accepts it, the network could split between old and new nodes.

The defenses that do work against that kind of attack cap what any single message, transaction or connection can cost a node. See [resource exhaustion attack](/glossary/resource-exhaustion-attack).
