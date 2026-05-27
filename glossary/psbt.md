---
title: "PSBT (Partially Signed Bitcoin Transaction)"
slug: psbt
draft: false
shortDefinition: "BIP 174 standard format for passing a not-yet-fully-signed transaction between multiple devices or cosigners without exposing private keys. The workflow standard that makes modern self-custody actually practical."
keyTakeaways:
  - "Single binary blob (typically base64-encoded) that carries the unsigned tx skeleton plus per-input UTXO data, derivation paths, and partial signatures"
  - "Enables hardware wallets to sign air-gapped (USB / microSD / QR / NFC) without ever exposing the seed"
  - "Cross-vendor: any BIP-174 wallet can pass a PSBT to any other BIP-174 wallet and finalize it"
  - "PSBT v2 (BIP 370 / BIP 371) adds Taproot support and post-creation tx mutation; modern tooling speaks v2 natively"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - hardware-wallet
  - hierarchical-multisig
  - interactive-multi-sig
  - m-n
  - mono-signature
  - musig
  - musig2
  - partial-signature
  - quorum-signatures
  - schnorr-signature
  - transaction
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0174"
  - "https://en.bitcoin.it/wiki/PSBT"
  - "https://bitcoinops.org/en/topics/psbt/"
liveWidget: ~
---

PSBT - **P**artially **S**igned **B**itcoin **T**ransaction - is a standardized format ([BIP-174](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki), authored by Andrew Chow and merged into Bitcoin Core 0.17 in 2018) for passing a not-yet-fully-signed transaction between multiple devices or cosigners. It is the workflow standard that makes modern self-custody actually practical.

The problem PSBT solves: in any non-trivial signing setup, you typically have a device that *knows the wallet state* (which UTXOs exist, which addresses are yours) but does not have the [private keys](/glossary/private-key), and a separate device that *has the keys* but does not know the wallet state. The unsigned-but-fully-described transaction is the artifact that has to travel between them.

## The format

A PSBT is a single binary blob (typically encoded as a base64 string), sectioned per-input, per-output, plus a global section. It carries:

- The unsigned transaction skeleton
- Per-input UTXO data (so signers can verify amounts independently)
- Derivation paths and pubkeys for each input
- Partial signatures as each cosigner adds them
- BIP 32 master key fingerprints

## A typical PSBT flow

1. **A coordinator** (Sparrow, Bitcoin Core, Specter, Nunchuk, etc.) builds the [transaction](/glossary/transaction): selects UTXOs, sets the recipient and amount, computes the fee. Exports the result as a PSBT - either a binary file or a base64 string.
2. **The signer** (typically a [hardware wallet](/glossary/hardware-wallet)) receives the PSBT via USB, microSD, QR code, or NFC. The signer displays the transaction details on its trusted screen, the user verifies them, the signer signs and returns the updated PSBT.
3. **If multisig**, repeat step 2 across each cosigner. Each adds their partial signature to the appropriate input section and passes it on.
4. **The coordinator** finalizes the PSBT into a fully-formed transaction once enough signatures satisfy each input's script, and broadcasts it.

## Why it matters

- **Air-gapped signing works.** Hardware wallets that never touch a USB cable can sign via QR codes. The seed never touches an internet-connected device.
- **Multisig is portable.** Cosigners can be different hardware vendors, different software, different jurisdictions, and still cooperate via a standardized file format.
- **No key reuse across devices.** Every signer keeps their key locally; only the partial signature crosses a boundary.

## PSBT v2

PSBT v2 (BIP 370 / BIP 371) adds richer [Taproot](/glossary/taproot) support and lets the input and output sets be modified after PSBT creation. Modern tooling (Sparrow, Specter, Nunchuk, BlueWallet, Bitcoin Core, every major hardware wallet) speaks v2 natively.

PSBT is the unsung infrastructure of serious self-custody. If your wallet stack uses hardware devices or multisig, it almost certainly uses PSBT under the hood.

See [Hardware Wallet](/glossary/hardware-wallet) for the most common use case, and [Hierarchical Multisig](/glossary/hierarchical-multisig) for the multi-device pattern PSBT enables.
