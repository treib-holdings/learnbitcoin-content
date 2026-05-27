---
title: "Private Key"
slug: private-key
draft: false
shortDefinition: "A 256-bit secret granting the power to spend BTC from derived addresses, must remain confidential."
keyTakeaways:
  - "The core secret used to sign transactions"
  - "Losing or exposing it forfeits control of the BTC"
  - "Usually generated/managed by wallets behind the scenes"
sources:
  - { label: "Key Space rabbit hole", url: "https://www.learnbitcoin.com/rabbit-hole/key-space" }
relatedTerms: []
sameAs:
  - "https://en.wikipedia.org/wiki/Public-key_cryptography"
  - "https://www.wikidata.org/wiki/Q201339"
  - "https://en.bitcoin.it/wiki/Private_key"
liveWidget: ~
---

A private key in Bitcoin is a 256-bit number. That's it. 32 random bytes, drawn from a space of 2^256 possible values. Whoever knows that number can spend the BTC controlled by it. Whoever doesn't, can't.

The implications are absolute and immediate:

- **Lose your private key, lose your BTC.** There's no password reset, no account recovery, no support line. The protocol has no concept of "the rightful owner" beyond "whoever can produce a valid signature with the key."
- **Reveal your private key, lose your BTC.** A photo of a backup card on social media, a key file synced to a compromised cloud drive, a phishing email that captures it - any of those is enough.
- **Generate it poorly, lose your BTC.** A predictable random number generator can produce keys that are statistically more guessable than the 2^256 space implies. This has happened, and people have lost millions to it.

Modern wallets shield you from the raw 32-byte private key by working with a [seed phrase](/glossary/seed-phrase) (a [BIP-39](/glossary/bip-39) mnemonic) that deterministically generates thousands of private keys via a [hierarchical deterministic wallet](/glossary/hierarchical-deterministic-wallet) structure. You back up 12 or 24 words instead of 32 bytes. Functionally identical security; better human ergonomics.

The phrase "not your keys, not your coins" is the most important sentence in self-custody. If your BTC sits on an exchange, the exchange holds the keys. Their solvency is your security model. The whole point of Bitcoin is to not need that.

See [Public Key](/glossary/public-key) for what gets derived from this and why that direction is one-way, and the [Key Space rabbit hole](/rabbit-hole/key-space) for why 2^256 is bigger than your intuition wants it to be.
