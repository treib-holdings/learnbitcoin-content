---
title: "CRQC (Cryptographically-Relevant Quantum Computer)"
slug: crqc-cryptographically-relevant-quantum-computer
draft: true
shortDefinition: "The threshold at which a quantum computer is large and stable enough to break real-world cryptography — specifically, ECDSA on secp256k1 for Bitcoin."
keyTakeaways:
  - "Threshold of quantum hardware capable of breaking real-world cryptography"
  - "Logical qubits, coherence time, and gate fidelity matter as much as raw qubit counts"
  - "Current systems are orders of magnitude below CRQC for Bitcoin on multiple axes"
sources: []
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

CRQC is the working term for the scale of quantum hardware needed to actually break the cryptography securing modern systems — Bitcoin included. It's a moving target defined by both the algorithm being run ([Shor's](/glossary/shors-algorithm), in Bitcoin's case) and the cryptographic parameter being attacked (a 256-bit elliptic curve key, for [ECDSA](/glossary/ecdsa-elliptic-curve-digital-signature-algorithm) and [Schnorr](/glossary/schnorr-signature)).

"How many qubits does Bitcoin need to worry about?" is a question with a footnote longer than the answer.

## What separates qubits from CRQC

A quantum computer with N physical qubits is not equivalent to "N qubits of cryptographic-attack capability." Three factors separate raw hardware from CRQC status:

- **Logical vs. physical qubits.** Quantum operations are noisy. Reliable computation requires error correction, which uses many physical qubits to encode each fault-tolerant logical qubit. Current ratios run roughly 100-1,000 physical qubits per logical qubit, depending on the error-correction scheme.
- **Coherence time.** Quantum states decohere quickly. Running Shor's at cryptographic scale requires sustained coherence across millions of gate operations.
- **Gate fidelity.** Each quantum gate operation has an error rate. Lower fidelity means more error correction, which means more physical qubits per logical qubit. The relationship is superlinear: small fidelity gains pay back disproportionately.

## What's needed for Bitcoin

Working estimates for the hardware to break [secp256k1](/glossary/elliptic-curve) via Shor's algorithm:

- ~2,000-3,000 logical (error-corrected) qubits
- Millions of physical qubits, given current error-correction overhead (~1,000 physical per logical for surface codes)
- Sustained quantum coherence on the timescale of the full computation — hours to days

The exact numbers depend on which estimate you trust. Optimistic accounts pull the logical-qubit requirement lower; pessimistic accounts push the physical-to-logical ratio higher. None of the estimates are within a single order of magnitude of any system that exists today.

## Where the hardware is

Public quantum systems span multiple architectures, each with different scaling profiles:

- **Gate-based platforms** (superconducting, trapped-ion): higher per-qubit fidelity, slower physical-qubit scaling. Used by IBM, Google, Quantinuum, and others.
- **Neutral-atom platforms** (e.g., QuEra, Atom Computing): faster scaling in raw qubit count, historically lower per-qubit fidelity, improving rapidly.
- **Photonic, topological, and other architectures**: earlier-stage, with smaller demonstrated systems.

Across all of them, **demonstrated logical (error-corrected) qubit counts remain in the single digits**. Raw physical qubit counts are the most visible metric in press releases, but they're not the binding constraint — gate fidelity, coherence time, and error-correction overhead matter more for actually running Shor's at cryptographic scale.

No demonstrated CRQC capability against any real-world cryptography exists. The gap remains multiple orders of magnitude on multiple axes.

## Why the timeline keeps slipping but not closing

The CRQC horizon has been "5-10 years out" for over a decade. The frustrating pattern: each year brings real progress in qubit counts and error correction, but the engineering challenges scale superlinearly with system size. Adding qubits creates new noise problems; new noise problems require new error-correction overhead; new overhead pushes the CRQC threshold further away.

But the trend line is still forward. The question isn't whether CRQCs are buildable in principle — Shor's algorithm proves they are — it's whether the engineering progress curve will eventually meet the threshold. Most experts believe it will. The disagreement is *when*.

For Bitcoin, the implication is that the migration must start well before CRQC arrival, because coordinating the network on a new signature scheme takes years. [BIP-361's](/glossary/bip-361) authors cite this directly: *"academic road-maps now estimate a cryptographically-relevant quantum computer as early as 2027-2030."*
