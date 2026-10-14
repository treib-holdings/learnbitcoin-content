---
title: "Proof-of-Work (PoW)"
slug: proof-work-pow
draft: false
updated: "2026-10-13"
shortDefinition: "Bitcoin's consensus mechanism where miners compute SHA-256 hashes until a valid block hash meets the target difficulty."
keyTakeaways:
  - "Requires massive computational effort to propose valid blocks"
  - "Ensures security by making attacks prohibitively expensive"
  - "Fundamental to Bitcoin's decentralized consensus design"
sources:
  - { label: "Satoshi Nakamoto - Bitcoin whitepaper, section 4, Proof-of-Work (similar to Adam Back's Hashcash; verified by executing a single hash) and section 6, Incentive (2008)", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "Adam Back - Hashcash: A Denial of Service Counter-Measure; the scheme was first announced in May 1997 (2002)", url: "http://www.hashcash.org/papers/hashcash.pdf" }
  - { label: "Bitcoin Core - CheckProofOfWork in src/pow.cpp: the block hash must not exceed the target derived from nBits", url: "https://github.com/bitcoin/bitcoin/blob/master/src/pow.cpp" }
  - { label: "Bitcoin Core - nPowTargetTimespan of two weeks and nPowTargetSpacing of 10 minutes in src/kernel/chainparams.cpp", url: "https://github.com/bitcoin/bitcoin/blob/master/src/kernel/chainparams.cpp" }
  - { label: "Bitcoin Wiki - Difficulty: expected number of hashes to find a block is D * 2^48 / 0xffff, about D * 2^32", url: "https://en.bitcoin.it/wiki/Difficulty" }
  - { label: "mempool.space - Network hash rate and difficulty, last 30 days (JSON; fetched 13 October 2026: about 1,000 EH/s, difficulty 132.7 trillion)", url: "https://mempool.space/api/v1/mining/hashrate/1m" }
relatedTerms:
  - anti-sybil-mechanism
  - byzantine-fault-tolerance
  - consensus-parameter
  - decentralization
  - difficulty
  - difficulty-retargeting
  - energy-fud
  - grovers-algorithm
  - hash
  - incentive-compatibility
  - nonce
  - nonce-exhaustion
  - poisson-process
sameAs:
  - "https://en.wikipedia.org/wiki/Proof_of_work"
  - "https://www.wikidata.org/wiki/Q7249984"
  - "https://en.bitcoin.it/wiki/Proof_of_work"
liveWidget: ~
---

Proof-of-work is Bitcoin's consensus mechanism. It's the rule that turns electricity and time into the right to add a new block to the chain. Satoshi adapted it from Adam Back's Hashcash, an anti-spam scheme first published in 1997.

The mechanism is simple. To propose a block, a [miner](/glossary/miner) must produce a [block header](/glossary/block-header) whose [hash](/glossary/hash) is below a network-defined target. The only way to do this is to try [nonces](/glossary/nonce) until one happens to produce a low-enough hash. There's no algebra. There's no shortcut. The "work" is brute-force guessing on industrial-scale hardware - about 1,000 exahashes per second across the whole network as of October 2026.

Three properties make PoW load-bearing for Bitcoin's security model:

- **Asymmetric cost.** Producing a valid hash takes, on average, the difficulty times 2^32 attempts: at the October 2026 difficulty of about 133 trillion, that is roughly 570 sextillion (5.7 x 10^23) hashes. Verifying one takes a single hash. Honest nodes validate blocks at trivial cost; attackers can't fake them cheaply.
- **Tied to real-world resources.** Hashing requires specialized chips and electricity, both of which exist in physical reality. You can't print proof-of-work the way you can print fiat.
- **[Difficulty](/glossary/difficulty) auto-adjusts** every 2,016 blocks to keep block times near 10 minutes regardless of how much hash power joins or leaves. More hash power raises the cost of an attack, not the block rate.

The standard critique is energy use. The standard defense is that the energy isn't waste - it's the cost of [securing the entire chain against tampering](/rabbit-hole/mining#7-energy-as-security-budget), and the marginal mining operation runs on energy that has no other buyer (stranded renewables, flared natural gas, off-peak hydro). See the [Mining rabbit hole](/rabbit-hole/mining) for the long version of both arguments.

PoW is the answer to the question Satoshi was trying to solve: how do you achieve trustless consensus over the internet without a central authority? Make agreement *expensive*. Make tampering *more* expensive. Let the cheapest path to revenue be honesty. This is the property game theorists call [incentive compatibility](/glossary/incentive-compatibility) - and it's what lets Bitcoin run on rational self-interest instead of trust.
