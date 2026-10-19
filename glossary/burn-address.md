---
title: "Burn Address"
slug: burn-address
draft: false
updated: "2026-10-19"
shortDefinition: "An address for which no private key is known, effectively removing any BTC sent there from circulation."
keyTakeaways:
  - "Coins sent there can't be reclaimed without a private key"
  - "Used in symbolic or supply-reduction scenarios"
  - "Irreversible action removing BTC from the economy"
sources:
  - { label: "Bitcoin Wiki - Vanitygen: the difficulty table puts a key search for 1BitcoinEaterAddressDontSend at about 3.3e33 years", url: "https://en.bitcoin.it/wiki/Vanitygen" }
relatedTerms:
  - address
  - address-reuse
  - b32-address
  - coin-freeze
  - vanity-address
  - volatility
liveWidget: ~
---

A burn address is a Bitcoin address whose private key is provably unknown. Coins sent there are unspendable forever, because no signature can be produced to claim them.

Three common ways to build a burn address:

- **Hand-written eater addresses.** `1BitcoinEaterAddressDontSendf59kuE` was not found by a [vanity address](/glossary/vanity-address) search: the text was typed by hand and only the last six characters were worked out so the checksum passes, so the hash it encodes was never derived from any key, and producing one would mean inverting a 160-bit hash.
- **`OP_RETURN` outputs.** Strictly speaking these aren't addresses at all; they're outputs with a script that's deliberately invalid for spending. Bitcoin Core won't even index them as UTXOs. Used for embedding data on-chain (timestamps, commitments, attestations).
- **Mathematically-impossible addresses.** Addresses derived from "magic" hash inputs (all zeros, the SHA-256 of "burn", etc.) that no realistic key search can reproduce.

Why anyone deliberately burns BTC:

- **Proof of burn.** Some sidechain bootstrap mechanisms required participants to burn BTC on mainnet to receive sidechain coins. Real money, on the line, no easy revoke.
- **Symbolic destruction.** Demonstrating commitment to a protocol, expressing protest, or making a public statement.
- **Confiscation handling.** Governments occasionally destroy seized coins; sending to a burn address is one way (sending to a legitimate treasury address is more common).

Quietly, Bitcoin's circulating supply is also reduced by accidental burns: lost seeds, dead drives, addresses with keys nobody can recover. Best estimates suggest 3-4 million BTC are effectively lost (Glassnode and Chainalysis publish ranges). Those aren't ceremonial burns, but the net effect on supply is the same.

Sending to a burn address is irreversible by design. There is no recovery process and no human you can appeal to. If you're doing it, do it carefully.
