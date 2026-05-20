---
title: "Inscriptions"
slug: inscriptions
draft: false
shortDefinition: "A technique for embedding arbitrary data — text, images, code — inside Bitcoin transactions by writing into Taproot witness data."
keyTakeaways:
  - "Data is wrapped in an OP_FALSE OP_IF tapscript envelope and stored as witness data"
  - "Witness data is fee-discounted, which is what makes large inscriptions economically practical"
  - "The technique was popularized by the Ordinals protocol in January 2023 and has driven major fee-market activity since"
sources: []
relatedTerms:
  - ordinals
  - taproot
  - bip-341-taproot
  - bip-342-tapscript
  - segwit-segregated-witness-bip-141
  - opreturn
  - opreturn-based-tokens
sameAs:
  - "https://en.wikipedia.org/wiki/Ordinals_(protocol)"
liveWidget: ~
---

An *inscription* is a chunk of arbitrary data — a string of text, a PNG, a piece of code, anything — written into a Bitcoin transaction's witness data using a specific [Tapscript](/glossary/bip-342-tapscript) pattern. Once inscribed, the data lives in the blockchain permanently, just like any other transaction history.

The technique was introduced by Casey Rodarmor in January 2023 as part of the [Ordinals](/glossary/ordinals) protocol. It does not require any change to Bitcoin's consensus rules — it works within existing [Taproot](/glossary/taproot) functionality activated in 2021.

## How it works

The inscription is encoded inside a Taproot script using the pattern `OP_FALSE OP_IF ... OP_ENDIF` — a conditional block that, because the condition is always false, never actually executes. Inside the conditional sits the protocol identifier (`"ord"`), a content-type field marker (`OP_1`), the MIME type (e.g. `"image/png"`), a data marker (`OP_0`), and finally the raw bytes of the inscribed data.

Because the conditional is always skipped at execution time, the data inside is never evaluated as script — it just sits permanently in the witness. This pattern is sometimes called the *envelope*.

The crucial property is *where* this data lives: in the witness, not in the transaction's main body. Under [SegWit](/glossary/segwit-segregated-witness-bip-141) weight rules, witness data counts at one-quarter the weight of base data, so a 1 MB inscription occupies far less than 1 MB of "block-space cost" than the raw size would suggest. Without that discount, inscriptions would be too expensive to be common.

## The community debate

Inscriptions are one of the most contested phenomena in modern Bitcoin culture. The fault line is roughly:

- **Critics** argue inscriptions are blockchain spam — they bloat the UTXO set and block weight with non-monetary data, increase storage and bandwidth requirements for node operators, and push transaction fees up for people trying to use Bitcoin as money.
- **Proponents** argue that inscriptions are paying-customer use of block space, that miners are free to mine what users pay for, and that any attempt to restrict valid transactions amounts to censorship of the protocol's neutrality.

Both positions are internally consistent. The disagreement is over what Bitcoin is *for*.

The debate produced [BIP-110 (RDTS)](https://bip110.org/) — a proposed temporary soft fork that would limit data sizes and disable parts of Tapscript to restrict inscription activity. As of early 2026, BIP-110 had minimal miner signaling and was the subject of significant disagreement among long-time contributors. Whatever its outcome, the debate it represents is unlikely to fully resolve.

## Why it matters

For a Bitcoin learner, inscriptions matter for three reasons:

1. **They're a real change in how the blockchain is used.** Whether you welcome the change or oppose it, ignoring it leaves you unable to read fee charts or recent block contents.
2. **They surface a deep question about Bitcoin's purpose.** "Monetary network only" versus "credibly neutral platform" is a live disagreement among serious Bitcoiners.
3. **They've reshaped the fee market.** Inscription-driven block space demand has been a major driver of fee levels since 2023.

The technique itself is permanent — Taproot is unlikely to be rolled back, and the envelope pattern works in any Bitcoin implementation that follows the consensus rules. What can change is the *limits* placed on what inscriptions are allowed, and that's the live debate.
