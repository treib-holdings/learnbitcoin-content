---
title: "CRQC (Cryptographically-Relevant Quantum Computer)"
slug: crqc-cryptographically-relevant-quantum-computer
linkText:
  - "CRQC"
draft: false
published: "2026-06-01"
updated: "2026-10-15"
shortDefinition: "The threshold at which a quantum computer is large and stable enough to break real-world cryptography - specifically, ECDSA on secp256k1 for Bitcoin."
keyTakeaways:
  - "Threshold of quantum hardware capable of breaking real-world cryptography"
  - "Logical qubits, coherence time, and gate fidelity matter as much as raw qubit counts"
  - "Current systems are orders of magnitude below CRQC for Bitcoin on multiple axes"
sources:
  - { label: "Roetteler, Naehrig, Svore and Lauter - Quantum resource estimates for computing elliptic curve discrete logarithms, ASIACRYPT 2017 (at most 9n + 2 log2(n) + 10 logical qubits, which is 2,330 for a 256-bit curve, and about 1.3 x 10^11 Toffoli gates)", url: "https://arxiv.org/abs/1706.06752" }
  - { label: "Webber et al. - The Impact of Hardware Specifications on Reaching Quantum Advantage in the Fault Tolerant Regime (2021; 317 million physical qubits to break Bitcoin's 256-bit elliptic curve key within one hour, 13 million within one day, at a 0.1 percent gate error rate and a one-microsecond code cycle)", url: "https://arxiv.org/abs/2108.12371" }
  - { label: "Google Quantum AI - Quantum error correction below the surface code threshold, Nature (9 December 2024; a 101-qubit distance-7 surface code at 0.143 percent logical error per cycle, error suppression by 2.14 for every two steps of distance, 2d^2 - 1 physical qubits per logical qubit)", url: "https://www.nature.com/articles/s41586-024-08449-y" }
  - { label: "Bluvstein et al. - Logical quantum processor based on reconfigurable atom arrays, Nature (6 December 2023; up to 280 physical qubits and circuits with up to 48 logical qubits, using error detection)", url: "https://www.nature.com/articles/s41586-023-06927-3" }
  - { label: "BIP 361 - Post Quantum Migration and Legacy Signature Sunset (draft; academic road-maps now estimate a cryptographically-relevant quantum computer as early as 2027-2030, citing McKinsey's 2025 Quantum Technology Monitor)", url: "https://github.com/bitcoin/bips/blob/master/bip-0361.mediawiki" }
  - { label: "Michele Mosca - Cybersecurity in an era with quantum computers, will we be ready? (IACR ePrint 2015/1075; a 1/2 chance of breaking RSA-2048 by 2031)", url: "https://eprint.iacr.org/2015/1075" }
relatedTerms:
  - post-quantum-bitcoin
  - shors-algorithm
  - grovers-algorithm
  - bip-361
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - schnorr-signature
  - elliptic-curve
  - public-key
liveWidget: ~
---

CRQC is the working term for the scale of quantum hardware needed to actually break the cryptography securing modern systems - Bitcoin included. It's a moving target defined by both the algorithm being run ([Shor's](/glossary/shors-algorithm), in Bitcoin's case) and the cryptographic parameter being attacked (a 256-bit elliptic curve key, for [ECDSA](/glossary/ecdsa-elliptic-curve-digital-signature-algorithm) and [Schnorr](/glossary/schnorr-signature)).

"How many qubits does Bitcoin need to worry about?" is a question with a footnote longer than the answer.

## What separates qubits from CRQC

A quantum computer with N physical qubits is not equivalent to "N qubits of cryptographic-attack capability." Three factors separate raw hardware from CRQC status:

- **Logical vs. physical qubits.** Quantum operations are noisy. Reliable computation requires error correction, which uses many physical qubits to encode each fault-tolerant logical qubit. The surface code needs 2d^2 - 1 physical qubits per logical qubit at code distance d, around a hundred for the distance-7 code Google demonstrated in 2024, and the error rates a Shor run needs are millions of times lower than those codes deliver, so the distance and the overhead have to grow well beyond that.
- **Coherence time.** Quantum states decohere quickly. Running Shor's at cryptographic scale requires sustained coherence across millions of gate operations.
- **Gate fidelity.** Each quantum gate operation has an error rate. Lower fidelity means more error correction, which means more physical qubits per logical qubit. Once the hardware is below the code's threshold the payoff is exponential: on Google's Willow chip, every increase of two in code distance cut the logical error rate by a factor of 2.14, so small fidelity gains pay back disproportionately.

## What's needed for Bitcoin

Working estimates for the hardware to break [secp256k1](/glossary/elliptic-curve) via Shor's algorithm:

- About 2,330 logical (error-corrected) qubits and on the order of 10^11 Toffoli gates, by the standard 2017 estimate
- Millions of physical qubits once error correction is counted: a 2021 estimate puts it at 13 million to finish within a day, or 317 million to finish within an hour, assuming a surface code, a 0.1 percent gate error rate and a one-microsecond cycle
- Sustained quantum coherence on the timescale of the full computation - hours to days

The exact numbers depend on the assumptions: gate error rate, cycle time, how the qubits are wired together, and how long the attacker can afford to wait. None of the estimates are within a single order of magnitude of any system that exists today.

## Where the hardware is

Public quantum systems span multiple architectures, each with different scaling profiles:

- **Superconducting circuits.** Google's Willow processors ran surface codes below the error-correction threshold in 2024: a 101-qubit distance-7 code holding one logical qubit at 0.143 percent error per cycle, with each increase of two in code distance cutting the logical error rate by a factor of 2.14.
- **Neutral-atom arrays.** A processor with up to 280 trapped atoms ran circuits with up to 48 logical qubits in 2023, on small codes and with error detection rather than the deep correction a Shor run needs.
- **Trapped ions, photonics, topological qubits and other architectures** are in the same race, and the same three constraints apply to all of them.

Across all of them, **demonstrated logical qubit counts are in the dozens at most, and only on small codes**. Raw physical qubit counts are the most visible metric in press releases, but they're not the binding constraint - gate fidelity, coherence time, and error-correction overhead matter more for actually running Shor's at cryptographic scale.

No demonstrated CRQC capability against any real-world cryptography exists. The gap remains multiple orders of magnitude on multiple axes.

## Why the timeline keeps slipping but not closing

Forecasts have put a CRQC somewhere in the next ten to twenty years since at least 2015, when Michele Mosca estimated a one-in-two chance of RSA-2048 being broken by 2031. The frustrating pattern: each year brings real progress in qubit counts and error correction, but the engineering challenges scale superlinearly with system size. Adding qubits creates new noise problems; new noise problems require new error-correction overhead; new overhead pushes the CRQC threshold further away.

But the trend line is still forward. The question isn't whether CRQCs are buildable in principle - Shor's algorithm proves they are - it's whether the engineering progress curve will eventually meet the threshold. The open question is *when*.

For Bitcoin, the implication is that the migration must start well before CRQC arrival, because coordinating the network on a new signature scheme takes years. [BIP-361's](/glossary/bip-361) authors cite this directly: *"academic road-maps now estimate a cryptographically-relevant quantum computer as early as 2027-2030."*

See the [Quantum and Bitcoin rabbit hole](/rabbit-hole/quantum-and-bitcoin) for the honest timeline and what the migration window means in practice.
