---
title: "Burn Address"
slug: burn-address
draft: false
shortDefinition: "An address for which no private key is known, effectively removing any BTC sent there from circulation."
keyTakeaways:
  - "Coins sent there can't be reclaimed without a private key"
  - "Used in symbolic or supply-reduction scenarios"
  - "Irreversible action removing BTC from the economy"
sources: []
relatedTerms:
  - address
  - address-reuse
  - b32-address
  - coin-freeze
  - volatility
liveWidget: ~
---

A burn address is a Bitcoin address whose private key is provably unknown. Coins sent there are unspendable forever, because no signature can be produced to claim them.

Three common ways to build a burn address:

- **Provably-unowned vanity addresses.** Patterns like `1BitcoinEater...Eat...` are chosen specifically so the address looks intentional and unspendable. The full address still has to derive from a hash, which means there is *some* private key, but the structure of the address makes it astronomically improbable that anyone could find it.
- **`OP_RETURN` outputs.** Strictly speaking these aren't addresses at all; they're outputs with a script that's deliberately invalid for spending. Bitcoin Core won't even index them as UTXOs. Used for embedding data on-chain (timestamps, commitments, attestations).
- **Mathematically-impossible addresses.** Addresses derived from "magic" hash inputs (all zeros, the SHA-256 of "burn", etc.) that no realistic key search can reproduce.

Why anyone deliberately burns BTC:

- **Proof of burn.** Some sidechain bootstrap mechanisms required participants to burn BTC on mainnet to receive sidechain coins. Real money, on the line, no easy revoke.
- **Symbolic destruction.** Demonstrating commitment to a protocol, expressing protest, or making a public statement.
- **Confiscation handling.** Governments occasionally destroy seized coins; sending to a burn address is one way (sending to a legitimate treasury address is more common).

Quietly, Bitcoin's circulating supply is also reduced by accidental burns: lost seeds, dead drives, addresses with keys nobody can recover. Best estimates suggest 3-4 million BTC are effectively lost (Glassnode and Chainalysis publish ranges). Those aren't ceremonial burns, but the net effect on supply is the same.

Sending to a burn address is irreversible by design. There is no recovery process and no human you can appeal to. If you're doing it, do it carefully.
