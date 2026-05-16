---
title: "Eclipse Attack"
slug: eclipse-attack
draft: false
shortDefinition: "A network-level attack in which a node is isolated from honest peers and fed a manipulated view of the blockchain."
keyTakeaways:
  - "Cuts a node off from honest peers, controlling its entire network view"
  - "Enables manipulation of block/transaction data for double spends"
  - "Mitigated by peer diversification and robust node configurations"
sources: []
relatedTerms:
  - dedicated-ip-nodes
  - i2p-invisible-internet-project
  - node
  - race-attack
  - replay-attack
  - resource-exhaustion-attack
  - tor-hidden-service
sameAs:
  - "https://bitcoinops.org/en/topics/eclipse-attacks/"
liveWidget: ~
---

An eclipse attack is when an attacker monopolizes all of a target [node's](/glossary/node) peer connections, isolating it from the honest network and feeding it a fabricated view of the chain. The eclipsed node can be tricked into accepting invalid blocks, missing real blocks, or treating reverted transactions as confirmed.

The mechanics:

1. The attacker spins up many sybil peer identities, typically on cheap VPS infrastructure.
2. They manipulate the target node's [peer-discovery](/glossary/peer-discovery) process - flooding it with their own peer addresses, exhausting its connection slots, or exploiting weaknesses in how peers are evicted and replaced.
3. Eventually, all the target's outbound connections go to attacker-controlled peers.
4. The attacker can now show the target whatever version of the chain they want.

What an eclipse attack enables:

- **Double-spend against the victim.** The attacker accepts payment from the victim, lets them see the confirmation on the eclipsed fake chain, then provides goods/services - while on the real chain, the transaction never actually happened.
- **Withhold real blocks.** Keep the victim believing the chain is stalled.
- **Force chain re-organization** (against the victim's view only) by switching them between forks.

Why eclipses are hard in practice:

- **Bitcoin Core takes peer diversity seriously.** Peer selection algorithms try to spread connections across different IP ranges using [asmap](/glossary/asmap) topology data.
- **Outbound connections are protected.** Even if all inbound slots are taken by an attacker, outbound connections to randomly-discovered peers usually break the eclipse.
- **Running over [Tor](/glossary/tor-hidden-service)** makes targeting your specific node much harder.

The original academic Bitcoin eclipse-attack paper (Heilman et al., 2015) demonstrated the technique. Bitcoin Core has since shipped multiple mitigations. A well-configured node with good peer diversity is hard to eclipse, but a default-configured node on a less-defended setup remains a viable target. See [Full Node](/glossary/full-node) for the defensive setup that matters here.
