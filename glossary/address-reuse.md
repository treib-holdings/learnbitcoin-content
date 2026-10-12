---
title: "Address Reuse"
slug: address-reuse
draft: false
updated: "2026-10-12"
shortDefinition: "Paying the same Bitcoin address more than once. It hands your full history, in one place, to anyone watching, puts every coin at the address behind one key, and, once that key has signed, leaves later deposits sitting in the open. Modern wallets avoid it by default."
keyTakeaways:
  - "Every payment to a reused address is linked in public, forever: counterparties, amounts and timing, all in one place for anyone who ties the address to you"
  - "The first spend from a hashed address publishes its public key, so every later deposit to that address sits behind a key the whole world can read, for as long as the coins stay there"
  - "Receiving twice at an address that has never spent leaks privacy; spending once and then receiving again leaks the key too. Modern wallets hand out a fresh address for every payment, so the fix is to stop fighting them"
sources:
  - { label: "Satoshi Nakamoto - Bitcoin whitepaper, section 10, Privacy: a new key pair should be used for each transaction to keep them from being linked to a common owner (2008)", url: "https://bitcoin.org/bitcoin.pdf" }
  - { label: "Satoshi Nakamoto - bitcointalk, 25 November 2009: for greater privacy, it's best to use bitcoin addresses only once", url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/11/" }
  - { label: "BIP-360 - Pay-to-Merkle-Root (P2MR): poor wallet hygiene such as address reuse increases vulnerability to long exposure attacks; protection from them does not depend on post-quantum signatures activating", url: "https://github.com/bitcoin/bips/blob/master/bip-0360.mediawiki" }
  - { label: "Bitcoin Wiki - Address reuse", url: "https://en.bitcoin.it/wiki/Address_reuse" }
  - { label: "ChainQuery - Quantum exposure report (snapshot 2026-10-11, block 970,878: 5,172,596 BTC still sitting at hashed addresses that had already been spent from)", url: "https://chainquery.com/reports/quantum-exposure" }
relatedTerms:
  - address
  - address-clustering
  - address-indexing
  - bip-360
  - chain-analysis
  - dust
  - dust-attack
  - forced-address-reuse
  - fungibility
  - gap-limit
  - hd-wallet-hierarchical-deterministic-wallet
  - nonce-reuse
  - post-quantum-bitcoin
  - public-key-exposure
  - security
  - silent-payments
  - xpub-extended-public-key
liveWidget: ~
---

Address reuse is the practice of receiving multiple payments at the same Bitcoin [address](/glossary/address). It's one of the most common privacy mistakes and one of the easiest to avoid. The whitepaper said so in 2008: "a new key pair should be used for each transaction to keep them from being linked to a common owner."

Why it matters: every Bitcoin transaction is publicly visible on the chain, forever. An address that receives one payment shows up once. An address that receives a hundred payments shows up a hundred times, with every counterparty, amount, and timestamp linked together in plain view. Anyone who knows that address belongs to you - because you posted it on Twitter, used it for a donation page, gave it to one KYC exchange - can now see your entire history through that address.

The fix is trivial: use a fresh address for every incoming payment. Modern [hierarchical deterministic wallets](/glossary/hierarchical-deterministic-wallet) generate new addresses automatically. The same 12 or 24 [seed phrase](/glossary/seed-phrase) words back up thousands of addresses, and a wallet restored from them keeps scanning past the last used address (the [gap limit](/glossary/gap-limit)) until it has found them all; you don't have to track them individually.

Where reuse still happens in practice:

- **Donation addresses on personal sites and Twitter bios.** Convenient, but every donor sees the same address and can correlate. Better alternatives: a [Lightning](/glossary/lightning-network) offer or address (a server mints a fresh invoice each time, so it is as private as that server), [Silent Payments](/glossary/silent-payments) (one reusable code, fresh on-chain addresses), or rotating the static address periodically.
- **Exchange withdrawal addresses.** Some users withdraw repeatedly to the same address. The exchange sees this; chain analysts see it; the address's history is fully exposed.
- **Multi-signature setups** where regenerating addresses is operationally awkward.
- **Reuse you did not choose.** A stranger can pay a few hundred sats to an address you already used ([forced address reuse](/glossary/forced-address-reuse), usually called a [dust attack](/glossary/dust-attack)), betting that your wallet will later spend the crumb together with your real coins and link them. You cannot stop other people paying an address you have published; you can refuse to spend what they send.

If you can't avoid reusing one specific address, at least make it a clearly-public one - your donation address, your business receiving address - that's already understood to be linked to your identity. Don't reuse the same address for personal savings.

The protocol allows reuse. The privacy model doesn't. Treat addresses as one-shot.

Address reuse also has a key-security dimension and a [post-quantum one](/glossary/post-quantum-bitcoin). A P2PKH or P2WPKH address is a hash; the public key behind it stays hidden until the first spend, when the spending transaction publishes it for good. Every later deposit to that same address then sits behind a key the whole world can read ([public key exposure](/glossary/public-key-exposure)), for as long as the coins stay there. One key now guards every payment ever made to the address, so one compromise takes all of them: malware, a stolen backup, a [nonce reuse](/glossary/nonce-reuse) bug (which needs two signatures from the same key, and reuse is what gives one key a second signature), or a future quantum computer.

The order of events matters. Receiving twice at an address that has never spent leaks privacy but not the key; spending once and then receiving again leaks both. By ChainQuery's count, 5,172,596 BTC, about one coin in four, sat at hashed addresses that had already been spent from, so their key was already public (snapshot 2026-10-11, block 970,878).

BIP-360 makes the same point from the other side: protection from long exposure attacks does not wait for post-quantum signatures; it requires that users not expose their keys through reuse. Reuse costs privacy, key security and quantum safety at once, and one habit fixes all three.

See [Privacy on Bitcoin](/rabbit-hole/bitcoin-privacy) for how address reuse feeds the clustering heuristics, and for Silent Payments as the fix for permanent addresses; see the [Quantum and Bitcoin rabbit hole](/rabbit-hole/quantum-and-bitcoin) for what an exposed key does and does not mean, and why nobody should panic-move coins.
