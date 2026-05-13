---
title: "ANYPREVOUT"
slug: anyprevout
draft: false
shortDefinition: "A proposed SIGHASH flag (BIP-118) enabling partially signed transactions without strictly binding to specific inputs, unlocking advanced Layer-2 protocols."
keyTakeaways:
  - "New SIGHASH type that loosens input binding"
  - "Key for advanced Layer-2 designs (e.g., Eltoo)"
  - "Still under active development and review"
sources: []
relatedTerms:
  - eltoo
  - payment-channel
  - sighash
  - sighashanyonecanpay
  - sighashsingle
liveWidget: ~
---

**ANYPREVOUT** (specifically `SIGHASH_ANYPREVOUT` and its variant `SIGHASH_ANYPREVOUTANYSCRIPT`) is a proposed [Bitcoin Script](/glossary/bitcoin-script) signature-hashing mode that would let a signed transaction be applied against *any* matching prior output rather than committing to one specific input. Specified in [BIP-118](https://github.com/bitcoin/bips/blob/master/bip-0118.mediawiki), it's the key cryptographic primitive needed for [Eltoo](/glossary/eltoo)-style channels and various advanced protocols.

The technical change in plain terms:

- **Today**, when you sign a Bitcoin transaction, the signature commits to specific input txids - "I'm signing a transaction that spends UTXO X." If those input UTXOs change for any reason (e.g., a different transaction emerges that spends them under different terms), your signature is invalid.
- **With ANYPREVOUT**, you can sign in a way that says "I'm signing a transaction that *would* spend whichever UTXO matches a certain script template." If the actual input is changed before broadcast, the signature still applies as long as the script template matches.

What this enables:

- **[Eltoo channels](/glossary/eltoo).** The proposed simpler alternative to current Lightning channel design. Every new channel state is signed in a way that lets it apply against any prior commitment, replacing the punishment-based mechanism with a simpler "newer states override older states" model.
- **Lightning Network protocol cleanups.** Various advanced Lightning constructions (multi-party channels, channel factories, simplified routing) become more practical.
- **Simpler vault designs.** Some vault constructions become easier with ANYPREVOUT.

ANYPREVOUT has been proposed for years. As of 2026, it has not activated. The technical implementation is well-understood; the holdup is the same as for other proposed [soft forks](/glossary/soft-fork) - building broad enough community consensus to activate. It's discussed in roughly the same activation conversations as [BIP-119 (CTV)](/glossary/bip-119-ctv) and other covenant-adjacent proposals, with similar arguments for and against expanding Bitcoin's scripting flexibility.

See [Eltoo](/glossary/eltoo) for the flagship use case and [Covenants](/glossary/covenants) for the broader expansion debate.
