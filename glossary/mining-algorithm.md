---
title: "Mining Algorithm"
slug: mining-algorithm
draft: false
shortDefinition: "Bitcoin uses SHA-256 double hashing (SHA-256D) for proof-of-work. Other coins may use alternative PoW algorithms."
keyTakeaways:
  - "Core to Bitcoin's PoW, requiring specialized ASIC hardware"
  - "Double-hash design fosters strong collision resistance"
  - "Shifting away from SHA-256 would be a major disruptive move"
sources: []
relatedTerms:
  - asic-application-specific-integrated-circuit
  - asic-resistance
  - competitive-mining
  - cpu-mining
  - difficulty-retargeting
  - energy-fud
  - hash-rate
  - hash-rate-derivative
  - hashlet
  - hidden-miner-tax
  - merged-mining
  - miner
  - miner-capitulation
  - miner-extractable-value-mev
  - mining
  - mining-pool
  - mining-centralization
  - mining-colocation
  - mining-rig
  - mining-software
  - proof-work-pow
  - retail-mining
  - revenue-ths
liveWidget: ~
---

Bitcoin's mining algorithm is **SHA-256d** - the double application of SHA-256 (`SHA-256(SHA-256(header))`). [Miners](/glossary/miner) compute this hash on candidate [block headers](/glossary/block-header) until the result falls below the current [difficulty](/glossary/difficulty) target.

The double-hash design isn't arbitrary. It defends against **length-extension attacks**, a known weakness of single-pass SHA-256 where an attacker who knows `SHA-256(x)` can compute `SHA-256(x || y)` for some `y` without knowing `x`. Double hashing breaks this property. The cost is a 2× computational hit on the hashing operation; the security benefit was judged worth it.

Other cryptocurrencies use different algorithms - Scrypt (Litecoin), Ethash (legacy Ethereum), RandomX (Monero), Equihash (Zcash), and many others. Each design choice reflects priorities: ASIC-resistance, memory-hardness, energy efficiency, or just protocol differentiation.

For Bitcoin, SHA-256d is locked in by:

- **Massive hardware sunk cost.** The global Bitcoin mining industry has spent billions on SHA-256-specific [ASICs](/glossary/asic-application-specific-integrated-circuit). Changing the algorithm would brick all that hardware.
- **A required hard fork.** Any algorithm change is a [hard fork](/glossary/fork), which Bitcoin's consensus mechanism makes nearly impossible to deploy.
- **No real demand to change.** SHA-256 hasn't broken in 25+ years of cryptanalysis. The security argument for switching doesn't hold.

The algorithm choice is one of the most permanent parts of Bitcoin's design. Even discussions about "post-quantum migration" focus on signature schemes (ECDSA → quantum-resistant signatures), not the hashing algorithm. SHA-256 is here for the duration. See [Proof-of-Work](/glossary/proof-work-pow) for the broader mechanism this algorithm is the engine of.
