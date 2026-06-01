---
title: "Schnorr Signature"
slug: schnorr-signature
draft: false
shortDefinition: "A more efficient signature scheme introduced with Taproot, enabling key and signature aggregation for better privacy and lower fees."
keyTakeaways:
  - "Reduces transaction size for multi-signatures"
  - "Easier to prove correctness than ECDSA, with unique algebraic properties"
  - "Forms the basis for advanced features like MuSig/MAST"
sources: []
relatedTerms:
  - taproot
  - bip-342-tapscript
  - constant-time
  - ecdsa-elliptic-curve-digital-signature-algorithm
  - elliptic-curve
  - mono-signature
  - musig
  - musig2
  - post-quantum-bitcoin
  - psbt
  - shors-algorithm
  - signature-aggregation
  - signature-clipping
sameAs:
  - "https://en.wikipedia.org/wiki/Schnorr_signature"
  - "https://www.wikidata.org/wiki/Q1465057"
  - "https://en.bitcoin.it/wiki/Schnorr"
  - "https://bitcoinops.org/en/topics/schnorr-signatures/"
liveWidget: ~
---

Schnorr signatures are Bitcoin's modern signature scheme, activated with [Taproot](/glossary/taproot) in November 2021 via [BIP-340](https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki). They replace [ECDSA](/glossary/ecdsa-elliptic-curve-digital-signature-algorithm) for any output using a Taproot address (the ones starting with `bc1p`).

What Schnorr brings that ECDSA doesn't:

- **Linearity.** Schnorr signatures are linear in the math: the sum of two valid signatures is also a valid signature for the sum of the corresponding keys. This sounds esoteric but unlocks [signature aggregation](/glossary/signature-aggregation), which is the biggest practical win.
- **Single-signature aggregation across cosigners.** A 5-of-5 multisig under Schnorr (via the MuSig2 protocol) appears on-chain as a single signature - indistinguishable from a single-sig spend. Five-of-five used to require five signatures and was obvious from the block; now it looks like one person spending. Privacy + space savings.
- **Smaller signatures.** A Schnorr signature is 64 bytes vs ECDSA's variable 70-72. Saves block space, saves fees.
- **Cleaner provable security.** Schnorr has a tighter security proof than ECDSA under standard assumptions, which makes cryptographers happier.
- **No malleability.** Schnorr signatures are unique for a given key and message - the malleability that bothered ECDSA is gone.

Production Schnorr implementations - Bitcoin's libsecp256k1 chief among them - require strict [constant-time](/glossary/constant-time) discipline at the signing path to avoid leaking key material through timing or cache-access side channels. The math is clean; the engineering needed to defend it on real hardware is its own discipline.

The reason Bitcoin didn't use Schnorr from day one: it was patented when Satoshi designed Bitcoin. The patent expired in 2008 (just after the whitepaper), and it took the community more than a decade to design, review, and deploy it well. The wait paid off; Schnorr is now considered one of the cleanest signature schemes in production cryptography.

Schnorr inherits ECDSA's elliptic-curve discrete logarithm assumption, and therefore its quantum vulnerability. A sufficiently powerful quantum computer running [Shor's algorithm](/glossary/shors-algorithm) breaks both schemes. See [Post-Quantum Bitcoin](/glossary/post-quantum-bitcoin) for the migration framework.

See [Signature Aggregation](/glossary/signature-aggregation) for what linearity buys, and [Taproot](/glossary/taproot) for the soft fork that brought Schnorr to Bitcoin.
