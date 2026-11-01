---
title: "Shamir's Secret Sharing"
slug: shamir-secret-sharing
draft: false
updated: "2026-10-13"
shortDefinition: "A cryptographic scheme that splits a secret into N shares such that any threshold M can reconstruct it but fewer cannot."
keyTakeaways:
  - "Standard math for splitting a seed across multiple locations"
  - "Standardized for wallet seeds as SLIP-39, which replaces BIP 39 rather than wrapping it (Trezor supports it natively)"
  - "Not equivalent to multisig - see key-split for the security caveat"
sources:
  - { label: "Adi Shamir - How to Share a Secret, Communications of the ACM 22(11) (1979)", url: "https://web.mit.edu/6.857/OldStuff/Fall03/ref/Shamir-HowToShareASecret.pdf" }
  - { label: "SatoshiLabs - SLIP-0039: Shamir's Secret-Sharing for Mnemonic Codes (2017)", url: "https://github.com/satoshilabs/slips/blob/master/slip-0039.md" }
  - { label: "BIP-39 - Mnemonic code for generating deterministic keys, Related Work: SLIP-0039 proposed by the BIP-39 authors as its intended successor (2013)", url: "https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" }
  - { label: "Trezor - What is Shamir backup? (accessed 2026-10-13)", url: "https://trezor.io/learn/advanced/standards-proposals/what-is-shamir-backup" }
relatedTerms:
  - bitcoin-inheritance-planning
  - key-split
  - multisig
  - seed-phrase
liveWidget: ~
---

Shamir's Secret Sharing (SSS) is the math behind splitting a Bitcoin seed (or any secret) into multiple shares such that any M of N shares can reconstruct it, but any M-1 reveal nothing. Named for cryptographer Adi Shamir, who published the construction in 1979.

In Bitcoin practice, the standard form is SLIP-39, which splits a wallet's BIP 32 master seed into shares written as words from its own 1024-word list. It is not a wrapper around BIP 39: it was proposed by BIP 39's own authors as a successor, and the two are mostly not compatible. Turning an existing 12 or 24 word phrase into SLIP-39 shares is possible only by splitting the derived 512-bit seed, which makes every share 59 words long, and the spec advises moving funds to a fresh SLIP-39 wallet instead. Trezor implements SLIP-39 natively and has made it the default backup type on its Safe devices since 2024. Common configurations: 2-of-3 or 3-of-5 shares distributed across geographic locations or trusted parties.

The full discussion of SSS in Bitcoin - including the crucial caveat that SSS is **not** the same security model as [multisig](/glossary/multisig), because key reconstruction at signing time momentarily holds the full key on one device - lives at [key-split](/glossary/key-split).
