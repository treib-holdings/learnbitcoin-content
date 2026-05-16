---
title: "Taproot"
slug: taproot
draft: false
shortDefinition: "A 2021 soft fork (BIP 341/342) enabling more private, efficient Bitcoin scripts that look like single-sig spends."
keyTakeaways:
  - "Enhances privacy by hiding script complexity behind a single output"
  - "Introduces Schnorr-based multi-sig (MuSig) with smaller signatures"
  - "Soft fork upgrade that further evolves Bitcoin's scripting and contract potential"
sources: []
relatedTerms:
  - bip-341-taproot
  - bip-342-tapscript
  - merkleized-abstract-syntax-tree-mast
  - schnorr-signature
  - signature-aggregation
  - signature-clipping
sameAs:
  - "https://en.bitcoin.it/wiki/Taproot"
  - "https://en.bitcoin.it/wiki/BIP_0341"
  - "https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki"
  - "https://bitcoinops.org/en/topics/taproot/"
liveWidget: ~
---

Taproot is the soft fork that activated on Bitcoin in November 2021, bringing two cryptographic upgrades into the protocol: [Schnorr signatures](/glossary/schnorr-signature) (BIP-340) and Taproot itself (BIP-341), along with the new Tapscript language for advanced spending conditions (BIP-342).

The headline feature is that **every Taproot output looks the same on-chain**. Whether it's a single-sig spend, a 7-of-11 multisig, or a complex script with timelocks and hash preimages, the spend on the chain is just a 64-byte Schnorr signature against a 32-byte public key. Observers can't tell which was used. This is huge for privacy.

Two pieces make it work:

1. **Key-path spending.** If all participants in a multisig or complex contract agree, they can collectively sign with an aggregated public key (via [MuSig2](/glossary/signature-aggregation)). The spend looks like a single signature; nothing else is revealed.
2. **Script-path spending (MAST).** If they don't agree - someone is offline, or a timelock triggers, or a backup branch is needed - one party can reveal *only the script branch that's actually being executed*, along with a Merkle proof that it was committed to in the original output. The other branches stay hidden.

The combination means complex contracts pay almost zero on-chain cost when they "go right" (everyone signs cooperatively), and only reveal the strictly necessary branch when they "go wrong."

Beyond privacy:

- **Fee savings.** Schnorr signatures are smaller; MAST hides unused branches.
- **Cleaner cryptography.** Schnorr has tighter security proofs than ECDSA.
- **A foundation for future protocols.** Things like Discreet Log Contracts (DLCs), [silent payments](/glossary/silent-payments), and newer Lightning constructions all benefit.

Taproot adoption was initially slow - wallets had to update, and there was a chicken-and-egg phase. As of 2026, most major wallets default to Taproot addresses for new receive operations, and the share of Taproot-locked UTXOs is steadily growing.

See [Schnorr Signature](/glossary/schnorr-signature) and [Signature Aggregation](/glossary/signature-aggregation) for the building blocks.
