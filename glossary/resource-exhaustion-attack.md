---
title: "Resource Exhaustion Attack"
slug: resource-exhaustion-attack
draft: false
shortDefinition: "A denial-of-service tactic flooding a node's CPU, memory, or bandwidth with spam or malformed data."
keyTakeaways:
  - "Targets node capacity with spammy or malformed data"
  - "Nodes use auto-ban, mempool limits, or advanced relay to defend"
  - "Ongoing threat requiring performance and policy refinements"
sources: []
relatedTerms:
  - eclipse-attack
  - fee-sniping
  - griefing-attack
liveWidget: ~
---

A resource exhaustion attack is the broad category of denial-of-service attacks where the attacker tries to use up a target node's CPU, memory, disk, or bandwidth so the node fails or becomes useless.

The shapes a resource exhaustion attack can take against Bitcoin nodes:

- **Mempool spam.** Flood the network with low-fee transactions to fill up mempool memory. Mitigated by the [discard threshold](/glossary/discard-threshold) - low-fee transactions get evicted when memory is full, so the spam has to actually pay competitive fees, which gets expensive.
- **CPU exhaustion via expensive scripts.** Pre-SegWit, certain script patterns required quadratic-time hashing for signature verification. An attacker could construct a transaction that took seconds of CPU to verify. SegWit's [BIP 143](/glossary/segwit-segregated-witness-bip-141) sighash fixed this.
- **Bandwidth flooding.** Send many `INV` messages, request many blocks, force the node to use upstream bandwidth on garbage. Mitigated by per-peer rate limits and [node autoban](/glossary/node-autoban) for repeat offenders.
- **Connection slot exhaustion.** Open many incoming connections to fill the node's inbound slot limit. Mitigated by maxconnections and by reserving slots for outbound and "feeler" connections.
- **Disk exhaustion.** Push the node to fill its disk with logs or unconfirmed transaction data. Less of a problem with modern node software but historically a concern.
- **CVE-class attacks.** Targeted exploits of specific implementation bugs. The 2018 inflation bug (CVE-2018-17144) had a denial-of-service side effect as well as the inflation primary risk; certain crash bugs in early Bitcoin Core versions could be triggered by malformed P2P messages.

The defense layers:

- **Protocol-level mitigations.** SegWit's sighash fix, weight limits, script size limits, per-tx ancestor/descendant chain limits.
- **Bitcoin Core's policy layer.** Rate limits, ban scoring, mempool eviction, connection slot management.
- **Per-peer reputation.** A peer that misbehaves gets penalized; sustained misbehavior gets it disconnected and banned.
- **The economic floor.** Spam costs the spammer real fees, so sustained attacks are expensive.

The system holds up well in practice. Bitcoin's P2P network has been continuously attacked at low intensity by various actors for over a decade and has remained functional. Industrial-scale attacks would degrade performance for a while; they've never structurally broken the network.
