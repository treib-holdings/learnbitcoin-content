---
title: "Inscriptions"
slug: inscriptions
draft: false
updated: "2026-10-09"
shortDefinition: "A technique for embedding arbitrary data - text, images, code - inside Bitcoin transactions by writing into Taproot witness data."
keyTakeaways:
  - "Data is wrapped in an OP_FALSE OP_IF tapscript envelope and stored as witness data"
  - "Witness data is fee-discounted, which is what makes large inscriptions economically practical"
  - "The technique was popularized by the Ordinals protocol in early 2023 and drove major fee-market activity that year"
sources:
  - { label: "Ordinal Theory Handbook - Inscriptions (envelope format, commit and reveal, 520-byte pushes)", url: "https://docs.ordinals.com/inscriptions.html" }
  - { label: "BIP-141 - Segregated Witness (transaction weight and virtual size)", url: "https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki" }
  - { label: "mempool.space - reveal transaction of inscription 0, block 767,430 (December 14, 2022)", url: "https://mempool.space/tx/6fb976ab49dcec017f1e201e84395983204ae1a7c2abf7ced0a85d692e442799" }
  - { label: "Glassnode - A Bitcoin Blockspace Boom (May 15, 2023): text inscriptions paid 30% to 60% of fees", url: "https://research.glassnode.com/the-week-onchain-week-20-2023" }
  - { label: "BIP-110 - Reduced Data Temporary Softfork (rules, deployment, and changelog marking it Closed in August 2026)", url: "https://github.com/bitcoin/bips/blob/master/bip-0110.mediawiki" }
  - { label: "bitcoin/bips PR #2245 - BIP 110 status changed to Closed (opened August 9, merged August 10, 2026); notes Knots released it on mainnet and its nodes rejected non-signaling blocks, split to a new chain and stalled", url: "https://github.com/bitcoin/bips/pull/2245" }
  - { label: "mempool.space - block 961,632 (August 8, 2026), first block of the BIP-110 mandatory signaling period, which did not signal bit 4", url: "https://mempool.space/block/00000000000000000000d1e01392faa65ceeaed307f0a3159144b84146ff24ba" }
  - { label: "Bitcoin Knots v29.4.1 release notes (September 2, 2026) - hard fork to a BLAKE2b proof of work that activates the BIP-110 rules on the minority chain", url: "https://github.com/bitcoinknots/bitcoin/releases/tag/v29.4.1.knots20260508" }
relatedTerms:
  - ordinals
  - taproot
  - bip-342-tapscript
  - segwit-segregated-witness-bip-141
  - opreturn
  - opreturn-based-tokens
sameAs:
  - "https://docs.ordinals.com/inscriptions.html"
liveWidget: ~
---

An *inscription* is a chunk of arbitrary data - a string of text, a PNG, a piece of code, anything - written into a Bitcoin transaction's witness data using a specific [Tapscript](/glossary/bip-342-tapscript) pattern. Once inscribed, the data lives in the blockchain permanently, just like any other transaction history.

Casey Rodarmor introduced the technique as part of the [Ordinals](/glossary/ordinals) protocol. The first inscription was confirmed in block 767,430 on December 14, 2022, and inscribing caught on in the first months of 2023. The technique does not require any change to Bitcoin's consensus rules - it works within existing [Taproot](/glossary/taproot) functionality activated in 2021.

## How it works

The inscription is encoded inside a Taproot script using a pattern that looks roughly like this (the notation follows the Ordinals documentation):

```text
OP_FALSE
OP_IF
  OP_PUSH "ord"         // protocol identifier
  OP_PUSH 1             // the next push is the content type
  OP_PUSH "image/png"   // MIME type
  OP_PUSH 0             // everything after this is the content
  OP_PUSH <bytes>       // the data, split into pushes of at most 520 bytes
OP_ENDIF
```

Because `OP_FALSE` leaves a false value for `OP_IF` to test, the script always skips ahead to `OP_ENDIF`, so the data in between is never evaluated as script - it just sits in the witness. This pattern is sometimes called the *envelope*. A Taproot script only appears on-chain when its output is spent, so inscribing takes two transactions: a *commit* that creates an output committing to the script, and a *reveal* that spends it and exposes the data.

The crucial property is *where* this data lives: in the witness, not in the transaction's main body. Under [SegWit](/glossary/segwit-segregated-witness-bip-141) weight rules, each witness byte counts as one weight unit and each non-witness byte counts as four, so data in the witness costs a quarter as much block space. The first inscription's reveal transaction is 1,040 bytes. It weighs 1,286 weight units (about 322 virtual bytes), where it would weigh 4,160 if every byte counted at the full rate. Without that discount, inscriptions would be too expensive to be common.

For the Taproot mechanics underneath, see [How Taproot Actually Works](/rabbit-hole/how-taproot-works).

## The community debate

Inscriptions are one of the most contested phenomena in modern Bitcoin culture. The fault line is roughly:

- **Critics** argue inscriptions are blockchain spam - they fill blocks with non-monetary data, bloat the UTXO set with small outputs, increase storage and bandwidth requirements for node operators, and push transaction fees up for people trying to use Bitcoin as money.
- **Proponents** argue that inscriptions are paying-customer use of block space, that miners are free to mine what users pay for, and that any attempt to restrict valid transactions amounts to censorship of the protocol's neutrality.

Both positions are internally consistent. The disagreement is over what Bitcoin is *for*.

The debate produced [BIP-110](https://github.com/bitcoin/bips/blob/master/bip-0110.mediawiki), the Reduced Data Temporary Softfork (RDTS). It proposed a one-year [soft fork](/glossary/soft-fork) that would cap most data pushes at 256 bytes and make invalid any Tapscript that executes `OP_IF`, which the inscription envelope relies on. Coins created before activation would have been exempt.

[Miner signaling](/glossary/miner-signaling) for BIP-110 never reached its 55% threshold. Its mandatory signaling period began at block 961,632 in August 2026. From then on, nodes enforcing BIP-110 rejected every block that did not signal support, which meant rejecting the main chain, and they [split off](/glossary/chain-split) onto a chain that stalled. The BIP was marked Closed in August 2026.

In September 2026, [Bitcoin Knots](/glossary/bitcoin-knots), the node software that had shipped BIP-110, released a [hard fork](/glossary/fork) for that minority chain. It swapped Bitcoin's proof of work for a different algorithm, BLAKE2b, and turned on BIP-110-style data limits there. As of October 2026, the main chain had not adopted those rules.

## Why it matters

For a Bitcoin learner, inscriptions matter for three reasons:

1. **They're a real change in how the blockchain is used.** Whether you welcome the change or oppose it, ignoring it leaves you unable to read fee charts or block contents from 2023 on.
2. **They surface a deep question about Bitcoin's purpose.** "Monetary network only" versus "credibly neutral platform" is a live disagreement among serious Bitcoiners.
3. **They reshaped the fee market in 2023.** During a wave of text inscriptions in May 2023, Glassnode estimated that those inscriptions paid between 30% and 60% of all transaction fees.

The technique itself is permanent - Taproot is unlikely to be rolled back, and as of October 2026 the envelope pattern is valid under Bitcoin's consensus rules. What can change is the *limits* placed on what inscriptions are allowed, and that's the live debate.
