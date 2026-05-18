---
title: "Partially Signed Bitcoin Transaction (PSBT)"
slug: partially-signed-bitcoin-transaction-psbt
draft: false
shortDefinition: "A BIP 174 standard for collaboratively building/signing transactions across multiple devices or cosigners without exposing private keys."
keyTakeaways:
  - "Enables secure multi-step transaction signing workflows"
  - "Prevents direct exposure of private keys in collaborative setups"
  - "Central to modern hardware wallet and multi-sig best practices"
sources: []
relatedTerms:
  - bip-174-psbt
  - green-address
  - hierarchical-multisig
  - interactive-multi-sig
  - m-n
  - musig
  - musig2
  - p2sh-pay-script-hash
  - partial-signature
  - quorum-signatures
  - schnorr-signature
sameAs:
  - "https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki"
  - "https://en.bitcoin.it/wiki/BIP_0174"
  - "https://en.bitcoin.it/wiki/PSBT"
  - "https://bitcoinops.org/en/topics/psbt/"
liveWidget: ~
---

PSBT - **P**artially **S**igned **B**itcoin **T**ransaction - is a standardized format ([BIP-174](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki)) for passing a not-yet-fully-signed transaction between multiple devices or participants. It's the workflow standard that makes modern self-custody actually practical.

The problem PSBT solves: in any non-trivial signing setup, you typically have a device that *knows the wallet state* (which UTXOs exist, which addresses are yours) but doesn't have the [private keys](/glossary/private-key), and a separate device that *has the keys* but doesn't know the wallet state. The unsigned-but-fully-described transaction is the artifact that has to travel between them.

A typical PSBT flow:

1. **A coordinator** (Sparrow, Bitcoin Core, Specter, etc.) builds the [transaction](/glossary/transaction): selects UTXOs, sets the recipient and amount, computes the fee. Exports the result as a PSBT - either a binary file or a base64 string.
2. **The signer** (typically a [hardware wallet](/glossary/hardware-wallet)) receives the PSBT via USB, microSD, QR code, or NFC. The signer displays the transaction details on its trusted screen, the user verifies them, the signer signs and returns the updated PSBT.
3. **If multisig**, repeat step 2 across each cosigner. Each adds their partial signature to the PSBT.
4. **The coordinator** finalizes the PSBT into a fully-formed transaction and broadcasts it.

Why this matters:

- **Air-gapped signing works.** Hardware wallets that never touch a USB cable can sign via QR codes.
- **Multisig is portable.** Cosigners can be different hardware vendors, different software, different jurisdictions, and still cooperate via a standardized file format.
- **No key reuse across devices.** Every signer keeps their key locally; only the partial signature crosses a boundary.

PSBT is the unsung infrastructure of serious self-custody. If your wallet stack uses hardware devices or multisig, it almost certainly uses PSBT under the hood.

See [Hardware Wallet](/glossary/hardware-wallet) for the most common use case, and [Hierarchical Multisig](/glossary/hierarchical-multisig) for the multi-device pattern PSBT enables.
