---
title: "Proof-of-Work (PoW)"
slug: proof-work-pow
draft: false
shortDefinition: "Bitcoin's consensus mechanism where miners compute SHA-256 hashes until a valid block hash meets the target difficulty."
keyTakeaways:
  - "Requires massive computational effort to propose valid blocks"
  - "Ensures security by making attacks prohibitively expensive"
  - "Fundamental to Bitcoin's decentralized consensus design"
sources: []
relatedTerms:
  - anti-sybil-mechanism
  - bounty
  - byzantine-fault-tolerance
  - consensus-parameter
  - cuckoo-cycle
  - decentralization
  - difficulty
  - difficulty-retargeting
  - energy-fud
  - hash
  - nonce
  - nonce-exhaustion
  - poisson-process
liveWidget: ~
---

Proof-of-work is Bitcoin's consensus mechanism. It's the rule that turns electricity and time into the right to add a new block to the chain.

The mechanism is simple. To propose a block, a [miner](/glossary/miner) must produce a [block header](/glossary/block-header) whose [hash](/glossary/hash) is below a network-defined target. The only way to do this is to try [nonces](/glossary/nonce) until one happens to produce a low-enough hash. There's no algebra. There's no shortcut. The "work" is brute-force guessing on industrial-scale hardware - currently around 700 exahashes per second across the entire global mining network.

Three properties make PoW load-bearing for Bitcoin's security model:

- **Asymmetric cost.** Producing a valid hash takes trillions of attempts; verifying one takes a single hash. Honest nodes can validate blocks for free; attackers can't fake them cheaply.
- **Tied to real-world resources.** Hashing requires specialized chips and electricity, both of which exist in physical reality. You can't print proof-of-work the way you can print fiat.
- **[Difficulty](/glossary/difficulty) auto-adjusts** to keep block times near 10 minutes regardless of how much hash power joins or leaves. The security budget scales with adoption.

The standard critique is energy use. The standard defense is that the energy isn't waste - it's the cost of [securing the entire chain against tampering](/rabbit-hole/mining#7-energy-as-security-budget), and the marginal mining operation runs on energy that has no other buyer (stranded renewables, flared natural gas, off-peak hydro). See the [Mining rabbit hole](/rabbit-hole/mining) for the long version of both arguments.

PoW is the answer to the question Satoshi was trying to solve: how do you achieve trustless consensus over the internet without a central authority? Make agreement *expensive*. Make tampering *more* expensive. Let the cheapest path to revenue be honesty.
