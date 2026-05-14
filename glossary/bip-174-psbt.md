---
title: "BIP 174 (PSBT)"
slug: bip-174-psbt
draft: false
shortDefinition: "Defines Partially Signed Bitcoin Transactions, enabling multi-signer or multi-step transaction workflows."
keyTakeaways:
  - "Enables coordinated signing among multiple parties"
  - "Enhances security by separating signing from creation"
  - "Boosts interoperability across hardware/software wallets"
sources: []
relatedTerms:
  - bip-bitcoin-improvement-proposal
  - bitcoin-core
  - hierarchical-multisig
  - mono-signature
  - partial-signature
  - partially-signed-bitcoin-transaction-psbt
  - psbt
  - transaction
liveWidget: ~
---

BIP 174, authored by Andrew Chow and merged into Bitcoin Core 0.17 (2018), defines the Partially Signed Bitcoin Transaction (PSBT) format. A PSBT is a single binary blob (typically encoded as a base64 string) that captures everything multiple parties or devices need to cooperate on signing a Bitcoin transaction without ever sharing private keys.

The format is sectioned per-input and per-output, plus a global section, carrying:

- The unsigned transaction skeleton
- Per-input UTXO data (so signers can verify amounts independently)
- Derivation paths and pubkeys for each input
- Partial signatures as each cosigner adds them
- BIP 32 master key fingerprints

The typical workflow:

1. A coordinator builds the unsigned PSBT and includes all metadata.
2. The PSBT is handed to each signer (hardware wallet, air-gapped device, remote cosigner) in turn.
3. Each signer adds their partial signature to the appropriate input section and passes it on.
4. Once enough signatures are collected to satisfy each input's script, anyone "finalizes" the PSBT into a fully-signed transaction.
5. The signed transaction is broadcast.

What makes PSBT load-bearing for self-custody:

- **Hardware wallets** receive the PSBT, display the amounts and destinations on their trusted screen, and return the signed PSBT. The seed never touches an internet-connected device.
- **Multisig** uses PSBT to pass the in-progress transaction between cosigners without trusting any single device.
- **Air-gapped signing** moves PSBTs via QR code, microSD card, or printed text. The signing device has no network at any point.

PSBT v2 (BIP 370 / BIP 371) adds richer Taproot support and lets the input and output sets be modified after PSBT creation. Modern tooling (Sparrow, Specter, Nunchuk, BlueWallet, Bitcoin Core, every major hardware wallet) speaks v2 natively.

Spec: [BIP-174](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki).
