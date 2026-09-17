---
title: "MuSig2"
slug: musig2
draft: false
updated: "2026-09-17"
shortDefinition: "An enhanced version of MuSig that lowers the number of interaction rounds needed among cosigners."
keyTakeaways:
  - "Minimizes the communication overhead in multi-party signing"
  - "Maintains the privacy and size advantages of MuSig"
  - "Ideal for collaborative setups with participants in different time zones"
sources: []
relatedTerms:
  - psbt
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - elliptic-curve
  - hdm-multi-signature-hd-wallet
  - hierarchical-multisig
  - interactive-multi-sig
  - m-n
  - mono-signature
  - musig
  - partial-signature
  - quorum-signatures
  - schnorr-signature
  - signature-aggregation
  - signature-clipping
sameAs:
  - "https://bitcoinops.org/en/topics/musig/"
liveWidget: ~
---

MuSig2 is the practical successor to the original [MuSig](/glossary/musig) Schnorr-aggregation protocol, published in 2020 by Jonas Nick, Tim Ruffing, and Yannick Seurin. It does the same job - aggregate n cosigners into a single combined public key with a single combined signature - in just two rounds of communication instead of three, with the additional benefit that the first round's nonces can be generated and exchanged before the message is known. Each nonce must still be used exactly once; reusing one across sessions leaks the private key.

What changed mechanically:

- **MuSig1** required commit-then-reveal nonces (three rounds): each signer first publishes a commitment to their nonce, then the actual nonces, then the partial signatures. The commit-reveal step was necessary to stop a signer from choosing its nonce after seeing everyone else's, which lets an attacker forge signatures across concurrent sessions using Wagner's algorithm; the original two-round MuSig was withdrawn for exactly this reason. (Key-cancellation, or rogue-key, attacks are a different problem, already solved by MuSig's key-aggregation coefficients.)
- **MuSig2** uses two independent nonces per signer instead of one, combined in a way that defeats the same attack without needing commitments. Two rounds: exchange nonce pairs, then exchange partial signatures.

For ergonomics this is a meaningful upgrade. Three rounds means three back-and-forth messages with every signer; two rounds means two. For Lightning channel opens, multisig spend signing, and federation signature protocols where cosigners are geographically distributed, the round reduction is the difference between "signing this thing takes about a minute" and "signing this thing takes about ten seconds."

Properties (shared with MuSig1):

- **n-of-n only.** All cosigners must participate. For m-of-n threshold setups, FROST is the analog.
- **Aggregated key.** Deterministic function of the cosigner pubkeys.
- **64-byte signature.** Same size as Taproot single-sig.
- **Privacy.** On-chain, indistinguishable from a Taproot key-path single-sig spend.

MuSig2 is the version that actually ships in production tooling: BIP 327 (drafted in 2022, merged in March 2023) standardized it, libsecp256k1 has shipped it since v0.6.0 in November 2024, and Ledger's Bitcoin app added it in March 2025, the first major hardware wallet to do so. When people say "MuSig" in 2026 they almost always mean MuSig2.

See [How Taproot Actually Works](/rabbit-hole/how-taproot-works) for where an aggregate key sits in a Taproot output.
