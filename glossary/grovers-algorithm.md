---
title: "Grover's Algorithm"
slug: grovers-algorithm
draft: true
shortDefinition: "The quantum algorithm that halves SHA-256's effective security - weakened, not broken - preserving Bitcoin's proof-of-work and hashed addresses at reduced margin."
keyTakeaways:
  - "Quadratic speedup on unstructured search - meaningful but not catastrophic"
  - "Halves SHA-256's effective security from 256-bit to 128-bit (still very strong)"
  - "Bitcoin's existential quantum threat is Shor's on signatures, not Grover's on hashes"
sources: []
relatedTerms:
  - post-quantum-bitcoin
  - shors-algorithm
  - crqc-cryptographically-relevant-quantum-computer
  - hash
  - proof-work-pow
  - p2pkh-pay-public-key-hash
  - p2wpkh-pay-witness-public-key-hash
  - difficulty
liveWidget: ~
---

Grover's algorithm, published by Lov Grover in 1996, provides quadratic speedup on unstructured search problems. Applied to Bitcoin, it weakens [SHA-256](/glossary/hash) and mildly speeds up mining, but doesn't break either. It's the lesser of Bitcoin's two quantum-threat exposures - and the one that doesn't cause existential risk.

## What it does

Classical search through an unstructured space of N possibilities takes O(N) time on average. Grover's reduces this to O(sqrt(N)) on a quantum computer.

For Bitcoin:

- Brute-forcing a 256-bit hash classically takes ~2^256 operations. Practically impossible.
- Under Grover's, the same task takes ~2^128 operations. Still very large - beyond practical attack range.

Effective security halves in the exponent: 256-bit becomes 128-bit. This is a haircut, not a guillotine. 128-bit symmetric security is the standard floor for cryptographic systems and remains well outside practical attack range.

## Why this isn't existential

Bitcoin's two main uses of SHA-256:

- **[Proof-of-work mining](/glossary/proof-work-pow).** Miners search for nonces that hash below a target. Grover's gives a sqrt(N) speedup, meaning quantum miners could find blocks faster than classical ones by a factor that depends on the difficulty.
- **Address derivation** (with RIPEMD-160). [P2PKH](/glossary/p2pkh-pay-public-key-hash) and [P2WPKH](/glossary/p2wpkh-pay-witness-public-key-hash) addresses are hashes of the public key. Inverting the hash to recover the pubkey would require Grover's-level work - still ~2^128 effective security.

Crucially, Grover's doesn't break the 21M supply cap, doesn't enable double-spends, doesn't break proof-of-work as a consensus mechanism. Mining economics shift if quantum hardware ever becomes competitive, but the system continues to function.

## Effect on mining

Aggarwal et al. (2017) analyzed quantum speedup on Bitcoin mining and concluded proof-of-work is *"relatively resistant to substantial speedup by quantum computers"* over a multi-decade horizon. The reasons:

- Grover's speedup is square-root, not exponential. Quantum miners gain a meaningful but not dominating advantage.
- Mining is iterative and bandwidth-limited. Quantum hardware optimized for Grover's wouldn't run at the clock speeds modern ASICs achieve.
- Hardware specialization is a moving target. Classical ASIC progress and quantum-hardware development both matter.

Likely long-term outcome: if quantum mining becomes practical, [difficulty](/glossary/difficulty) adjusts upward to compensate. The system reaches a new equilibrium without breaking.

## Effect on addresses

For Bitcoin's hashed address types, Grover's effectively halves the security parameter against preimage attacks:

- P2PKH / P2WPKH: ~160-bit hash output (after RIPEMD-160). Grover's reduces effective preimage security to ~80 bits - still outside practical attack range today, but no longer trivially large.
- The realistic attack scenario assumes [Shor's](/glossary/shors-algorithm) is already available against exposed pubkeys; Grover's would be the secondary tool for hashed-address attacks, not the primary threat.

Grover's is the quantum threat that lets Bitcoin keep its hash function. Shor's is the one that forces the signature rewrite.
