---
title: "Address Reuse"
slug: address-reuse
draft: false
shortDefinition: "The practice of using the same Bitcoin address multiple times, which can undermine privacy and is generally discouraged."
keyTakeaways:
  - "Makes it easier to trace transactions"
  - "Discouraged because it hurts privacy"
  - "Modern wallets generate fresh addresses by default"
sources: []
relatedTerms:
  - address
  - address-clustering
  - address-indexing
  - chain-analysis
  - dust
  - dust-attack
  - fungibility
  - post-quantum-bitcoin
  - security
liveWidget: ~
---

Address reuse is the practice of receiving multiple payments at the same Bitcoin [address](/glossary/address). It's one of the most common privacy mistakes and one of the easiest to avoid.

Why it matters: every Bitcoin transaction is publicly visible on the chain, forever. An address that receives one payment shows up once. An address that receives a hundred payments shows up a hundred times, with every counterparty, amount, and timestamp linked together in plain view. Anyone who knows that address belongs to you - because you posted it on Twitter, used it for a donation page, gave it to one KYC exchange - can now see your entire history through that address.

The fix is trivial: use a fresh address for every incoming payment. Modern [hierarchical deterministic wallets](/glossary/hierarchical-deterministic-wallet) generate new addresses automatically. The same 12 or 24 [seed phrase](/glossary/seed-phrase) words back up thousands of addresses; you don't have to track them individually.

Where reuse still happens in practice:

- **Donation addresses on personal sites and Twitter bios.** Convenient, but every donor sees the same address and can correlate. Better alternatives: a [Lightning](/glossary/lightning-network) address (instant + private), [Silent Payments](/glossary/silent-payments) (one reusable code, fresh on-chain addresses), or rotating the static address periodically.
- **Exchange withdrawal addresses.** Some users withdraw repeatedly to the same address. The exchange sees this; chain analysts see it; the address's history is fully exposed.
- **Multi-signature setups** where regenerating addresses is operationally awkward.

If you can't avoid reusing one specific address, at least make it a clearly-public one - your donation address, your business receiving address - that's already understood to be linked to your identity. Don't reuse the same address for personal savings.

The protocol allows reuse. The privacy model doesn't. Treat addresses as one-shot.

Address reuse also has a [post-quantum dimension](/glossary/post-quantum-bitcoin). Spending from a P2PKH or P2WPKH address publishes the public key in the spending transaction. Every subsequent deposit to that same address inherits that exposure - and once a sufficiently powerful quantum computer exists, those balances become spendable by anyone. Reuse is therefore both a privacy mistake and a long-horizon security one.
