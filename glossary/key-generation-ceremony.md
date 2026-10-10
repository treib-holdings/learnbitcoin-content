---
title: "Key Generation Ceremony"
slug: key-generation-ceremony
draft: false
updated: "2026-10-10"
shortDefinition: "A carefully orchestrated event (often public or semi-public) to create cryptographic keys without a single point of failure."
keyTakeaways:
  - "Prevents any one entity from generating keys in isolation"
  - "Often involves multiple layers of offline and public auditing"
  - "Strengthens trust in system-wide security assumptions"
sources:
  - { label: "IANA - DNSSEC Practice Statement for the Root Zone KSK Operator, 9th edition: keys generated in pre-planned key generation ceremonies by multiple trusted individuals; M-of-N multi-person control; no part of the signer system connected to any network; HSMs kept in tamper-evident bags and locked safes; public key proof given to witnesses at the ceremony (effective October 7, 2026)", url: "https://www.iana.org/dnssec/procedures/ksk-operator/ksk-dps-20261007.html" }
  - { label: "IANA - Root KSK Ceremony 53 Day 2: generation of KSK-2024, with an archived live broadcast, annotated scripts and audit camera footage (April 26, 2024)", url: "https://www.iana.org/dnssec/ceremonies/53-2" }
  - { label: "IANA - Root KSK Ceremonies list: retired HSMs destroyed in later ceremonies, such as Ceremony 62 (August 12, 2026)", url: "https://www.iana.org/dnssec/ceremonies" }
  - { label: "IANA - Trusted Community Representatives: outside members of the DNS community take part in root key generation and signing ceremonies", url: "https://www.iana.org/dnssec/tcrs" }
  - { label: "Ruffing, Nick et al. - ChillDKG: Distributed Key Generation for FROST (draft BIP, Draft as of October 2026): a trusted dealer is a single point of failure that can forge signatures; each participant shares its own random secret; key generation ceremony for a threshold cold wallet; federations typically set up keys in a one-time ceremony", url: "https://github.com/BlockstreamResearch/bip-frost-dkg" }
  - { label: "Blockstream - The Key to FROST: What is Distributed Key Generation? (DKG removes the trusted dealer; participants run an interactive key generation ceremony before signing) (August 27, 2024)", url: "https://blog.blockstream.com/the-key-to-frost-what-is-distributed-key-generation/" }
relatedTerms:
  - bitcoin-inheritance-planning
  - chaincode
  - deterministic-wallet
  - hardware-security-module-hsm
  - hardware-wallet
  - key-rotation
  - key-split
  - key-wiping
  - proof-keys
  - security
liveWidget: ~
---

A key generation ceremony is the structured event of creating a high-stakes cryptographic key under conditions designed to ensure no single party knows or could have influenced the result.

Typical components:

- Multiple participants. Sensitive steps need several trusted people at once, so no one can act alone.
- Air-gapped or hardened hardware. In the ceremonies IANA holds for the internet's DNS root signing key, the key lives in hardware security modules (HSMs), and no part of the system that uses them is connected to a network. Between ceremonies the HSMs sit in tamper-evident bags in locked safes, and old ones are destroyed when retired.
- Witnesses, often with video recording or independent observers. The ceremony is reviewable after the fact. IANA invites outside members of the internet community to take part, streams its ceremonies live, and publishes the scripts and audit camera footage.
- Verification of the resulting public key, with the private key (or shares of it) sealed before anyone leaves the room.

Where they come up in Bitcoin:

- Threshold cold wallets meant to hold large amounts of bitcoin. ChillDKG, a draft Bitcoin spec for setting up FROST threshold keys, uses this as its example of a key generation ceremony.
- Systems run by a federation of signers. The same draft notes that such systems typically set up their keys in a one-time ceremony at launch, sometimes repeated every few months.
- DKG (distributed key generation) for FROST-based threshold setups. Each participant contributes its own random secret and ends up holding only its own share of the key. That avoids a trusted dealer who would create every share, a single point of failure that could forge signatures if compromised.

The ceremony adds no new cryptography. Its job is to make sure nobody has to take one person's word that the key was made and stored safely.
