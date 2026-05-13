---
title: "Mnemonic Entropy Bits"
slug: mnemonic-entropy-bits
draft: false
shortDefinition: "The underlying binary randomness used to generate BIP 39 seed words (commonly 128, 192, or 256 bits)."
keyTakeaways:
  - "128 bits → 12 words, 256 bits → 24 words, etc."
  - "Higher entropy means stronger cryptographic security"
  - "Checksum ensures small mistakes don’t create an invalid seed"
sources: []
relatedTerms: []
liveWidget: ~
---

When you create a BIP 39 mnemonic, your wallet first gathers raw entropy (like 128 bits). It applies a checksum, then maps the binary data to a set of words from a predefined list. The length of the phrase correlates with the bits of entropy—12 words typically reflect 128 bits, 18 words for 192 bits, etc. More bits = a larger word list = more security, though most wallets standardize on 12 or 24 words. Understanding the underlying entropy helps clarify why it’s so important to safeguard the mnemonic from unauthorized eyes.
