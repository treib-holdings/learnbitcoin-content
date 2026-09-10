---
title: "Silent Payments"
slug: silent-payments
draft: false
updated: "2026-09-10"
shortDefinition: "A BIP-352 scheme that lets a receiver publish one reusable payment code while every payment lands at a fresh on-chain address. No notification transaction, no interaction, no address reuse; the cost is that the receiver has to scan the chain."
keyTakeaways:
  - "Specified in BIP-352 by josibake and Ruben Somsen, building on a 2022 bitcoin-dev proposal; the BIP was merged into the repository in May 2024"
  - "The sender derives a unique Taproot output from the receiver's published key and the sender's own input keys, so the public code never appears on the chain and nothing links one payment to the next"
  - "Receiving requires scanning every eligible transaction, which is cheap on a full node and the main obstacle for light wallets; support spread through hardware signers, desktop and mobile wallets, and libsecp256k1 between 2024 and 2026"
sources:
  - { label: "BIP-352 - Silent Payments", url: "https://github.com/bitcoin/bips/blob/master/bip-0352.mediawiki" }
  - { label: "Bitcoin Optech - Silent payments topic", url: "https://bitcoinops.org/en/topics/silent-payments/" }
  - { label: "Bitcoin Optech Newsletter #194 - silent payments proposed (2022)", url: "https://bitcoinops.org/en/newsletters/2022/04/06/#delinked-reusable-addresses" }
  - { label: "silentpayments.xyz - Silent Payments explained", url: "https://silentpayments.xyz/docs/explained/" }
relatedTerms:
  - address-reuse
  - bip-47-payment-codes
  - stealth-address
  - taproot
  - fungibility
  - address-clustering
  - chain-analysis
  - payjoin
liveWidget: ~
---

Silent Payments solve an old Bitcoin problem: how to publish one permanent payment address without every payment to it landing in the same public pile. A donation page, an invoice footer, or a profile link has always meant [address reuse](/glossary/address-reuse), and address reuse hands [chain analysts](/glossary/chain-analysis) a complete history in one place. [BIP-352](https://github.com/bitcoin/bips/blob/master/bip-0352.mediawiki) fixes that at the wallet layer, with no change to Bitcoin's rules.

The receiver publishes a silent payment address, a string beginning `sp1q` that encodes two public keys, one for scanning and one for spending. A sender combines the receiver's scan key with the private keys behind the sender's own transaction inputs to derive a shared secret, and uses that secret to tweak the receiver's spend key into a fresh [Taproot](/glossary/taproot) output that only the receiver can recognize and only the receiver can spend. On the chain it is an ordinary single-use Taproot address. The published `sp1q` code never appears anywhere, and two payments to the same code share nothing an observer can see.

Compared with the earlier attempts at the same idea, two things are new. [BIP-47 payment codes](/glossary/bip-47-payment-codes) needed a one-time on-chain notification transaction that announced the relationship, and older [stealth address](/glossary/stealth-address) designs needed extra data in the transaction. Silent Payments need neither, because the shared secret is derived from keys the sender is already revealing to spend its inputs. That also means a sender cannot use the scheme with inputs whose keys are not exposed, which is why the BIP lists exactly which input types qualify.

The cost sits with the receiver. There is no address to look up, so a receiving wallet has to check every transaction with eligible inputs and Taproot outputs against its scan key. A [full node](/glossary/full-node) does this easily. A light wallet cannot do it without help, which is why light-client support depended on indexing servers and companion proposals, including BIP-375 for sending through PSBTs and BIP-392 for descriptors, that landed between 2025 and 2026.

The idea was proposed on the bitcoin-dev mailing list in March 2022, refined into BIP-352 by josibake and Ruben Somsen, and merged into the BIPs repository in May 2024. Wallet support arrived over the following two years, first on a hardware signer in 2024, then in desktop and mobile wallets through 2025 and 2026, and libsecp256k1 shipped a silent payments module in 2026. As of 2026 it is the most practical answer Bitcoin has to the reusable-address problem, and the only one that needs no interaction between the parties.

See [Privacy on Bitcoin](/rabbit-hole/bitcoin-privacy) for where Silent Payments fit among the defenses.
