---
title: "Resource Exhaustion Attack"
slug: resource-exhaustion-attack
draft: false
updated: "2026-10-10"
shortDefinition: "A denial-of-service tactic flooding a node's CPU, memory, or bandwidth with spam or malformed data."
keyTakeaways:
  - "Targets node capacity with spammy or malformed data"
  - "Nodes defend with caps on mempool, message and transaction sizes, per-peer rate limits, and by disconnecting peers that break protocol rules"
  - "An ongoing problem: as of October 2026, Bitcoin Core's security advisories list denial-of-service fixes as recent as October 2025"
sources:
  - { label: "Bitcoin Core 31.1 source - src/kernel/mempool_options.h: DEFAULT_MAX_MEMPOOL_SIZE_MB is 300, the default cap on mempool memory use (released July 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/kernel/mempool_options.h" }
  - { label: "Bitcoin Core 31.1 source - src/txmempool.cpp: TrimToSize evicts the lowest-feerate transactions while the mempool is over its cap and raises the mempool minimum fee above the fee rate it evicted (released July 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/txmempool.cpp" }
  - { label: "Bitcoin Core 31.1 source - src/net.h: 125 connections by default, with slots for 8 full-relay, 2 block-relay-only and 1 feeler outbound connection taken out of the total before inbound peers get theirs; no message over 4 MB accepted; -maxuploadtarget unlimited by default (released July 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/net.h" }
  - { label: "Bitcoin Core 31.1 source - src/net_processing.cpp: one Misbehaving() call marks a peer to be disconnected and discouraged; an INV message with more than 50,000 entries counts as misbehavior; address records are processed at 0.1 per second per peer on average (released July 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/net_processing.cpp" }
  - { label: "Bitcoin Core 31.1 source - src/banman.h: bans are set by hand with setban; misbehaving peers are discouraged instead of banned, as they once were; discouraged peers are never connected to, not gossiped and preferred for eviction; neither banning nor discouragement protects against denial of service, since an attacker can reconnect from another IP address (released July 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/banman.h" }
  - { label: "Bitcoin Core 31.1 source - src/policy/policy.h: transactions over 400,000 weight units are not relayed; default cluster limit of 64 transactions (released July 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/policy/policy.h" }
  - { label: "Bitcoin Core 31.1 source - src/policy/policy.cpp: signature hashing costs O(ninputs*txsize), and the 400,000 weight-unit cap mitigates CPU exhaustion attacks (released July 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/policy/policy.cpp" }
  - { label: "Bitcoin Core 31.1 source - src/consensus/consensus.h: block weight limit of 4,000,000 and block signature-operation cost limit of 80,000 (released July 2026)", url: "https://raw.githubusercontent.com/bitcoin/bitcoin/v31.1/src/consensus/consensus.h" }
  - { label: "BIP 143 - Transaction Signature Verification for Version 0 Witness Program: legacy hashing grows with the square of the sigop count, a 1 MB transaction with 5,569 sigops could take 25 seconds to verify against about 2 seconds for a 1 MB block in 2015, and the new digest applies only to version 0 witness programs", url: "https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki" }
  - { label: "Bitcoin Core - CVE-2018-17144 full disclosure: the bug had both a denial-of-service component and an inflation vulnerability (September 20, 2018)", url: "https://bitcoincore.org/en/2018/09/20/notice/" }
  - { label: "Bitcoin Core - security advisories: remote crashes and memory or CPU exhaustion from malformed or spammed P2P messages (addr, getdata, INV, headers), and two disk-filling bugs fixed in v30.0 on October 10, 2025 (list as of October 2026)", url: "https://bitcoincore.org/en/security-advisories/" }
relatedTerms:
  - eclipse-attack
  - fee-sniping
  - griefing-attack
liveWidget: ~
---

A resource exhaustion attack is the broad category of denial-of-service attacks where the attacker tries to use up a target node's CPU, memory, disk, or bandwidth so the node fails or becomes useless.

The shapes a resource exhaustion attack can take against Bitcoin nodes:

- **Mempool spam.** Flood the network with low-fee transactions to fill up mempool memory. Mitigated by a size cap on each node's [mempool](/glossary/mempool), 300 MB of memory by default in Bitcoin Core. When the mempool is full, the node evicts the transactions paying the lowest fee rate and raises the minimum fee rate it will accept, so the spam has to actually pay competitive fees, which gets expensive.
- **CPU exhaustion via expensive scripts.** With Bitcoin's original signature scheme, checking each signature means hashing data that grows with the size of the whole transaction, so for a big transaction full of signatures the total work grows roughly with the square of its size. BIP 143 gives a 2015 example: a normal 1 MB block took about 2 seconds to verify, but a single 1 MB transaction with 5,569 signature operations could take 25 seconds. [BIP 143](/glossary/bip-143), part of the SegWit upgrade, fixed this for the new inputs SegWit introduced, which hash the shared parts of a transaction once and reuse the result. Older-style inputs still work the old way, so Bitcoin Core will not relay a transaction heavier than 400,000 weight units, a tenth of a block. Its code says this cap "mitigates CPU exhaustion attacks."
- **Bandwidth flooding.** Send oversized or endless `INV`, `addr` or `getdata` messages, or keep asking for data, so the node spends its bandwidth, memory and CPU on garbage. Bitcoin Core rejects any message over 4 MB, disconnects a peer that sends an `INV` message listing more than 50,000 items, and processes on average no more than one address every ten seconds from each peer. Operators can also cap upload traffic with the `-maxuploadtarget` setting, which is unlimited by default.
- **Connection slot exhaustion.** Open many incoming connections to fill the node's inbound slots. Bitcoin Core allows 125 connections by default and keeps 11 of them for connections it opens itself (8 full-relay, 2 block-relay-only and 1 "feeler"), so incoming peers can never take them all.
- **Disk exhaustion.** Make the node fill up its disk. Bitcoin Core 30.0 (October 2025) fixed two bugs of this kind: an attacker could fill a node's disk by faking connections from the node to itself over a long time, or by sending it invalid blocks over and over.
- **Bug exploits.** Attacks aimed at specific bugs in node software. CVE-2018-17144, fixed in September 2018, was both a denial-of-service bug and an inflation bug. Bitcoin Core's security advisories list many other fixed bugs where spammed or malformed P2P messages (`addr`, `INV`, `getdata`, headers) could crash a node or use up its memory or CPU.

The defense layers:

- **Consensus rules.** Limits every node enforces on blocks, such as the block weight limit of 4 million weight units and a cap on signature operations per block, plus SegWit's faster signature hashing.
- **Bitcoin Core's relay policy.** Rules each node applies to unconfirmed transactions and to its peers: the mempool size cap and eviction, the 400,000 weight-unit cap on the transactions it relays, a default limit of 64 linked unconfirmed transactions in one cluster, message size caps, rate limits, and connection slot management.
- **Per-peer consequences.** A peer that breaks certain protocol rules is disconnected after a single offense, and its address is "discouraged": the node will not connect out to it or pass its address on, and drops it first when it needs room for new incoming peers. Bitcoin Core used to ban misbehaving peers automatically. Now a ban happens only when the operator sets one with the `setban` command.
- **The economic floor.** A full mempool raises the fee rate a transaction needs to get in, and spam that gets mined costs its sender real fees.

Bitcoin Core's own code points out the limit of blocking peers: neither banning nor discouraging an address protects against a denial-of-service attack, because the attacker can reconnect from another IP address. Most of the defenses above work differently. They cap what any single message, transaction or connection can cost a node, whoever sends it.
